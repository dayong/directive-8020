import type { Locale } from './config';

export interface UiStrings {
  layoutMeta: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    jsonLdDescription: string;
    jsonLdGenres: string[];
  };
  nav: {
    walkthrough: string;
    saveEveryone: string;
    allEndings: string;
    choices: string;
    characters: string;
    trophies: string;
  };
  tabs: {
    guide: string;
    saveAll: string;
    endings: string;
    choices: string;
    crew: string;
    trophies: string;
  };
  footer: {
    story: string;
    gameplay: string;
    collectibles: string;
    technical: string;
    walkthrough: string;
    allEndings: string;
    bestEnding: string;
    choices: string;
    gameLength: string;
    saveEveryone: string;
    trophyGuide: string;
    multiplayer: string;
    bugFixes: string;
    charactersAndCast: string;
    collectiblesLink: string;
    trophiesAndAchievements: string;
    crashingAndFixes: string;
    pcIssues: string;
    consoleIssues: string;
    privacyPolicy: string;
    contact: string;
    disclaimer1: string;
    disclaimer2: string;
  };
  breadcrumbs: {
    episodeFormat: string;
    ariaLabel: string;
    labels: Record<string, string>;
  };
  spoiler: { title: string; body: string };
  toc: { heading: string };
  episodeCard: { keyChoicesFormat: string };
  choiceCard: {
    recommended: string;
    avoid: string;
    crossEpisode: string;
    endingImpact: string;
  };
  endingCard: {
    trueEnding: string;
    condition: string;
    survivors: string;
    turningPoint: string;
  };
  characterBadge: { scriptedDeath: string; deceased: string };
  charactersView: {
    actor: string;
    canSurvive: string;
    npcCanSurvive: string;
    scriptedDeath: string;
  };
  trophiesView: {
    platinum: string;
    gold: string;
    silver: string;
    bronze: string;
    missable: string;
  };
  allEndingsView: { notAvailable: string };
}

const en: UiStrings = {
  layoutMeta: {
    defaultTitle: 'Directive 8020 Guide | Complete Walkthrough',
    titleTemplate: '%s | Directive 8020 Guide',
    description:
      'The Dark Pictures Anthology: Directive 8020 complete walkthrough — save everyone, all endings, choices, trophy guide, and character survival tips.',
    ogTitle: 'Directive 8020 Guide | Complete Walkthrough',
    ogDescription:
      'Directive 8020 complete walkthrough guide. Save all crew members, unlock every ending, and master every choice.',
    jsonLdDescription:
      'The Dark Pictures Anthology: Directive 8020 — a sci-fi horror interactive drama by Supermassive Games.',
    jsonLdGenres: ['Horror', 'Interactive Drama', 'Sci-Fi'],
  },
  nav: {
    walkthrough: 'Walkthrough',
    saveEveryone: 'Save Everyone',
    allEndings: 'All Endings',
    choices: 'Choices',
    characters: 'Characters',
    trophies: 'Trophies',
  },
  tabs: {
    guide: 'Guide',
    saveAll: 'Save All',
    endings: 'Endings',
    choices: 'Choices',
    crew: 'Crew',
    trophies: 'Trophies',
  },
  footer: {
    story: 'Story',
    gameplay: 'Gameplay',
    collectibles: 'Collectibles',
    technical: 'Technical',
    walkthrough: 'Walkthrough',
    allEndings: 'All Endings',
    bestEnding: 'Best Ending',
    choices: 'Choices',
    gameLength: 'Game Length',
    saveEveryone: 'Save Everyone',
    trophyGuide: 'Trophy Guide',
    multiplayer: 'Multiplayer',
    bugFixes: 'Bug Fixes',
    charactersAndCast: 'Characters & Cast',
    collectiblesLink: 'Collectibles',
    trophiesAndAchievements: 'Trophies & Achievements',
    crashingAndFixes: 'Crashing & Fixes',
    pcIssues: 'PC Issues',
    consoleIssues: 'Console Issues',
    privacyPolicy: 'Privacy Policy',
    contact: 'Contact',
    disclaimer1: 'Unofficial fan guide. Not affiliated with Supermassive Games.',
    disclaimer2:
      'Directive 8020 is part of The Dark Pictures Anthology. This is an unofficial fan guide.',
  },
  breadcrumbs: {
    episodeFormat: 'Ep. {number}: {title}',
    ariaLabel: 'Breadcrumb',
    labels: {
      '': 'Home',
      walkthrough: 'Walkthrough',
      'save-everyone': 'Save Everyone',
      'all-endings': 'All Endings',
      choices: 'Choices & Consequences',
      characters: 'Characters',
      trophies: 'Trophy Guide',
      collectibles: 'Collectibles',
      'game-length': 'Game Length',
      'bug-fixes': 'Bug Fixes',
      multiplayer: 'Multiplayer',
      'directive-8020-cove': 'Cove Guide',
      'directive-8020-actress': 'Cast & Actresses',
    },
  },
  spoiler: {
    title: 'Spoiler Warning',
    body: 'Click to reveal. This section contains critical story spoilers that may affect your gameplay experience.',
  },
  toc: { heading: 'On This Page' },
  episodeCard: { keyChoicesFormat: '{count} key choices' },
  choiceCard: {
    recommended: '✓ Recommended',
    avoid: '✗ Avoid',
    crossEpisode: '⟳ Cross-episode: ',
    endingImpact: '🎯 Ending impact: ',
  },
  endingCard: {
    trueEnding: 'True Ending',
    condition: 'Condition:',
    survivors: 'Survivors:',
    turningPoint: 'Turning Point:',
  },
  characterBadge: { scriptedDeath: 'Scripted Death', deceased: 'Deceased' },
  charactersView: {
    actor: 'Actor: ',
    canSurvive: 'Can Survive',
    npcCanSurvive: 'NPC — Can Survive',
    scriptedDeath: 'Scripted Death',
  },
  trophiesView: {
    platinum: 'Platinum',
    gold: 'Gold',
    silver: 'Silver',
    bronze: 'Bronze',
    missable: 'Missable',
  },
  allEndingsView: { notAvailable: 'N/A' },
};

const es: UiStrings = {
  layoutMeta: {
    defaultTitle: 'Guía de Directive 8020 | Walkthrough completo',
    titleTemplate: '%s | Guía de Directive 8020',
    description:
      'Walkthrough completo de The Dark Pictures Anthology: Directive 8020: salva a todos, todos los finales, decisiones, trofeos y consejos de supervivencia.',
    ogTitle: 'Guía de Directive 8020 | Walkthrough completo',
    ogDescription:
      'Guía paso a paso de Directive 8020. Salva a toda la tripulación, desbloquea todos los finales y domina cada decisión.',
    jsonLdDescription:
      'The Dark Pictures Anthology: Directive 8020 — un drama interactivo de terror y ciencia ficción de Supermassive Games.',
    jsonLdGenres: ['Terror', 'Drama interactivo', 'Ciencia ficción'],
  },
  nav: {
    walkthrough: 'Guía',
    saveEveryone: 'Salvar a todos',
    allEndings: 'Todos los finales',
    choices: 'Decisiones',
    characters: 'Personajes',
    trophies: 'Trofeos',
  },
  tabs: {
    guide: 'Guía',
    saveAll: 'Salvar',
    endings: 'Finales',
    choices: 'Decisiones',
    crew: 'Tripulación',
    trophies: 'Trofeos',
  },
  footer: {
    story: 'Historia',
    gameplay: 'Jugabilidad',
    collectibles: 'Coleccionables',
    technical: 'Técnico',
    walkthrough: 'Guía paso a paso',
    allEndings: 'Todos los finales',
    bestEnding: 'Mejor final',
    choices: 'Decisiones',
    gameLength: 'Duración del juego',
    saveEveryone: 'Salvar a todos',
    trophyGuide: 'Guía de trofeos',
    multiplayer: 'Multijugador',
    bugFixes: 'Errores y soluciones',
    charactersAndCast: 'Personajes y reparto',
    collectiblesLink: 'Coleccionables',
    trophiesAndAchievements: 'Trofeos y logros',
    crashingAndFixes: 'Cierres y soluciones',
    pcIssues: 'Problemas en PC',
    consoleIssues: 'Problemas en consola',
    privacyPolicy: 'Política de privacidad',
    contact: 'Contacto',
    disclaimer1: 'Guía de fans no oficial. Sin afiliación con Supermassive Games.',
    disclaimer2:
      'Directive 8020 es parte de The Dark Pictures Anthology. Esta es una guía de fans no oficial.',
  },
  breadcrumbs: {
    episodeFormat: 'Ep. {number}: {title}',
    ariaLabel: 'Ruta de navegación',
    labels: {
      '': 'Inicio',
      walkthrough: 'Guía paso a paso',
      'save-everyone': 'Salvar a todos',
      'all-endings': 'Todos los finales',
      choices: 'Decisiones y consecuencias',
      characters: 'Personajes',
      trophies: 'Guía de trofeos',
      collectibles: 'Coleccionables',
      'game-length': 'Duración del juego',
      'bug-fixes': 'Errores y soluciones',
      multiplayer: 'Multijugador',
      'directive-8020-cove': 'Guía de Cove',
      'directive-8020-actress': 'Reparto y actrices',
      'who-is-the-real-eisele-directive-8020': '¿Quién es la verdadera Eisele?',
      'shoot-williams-or-stand-down': '¿Disparar a Williams o bajar el arma?',
      'can-carter-survive': '¿Puede sobrevivir Carter?',
      'directive-8020-skill-checks': 'Pruebas de habilidad',
      codes: 'Códigos',
      'privacy-policy': 'Política de privacidad',
    },
  },
  spoiler: {
    title: 'Aviso de spoilers',
    body: 'Haz clic para mostrar. Esta sección contiene spoilers importantes de la historia que pueden afectar tu experiencia de juego.',
  },
  toc: { heading: 'En esta página' },
  episodeCard: { keyChoicesFormat: '{count} decisiones clave' },
  choiceCard: {
    recommended: '✓ Recomendada',
    avoid: '✗ Evitar',
    crossEpisode: '⟳ Entre episodios: ',
    endingImpact: '🎯 Impacto en el final: ',
  },
  endingCard: {
    trueEnding: 'Final verdadero',
    condition: 'Condición:',
    survivors: 'Supervivientes:',
    turningPoint: 'Punto de inflexión:',
  },
  characterBadge: { scriptedDeath: 'Muerte guionizada', deceased: 'Fallecido' },
  charactersView: {
    actor: 'Actor: ',
    canSurvive: 'Puede sobrevivir',
    npcCanSurvive: 'NPC — Puede sobrevivir',
    scriptedDeath: 'Muerte guionizada',
  },
  trophiesView: {
    platinum: 'Platino',
    gold: 'Oro',
    silver: 'Plata',
    bronze: 'Bronce',
    missable: 'Perdible',
  },
  allEndingsView: { notAvailable: 'N/D' },
};

// zh-hant has no content yet (content/pages/zh-hant is absent, so no zh-hant
// route is ever built); it serves English chrome until its own dictionary is
// added alongside its content translations.
export const uiStrings: Record<Locale, UiStrings> = { en, es, 'zh-hant': en };
