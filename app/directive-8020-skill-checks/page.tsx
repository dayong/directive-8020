import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Directive 8020 Skill Checks Explained — No Dice, Here\'s What Actually Happens',
  description:
    'Directive 8020 skill checks explained: reflex QTE prompts, stealth tests, and relationship checks set by your earlier choices — with real examples and how to pass every one.',
  openGraph: {
    title: 'Directive 8020 Skill Checks Explained — No Dice, Here\'s What Actually Happens',
    description:
      'There are no dice rolls in Directive 8020. Every check is a reflex prompt, a stealth test, or a relationship check decided by your earlier choices. All three types, with examples.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Does Directive 8020 have skill checks?',
    a: 'Yes — but none of them are random. The game has three kinds: reflex checks (timed button prompts), stealth and timing checks (patrols, scanner beams, timed escapes), and relationship checks whose difficulty was set by choices you made episodes earlier. There are no dice rolls and no stat-based checks.',
  },
  {
    q: 'Are skill checks in Directive 8020 based on luck or dice?',
    a: 'No. Every check in Directive 8020 is deterministic. If a persuasion check, Destiny check, or dialogue check fails, you can trace it to an earlier choice — for example, choosing Implore at the Episode 1 Medical Complex puts a permanent -1 on Stafford\'s trust and makes the Episode 5 Destiny check significantly harder even if every later choice is good.',
  },
  {
    q: 'What happens if you fail a QTE in Directive 8020?',
    a: 'A missed prompt can get a character injured or killed — in the Episode 6 reactor escape, hesitation leads to QTE failures that can cost crew members before the meltdown. Some collectibles are also hidden behind QTE sequences, so a miss costs you the Archivist trophy progress. Turning Points can rewind certain flagged decision beats, but not every QTE death is recoverable.',
  },
  {
    q: 'How do relationship checks work in Directive 8020?',
    a: 'The game quietly evaluates your accumulated relationship choices at key moments. Sealing the hull breach in Episode 1 gives you a trust buffer for later checks; choosing Implore instead of Honor at the Medical Complex applies a permanent -1 trust modifier; shooting Williams in Episode 5 costs you his Episode 7 intel and makes one Episode 7 dialogue check harder.',
  },
  {
    q: 'What is the Destiny check in Directive 8020?',
    a: 'A Destiny check is the culmination of a relationship chain — for example, Stafford\'s Episode 5 breakdown moment only goes well if you completed the Episode 1 Honor → Consider, Episode 2 trust, and Episode 3 Cernan support chain. Succeed and you see the "Destiny Unlocked" notification and set Stafford on The Father path, a prerequisite for the best ending route.',
  },
  {
    q: 'What is the hardest check in Directive 8020?',
    a: 'The Episode 6 moment where two Eiseles appear and you must say which one is real. No reflexes are involved — it is a pure attention check on which Eisele arrived with the group and which arrived separately. Choosing the wrong one locks the true ending permanently, which is why it is the most important identification in the game.',
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

export default function SkillChecksPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Directive 8020 Skill Checks, Explained
          </h1>
          <p className="text-violet-300 font-medium text-lg mb-2">
            No dice. No luck. Every check is a test of reflexes, timing, or the choices you made earlier.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            What players call &ldquo;skill checks&rdquo; in Directive 8020 fall into
            three categories — and knowing which one you&apos;re facing is the
            difference between passing it and losing someone.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* The Short Answer */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Does Directive 8020 Have Skill Checks?
          </h2>
          <p className="text-slate-400 mb-4">
            Short answer: <strong className="text-slate-200">yes, but not the kind you might expect</strong>.
            Directive 8020 has no dice rolls, no stat points, and no RNG. If a
            check fails, it fails for one of two reasons: you slipped on a
            reflex or timing test, or you didn&apos;t set up the right
            relationships in earlier episodes.
          </p>
          <p className="text-slate-400 mb-4">
            That&apos;s the core thing to understand before anything else on
            this page: <em className="text-slate-200">in Directive 8020, a failed check is never bad luck</em>.
            It&apos;s a missing earlier interaction or a missed prompt — which
            means almost every check is beatable once you know what it&apos;s
            actually testing.
          </p>
          <p className="text-slate-400">
            The three real &ldquo;skill check&rdquo; types you&apos;ll face, in
            order of how often they cost players a character:
          </p>
        </section>

        {/* Three Check Types */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            The Three Skill Check Types in Directive 8020
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 bg-cyan-900/20 rounded-r-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-sm text-cyan-400">REFLEX</span>
                <span className="text-slate-200 font-medium">Timed button prompts (QTEs)</span>
              </div>
              <p className="text-slate-400 text-sm mb-2">
                The game flashes a button prompt mid-action — during chases,
                confrontations, scanner beams, and the Episode 6 reactor escape.
                You have a short window to hit it correctly. Miss one and the
                scene continues with a penalty: injuries that follow the
                character into later cutscenes, a narrowed escape window, or a
                death. Some collectibles are deliberately hidden behind QTE
                sequences, so misses also cost Archivist trophy progress.
              </p>
              <p className="text-amber-400 text-xs">
                ⟳ How to pass: keep your fingers on the shoulder buttons or keys,
                don&apos;t put the controller down during cinematics — prompts can
                appear with no warning in the middle of a &ldquo;safe&rdquo; dialogue.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 bg-emerald-900/20 rounded-r-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-sm text-emerald-400">STEALTH &amp; TIMING</span>
                <span className="text-slate-200 font-medium">Patrols, scanners, and timed sequences</span>
              </div>
              <p className="text-slate-400 text-sm mb-2">
                The Growth organisms patrol fixed routes, and the ship&apos;s
                biometric scanner sweeps whoever it aims at. In the Episode 7
                Geoscience section, the first organism passes left to right on a
                roughly twelve-second cycle, and the second sweeps through about
                eight seconds later — but it never checks behind the central
                console, which is your hiding spot. Getting caught usually
                doesn&apos;t end the run on the spot; it costs you a worse
                outcome, an injury, or a death later in the sequence.
              </p>
              <p className="text-amber-400 text-xs">
                ⟳ How to pass: watch one full patrol cycle before moving, and
                remember that Episode 3&apos;s Cernan choice changes this
                section&apos;s difficulty — investigate alone and the Episode 7
                patrols get longer with more enemies.
              </p>
            </div>

            <div className="border-l-4 border-violet-500 bg-violet-900/20 rounded-r-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-sm text-violet-400">RELATIONSHIP</span>
                <span className="text-slate-200 font-medium">Hidden trust, persuasion, and Destiny checks</span>
              </div>
              <p className="text-slate-400 text-sm mb-2">
                These are the checks that feel random — and they aren&apos;t.
                The game quietly tallies your dialogue and action choices into
                per-character relationship states, then evaluates them at key
                moments. Persuasion checks in Episode 2, the trust check that
                decides Stafford&apos;s Episode 5 breakdown, the dialogue check
                in Episode 7 that gets harder if Williams died in Episode 5 —
                every one of them was decided episodes before the prompt
                appears.
              </p>
              <p className="text-amber-400 text-xs">
                ⟳ How to pass: treat every dialogue wheel as a long-term
                investment. One &ldquo;small&rdquo; wrong answer — like Implore
                at the Episode 1 Medical Complex — applies a permanent -1
                modifier to Stafford&apos;s trust.
              </p>
            </div>
          </div>
        </section>

        {/* Real checks table */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Real Checks You&apos;ll Face, Episode by Episode
          </h2>
          <p className="text-slate-400 mb-6">
            The checks that actually decide who lives and who dies in a run:
          </p>
          <div className="overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-slate-800/80 text-slate-300">
                  <th className="px-4 py-3 font-semibold whitespace-nowrap">When</th>
                  <th className="px-4 py-3 font-semibold">Check type</th>
                  <th className="px-4 py-3 font-semibold">What decides it</th>
                  <th className="px-4 py-3 font-semibold">If it goes wrong</th>
                </tr>
              </thead>
              <tbody className="text-slate-400 divide-y divide-slate-800">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-200">Ep 1 — Hull Breach</td>
                  <td className="px-4 py-3">Relationship</td>
                  <td className="px-4 py-3">Seal the breach vs. evacuate</td>
                  <td className="px-4 py-3">Lost trust buffer for later Stafford checks</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-200">Ep 1 — Medical Complex</td>
                  <td className="px-4 py-3">Relationship</td>
                  <td className="px-4 py-3">Honor vs. Implore</td>
                  <td className="px-4 py-3">Permanent -1 Stafford trust; Ep 5 Destiny check much harder</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-200">Ep 2 — Command Deck &amp; Observation Deck</td>
                  <td className="px-4 py-3">Relationship</td>
                  <td className="px-4 py-3">Trusting Stafford&apos;s plan and listening on the observation deck</td>
                  <td className="px-4 py-3">The Father Destiny doesn&apos;t unlock in Episode 5</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-200">Ep 5 — Point Blank</td>
                  <td className="px-4 py-3">Setup check</td>
                  <td className="px-4 py-3">Weapon authorized in Ep 1 + sedative prepared in Ep 5</td>
                  <td className="px-4 py-3">Sedate Williams trophy locked; Ep 7 dialogue check harder</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-200">Ep 6 — Two Eiseles</td>
                  <td className="px-4 py-3">Identification</td>
                  <td className="px-4 py-3">Which Eisele arrived with the group</td>
                  <td className="px-4 py-3">True ending locked permanently</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-200">Ep 6 — Outdoor Junction</td>
                  <td className="px-4 py-3">Navigation</td>
                  <td className="px-4 py-3">Left (cave) vs. right (stalactites)</td>
                  <td className="px-4 py-3">Anders dies; a mimic takes his place</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-200">Ep 7 — Geoscience</td>
                  <td className="px-4 py-3">Stealth / timing</td>
                  <td className="px-4 py-3">Patrol timing + Ep 3 Cernan choice</td>
                  <td className="px-4 py-3">Detection, injuries, possible deaths</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why earlier choices matter */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Why Earlier Choices Decide Your Checks
          </h2>
          <p className="text-slate-400 mb-4">
            Directive 8020 is built so that the hardest checks are the ones you
            were supposed to prepare for scenes earlier. The pattern repeats all
            game:
          </p>
          <ul className="text-sm text-slate-300 space-y-3 list-disc list-inside">
            <li>
              <strong>Choose Implore in Episode 1</strong> and Stafford&apos;s
              Episode 5 Destiny check becomes &ldquo;significantly harder even
              with later good choices&rdquo; — the game&apos;s own way of saying
              some penalties are permanent.
            </li>
            <li>
              <strong>Skip the sedative in the Episode 5 science lab</strong>{' '}
              (no prompt, no marker — you must walk to the chemistry station
              yourself) and the Point Blank confrontation has no non-lethal
              option at all. No check can save Williams.
            </li>
            <li>
              <strong>Shoot Williams in Episode 5</strong> and his Episode 7
              intel vanishes, making one dialogue check harder and thinning
              your Episode 8 options.
            </li>
            <li>
              <strong>Pick the wrong Eisele in Episode 6</strong> and no amount
              of perfect play afterwards recovers the true ending. The check
              happened; the lock is permanent.
            </li>
          </ul>
          <p className="text-slate-400 mt-4">
            That&apos;s also why &ldquo;skill check&rdquo; guides for this game
            read like relationship guides: the reflexes are the easy part, and
            the relationship setup is where runs are actually won or lost.
          </p>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 mb-4">
            Want every check set up correctly from Episode 1?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/save-everyone" className="inline-block px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
              Save Everyone Guide →
            </Link>
            <Link href="/choices" className="inline-block px-8 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 font-semibold transition-colors">
              All Choices →
            </Link>
            <Link href="/walkthrough" className="inline-block px-8 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-slate-100 font-semibold transition-colors">
              Full Walkthrough →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
