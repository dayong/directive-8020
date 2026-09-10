import fs from 'fs';
import path from 'path';
import { locales, type Locale } from '@/i18n/config';

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
  return locales.filter((locale) => getPageContent(slug, locale) !== null);
}
