'use client';

import { useState } from 'react';
import ChoiceCard from '@/components/ui/ChoiceCard';
import ChoiceTree from '@/components/features/ChoiceTree';
import { choices } from '@/data/choices';
import { episodes } from '@/data/episodes';

const episodeIds = ['episode-1', 'episode-2', 'episode-3'];

export default function ChoicesPage() {
  const [activeTab, setActiveTab] = useState('episode-1');
  const [search, setSearch] = useState('');

  const filteredChoices = choices.filter((c) => {
    const matchesEpisode = c.episode === activeTab;
    const matchesSearch =
      !search ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.scene.toLowerCase().includes(search.toLowerCase()) ||
      c.options.some(
        (o) =>
          o.text.toLowerCase().includes(search.toLowerCase()) ||
          o.consequence.toLowerCase().includes(search.toLowerCase())
      );
    return matchesEpisode && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Choices &amp; Consequences
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Every key decision in Directive 8020, what happens when you choose
            each option, and which choices lead to the best ending.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Episode Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {episodeIds.map((epId) => {
            const ep = episodes.find((e) => e.id === epId);
            return (
              <button
                key={epId}
                onClick={() => setActiveTab(epId)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === epId
                    ? 'bg-violet-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                }`}
              >
                EP{ep?.number}: {ep?.title}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search choices, scenes, or consequences..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-sm"
            >
              Clear
            </button>
          )}
        </div>

        {/* Choices list */}
        <section>
          {filteredChoices.length === 0 ? (
            <p className="text-slate-500 text-center py-12">
              No choices match your search.
            </p>
          ) : (
            <div className="space-y-6">
              {filteredChoices.map((choice) => (
                <div
                  key={choice.id}
                  className="border border-slate-700 rounded-lg p-4 bg-slate-800/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-violet-400 bg-violet-400/10 px-2 py-0.5 rounded">
                      {choice.scene}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mb-4">
                    {choice.description}
                  </p>
                  {choice.options.map((opt, i) => (
                    <ChoiceCard
                      key={i}
                      scene={choice.scene}
                      option={opt.text}
                      recommended={opt.recommended}
                      consequence={opt.consequence}
                      characterEffect={opt.characterEffect}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Interactive Decision Tree */}
        <section className="pt-8 border-t border-slate-800">
          <ChoiceTree />
        </section>
      </div>
    </>
  );
}
