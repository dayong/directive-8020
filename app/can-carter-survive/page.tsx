import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Can Carter Survive in Directive 8020? (No — Scripted Death Explained)',
  description:
    'Carter dies in a scripted event at the end of Episode 1. No choice, QTE, or hidden path can save him — here\'s why, and which 5 characters can survive.',
  openGraph: {
    title: 'Can Carter Survive in Directive 8020? (No — Scripted Death Explained)',
    description:
      'Carter\'s death in Episode 1 is scripted and unavoidable. Learn why the game frames it as your fault, and which characters you can actually save.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Can Carter survive in Directive 8020?',
    a: 'No. Carter dies in a scripted event at the end of Episode 1 on every playthrough. There is no QTE, dialogue option, or hidden path that prevents it.',
  },
  {
    q: 'Can you save Carter and Simms?',
    a: 'No. Both have scripted deaths in Episode 1. Simms is corrupted by the alien Growth, and she later appears as a mimic — not the real Simms.',
  },
  {
    q: 'Which characters can survive in Directive 8020?',
    a: 'The 5 playable characters: Osmond, Stafford, Eisele, Cernan, and Cooper. All five can reach the end alive and unlock the true ending.',
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

export default function CanCarterSurvivePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Can Carter Survive in Directive 8020?
          </h1>
          <p className="text-violet-300 font-medium text-lg mb-2">
            No. Carter&apos;s death is scripted — it happens on every single playthrough.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Here&apos;s exactly what happens, why the game makes you feel like
            it was your fault, and which characters you can actually save.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* The Straight Answer */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            The Straight Answer
          </h2>
          <div className="bg-red-900/30 border-2 border-red-600 rounded-lg p-6">
            <p className="text-slate-200">
              <strong className="text-white">Carter dies.</strong> There is no
              QTE, dialogue option, or hidden path that prevents it. He dies in
              a scripted event at the end of Episode 1 and it is going to
              happen <strong className="text-white">every single time</strong>{' '}
              you play. Do not waste time reloading checkpoints trying to save
              him.
            </p>
          </div>
        </section>

        {/* Why it feels like your fault */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Why the Game Makes You Think You Could Have Saved Him
          </h2>
          <p className="text-slate-300">
            This is deliberate. The game frames Carter&apos;s death like a
            consequence of a choice you made, and plenty of players spend an
            hour reloading checkpoints before they accept the truth. That
            feeling of &ldquo;maybe I could have saved him&rdquo; is exactly
            what Supermassive wanted — it&apos;s how the game establishes
            stakes for the five characters who <em>can</em> die by your
            choices.
          </p>
        </section>

        {/* What happens (spoilers collapsed but crawlable) */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            What Actually Happens to Carter and Simms
          </h2>
          <details className="border border-amber-600/50 rounded-lg bg-amber-900/10 group">
            <summary className="px-4 py-3 cursor-pointer text-amber-300 font-medium hover:text-amber-200 transition-colors marker:text-amber-400">
              ⚠ Spoilers — click to expand the death scene details
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-300 space-y-3">
              <p>
                Both deaths are hard-coded into the Episode 1 narrative.{' '}
                <strong>Carter</strong> dies in a scripted event at the end of
                the chapter, no matter what you do earlier. <strong>Simms</strong>{' '}
                is corrupted by the alien Growth and her death is equally
                unavoidable.
              </p>
              <p>
                Simms&apos;s story doesn&apos;t end there, though — she appears
                in later episodes as a <strong>mimic</strong>, not the real
                Simms. That reveal only works because she actually died in
                Episode 1.
              </p>
              <p>
                This is intentional design. The Dark Pictures Anthology games
                feature 5 playable characters in co-op mode, and Directive 8020
                has 6 crew members total. Carter and Simms exist as narrative
                catalysts — their deaths establish the stakes and motivate the
                surviving five. The math doesn&apos;t work any other way.
              </p>
            </div>
          </details>
        </section>

        {/* Who you CAN save */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            The 5 Characters You Can Save
          </h2>
          <p className="text-slate-300 mb-4">
            Focus your energy on the five playable characters — all of them can
            reach the end alive:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            {['Osmond', 'Stafford', 'Eisele', 'Cernan', 'Cooper'].map((name) => (
              <div
                key={name}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-3"
              >
                <p className="text-sm font-medium text-slate-200">{name}</p>
                <p className="text-xs text-green-400 font-bold">Can survive</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Keeping all five alive — plus identifying the duplicate Eisele in
            Episode 6 and exposing the clone program in Episode 8 — unlocks the
            true ending, &ldquo;Eisele the Humanitarian.&rdquo;
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
            Ready to keep the right five characters alive?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/save-everyone" className="inline-block px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
              Save Everyone Guide →
            </Link>
            <Link href="/walkthrough/episode-1" className="inline-block px-8 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 font-semibold transition-colors">
              Episode 1 Walkthrough →
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
