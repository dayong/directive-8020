'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { languageNames, locales, localizeHref, stripLocalePrefix, type Locale } from '@/i18n/config';
import { usePathsByLocale } from './LocalePaths';
import { useMessages } from './Messages';
import { recommendedLocale } from '@/i18n/recommendation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale, messages } = useMessages();
  const paths = usePathsByLocale();
  const rest = stripLocalePrefix(pathname);
  const [suggestion, setSuggestion] = useState<Locale | null>(null);
  const available = locales.filter((candidate) => paths?.[candidate]?.includes(rest));
  useEffect(() => {
    try {
      // Recommendations never redirect, and an explicit URL always wins.
      setSuggestion(recommendedLocale({
        current: locale,
        saved: localStorage.getItem('directive-locale'),
        languages: navigator.languages,
        available: locales.filter((candidate) => paths?.[candidate]?.includes(rest)),
      }));
    } catch { /* Storage may be disabled. URL-based rendering still works. */ }
  }, [locale, paths, rest]);

  function select(candidate: Locale) {
    try { localStorage.setItem('directive-locale', candidate); } catch { /* optional preference */ }
    window.location.assign(localizeHref(rest, candidate) + window.location.search + window.location.hash);
  }
  return (
    <div className="relative">
      <label className="sr-only" htmlFor="site-language">{messages.languageSwitcher.label}</label>
      <select
        id="site-language"
        value={locale}
        onChange={(event) => select(event.target.value as Locale)}
        className="max-w-40 rounded-lg border border-slate-700 bg-slate-800 px-2 py-2 text-xs text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400"
      >
        {locales.map((candidate) => (
          <option key={candidate} value={candidate} lang={candidate} disabled={!available.includes(candidate)}>
            {languageNames[candidate]}
          </option>
        ))}
      </select>
      {suggestion && (
        <div className="absolute right-0 top-full mt-2 flex rounded-lg border border-violet-500 bg-slate-800">
        <button type="button" lang={suggestion} onClick={() => select(suggestion)}
          className="whitespace-nowrap px-3 py-2 text-sm text-violet-300">
          {languageNames[suggestion]} →
        </button>
        <button type="button" aria-label={messages.accessibility.dismissLanguage} onClick={() => {
          try { localStorage.setItem('directive-locale', locale); } catch {}
          setSuggestion(null);
        }} className="px-3 text-slate-300">×</button>
        </div>
      )}
    </div>
  );
}
