'use client';

import { useMemo, useState } from 'react';
import type { Character } from '@/types';
import type { SurvivalTrackerCopy } from '@/types/content-pages';
import { characters, getPlayableCharacters, scriptedDeathCharacters } from '@/data/characters';

interface SurvivorState {
  [characterId: string]: boolean;
}

const playableChars = getPlayableCharacters();

function getEndingPrediction(
  aliveCount: number,
  routes: SurvivalTrackerCopy['routes']
) {
  if (aliveCount === 5) {
    return {
      route: routes.best,
      color: 'text-green-400',
      bg: 'bg-green-900/20 border-green-500',
    };
  }
  if (aliveCount >= 3) {
    return {
      route: routes.standard,
      color: 'text-amber-400',
      bg: 'bg-amber-900/20 border-amber-500',
    };
  }
  if (aliveCount >= 1) {
    return {
      route: routes.bad,
      color: 'text-orange-400',
      bg: 'bg-orange-900/20 border-orange-500',
    };
  }
  return {
    route: routes.gameOver,
    color: 'text-red-400',
    bg: 'bg-red-900/20 border-red-500',
  };
}

export default function SurvivalTracker({ copy }: { copy: SurvivalTrackerCopy }) {
  const [survivors, setSurvivors] = useState<SurvivorState>(() => {
    const initial: SurvivorState = {};
    playableChars.forEach((c) => {
      initial[c.id] = true;
    });
    return initial;
  });

  const aliveCount = useMemo(
    () => playableChars.filter((c) => survivors[c.id]).length,
    [survivors]
  );

  const prediction = useMemo(
    () => getEndingPrediction(aliveCount, copy.routes),
    [aliveCount, copy.routes]
  );

  const toggle = (id: string) => {
    setSurvivors((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="border border-slate-700 rounded-lg bg-slate-800/50 p-6">
      <h2 className="text-lg font-bold text-slate-100 mb-4">
        {copy.heading}
      </h2>

      {/* Playable characters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
        {playableChars.map((char) => (
          <label
            key={char.id}
            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
              survivors[char.id]
                ? 'border-green-500 bg-green-900/20 hover:bg-green-900/30'
                : 'border-red-500 bg-red-900/20 hover:bg-red-900/30'
            }`}
          >
            <input
              type="checkbox"
              checked={survivors[char.id]}
              onChange={() => toggle(char.id)}
              className="sr-only"
            />
            <span
              className={`w-3 h-3 rounded-full border-2 ${
                survivors[char.id]
                  ? 'bg-green-400 border-green-400'
                  : 'bg-red-400 border-red-400'
              }`}
            />
            <span
              className={`text-sm font-medium ${
                survivors[char.id] ? 'text-slate-100' : 'text-slate-400 line-through'
              }`}
            >
              {char.name}
            </span>
          </label>
        ))}
      </div>

      {/* Scripted death characters — greyed out */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
        {scriptedDeathCharacters.map((char) => (
          <div
            key={char.id}
            className="flex items-center gap-3 p-3 rounded-lg border border-slate-600 bg-slate-800/30 opacity-60 cursor-not-allowed"
          >
            <span className="text-base">💀</span>
            <div>
              <span className="text-sm text-slate-500 line-through">
                {char.name}
              </span>
              <span className="block text-xs text-amber-500">
                {copy.scriptedDeathLabel}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Ending prediction */}
      <div
        className={`border rounded-lg p-4 ${prediction.bg}`}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-400">{copy.predictedRouteLabel}</span>
          <span className={`font-bold ${prediction.color}`}>
            {prediction.route}
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          {copy.aliveFormat.replace('{alive}', String(aliveCount))}
          {aliveCount < 5 && ` ${copy.aliveHint}`}
        </p>
      </div>
    </div>
  );
}
