import fs from 'fs';
import path from 'path';
import { defaultLocale, type Locale } from '@/i18n/config';
import { characters } from '@/data/characters';
import { episodes } from '@/data/episodes';
import { endings } from '@/data/endings';
import { trophies } from '@/data/trophies';
import { choices } from '@/data/choices';
import type { Character, Choice, Ending, Episode, Trophy } from '@/types';

// Server-only module (reads content/data/<locale>/*.json with fs). Never
// import it from a client component.
//
// locales other than the default merge a per-id overlay file over the English
// records; fields absent from the overlay fall back to English.

const cache = new Map<string, unknown>();

function getOverlay<T>(name: string, locale: Locale): Record<string, T> | null {
  if (locale === defaultLocale) return null;
  const key = `${locale}/${name}`;
  if (!cache.has(key)) {
    const file = path.join(process.cwd(), 'content', 'data', locale, `${name}.json`);
    try {
      cache.set(key, JSON.parse(fs.readFileSync(file, 'utf8')));
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === 'ENOENT') cache.set(key, null);
      else throw err;
    }
  }
  return cache.get(key) as Record<string, T> | null;
}

function mergeById<T extends { id: string }>(items: T[], overlay: Record<string, Partial<T>> | null): T[] {
  if (!overlay) return items;
  return items.map((item) => {
    const patch = overlay[item.id];
    return patch ? { ...item, ...patch } : item;
  });
}

export function getCharacters(locale: Locale): Character[] {
  return mergeById(characters, getOverlay('characters', locale));
}

export function getEpisodes(locale: Locale): Episode[] {
  return mergeById(episodes, getOverlay('episodes', locale));
}

export function getEndings(locale: Locale): Ending[] {
  return mergeById(endings, getOverlay('endings', locale));
}

export function getTrophies(locale: Locale): Trophy[] {
  return mergeById(trophies, getOverlay('trophies', locale));
}

interface ChoiceOverlay {
  scene?: string;
  description?: string;
  relationshipDetail?: string;
  options?: Partial<Choice['options'][number]>[];
}

export function getChoices(locale: Locale): Choice[] {
  const overlay = getOverlay<ChoiceOverlay>('choices', locale);
  if (!overlay) return choices;
  return choices.map((choice) => {
    const patch = overlay[choice.id];
    if (!patch) return choice;
    const options = choice.options.map((option, i) => {
      const optionPatch = patch.options?.[i];
      return optionPatch ? { ...option, ...optionPatch } : option;
    });
    const { options: _ignored, ...rest } = patch;
    return { ...choice, ...rest, options };
  });
}
