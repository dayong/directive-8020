import { HeroSection } from '@/components/content/HeroSection';
import { getTrophies } from '@/lib/localized-data';
import { getUiStrings } from '@/i18n/ui';
import type { Locale } from '@/i18n/config';
import type { TrophiesContent } from '@/types/content-pages';


const typeConfig: Record<string, { color: string; bg: string }> = {
  platinum: { color: 'text-sky-300', bg: 'bg-sky-500/20' },
  gold: { color: 'text-amber-300', bg: 'bg-amber-500/20' },
  silver: { color: 'text-slate-300', bg: 'bg-slate-500/20' },
  bronze: { color: 'text-orange-400', bg: 'bg-orange-500/20' },
};

export default function TrophiesView({
  content,
  locale,
}: {
  content: TrophiesContent;
  locale: Locale;
}) {
  const t = getUiStrings(locale).trophiesView;
  const typeLabels: Record<string, string> = {
    platinum: t.platinum,
    gold: t.gold,
    silver: t.silver,
    bronze: t.bronze,
  };
  const trophies = getTrophies(locale);
  const missable = trophies.filter((trophy) => trophy.isMissable);

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
          const typeTrophies = trophies.filter((trophy) => trophy.type === type);
          const cfg = typeConfig[type];

          return (
            <section key={type}>
              <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded ${cfg.bg} ${cfg.color}`}
                >
                  {typeLabels[type]}
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
                            {t.missable}
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
