import SurvivalTracker from '@/components/features/SurvivalTracker';
import ChoiceCard from '@/components/ui/ChoiceCard';
import { CtaSection } from '@/components/content/CtaSection';
import { HeroSection } from '@/components/content/HeroSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { choices, getChoicesByEpisode } from '@/data/choices';
import { episodes } from '@/data/episodes';
import { getPageContent } from '@/lib/content';
import { buildPageMetadata } from '@/lib/page-seo';
import type { SaveEveryoneContent } from '@/types/content-pages';

const SLUG = 'save-everyone';

const content: SaveEveryoneContent = (() => {
  const c = getPageContent<SaveEveryoneContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: content.howTo.name,
  description: content.howTo.description,
  step: content.howTo.steps.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    itemListElement: { '@type': 'HowToDirection', text: step.text },
  })),
};

const episodeIdsWithChoices = ['episode-1', 'episode-2', 'episode-3', 'episode-4', 'episode-5', 'episode-6', 'episode-7'];

const highlightStyles = {
  missable: 'bg-red-900/20 border border-red-700 rounded-lg p-3 mb-3',
  critical: 'bg-amber-900/30 border border-amber-500 rounded-lg p-4 mb-3',
  'true-ending': 'bg-amber-500/10 border-2 border-amber-400 rounded-lg p-4 mb-3',
};

export default function SaveEveryonePage() {
  return (
    <>
      <JsonLd data={howToSchema} />

      <HeroSection hero={content.hero} glow="violet" />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Critical Warning */}
        <div className="bg-red-900/30 border-2 border-red-600 rounded-lg p-6">
          <h2 className="text-red-400 font-bold text-xl mb-3">
            {content.warning.heading}
          </h2>
          <p className="text-slate-300">
            {content.warning.before}{' '}
            <strong className="text-white">{content.warning.strong}</strong>{' '}
            {content.warning.after}
          </p>
        </div>

        {/* Survival Tracker */}
        <div className="sticky bottom-0 z-10 md:static">
          <SurvivalTracker copy={content.tracker} />
        </div>

        {/* Per-Episode Key Choices */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            {content.keyChoices.heading}
          </h2>
          <div className="space-y-4">
            {episodeIdsWithChoices.map((epId) => {
              const episodeChoices = getChoicesByEpisode(epId);
              const episode = episodes.find((e) => e.id === epId);
              const isFirst = epId === 'episode-1';

              return (
                <details
                  key={epId}
                  open={isFirst}
                  className="border border-slate-700 rounded-lg bg-slate-800/50 group"
                >
                  <summary className="px-4 py-3 cursor-pointer text-slate-200 font-medium hover:text-violet-400 transition-colors marker:text-violet-400">
                    {content.keyChoices.episodeHeadingFormat
                      .replace('{number}', String(episode?.number))
                      .replace('{title}', episode?.title ?? '')}
                    <span className="text-xs text-slate-500 ml-2">
                      {content.keyChoices.countFormat.replace('{count}', String(episodeChoices.length))}
                    </span>
                  </summary>
                  <div className="px-4 pb-4 space-y-4">
                    {episodeChoices.map((choice) => {
                      const highlight = content.sceneHighlights[choice.id];
                      return (
                        <div key={choice.id}>
                          <p className="text-sm text-slate-200 font-medium mb-2">
                            {choice.description}
                          </p>

                          {/* Special highlight box */}
                          {highlight && (
                            <div className={highlightStyles[highlight.type]}>
                              <p className="text-sm font-bold mb-1">{highlight.text}</p>
                              {highlight.tip && (
                                <p className="text-xs text-slate-400">{highlight.tip}</p>
                              )}
                            </div>
                          )}

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
                      );
                    })}
                    <a
                      href={`/walkthrough/${episode?.slug}`}
                      className="inline-block mt-3 text-sm font-medium text-violet-400 hover:underline"
                    >
                      {content.keyChoices.walkthroughLinkFormat.replace('{number}', String(episode?.number))}
                    </a>
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        {/* Destinies Checklist */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            {content.destinies.heading}
          </h2>
          <p className="text-sm text-slate-400 mb-4">
            {content.destinies.intro}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  {content.destinies.headers.map((header, i) => (
                    <th
                      key={i}
                      className={`py-3 text-slate-400 font-medium ${i < content.destinies.headers.length - 1 ? 'pr-4' : ''}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {content.destinies.rows.map((d, i) => (
                  <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/30">
                    <td className="py-3 pr-4 font-medium">{d.character}</td>
                    <td className="py-3 pr-4">
                      <span className="text-violet-400">{d.destiny}</span>
                    </td>
                    <td className="py-3 text-xs text-slate-400">{d.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <CtaSection cta={content.cta} />
      </div>
    </>
  );
}
