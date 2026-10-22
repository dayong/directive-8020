'use client';

import { createContext, useContext } from 'react';
import type { UiStrings } from '@/i18n/ui';
import type { Locale } from '@/i18n/config';

const Context = createContext<{ locale: Locale; messages: UiStrings; labels: Record<string, string> } | null>(null);
export function MessagesProvider({ locale, messages, labels, children }: {
  locale: Locale; messages: UiStrings; labels: Record<string, string>; children: React.ReactNode;
}) {
  return <Context.Provider value={{ locale, messages, labels }}>{children}</Context.Provider>;
}
export function useMessages() {
  const context = useContext(Context);
  if (!context) throw new Error('MessagesProvider is required');
  return context;
}
