import { HeroSection } from '@/components/content/HeroSection';
import { SectionBlocks } from '@/components/content/SectionBlocks';
import { getPageContent } from '@/lib/content';
import { buildPageMetadata } from '@/lib/page-seo';
import type { PrivacyPolicyContent } from '@/types/content-pages';

const SLUG = 'privacy-policy';

const content: PrivacyPolicyContent = (() => {
  const c = getPageContent<PrivacyPolicyContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection hero={content.hero} />

      <div className="max-w-3xl mx-auto px-4 py-12 mdx-content">
        {content.sections.map((section, i) => (
          <section key={i}>
            <h2>{section.heading}</h2>
            <SectionBlocks blocks={section.blocks} />
          </section>
        ))}
      </div>
    </>
  );
}
