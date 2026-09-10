export const locales = ['en', 'es', 'zh-hant'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

// Statically prerendered pages report the internal path (e.g. "/en/trophies"
// for the unprefixed English URL), while the browser reports the public URL
// (e.g. "/trophies"). Both resolve to the same locale.
export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split('/')[1];
  return isLocale(first) ? first : defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const first = pathname.split('/')[1];
  if (!isLocale(first)) return pathname;
  const rest = pathname.slice(first.length + 1);
  if (rest === '' || rest === '/') return '/';
  return rest.startsWith('/') ? rest : `/${rest}`;
}

export function localizeHref(href: string, locale: Locale): string {
  if (locale === defaultLocale) return href;
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  return href === '/' ? `/${locale}` : `/${locale}${href}`;
}

export function hreflangTag(locale: Locale): string {
  const [primary, ...rest] = locale.split('-');
  return [primary, ...rest.map((part) => part.charAt(0).toUpperCase() + part.slice(1))].join('-');
}
