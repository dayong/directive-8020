import type { Metadata } from 'next';
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

export default function WalkthroughPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Episode Walkthroughs
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Complete chapter-by-chapter walkthroughs for Directive 8020. Each
            guide covers every key choice, QTE sequence, collectible location,
            and survival tip.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {episodes.filter(e => e.keyChoices > 0).map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </>
  );
}
