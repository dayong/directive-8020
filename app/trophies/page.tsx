import { HeroSection } from '@/components/content/HeroSection';
import { trophies, getTrophiesByType, getMissableTrophies } from '@/data/trophies';
import { getPageContent } from '@/lib/content';
import { buildPageMetadata } from '@/lib/page-seo';
import type { TrophiesContent } from '@/types/content-pages';

const SLUG = 'trophies';

const content: TrophiesContent = (() => {
  const c = getPageContent<TrophiesContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);

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
      <HeroSection hero={content.hero} />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Plat roadmap */}
        <div className="bg-violet-900/20 border border-violet-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            {content.roadmap.heading}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            {content.roadmap.columns.map((column, i) => (
              <div key={i}>
                <p className="text-violet-400 font-medium mb-1">
                  {column.title}
                </p>
                <p className="text-slate-400">
                  {column.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Missable warning */}
        <div className="bg-amber-900/30 border border-amber-600 rounded-lg p-4">
          <p className="text-amber-400 font-medium">
            {content.missableWarning.replace('{count}', String(missable.length))}
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
