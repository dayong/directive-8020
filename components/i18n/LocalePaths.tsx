'use client';

import { createContext, useContext } from 'react';

// Paths (unprefixed, without hash/query) that exist in the locale of the
// current page. LocaleLink uses this to keep pointing at English URLs for
// pages that have no translation yet instead of linking to a 404.
const TranslatedPathsContext = createContext<ReadonlySet<string> | null>(null);

export function LocalePathProvider({
  paths,
  children,
}: {
  paths: string[];
  children: React.ReactNode;
}) {
  return (
    <TranslatedPathsContext.Provider value={new Set(paths)}>
      {children}
    </TranslatedPathsContext.Provider>
  );
}

export function useTranslatedPaths(): ReadonlySet<string> | null {
  return useContext(TranslatedPathsContext);
}
