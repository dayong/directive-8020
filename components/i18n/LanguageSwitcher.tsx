'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  defaultLocale,
  hreflangTag,
  locales,
  localeFromPathname,
  localizeHref,
  stripLocalePrefix,
  type Locale,
} from '@/i18n/config';
import { usePathsByLocale } from '@/components/i18n/LocalePaths';
import { uiStrings } from '@/i18n/ui';

// Language names are shown in their own language, as is conventional for
// language switchers; the header itself stays compact with short codes.
const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  'zh-hant': '繁體中文',
};

const languageCodes: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  'zh-hant': 'ZH',
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const pathsByLocale = usePathsByLocale();
  const locale = localeFromPathname(pathname);
  const rest = stripLocalePrefix(pathname);
  const label = uiStrings[locale].languageSwitcher.label;

  // Locales that have any translated content; English always qualifies.
  const available = locales.filter(
    (candidate) => candidate === defaultLocale || (pathsByLocale?.[candidate]?.length ?? 0) > 0
  );
  if (available.length < 2) return null;

  return (
    <nav
      aria-label={label}
      className="flex items-center gap-0.5 rounded-lg border border-slate-800 bg-slate-800/40 p-0.5"
    >
      {available.map((candidate) => {
        const name = languageNames[candidate];
        if (candidate === locale) {
          return (
            <span
              key={candidate}
              aria-current="true"
              lang={hreflangTag(candidate)}
              className="rounded-md bg-slate-700 px-2 py-1 text-xs font-semibold text-slate-100"
            >
              {languageCodes[candidate]}
            </span>
          );
        }
        const href =
          candidate === defaultLocale
            ? rest
            : pathsByLocale?.[candidate]?.includes(rest)
              ? localizeHref(rest, candidate)
              : `/${candidate}`;
        return (
          <Link
            key={candidate}
            href={href}
            hrefLang={hreflangTag(candidate)}
            lang={hreflangTag(candidate)}
            title={name}
            aria-label={name}
            className="rounded-md px-2 py-1 text-xs font-semibold text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-violet-400"
          >
            {languageCodes[candidate]}
          </Link>
        );
      })}
    </nav>
  );
}
