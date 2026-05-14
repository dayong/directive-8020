import type { Metadata } from 'next';
import { trophies, getTrophiesByType, getMissableTrophies } from '@/data/trophies';

export const metadata: Metadata = {
  title: 'Directive 8020 Trophy Guide | Platinum & All Achievements',
  description:
    'Complete Directive 8020 trophy guide. All 31 trophies including the platinum, missable trophies, and roadmap for achieving 100% completion.',
  openGraph: {
    title: 'Directive 8020 Trophy Guide | Platinum & Achievements',
    description:
      'Complete trophy guide for Directive 8020 — all 31 trophies, missable warnings, and platinum roadmap.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

const typeConfig: Record<string, { label: string; color: string; bg: string }> =
  {
    platinum: { label: 'Platinum', color: 'text-sky-300', bg: 'bg-sky-500/20' },
    gold: { label: 'Gold', color: 'text-amber-300', bg: 'bg-amber-500/20' },
    silver: {
      label: 'Silver',
      color: 'text-slate-300',
      bg: 'bg-slate-500/20',
    },
    bronze: {
      label: 'Bronze',
      color: 'text-orange-400',
      bg: 'bg-orange-500/20',
    },
  };

const missable = getMissableTrophies();

export default function TrophiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Trophy Guide
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            All 31 trophies for Directive 8020 on PlayStation 5. Includes the
            platinum roadmap, missable trophy warnings, and unlock conditions
            for every achievement.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Plat roadmap */}
        <div className="bg-violet-900/20 border border-violet-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            Platinum Roadmap
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-violet-400 font-medium mb-1">
                Playthrough 1
              </p>
              <p className="text-slate-400">
                Follow the Save Everyone guide. Keep all 5 playable characters
                alive. Achieve the true ending.
              </p>
            </div>
            <div>
              <p className="text-violet-400 font-medium mb-1">
                Playthrough 2
              </p>
              <p className="text-slate-400">
                Make opposite choices. Let characters die. Unlock bad endings
                and the Casualty trophy.
              </p>
            </div>
            <div>
              <p className="text-violet-400 font-medium mb-1">Cleanup</p>
              <p className="text-slate-400">
                Use Turning Points to mop up remaining endings, collectibles,
                and missable trophies.
              </p>
            </div>
          </div>
        </div>

        {/* Missable warning */}
        <div className="bg-amber-900/30 border border-amber-600 rounded-lg p-4">
          <p className="text-amber-400 font-medium">
            ⚠ {missable.length} trophies are missable in a single playthrough.
            Use this guide to avoid missing them.
          </p>
        </div>

        {/* Trophies by type */}
        {(['platinum', 'gold', 'silver', 'bronze'] as const).map((type) => {
          const typeTrophies = getTrophiesByType(type);
          const cfg = typeConfig[type];

          return (
            <section key={type}>
              <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded ${cfg.bg} ${cfg.color}`}
                >
                  {cfg.label}
                </span>
                <span className="text-sm text-slate-500">
                  ({typeTrophies.length})
                </span>
              </h2>
              <div className="space-y-3">
                {typeTrophies.map((trophy) => (
                  <div
                    key={trophy.id}
                    className="border border-slate-700 rounded-lg p-4 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-slate-100 font-medium">
                        {trophy.name}
                      </h3>
                      <div className="flex items-center gap-2 shrink-0">
                        {trophy.isMissable && (
                          <span className="text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded whitespace-nowrap">
                            Missable
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 mb-2">
                      {trophy.description}
                    </p>
                    <p className="text-xs text-slate-500">{trophy.guide}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
