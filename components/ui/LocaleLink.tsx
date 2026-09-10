'use client';

import type { ComponentProps } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { localeFromPathname, localizeHref } from '@/i18n/config';

type Props = ComponentProps<typeof NextLink> & { href: string };

export default function LocaleLink({ href, ...rest }: Props) {
  const pathname = usePathname();
  return <NextLink href={localizeHref(href, localeFromPathname(pathname))} {...rest} />;
}
