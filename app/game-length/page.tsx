import Link from 'next/link';
import { episodes } from '@/data/episodes';
import { CtaSection } from '@/components/content/CtaSection';
import { FaqSection } from '@/components/content/FaqSection';
import { HeroSection } from '@/components/content/HeroSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPageContent } from '@/lib/content';
import { buildFaqSchema, buildPageMetadata } from '@/lib/page-seo';
import type { GameLengthContent, LengthCardTone } from '@/types/content-pages';

const SLUG = 'game-length';

const content: GameLengthContent = (() => {
  const c = getPageContent<GameLengthContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);
const faqSchema = buildFaqSchema(content.faqs);

const cardClasses: Record<LengthCardTone, { border: string; label: string }> = {
  main: { border: 'border-slate-700', label: 'text-slate-500' },
  endings: { border: 'border-violet-700', label: 'text-violet-400' },
  completion: { border: 'border-amber-700', label: 'text-amber-400' },
};

export default function GameLengthPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <HeroSection hero={content.hero} />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {content.summaryCards.cards.map((card, i) => (
            <div key={i} className={`bg-slate-800/50 border ${cardClasses[card.tone].border} rounded-lg p-6 text-center`}>
              <div className="text-3xl mb-2">{card.icon}</div>
              <p className={`text-xs ${cardClasses[card.tone].label} uppercase tracking-wide mb-1`}>{card.label}</p>
              <p className="text-3xl font-bold text-white">{card.value}</p>
              <p className="text-slate-400 text-sm">{card.unit}</p>
            </div>
          ))}
        </div>

        {/* Episode Breakdown */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">{content.episodeTable.heading}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  {content.episodeTable.headers.map((header, i) => (
                    <th key={i} className={`py-3 text-slate-400 font-medium ${i < content.episodeTable.headers.length - 1 ? 'pr-4' : ''}`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {episodes.map((ep) => (
                  <tr key={ep.id} className="border-b border-slate-800 hover:bg-slate-800/30">
                    <td className="py-3 pr-4 font-medium">{ep.number}</td>
                    <td className="py-3 pr-4">
                      <Link href={`/walkthrough/${ep.slug}`} className="text-violet-400 hover:underline">
                        {ep.title}
                      </Link>
                    </td>
                    <td className="py-3">{ep.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What Affects Length */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">{content.affectsLength.heading}</h2>
          <ul className="space-y-3 text-slate-300">
            {content.affectsLength.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-violet-400 font-bold shrink-0">{item.term}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <FaqSection heading={content.faqHeading} faqs={content.faqs} />

        <CtaSection cta={content.cta} />
      </div>
    </>
  );
}
