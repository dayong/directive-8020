import { AffiliateCard } from '@/components/content/AffiliateCard';
import { CtaSection } from '@/components/content/CtaSection';
import { FaqSection } from '@/components/content/FaqSection';
import { HeroSection } from '@/components/content/HeroSection';
import { PreviewPlayer } from '@/components/content/PreviewPlayer';
import { SectionBlocks } from '@/components/content/SectionBlocks';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqSchema } from '@/lib/page-seo';
import type { BuyContent } from '@/types/content-pages';

export default function BuyView({ content }: { content: BuyContent }) {
  return (
    <>
      <JsonLd data={buildFaqSchema(content.faqs)} />

      <HeroSection hero={content.hero} />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <div>
          <AffiliateCard card={content.featured} />
          <p className="text-xs text-slate-500 mt-3">{content.disclosure}</p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">{content.editions.heading}</h2>
          <p className="text-slate-400 mb-6">{content.editions.intro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.editions.cards.map((edition, i) => (
              <div
                key={i}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex flex-col"
              >
                {edition.badge && (
                  <span className="self-start text-xs uppercase tracking-wide font-semibold text-violet-400 border border-violet-700 rounded px-2 py-0.5 mb-3">
                    {edition.badge}
                  </span>
                )}
                <h3 className="text-lg font-bold text-slate-100">{edition.name}</h3>
                <p className="text-violet-400 text-sm mb-2">{edition.platform}</p>
                <p className="text-slate-400 text-sm mb-4 flex-1">{edition.note}</p>
                <a
                  href={edition.href}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="inline-block text-center px-6 py-2.5 rounded-lg font-semibold transition-colors border border-violet-500 text-violet-400 hover:bg-violet-500/10"
                >
                  {edition.ctaLabel}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">{content.video.heading}</h2>
          <PreviewPlayer
            src={content.video.src}
            poster={content.video.poster}
            posterAlt={content.video.posterAlt}
          />
          <p className="text-slate-500 text-sm mt-3">{content.video.caption}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">{content.activation.heading}</h2>
          <p className="text-slate-400 mb-6">{content.activation.intro}</p>
          <ol className="space-y-4">
            {content.activation.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="w-8 h-8 shrink-0 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-100 mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="mdx-content space-y-12">
          {content.sections.map((section, i) => (
            <section key={i}>
              <h2>{section.heading}</h2>
              <SectionBlocks blocks={section.blocks} />
            </section>
          ))}
        </div>

        <FaqSection heading={content.faqHeading} faqs={content.faqs} />

        <CtaSection cta={content.cta} />
      </div>
    </>
  );
}
