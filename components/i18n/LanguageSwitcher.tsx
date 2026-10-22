'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
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
  const disclosure = useRef<HTMLDetailsElement>(null);
  const [suffix, setSuffix] = useState('');
  const [suggestion, setSuggestion] = useState<Locale | null>(null);
  const available = locales.filter((candidate) => paths?.[candidate]?.includes(rest));

  useEffect(() => {
    // The prerendered HTML contains clean, crawlable URLs. Browser-only state
    // enhances those links after hydration, including modified/middle clicks.
    const syncSuffix = () => setSuffix(window.location.search + window.location.hash);
    syncSuffix();
    window.addEventListener('hashchange', syncSuffix);
    window.addEventListener('popstate', syncSuffix);
    try {
      setSuggestion(recommendedLocale({
        current: locale,
        saved: localStorage.getItem('directive-locale'),
        languages: navigator.languages,
        available: locales.filter((candidate) => paths?.[candidate]?.includes(rest)),
      }));
    } catch { /* Storage is optional; URLs remain fully usable. */ }
    return () => {
      window.removeEventListener('hashchange', syncSuffix);
      window.removeEventListener('popstate', syncSuffix);
    };
  }, [locale, paths, rest]);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !disclosure.current?.contains(event.target)) {
        disclosure.current?.removeAttribute('open');
      }
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, []);

  function remember(event: MouseEvent<HTMLAnchorElement>, candidate: Locale) {
    if (event.type === 'auxclick' && event.button !== 1) return;
    try { localStorage.setItem('directive-locale', candidate); } catch { /* optional preference */ }
    event.currentTarget.href = localizeHref(rest, candidate) + window.location.search + window.location.hash;
    disclosure.current?.removeAttribute('open');
    // Keep native anchor behavior: no preventDefault, forced redirects or prefetching nine pages.
  }

  return (
    <div className="relative shrink-0">
      <details ref={disclosure} id="site-language" data-current-locale={locale}
        className="group relative"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) event.currentTarget.removeAttribute('open');
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && disclosure.current?.open) {
            event.preventDefault();
            disclosure.current.removeAttribute('open');
            disclosure.current.querySelector('summary')?.focus();
          }
        }}>
        <summary aria-label={`${messages.languageSwitcher.label}: ${languageNames[locale]}`}
          className="flex min-h-11 max-w-32 cursor-pointer list-none items-center gap-2 rounded-full border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-slate-200 transition-colors hover:border-violet-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 sm:max-w-none [&::-webkit-details-marker]:hidden">
          <svg aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" />
          </svg>
          <span lang={locale} className="min-w-0 truncate">{languageNames[locale]}</span>
          <svg aria-hidden="true" className="h-3 w-3 shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m3 4.5 3 3 3-3" /></svg>
        </summary>
        <nav aria-label={messages.languageSwitcher.label}
          className="absolute right-0 top-full z-50 mt-3 w-64 max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-black/40">
          <p className="px-3 py-2 text-xs font-medium text-slate-400">{messages.languageSwitcher.label}</p>
          <ul className="max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain">
            {locales.map((candidate) => <li key={candidate}>
              {available.includes(candidate) ? (
                <a href={localizeHref(rest, candidate) + suffix} hrefLang={candidate} lang={candidate}
                  data-locale={candidate} aria-current={candidate === locale ? 'page' : undefined}
                  onClick={(event) => remember(event, candidate)} onAuxClick={(event) => remember(event, candidate)}
                  className={`flex min-h-11 items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400 ${candidate === locale ? 'bg-violet-500/15 font-medium text-violet-300' : 'text-slate-200 hover:bg-slate-800 hover:text-white'}`}>
                  <span>{languageNames[candidate]}</span>
                  {candidate === locale && <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m3 8 3 3 7-7" /></svg>}
                </a>
              ) : (
                <span data-locale={candidate} aria-disabled="true" className="flex min-h-11 items-center justify-between gap-3 px-3 py-2.5 text-sm text-slate-500">
                  <span lang={candidate}>{languageNames[candidate]}</span>
                  <span className="text-right text-xs">{messages.languageSwitcher.unavailable}</span>
                </span>
              )}
            </li>)}
          </ul>
        </nav>
      </details>
      {suggestion && (
        <div className="absolute right-0 top-full mt-2 flex rounded-lg border border-violet-500 bg-slate-800 shadow-lg">
          <a href={localizeHref(rest, suggestion) + suffix} hrefLang={suggestion} lang={suggestion}
            onClick={(event) => remember(event, suggestion)}
            className="whitespace-nowrap px-3 py-2 text-sm text-violet-300 focus-visible:outline focus-visible:outline-violet-400">
            {languageNames[suggestion]} →
          </a>
          <button type="button" aria-label={messages.accessibility.dismissLanguage} onClick={() => {
            try { localStorage.setItem('directive-locale', locale); } catch {}
            setSuggestion(null);
          }} className="px-3 text-slate-300">×</button>
        </div>
      )}
    </div>
  );
}
