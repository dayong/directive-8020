import type { Ending } from '@/types';

export default function EndingCard({ ending }: { ending: Ending }) {
  return (
    <div
      className={`p-4 rounded-lg border-2 ${
        ending.isTrueEnding
          ? 'border-amber-500 bg-amber-500/10'
          : 'border-slate-700 bg-slate-800/50'
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-lg font-semibold text-slate-100">
          {ending.name}
        </h3>
        {ending.isTrueEnding && (
          <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
            True Ending
          </span>
        )}
      </div>
      <p className="text-sm text-slate-400 mb-3">{ending.description}</p>
      <div className="space-y-1 text-xs">
        <div className="flex gap-2">
          <span className="text-slate-500">Condition:</span>
          <span className="text-slate-300">{ending.condition}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-slate-500">Survivors:</span>
          <span className="text-slate-300">{ending.survivorCount}</span>
        </div>
        {ending.turningPoint && (
          <div className="flex gap-2">
            <span className="text-slate-500">Turning Point:</span>
            <span className="text-amber-400">{ending.turningPoint}</span>
          </div>
        )}
      </div>
    </div>
  );
}
