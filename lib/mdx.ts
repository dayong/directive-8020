import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { MdxLink } from '@/components/ui/LocaleLink';
import { defaultLocale, type Locale } from '@/i18n/config';

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

function episodeFile(slug: string, locale: Locale): string {
  if (locale !== defaultLocale) {
    const localizedPath = path.join(episodesDir, locale, `${slug}.mdx`);
    return localizedPath;
  }
  return path.join(episodesDir, `${slug}.mdx`);
}

export async function getEpisodeContent(slug: string, locale: Locale = defaultLocale) {
  const filePath = episodeFile(slug, locale);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, 'utf-8');

  const { content, frontmatter } = await compileMDX({
    source,
    components: {
      // In-body guide links stay unprefixed in every locale's MDX and are
      // localized at render time.
      a: MdxLink,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    content,
    frontmatter: frontmatter as unknown as EpisodeFrontmatter,
  };
}

export { getAllEpisodeSlugs } from '@/lib/episode-files';
