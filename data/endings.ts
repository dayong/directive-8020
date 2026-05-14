import { Ending } from '@/types';

export const endings: Ending[] = [
  {
    id: 'homeward-bound',
    name: 'Homeward Bound',
    condition: 'All 5 playable characters survive. Weapon was authorized. Eisele identified correctly.',
    survivorCount: '5',
    description:
      'The Cassiopeia crew successfully destroys the alien threat and sets course for Earth. A bittersweet victory with all hands on deck.',
    isTrueEnding: false,
  },
  {
    id: 'homeward-bound-massacre',
    name: 'Homeward Bound / Massacre',
    condition: 'Most crew dead but the ship reaches Earth. 1-2 survivors.',
    survivorCount: '1-2',
    description:
      'The ship makes it home, but at a terrible cost. Few crew remain to tell the tale.',
    isTrueEnding: false,
  },
  {
    id: 'homeward-bound-masks-off',
    name: 'Homeward Bound / Masks Off',
    condition: 'The alien is identified and exposed. Crew unites against the threat. 3-4 survivors.',
    survivorCount: '3-4',
    description:
      'The alien is revealed and the remaining crew work together to eliminate the threat before returning home.',
    isTrueEnding: false,
  },
  {
    id: 'hitchhiker',
    name: 'Hitchhiker',
    condition: 'The alien is not eliminated. Ship reaches Earth with the entity still on board.',
    survivorCount: '2-4',
    description:
      'The Cassiopeia returns to Earth, but the alien threat has survived and accompanies them home — a ticking time bomb for humanity.',
    isTrueEnding: false,
    turningPoint: 'Episode 6 — correctly identify the duplicate Eisele',
  },
  {
    id: 'docked',
    name: 'Docked',
    condition: 'The ship docks at a space station instead of returning to Earth. Alien threat contained.',
    survivorCount: '3-5',
    description:
      'Rather than risk bringing the alien to Earth, the survivors dock at a remote station and send a quarantine signal.',
    isTrueEnding: false,
  },
  {
    id: 'docked-not-alone',
    name: 'Docked / Not Alone',
    condition: 'Docked ending but one crew member is revealed to be infected.',
    survivorCount: '2-4',
    description:
      'The docking seems successful, but a last-minute reveal shows the alien is still among the crew.',
    isTrueEnding: false,
  },
  {
    id: 'game-over',
    name: 'Game Over (Everyone Dies)',
    condition: 'All 5 playable characters die during the story.',
    survivorCount: '0',
    description:
      'The alien threat overwhelms the entire crew. No one survives to warn Earth.',
    isTrueEnding: false,
    turningPoint: 'Episode 3 — Cernan\'s first playable section',
  },
  {
    id: 'forever-and-ever',
    name: 'Forever and Ever',
    condition: 'The alien takes complete control of the ship. All surviving crew are assimilated.',
    survivorCount: '0 (assimilated)',
    description:
      'The alien entity fully consumes the Cassiopeia and its crew, drifting through space forever as a living hive.',
    isTrueEnding: false,
  },
  {
    id: 'beacon',
    name: 'Beacon',
    condition: 'The ship\'s distress beacon is activated before all crew die. Earth receives the warning.',
    survivorCount: '0',
    description:
      'Though no one survives, the crew\'s final act sends a warning to Earth about the alien threat.',
    isTrueEnding: false,
  },
  {
    id: 'eisele-humanitarian',
    name: 'Eisele the Humanitarian',
    condition:
      'Dr. Eisele survives, identifies the duplicate, and chooses to sacrifice the sample for the greater good. All other playable characters must survive.',
    survivorCount: '5',
    description:
      'The true ending. Eisele chooses humanity over science, destroying the alien sample and ensuring the crew\'s safe return. Earth receives both a warning and a cure.',
    isTrueEnding: true,
    turningPoint: 'Episode 6 — Eisele\'s final choice',
  },
];

export const getAllEndings = () => endings;
export const trueEnding = endings.find((e) => e.isTrueEnding);
export const getEndingById = (id: string) => endings.find((e) => e.id === id);
