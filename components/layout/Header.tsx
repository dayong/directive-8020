import Link from 'next/link';

const navLinks = [
  { href: '/walkthrough', label: 'Walkthrough' },
  { href: '/save-everyone', label: 'Save Everyone' },
  { href: '/all-endings', label: 'All Endings' },
  { href: '/choices', label: 'Choices' },
  { href: '/characters', label: 'Characters' },
  { href: '/trophies', label: 'Trophies' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-base md:text-lg font-bold tracking-wider text-slate-100">
            DIRECTIVE{' '}
            <span className="text-violet-400">8020</span>
          </span>
        </Link>

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

        {/* Mobile: bottom tab bar handles navigation, header shows logo only */}
      </div>
    </header>
  );
}
