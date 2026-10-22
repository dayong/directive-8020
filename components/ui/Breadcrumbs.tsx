'use client';

import { usePathname } from 'next/navigation';
import Link from '@/components/ui/LocaleLink';
import { stripLocalePrefix } from '@/i18n/config';
import { useMessages } from '@/components/i18n/Messages';
export default function Breadcrumbs() {
  const pathname = usePathname();
  const { messages: { breadcrumbs }, labels } = useMessages();
  const segments = stripLocalePrefix(pathname).split('/').filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((seg, i) => {
    const href = '/' + segments.slice(0, i + 1).join('/');
    const isLast = i === segments.length - 1;
    const parentSeg = i > 0 ? segments[i - 1] : undefined;
    const label =
      breadcrumbs.labels[seg] ||
      labels[`${parentSeg}/${seg}`] ||
      seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    return { href, label, isLast };
  });

  return (
    <div className="bg-slate-800/30 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <nav
          className="flex items-center gap-1 py-2.5 text-sm overflow-x-auto whitespace-nowrap"
          aria-label={breadcrumbs.ariaLabel}
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
