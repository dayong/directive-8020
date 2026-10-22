import type { Locale } from './config';

/** No extra formatting runtime: Intl uses each locale's CLDR plural/date/number rules. */
export function formatNumber(locale: Locale, value: number, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat(locale, options).format(value);
}
export function formatDate(locale: Locale, value: Date | number, options?: Intl.DateTimeFormatOptions) {
  // Explicit time zone makes static HTML independent of the build server's zone.
  return new Intl.DateTimeFormat(locale, { timeZone: 'UTC', ...options }).format(value);
}
export function interpolate(message: string, values: Record<string, string | number>) {
  return message.replace(/\{(\w+)\}/g, (placeholder, key: string) => {
    if (!(key in values)) {
      if (process.env.NODE_ENV !== 'production') throw new Error(`Missing interpolation: ${key}`);
      return placeholder;
    }
    return String(values[key]);
  });
}
export function formatPlural(locale: Locale, count: number,
  forms: Partial<Record<Intl.LDMLPluralRule, string>> & { other: string }) {
  const category = new Intl.PluralRules(locale).select(count);
  return interpolate(forms[category] ?? forms.other, { count: formatNumber(locale, count) });
}
