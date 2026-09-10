import { CtaSection } from '@/components/content/CtaSection';
import { HeroSection } from '@/components/content/HeroSection';
import { SectionBlocks } from '@/components/content/SectionBlocks';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPageContent } from '@/lib/content';
import { buildFaqSchema, buildPageMetadata } from '@/lib/page-seo';
import type { MultiplayerContent, SummaryCardTone } from '@/types/content-pages';

const SLUG = 'multiplayer';

const content: MultiplayerContent = (() => {
  const c = getPageContent<MultiplayerContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);
const faqSchema = buildFaqSchema(content.faqs);

const valueTones: Record<SummaryCardTone, string> = {
  yes: 'text-white',
  no: 'text-red-400',
  later: 'text-amber-400',
};

export default function MultiplayerPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <HeroSection hero={content.hero} />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 mdx-content">

        {/* Quick Answer Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
          {content.summaryCards.cards.map((card, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">{card.icon}</div>
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{card.label}</p>
              <p className={`text-3xl font-bold ${valueTones[card.tone]}`}>{card.value}</p>
              <p className="text-slate-400 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Q&A Sections */}
        {content.sections.map((section, i) => (
          <section key={i}>
            <h2>{section.heading}</h2>
            <SectionBlocks blocks={section.blocks} />
          </section>
        ))}

        <CtaSection cta={content.cta} />
      </div>
    </>
  );
}
