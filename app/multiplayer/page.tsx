import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Directive 8020 Multiplayer & Co-Op Guide',
  description:
    'How to play Directive 8020 co-op. Movie Night mode setup, online co-op, shared story explained, and how many players are supported.',
  openGraph: {
    title: 'Directive 8020 Multiplayer & Co-Op Guide',
    description:
      'Directive 8020 multiplayer guide — Movie Night mode, online co-op, shared story, and player counts for all modes.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function MultiplayerPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Multiplayer & Co-Op Guide
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about Directive 8020&apos;s multiplayer
            modes — Movie Night, online co-op, and shared story.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 mdx-content">

        <section>
          <h2>Available Multiplayer Modes</h2>
          <p>Directive 8020 supports two multiplayer modes, both for up to <strong>5 players</strong>:</p>
          <ul>
            <li><strong>Movie Night</strong> — Pass a single controller between players. Each player controls their assigned character. Local couch co-op.</li>
            <li><strong>Online Co-Op</strong> — Play with friends online. Each player controls their assigned character remotely.</li>
          </ul>
        </section>

        <section>
          <h2>Movie Night Mode</h2>
          <p>Movie Night is the <strong>local co-op</strong> mode — perfect for playing on the couch with friends.</p>
          <ul>
            <li>Start a new game and select <strong>Movie Night</strong> from the mode selection</li>
            <li>Assign each of the 5 playable characters to a player</li>
            <li>When your character appears in a scene, <strong>pass the controller</strong> to the assigned player</li>
            <li>The game prompts you with the player&apos;s name when it&apos;s their turn</li>
          </ul>
          <h3>Tips for Movie Night</h3>
          <ul>
            <li>Assign characters based on how much screen time they get — Young has the most, Cooper has less</li>
            <li>Use the <strong>Shared Controller</strong> option if you don&apos;t have enough controllers</li>
          </ul>
        </section>

        <section>
          <h2>Online Co-Op</h2>
          <p>Online co-op lets you play <strong>remotely with friends</strong> across platforms.</p>
          <ul>
            <li>Cross-platform play is <strong>NOT supported</strong> (PlayStation players can only play with PlayStation, etc.)</li>
            <li>The host owns the save file and controls story progression</li>
            <li>Other players join as guests and play their assigned characters</li>
            <li>All players must own a copy of the game</li>
          </ul>
        </section>

        <section>
          <h2>Shared Story Explained</h2>
          <p>The <strong>Shared Story</strong> mode in The Dark Pictures Anthology is a curated 2-player experience where the game splits scenes between players. Note:</p>
          <ul>
            <li>Shared Story is the <strong>online 2-player</strong> experience</li>
            <li>It is separate from Movie Night mode</li>
            <li>Both players experience different scenes simultaneously, building a complete picture of the story</li>
          </ul>
        </section>

        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 mb-4">Ready to play with friends? Start here:</p>
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
