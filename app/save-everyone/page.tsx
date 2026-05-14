import type { Metadata } from 'next';
import SurvivalTracker from '@/components/features/SurvivalTracker';
import ChoiceCard from '@/components/ui/ChoiceCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { choices, getChoicesByEpisode } from '@/data/choices';
import { episodes } from '@/data/episodes';

export const metadata: Metadata = {
  title:
    'How to Save Everyone in Directive 8020 | Best Ending Guide',
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
  {
    name: 'Accept that Carter and Simms cannot be saved',
    text: 'Carter and Simms die in scripted events during Episode 1. No choices can prevent this — it is by design. Focus your efforts on the 5 playable characters.',
  },
  {
    name: 'Episode 1 — Authorize weapon use',
    text: 'In the Crew Quarters Turning Point, choose "Authorize use of weapon" to open combat options later in the game. Also choose "Honor" then "Consider" when dealing with Stafford.',
  },
  {
    name: 'Episode 2 — Trust Stafford and allow Eisele\'s research',
    text: 'Choose "Trust Stafford" on the Command Deck and "Allow study" in the Science Lab. Investigate the distress call to unlock a collectible.',
  },
  {
    name: 'Episode 3 — Report immediately, side with Eisele',
    text: 'As Cernan, choose "Report immediately" in the Cargo Bay. Choose "Contain and study" in the Containment Lab. Side with Eisele in the Briefing Room debate.',
  },
  {
    name: 'Episode 4 — Stay united',
    text: 'Keep the crew together. Avoid choices that create division. Trust Stafford\'s leadership while supporting Eisele\'s scientific input.',
  },
  {
    name: 'Episode 5 — Mr. Williams encounter',
    text: 'Choose dialogue options that prioritize crew safety. Authorize weapons when prompted. Do not sacrifice any crew member for intel.',
  },
  {
    name: 'Episode 6 — Identify the duplicate Eisele',
    text: 'Pay close attention to dialogue inconsistencies. The real Eisele references earlier events correctly. The duplicate makes factual errors. Choose correctly to unlock the true ending path.',
  },
  {
    name: 'Episode 7 — Protect the survivors',
    text: 'Make choices that keep each remaining character safe. Prioritize group survival over individual heroics. Watch for QTE sequences.',
  },
  {
    name: 'Episode 8 — The final choice',
    text: 'Choose to sacrifice the alien sample rather than preserve it. This triggers the "Eisele the Humanitarian" true ending with all 5 survivors.',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Save Everyone in Directive 8020',
  description:
    'Step-by-step guide to achieving the true ending with all 5 playable characters surviving.',
  step: howToSteps.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    itemListElement: {
      '@type': 'HowToDirection',
      text: step.text,
    },
  })),
};

// Episodes that have choice data (currently Episodes 1-3)
const episodeIdsWithChoices = ['episode-1', 'episode-2', 'episode-3'];

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
        {/* Critical Warning — most prominent position */}
        <div className="bg-red-900/30 border-2 border-red-600 rounded-lg p-6 mb-8">
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

        {/* Survival Tracker — sticky bottom on mobile */}
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
                  <div className="px-4 pb-4 space-y-2">
                    {episodeChoices.map((choice) => (
                      <div key={choice.id}>
                        <p className="text-sm text-slate-400 mb-2">
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
                </details>
              );
            })}
          </div>
          <p className="text-xs text-slate-500 mt-4">
            Full walkthrough for Episodes 4-8 coming soon. Check the{' '}
            <a
              href="/walkthrough"
              className="text-violet-400 hover:underline"
            >
              Walkthrough
            </a>{' '}
            page for detailed chapter-by-chapter guides.
          </p>
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
