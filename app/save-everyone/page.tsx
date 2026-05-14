import type { Metadata } from 'next';
import SurvivalTracker from '@/components/features/SurvivalTracker';
import ChoiceCard from '@/components/ui/ChoiceCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { choices, getChoicesByEpisode } from '@/data/choices';
import { episodes } from '@/data/episodes';

export const metadata: Metadata = {
  title: 'How to Save Everyone in Directive 8020 | Best Ending Guide',
  description:
    'Step-by-step guide to keeping all 5 playable characters alive in Directive 8020. Carter and Simms have scripted deaths — save the others for the true ending.',
  openGraph: {
    title: 'How to Save Everyone in Directive 8020 | Best Ending Guide',
    description:
      'Complete guide to saving all crew members in Directive 8020. Carter and Simms have scripted deaths — focus on the 5 playable characters.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

const howToSteps = [
  { name: 'Accept that Carter and Simms cannot be saved', text: 'Carter and Simms die in scripted events during Episode 1. No choices can prevent this — it is by design. Focus on the 5 playable characters.' },
  { name: 'Episode 1 — Authorize weapon use', text: 'In the Crew Quarters Turning Point, choose "Authorize use of weapon" to open combat options later. Choose "Honor" then "Consider" when dealing with Stafford.' },
  { name: 'Episode 2 — Trust Stafford and allow research', text: 'Choose "Trust Stafford" on the Command Deck and "Allow study" in the Science Lab. Investigate the distress call to unlock a collectible.' },
  { name: 'Episode 3 — Report immediately, side with Eisele', text: 'As Cernan, choose "Report immediately" in the Cargo Bay. Choose "Contain and study" in the Containment Lab. Side with Eisele in the Briefing Room debate.' },
  { name: 'Episode 4 — Follow Cooper, confirm reactor kill', text: 'Follow Cooper\'s directions in the maintenance tunnels. After the creature falls into the reactor, confirm it\'s dead and report back.' },
  { name: 'Episode 5 — Prepare sedative, save Mitchell & Anders', text: 'MISSABLE: Prepare the sedative in the lab before leaving. Rescue both Mitchell and Anders from the fire. Encourage Stafford to unlock The Father Destiny.' },
  { name: 'Episode 6 — Trust the newcomer Eisele, turn RIGHT outside', text: 'The most critical choice: trust the NEWCOMER Eisele. Turn RIGHT at the outdoor junction (not into the cave). Escape the reactor before meltdown.' },
  { name: 'Episodes 7-8 — Expose the clone program', text: 'Eisele must choose "Expose the clone program" to unlock the true ending. This broadcasts the truth to humanity and ends Cycle 13.' },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Save Everyone in Directive 8020',
  description: 'Step-by-step guide to achieving the true ending with all 5 playable characters surviving.',
  step: howToSteps.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    itemListElement: { '@type': 'HowToDirection', text: step.text },
  })),
};

const episodeIdsWithChoices = ['episode-1', 'episode-2', 'episode-3', 'episode-4', 'episode-5', 'episode-6', 'episode-7'];

// Special highlight configs for key scenes
const sceneHighlights: Record<string, { type: 'missable' | 'critical' | 'true-ending'; text: string; tip?: string }> = {
  'e5-sedative': { type: 'missable', text: '⚠ MISSABLE — The game does not prompt this. Actively explore the lab before leaving.', tip: 'Interact with the lab equipment to prepare the sedative.' },
  'e6-two-eiseles': { type: 'critical', text: '🔑 Most Critical Choice in the Game', tip: 'Watch their fear animations when the gun is pointed at them. The newcomer\'s reaction looks genuinely human and scared. The other\'s movements are subtly unnatural.' },
  'e6-outdoor-junction': { type: 'missable', text: '⚠ The game does NOT warn you this is a point of no return. Once you enter the cave, you cannot go back.' },
  'e7-eisele-final': { type: 'true-ending', text: '⭐ Unlocks True Ending — Eisele the Humanitarian' },
};

const highlightStyles = {
  missable: 'bg-red-900/20 border border-red-700 rounded-lg p-3 mb-3',
  critical: 'bg-amber-900/30 border border-amber-500 rounded-lg p-4 mb-3',
  'true-ending': 'bg-amber-500/10 border-2 border-amber-400 rounded-lg p-4 mb-3',
};

const destinies = [
  { character: 'Young', destiny: 'The Humanitarian', how: 'Make compassionate choices throughout the game. Choose Honor when given the option in Episode 1.' },
  { character: 'Stafford', destiny: 'The Father', how: 'Encourage him during his breakdown in Episode 5. Say "Never forget why you started."' },
  { character: 'Eisele', destiny: 'The Humanitarian', how: 'Choose to expose the clone program in Episode 8. Requires all prior Eisele-positive choices.' },
  { character: 'Eisele (alt)', destiny: 'The Scientist', how: 'Choose to protect the scientific data in Episode 8 instead of exposing the truth.' },
  { character: 'Cernan', destiny: 'TBC', how: 'Make choices that prioritize Cernan\'s safety in Episodes 3 and 7.' },
  { character: 'Cooper', destiny: 'TBC', how: 'Authorize weapons in Episode 1 and send backup in Episode 5.' },
];

export default function SaveEveryonePage() {
  return (
    <>
      <JsonLd data={howToSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-slate-900 to-slate-900 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            How to Save Everyone in Directive 8020
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A step-by-step guide to keeping all 5 playable characters alive and
            unlocking the true ending — &ldquo;Eisele the Humanitarian.&rdquo;
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Critical Warning */}
        <div className="bg-red-900/30 border-2 border-red-600 rounded-lg p-6">
          <h2 className="text-red-400 font-bold text-xl mb-3">
            ❌ Carter and Simms Cannot Be Saved — This Is By Design
          </h2>
          <p className="text-slate-300">
            Many players get confused trying to save Carter and Simms. Please
            understand: their deaths are scripted story events. No matter what
            choices you make, both characters will die in their pre-determined
            scenes.{' '}
            <strong className="text-white">
              Do not waste time trying to change this.
            </strong>{' '}
            Focus on protecting the 5 playable characters: Young, Stafford,
            Eisele, Cernan, and Cooper.
          </p>
        </div>

        {/* Survival Tracker */}
        <div className="sticky bottom-0 z-10 md:static">
          <SurvivalTracker />
        </div>

        {/* Per-Episode Key Choices */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Key Choices by Episode
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
                    Episode {episode?.number}: {episode?.title}
                    <span className="text-xs text-slate-500 ml-2">
                      ({episodeChoices.length} key choices)
                    </span>
                  </summary>
                  <div className="px-4 pb-4 space-y-4">
                    {episodeChoices.map((choice) => {
                      const highlight = sceneHighlights[choice.id];
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
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        {/* Destinies Checklist */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Destinies Unlock Checklist
          </h2>
          <p className="text-sm text-slate-400 mb-4">
            Each playable character has a Destiny that unlocks during specific
            moments. Unlocking these is required for the best ending route.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  <th className="py-3 pr-4 text-slate-400 font-medium">Character</th>
                  <th className="py-3 pr-4 text-slate-400 font-medium">Destiny</th>
                  <th className="py-3 text-slate-400 font-medium">How to Unlock</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {destinies.map((d, i) => (
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
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 mb-4">
            Once everyone is alive, check out all the possible endings:
          </p>
          <a
            href="/all-endings"
            className="inline-block px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
          >
            View All Endings →
          </a>
        </div>
      </div>
    </>
  );
}
