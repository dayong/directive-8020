import { PreviewPlayer } from '@/components/content/PreviewPlayer';
import { HeroSection } from '@/components/content/HeroSection';
import { SectionBlocks } from '@/components/content/SectionBlocks';
import type { HeroContent, ProseSection } from '@/types/content-pages';

/** Full authored articles can replace an obsolete specialized view without changing its URL. */
export interface ReviewedArticleContent {
  hero: HeroContent;
  article: { sections: ProseSection[]; media?: { src: string; poster: string; posterAlt: string; caption: string } };
}
export default function ReviewedArticleView({ content }: { content: ReviewedArticleContent }) {
  return <>
    <HeroSection hero={content.hero} />
    <article className="max-w-4xl mx-auto px-4 py-10 mdx-content">
      {content.article.media && <figure className="mb-10">
        <PreviewPlayer {...content.article.media} />
        <figcaption className="mt-3 text-sm text-slate-400">{content.article.media.caption}</figcaption>
      </figure>}
      {content.article.sections.map((section, index) => (
        <section key={index} id={section.id} className="mb-10 scroll-mt-24">
          <h2>{section.heading}</h2>
          <SectionBlocks blocks={section.blocks} />
        </section>
      ))}
    </article>
  </>;
}
