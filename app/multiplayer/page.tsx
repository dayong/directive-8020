import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Is Directive 8020 Multiplayer, Split Screen or Crossplay? (Co-Op Guide)',
  description:
    'Directive 8020 has local Movie Night co-op for up to 5 players. No split screen, no online mode, no crossplay yet. Full co-op Q&A.',
  openGraph: {
    title: 'Is Directive 8020 Multiplayer, Split Screen or Crossplay? (Co-Op Guide)',
    description:
      'Directive 8020 co-op guide — Movie Night local co-op for up to 5 players. No split screen, no online mode, no crossplay yet. Full co-op Q&A.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Is Directive 8020 multiplayer?',
    a: 'Yes, but only locally at launch. Movie Night mode supports up to 5 players passing a single controller on one screen. There is no online multiplayer yet.',
  },
  {
    q: 'Does Directive 8020 have split screen?',
    a: 'No — there is no split screen in Directive 8020. Movie Night is a single-screen, hot-seat mode: everyone watches the same screen, and the controller is passed to whoever\'s character is in the scene.',
  },
  {
    q: 'Does Directive 8020 have online multiplayer?',
    a: 'Not yet. Online Movie Night is confirmed as a free post-launch update — Supermassive Games\' June 2026 patch notes say "it\'s definitely coming and the team is hard at work." No release date has been announced yet.',
  },
  {
    q: 'Will Directive 8020 have online multiplayer?',
    a: 'Yes. Supermassive Games has confirmed online multiplayer as a free post-launch update, mirroring the couch co-op Movie Night experience with up to 5 players. No release date has been announced yet.',
  },
  {
    q: 'Is Directive 8020 crossplay?',
    a: 'No. There is no crossplay in Directive 8020 — the online mode is not out yet, so there is nothing to crossplay across. No crossplay announcement has been made for the upcoming online Movie Night update either.',
  },
  {
    q: 'How does local co-op (Movie Night) work?',
    a: 'Start a new game, choose Movie Night, and assign each of the 5 playable characters to a player. When a player\'s character is in a scene, the controller is handed to them. Players can vote on key decisions together.',
  },
  {
    q: 'How do you invite friends to play?',
    a: 'Locally, friends join by sitting on the couch — there is nothing to invite them to until the online Movie Night update arrives. When it ships, invites will work through your platform\'s friend list.',
  },
  {
    q: 'Is there Remote Play Together?',
    a: 'Not on Steam — Remote Play Together is not a listed feature for Directive 8020. PlayStation Share Play and Xbox screen sharing do work as workarounds today, just expect some input lag.',
  },
  {
    q: 'What happened to Shared Story?',
    a: 'The online 2-player Shared Story mode from earlier Dark Pictures games is not included in Directive 8020. The studio consolidated co-op into Movie Night only.',
  },
  {
    q: 'Does Directive 8020 have a friend pass?',
    a: 'No friend pass has been announced. For local Movie Night you only need one copy of the game — everyone plays on the same screen. For the upcoming online Movie Night update, plan on each player owning their own copy.',
  },
  {
    q: 'How many players can play Directive 8020?',
    a: 'Up to 5 players in Movie Night mode. You can also play with 2, 3, or 4 — just split the 5 playable characters between the players present.',
  },
];

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

export default function MultiplayerPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Is Directive 8020 Multiplayer, Split Screen or Crossplay?
          </h1>
          <p className="text-violet-300 font-medium text-lg mb-2">
            Local Movie Night co-op only — no split screen, no online mode yet.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about Directive 8020&apos;s co-op modes,
            answered question by question.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 mdx-content">

        {/* Quick Answer Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🎮</div>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Local Co-Op</p>
            <p className="text-3xl font-bold text-white">Yes</p>
            <p className="text-slate-400 text-sm">Movie Night, up to 5 players</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🖥️</div>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Split Screen</p>
            <p className="text-3xl font-bold text-red-400">No</p>
            <p className="text-slate-400 text-sm">Single-screen, pass the controller</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🌐</div>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Online / Crossplay</p>
            <p className="text-3xl font-bold text-amber-400">Not Yet</p>
            <p className="text-slate-400 text-sm">Free update announced, no date</p>
          </div>
        </div>

        {/* Q&A Sections */}
        <section>
          <h2>Is Directive 8020 multiplayer?</h2>
          <p>
            Yes, but only locally at launch. <strong>Movie Night</strong> mode
            supports up to <strong>5 players</strong> passing a single
            controller on one screen. There is no online multiplayer yet.
          </p>
        </section>

        <section>
          <h2>Does Directive 8020 have split screen?</h2>
          <p>
            <strong>No — there is no split screen in Directive 8020.</strong>{' '}
            Movie Night is a <strong>single-screen, hot-seat mode</strong>:
            everyone watches the same screen, and the controller is passed to
            whoever&apos;s character is in the scene. The game prompts you with
            the player&apos;s name when it&apos;s their turn. Think party game
            pass-the-controller, not two halves of a TV.
          </p>
          <p>
            Confused by the Steam page? Steam lists{' '}
            <strong>&ldquo;Shared/Split Screen Co-op&rdquo;</strong> as one
            combined tag — a game earns it through either half. Directive 8020
            qualifies through the <strong>&ldquo;Shared Screen&rdquo;</strong>{' '}
            half: the whole couch watches one screen together. The picture is
            never split.
          </p>
        </section>

        <section>
          <h2>Does Directive 8020 have online multiplayer?</h2>
          <p>
            <strong>Not yet — but it is confirmed to be coming.</strong>{' '}
            Supermassive Games announced online Movie Night as a free
            post-launch update that mirrors the couch co-op experience with up
            to 5 players, and their{' '}
            <a
              href="https://store.steampowered.com/news/app/2255370/view/673997481174894605"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:underline"
            >
              June 2026 patch notes
            </a>{' '}
            reconfirm it: &ldquo;Regarding online multiplayer, it&apos;s
            definitely coming and the team is hard at work.&rdquo; No release
            date has been announced yet.
          </p>
        </section>

        <section>
          <h2>Is Directive 8020 crossplay?</h2>
          <p>
            <strong>No.</strong> There is no crossplay in Directive 8020 — the
            online mode is not out yet, so there is nothing to crossplay
            across. No crossplay announcement has been made for the upcoming
            online Movie Night update either.
          </p>
        </section>

        <section>
          <h2>How does local co-op (Movie Night) work?</h2>
          <p>
            Start a new game, choose <strong>Movie Night</strong>, and assign
            each of the 5 playable characters to a player. When a player&apos;s
            character is in a scene, the controller is handed to them. Players
            can <strong>vote on key decisions</strong> together, and the group
            can use Turning Points to rewind deaths and retry sections.
          </p>
          <h3>Tips for Movie Night</h3>
          <ul>
            <li>Assign characters based on how much screen time they get — Osmond has the most, Cooper has less</li>
            <li>Use the <strong>Shared Controller</strong> option if you don&apos;t have enough controllers</li>
            <li>Agree on decision rules beforehand — votes on major choices are where Movie Night nights are won or lost</li>
          </ul>
        </section>

        <section>
          <h2>How do you invite friends to play?</h2>
          <p>
            Locally, friends join by sitting on the couch — there is nothing to
            invite them to until the <strong>online Movie Night update</strong>{' '}
            arrives. When it ships, invites will work through your
            platform&apos;s friend list.
          </p>
        </section>

        <section>
          <h2>Is there Remote Play Together?</h2>
          <p>
            <strong>Not on Steam</strong> — Remote Play Together is not a
            listed feature for Directive 8020. The Steam page lists{' '}
            <strong>Remote Play on TV</strong>, which is different: that
            streams from your PC to a screen in your own home, not to friends.
          </p>
          <p>
            <strong>PlayStation Share Play</strong> and{' '}
            <strong>Xbox screen sharing</strong> do work as workarounds today,
            since they work with any game — the host runs Movie Night and
            remote friends take turns through the stream. Just expect some
            input lag and video compression.
          </p>
        </section>

        <section>
          <h2>What happened to Shared Story?</h2>
          <p>
            The online 2-player <strong>Shared Story</strong> mode from earlier
            Dark Pictures games is <strong>not included in Directive 8020</strong>.
            The studio consolidated co-op into Movie Night only.
          </p>
        </section>

        <section>
          <h2>Does Directive 8020 have a friend pass?</h2>
          <p>
            <strong>No friend pass has been announced.</strong> For local
            Movie Night you only need <strong>one copy of the game</strong> —
            everyone plays on the same screen. For the upcoming online Movie
            Night update, plan on each player owning their own copy.
          </p>
        </section>

        <section>
          <h2>How many players can play Directive 8020?</h2>
          <p>
            <strong>Up to 5 players</strong> in Movie Night mode. You can also
            play with <strong>2, 3, or 4 players</strong> — just split the 5
            playable characters between the players present.
          </p>
        </section>

        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 mb-4">Ready to play? Start here:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/walkthrough" className="inline-block px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
              Full Walkthrough →
            </Link>
            <Link href="/save-everyone" className="inline-block px-8 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 font-semibold transition-colors">
              Save Everyone →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
