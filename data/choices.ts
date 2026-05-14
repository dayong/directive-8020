import { Choice } from '@/types';

export const choices: Choice[] = [
  // Episode 1 choices
  {
    id: 'e1-initial-response',
    episode: 'episode-1',
    scene: 'Hull Breach',
    description: 'After the hull breach, how do you respond?',
    options: [
      {
        label: 'Secure the breach',
        text: 'Take time to properly seal the hull breach before proceeding.',
        consequence: 'Crew relationship improves. Slower progress but safer outcome.',
        recommended: true,
      },
      {
        label: 'Evacuate immediately',
        text: 'Abandon the breach zone and rush to safety.',
        consequence: 'Faster evacuation but crew loses trust in your judgment.',
        recommended: false,
        characterEffect: 'Stafford relationship penalty',
      },
    ],
  },
  {
    id: 'e1-honor-implore',
    episode: 'episode-1',
    scene: 'Medical Complex',
    description: 'Stafford confronts you about the situation. How do you respond?',
    options: [
      {
        label: 'Honor',
        text: 'Show respect for Stafford\'s authority and honor his position.',
        consequence: 'Stafford relationship improves significantly. Opens better options in Episode 4.',
        recommended: true,
        characterEffect: 'Stafford +',
      },
      {
        label: 'Implore',
        text: 'Beg Stafford to see things your way.',
        consequence: 'No significant benefit. Stafford views you as weak under pressure.',
        recommended: false,
        characterEffect: 'Stafford -',
      },
    ],
  },
  {
    id: 'e1-consider-doubt',
    episode: 'episode-1',
    scene: 'Medical Complex',
    description: 'After choosing Honor, how do you proceed with the plan?',
    options: [
      {
        label: 'Consider',
        text: 'Carefully consider Stafford\'s plan before acting.',
        consequence: 'Maintains crew trust and keeps all options open.',
        recommended: true,
      },
      {
        label: 'Doubt',
        text: 'Express doubt about the plan.',
        consequence: 'Minor relationship penalty. Crew questions your confidence.',
        recommended: false,
      },
    ],
  },
  {
    id: 'e1-authorize-weapon',
    episode: 'episode-1',
    scene: 'Crew Quarters (Turning Point)',
    description: 'A weapon is found in the Crew Quarters. What do you do?',
    options: [
      {
        label: 'Authorize use of weapon',
        text: 'Allow the weapon to be carried for self-defense.',
        consequence: 'Opens combat options later. Required for certain endings.',
        recommended: true,
      },
      {
        label: 'Refuse',
        text: 'Refuse to authorize weapons on board.',
        consequence: 'Limits options in Episode 5. May close off some ending paths.',
        recommended: false,
      },
    ],
  },
  // Episode 2 choices
  {
    id: 'e2-trust-stafford',
    episode: 'episode-2',
    scene: 'Command Deck',
    description: 'Stafford proposes a risky plan to reach the engine room.',
    options: [
      {
        label: 'Trust Stafford',
        text: 'Back Stafford\'s plan without question.',
        consequence: 'Stafford relationship improves. Plan succeeds but at a cost.',
        recommended: true,
        characterEffect: 'Stafford +',
      },
      {
        label: 'Challenge the plan',
        text: 'Question Stafford\'s judgment and propose an alternative.',
        consequence: 'Stafford relationship penalty. Slower but potentially safer route.',
        recommended: false,
        characterEffect: 'Stafford -',
      },
    ],
  },
  {
    id: 'e2-eisele-sample',
    episode: 'episode-2',
    scene: 'Science Lab',
    description: 'Dr. Eisele wants to study a sample. Do you allow it?',
    options: [
      {
        label: 'Allow study',
        text: 'Let Eisele study the alien sample.',
        consequence: 'Unlocks Eisele Scientist path. More information about the alien threat.',
        recommended: true,
        characterEffect: 'Eisele Scientist Destiny progress',
      },
      {
        label: 'Destroy sample',
        text: 'Order the sample destroyed immediately.',
        consequence: 'Safety first but loses critical intel. Pushes Eisele toward Humanitarian path.',
        recommended: false,
        characterEffect: 'Eisele Humanitarian Destiny progress',
      },
    ],
  },
  {
    id: 'e2-rescue-carter',
    episode: 'episode-2',
    scene: 'Corridor',
    description: 'You hear a distress call. Someone needs help.',
    options: [
      {
        label: 'Investigate',
        text: 'Go toward the distress call.',
        consequence: 'Reveals more of the story. Unlocks a collectible.',
        recommended: true,
      },
      {
        label: 'Stay on mission',
        text: 'Ignore the call and continue to the objective.',
        consequence: 'Misses a collectible and story context. Slightly faster.',
        recommended: false,
      },
    ],
  },
  // Episode 3 choices
  {
    id: 'e3-cernan-trust',
    episode: 'episode-3',
    scene: 'Cargo Bay (Cernan playable)',
    description: 'Cernan encounters something unusual in the cargo bay.',
    options: [
      {
        label: 'Report immediately',
        text: 'Report the finding to command before investigating.',
        consequence: 'Crew is alerted but the entity has time to hide.',
        recommended: true,
        characterEffect: 'Keeps Cernan safer',
      },
      {
        label: 'Investigate alone',
        text: 'Check it out yourself before raising an alarm.',
        consequence: 'Dangerous but yields more information. Cernan may get injured.',
        recommended: false,
      },
    ],
  },
  {
    id: 'e3-sample-handling',
    episode: 'episode-3',
    scene: 'Containment Lab',
    description: 'The alien sample is reacting. How do you handle it?',
    options: [
      {
        label: 'Contain and study',
        text: 'Increase containment and continue research.',
        consequence: 'More data gathered. Risk of containment breach increases.',
        recommended: true,
      },
      {
        label: 'Emergency purge',
        text: 'Jettison the sample into space.',
        consequence: 'Lose the sample. Some endings become unavailable. Crew is safer.',
        recommended: false,
      },
    ],
  },
  {
    id: 'e3-stafford-eisele',
    episode: 'episode-3',
    scene: 'Briefing Room',
    description: 'Stafford and Eisele disagree on the next course of action.',
    options: [
      {
        label: 'Side with Stafford',
        text: 'Agree with Stafford\'s tactical approach.',
        consequence: 'Stafford relationship improves. Eisele feels sidelined.',
        recommended: false,
        characterEffect: 'Stafford + / Eisele -',
      },
      {
        label: 'Side with Eisele',
        text: 'Support Eisele\'s scientific approach.',
        consequence: 'Eisele relationship improves. Stafford questions your loyalty.',
        recommended: true,
        characterEffect: 'Eisele + / Stafford -',
      },
    ],
  },
];

export const getAllChoices = () => choices;
export const getChoicesByEpisode = (episodeId: string) =>
  choices.filter((c) => c.episode === episodeId);
export const getChoiceById = (id: string) =>
  choices.find((c) => c.id === id);
