import fs from 'fs';
import path from 'path';

export function getPageContent<T>(slug: string, locale = 'en'): T | null {
  const file = path.join(process.cwd(), 'content', 'pages', locale, `${slug}.json`);
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8')) as T;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return null;
    throw err;
  }
}
