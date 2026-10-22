import { RichText } from '@/components/ui/RichText';
import type { Locale } from '@/i18n/config';
import type { ContentReview as Review } from '@/lib/content';
import { getUiStrings } from '@/i18n/ui';

export function ReviewSources({ review, locale }: { review: Review; locale: Locale }) {
  return (
    <aside className="max-w-4xl mx-auto px-4 py-6 text-sm text-slate-400">
      <p className="font-semibold mb-2">{getUiStrings(locale).accessibility.officialSource}</p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {review.sources.map((source) => <li key={source.url}>
          <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-violet-400 underline">{source.label}</a>
        </li>)}
      </ul>
    </aside>
  );
}
export function ReviewNotice({ review }: { review: Review }) {
  if (!review.notice) return null;
  return <aside role="note" className="max-w-4xl mx-auto px-4 pt-6">
    <p className="rounded-lg border border-amber-700 bg-amber-900/20 p-4 text-sm text-amber-200">{review.notice}</p>
  </aside>;
}
export function ReviewReplacement({ review, locale }: { review: Review; locale: Locale }) {
  if (!review.replacement) return null;
  const { heading, intro, sections } = review.replacement;
  return <article className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6">{heading}</h1>
    <p className="text-slate-300 mb-8">{intro}</p>
    {sections.map((section) => <section key={section.heading} className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
      <p className="text-slate-300"><RichText text={section.text} /></p>
    </section>)}
    <ReviewSources review={review} locale={locale} />
  </article>;
}
