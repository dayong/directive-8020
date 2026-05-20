import type { Metadata } from 'next';
import Link from 'next/link';
import EpisodeCard from '@/components/ui/EpisodeCard';
import { episodes } from '@/data/episodes';

export const metadata: Metadata = {
  title: 'Directive 8020 Walkthrough | Full Chapter Guide',
  description:
    'Complete walkthrough for all 8 episodes of Directive 8020. Every key choice, QTE, collectible, and survival tip for each chapter.',
  openGraph: {
    title: 'Directive 8020 Walkthrough | Complete Chapter Guide',
    description:
      'Complete walkthrough for all 8 episodes of Directive 8020. Key choices, QTE tips, collectibles, and survival guides.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

const quickTips: Record<string, string> = {
  'episode-1': 'Authorize the weapon in Crew Quarters. Choose Honor → Consider with Stafford. The QTE after Medical Complex always fails — don\'t panic.',
  'episode-2': 'Trust Stafford on the Command Deck. Let Eisele study the sample but don\'t push too hard. Assign Cooper to go with Young.',
  'episode-3': 'Report the cargo bay find immediately. Side with Eisele in the Briefing Room debate. Send an honest report to Earth.',
  'episode-4': 'Follow Cooper\'s radio directions exactly at junction 13. After the reactor confrontation, confirm the kill and move on.',
  'episode-5': 'This episode has the most missable choice in the game — prepare the sedative in the lab before leaving. Rescue both Mitchell and Anders from the fire.',
  'episode-6': 'Trust the newcomer Eisele, not the one who was already with the group. Turn RIGHT at the outdoor junction — left is a point of no return that kills Anders.',
  'episode-7': 'Take the right path with stalactites to find the real Anders — the left cave is a trap. Survive the stealth sections in Pod Room and Geoscience.',
  'episode-8': 'Pick Order to bring Williams. Pass all QTEs — Redirect, Atrium, Mess Hall, Reactor. At Knock Knock, let Mitchell in — he\'s real. Expose the clone program for the true ending.',
};

export default function WalkthroughPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Directive 8020 Walkthrough &mdash; Full Episode-by-Episode Guide
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Every scene, every choice, every QTE. Written from three
            playthroughs of hard-won experience so you don&apos;t have to
            learn the same lessons the hard way.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Intro — personal, practical */}
        <div className="max-w-3xl mx-auto mdx-content">
          <p>
            I&apos;ve played through Directive 8020 three times now — once
            blind (lost three characters by Episode 6, it was brutal), once
            following my own notes to get the true ending, and a cleanup run
            for the platinum. Each of the walkthrough pages below reflects
            what actually worked on those runs, not what a strategy guide
            writer guessed would work before the game came out.
          </p>
          <p>
            A few things before you dive in:{' '}
            <strong>Carter and Simms cannot be saved.</strong> Their deaths
            are scripted, full stop. Don&apos;t waste hours trying to save
            them like I did on my first run. Focus on Young, Stafford, Eisele,
            Cernan, and Cooper. Also: the game uses{' '}
            <strong>Turning Points</strong> as checkpoint markers — you can
            jump back to any of them after finishing an episode or the full
            game. So if you mess up a choice, you&apos;re never locked in
            permanently. You just might need to replay a section.
          </p>
          <p>
            If you&apos;re going for the best ending, bookmark the{' '}
            <Link href="/save-everyone" className="text-violet-400 hover:underline">
              Save Everyone guide
            </Link>{' '}
            and keep it open alongside the episode pages. It tracks every
            choice across all eight chapters so nothing falls through the
            cracks.
          </p>
        </div>

        {/* Episode Cards Grid */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-2">
            All 8 Episodes
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Click any episode for the full scene-by-scene walkthrough.
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
            Quick Tips — One-Liner Cheat Sheet
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            The one thing you need to get right in each episode. Print this
            section and keep it next to you while you play.
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
                  {quickTips[ep.id] || 'Full guide coming soon.'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* First-Time Player Advice */}
        <section className="max-w-3xl mx-auto mdx-content">
          <h2>First Time Playing? Here&apos;s What I Wish I Knew</h2>

          <p>
            <strong>Don&apos;t play on Survivor difficulty your first time.</strong>{' '}
            Explorer mode gives you more generous QTE windows and clearer
            telegraphing of dangerous choices. You&apos;re here for the story
            on your first run, not the challenge. Survivor is for your second
            or third playthrough when you know the beats and want the tension.
          </p>

          <p>
            <strong>Talk to everyone.</strong> A shocking amount of the game&apos;s
            best content is in optional dialogue. Stafford&apos;s confession on
            the observation deck in Episode 2, Cernan&apos;s private moment with
            Stafford in Episode 3, Eisele&apos;s lab notes — these scenes build
            the relationships that unlock Destinies later. Skip them and
            you&apos;re making the late game harder for yourself.
          </p>

          <p>
            <strong>Turning Points are your safety net.</strong> Finished an
            episode and realized you made the wrong call? Don&apos;t restart
            the whole game. Go to chapter select, find the Turning Point
            closest to your mistake, and jump back. The game recalculates from
            there. This is how I cleaned up my platinum run — I must have
            used the Episode 6 outdoor junction Turning Point four times
            testing different outcomes.
          </p>

          <p>
            <strong>Explore before advancing.</strong> Every episode has
            areas you can poke around in before hitting the objective marker.
            That&apos;s where the collectibles live — Sims Recordings, O
            Death secrets, crew logs. Most are tucked into side rooms or
            behind optional interactions. If you beeline the objective every
            time, you&apos;ll miss half the game&apos;s lore.
          </p>
        </section>

        {/* Cross-links */}
        <section className="max-w-3xl mx-auto">
          <div className="border border-slate-700 rounded-lg bg-slate-800/30 p-6 text-center">
            <h2 className="text-lg font-bold text-slate-100 mb-3">
              Going for the best ending?
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              The walkthrough pages tell you what happens. The Save Everyone
              guide tells you what to pick — and tracks your survivors as
              you go.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/save-everyone"
                className="inline-block px-6 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors text-sm"
              >
                Save Everyone Guide →
              </Link>
              <Link
                href="/all-endings"
                className="inline-block px-6 py-2.5 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 font-semibold transition-colors text-sm"
              >
                All Endings →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
