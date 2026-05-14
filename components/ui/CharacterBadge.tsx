import type { Character } from '@/types';

interface CharacterBadgeProps {
  character: Character;
  alive: boolean;
}

export default function CharacterBadge({
  character,
  alive,
}: CharacterBadgeProps) {
  if (character.scriptedDeath) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-600 bg-slate-800/50">
        <span className="text-base">💀</span>
        <span className="text-sm text-slate-500 line-through">
          {character.name}
        </span>
        <span className="text-xs text-amber-500">Scripted Death</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${
        alive
          ? 'border-green-500 bg-green-900/20'
          : 'border-red-500 bg-red-900/20'
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${alive ? 'bg-green-400' : 'bg-red-400'}`}
      />
      <span
        className={`text-sm ${alive ? 'text-slate-100' : 'text-slate-500 line-through'}`}
      >
        {character.name}
      </span>
      {!alive && <span className="text-xs text-red-400">Deceased</span>}
    </div>
  );
}
