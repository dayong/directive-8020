import fs from 'fs';
import path from 'path';
import type { Locale } from '@/i18n/config';
import type { ContentMeta, ProseSection } from '@/types/content-pages';
import type { ContentReview } from '@/lib/content';

export interface CharacterArticle {
  meta: ContentMeta;
  sections: ProseSection[];
  review: ContentReview;
}
const cache = new Map<string, CharacterArticle | null>();

/** A directory summary is never used as a substitute for an authored profile. */
export function getCharacterArticle(id: string, locale: Locale): CharacterArticle | null {
  if (!/^[a-z0-9-]+$/.test(id)) return null;
  const key = `${locale}/${id}`;
  if (!cache.has(key)) {
    const file = path.join(process.cwd(), 'content', 'characters', locale, `${id}.json`);
    try { cache.set(key, JSON.parse(fs.readFileSync(file, 'utf8'))); }
    catch (err) {
      if ((err as NodeJS.ErrnoException).code === 'ENOENT') cache.set(key, null);
      else throw err;
    }
  }
  return cache.get(key) ?? null;
}

export function hasCharacterArticle(id: string, locale: Locale): boolean {
  const article = getCharacterArticle(id, locale);
  return !!article?.meta.title && !!article.meta.description && !!article.review
    && article.sections.length > 0 && article.sections.every((section) => !!section.heading && section.blocks.length > 0);
}
