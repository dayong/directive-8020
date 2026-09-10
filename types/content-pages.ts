export interface ContentMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export interface HeroContent {
  h1: string;
  tagline?: string;
  intro: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export type Tone = 'good' | 'bad' | 'neutral';

export interface CtaLink {
  href: string;
  label: string;
  variant: 'primary' | 'outline' | 'ghost';
}

export interface CtaContent {
  text: string;
  links: CtaLink[];
}

export type TableCell = string | { text: string; tone: 'red' | 'green' };

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; headers: string[]; rows: TableCell[][] };

export interface ProseSection {
  heading: string;
  blocks: ContentBlock[];
}

export type SummaryCardTone = 'yes' | 'no' | 'later';

export interface MultiplayerContent {
  meta: ContentMeta;
  hero: HeroContent;
  summaryCards: {
    cards: { icon: string; label: string; tone: SummaryCardTone; value: string; desc: string }[];
  };
  sections: ProseSection[];
  faqHeading: string;
  faqs: FaqItem[];
  cta: CtaContent;
}

export type LengthCardTone = 'main' | 'endings' | 'completion';

export interface GameLengthContent {
  meta: ContentMeta;
  hero: HeroContent;
  summaryCards: {
    cards: { icon: string; label: string; tone: LengthCardTone; value: string; unit: string }[];
  };
  episodeTable: { heading: string; headers: string[] };
  affectsLength: {
    heading: string;
    items: { term: string; text: string }[];
  };
  faqHeading: string;
  faqs: FaqItem[];
  cta: CtaContent;
}

export interface BugFixesContent {
  meta: ContentMeta;
  hero: HeroContent;
  sections: { id?: string; heading: string; blocks: ContentBlock[] }[];
  specsTable: { heading: string; headers: string[]; rows: string[][] };
  cta: CtaContent;
}

export interface CodesContent {
  meta: ContentMeta;
  hero: HeroContent;
  quickRef: { heading: string; headers: string[] };
  codes: { location: string; episode: string; code: string; how: string }[];
  findHeading: string;
  cheats: { heading: string; intro: string; items: string[] };
  cta: CtaContent;
}

export interface ActressContent {
  meta: ContentMeta;
  hero: HeroContent;
  intro: string;
  sections: ProseSection[];
  castFaq: { heading: string; items: { q: string; a: string }[] };
  cta: CtaContent;
}

export interface CoveContent {
  meta: ContentMeta;
  hero: HeroContent;
  intro: string;
  sections: ProseSection[];
  quickAnswers: { heading: string; items: { q: string; a: string }[] };
  cta: CtaContent;
}

export interface EiseleContent {
  meta: ContentMeta;
  hero: HeroContent;
  intro: string;
  sections: ProseSection[];
  outro: string;
}

export interface PrivacyPolicyContent {
  meta: ContentMeta;
  hero: HeroContent;
  sections: ProseSection[];
}

export interface HomeContent {
  meta: ContentMeta;
  hero: { titleMain: string; titleAccent: string; subtitle: string; buttons: CtaLink[] };
  warning: { heading: string; text: string };
  quickAccess: { heading: string; tiles: { icon: string; label: string; href: string }[] };
  episodeSection: { heading: string };
  truePath: { heading: string; intro: string; steps: { title: string; sub: string }[]; resultLabel: string; result: string; cta: CtaLink };
  moreGuides: { heading: string; cards: { icon: string; kicker: string; title: string; body: string; href: string }[] };
  faqHeading: string;
  faqs: FaqItem[];
  friendlyLinks: { heading: string; links: { href: string; label: string }[] };
}

export interface CharactersContent {
  meta: ContentMeta;
  hero: HeroContent;
}

export interface TrophiesContent {
  meta: ContentMeta;
  hero: HeroContent;
  roadmap: { heading: string; columns: { title: string; body: string }[] };
  missableWarning: string;
}

export interface AllEndingsContent {
  meta: ContentMeta;
  hero: HeroContent;
  trueEndingBox: {
    headingFormat: string;
    requirementsLabel: string;
    survivorsLabel: string;
    aliveFormat: string;
    missedFormat: string;
  };
  overview: { heading: string; headers: string[] };
  detailedHeading: string;
  cta: CtaContent;
}

export interface WalkthroughContent {
  meta: ContentMeta;
  hero: HeroContent;
  introParagraphs: string[];
  episodeSection: { heading: string; sub: string };
  tipsSection: { heading: string; sub: string; fallback: string; tips: Record<string, string> };
  firstTime: { heading: string; paragraphs: string[] };
  crossLinks: { heading: string; text: string; links: CtaLink[] };
}

export interface CollectiblesContent {
  meta: ContentMeta;
  hero: HeroContent;
  tableHeaders: string[];
  episodeHeadingFormat: string;
  countFormat: string;
  note: string;
  episodes: { id: string; items: { name: string; location: string; type: string }[] }[];
}

export interface SkillChecksContent {
  meta: ContentMeta;
  hero: HeroContent;
  introSection: { heading: string; paragraphs: string[] };
  checkTypes: {
    heading: string;
    cards: { label: string; title: string; body: string; tip: string }[];
  };
  realChecks: { heading: string; intro: string; headers: string[]; rows: string[][] };
  whyEarlier: { heading: string; intro: string; items: string[]; outro: string };
  faqHeading: string;
  faqs: FaqItem[];
  cta: CtaContent;
}

export interface CanCarterSurviveContent {
  meta: ContentMeta;
  hero: HeroContent;
  straightAnswer: { heading: string; callout: string };
  whyGuilt: { heading: string; paragraph: string };
  whatHappens: { heading: string; summary: string; paragraphs: string[] };
  canSave: { heading: string; intro: string; badge: string; footnote: string };
  faqHeading: string;
  faqs: FaqItem[];
  cta: CtaContent;
}

export interface ShootWilliamsContent {
  meta: ContentMeta;
  hero: HeroContent;
  options: {
    heading: string;
    cards: { badge: string; tone: Tone; title: string; body: string; chain?: string }[];
  };
  sceneContext: { heading: string; summary: string; paragraphs: string[] };
  outcomes: {
    heading: string;
    columns: { tone: 'good' | 'bad'; heading: string; items: string[] }[];
    outro: string;
  };
  faqHeading: string;
  faqs: FaqItem[];
  cta: CtaContent;
}

export interface ChoiceTreeCopy {
  heading: string;
  tabFormat: string;
  bestChoiceLabel: string;
  suboptimalLabel: string;
  consequenceLabel: string;
  progressFormat: string;
  emptyPath: string;
  onTrack: string;
  stepsAwayOneFormat: string;
  stepsAwayManyFormat: string;
  recommendedFormat: string;
  remainingFormat: string;
}

export interface ChoicesContent {
  meta: ContentMeta;
  hero: HeroContent;
  tabs: { format: string; countFormat: string };
  search: { placeholder: string; clearLabel: string };
  noResults: string;
  relationshipLabel: string;
  lockout: {
    heading: string;
    intro: string;
    headers: string[];
    rows: { choice: string; ep: number; badPick: string; consequence: string }[];
  };
  tree: ChoiceTreeCopy;
}

export interface SurvivalTrackerCopy {
  heading: string;
  scriptedDeathLabel: string;
  predictedRouteLabel: string;
  routes: { best: string; standard: string; bad: string; gameOver: string };
  aliveFormat: string;
  aliveHint: string;
}

export interface SaveEveryoneContent {
  meta: ContentMeta;
  hero: HeroContent;
  warning: { heading: string; before: string; strong: string; after: string };
  howTo: { name: string; description: string; steps: { name: string; text: string }[] };
  keyChoices: {
    heading: string;
    episodeHeadingFormat: string;
    countFormat: string;
    walkthroughLinkFormat: string;
  };
  sceneHighlights: Record<
    string,
    { type: 'missable' | 'critical' | 'true-ending'; text: string; tip?: string }
  >;
  destinies: {
    heading: string;
    intro: string;
    headers: string[];
    rows: { character: string; destiny: string; how: string }[];
  };
  tracker: SurvivalTrackerCopy;
  cta: CtaContent;
}

export interface CharacterDetailContent {
  notFoundTitle: string;
  metaTitleFormat: string;
  metaDescriptionFormat: string;
  backLink: string;
  profileHeading: string;
  actorLabel: string;
  survivalStatusLabel: string;
  destinyLabel: string;
  keyChoicesFormat: string;
  cannotBeSavedFormat: string;
  cannotBeSavedTextFormat: string;
}

export interface EpisodeDetailContent {
  notFoundTitle: string;
  backLink: string;
  episodeLabelFormat: string;
  prevLabel: string;
  nextLabel: string;
  navFormat: string;
}
