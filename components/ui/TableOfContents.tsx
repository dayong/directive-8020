'use client';

import { useEffect, useState } from 'react';
import { useMessages } from '@/components/i18n/Messages';
import type { Locale } from '@/i18n/config';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function TableOfContents({ locale }: { locale: Locale }) {
  const { messages } = useMessages();
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('article h2, article h3')
    );

    // Add IDs to headings for anchor linking before reading them back, so the
    // TOC hrefs always match the actual element ids.
    elements.forEach((el) => {
      if (!el.id) el.id = slugify(el.textContent || '');
    });

    const items: TocItem[] = elements.map((el) => ({
      id: el.id,
      text: el.textContent || '',
      level: el.tagName === 'H2' ? 2 : 3,
    }));

    setHeadings(items);

    // Intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="space-y-1">
      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
        {messages.toc.heading}
      </h4>
      {headings.map((heading) => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          className={`block text-sm py-1 transition-colors ${
            heading.level === 3 ? 'pl-3' : ''
          } ${
            activeId === heading.id
              ? 'text-violet-400 font-medium'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );
}
