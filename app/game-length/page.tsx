import type { Metadata } from 'next';
import Link from 'next/link';
import { episodes } from '@/data/episodes';

export const metadata: Metadata = {
  title: 'Directive 8020 Game Length & How Long to Beat',
  description:
    'How long is Directive 8020? All 8 episodes take around 8 hours to beat. Completionist runs take 12-15 hours. Full breakdown by episode.',
  openGraph: {
    title: 'Directive 8020 Game Length & How Long to Beat',
    description:
      'How long is Directive 8020? Main story ~8 hours, all endings ~12 hours, 100% completion ~15 hours.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function GameLengthPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            How Long to Beat Directive 8020
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A complete breakdown of Directive 8020&apos;s length by playstyle,
            episode, and what affects your total play time.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🎮</div>
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Main Story</p>
            <p className="text-3xl font-bold text-white">~8</p>
            <p className="text-slate-400 text-sm">hours</p>
          </div>
          <div className="bg-slate-800/50 border border-violet-700 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🏁</div>
            <p className="text-xs text-violet-400 uppercase tracking-wide mb-1">All Endings</p>
            <p className="text-3xl font-bold text-white">~12</p>
            <p className="text-slate-400 text-sm">hours</p>
          </div>
          <div className="bg-slate-800/50 border border-amber-700 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <p className="text-xs text-amber-400 uppercase tracking-wide mb-1">100% Completionist</p>
            <p className="text-3xl font-bold text-white">~15</p>
            <p className="text-slate-400 text-sm">hours</p>
          </div>
        </div>

        {/* Episode Breakdown */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Episode Length Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  <th className="py-3 pr-4 text-slate-400 font-medium">Episode</th>
                  <th className="py-3 pr-4 text-slate-400 font-medium">Title</th>
                  <th className="py-3 text-slate-400 font-medium">Length</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {episodes.map((ep) => (
                  <tr key={ep.id} className="border-b border-slate-800 hover:bg-slate-800/30">
                    <td className="py-3 pr-4 font-medium">{ep.number}</td>
                    <td className="py-3 pr-4">
                      <Link href={`/walkthrough/${ep.slug}`} className="text-violet-400 hover:underline">
                        {ep.title}
                      </Link>
                    </td>
                    <td className="py-3">{ep.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What Affects Length */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">What Affects Game Length</h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-violet-400 font-bold shrink-0">Difficulty —</span>
              <span>Explorer mode provides generous QTE timers and fewer fail states, reducing play time. Survivor mode has tighter QTEs and more deaths mean more replays.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400 font-bold shrink-0">Turning Points —</span>
              <span>Using Turning Points to replay decisions and explore alternate paths adds 2-4 hours to your total. Each major branch takes 20-40 minutes to replay.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400 font-bold shrink-0">Collectibles —</span>
              <span>Hunting all 65 collectibles adds approximately 2 hours. Some are hidden in optional exploration areas.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400 font-bold shrink-0">O Death Secrets —</span>
              <span>Finding all 5 O Death secrets requires thorough exploration and using Turning Points to revisit chapters. Adds 1-2 hours.</span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-slate-800 space-y-4">
          <p className="text-slate-400">Ready to start playing?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/walkthrough" className="inline-block px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
              Full Walkthrough →
            </Link>
            <Link href="/save-everyone" className="inline-block px-8 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 font-semibold transition-colors">
              Save Everyone Guide →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
