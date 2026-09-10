import type { MetadataRoute } from 'next';
import { getAllEpisodeSlugs } from '@/lib/mdx';
import { characters } from '@/data/characters';
import { defaultLocale, hreflangTag, type Locale } from '@/i18n/config';
import { getAvailableLocales } from '@/lib/content';

const BASE_URL = 'https://directive-8020.com';

interface Page {
  path: string;
  contentSlug: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

function urlFor(path: string, locale: Locale) {
  return locale === defaultLocale ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;
}

function localizedEntries(page: Page): MetadataRoute.Sitemap {
  const available = getAvailableLocales(page.contentSlug);

  // Alternates appear only once a page exists in another language, so the
  // English-only sitemap stays exactly what it is today.
  const languages =
    available.length > 1
      ? {
          ...Object.fromEntries(available.map((locale) => [hreflangTag(locale), urlFor(page.path, locale)])),
          'x-default': urlFor(page.path, defaultLocale),
        }
      : undefined;

  return available.map((locale) => ({
    url: urlFor(page.path, locale),
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    ...(languages ? { alternates: { languages } } : {}),
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Page[] = [
    { path: '', contentSlug: 'home', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/save-everyone', contentSlug: 'save-everyone', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/all-endings', contentSlug: 'all-endings', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/walkthrough', contentSlug: 'walkthrough', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/choices', contentSlug: 'choices', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/characters', contentSlug: 'characters', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/trophies', contentSlug: 'trophies', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/collectibles', contentSlug: 'collectibles', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/game-length', contentSlug: 'game-length', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/bug-fixes', contentSlug: 'bug-fixes', changeFrequency: 'weekly', priority: 0.75 },
    { path: '/multiplayer', contentSlug: 'multiplayer', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/directive-8020-cove', contentSlug: 'directive-8020-cove', changeFrequency: 'monthly', priority: 0.65 },
    { path: '/directive-8020-actress', contentSlug: 'directive-8020-actress', changeFrequency: 'monthly', priority: 0.65 },
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
      })
    ),
    ...characters.map(
      (character): Page => ({
        path: `/characters/${character.id}`,
        contentSlug: 'character-detail',
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    ),
  ];

  return pages.flatMap(localizedEntries);
}
