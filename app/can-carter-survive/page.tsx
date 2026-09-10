import { CtaSection } from '@/components/content/CtaSection';
import { FaqSection } from '@/components/content/FaqSection';
import { HeroSection } from '@/components/content/HeroSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { RichText } from '@/components/ui/RichText';
import { getPageContent } from '@/lib/content';
import { buildFaqSchema, buildPageMetadata } from '@/lib/page-seo';
import type { CanCarterSurviveContent } from '@/types/content-pages';

const SLUG = 'can-carter-survive';
const SAVEABLE = ['Osmond', 'Stafford', 'Eisele', 'Cernan', 'Cooper'];

const content: CanCarterSurviveContent = (() => {
  const c = getPageContent<CanCarterSurviveContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);
const faqSchema = buildFaqSchema(content.faqs);

export default function CanCarterSurvivePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <HeroSection hero={content.hero} />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* The Straight Answer */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            {content.straightAnswer.heading}
          </h2>
          <div className="bg-red-900/30 border-2 border-red-600 rounded-lg p-6">
            <p className="text-slate-200">
              <RichText text={content.straightAnswer.callout} />
            </p>
          </div>
        </section>

        {/* Why it feels like your fault */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            {content.whyGuilt.heading}
          </h2>
          <p className="text-slate-300">
            <RichText text={content.whyGuilt.paragraph} />
          </p>
        </section>

        {/* What happens (spoilers collapsed but crawlable) */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            {content.whatHappens.heading}
          </h2>
          <details className="border border-amber-600/50 rounded-lg bg-amber-900/10 group">
            <summary className="px-4 py-3 cursor-pointer text-amber-300 font-medium hover:text-amber-200 transition-colors marker:text-amber-400">
              {content.whatHappens.summary}
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-300 space-y-3">
              {content.whatHappens.paragraphs.map((p, i) => (
                <p key={i}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </details>
        </section>

        {/* Who you CAN save */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            {content.canSave.heading}
          </h2>
          <p className="text-slate-300 mb-4">
            {content.canSave.intro}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            {SAVEABLE.map((name) => (
              <div
                key={name}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-3"
              >
                <p className="text-sm font-medium text-slate-200">{name}</p>
                <p className="text-xs text-green-400 font-bold">{content.canSave.badge}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-400 mt-4">
            <RichText text={content.canSave.footnote} />
          </p>
        </section>

        <FaqSection heading={content.faqHeading} faqs={content.faqs} />
        <CtaSection cta={content.cta} />
      </div>
    </>
  );
}
