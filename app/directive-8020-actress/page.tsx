import { CtaSection } from '@/components/content/CtaSection';
import { HeroSection } from '@/components/content/HeroSection';
import { SectionBlocks } from '@/components/content/SectionBlocks';
import { RichText } from '@/components/ui/RichText';
import { getPageContent } from '@/lib/content';
import { buildPageMetadata } from '@/lib/page-seo';
import type { ActressContent } from '@/types/content-pages';

const SLUG = 'directive-8020-actress';

const content: ActressContent = (() => {
  const c = getPageContent<ActressContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);

export default function Directive8020ActressPage() {
  return (
    <>
      <HeroSection hero={content.hero} />

      <div className="max-w-3xl mx-auto px-4 py-12 mdx-content">
        <p>
          <RichText text={content.intro} />
        </p>

        {content.sections.map((section, i) => (
          <section key={i}>
            <h2>{section.heading}</h2>
            <SectionBlocks blocks={section.blocks} />
          </section>
        ))}

        {/* Cast FAQ */}
        <section className="mt-12 pt-8 border-t border-slate-800">
          <h2 className="text-xl font-bold text-slate-100 mb-4">
            {content.castFaq.heading}
          </h2>
          <div className="space-y-3">
            {content.castFaq.items.map((item, i) => (
              <div key={i} className="border border-slate-700 rounded-lg bg-slate-800/50 p-4">
                <h3 className="text-slate-100 font-medium mb-1">{item.q}</h3>
                <p className="text-slate-400 text-sm">
                  <RichText text={item.a} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <CtaSection cta={content.cta} />
        </div>
      </div>
    </>
  );
}
