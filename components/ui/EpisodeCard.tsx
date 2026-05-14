import Link from 'next/link';
import type { Episode } from '@/types';

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Link
      href={`/walkthrough/${episode.slug}`}
      className="block p-4 rounded-lg border border-slate-700 bg-slate-800/50 hover:border-violet-500 hover:bg-slate-800 transition-all"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-bold text-violet-400 bg-violet-400/10 px-2 py-1 rounded">
          EP {episode.number}
        </span>
        <h3 className="text-lg font-semibold text-slate-100">
          {episode.title}
        </h3>
      </div>
      <p className="text-sm text-slate-400 mb-3 line-clamp-2">
        {episode.description}
      </p>
      <div className="flex items-center gap-4 text-xs text-slate-500">
        <span>{episode.duration}</span>
        {episode.keyChoices > 0 && (
          <span>{episode.keyChoices} key choices</span>
        )}
      </div>
    </Link>
  );
}
