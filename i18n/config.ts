export const locales = ['en', 'zh-CN', 'zh-TW', 'ja', 'ko', 'es', 'fr', 'de', 'pt-BR'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const languageNames: Record<Locale, string> = {
  en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語',
  ko: '한국어', es: 'Español', fr: 'Français', de: 'Deutsch', 'pt-BR': 'Português do Brasil',
};
export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}
/** Canonical casing and legacy aliases share one permanent redirect policy. */
export function normalizeLocale(value: string): Locale | undefined {
  const lower = value.toLowerCase();
  if (['zh-hant', 'zh-hk', 'zh-hant-tw', 'zh-hant-hk'].includes(lower)) return 'zh-TW';
  if (['zh', 'zh-hans', 'zh-hans-cn', 'zh-sg'].includes(lower)) return 'zh-CN';
  if (lower === 'pt') return 'pt-BR';
  return locales.find((locale) => locale.toLowerCase() === lower);
}
export function localeFromPathname(pathname: string): Locale {
  return normalizeLocale(pathname.split('/')[1] ?? '') ?? defaultLocale;
}
export function stripLocalePrefix(pathname: string): string {
  const first = pathname.split('/')[1];
  return normalizeLocale(first ?? '') ? pathname.slice(first.length + 1) || '/' : pathname;
}
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  const [, pathname, suffix] = href.match(/^([^?#]*)(.*)$/)!;
  const path = stripLocalePrefix(pathname);
  if (locale === defaultLocale) return path + suffix;
  return `/${locale}${path === '/' ? '' : path}${suffix}`;
}
export function hreflangTag(locale: Locale): string { return locale; }

/** Open Graph requires language_TERRITORY codes, unlike BCP 47 hreflang tags. */
export const openGraphLocales: Record<Locale, string> = {
  en: 'en_US', 'zh-CN': 'zh_CN', 'zh-TW': 'zh_TW', ja: 'ja_JP', ko: 'ko_KR',
  es: 'es_ES', fr: 'fr_FR', de: 'de_DE', 'pt-BR': 'pt_BR',
};
