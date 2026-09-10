import { CtaSection } from '@/components/content/CtaSection';
import { FaqSection } from '@/components/content/FaqSection';
import { HeroSection } from '@/components/content/HeroSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { RichText } from '@/components/ui/RichText';
import { getPageContent } from '@/lib/content';
import { buildFaqSchema, buildPageMetadata } from '@/lib/page-seo';
import type { ShootWilliamsContent, Tone } from '@/types/content-pages';

const SLUG = 'shoot-williams-or-stand-down';

const content: ShootWilliamsContent = (() => {
  const c = getPageContent<ShootWilliamsContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);
const faqSchema = buildFaqSchema(content.faqs);

const toneStyles: Record<Tone, { card: string; accent: string }> = {
  good: { card: 'border-green-500 bg-green-900/20', accent: 'text-green-400' },
  bad: { card: 'border-red-500 bg-red-900/20', accent: 'text-red-400' },
  neutral: { card: 'border-slate-600 bg-slate-800/50', accent: 'text-slate-400' },
};

export default function ShootWilliamsPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <HeroSection hero={content.hero} />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* The Three Options */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            {content.options.heading}
          </h2>
          <div className="space-y-4">
            {content.options.cards.map((card, i) => {
              const style = toneStyles[card.tone];
              return (
                <div key={i} className={`border-l-4 rounded-r-lg p-4 ${style.card}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`font-bold text-sm ${style.accent}`}>{card.badge}</span>
                    <span className="text-slate-200 font-medium">{card.title}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">
                    {card.body}
                  </p>
                  {card.chain && (
                    <p className="text-amber-400 text-xs">
                      <RichText text={card.chain} />
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Scene Context (spoilers collapsed but crawlable) */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            {content.sceneContext.heading}
          </h2>
          <details className="border border-amber-600/50 rounded-lg bg-amber-900/10 group">
            <summary className="px-4 py-3 cursor-pointer text-amber-300 font-medium hover:text-amber-200 transition-colors marker:text-amber-400">
              {content.sceneContext.summary}
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-300 space-y-3">
              {content.sceneContext.paragraphs.map((p, i) => (
                <p key={i}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </details>
        </section>

        {/* A or B — explicit outcomes */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            {content.outcomes.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.outcomes.columns.map((col, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                <h3 className={`font-bold mb-2 ${toneStyles[col.tone].accent}`}>
                  {col.heading}
                </h3>
                <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                  {col.items.map((item, j) => (
                    <li key={j}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-400 mt-4">
            {content.outcomes.outro}
          </p>
        </section>

        <FaqSection heading={content.faqHeading} faqs={content.faqs} />
        <CtaSection cta={content.cta} />
      </div>
    </>
  );
}
