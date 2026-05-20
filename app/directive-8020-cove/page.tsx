import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Directive 8020 Cove — What It Is, Where to Find It & How to Survive',
  description:
    'The cave system in Directive 8020 is one of the most confusing areas in the game. Learn what the cove is, which direction to take, and how to keep Anders alive.',
  openGraph: {
    title:
      'Directive 8020 Cove Guide — Survive the Cave & Save Anders',
    description:
      'Everything you need to know about the Directive 8020 cove area — the outdoor junction, which way to go, and how to avoid losing Anders.',
    images: ['/og-image.png'],
    type: 'article',
  },
};

export default function Directive8020CovePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Directive 8020 Cove — I Walked Into the Wrong Cave So You
            Don&apos;t Have To
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Spoiler: turn right. But here&apos;s the full story.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12 mdx-content">
        <p>
          I lost Anders on my first run. Not to a QTE I fumbled or a dialogue
          choice I overthought — I lost him because I picked the wrong
          direction at an unmarked fork in the dark while a reactor meltdown
          timer was screaming at me. If you landed here searching{' '}
          <strong>&ldquo;Directive 8020 cove,&rdquo;</strong> you probably just
          had the exact same thing happen. I&apos;ve since beaten the game
          three times, platinumed it, and tested both paths at that junction
          more times than I&apos;d like to admit. Here&apos;s what I wish
          someone had told me before I sent Anders to his death for no reason.
        </p>

        <h2>So What Even Is the &ldquo;Cove&rdquo; in Directive 8020?</h2>

        <p>
          It&apos;s not an official location. You won&apos;t see
          &ldquo;cove&rdquo; on any in-game map or menu. What the community
          calls the{' '}
          <strong>Directive 8020 cove</strong> is the cave system on the left
          side of the outdoor junction in Episode 6: Hostile Takeover. You hit
          it right after escaping the reactor. The path splits. Right goes
          under some stalactites along the outside of the ship. Left goes into
          a dark, smooth-walled tunnel that looks — and I mean this sincerely —
          exactly like the main path the game wants you to take.
        </p>

        <p>
          It&apos;s bigger than the right path. It&apos;s framed more
          prominently. Your eye goes there first. And once you walk in, the
          entrance seals behind you and Anders is dead. No prompt, no
          &ldquo;are you sure,&rdquo; no chance to turn around. Just dead.
        </p>

        <p>
          The name &ldquo;cove&rdquo; comes from how the cave entrance looks —
          it has this natural grotto shape, like a sea cove carved into rock.
          Someone on Reddit started calling it that about 48 hours after
          launch, and the name stuck because it&apos;s way easier to say than
          &ldquo;the outdoor junction left-path cave system that kills
          Anders.&rdquo;
        </p>

        <h2>My First Time at the Junction — A Minute-by-Minute Disaster</h2>

        <p>
          I want to walk you through what actually happened my first time,
          because I think it&apos;ll help you understand why this moment trips
          up so many people.
        </p>

        <p>
          Episode 6 is already stressful. The reactor&apos;s melting down,
          you&apos;ve got maybe ten minutes of in-game time, and the game has
          been throwing QTEs at you non-stop for the last twenty minutes of
          real time. You finally get outside. It&apos;s dark. Everything is on
          fire or about to be. And suddenly there&apos;s this fork — two paths,
          neither labeled, both looking equally dangerous because it&apos;s an
          alien planet and everything looks dangerous.
        </p>

        <p>
          I picked left because the cave entrance was wider and better lit. My
          brain went: bigger path = main path. That logic works in basically
          every other game I&apos;ve ever played. Not here. The moment I walked
          in, the camera shifted behind me, the tunnel mouth collapsed, and I
          knew — not from any on-screen warning, but from that sinking feeling
          in my stomach — that I had just killed someone.
        </p>

        <p>
          Anders died about ninety seconds later. There was no QTE to save him.
          No last-second intervention. Just a cutscene of him getting taken out
          by the Growth while I sat there staring at my controller, genuinely
          annoyed at how cheap it felt.
        </p>

        <h2>What I Do Differently Now (After Three Playthroughs)</h2>

        <p>
          Here&apos;s my actual routine for the Directive 8020 cove junction
          now. I&apos;ve done this exact sequence on Survivor mode, on Explorer
          mode, and during my platinum cleanup run. It works every time.
        </p>

        <ol>
          <li>
            <strong>Pause the second you see the fork.</strong> I know the
            meltdown timer is ticking, but you have way more time than the game
            makes you feel like you have. Take three literal seconds to breathe
            and look at both paths. The timer pressure is psychological — the
            actual time window is generous.
          </li>
          <li>
            <strong>Look up for stalactites.</strong> The right path has those
            jagged rock formations hanging from above. They&apos;re hard to
            miss once you know to look for them. That&apos;s your visual anchor.
            The left path — the cove — has smooth, curved walls with no
            stalactites.
          </li>
          <li>
            <strong>Turn right and don&apos;t look back.</strong> Right =
            outside = Anders lives. Burn that into your brain. The left cave is
            a trap with no reward.
          </li>
          <li>
            <strong>Keep your pace steady on the right path.</strong> You still
            need to move — there&apos;s a timed sequence on the right side too,
            but it&apos;s much more forgiving. Just don&apos;t stop to admire
            the scenery.
          </li>
        </ol>

        <h2>I Already Got Anders Killed. Can I Fix It?</h2>

        <p>
          Yeah, you can. And you don&apos;t need to replay the whole game.
        </p>

        <p>
          Once Episode 6 ends (or after you finish your current playthrough),
          go into the chapter select menu and find the Turning Point called
          &ldquo;Outdoor Junction&rdquo; or &ldquo;Reactor Escape.&rdquo; Both
          names point to the same checkpoint. Load it, take the right path this
          time, and play through. Anders will be alive for Episodes 7 and 8,
          and any choices downstream of this moment will recalculate.
        </p>

        <p>
          One thing I learned the hard way: if you&apos;re aiming for the true
          ending (Eisele the Humanitarian) or the &ldquo;Save the Whole
          Crew&rdquo; trophy, Anders surviving here is non-negotiable. He
          counts as an NPC survival condition, and losing him narrows your
          ending pool. I had to redo my entire platinum run from this exact
          checkpoint because I didn&apos;t realize he mattered that much. Learn
          from my mistake.
        </p>

        <h2>Should You Bother With the Left Path at All?</h2>

        <p>
          I tested both paths across multiple runs so you genuinely
          don&apos;t need to. The left cave — the Directive 8020 cove — gives
          you a brief, unremarkable death scene for Anders and a slightly
          different line of dialogue from Osmond after the reactor escape.
          That&apos;s it. No hidden collectible tucked away in there. No secret
          trophy. No alternate story branch. No cool lore reveal. It is purely
          punishment for picking the wrong direction.
        </p>

        <p>
          If you absolutely must see every death animation in the game (I get
          it, I&apos;m the same way with these anthology games), here&apos;s
          what I do: create a manual save right before the junction, take the
          left path to watch Anders die, then reload and take the right path
          for your actual playthrough. Saves you having to redo an entire
          episode just to satisfy your curiosity.
        </p>

        <p>
          The honest truth? This junction is one of the few genuinely unfair
          moments in Directive 8020. Most character deaths in this game feel
          earned — you missed a QTE, you picked a dialogue option that was
          clearly flagged as risky, or you ignored a warning the game gave you
          three scenes earlier. This one just feels like the level designer was
          having a bad day and decided to take it out on you. So don&apos;t
          beat yourself up if you got caught by it.
        </p>

        {/* FAQ Section */}
        <section className="mt-12 pt-8 border-t border-slate-800">
          <h2 className="text-xl font-bold text-slate-100 mb-4">
            Directive 8020 Cove — Quick Answers
          </h2>

          <div className="space-y-3">
            <div className="border border-slate-700 rounded-lg bg-slate-800/50 p-4">
              <h3 className="text-slate-100 font-medium mb-1">
                Is the cove an official location in Directive 8020?
              </h3>
              <p className="text-slate-400 text-sm">
                Nope. It&apos;s community slang for the left-path cave at the
                outdoor junction in Episode 6. You won&apos;t find it labeled
                in the game.
              </p>
            </div>

            <div className="border border-slate-700 rounded-lg bg-slate-800/50 p-4">
              <h3 className="text-slate-100 font-medium mb-1">
                Can Anders survive if I entered the cave by mistake?
              </h3>
              <p className="text-slate-400 text-sm">
                Not in that session. Once you step into the cove, Anders is
                locked into his death. Use a Turning Point after the episode to
                replay the junction and take the right path.
              </p>
            </div>

            <div className="border border-slate-700 rounded-lg bg-slate-800/50 p-4">
              <h3 className="text-slate-100 font-medium mb-1">
                Does avoiding the cove help with the best ending?
              </h3>
              <p className="text-slate-400 text-sm">
                Absolutely. Anders needs to survive for the true ending and the
                platinum trophy. Turning right at the junction keeps him alive
                and keeps all your ending options open.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-8 text-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 mb-4">
            Need the full breakdown of Episode 6?
          </p>
          <Link
            href="/walkthrough/episode-6"
            className="inline-block px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
          >
            Episode 6: Hostile Takeover Walkthrough →
          </Link>
        </div>
      </div>
    </>
  );
}
