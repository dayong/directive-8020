'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { episodes } from '@/data/episodes';
import { characters } from '@/data/characters';

const labels: Record<string, string> = {
  '': 'Home',
  walkthrough: 'Walkthrough',
  'save-everyone': 'Save Everyone',
  'all-endings': 'All Endings',
  choices: 'Choices & Consequences',
  characters: 'Characters',
  trophies: 'Trophy Guide',
  collectibles: 'Collectibles',
  'game-length': 'Game Length',
  'bug-fixes': 'Bug Fixes',
  multiplayer: 'Multiplayer',
  'directive-8020-cove': 'Cove Guide',
  'directive-8020-actress': 'Cast & Actresses',
};

function lookupDynamic(seg: string, parentSeg?: string): string {
  // Episode slugs like episode-1 → "Episode 1: Little Star"
  if (parentSeg === 'walkthrough') {
    const ep = episodes.find((e) => e.slug === seg || e.id === seg);
    if (ep) return `Episode ${ep.number}: ${ep.title}`;
  }
  // Character ids like young → "Brianna Young"
  if (parentSeg === 'characters') {
    const char = characters.find((c) => c.id === seg);
    if (char) return char.fullName;
  }
  return '';
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((seg, i) => {
    const href = '/' + segments.slice(0, i + 1).join('/');
    const isLast = i === segments.length - 1;
    const parentSeg = i > 0 ? segments[i - 1] : undefined;
    const label =
      labels[seg] ||
      lookupDynamic(seg, parentSeg) ||
      seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    return { href, label, isLast };
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-2">
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
        {crumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-slate-700">/</span>}
            {crumb.isLast ? (
              <span className="text-slate-300">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-violet-400 transition-colors">
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
