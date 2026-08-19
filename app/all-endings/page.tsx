import type { Metadata } from 'next';
import EndingCard from '@/components/ui/EndingCard';
import { endings, trueEnding } from '@/data/endings';

export const metadata: Metadata = {
  title: 'All Endings in Directive 8020 | How to Unlock Every Ending',
  description:
    'Complete guide to all 10 endings in Directive 8020. Learn how to unlock each ending, survival requirements, and the best Turning Points to revisit.',
  openGraph: {
    title: 'All Endings in Directive 8020 | Complete Ending Guide',
    description:
      'Complete guide to all 10 endings in Directive 8020. True ending, bad endings, and everything in between.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

const otherEndings = endings.filter((e) => !e.isTrueEnding);

export default function AllEndingsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-slate-900 to-slate-900 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            All Endings in Directive 8020
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Directive 8020 has 10 possible endings. Here&apos;s how to unlock
            every single one, the requirements for each, and where to go back
            if you missed a critical choice. Replaying a Turning Point? The{' '}
            <a href="/walkthrough" className="text-violet-400 hover:underline">
              full walkthrough
            </a>{' '}
            covers every scene episode by episode.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* True Ending — featured */}
        {trueEnding && (
          <section>
            <div className="p-6 rounded-lg border-2 border-amber-500 bg-amber-500/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-amber-400 text-2xl">★</span>
                <h2 className="text-2xl font-bold text-amber-400">
                  Best Ending — {trueEnding.name}
                </h2>
              </div>
              <p className="text-slate-300 mb-4">{trueEnding.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-slate-400 mb-1">Requirements</p>
                  <p className="text-slate-200">{trueEnding.condition}</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-slate-400 mb-1">Survivors</p>
                  <p className="text-green-400 font-bold">
                    {trueEnding.survivorCount} alive
                  </p>
                </div>
              </div>

              {trueEnding.turningPoint && (
                <div className="mt-4 bg-amber-900/20 border border-amber-700 rounded-lg p-3">
                  <p className="text-amber-400 text-sm font-medium">
                    Missed it? Return to: {trueEnding.turningPoint}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Endings summary table */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-4">
            Ending Overview
          </h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  <th className="py-3 pr-4 text-slate-400 font-medium">
                    Ending
                  </th>
                  <th className="py-3 pr-4 text-slate-400 font-medium">
                    Survivors
                  </th>
                  <th className="py-3 pr-4 text-slate-400 font-medium">
                    Key Condition
                  </th>
                  <th className="py-3 text-slate-400 font-medium">
                    Turning Point
                  </th>
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
            All Endings — Detailed Breakdown
          </h2>
          <div className="space-y-4">
            {otherEndings.map((ending) => (
              <EndingCard key={ending.id} ending={ending} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 mb-4">
            Want to achieve the best ending? Follow the step-by-step guide:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/save-everyone"
              className="inline-block px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
            >
              Save Everyone Guide →
            </a>
            <a
              href="/walkthrough"
              className="inline-block px-8 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 font-semibold transition-colors"
            >
              Full Walkthrough →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
