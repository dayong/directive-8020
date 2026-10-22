'use client';

import Link from 'next/link';
import { useMessages } from '@/components/i18n/Messages';
import { localizeHref } from '@/i18n/config';

export default function NotFound() {
  const { locale, messages: { errors } } = useMessages();
  return <section className="max-w-3xl mx-auto px-4 py-20 text-center">
    <h1 className="text-3xl font-bold mb-4">{errors.notFoundTitle}</h1>
    <p className="text-slate-300 mb-8">{errors.notFoundBody}</p>
    <Link href={localizeHref('/', locale)} className="inline-block rounded-lg bg-violet-600 px-6 py-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300">
      {errors.home}
    </Link>
  </section>;
}
