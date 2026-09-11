'use client';

import { createContext, useContext } from 'react';
import type { Locale } from '@/i18n/config';

// Unprefixed paths (without hash/query) that exist in each locale. LocaleLink
// uses this to keep pointing at English URLs for pages that have no
// translation yet instead of linking to a 404; LanguageSwitcher uses the same
// map to link the current page to its counterpart in another locale.
const TranslatedPathsContext = createContext<Record<Locale, string[]> | null>(null);

export function LocalePathProvider({
  pathsByLocale,
  children,
}: {
  pathsByLocale: Record<Locale, string[]>;
  children: React.ReactNode;
}) {
  return (
    <TranslatedPathsContext.Provider value={pathsByLocale}>{children}</TranslatedPathsContext.Provider>
  );
}

export function usePathsByLocale(): Record<Locale, string[]> | null {
  return useContext(TranslatedPathsContext);
}
