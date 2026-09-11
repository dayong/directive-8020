'use client';

import type { ComponentProps, ComponentPropsWithoutRef } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { defaultLocale, localeFromPathname, localizeHref } from '@/i18n/config';
import { useTranslatedPaths } from '@/components/i18n/LocalePaths';

type Props = ComponentProps<typeof NextLink> & { href: string };

// For MDX, which types link components with an optional href.
export function MdxLink({ href, ...rest }: ComponentPropsWithoutRef<'a'>) {
  return <LocaleLink href={href ?? '#'} {...rest} />;
}

export default function LocaleLink({ href, ...rest }: Props) {
  const pathname = usePathname();
  const translatedPaths = useTranslatedPaths();
  const locale = localeFromPathname(pathname);

  let target = href;
  if (locale !== defaultLocale) {
    const base = href.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
    // Without a provider (e.g. component rendered outside [locale]) keep the
    // previous behavior and prefix everything.
    if (translatedPaths === null || translatedPaths.has(base)) {
      target = localizeHref(href, locale);
    }
  }

  return <NextLink href={target} {...rest} />;
}
