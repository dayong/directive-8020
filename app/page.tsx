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
    a: 'Yes — all 5 playable characters (Osmond, Stafford, Eisele, Cernan, and Cooper) can survive. However, Carter and Simms have scripted deaths that cannot be prevented regardless of your choices.',
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

        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
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
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
        {/* Important Warning */}
        <div className="bg-amber-900/30 border border-amber-600 rounded-lg p-4 mb-8">
          <h3 className="text-amber-400 font-bold mb-2">
            ⚠ Important: Carter and Simms Cannot Be Saved
          </h3>
          <p className="text-slate-300 text-sm">
            Carter and Simms are scripted to die as part of the story. No
            choices or actions can prevent their deaths — this is by design, not
            a mistake. Focus on saving the other 5 playable characters: Osmond,
            Stafford, Eisele, Cernan, and Cooper.
          </p>
        </div>

        {/* Quick Access Navigation */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <Link href="/choices" className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-3 text-center transition-colors group">
              <div className="text-2xl mb-1">🎯</div>
              <p className="text-xs text-slate-300 group-hover:text-violet-300 font-medium">All Choices &amp; Consequences</p>
            </Link>
            <Link href="/all-endings#best-ending" className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-3 text-center transition-colors group">
              <div className="text-2xl mb-1">🏆</div>
              <p className="text-xs text-slate-300 group-hover:text-violet-300 font-medium">True Ending Guide</p>
            </Link>
            <Link href="/codes" className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-3 text-center transition-colors group">
              <div className="text-2xl mb-1">🗝️</div>
              <p className="text-xs text-slate-300 group-hover:text-violet-300 font-medium">All Codes &amp; Passwords</p>
            </Link>
            <Link href="/collectibles" className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-3 text-center transition-colors group">
              <div className="text-2xl mb-1">🎭</div>
              <p className="text-xs text-slate-300 group-hover:text-violet-300 font-medium">O Death Secrets</p>
            </Link>
            <Link href="/characters" className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-3 text-center transition-colors group">
              <div className="text-2xl mb-1">👥</div>
              <p className="text-xs text-slate-300 group-hover:text-violet-300 font-medium">Characters &amp; Destinies</p>
            </Link>
            <Link href="/bug-fixes" className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-3 text-center transition-colors group">
              <div className="text-2xl mb-1">🔧</div>
              <p className="text-xs text-slate-300 group-hover:text-violet-300 font-medium">Crash &amp; Bug Fixes</p>
            </Link>
          </div>
        </section>

        {/* Episode Cards */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Episode Walkthroughs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {episodes.filter(e => e.keyChoices > 0).map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </section>

        {/* Best Ending Quick Path */}
        <section>
          <div className="bg-gradient-to-r from-violet-900/30 to-amber-900/20 border border-violet-700/50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-slate-100 mb-1">
              Fastest Path to the True Ending
            </h2>
            <p className="text-sm text-slate-400 mb-4">
              Three non-negotiable steps — miss any of these and you&apos;re locked out:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <div className="text-violet-400 text-2xl font-bold mb-1">1</div>
                <p className="text-slate-200 font-medium text-sm">Keep all 5 main characters alive</p>
                <p className="text-xs text-slate-500 mt-1">Osmond · Stafford · Eisele · Cernan · Cooper</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <div className="text-violet-400 text-2xl font-bold mb-1">2</div>
                <p className="text-slate-200 font-medium text-sm">Identify the real Eisele in Episode 6</p>
                <p className="text-xs text-slate-500 mt-1">Trust the newcomer — don&apos;t pick the familiar one</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <div className="text-violet-400 text-2xl font-bold mb-1">3</div>
                <p className="text-slate-200 font-medium text-sm">Expose the clone program in Episode 8</p>
                <p className="text-xs text-slate-500 mt-1">Choose &ldquo;Expose the truth&rdquo; — don&apos;t protect the mission</p>
              </div>
            </div>
            <p className="text-center mt-4">
              <span className="text-amber-400 font-bold text-sm">True Ending Unlocked:&nbsp;</span>
              <span className="text-violet-400 font-bold text-sm">Eisele the Humanitarian</span>
            </p>
            <div className="text-center mt-3">
              <Link href="/save-everyone" className="inline-block px-6 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors">
                Full Save Everyone Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* More Guides */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">More Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="/game-length" className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-5 transition-colors group">
              <div className="text-2xl mb-2">⏱</div>
              <div className="text-xs font-bold text-violet-400 uppercase tracking-wide mb-1">INFO</div>
              <h3 className="text-white font-semibold mb-1 group-hover:text-violet-300">Game Length & Episodes</h3>
              <p className="text-slate-400 text-sm">How long to beat all 8 episodes, completionist time, and what to expect.</p>
            </a>
            <a href="/bug-fixes" className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-5 transition-colors group">
              <div className="text-2xl mb-2">🔧</div>
              <div className="text-xs font-bold text-red-400 uppercase tracking-wide mb-1">FIXES</div>
              <h3 className="text-white font-semibold mb-1 group-hover:text-violet-300">Crashing & Bug Fixes</h3>
              <p className="text-slate-400 text-sm">Fix black screen, won&apos;t launch, stuttering, and save issues on PC and console.</p>
            </a>
            <a href="/multiplayer" className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-5 transition-colors group">
              <div className="text-2xl mb-2">👥</div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide mb-1">CO-OP</div>
              <h3 className="text-white font-semibold mb-1 group-hover:text-violet-300">Multiplayer, Split Screen &amp; Crossplay</h3>
              <p className="text-slate-400 text-sm">Movie Night local co-op for 5 players, split screen and crossplay answers.</p>
            </a>
            <a href="/shoot-williams-or-stand-down" className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-5 transition-colors group">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wide mb-1">CHOICE</div>
              <h3 className="text-white font-semibold mb-1 group-hover:text-violet-300">Shoot Williams or Stand Down?</h3>
              <p className="text-slate-400 text-sm">Episode 5 Point Blank choice explained — sedative, trophy, and cross-episode consequences.</p>
            </a>
            <a href="/can-carter-survive" className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-5 transition-colors group">
              <div className="text-2xl mb-2">⚠️</div>
              <div className="text-xs font-bold text-red-400 uppercase tracking-wide mb-1">SPOILERS</div>
              <h3 className="text-white font-semibold mb-1 group-hover:text-violet-300">Can Carter Survive?</h3>
              <p className="text-slate-400 text-sm">Carter&apos;s Episode 1 death is scripted — here&apos;s why, and which 5 characters you can save.</p>
            </a>
            <a href="/directive-8020-skill-checks" className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-5 transition-colors group">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide mb-1">MECHANICS</div>
              <h3 className="text-white font-semibold mb-1 group-hover:text-violet-300">Skill Checks Explained</h3>
              <p className="text-slate-400 text-sm">No dice, no luck — QTEs, stealth, and relationship checks, with every real example.</p>
            </a>
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
