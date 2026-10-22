import { Episode } from '@/types';

export const episodes: Episode[] = [
  {
    id: 'episode-1',
    number: 1,
    title: 'Little Star',
    slug: 'episode-1',
    description:
      'The Cassiopeia crew faces a sudden hull breach. Young takes charge as the first major choices and scripted deaths unfold.',
    duration: '~1 hour',
    keyChoices: 8,
    characters: ['young', 'carter', 'simms'],
  },
  {
    id: 'episode-2',
    number: 2,
    title: 'Best Laid Plans',
    slug: 'episode-2',
    description:
      'The survivors regroup and form a plan. Trust is tested as new threats emerge from within the ship.',
    duration: '~1 hour',
    keyChoices: 6,
    characters: ['young', 'stafford', 'eisele'],
  },
  {
    id: 'episode-3',
    number: 3,
    title: 'The Sample',
    slug: 'episode-3',
    description:
      'A mysterious alien sample is discovered. Cernan becomes playable for the first time as the crew investigates.',
    duration: '~1 hour',
    keyChoices: 7,
    characters: ['young', 'cernan', 'eisele', 'stafford'],
  },
  {
    id: 'episode-4',
    number: 4,
    title: 'Dragnet',
    slug: 'episode-4',
    description:
      'The alien threat spreads. The crew must decide who to trust as paranoia takes hold.',
    duration: '~1 hour',
    keyChoices: 6,
    characters: ['young', 'stafford', 'cooper'],
  },
  {
    id: 'episode-5',
    number: 5,
    title: 'Mr. Williams',
    slug: 'episode-5',
    description:
      'A mysterious figure known as Mr. Williams emerges. Key choices here determine which ending paths remain open.',
    duration: '~1 hour',
    keyChoices: 7,
    characters: ['young', 'stafford', 'eisele', 'cernan'],
  },
  {
    id: 'episode-6',
    number: 6,
    title: 'Hostile Takeover',
    slug: 'episode-6',
    description:
      'The duplicate Eisele appears. The crew must identify the real science officer before it\'s too late.',
    duration: '~1.5 hours',
    keyChoices: 8,
    characters: ['young', 'eisele', 'stafford', 'cernan', 'cooper'],
  },
  {
    id: 'episode-7',
    number: 7,
    title: 'Cycle 13 & The Finale',
    slug: 'episode-7',
    description: 'The truth behind Directive 8020 is revealed. The crew learns they are clones in Cycle 13 of a corporate program — and must reach the Caribdus probe.',
    duration: '~2 hours',
    keyChoices: 10,
    characters: ['young', 'stafford', 'eisele', 'cernan', 'cooper'],
  },
  {
    id: 'episode-8',
    number: 8,
    title: 'Directive 8020',
    slug: 'episode-8',
    description: 'The climactic finale. Eisele must choose between exposing the clone program or protecting the scientific data. True ending unlocked here.',
    duration: '~2 hours',
    keyChoices: 10,
    characters: ['young', 'stafford', 'eisele', 'cernan', 'cooper'],
  },
];

export const getAllEpisodes = () => episodes;
export const getEpisodeById = (id: string) =>
  episodes.find((e) => e.id === id);
export const getEpisodeByNumber = (num: number) =>
  episodes.find((e) => e.number === num);
