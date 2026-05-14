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
  // Episode 4 choices
  {
    id: 'e4-follow-cooper',
    episode: 'episode-4',
    scene: 'Maintenance Tunnels (Junction 13)',
    description: 'How do you proceed when you reach junction 13 in the maintenance tunnels?',
    options: [
      {
        label: 'Follow Cooper\'s instructions exactly',
        text: 'Follow Cooper\'s instructions exactly',
        consequence: 'Safe navigation, both Young and Cooper survive.',
        recommended: true,
        characterEffect: 'Cooper relationship +',
      },
      {
        label: 'Investigate alternate path',
        text: 'Investigate alternate path',
        consequence: 'Risk of detection by the creature, but may find collectibles.',
        recommended: false,
      },
    ],
  },
  {
    id: 'e4-reactor-confirm',
    episode: 'episode-4',
    scene: 'Reactor Confrontation',
    description: 'After the creature falls into the reactor, what do you do?',
    options: [
      {
        label: 'Confirm it\'s dead and report back',
        text: 'Confirm it\'s dead and report back',
        consequence: 'Crew reunites safely, threat confirmed eliminated.',
        recommended: true,
      },
      {
        label: 'Investigate further',
        text: 'Investigate further',
        consequence: 'Unnecessary risk — Young may be injured.',
        recommended: false,
      },
    ],
  },
  // Episode 5 choices
  {
    id: 'e5-sedative',
    episode: 'episode-5',
    scene: 'Science Lab — ⚠ MISSABLE CHOICE',
    description: 'Eisele can prepare a sedative for Williams. The game does NOT clearly prompt this — you must actively explore the lab.',
    options: [
      {
        label: 'Prepare the sedative',
        text: 'Prepare the sedative',
        consequence: 'Required for keeping Williams alive later. Needed for "Sedate Williams" trophy.',
        recommended: true,
        characterEffect: 'Unlocks sedative option in confrontation',
      },
      {
        label: 'Skip the lab equipment',
        text: 'Skip / don\'t interact with sedative equipment',
        consequence: 'Williams cannot be sedated later, death more likely. Missable trophy.',
        recommended: false,
      },
    ],
  },
  {
    id: 'e5-point-blank',
    episode: 'episode-5',
    scene: 'Point Blank — Williams Confrontation',
    description: 'Williams is exposed as a duplicate. How do you respond during the transformation?',
    options: [
      {
        label: 'Stand Down',
        text: 'Stand Down (if sedative was prepared)',
        consequence: 'Buys time, opens sedative option. Williams can be neutralized non-lethally.',
        recommended: true,
        characterEffect: 'Keeps Williams alive if sedative prepared',
      },
      {
        label: 'Shoot',
        text: 'Shoot',
        consequence: 'Williams duplicate is eliminated immediately. Clean but loses optional trophy.',
        recommended: false,
      },
    ],
  },
  {
    id: 'e5-fire-rescue',
    episode: 'episode-5',
    scene: 'Hydroponics Bay Fire',
    description: 'Mitchell and Anders are trapped in a fire. What do you do?',
    options: [
      {
        label: 'Rescue both Mitchell and Anders',
        text: 'Rescue both Mitchell and Anders',
        consequence: 'Both NPCs survive. Trophy progress.',
        recommended: true,
        characterEffect: 'Mitchell and Anders survive',
      },
      {
        label: 'Prioritize one or ignore',
        text: 'Prioritize one over the other / Ignore the fire',
        consequence: 'One or both NPCs die.',
        recommended: false,
      },
    ],
  },
  {
    id: 'e5-stafford-destiny',
    episode: 'episode-5',
    scene: "Stafford's Breakdown — Destiny Moment",
    description: 'Stafford has a breakdown. Young can rally him. The correct response unlocks his Destiny.',
    options: [
      {
        label: '"Never forget why you started"',
        text: 'Encourage Stafford: "Never forget why you started."',
        consequence: "Stafford's 'The Father' Destiny unlocked — required for best ending route.",
        recommended: true,
        characterEffect: "Stafford Destiny: The Father",
      },
      {
        label: 'Let Stafford give up',
        text: 'Stay silent or let Stafford give up',
        consequence: 'Destiny not unlocked. Worse outcomes in Episode 7.',
        recommended: false,
      },
    ],
  },
  // Episode 6 choices
  {
    id: 'e6-two-eiseles',
    episode: 'episode-6',
    scene: 'Two Eiseles Appear — 🔑 MOST CRITICAL CHOICE',
    description: 'Two identical Eiseles appear. One is real, one is a mimic. This choice determines your ending.',
    options: [
      {
        label: 'Trust the NEWCOMER (arrives separately)',
        text: 'Trust the NEWCOMER — the Eisele who arrives separately',
        consequence: 'Real Eisele survives. Best ending path maintained. True ending still achievable.',
        recommended: true,
        characterEffect: 'Eisele survives — true ending path open',
      },
      {
        label: 'Trust the one already with the group',
        text: 'Trust the one who was already with the group',
        consequence: 'Real Eisele dies. Locked out of best ending permanently.',
        recommended: false,
      },
    ],
  },
  {
    id: 'e6-outdoor-junction',
    episode: 'episode-6',
    scene: 'Outdoor Junction — ⚠ Point of No Return',
    description: 'During the reactor escape, you must choose a direction outside. The game does NOT warn you — one path is a point of no return.',
    options: [
      {
        label: 'Turn RIGHT (stay outside)',
        text: 'Turn RIGHT — under the stalactites, stay outside',
        consequence: 'Safe path, all crew escapes. Anders survives.',
        recommended: true,
        characterEffect: 'Anders survives',
      },
      {
        label: 'Turn LEFT (enter cave system)',
        text: 'Turn LEFT — into the cave system',
        consequence: 'Point of no return. Anders will die. Cannot go back once you enter.',
        recommended: false,
      },
    ],
  },
  {
    id: 'e6-reactor-escape',
    episode: 'episode-6',
    scene: 'Reactor Escape',
    description: 'The reactor is overloading — meltdown in 10 minutes. Escape quickly.',
    options: [
      {
        label: 'Move quickly through each section',
        text: 'Move quickly through each section',
        consequence: 'All crew escapes before meltdown. No casualties.',
        recommended: true,
      },
      {
        label: 'Take time to explore',
        text: 'Take time to explore or hesitate',
        consequence: 'Risk of casualties from the meltdown.',
        recommended: false,
      },
    ],
  },
  // Episode 7-8 choices
  {
    id: 'e7-eisele-final',
    episode: 'episode-7',
    scene: "Eisele's Final Choice — ⭐ UNLOCKS TRUE ENDING",
    description: 'Eisele must decide the fate of the clone program data. This is the defining moment of the entire game.',
    options: [
      {
        label: 'Expose the clone program',
        text: 'Expose the clone program (Eisele the Humanitarian)',
        consequence: 'True ending. Eisele broadcasts the truth to humanity. Cycle ends. All 5 survivors confirmed.',
        recommended: true,
        characterEffect: 'Eisele Destiny: The Humanitarian — True Ending',
      },
      {
        label: 'Protect the mission',
        text: 'Keep the information classified (Eisele the Scientist)',
        consequence: 'Science ending. Eisele prioritizes the Growth data. Cycle continues.',
        recommended: false,
      },
    ],
  },
];

export const getAllChoices = () => choices;
export const getChoicesByEpisode = (episodeId: string) =>
  choices.filter((c) => c.episode === episodeId);
export const getChoiceById = (id: string) =>
  choices.find((c) => c.id === id);
