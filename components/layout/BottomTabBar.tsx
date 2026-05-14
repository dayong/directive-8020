'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/walkthrough', label: 'Guide', icon: '📖' },
  { href: '/save-everyone', label: 'Save All', icon: '👥' },
  { href: '/all-endings', label: 'Endings', icon: '🏁' },
  { href: '/choices', label: 'Choices', icon: '🔀' },
  { href: '/characters', label: 'Crew', icon: '👤' },
  { href: '/trophies', label: 'Trophies', icon: '🏆' },
];

export default function BottomTabBar() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur border-t border-slate-800 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-1">
        {tabs.map((tab) => {
          const isActive = pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-0 px-1 py-1 rounded-lg transition-colors ${
                isActive
                  ? 'text-violet-400'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span className="text-lg leading-none">{tab.icon}</span>
              <span className="text-[10px] font-medium leading-none">
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
