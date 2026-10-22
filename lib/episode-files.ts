import fs from 'fs';
import path from 'path';

/** File enumeration is separate from MDX compilation so build tooling stays synchronous. */
export function getAllEpisodeSlugs(): string[] {
  const directory = path.join(process.cwd(), 'content', 'episodes');
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''));
}
