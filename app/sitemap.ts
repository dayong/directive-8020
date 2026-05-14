import type { MetadataRoute } from 'next';
import { getAllEpisodeSlugs } from '@/lib/mdx';
import { characters } from '@/data/characters';

const BASE_URL = 'https://directive-8020.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const episodeSlugs = getAllEpisodeSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/save-everyone`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/all-endings`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/walkthrough`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/choices`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/characters`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/trophies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/collectibles`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ];

  const episodePages: MetadataRoute.Sitemap = episodeSlugs.map((slug) => ({
    url: `${BASE_URL}/walkthrough/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const characterPages: MetadataRoute.Sitemap = characters.map((char) => ({
    url: `${BASE_URL}/characters/${char.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...episodePages, ...characterPages];
}
