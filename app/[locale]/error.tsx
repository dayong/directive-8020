'use client';

import { useMessages } from '@/components/i18n/Messages';

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { messages: { errors } } = useMessages();
  return <section className="max-w-3xl mx-auto px-4 py-20 text-center">
    <h1 className="text-3xl font-bold mb-4">{errors.loadTitle}</h1>
    <p className="text-slate-300 mb-8">{errors.loadBody}</p>
    <button type="button" onClick={reset} className="rounded-lg bg-violet-600 px-6 py-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300">
      {errors.retry}
    </button>
  </section>;
}
