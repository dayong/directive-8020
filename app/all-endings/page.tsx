import EndingCard from '@/components/ui/EndingCard';
import { CtaSection } from '@/components/content/CtaSection';
import { HeroSection } from '@/components/content/HeroSection';
import { endings, trueEnding } from '@/data/endings';
import { getPageContent } from '@/lib/content';
import { buildPageMetadata } from '@/lib/page-seo';
import type { AllEndingsContent } from '@/types/content-pages';

const SLUG = 'all-endings';

const content: AllEndingsContent = (() => {
  const c = getPageContent<AllEndingsContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);

const otherEndings = endings.filter((e) => !e.isTrueEnding);

export default function AllEndingsPage() {
  return (
    <>
      <HeroSection hero={content.hero} glow="amber" />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* True Ending — featured */}
        {trueEnding && (
          <section>
            <div className="p-6 rounded-lg border-2 border-amber-500 bg-amber-500/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-amber-400 text-2xl">★</span>
                <h2 className="text-2xl font-bold text-amber-400">
                  {content.trueEndingBox.headingFormat.replace('{name}', trueEnding.name)}
                </h2>
              </div>
              <p className="text-slate-300 mb-4">{trueEnding.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-slate-400 mb-1">{content.trueEndingBox.requirementsLabel}</p>
                  <p className="text-slate-200">{trueEnding.condition}</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-slate-400 mb-1">{content.trueEndingBox.survivorsLabel}</p>
                  <p className="text-green-400 font-bold">
                    {content.trueEndingBox.aliveFormat.replace('{count}', String(trueEnding.survivorCount))}
                  </p>
                </div>
              </div>

              {trueEnding.turningPoint && (
                <div className="mt-4 bg-amber-900/20 border border-amber-700 rounded-lg p-3">
                  <p className="text-amber-400 text-sm font-medium">
                    {content.trueEndingBox.missedFormat.replace('{tp}', trueEnding.turningPoint)}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Endings summary table */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">
            {content.overview.heading}
          </h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  {content.overview.headers.map((header, i) => (
                    <th key={i} className={`py-3 text-slate-400 font-medium ${i < content.overview.headers.length - 1 ? 'pr-4' : ''}`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {endings.map((ending) => (
                  <tr
                    key={ending.id}
                    className={`border-b border-slate-800 ${
                      ending.isTrueEnding
                        ? 'bg-amber-500/5'
                        : 'hover:bg-slate-800/30'
                    }`}
                  >
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        {ending.isTrueEnding && (
                          <span className="text-amber-400">★</span>
                        )}
                        <span
                          className={
                            ending.isTrueEnding
                              ? 'text-amber-300 font-medium'
                              : 'text-slate-200'
                          }
                        >
                          {ending.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 pr-4">{ending.survivorCount}</td>
                    <td className="py-3 pr-4 text-slate-400 text-xs leading-relaxed max-w-xs">
                      {ending.condition}
                    </td>
                    <td className="py-3 text-xs text-violet-400">
                      {ending.turningPoint || 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* All endings detail cards */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">
            {content.detailedHeading}
          </h2>
          <div className="space-y-4">
            {otherEndings.map((ending) => (
              <EndingCard key={ending.id} ending={ending} />
            ))}
          </div>
        </section>

        <CtaSection cta={content.cta} />
      </div>
    </>
  );
}
