import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import TableOfContents from '@/components/ui/TableOfContents';
import { getAllEpisodeSlugs, getEpisodeContent } from '@/lib/mdx';
import { getPageContent } from '@/lib/content';
import { getEpisodeById, getEpisodeByNumber } from '@/data/episodes';
import type { EpisodeDetailContent } from '@/types/content-pages';

interface Props {
  params: { episode: string };
}

const SLUG = 'walkthrough-episode';

const content: EpisodeDetailContent = (() => {
  const c = getPageContent<EpisodeDetailContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export function generateStaticParams() {
  return getAllEpisodeSlugs().map((slug) => ({ episode: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getEpisodeContent(params.episode);
  const ep = getEpisodeById(params.episode);

  if (!data || !ep) {
    return { title: content.notFoundTitle };
  }

  return {
    title: data.frontmatter.title,
    description: data.frontmatter.ogDescription || data.frontmatter.description,
    openGraph: {
      title: data.frontmatter.title,
      description: data.frontmatter.ogDescription || data.frontmatter.description,
      images: ['/og-image.png'],
      type: 'article',
    },
  };
}

export default async function EpisodePage({ params }: Props) {
  const result = await getEpisodeContent(params.episode);

  if (!result) {
    notFound();
  }

  const { content: episodeContent, frontmatter } = result;
  const ep = getEpisodeById(params.episode);

  if (!ep) {
    notFound();
  }

  const prevEpisode = getEpisodeByNumber(ep.number - 1);
  const nextEpisode = getEpisodeByNumber(ep.number + 1);

  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16">
          <Link
            href="/walkthrough"
            className="text-sm text-violet-400 hover:text-violet-300 mb-4 inline-block"
          >
            {content.backLink}
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm font-bold text-violet-400 bg-violet-400/10 px-3 py-1 rounded-full">
              {content.episodeLabelFormat.replace('{number}', String(frontmatter.episode))}
            </span>
            <span className="text-xs text-slate-500">{frontmatter.duration}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100">
            {frontmatter.title}
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Content */}
          <article className="lg:col-span-3 max-w-none mdx-content">
            {episodeContent}
          </article>

          {/* Sidebar TOC — desktop only */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-20">
              <TableOfContents />
            </div>
          </aside>
        </div>

        {/* Episode Navigation */}
        <nav className="mt-16 pt-8 border-t border-slate-800 flex justify-between">
          {prevEpisode ? (
            <Link
              href={`/walkthrough/${prevEpisode.slug}`}
              className="text-left group"
            >
              <span className="text-xs text-slate-500">{content.prevLabel}</span>
              <p className="text-sm text-violet-400 group-hover:text-violet-300 font-medium">
                {content.navFormat
                  .replace('{number}', String(prevEpisode.number))
                  .replace('{title}', prevEpisode.title)}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextEpisode ? (
            <Link
              href={`/walkthrough/${nextEpisode.slug}`}
              className="text-right group"
            >
              <span className="text-xs text-slate-500">{content.nextLabel}</span>
              <p className="text-sm text-violet-400 group-hover:text-violet-300 font-medium">
                {content.navFormat
                  .replace('{number}', String(nextEpisode.number))
                  .replace('{title}', nextEpisode.title)}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </>
  );
}
