import { CtaSection } from '@/components/content/CtaSection';
import { HeroSection } from '@/components/content/HeroSection';
import { RichText } from '@/components/ui/RichText';
import { getPageContent } from '@/lib/content';
import { buildPageMetadata } from '@/lib/page-seo';
import type { CodesContent } from '@/types/content-pages';

const SLUG = 'codes';

const content: CodesContent = (() => {
  const c = getPageContent<CodesContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);

export default function CodesPage() {
  return (
    <>
      <HeroSection hero={content.hero} />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Quick Reference Table */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            {content.quickRef.heading}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  {content.quickRef.headers.map((header, i) => (
                    <th
                      key={i}
                      className={`py-3 text-slate-400 font-medium ${i < content.quickRef.headers.length - 1 ? 'pr-4' : ''}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {content.codes.map((c) => (
                  <tr key={c.location} className="border-b border-slate-800 hover:bg-slate-800/30">
                    <td className="py-3 pr-4 font-medium">{c.location}</td>
                    <td className="py-3 pr-4 text-slate-400">{c.episode}</td>
                    <td className="py-3">
                      <code className="px-2 py-1 rounded bg-violet-900/40 text-violet-300 font-bold">
                        {c.code}
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Per-code solutions */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            {content.findHeading}
          </h2>
          <div className="space-y-6">
            {content.codes.map((c) => (
              <div
                key={c.location}
                className="border border-slate-700 rounded-lg p-5 bg-slate-800/30"
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-slate-100">{c.location}</h3>
                  <span className="text-xs text-slate-500">{c.episode}</span>
                  <code className="px-2 py-0.5 rounded bg-violet-900/40 text-violet-300 font-bold text-sm">
                    {c.code}
                  </code>
                </div>
                <p className="text-sm text-slate-400">{c.how}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cheats */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            {content.cheats.heading}
          </h2>
          <p className="text-slate-300">
            <RichText text={content.cheats.intro} />
          </p>
          <ul className="mt-3 space-y-2 text-slate-300 list-disc list-inside">
            {content.cheats.items.map((item, i) => (
              <li key={i}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
        </section>

        <CtaSection cta={content.cta} />
      </div>
    </>
  );
}
