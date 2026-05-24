import { Choice } from '@/types';

export const choices: Choice[] = [
  // ============================================================
  // Episode 1: Little Star
  // ============================================================
  {
    id: 'e1-initial-response',
    episode: 'episode-1',
    scene: 'Hull Breach',
    description: 'After the hull breach, how do you respond?',
    relationshipDetail: 'Sets the baseline for how Stafford and the crew view Osmond\'s leadership. The trust lost from evacuating carries into Ep2.',
    options: [
      {
        label: 'Secure the breach',
        text: 'Take time to properly seal the hull breach before proceeding.',
        consequence: 'Crew relationship improves. Slower progress but safer outcome.',
        recommended: true,
        chainEffect: 'None — immediate-only choice. Sealing buys goodwill that compounds with later Stafford-positive choices.',
        endingImpact: 'None directly, but relationship gain provides a buffer for later trust checks.',
      },
      {
        label: 'Evacuate immediately',
        text: 'Abandon the breach zone and rush to safety.',
        consequence: 'Faster evacuation but crew loses trust in your judgment.',
        recommended: false,
        characterEffect: 'Stafford relationship penalty',
        chainEffect: 'Trust penalty persists into Ep2, making the Stafford observation deck conversation slightly harder to recover from.',
        endingImpact: 'Indirect — reduces margin for error in later relationship-dependent Destiny unlocks.',
      },
    ],
  },
  {
    id: 'e1-honor-implore',
    episode: 'episode-1',
    scene: 'Medical Complex',
    description: 'Stafford confronts you about the situation. How do you respond?',
    relationshipDetail: 'Stafford tracks every interaction. Honor opens his Ep5 Destiny path. Implore permanently marks Osmond as weak in Stafford\'s internal flag.',
    options: [
      {
        label: 'Honor',
        text: 'Show respect for Stafford\'s authority and honor his position.',
        consequence: 'Stafford relationship improves significantly. Opens better options in Episode 4.',
        recommended: true,
        characterEffect: 'Stafford +',
        chainEffect: 'Honor → Consider follow-up → Ep2 Listen → Ep3 Cernan support → Ep5 Destiny unlocked. This is link 1 of 3 in the Stafford Destiny chain.',
        endingImpact: 'Required for Stafford\'s The Father Destiny. Without it, the full best ending path is narrowed.',
      },
      {
        label: 'Implore',
        text: 'Beg Stafford to see things your way.',
        consequence: 'No significant benefit. Stafford views you as weak under pressure.',
        recommended: false,
        characterEffect: 'Stafford -',
        chainEffect: 'Permanent -1 modifier on Stafford\'s trust. Makes Ep5 Destiny check significantly harder even with later good choices.',
        endingImpact: 'Severely reduces The Father Destiny unlock probability. Requires all other Stafford choices to be perfect to compensate.',
      },
    ],
  },
  {
    id: 'e1-consider-doubt',
    episode: 'episode-1',
    scene: 'Medical Complex (follow-up)',
    description: 'After choosing Honor, how do you proceed with the plan?',
    relationshipDetail: 'Cements or partially undoes the Honor choice. Consider = 2nd link in the Stafford Destiny chain.',
    options: [
      {
        label: 'Consider',
        text: 'Carefully consider Stafford\'s plan before acting.',
        consequence: 'Maintains crew trust and keeps all options open.',
        recommended: true,
        chainEffect: 'Cements the Honor → Consider chain. Link 2 of 3 in the Stafford Destiny path.',
        endingImpact: 'Part of the Stafford Destiny unlock prerequisites (Honor here + Consider here + Listen in Ep2).',
      },
      {
        label: 'Doubt',
        text: 'Express doubt about the plan.',
        consequence: 'Minor relationship penalty. Crew questions your confidence.',
        recommended: false,
        chainEffect: 'Partially undoes the Honor choice. Relationship returns to near-neutral.',
        endingImpact: 'Weakens the Stafford Destiny chain. May require perfect Ep2 and Ep5 choices to compensate.',
      },
    ],
  },
  {
    id: 'e1-authorize-weapon',
    episode: 'episode-1',
    scene: 'Crew Quarters (Turning Point)',
    description: 'A weapon is found in the Crew Quarters. What do you do?',
    relationshipDetail: 'Small-seeming choice with outsized impact. Authorizing weapons opens a non-lethal resolution branch in Ep5.',
    options: [
      {
        label: 'Authorize use of weapon',
        text: 'Allow the weapon to be carried for self-defense.',
        consequence: 'Opens combat options later. Required for certain endings.',
        recommended: true,
        chainEffect: 'Authorize → Ep5 Stand Down + Sedate option unlocks → Williams survives → Sedate Williams trophy available → feeds into best ending prerequisites.',
        endingImpact: 'Required for Sedate Williams trophy. Gatekeeper for the non-lethal Williams resolution in Ep5.',
      },
      {
        label: 'Refuse',
        text: 'Refuse to authorize weapons on board.',
        consequence: 'Limits options in Episode 5. May close off some ending paths.',
        recommended: false,
        chainEffect: 'Refuse → Stand Down option in Ep5 becomes lethal-only. No non-lethal path regardless of sedative prep.',
        endingImpact: 'Permanently locks Sedate Williams trophy. Narrows Ep5 resolution to lethal-only.',
      },
    ],
  },
  // ============================================================
  // Episode 2: Best Laid Plans
  // ============================================================
  {
    id: 'e2-trust-stafford',
    episode: 'episode-2',
    scene: 'Command Deck',
    description: 'Stafford proposes a risky plan to reach the engine room.',
    relationshipDetail: 'Third link in the Stafford Destiny chain. Trust here = 3/3 triggers if Ep1 was supportive.',
    options: [
      {
        label: 'Trust Stafford',
        text: 'Back Stafford\'s plan without question.',
        consequence: 'Stafford relationship improves. Plan succeeds.',
        recommended: true,
        characterEffect: 'Stafford +',
        chainEffect: 'Ep1 Honor+Consider → Ep2 Trust → Ep3 Cernan support → Ep5 Father Destiny unlocked. Complete chain.',
        endingImpact: 'Essential for The Father Destiny unlock. Without this, the Ep5 moment fails even with perfect Ep1.',
      },
      {
        label: 'Challenge the plan',
        text: 'Question Stafford\'s judgment and propose an alternative.',
        consequence: 'Stafford relationship penalty. Slower but potentially safer route.',
        recommended: false,
        characterEffect: 'Stafford -',
        chainEffect: 'Breaks the Stafford support chain. Ep5 Destiny unlock becomes impossible unless this is offset by Ep3 Cernan support.',
        endingImpact: 'Severely reduces The Father Destiny unlock chance. May be unrecoverable.',
      },
    ],
  },
  {
    id: 'e2-eisele-sample',
    episode: 'episode-2',
    scene: 'Science Lab',
    description: 'Dr. Eisele wants to study a sample. Do you allow it?',
    relationshipDetail: 'Shapes Eisele\'s Scientist vs Humanitarian trajectory. Cumulative across Ep2+3+5.',
    options: [
      {
        label: 'Allow study',
        text: 'Let Eisele study the alien sample.',
        consequence: 'Unlocks Eisele Scientist path. More information about the alien threat.',
        recommended: true,
        characterEffect: 'Eisele Scientist Destiny progress',
        chainEffect: 'Allow study → push research in Ep3 → Eisele Scientist Destiny becomes dominant. Must balance with containment choice.',
        endingImpact: 'Pushes toward Eisele the Scientist ending. Can switch to Humanitarian with careful Ep3-4 choices.',
      },
      {
        label: 'Destroy sample',
        text: 'Order the sample destroyed immediately.',
        consequence: 'Safety first but loses critical intel. Pushes Eisele toward Humanitarian path.',
        recommended: false,
        characterEffect: 'Eisele Humanitarian Destiny progress',
        chainEffect: 'Destroy → immediate Humanitarian push. Combined with safe research in Ep3 = strong Humanitarian setup.',
        endingImpact: 'Positions Eisele for The Humanitarian true ending. Makes Ep8 final choice easier to access.',
      },
    ],
  },
  {
    id: 'e2-rescue-carter',
    episode: 'episode-2',
    scene: 'Corridor',
    description: 'You hear a distress call. Someone needs help.',
    relationshipDetail: 'Collectible-related choice. Does not affect survival (Carter always dies).',
    options: [
      {
        label: 'Investigate',
        text: 'Go toward the distress call.',
        consequence: 'Reveals more of the story. Unlocks a collectible.',
        recommended: true,
        chainEffect: 'Unlocks a collectible that provides Ep7-8 Cycle 13 backstory context.',
        endingImpact: 'No direct ending impact.',
      },
      {
        label: 'Stay on mission',
        text: 'Ignore the call and continue to the objective.',
        consequence: 'Misses a collectible and story context.',
        recommended: false,
        chainEffect: 'Misses the collectible. No gameplay penalty beyond lost lore context.',
        endingImpact: 'No direct ending impact.',
      },
    ],
  },
  // ============================================================
  // Episode 3: The Sample
  // ============================================================
  {
    id: 'e3-cernan-trust',
    episode: 'episode-3',
    scene: 'Cargo Bay (Cernan playable)',
    description: 'Cernan encounters something unusual in the cargo bay.',
    relationshipDetail: 'Establishes Cernan\'s reliability. Report = safer Ep7. Investigate = harder Ep7 stealth.',
    options: [
      {
        label: 'Report immediately',
        text: 'Report the finding to command before investigating.',
        consequence: 'Crew is alerted but the entity has time to hide.',
        recommended: true,
        characterEffect: 'Keeps Cernan safer',
        chainEffect: 'Reporting = Cernan positioned more safely in Ep7 Geoscience section. Shorter patrol, easier stealth.',
        endingImpact: 'Indirect — keeps Cernan alive through Ep7, required for full survivor count in true ending.',
      },
      {
        label: 'Investigate alone',
        text: 'Check it out yourself before raising an alarm.',
        consequence: 'Dangerous but yields more information. Cernan may get injured.',
        recommended: false,
        chainEffect: 'Investigating = Ep7 Geoscience becomes harder. More enemies, longer patrols. Still survivable but margin is thinner.',
        endingImpact: 'Increases risk of losing Cernan in Ep7. One death can cascade into worse endings.',
      },
    ],
  },
  {
    id: 'e3-sample-handling',
    episode: 'episode-3',
    scene: 'Containment Lab',
    description: 'The alien sample is reacting. How do you handle it?',
    relationshipDetail: 'Key fork in Eisele\'s Scientist vs Humanitarian path. Cumulative with Ep2+5 choices.',
    options: [
      {
        label: 'Contain and study',
        text: 'Increase containment and continue research.',
        consequence: 'More data gathered. Risk of containment breach increases.',
        recommended: true,
        chainEffect: 'Neutral on Eisele\'s path. Keeps both Scientist and Humanitarian options open. Combined with Ep2+5.',
        endingImpact: 'Keeps all endings available. Cumulative weight of Ep2+3+5 determines final Destiny unlock.',
      },
      {
        label: 'Emergency purge',
        text: 'Jettison the sample into space.',
        consequence: 'Lose the sample. Some endings become unavailable. Crew is safer.',
        recommended: false,
        chainEffect: 'Strong Humanitarian push. May close off Scientist ending option entirely.',
        endingImpact: 'Strongly pushes toward Humanitarian true ending. May lock out Eisele the Scientist ending.',
      },
    ],
  },
  {
    id: 'e3-stafford-eisele',
    episode: 'episode-3',
    scene: 'Briefing Room',
    description: 'Stafford and Eisele disagree on the next course of action.',
    relationshipDetail: 'Final link in the Stafford Destiny chain. Side with Eisele = optimal for true ending.',
    options: [
      {
        label: 'Side with Stafford',
        text: 'Agree with Stafford\'s tactical approach.',
        consequence: 'Stafford relationship improves. Eisele feels sidelined.',
        recommended: false,
        characterEffect: 'Stafford + / Eisele -',
        chainEffect: 'Stafford authority reinforced but Eisele damaged. Ep5 lab scene harder — Eisele less forthcoming.',
        endingImpact: 'Pushes Eisele toward Scientist ending. Can be balanced by Ep5 choices.',
      },
      {
        label: 'Side with Eisele',
        text: 'Support Eisele\'s scientific approach.',
        consequence: 'Eisele relationship improves. Stafford questions your loyalty.',
        recommended: true,
        characterEffect: 'Eisele + / Stafford -',
        chainEffect: 'Optimal for true ending. Eisele relationship boost. Stafford recovers in Ep5 if right dialogue picked.',
        endingImpact: 'Supports Humanitarian ending path. Stafford relationship recovers in Ep5.',
      },
    ],
  },
  // ============================================================
  // Episode 4: Dragnet
  // ============================================================
  {
    id: 'e4-follow-cooper',
    episode: 'episode-4',
    scene: 'Maintenance Tunnels (Junction 13)',
    description: 'How do you proceed when you reach junction 13 in the maintenance tunnels?',
    relationshipDetail: 'Cooper\'s trust affects his behavior in Ep6\'s reactor escape.',
    options: [
      {
        label: 'Follow Cooper\'s instructions exactly',
        text: 'Follow Cooper\'s instructions exactly',
        consequence: 'Safe navigation, both Osmond and Cooper survive.',
        recommended: true,
        characterEffect: 'Cooper relationship +',
        chainEffect: 'Cooper trust built → Ep6 reactor escape: Cooper volunteers for distraction without hesitation → cleaner escape window.',
        endingImpact: 'Improves Ep6 reactor escape safety margin.',
      },
      {
        label: 'Investigate alternate path',
        text: 'Investigate alternate path',
        consequence: 'Risk of detection by the creature.',
        recommended: false,
        chainEffect: 'Cooper relationship penalty → Ep6: Cooper hesitates before distraction QTE → shortened escape window.',
        endingImpact: 'Narrows Ep6 safety margin. Can lead to Cooper injury or death if combined with other mistakes.',
      },
    ],
  },
  {
    id: 'e4-reactor-confirm',
    episode: 'episode-4',
    scene: 'Reactor Confrontation',
    description: 'After the creature falls into the reactor, what do you do?',
    relationshipDetail: 'Final Ep4 choice. Confirm = crew trusts judgment. Investigate = unnecessary injury.',
    options: [
      {
        label: 'Confirm it\'s dead and report back',
        text: 'Confirm it\'s dead and report back',
        consequence: 'Crew reunites safely, threat confirmed eliminated.',
        recommended: true,
        chainEffect: 'Trust foundation carries into Ep5 group dynamics. Positive tone.',
        endingImpact: 'No direct ending impact.',
      },
      {
        label: 'Investigate further',
        text: 'Investigate further',
        consequence: 'Unnecessary risk — Osmond may be injured.',
        recommended: false,
        chainEffect: 'Osmond takes fall damage → permanent cosmetic possible → crew questions judgment → Ep5 starts with lower trust.',
        endingImpact: 'Indirect — lower trust in Ep5 makes Williams confrontation slightly harder.',
      },
    ],
  },
  // ============================================================
  // Episode 5: Mr. Williams
  // ============================================================
  {
    id: 'e5-sedative',
    episode: 'episode-5',
    scene: 'Science Lab — ⚠ MISSABLE CHOICE',
    description: 'Eisele can prepare a sedative for Williams. No prompt, no marker — must manually interact with lab equipment.',
    relationshipDetail: 'THE most missable choice. Must actively explore the lab. No HUD indicator.',
    options: [
      {
        label: 'Prepare the sedative',
        text: 'Prepare the sedative',
        consequence: 'Required for keeping Williams alive later. Needed for "Sedate Williams" trophy.',
        recommended: true,
        characterEffect: 'Unlocks sedative option in confrontation',
        chainEffect: 'Sedative → Ep5 Stand Down becomes non-lethal → Williams survives → Sedate Williams trophy → feeds into best ending.',
        endingImpact: 'Required for Sedate Williams trophy. Opens non-lethal Williams resolution. Part of best ending prerequisites.',
      },
      {
        label: 'Skip the lab equipment',
        text: 'Skip / don\'t interact with sedative equipment',
        consequence: 'Williams cannot be sedated later, death more likely. Missable trophy.',
        recommended: false,
        chainEffect: 'No sedative → Stand Down is lethal-only → Williams MUST die or escape. Trophy permanently lost.',
        endingImpact: 'Permanently locks Sedate Williams trophy. Reduces ending quality by removing non-lethal NPC survival.',
      },
    ],
  },
  {
    id: 'e5-point-blank',
    episode: 'episode-5',
    scene: 'Point Blank — Williams Confrontation',
    description: 'Williams is exposed as a duplicate. How do you respond during the transformation?',
    relationshipDetail: 'Depends on sedative. With sedative = Stand Down is best. Without = Shoot is safer.',
    options: [
      {
        label: 'Stand Down',
        text: 'Stand Down (if sedative was prepared)',
        consequence: 'Buys time, opens sedative option. Williams can be neutralized non-lethally.',
        recommended: true,
        characterEffect: 'Keeps Williams alive if sedative prepared',
        chainEffect: 'Stand Down + sedative = Williams lives → helpful Ep7 intel → better Ep8 dynamics.',
        endingImpact: 'Contributes to best ending path. Required for Sedate Williams trophy.',
      },
      {
        label: 'Shoot',
        text: 'Shoot',
        consequence: 'Williams duplicate is eliminated immediately. Clean but loses optional trophy.',
        recommended: false,
        chainEffect: 'Shoot = Williams dies → loses Ep7 intel → one Ep7 dialogue check harder. Trophy locked.',
        endingImpact: 'Locks Sedate Williams trophy. Slightly reduces Ep7-8 quality.',
      },
    ],
  },
  {
    id: 'e5-fire-rescue',
    episode: 'episode-5',
    scene: 'Hydroponics Bay Fire',
    description: 'Mitchell and Anders are trapped in a fire. Both can be saved — the UI is misleading.',
    relationshipDetail: 'Both NPCs can survive. UI makes it look like a pick-one. It is not.',
    options: [
      {
        label: 'Rescue both Mitchell and Anders',
        text: 'Rescue both Mitchell and Anders',
        consequence: 'Both NPCs survive. Trophy progress.',
        recommended: true,
        characterEffect: 'Mitchell and Anders survive',
        chainEffect: 'Both rescued → appear in Ep7 Search Party → Mitchell key in Ep8 dialogue. Both alive = better ending options.',
        endingImpact: 'Required for Mitchell and Anders Survived trophy. Both alive improves Ep7-8 and narrows toward best ending.',
      },
      {
        label: 'Prioritize one or ignore',
        text: 'Prioritize one over the other / Ignore the fire',
        consequence: 'One or both NPCs die.',
        recommended: false,
        chainEffect: 'Death here → Ep7 Search Party changes → fewer NPCs = less Ep8 support. Trophy permanently lost.',
        endingImpact: 'Locks Mitchell and Anders Survived trophy. Narrows ending pool.',
      },
    ],
  },
  {
    id: 'e5-stafford-destiny',
    episode: 'episode-5',
    scene: "Stafford's Breakdown — Destiny Moment",
    description: 'Stafford has a breakdown. Osmond can rally him. Requires Ep1-3 support chain for best effect.',
    relationshipDetail: 'Culmination of Ep1Honor→Consider→Ep2Listen→Ep3Cernan. All 3 prior triggers needed.',
    options: [
      {
        label: '"Never forget why you started"',
        text: 'Encourage Stafford: "Never forget why you started."',
        consequence: "Stafford's 'The Father' Destiny unlocked — required for best ending route.",
        recommended: true,
        characterEffect: "Stafford Destiny: The Father",
        chainEffect: 'Final trigger in Ep1→2→3→5 chain. "Destiny Unlocked" notification appears. The Father Destiny active.',
        endingImpact: 'The Father Destiny is a prerequisite for the full best ending route. Without it, true ending path is incomplete.',
      },
      {
        label: 'Let Stafford give up',
        text: 'Stay silent or let Stafford give up',
        consequence: 'Destiny not unlocked. Worse outcomes in Episode 7.',
        recommended: false,
        chainEffect: 'Destiny not unlocked. Ep1-3 support chain was wasted. Ep7 Stafford makes poor decisions under pressure.',
        endingImpact: 'Locks The Father Destiny. Narrows best ending path. Stafford may cost other characters in Ep7.',
      },
    ],
  },
  // ============================================================
  // Episode 6: Hostile Takeover
  // ============================================================
  {
    id: 'e6-two-eiseles',
    episode: 'episode-6',
    scene: 'Two Eiseles Appear — 🔑 MOST CRITICAL CHOICE',
    description: 'Two identical Eiseles appear. One is real, one is a mimic. This choice determines your ending.',
    relationshipDetail: 'THE single most important choice in the game. Gatekeeper for the true ending.',
    options: [
      {
        label: 'Trust the NEWCOMER (arrives separately)',
        text: 'Trust the NEWCOMER — the Eisele who arrives separately',
        consequence: 'Real Eisele survives. Best ending path maintained. True ending still achievable.',
        recommended: true,
        characterEffect: 'Eisele survives — true ending path open',
        chainEffect: 'Real Eisele identified → Ep7 proceeds with authentic Eisele → Ep8 true ending choice available.',
        endingImpact: 'THE gatekeeper for Eisele the Humanitarian (TRUE ENDING). Wrong = true ending permanently locked.',
      },
      {
        label: 'Trust the one already with the group',
        text: 'Trust the one who was already with the group',
        consequence: 'Real Eisele dies. Locked out of best ending permanently.',
        recommended: false,
        chainEffect: 'Fake Eisele infiltrates → Ep7-8 proceed with mimic → true ending permanently UNAVAILABLE regardless of all other choices.',
        endingImpact: 'IRREVERSIBLE. Locks out Eisele the Humanitarian permanently. Homeward Bound or Game Over only.',
      },
    ],
  },
  {
    id: 'e6-outdoor-junction',
    episode: 'episode-6',
    scene: 'Outdoor Junction — ⚠ Point of No Return',
    description: 'Choose a direction outside. The game does NOT warn you — left is a point of no return.',
    relationshipDetail: 'The "Cove" trap. Unmarked fork. Left = Anders dies. Right = Anders lives.',
    options: [
      {
        label: 'Turn RIGHT (stay outside)',
        text: 'Turn RIGHT — under the stalactites, stay outside',
        consequence: 'Safe path, all crew escapes. Anders survives.',
        recommended: true,
        characterEffect: 'Anders survives',
        chainEffect: 'Anders alive → available in Ep7 Search Party → feeds into Mitchell and Anders Survived trophy → better Ep8.',
        endingImpact: 'Required for Mitchell and Anders Survived trophy. Anders alive = more NPC support = better endings.',
      },
      {
        label: 'Turn LEFT (enter cave system)',
        text: 'Turn LEFT — into the cave system',
        consequence: 'Point of no return. Anders will die. Cannot go back once you enter.',
        recommended: false,
        chainEffect: 'Anders dies immediately. Ep7 Search Party becomes a trap — mimic replaces Anders. Use Turning Point to undo.',
        endingImpact: 'Locks Mitchell and Anders Survived trophy. Narrows ending options. Only fixable via Turning Point.',
      },
    ],
  },
  {
    id: 'e6-reactor-escape',
    episode: 'episode-6',
    scene: 'Reactor Escape',
    description: 'The reactor is overloading — meltdown in 10 minutes. Escape quickly.',
    relationshipDetail: 'Timed sequence. Move fast = safe. Hesitate = risk.',
    options: [
      {
        label: 'Move quickly through each section',
        text: 'Move quickly through each section',
        consequence: 'All crew escapes before meltdown. No casualties.',
        recommended: true,
        chainEffect: 'Clean escape → Ep7 starts with full team intact and high morale.',
        endingImpact: 'Preserves survivor count for Ep7-8. No direct ending lock/unlock.',
      },
      {
        label: 'Take time to explore',
        text: 'Take time to explore or hesitate',
        consequence: 'Risk of casualties from the meltdown.',
        recommended: false,
        chainEffect: 'Hesitation → QTE failures possible → crew injuries or deaths → Ep7 starts with lower morale and possibly fewer characters.',
        endingImpact: 'May reduce survivor count, directly narrowing ending options. Game Over possible if too many die.',
      },
    ],
  },
  // ============================================================
  // Episodes 7-8: The Finale
  // ============================================================
  {
    id: 'e7-eisele-final',
    episode: 'episode-7',
    scene: "Eisele's Final Choice — ⭐ UNLOCKS TRUE ENDING",
    description: 'Eisele must decide the fate of the clone program data. This is the defining moment of the entire game.',
    relationshipDetail: 'The culmination of every Eisele choice across all 8 episodes. Expose = true ending.',
    options: [
      {
        label: 'Expose the clone program',
        text: 'Expose the clone program (Eisele the Humanitarian)',
        consequence: 'True ending. Eisele broadcasts the truth to humanity. Cycle ends.',
        recommended: true,
        characterEffect: 'Eisele Destiny: The Humanitarian — True Ending',
        chainEffect: 'Expose → Eisele the Humanitarian ending → truth broadcast → Cycle 13 ends → credits roll with all 5 survivors.',
        endingImpact: 'Unlocks Eisele the Humanitarian (TRUE ENDING). Requires real Eisele in Ep6 + all Eisele-positive choices. The platinum ending.',
      },
      {
        label: 'Protect the mission',
        text: 'Keep the information classified (Eisele the Scientist)',
        consequence: 'Science ending. Eisele prioritizes the Growth data. Cycle continues.',
        recommended: false,
        chainEffect: 'Protect → Eisele the Scientist ending → data preserved → 5 survivors possible but different ending variant.',
        endingImpact: 'Unlocks Eisele the Scientist ending. Not true ending but still "good" if all 5 survive. Platinum achievable via other endings.',
      },
    ],
  },
  // ============================================================
  // Episode 8: Directive 8020
  // ============================================================
  {
    id: 'e8-williams-order',
    episode: 'episode-8',
    scene: 'Final Approach',
    description: 'Stafford must decide whether to bring Williams with the group during the final escape.',
    relationshipDetail: 'Williams\' fate in the finale depends on whether he was saved or killed in Ep5.',
    options: [
      {
        label: 'Bring Williams (Order)',
        text: 'Order Williams to come with the group.',
        consequence: 'Williams joins the escape. If he survived Ep5, he provides critical support during the Reactor section.',
        recommended: true,
        chainEffect: 'Williams alive throughout → Ep8 finale support → extra dialogue revealing full Corinth intel.',
        endingImpact: 'Improves best ending quality. If Williams died in Ep5, this option is unavailable.',
      },
      {
        label: 'Leave Williams',
        text: 'Leave Williams behind.',
        consequence: 'Williams is abandoned. Loses potential Ep8 support. Only pick if Williams was hostile.',
        recommended: false,
        chainEffect: 'No Williams support in Ep8 finale. Narrower dialogue options.',
        endingImpact: 'Slightly reduces ending quality. Acceptable if Williams was hostile in Ep5.',
      },
    ],
  },
  {
    id: 'e8-mitchell-door',
    episode: 'episode-8',
    scene: 'Knock Knock — Mitchell at the Door',
    description: 'Someone is at the door claiming to be Mitchell. Is it really him, or another mimic?',
    relationshipDetail: 'Mitchell\'s survival from Ep5 fire rescue determines whether this is a trap.',
    options: [
      {
        label: 'Let Mitchell in',
        text: 'Open the door — it\'s the real Mitchell.',
        consequence: 'Mitchell joins the group. He\'s real — if you saved him in Ep5.',
        recommended: true,
        chainEffect: 'Mitchell alive throughout → Ep8 finale support → extra survivor count for ending calculation.',
        endingImpact: 'Required for Mitchell and Anders Survived achievement. Improves ending survivor count.',
      },
      {
        label: 'Don\'t open the door',
        text: 'Refuse to open — too risky.',
        consequence: 'Mitchell is left outside. He may not survive. Group loses potential ally.',
        recommended: false,
        chainEffect: 'Mitchell excluded from finale. If he was real (saved in Ep5), this is a permanent loss.',
        endingImpact: 'May lock Mitchell and Anders Survived. Reduces ending survivor count.',
      },
    ],
  },
];

export const getAllChoices = () => choices;
export const getChoicesByEpisode = (episodeId: string) =>
  choices.filter((c) => c.episode === episodeId);
export const getChoiceById = (id: string) =>
  choices.find((c) => c.id === id);
