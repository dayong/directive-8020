import { HeroSection } from '@/components/content/HeroSection';
import { SectionBlocks } from '@/components/content/SectionBlocks';
import { RichText } from '@/components/ui/RichText';
import { getPageContent } from '@/lib/content';
import { buildPageMetadata } from '@/lib/page-seo';
import type { EiseleContent } from '@/types/content-pages';

const SLUG = 'who-is-the-real-eisele-directive-8020';

const content: EiseleContent = (() => {
  const c = getPageContent<EiseleContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);

export default function RealEiselePage() {
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

        <div className="mt-8 pt-8 border-t border-slate-800 space-y-4">
          <p>
            <RichText text={content.outro} />
          </p>
        </div>
      </div>
    </>
  );
}
