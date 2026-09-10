import Link from 'next/link';
import EpisodeCard from '@/components/ui/EpisodeCard';
import { HeroSection } from '@/components/content/HeroSection';
import { RichText } from '@/components/ui/RichText';
import { episodes } from '@/data/episodes';
import { getPageContent } from '@/lib/content';
import { buildPageMetadata } from '@/lib/page-seo';
import type { CtaLink, WalkthroughContent } from '@/types/content-pages';

const SLUG = 'walkthrough';

const content: WalkthroughContent = (() => {
  const c = getPageContent<WalkthroughContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);

const smallButtonClasses: Record<CtaLink['variant'], string> = {
  primary: 'bg-violet-600 hover:bg-violet-500 text-white',
  outline: 'border border-violet-500 text-violet-400 hover:bg-violet-500/10',
  ghost: 'border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-slate-100',
};

export default function WalkthroughPage() {
  return (
    <>
      <HeroSection hero={content.hero} />

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Intro — personal, practical */}
        <div className="max-w-3xl mx-auto mdx-content">
          {content.introParagraphs.map((paragraph, i) => (
            <p key={i}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>

        {/* Episode Cards Grid */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-2">
            {content.episodeSection.heading}
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            {content.episodeSection.sub}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {episodes.filter(e => e.keyChoices > 0).map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </section>

        {/* Quick Tips per Episode */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-2">
            {content.tipsSection.heading}
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            {content.tipsSection.sub}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {episodes.filter(e => e.keyChoices > 0).map((ep) => (
              <div
                key={ep.id}
                className="border border-slate-700 rounded-lg p-4 bg-slate-800/30 hover:border-violet-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-violet-400 bg-violet-400/10 px-2 py-0.5 rounded shrink-0">
                    EP {ep.number}
                  </span>
                  <Link
                    href={`/walkthrough/${ep.slug}`}
                    className="text-slate-100 font-medium hover:text-violet-400 transition-colors text-sm"
                  >
                    {ep.title}
                  </Link>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {content.tipsSection.tips[ep.id] ?? content.tipsSection.fallback}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* First-Time Player Advice */}
        <section className="max-w-3xl mx-auto mdx-content">
          <h2>{content.firstTime.heading}</h2>
          {content.firstTime.paragraphs.map((paragraph, i) => (
            <p key={i}>
              <RichText text={paragraph} />
            </p>
          ))}
        </section>

        {/* Cross-links */}
        <section className="max-w-3xl mx-auto">
          <div className="border border-slate-700 rounded-lg bg-slate-800/30 p-6 text-center">
            <h2 className="text-lg font-bold text-slate-100 mb-3">
              {content.crossLinks.heading}
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              {content.crossLinks.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {content.crossLinks.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={`inline-block px-6 py-2.5 rounded-lg font-semibold transition-colors text-sm ${smallButtonClasses[link.variant]}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
