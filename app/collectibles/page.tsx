import { HeroSection } from '@/components/content/HeroSection';
import { episodes } from '@/data/episodes';
import { getPageContent } from '@/lib/content';
import { buildPageMetadata } from '@/lib/page-seo';
import type { CollectiblesContent } from '@/types/content-pages';

const SLUG = 'collectibles';

const content: CollectiblesContent = (() => {
  const c = getPageContent<CollectiblesContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);

const typeStyles: Record<string, string> = {
  Recording: 'bg-violet-900/40 text-violet-300',
  Secret: 'bg-amber-900/40 text-amber-300',
  Document: 'bg-slate-700/40 text-slate-300',
};

export default function CollectiblesPage() {
  const total = content.episodes.reduce((sum, ep) => sum + ep.items.length, 0);
  const hero = {
    ...content.hero,
    intro: content.hero.intro.replace('{count}', String(total)),
  };

  return (
    <>
      <HeroSection hero={hero} />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {content.episodes.map((epData) => {
          const ep = episodes.find((e) => e.id === epData.id);
          return (
            <section key={epData.id}>
              <h2 className="text-xl font-bold text-slate-100 mb-4">
                {content.episodeHeadingFormat
                  .replace('{number}', String(ep?.number ?? ''))
                  .replace('{title}', ep?.title ?? '')}
                <span className="text-sm text-slate-500 ml-2">
                  {content.countFormat.replace('{count}', String(epData.items.length))}
                </span>
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 text-left">
                      {content.tableHeaders.map((header, i) => (
                        <th key={i} className={`py-3 text-slate-400 font-medium ${i < content.tableHeaders.length - 1 ? 'pr-4' : ''}`}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {epData.items.map((item, i) => (
                      <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/30">
                        <td className="py-3 pr-4 font-medium">{item.name}</td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs px-2 py-0.5 rounded ${typeStyles[item.type] ?? typeStyles.Document}`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="py-3 text-slate-400 text-xs">{item.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
          <p className="text-slate-400 text-sm">
            {content.note}
          </p>
        </div>
      </div>
    </>
  );
}
