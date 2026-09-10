import { CtaSection } from '@/components/content/CtaSection';
import { FaqSection } from '@/components/content/FaqSection';
import { HeroSection } from '@/components/content/HeroSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { RichText } from '@/components/ui/RichText';
import { getPageContent } from '@/lib/content';
import { buildFaqSchema, buildPageMetadata } from '@/lib/page-seo';
import type { SkillChecksContent } from '@/types/content-pages';

const SLUG = 'directive-8020-skill-checks';

const content: SkillChecksContent = (() => {
  const c = getPageContent<SkillChecksContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);
const faqSchema = buildFaqSchema(content.faqs);

const cardStyles = [
  { card: 'border-cyan-500 bg-cyan-900/20', label: 'text-cyan-400' },
  { card: 'border-emerald-500 bg-emerald-900/20', label: 'text-emerald-400' },
  { card: 'border-violet-500 bg-violet-900/20', label: 'text-violet-400' },
];

export default function SkillChecksPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <HeroSection hero={content.hero} />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* The Short Answer */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            {content.introSection.heading}
          </h2>
          {content.introSection.paragraphs.map((p, i) => (
            <p
              key={i}
              className={i < content.introSection.paragraphs.length - 1 ? 'text-slate-400 mb-4' : 'text-slate-400'}
            >
              <RichText text={p} />
            </p>
          ))}
        </section>

        {/* Three Check Types */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            {content.checkTypes.heading}
          </h2>
          <div className="space-y-4">
            {content.checkTypes.cards.map((card, i) => {
              const style = cardStyles[i % cardStyles.length];
              return (
                <div key={i} className={`border-l-4 rounded-r-lg p-4 ${style.card}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`font-bold text-sm ${style.label}`}>{card.label}</span>
                    <span className="text-slate-200 font-medium">{card.title}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">
                    <RichText text={card.body} />
                  </p>
                  <p className="text-amber-400 text-xs">
                    <RichText text={card.tip} />
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Real checks table */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            {content.realChecks.heading}
          </h2>
          <p className="text-slate-400 mb-6">
            {content.realChecks.intro}
          </p>
          <div className="overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-800/80 text-slate-300">
                  {content.realChecks.headers.map((h, i) => (
                    <th key={i} className={`px-4 py-3 font-semibold ${i === 0 ? 'whitespace-nowrap' : ''}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-slate-400 divide-y divide-slate-800">
                {content.realChecks.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-3 ${j === 0 ? 'whitespace-nowrap text-slate-200' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why earlier choices matter */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            {content.whyEarlier.heading}
          </h2>
          <p className="text-slate-400 mb-4">
            {content.whyEarlier.intro}
          </p>
          <ul className="text-sm text-slate-300 space-y-3 list-disc list-inside">
            {content.whyEarlier.items.map((item, i) => (
              <li key={i}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
          <p className="text-slate-400 mt-4">
            <RichText text={content.whyEarlier.outro} />
          </p>
        </section>

        <FaqSection heading={content.faqHeading} faqs={content.faqs} />
        <CtaSection cta={content.cta} />
      </div>
    </>
  );
}
