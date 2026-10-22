type Dictionary = { [key: string]: string | string[] | Dictionary };

/** Compare leaf keys and interpolation tokens before allowing a locale to publish. */
export function missingMessages(reference: Dictionary, translation: Dictionary, prefix = ''): string[] {
  return Object.entries(reference).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const translated = translation[key];
    if (typeof value === 'object' && !Array.isArray(value)) {
      return translated && typeof translated === 'object' && !Array.isArray(translated)
        ? missingMessages(value, translated, fullKey) : [fullKey];
    }
    if (typeof value !== typeof translated || (typeof translated === 'string' && !translated.trim())) return [fullKey];
    if (Array.isArray(value)) return Array.isArray(translated) && translated.length ? [] : [fullKey];
    const tokens = (text: string) => [...text.matchAll(/\{\w+\}|%s/g)].map((match) => match[0]).sort().join('|');
    return tokens(value) === tokens(translated as string) ? [] : [fullKey];
  });
}
