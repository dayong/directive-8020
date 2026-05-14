import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const episodesDir = path.join(process.cwd(), 'content', 'episodes');

export interface EpisodeFrontmatter {
  title: string;
  episode: number;
  slug: string;
  description: string;
  ogDescription: string;
  duration: string;
  keyChoices: number;
  characters: string[];
}

export async function getEpisodeContent(slug: string) {
  const filePath = path.join(episodesDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, 'utf-8');

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    content,
    frontmatter: frontmatter as unknown as EpisodeFrontmatter,
  };
}

export function getAllEpisodeSlugs(): string[] {
  if (!fs.existsSync(episodesDir)) {
    return [];
  }

  return fs
    .readdirSync(episodesDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}
