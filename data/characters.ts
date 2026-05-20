import { Character } from '@/types';

export const characters: Character[] = [
  {
    id: 'young',
    name: 'Osmond',
    fullName: 'Brooke Osmond',
    actor: 'Lashana Lynch',
    role: 'Co-Pilot / Astronaut',
    canDie: true,
    scriptedDeath: false,
    description:
      'The co-pilot of the Cassiopeia and one of the main protagonists. Osmond is the moral center of the crew, and her decisions heavily influence the fate of everyone on board.',
    destiny: 'The Humanitarian',
  },
  {
    id: 'stafford',
    name: 'Stafford',
    fullName: 'Commander Stafford',
    actor: 'Danny Sapani',
    role: 'Commander',
    canDie: true,
    scriptedDeath: false,
    description:
      'The commanding officer of the Cassiopeia. His leadership decisions have far-reaching consequences for the crew. Stafford faces some of the toughest calls in the game.',
    destiny: 'The Father',
  },
  {
    id: 'eisele',
    name: 'Eisele',
    fullName: 'Dr. Eisele',
    actor: 'TBC',
    role: 'Science Officer',
    canDie: true,
    scriptedDeath: false,
    description:
      'The ship\'s science officer. Central to the clone/mimic plotline — a duplicate Eisele appears in Episode 6, requiring careful identification to avoid disaster.',
    destiny: 'The Scientist / The Humanitarian',
  },
  {
    id: 'cernan',
    name: 'Cernan',
    fullName: 'Josef Cernan',
    actor: 'TBC',
    role: 'Crew Member',
    canDie: true,
    scriptedDeath: false,
    description:
      'A crew member of the Cassiopeia. First playable in Episode 3. Cernan\'s survival depends heavily on choices made by other characters.',
    destiny: 'TBC',
  },
  {
    id: 'cooper',
    name: 'Cooper',
    fullName: 'Cooper',
    actor: 'TBC',
    role: 'Crew Member',
    canDie: true,
    scriptedDeath: false,
    description:
      'A crew member of the Cassiopeia. Cooper is resourceful and often finds themselves in dangerous situations requiring quick thinking.',
    destiny: 'TBC',
  },
  {
    id: 'carter',
    name: 'Carter',
    fullName: 'Carter',
    actor: 'TBC',
    role: 'Crew Member',
    canDie: false,
    scriptedDeath: true,
    description:
      'Carter dies in a scripted story event during Episode 1 and cannot be saved regardless of player choices. Do not attempt to save Carter — it is impossible.',
  },
  {
    id: 'simms',
    name: 'Simms',
    fullName: 'Simms',
    actor: 'TBC',
    role: 'Crew Member',
    canDie: false,
    scriptedDeath: true,
    description:
      'Simms dies in a scripted story event during Episode 1 and cannot be saved regardless of player choices. Both Carter and Simms have scripted deaths that cannot be prevented.',
  },
];

export const getAllCharacters = () => characters;
export const getPlayableCharacters = () => playableCharacters;
export const playableCharacters = characters.filter((c) => !c.scriptedDeath);
export const scriptedDeathCharacters = characters.filter((c) => c.scriptedDeath);
export const getCharacterById = (id: string) =>
  characters.find((c) => c.id === id);
