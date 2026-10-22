import fs from 'fs';
import path from 'path';
import { locales, type Locale } from '@/i18n/config';
import { translatedUiLocales } from '@/i18n/ui';
import { getCharacterArticle, hasCharacterArticle } from '@/lib/character-content';

const cache = new Map<string, unknown>();

export function getPageContent<T>(slug: string, locale: Locale = 'en'): T | null {
  const key = `${locale}/${slug}`;
  if (!cache.has(key)) {
    const file = path.join(process.cwd(), 'content', 'pages', locale, `${slug}.json`);
    try {
      cache.set(key, JSON.parse(fs.readFileSync(file, 'utf8')));
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === 'ENOENT') cache.set(key, null);
      else throw err;
    }
  }
  return cache.get(key) as T | null;
}

export function getAvailableLocales(slug: string): Locale[] {
  return locales.filter((locale) => translatedUiLocales.includes(locale) && getPageContent(slug, locale) !== null);
}

/** A shared view template alone never proves that a dynamic article is translated. */
export function getPageLocales(contentSlug: string, routePath: string): Locale[] {
  return getAvailableLocales(contentSlug).filter((locale) => {
    if (contentSlug === 'character-detail') {
      const id = routePath.split('/').pop()!;
      if (locale === 'en') return hasCharacterArticle(id, locale);
      const file = path.join(process.cwd(), 'content', 'data', locale, 'characters.json');
      if (!fs.existsSync(file)) return false;
      const record = JSON.parse(fs.readFileSync(file, 'utf8'))[id];
      return !!record?.description && !!record?.role
        && hasCharacterArticle(id, locale);
    }
    if (locale === 'en') return true;
    if (contentSlug === 'walkthrough-episode') {
      const id = routePath.split('/').pop();
      return fs.existsSync(path.join(process.cwd(), 'content', 'episodes', locale, `${id}.mdx`));
    }
    return true;
  });
}

export interface ContentReview {
  status: 'verified' | 'needs-review' | 'pending';
  checkedAt: string;
  notice?: string;
  sources: { label: string; url: string }[];
  replacement?: {
    heading: string; intro: string;
    sections: { heading: string; text: string }[];
  };
}
/** Episode review records are independent of the shared translated view template. */
export function getContentReview(slug: string, locale: Locale, routePath?: string): ContentReview | undefined {
  if (slug === 'character-detail' && routePath?.startsWith('/characters/')) {
    const article = getCharacterArticle(routePath.slice('/characters/'.length), locale);
    if (article) return article.review;
  }
  if (slug === 'walkthrough-episode' && routePath?.startsWith('/walkthrough/')) {
    const id = routePath.slice('/walkthrough/'.length);
    if (/^[a-z0-9-]+$/.test(id)) {
      const key = `episode-review/${locale}/${id}`;
      if (!cache.has(key)) {
        const file = path.join(process.cwd(), 'content', 'reviews', locale, 'episodes', `${id}.json`);
        try { cache.set(key, JSON.parse(fs.readFileSync(file, 'utf8'))); }
        catch (err) {
          if ((err as NodeJS.ErrnoException).code === 'ENOENT') cache.set(key, null);
          else throw err;
        }
      }
      const review = cache.get(key) as ContentReview | null;
      if (review) return review;
    }
  }
  return getPageContent<{ review?: ContentReview }>(slug, locale)?.review;
}
/** Interim corrections remain reachable at their existing URLs, but are not SEO alternates. */
export function getIndexableLocales(slug: string, routePath: string): Locale[] {
  return getPageLocales(slug, routePath).filter((locale) => getContentReview(slug, locale, routePath)?.status !== 'pending');
}
