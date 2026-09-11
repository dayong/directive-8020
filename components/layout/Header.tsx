import Link from '@/components/ui/LocaleLink';
import LanguageSwitcher from '@/components/i18n/LanguageSwitcher';
import { uiStrings } from '@/i18n/ui';
import type { Locale } from '@/i18n/config';

export default function Header({ locale }: { locale: Locale }) {
  const t = uiStrings[locale].nav;
  const navLinks = [
    { href: '/walkthrough', label: t.walkthrough },
    { href: '/save-everyone', label: t.saveEveryone },
    { href: '/all-endings', label: t.allEndings },
    { href: '/choices', label: t.choices },
    { href: '/characters', label: t.characters },
    { href: '/trophies', label: t.trophies },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-base md:text-lg font-bold tracking-wider text-slate-100">
            DIRECTIVE{' '}
            <span className="text-violet-400">8020</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-300 hover:text-violet-400 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile: bottom tab bar handles navigation; the header keeps the
            logo and the language switcher */}
      </div>
    </header>
  );
}
