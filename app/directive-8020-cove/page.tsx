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
            Directive 8020 Cove — What It Is &amp; How to Get Through It Alive
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The cave junction that&apos;s tripping up half the player base. Here&apos;s
            exactly what to do.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12 mdx-content">
        <p>
          If you Googled <strong>&ldquo;Directive 8020 cove&rdquo;</strong> because
          you just lost Anders in that stupid cave and have no idea what you did
          wrong — you&apos;re not alone. That outdoor junction in Episode 6 is
          quietly one of the most frustrating moments in the entire game, and the
          game gives you absolutely zero warning about it. Let&apos;s break down
          exactly what the cove is, which way you&apos;re supposed to go, and how
          to make sure Anders makes it out alive.
        </p>

        <h2>What Is the &ldquo;Cove&rdquo; in Directive 8020?</h2>

        <p>
          The term <strong>&ldquo;Directive 8020 cove&rdquo;</strong> is what a
          lot of players use to describe the outdoor cave area that appears late
          in Episode 6: Hostile Takeover. After the reactor starts melting down
          and you escape outside, you hit a fork in the path. One direction
          takes you right, under some stalactites along the exterior of the
          ship. The other leads left, into a dark cave system that looks like
          the intended path but absolutely is not.
        </p>

        <p>
          The &ldquo;cove&rdquo; isn&apos;t an official name from the game —
          you won&apos;t see it labeled that way on any map or in any menu. It&apos;s
          community shorthand that emerged because the cave entrance genuinely
          looks like a natural cove or grotto carved into the rock face. Players
          started calling it that, and the name stuck.
        </p>

        <h2>Why Does the Cave Junction Keep Killing People?</h2>

        <p>
          The problem with the Directive 8020 cove is that it&apos;s a{' '}
          <strong>point of no return</strong> disguised as a regular path
          choice. If you turn left and enter the cave system, the game pushes
          you forward automatically. There is no &ldquo;turn back&rdquo; prompt,
          no warning pop-up, no character saying &ldquo;hey, maybe this is a bad
          idea.&rdquo; You just walk in, the entrance collapses or seals behind
          you, and Anders is now on a one-way trip to dead.
        </p>

        <p>
          Anders&apos; death here is especially brutal because it feels
          unfair. Unlike most other character deaths in The Dark Pictures
          Anthology — where you can usually trace a death back to a missed QTE
          or an obviously bad dialogue choice — this one just kind of happens
          because you picked the wrong direction at a junction that looks
          completely symmetrical. Both paths are unlit, both look dangerous, and
          the game gives you maybe three seconds to decide before the meltdown
          timer pressure kicks in.
        </p>

        <p>
          It doesn&apos;t help that the cave entrance is visually framed as the
          more interesting option. It&apos;s bigger, it&apos;s more detailed,
          and it naturally draws your eye. The correct path — staying outside
          under the stalactites — looks like a cramped, secondary route that you
          might assume leads to a dead end or a collectible, not the main
          objective.
        </p>

        <h2>How to Survive the Outdoor Junction in Directive 8020</h2>

        <p>
          Here&apos;s the no-nonsense answer for the Directive 8020 cove area:{' '}
          <strong>turn RIGHT.</strong> Stay outside. Do not go into the cave.
          The stalactite path is the safe route that lets everyone — including
          Anders — escape the reactor before it goes critical.
        </p>

        <ol>
          <li>
            <strong>When you exit the ship, pause for a second.</strong> The
            meltdown timer is stressful, but you have enough time to make a
            deliberate choice here. Don&apos;t panic-pick.
          </li>
          <li>
            <strong>Look for the stalactites.</strong> The right-hand path has
            distinctive rock formations hanging from above. That&apos;s your
            visual cue.
          </li>
          <li>
            <strong>Avoid the cave entrance on the left.</strong> If you see
            smooth rock walls and a tunnel that curves inward — that&apos;s the
            cove. Turn around and go the other way.
          </li>
          <li>
            <strong>Keep moving once you commit.</strong> The right path still
            has a timed sequence. You need to keep pushing forward at a steady
            pace.
          </li>
        </ol>

        <h2>What If I Already Got Anders Killed?</h2>

        <p>
          Deep breaths. You can fix this without replaying the entire game. Once
          you finish Episode 6 (or the full playthrough), head to the chapter
          select menu and find the <strong>Turning Point</strong> labeled
          &ldquo;Outdoor Junction&rdquo; or &ldquo;Reactor Escape.&rdquo; Jump
          back to that checkpoint, take the right path this time, and continue
          from there. Anders will be alive for Episodes 7 and 8, and
          you&apos;ll be back on track for the better endings.
        </p>

        <p>
          One thing worth knowing: if you&apos;re going for the &ldquo;Save the
          Whole Crew&rdquo; trophy or the true ending (Eisele the Humanitarian),
          keeping Anders alive here is mandatory. He counts toward the NPC
          survival requirements that feed into the best ending conditions.
          Losing him doesn&apos;t just lock you out of a trophy — it narrows
          your ending options.
        </p>

        <h2>Is the Cove Worth Exploring on a Second Playthrough?</h2>

        <p>
          Honestly? Not really. Unlike some other &ldquo;wrong&rdquo; paths in
          the game that at least reward you with a collectible or a unique scene,
          the cave route is mostly just punishment. You get a brief,
          unflattering death scene for Anders and a slightly different piece of
          dialogue from Young after the reactor escape, but there&apos;s no
          hidden recording, no trophy tied to it, and no alternate story branch
          worth seeing. If you&apos;re doing a completionist run, you can safely
          skip the cove entirely and lose nothing.
        </p>

        <p>
          That said, if you&apos;re curious about every death animation in the
          game (some players are), it&apos;s easy enough to create a manual save
          before the junction, take the left path to see what happens, then
          reload. Just don&apos;t expect the game to reward you for it.
        </p>

        {/* FAQ Section */}
        <section className="mt-12 pt-8 border-t border-slate-800">
          <h2 className="text-xl font-bold text-slate-100 mb-4">
            Directive 8020 Cove — FAQ
          </h2>

          <div className="space-y-3">
            <div className="border border-slate-700 rounded-lg bg-slate-800/50 p-4">
              <h3 className="text-slate-100 font-medium mb-1">
                Q: Is the Directive 8020 cove area the same as the cave in
                Episode 6?
              </h3>
              <p className="text-slate-400 text-sm">
                Yes — &ldquo;cove&rdquo; is community slang for the cave system
                on the left path of the outdoor junction in Episode 6: Hostile
                Takeover. It&apos;s not an official in-game term.
              </p>
            </div>

            <div className="border border-slate-700 rounded-lg bg-slate-800/50 p-4">
              <h3 className="text-slate-100 font-medium mb-1">
                Q: Can you save Anders if you already entered the cove?
              </h3>
              <p className="text-slate-400 text-sm">
                Once you enter the cave, you cannot turn back in that play
                session. You need to use a Turning Point after the episode ends
                to replay the junction and take the right path instead.
              </p>
            </div>

            <div className="border border-slate-700 rounded-lg bg-slate-800/50 p-4">
              <h3 className="text-slate-100 font-medium mb-1">
                Q: Does choosing the cove path unlock anything?
              </h3>
              <p className="text-slate-400 text-sm">
                No. Taking the left path into the cave leads only to
                Anders&apos; death and a slightly different post-reactor scene.
                There are no collectibles, trophies, or hidden content tied to
                this choice.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-8 text-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 mb-4">
            Need the full walkthrough for Episode 6?
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
