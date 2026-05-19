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
  if (parentSeg === 'walkthrough') {
    const ep = episodes.find((e) => e.slug === seg || e.id === seg);
    if (ep) return `Ep. ${ep.number}: ${ep.title}`;
  }
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
    <div className="bg-slate-800/30 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <nav
          className="flex items-center gap-1 py-2.5 text-sm overflow-x-auto whitespace-nowrap"
          aria-label="Breadcrumb"
        >
          {crumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-1 shrink-0">
              {i > 0 && (
                <svg className="w-4 h-4 text-slate-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {crumb.isLast ? (
                <span className="text-slate-300 font-medium truncate max-w-[200px]">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-slate-400 hover:text-violet-400 hover:bg-slate-800/50 px-2 py-1 -mx-2 -my-1 rounded transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
