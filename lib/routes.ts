import { getAllEpisodeSlugs } from '@/lib/mdx';
import { getAvailableLocales } from '@/lib/content';
import { characters } from '@/data/characters';
import type { Locale } from '@/i18n/config';

// Keep the static list in sync with staticRoutes in app/[locale]/[...slug]/page.tsx
// and the page list in app/sitemap.ts.
const staticPaths: { path: string; contentSlug: string }[] = [
  { path: '/', contentSlug: 'home' },
  { path: '/save-everyone', contentSlug: 'save-everyone' },
  { path: '/all-endings', contentSlug: 'all-endings' },
  { path: '/walkthrough', contentSlug: 'walkthrough' },
  { path: '/choices', contentSlug: 'choices' },
  { path: '/characters', contentSlug: 'characters' },
  { path: '/trophies', contentSlug: 'trophies' },
  { path: '/collectibles', contentSlug: 'collectibles' },
  { path: '/game-length', contentSlug: 'game-length' },
  { path: '/bug-fixes', contentSlug: 'bug-fixes' },
  { path: '/multiplayer', contentSlug: 'multiplayer' },
  { path: '/directive-8020-cove', contentSlug: 'directive-8020-cove' },
  { path: '/directive-8020-actress', contentSlug: 'directive-8020-actress' },
  { path: '/directive-8020-buy', contentSlug: 'directive-8020-buy' },
  { path: '/privacy-policy', contentSlug: 'privacy-policy' },
  { path: '/who-is-the-real-eisele-directive-8020', contentSlug: 'who-is-the-real-eisele-directive-8020' },
  { path: '/shoot-williams-or-stand-down', contentSlug: 'shoot-williams-or-stand-down' },
  { path: '/can-carter-survive', contentSlug: 'can-carter-survive' },
  { path: '/directive-8020-skill-checks', contentSlug: 'directive-8020-skill-checks' },
  { path: '/codes', contentSlug: 'codes' },
];

function dynamicPaths(): { path: string; contentSlug: string }[] {
  return [
    ...getAllEpisodeSlugs().map((slug) => ({
      path: `/walkthrough/${slug}`,
      contentSlug: 'walkthrough-episode',
    })),
    ...characters.map((character) => ({
      path: `/characters/${character.id}`,
      contentSlug: 'character-detail',
    })),
  ];
}

/**
 * Public (unprefixed) paths that exist in the given locale, used by LocaleLink
 * to fall back to the English URL for pages without a translation.
 */
export function getTranslatedPaths(locale: Locale): string[] {
  return [...staticPaths, ...dynamicPaths()]
    .filter((entry) => getAvailableLocales(entry.contentSlug).includes(locale))
    .map((entry) => entry.path);
}
