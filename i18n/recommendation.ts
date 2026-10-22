import { defaultLocale, normalizeLocale, type Locale } from './config';

/** Prefer the first available browser language, including the current one. */
export function recommendedLocale({ current, saved, languages, available }: {
  current: Locale;
  saved: string | null;
  languages: readonly string[];
  available: readonly Locale[];
}): Locale | null {
  if (saved) {
    const candidate = normalizeLocale(saved);
    return candidate && candidate !== current && available.includes(candidate) ? candidate : null;
  }
  // An explicit non-English URL takes precedence over automatic recommendations.
  if (current !== defaultLocale) return null;
  const candidate = languages.map((language) =>
    normalizeLocale(language) ?? normalizeLocale(language.split('-')[0])
  ).find((locale): locale is Locale => !!locale && available.includes(locale));
  return candidate && candidate !== current ? candidate : null;
}
