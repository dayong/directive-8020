import { RichText } from '@/components/ui/RichText';
import type { FaqItem } from '@/types/content-pages';

export function FaqSection({ heading, faqs }: { heading: string; faqs: FaqItem[] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-100 mb-6">
        {heading}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="border border-slate-700 rounded-lg bg-slate-800/50 group"
          >
            <summary className="px-4 py-3 cursor-pointer text-slate-200 font-medium hover:text-violet-400 transition-colors marker:text-violet-400">
              {faq.q}
            </summary>
            <p className="px-4 pb-4 text-sm text-slate-400">
              <RichText text={faq.a} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
