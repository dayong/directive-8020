import type { MetadataRoute } from 'next';
import { execSync } from 'child_process';
import { getAllEpisodeSlugs } from '@/lib/mdx';
import { characters } from '@/data/characters';
import { defaultLocale, hreflangTag, type Locale } from '@/i18n/config';
import { getIndexableLocales, getPageContent } from '@/lib/content';

const BASE_URL = 'https://directive-8020.com';

type DataDomain = 'characters' | 'choices' | 'endings' | 'episodes' | 'trophies';

interface Page {
  path: string;
  contentSlug: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
  /** Shared data feeds (base ts + locale overlay) this page renders. */
  data?: DataDomain[];
  extraFiles?: (locale: Locale) => string[];
}

// Latest commit date per source file, read from git once per build. lastmod is
// derived from when a page's own content actually changed, not from build
// time, so Google keeps trusting the field. Missing git (non-checkout builds)
// yields no lastmod at all rather than a wrong one.
function contentDates(): Map<string, string> {
  const dates = new Map<string, string>();
  try {
    const log = execSync('git log --pretty=format:@@%cI --name-only -- content data', {
      cwd: process.cwd(),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    let current = '';
    for (const line of log.split('\n')) {
      const trimmed = line.trim();
      if (trimmed.startsWith('@@')) current = trimmed.slice(2);
      else if (trimmed && current && !dates.has(trimmed)) dates.set(trimmed, current);
    }
  } catch {
    // git unavailable — omit lastModified everywhere
  }
  return dates;
}

function lastModifiedFor(files: string[], dates: Map<string, string>): string | undefined {
  let best: string | undefined;
  for (const file of files) {
    const date = dates.get(file);
    if (date && (!best || Date.parse(date) > Date.parse(best))) best = date;
  }
  return best;
}

function urlFor(path: string, locale: Locale) {
  return locale === defaultLocale ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;
}

function localizedEntries(page: Page, dates: Map<string, string>): MetadataRoute.Sitemap {
  const available = getIndexableLocales(page.contentSlug, page.path);

  // Alternates appear only once a page exists in another language, so the
  // English-only sitemap stays exactly what it is today.
  const languages =
    available.length > 1
      ? {
          ...Object.fromEntries(available.map((locale) => [hreflangTag(locale), urlFor(page.path, locale)])),
          'x-default': urlFor(page.path, defaultLocale),
        }
      : undefined;

  return available.map((locale) => {
    const files = [
      `content/pages/${locale}/${page.contentSlug}.json`,
      ...(page.contentSlug === 'character-detail' ? [`content/characters/${locale}/${page.path.split('/').pop()}.json`] : []),
      ...(page.contentSlug === 'walkthrough-episode' ? [`content/reviews/${locale}/episodes/${page.path.split('/').pop()}.json`] : []),
      ...(page.extraFiles?.(locale) ?? []),
      ...(getPageContent<{ article?: unknown }>(page.contentSlug, locale)?.article ? [] : page.data ?? []).flatMap((domain) => [
        `content/data/${locale}/${domain}.json`,
        `data/${domain}.ts`,
      ]),
    ];
    const lastModified = lastModifiedFor(files, dates);

    return {
      url: urlFor(page.path, locale),
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      ...(languages ? { alternates: { languages } } : {}),
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Page[] = [
    { path: '', contentSlug: 'home', changeFrequency: 'weekly', priority: 1.0, data: ['episodes'] },
    { path: '/save-everyone', contentSlug: 'save-everyone', changeFrequency: 'weekly', priority: 0.95, data: ['choices', 'episodes'] },
    { path: '/all-endings', contentSlug: 'all-endings', changeFrequency: 'weekly', priority: 0.9, data: ['endings'] },
    { path: '/walkthrough', contentSlug: 'walkthrough', changeFrequency: 'weekly', priority: 0.9, data: ['episodes'] },
    { path: '/choices', contentSlug: 'choices', changeFrequency: 'weekly', priority: 0.85, data: ['choices'] },
    { path: '/characters', contentSlug: 'characters', changeFrequency: 'monthly', priority: 0.8, data: ['characters'] },
    { path: '/trophies', contentSlug: 'trophies', changeFrequency: 'monthly', priority: 0.8, data: ['trophies'] },
    { path: '/collectibles', contentSlug: 'collectibles', changeFrequency: 'weekly', priority: 0.8, data: ['episodes'] },
    { path: '/game-length', contentSlug: 'game-length', changeFrequency: 'monthly', priority: 0.7, data: ['episodes'] },
    { path: '/bug-fixes', contentSlug: 'bug-fixes', changeFrequency: 'weekly', priority: 0.75 },
    { path: '/multiplayer', contentSlug: 'multiplayer', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/directive-8020-cove', contentSlug: 'directive-8020-cove', changeFrequency: 'monthly', priority: 0.65 },
    { path: '/directive-8020-actress', contentSlug: 'directive-8020-actress', changeFrequency: 'monthly', priority: 0.65 },
    { path: '/directive-8020-buy', contentSlug: 'directive-8020-buy', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/privacy-policy', contentSlug: 'privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/who-is-the-real-eisele-directive-8020', contentSlug: 'who-is-the-real-eisele-directive-8020', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/shoot-williams-or-stand-down', contentSlug: 'shoot-williams-or-stand-down', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/can-carter-survive', contentSlug: 'can-carter-survive', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/directive-8020-skill-checks', contentSlug: 'directive-8020-skill-checks', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/codes', contentSlug: 'codes', changeFrequency: 'monthly', priority: 0.7 },
    ...getAllEpisodeSlugs().map(
      (slug): Page => ({
        path: `/walkthrough/${slug}`,
        contentSlug: 'walkthrough-episode',
        changeFrequency: 'weekly',
        priority: 0.85,
        data: ['episodes'],
        extraFiles: (locale) => [locale === defaultLocale ? `content/episodes/${slug}.mdx` : `content/episodes/${locale}/${slug}.mdx`],
      })
    ),
    ...characters.map(
      (character): Page => ({
        path: `/characters/${character.id}`,
        contentSlug: 'character-detail',
        changeFrequency: 'monthly',
        priority: 0.7,
        data: ['characters', 'choices'],
      })
    ),
  ];

  const dates = contentDates();
  return pages.flatMap((page) => localizedEntries(page, dates));
}
