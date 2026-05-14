'use client';

import { useState } from 'react';
import { choices } from '@/data/choices';
import { episodes } from '@/data/episodes';

interface SelectedChoice {
  choiceId: string;
  optionIndex: number;
}

export default function ChoiceTree() {
  const [activeEpisode, setActiveEpisode] = useState('episode-1');
  const [selections, setSelections] = useState<SelectedChoice[]>([]);

  const episodeChoices = choices.filter((c) => c.episode === activeEpisode);
  const episode = episodes.find((e) => e.id === activeEpisode);
  const episodeIds = ['episode-1', 'episode-2', 'episode-3'];

  const handleSelect = (choiceId: string, optionIndex: number) => {
    setSelections((prev) => {
      const filtered = prev.filter((s) => s.choiceId !== choiceId);
      return [...filtered, { choiceId, optionIndex }];
    });
  };

  const getSelection = (choiceId: string) =>
    selections.find((s) => s.choiceId === choiceId);

  // Count recommended choices made
  const recommendedCount = selections.reduce((count, sel) => {
    const choice = choices.find((c) => c.id === sel.choiceId);
    if (choice && choice.options[sel.optionIndex]?.recommended) {
      return count + 1;
    }
    return count;
  }, 0);

  const totalChoices = episodeChoices.length;
  const stepsFromBest =
    selections.length < totalChoices
      ? totalChoices - selections.length
      : totalChoices - recommendedCount;

  return (
    <div className="border border-slate-700 rounded-lg bg-slate-800/50 p-6">
      <h3 className="text-lg font-bold text-slate-100 mb-4">
        Interactive Decision Tree
      </h3>

      {/* Episode tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {episodeIds.map((epId) => {
          const ep = episodes.find((e) => e.id === epId);
          return (
            <button
              key={epId}
              onClick={() => setActiveEpisode(epId)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeEpisode === epId
                  ? 'bg-violet-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              EP{ep?.number} {ep?.title}
            </button>
          );
        })}
      </div>

      {/* Choice nodes */}
      <div className="space-y-4">
        {episodeChoices.map((choice) => {
          const selection = getSelection(choice.id);

          return (
            <div
              key={choice.id}
              className="border border-slate-600 rounded-lg p-4 bg-slate-800/30"
            >
              <p className="text-sm text-slate-300 font-medium mb-1">
                {choice.scene}
              </p>
              <p className="text-xs text-slate-400 mb-3">
                {choice.description}
              </p>

              <div className="flex flex-col gap-2">
                {choice.options.map((opt, i) => {
                  const isSelected = selection?.optionIndex === i;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(choice.id, i)}
                      className={`text-left p-3 rounded-lg border text-sm transition-all ${
                        isSelected
                          ? opt.recommended
                            ? 'border-green-500 bg-green-900/30 text-green-300'
                            : 'border-red-500 bg-red-900/30 text-red-300'
                          : 'border-slate-600 bg-slate-800/50 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                      }`}
                    >
                      <span className="font-medium">{opt.label}</span>
                      {isSelected && (
                        <span className="ml-2 text-xs">
                          {opt.recommended ? '✓ Best choice' : '✗ Suboptimal'}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Show consequence when selected */}
              {selection !== undefined && (
                <div
                  className={`mt-3 p-3 rounded-lg text-xs ${
                    choice.options[selection.optionIndex].recommended
                      ? 'bg-green-900/20 border border-green-700 text-green-300'
                      : 'bg-red-900/20 border border-red-700 text-red-300'
                  }`}
                >
                  <p className="font-medium mb-1">Consequence:</p>
                  <p>{choice.options[selection.optionIndex].consequence}</p>
                  {choice.options[selection.optionIndex].characterEffect && (
                    <p className="text-violet-400 mt-1">
                      {choice.options[selection.optionIndex].characterEffect}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Distance from best ending */}
      <div className="mt-6 p-4 rounded-lg bg-slate-800/80 border border-slate-600">
        <p className="text-sm text-slate-400">
          Best ending progress for {episode?.title}:
        </p>
        <p className="text-lg font-bold mt-1">
          {selections.length === 0 ? (
            <span className="text-slate-500">
              Make your choices above to see the path
            </span>
          ) : stepsFromBest === 0 ? (
            <span className="text-green-400">
              ✓ On track for the best ending!
            </span>
          ) : (
            <span className="text-amber-400">
              {stepsFromBest} step{stepsFromBest !== 1 ? 's' : ''} away from
              the optimal path
            </span>
          )}
        </p>
        <p className="text-xs text-slate-500 mt-1">
          {recommendedCount}/{selections.length || 0} recommended choices made
          {selections.length < totalChoices &&
            ` (${totalChoices - selections.length} choices remaining)`}
        </p>
      </div>
    </div>
  );
}
