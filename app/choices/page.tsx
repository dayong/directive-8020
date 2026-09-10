'use client';

import { useState } from 'react';
import ChoiceCard from '@/components/ui/ChoiceCard';
import ChoiceTree from '@/components/features/ChoiceTree';
import { HeroSection } from '@/components/content/HeroSection';
import { RichText } from '@/components/ui/RichText';
import choicesJson from '@/content/pages/en/choices.json';
import { choices } from '@/data/choices';
import { episodes } from '@/data/episodes';
import type { ChoicesContent } from '@/types/content-pages';

const content: ChoicesContent = choicesJson;

const episodeIds = ['episode-1', 'episode-2', 'episode-3', 'episode-4', 'episode-5', 'episode-6', 'episode-7', 'episode-8'];

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
          o.consequence.toLowerCase().includes(search.toLowerCase()) ||
          (o.chainEffect && o.chainEffect.toLowerCase().includes(search.toLowerCase())) ||
          (o.endingImpact && o.endingImpact.toLowerCase().includes(search.toLowerCase()))
      );
    return matchesEpisode && matchesSearch;
  });

  return (
    <>
      <HeroSection hero={content.hero} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Episode Tabs — all 8 */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {episodeIds.map((epId) => {
            const ep = episodes.find((e) => e.id === epId);
            const count = choices.filter((c) => c.episode === epId).length;
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
                {content.tabs.format
                  .replace('{number}', String(ep?.number))
                  .replace('{title}', ep?.title ?? '')}{' '}
                {count > 0 &&
                  content.tabs.countFormat.replace('{count}', String(count))}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder={content.search.placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-sm"
            >
              {content.search.clearLabel}
            </button>
          )}
        </div>

        {/* Choices list */}
        <section>
          {filteredChoices.length === 0 ? (
            <p className="text-slate-500 text-center py-12">
              {content.noResults}
            </p>
          ) : (
            <div className="space-y-6">
              {filteredChoices.map((choice) => (
                <div
                  key={choice.id}
                  className="border border-slate-700 rounded-lg p-5 bg-slate-800/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-violet-400 bg-violet-400/10 px-2 py-0.5 rounded">
                      {choice.scene}
                    </span>
                    {choice.relationshipDetail && (
                      <span className="text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                        {content.relationshipLabel}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-300 mb-4">
                    {choice.description}
                  </p>
                  {choice.relationshipDetail && (
                    <p className="text-xs text-slate-500 mb-4 italic border-l-2 border-slate-700 pl-3">
                      {choice.relationshipDetail}
                    </p>
                  )}
                  {choice.options.map((opt, i) => (
                    <ChoiceCard
                      key={i}
                      scene={choice.scene}
                      option={opt.text}
                      recommended={opt.recommended}
                      consequence={opt.consequence}
                      characterEffect={opt.characterEffect}
                      chainEffect={opt.chainEffect}
                      endingImpact={opt.endingImpact}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Ending Lockout Matrix */}
        <section className="pt-8 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">
            {content.lockout.heading}
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            <RichText text={content.lockout.intro} />
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  {content.lockout.headers.map((header, i) => (
                    <th
                      key={i}
                      className={`py-3 text-slate-400 font-medium ${i === 0 ? 'w-16 ' : ''}${i < content.lockout.headers.length - 1 ? 'pr-4' : ''}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {content.lockout.rows.map((lock, i) => {
                  const choice = choices.find((c) => c.id === lock.choice);
                  return (
                    <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/30">
                      <td className="py-3 pr-4 text-violet-400 font-medium">{lock.ep}</td>
                      <td className="py-3 pr-4">{choice?.scene || lock.choice}</td>
                      <td className="py-3 pr-4 text-red-400">{lock.badPick}</td>
                      <td className="py-3 text-xs text-slate-400">{lock.consequence}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive Tree */}
        <section className="pt-8 border-t border-slate-800">
          <ChoiceTree copy={content.tree} />
        </section>
      </div>
    </>
  );
}
