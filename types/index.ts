export type Priority = 'P0' | 'P1' | 'P2';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Character {
  id: string; // 'young' | 'stafford' | 'eisele' | 'cernan' | 'cooper'
  name: string;
  fullName: string;
  actor: string;
  role: string;
  canDie: boolean; // false = scripted death
  scriptedDeath: boolean; // Carter/Simms = true
  description: string;
  destiny?: string; // Destiny title
}

export interface Episode {
  id: string; // 'episode-1'
  number: number; // 1-8
  title: string; // 'Little Star'
  slug: string;
  description: string;
  duration: string; // '~1 hour'
  keyChoices: number; // count of key choices in episode
  characters: string[]; // character IDs in this episode
}

export interface Choice {
  id: string;
  episode: string;
  scene: string;
  description: string;
  options: {
    label: string;
    text: string;
    consequence: string;
    recommended: boolean;
    characterEffect?: string;
  }[];
}

export interface Ending {
  id: string;
  name: string;
  condition: string;
  survivorCount: string;
  description: string;
  isTrueEnding: boolean;
  turningPoint?: string; // nearest checkpoint to revert to
}

export interface Trophy {
  id: string;
  name: string;
  description: string;
  type: 'platinum' | 'gold' | 'silver' | 'bronze';
  isMissable: boolean;
  guide: string;
}

export interface EpisodeMeta {
  title: string;
  episode: number;
  slug: string;
  description: string;
  ogDescription: string;
}
