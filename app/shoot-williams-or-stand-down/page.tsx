import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Directive 8020 — Shoot Williams or Stand Down? Best Choice & Consequences',
  description:
    'Directive 8020 Episode 5: Stand Down is best if you prepared the sedative — Williams survives and you unlock the Sedate Williams trophy. Without it, shoot instead.',
  openGraph: {
    title: 'Directive 8020 — Shoot Williams or Stand Down? Best Choice & Consequences',
    description:
      'Episode 5 Point Blank choice explained: Stand Down with the sedative, Shoot without it. Full consequences for both options.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Should you shoot Williams or stand down in Directive 8020?',
    a: 'Stand Down is the best choice if you prepared the sedative in the Episode 5 lab — Williams survives, you earn the Sedate Williams trophy, and his intel helps in Episodes 7 and 8. If you skipped the sedative, Shoot is the safer option.',
  },
  {
    q: 'What happens if you shoot Williams?',
    a: 'The duplicate is eliminated immediately. The Sedate Williams trophy is permanently locked, Williams\'s Ep7 intel is lost, and one Ep7 dialogue check becomes harder.',
  },
  {
    q: 'What happens if you stand down without the sedative?',
    a: 'Without the sedative there is no non-lethal option — Williams must die or escape. That\'s why preparing the sedative before leaving the science lab is the single most missable step in the game.',
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

export default function ShootWilliamsPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Shoot Williams or Stand Down?
          </h1>
          <p className="text-violet-300 font-medium text-lg mb-2">
            Stand Down — if you prepared the sedative. Shoot — if you didn&apos;t.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The Episode 5 &ldquo;Point Blank&rdquo; choice, fully broken down:
            what each option does, what it locks, and what it unlocks.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* The Three Options */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            The Three Options at Point Blank
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 bg-green-900/20 rounded-r-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-sm text-green-400">✓ Best with sedative</span>
                <span className="text-slate-200 font-medium">Stand Down — hold fire</span>
              </div>
              <p className="text-slate-400 text-sm mb-2">
                Buys time. If you prepared the sedative in the lab, it becomes
                available here and Williams can be neutralized non-lethally.
              </p>
              <p className="text-amber-400 text-xs">
                ⟳ Cross-episode: Stand Down + sedative = Williams lives → helpful Ep7 intel → better Ep8 dynamics. Required for the Sedate Williams trophy.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-900/20 rounded-r-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-sm text-red-400">✓ Safer without sedative</span>
                <span className="text-slate-200 font-medium">Shoot immediately</span>
              </div>
              <p className="text-slate-400 text-sm mb-2">
                The Williams duplicate is eliminated on the spot. Clean and
                fast — but you lose the optional trophy.
              </p>
              <p className="text-amber-400 text-xs">
                ⟳ Cross-episode: Shoot = Williams dies → loses Ep7 intel → one Ep7 dialogue check harder. Sedate Williams trophy locked.
              </p>
            </div>

            <div className="border-l-4 border-slate-600 bg-slate-800/50 rounded-r-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-sm text-slate-400">Neutral</span>
                <span className="text-slate-200 font-medium">Time Out — wait and see</span>
              </div>
              <p className="text-slate-400 text-sm">
                A minor delay with the same outcomes as Stand Down.
              </p>
            </div>
          </div>
        </section>

        {/* Scene Context (spoilers collapsed but crawlable) */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            What Leads Up to This Choice?
          </h2>
          <details className="border border-amber-600/50 rounded-lg bg-amber-900/10 group">
            <summary className="px-4 py-3 cursor-pointer text-amber-300 font-medium hover:text-amber-200 transition-colors marker:text-amber-400">
              ⚠ Spoilers — click to expand the scene context
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-300 space-y-3">
              <p>
                Williams is scanned by the ship&apos;s biometric system during
                Episode 5 (&ldquo;Mr. Williams&rdquo;). The result is immediate
                and damning: <strong>&ldquo;Subject unidentifiable.&rdquo;</strong>{' '}
                Before anyone can react, Williams begins to transform — skin
                shifting, form destabilizing. The mimicry breaks down under the
                scanner&apos;s beam, and you have seconds to respond.
              </p>
              <p>
                This confrontation only goes well if you did your homework two
                scenes earlier. The <strong>sedative</strong> is the single most
                missable interaction in the game: while Eisele is in the science
                lab, you get roughly ninety seconds of free-roam control and no
                objective marker. Walk to the chemistry station — the counter
                with beakers and an active terminal on the left wall — and
                interact with it. Skip it and the sedative option never appears
                here.
              </p>
              <p>
                One more chain from way back: choosing{' '}
                <strong>&ldquo;Authorize use of weapon&rdquo;</strong> in the
                Episode 1 Crew Quarters is what unlocks the non-lethal
                resolution branch in this standoff in the first place.
              </p>
            </div>
          </details>
        </section>

        {/* A or B — explicit outcomes */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            What Happens If You Pick Each Option
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
              <h3 className="font-bold text-green-400 mb-2">Stand Down →</h3>
              <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                <li>With sedative: Williams is sedated non-lethally and survives</li>
                <li>Unlocks the <strong>Sedate Williams</strong> trophy</li>
                <li>Williams provides helpful intel in Episode 7</li>
                <li>Improves Episode 8 dynamics and feeds the best ending path</li>
                <li>Without sedative: no non-lethal option — Williams must die or escape</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
              <h3 className="font-bold text-red-400 mb-2">Shoot →</h3>
              <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                <li>The duplicate is eliminated immediately — no further threat</li>
                <li><strong>Sedate Williams</strong> trophy permanently locked</li>
                <li>Episode 7 intel from Williams is lost</li>
                <li>One Episode 7 dialogue check becomes harder</li>
                <li>Slightly reduces Episode 7-8 ending quality</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            If you prepared the sedative, Stand Down is the better call — you
            neutralize the threat and keep Williams alive for trophy purposes.
            If you skipped the sedative, shooting is the safer option because
            you have no non-lethal alternative.
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
            Want every Episode 5 choice explained in context?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/walkthrough/episode-5" className="inline-block px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
              Episode 5 Walkthrough →
            </Link>
            <Link href="/choices" className="inline-block px-8 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 font-semibold transition-colors">
              All Choices →
            </Link>
            <Link href="/save-everyone" className="inline-block px-8 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-slate-100 font-semibold transition-colors">
              Save Everyone →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
