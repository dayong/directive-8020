import type { Metadata } from 'next';
import Link from 'next/link';
import EpisodeCard from '@/components/ui/EpisodeCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { episodes } from '@/data/episodes';

export const metadata: Metadata = {
  title: 'Directive 8020 Complete Guide & Walkthrough | All Endings',
  description:
    'Complete Directive 8020 guide covering all 8 episodes, how to save everyone, all 10 endings, trophies, and choices. Updated for launch day.',
  openGraph: {
    title: 'Directive 8020 Complete Guide & Walkthrough',
    description:
      'Complete Directive 8020 guide covering all 8 episodes, how to save everyone, all 10 endings, trophies, and choices.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Can I save everyone in Directive 8020?',
    a: 'Yes — all 5 playable characters (Young, Stafford, Eisele, Cernan, and Cooper) can survive. However, Carter and Simms have scripted deaths that cannot be prevented regardless of your choices.',
  },
  {
    q: 'Why can\'t Carter and Simms be saved?',
    a: 'Carter and Simms are scripted to die as part of the story. Their deaths serve as narrative catalysts and are not the result of player choices. The game has 5 playable characters but 6 total, because co-op mode supports 5 players.',
  },
  {
    q: 'How do I unlock the true ending?',
    a: 'The true ending — "Eisele the Humanitarian" — requires all 5 playable characters to survive, correctly identifying the duplicate Eisele in Episode 6, and choosing to sacrifice the alien sample rather than preserve it.',
  },
  {
    q: 'How do Turning Points work?',
    a: 'Turning Points are checkpoint markers that appear at key decision moments. After completing the game, you can return to any Turning Point via chapter select to explore alternate choices without replaying the entire game.',
  },
  {
    q: 'How many endings does Directive 8020 have?',
    a: 'There are 10 ending variations: Homeward Bound (3 variants), Hitchhiker, Docked (2 variants), Game Over, Forever and Ever, Beacon, and the two Eisele endings. "Eisele the Humanitarian" is the true ending.',
  },
];

const gameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Directive 8020',
  description:
    'The Dark Pictures Anthology: Directive 8020 — a sci-fi horror interactive drama by Supermassive Games.',
  genre: ['Horror', 'Interactive Drama', 'Sci-Fi'],
  gamePlatform: ['PlayStation 5', 'Xbox Series X', 'PC'],
  datePublished: '2026-05-12',
  publisher: {
    '@type': 'Organization',
    name: 'Supermassive Games',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={gameSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900">
        {/* Purple gradient decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-900 to-slate-900 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 py-24 md:py-36 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-4">
            DIRECTIVE{' '}
            <span className="text-violet-400">8020</span>
          </h1>
          <p className="text-lg md:text-xl text-violet-400 mb-10">
            The Dark Pictures Anthology &mdash; Complete Guide
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/save-everyone"
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors text-center"
            >
              Save Everyone
            </Link>
            <Link
              href="/all-endings"
              className="w-full sm:w-auto px-8 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 font-semibold transition-colors text-center"
            >
              All Endings
            </Link>
            <Link
              href="/walkthrough"
              className="w-full sm:w-auto px-8 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-slate-100 font-semibold transition-colors text-center"
            >
              Walkthrough
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Important Warning */}
        <div className="bg-amber-900/30 border border-amber-600 rounded-lg p-4 mb-8">
          <h3 className="text-amber-400 font-bold mb-2">
            ⚠ Important: Carter and Simms Cannot Be Saved
          </h3>
          <p className="text-slate-300 text-sm">
            Carter and Simms are scripted to die as part of the story. No
            choices or actions can prevent their deaths — this is by design, not
            a mistake. Focus on saving the other 5 playable characters: Young,
            Stafford, Eisele, Cernan, and Cooper.
          </p>
        </div>

        {/* Episode Cards */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Episode Walkthroughs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="border border-slate-700 rounded-lg bg-slate-800/50 group"
              >
                <summary className="px-4 py-3 cursor-pointer text-slate-200 font-medium hover:text-violet-400 transition-colors marker:text-violet-400">
                  {faq.q}
                </summary>
                <p className="px-4 pb-4 text-sm text-slate-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
