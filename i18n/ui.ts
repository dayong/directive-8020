import type { Locale } from './config';

export interface UiStrings {
  errors: { notFoundTitle: string; notFoundBody: string; home: string; loadTitle: string; loadBody: string; retry: string };
  accessibility: {
    openMenu: string; closeMenu: string; playPreview: string; episodeFormat: string;
    dismissLanguage: string; fallbackLanguage: string; englishContent: string; officialSource: string;
  };
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
  languageSwitcher: { label: string };
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
    whereToBuy: string;
    privacyPolicy: string;
    contact: string;
    disclaimer1: string;
    disclaimer2: string;
    affiliateNote: string;
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
  characterBadge: { scriptedDeath: string; deceased: string; unverified: string };
  charactersView: {
    notConfirmed: string; outcomeUnverified: string; playable: string; supporting: string;
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

import fs from 'node:fs';
import path from 'node:path';
import { defaultLocale, isLocale, locales } from './config';
import { missingMessages } from './validate';

type DictionaryModules = {
  en: typeof import('./messages/en.json'); es: typeof import('./messages/es.json');
  'zh-CN': typeof import('./messages/zh-CN.json'); 'zh-TW': typeof import('./messages/zh-TW.json');
  ja: typeof import('./messages/ja.json'); ko: typeof import('./messages/ko.json');
  fr: typeof import('./messages/fr.json'); de: typeof import('./messages/de.json');
  'pt-BR': typeof import('./messages/pt-BR.json');
};
type AssertDictionaries<T extends Record<Locale, UiStrings>> = T;
export type CheckedDictionaries = AssertDictionaries<DictionaryModules>;
export const translatedUiLocales: readonly Locale[] = locales;
const cache = new Map<Locale, UiStrings>();
function read(locale: Locale): UiStrings {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'i18n', 'messages', `${locale}.json`), 'utf8'));
}
/** Server only: read the selected dictionary, plus English for fallback/key validation. */
export function getUiStrings(locale: Locale): UiStrings {
  if (!isLocale(locale)) locale = defaultLocale;
  const cached = cache.get(locale);
  if (cached) return cached;
  const reference = locale === defaultLocale ? read(defaultLocale) : getUiStrings(defaultLocale);
  let dictionary = locale === defaultLocale ? reference : read(locale);
  const missing = missingMessages(reference as unknown as Parameters<typeof missingMessages>[0], dictionary as unknown as Parameters<typeof missingMessages>[1]);
  if (missing.length) {
    if (process.env.NODE_ENV !== 'production') throw new Error(`Missing ${locale} UI translations: ${missing.join(', ')}`);
    dictionary = mergeFallback(reference, dictionary) as UiStrings;
  }
  cache.set(locale, dictionary);
  return dictionary;
}
function mergeFallback(reference: object, value: object): object {
  const result = { ...value } as Record<string, unknown>;
  for (const [key, fallback] of Object.entries(reference)) {
    const candidate = result[key];
    if (candidate === undefined || candidate === null || candidate === '') result[key] = fallback;
    else if (fallback && typeof fallback === 'object' && !Array.isArray(fallback)) {
      result[key] = typeof candidate === 'object' && !Array.isArray(candidate)
        ? mergeFallback(fallback, candidate as object) : fallback;
    }
  }
  return result;
}
