import type { Character } from '@/types';

// Identity and roles checked against the official game page on 2026-10-22.
// Survival flags are legacy tool defaults, not verified story outcomes.
export const characters: Character[] = [
  {
    "id": "young",
    "name": "Young",
    "fullName": "Brianna Young",
    "actor": "Lashana Lynch",
    "role": "Pilot",
    "description": "A Cassiopeia pilot and the daughter of astronaut Bill Young.",
    "playable": true,
    "canDie": true,
    "scriptedDeath": false,
    "survivalVerified": false,
    "sourceUrl": "https://www.thedarkpictures.com/games/directive-8020"
  },
  {
    "id": "stafford",
    "name": "Stafford",
    "fullName": "Nolan Stafford",
    "actor": "Danny Sapani",
    "role": "Commander",
    "description": "The mission commander and a veteran of the Mars expedition.",
    "playable": true,
    "canDie": true,
    "scriptedDeath": false,
    "survivalVerified": false,
    "sourceUrl": "https://www.thedarkpictures.com/games/directive-8020"
  },
  {
    "id": "eisele",
    "name": "Eisele",
    "fullName": "Laura Eisele",
    "actor": "",
    "role": "Senior Mission Officer",
    "description": "The mission architect who designed the Cassiopeia and its Oracle computer.",
    "playable": true,
    "canDie": true,
    "scriptedDeath": false,
    "survivalVerified": false,
    "sourceUrl": "https://www.thedarkpictures.com/games/directive-8020"
  },
  {
    "id": "cernan",
    "name": "Cernan",
    "fullName": "Josef Cernan",
    "actor": "",
    "role": "Technical Engineer",
    "description": "A technical engineer who brings a thoughtful approach to the mission.",
    "playable": true,
    "canDie": true,
    "scriptedDeath": false,
    "survivalVerified": false,
    "sourceUrl": "https://www.thedarkpictures.com/games/directive-8020"
  },
  {
    "id": "cooper",
    "name": "Cooper",
    "fullName": "Samantha Cooper",
    "actor": "",
    "role": "Medical Specialist",
    "description": "A doctor with experience in military medical evacuation.",
    "playable": true,
    "canDie": true,
    "scriptedDeath": false,
    "survivalVerified": false,
    "sourceUrl": "https://www.thedarkpictures.com/games/directive-8020"
  },
  {
    "id": "carter",
    "name": "Carter",
    "fullName": "Tomas Carter",
    "actor": "",
    "role": "Sleep Technician",
    "description": "A sleep technician working alongside Simms during the voyage.",
    "playable": false,
    "canDie": true,
    "scriptedDeath": false,
    "survivalVerified": false,
    "sourceUrl": "https://www.thedarkpictures.com/games/directive-8020"
  },
  {
    "id": "simms",
    "name": "Simms",
    "fullName": "Pari Simms",
    "actor": "",
    "role": "Sleep Technician",
    "description": "A sleep technician with an engineering background.",
    "playable": false,
    "canDie": true,
    "scriptedDeath": false,
    "survivalVerified": false,
    "sourceUrl": "https://www.thedarkpictures.com/games/directive-8020"
  },
  {
    "id": "williams",
    "name": "Williams",
    "fullName": "LaMarcus Williams",
    "actor": "",
    "role": "CEO",
    "description": "The chief executive of Corinth, the company behind the mission.",
    "playable": false,
    "canDie": true,
    "scriptedDeath": false,
    "survivalVerified": false,
    "sourceUrl": "https://www.thedarkpictures.com/games/directive-8020"
  },
  {
    "id": "mitchell",
    "name": "Mitchell",
    "fullName": "Noah Mitchell",
    "actor": "",
    "role": "Pilot",
    "description": "A co-pilot who trained alongside Young and Stafford.",
    "playable": false,
    "canDie": true,
    "scriptedDeath": false,
    "survivalVerified": false,
    "sourceUrl": "https://www.thedarkpictures.com/games/directive-8020"
  },
  {
    "id": "anders",
    "name": "Anders",
    "fullName": "Zoe Anders",
    "actor": "",
    "role": "Science Officer",
    "description": "A scientist who joined the mission on Cooper’s recommendation.",
    "playable": false,
    "canDie": true,
    "scriptedDeath": false,
    "survivalVerified": false,
    "sourceUrl": "https://www.thedarkpictures.com/games/directive-8020"
  }
];

export const getAllCharacters = () => characters;
export const playableCharacters = characters.filter((character) => character.playable === true);
export const getPlayableCharacters = () => playableCharacters;
export const scriptedDeathCharacters = characters.filter((character) => character.survivalVerified && character.scriptedDeath);
export const getCharacterById = (id: string) => characters.find((character) => character.id === id);
