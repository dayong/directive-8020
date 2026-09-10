import { HeroSection } from '@/components/content/HeroSection';
import { SectionBlocks } from '@/components/content/SectionBlocks';
import type { PrivacyPolicyContent } from '@/types/content-pages';


export default function PrivacyPolicyView({ content }: { content: PrivacyPolicyContent }) {
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
