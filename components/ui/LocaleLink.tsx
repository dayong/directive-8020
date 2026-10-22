'use client';

import type { ComponentProps, ComponentPropsWithoutRef } from 'react';
import NextLink from 'next/link';
import { useMessages } from '@/components/i18n/Messages';
import { defaultLocale, localizeHref } from '@/i18n/config';
import { usePathsByLocale } from '@/components/i18n/LocalePaths';

type Props = ComponentProps<typeof NextLink> & { href: string };

// For MDX, which types link components with an optional href.
export function MdxLink({ href, ...rest }: ComponentPropsWithoutRef<'a'>) {
  return <LocaleLink href={href ?? '#'} {...rest} />;
}

export default function LocaleLink({ href, ...rest }: Props) {
  const { locale, messages } = useMessages();
  const pathsByLocale = usePathsByLocale();
  const translatedPaths = pathsByLocale?.[locale] ?? null;

  let target = href;
  if (locale !== defaultLocale) {
    const base = href.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
    // Without a provider (e.g. component rendered outside [locale]) keep the
    // previous behavior and prefix everything.
    if (translatedPaths === null || translatedPaths.includes(base)) {
      target = localizeHref(href, locale);
    }
  }

  const englishFallback = locale !== defaultLocale && target === href && href.startsWith('/') && !href.startsWith('//');
  return <NextLink href={target} hrefLang={englishFallback ? 'en' : undefined}
    title={englishFallback ? messages.accessibility.fallbackLanguage : undefined} {...rest} />;
}
