import Link from 'next/link';

const footerLinks = [
  { href: '/walkthrough', label: 'Walkthrough' },
  { href: '/save-everyone', label: 'Save Everyone' },
  { href: '/all-endings', label: 'All Endings' },
  { href: '/choices', label: 'Choices & Consequences' },
  { href: '/characters', label: 'Characters' },
  { href: '/trophies', label: 'Trophies' },
  { href: '/collectibles', label: 'Collectibles' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-violet-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="border-t border-slate-800 pt-8 space-y-2">
          <p className="text-xs text-slate-500">
            Unofficial fan guide. Not affiliated with Supermassive Games.
          </p>
          <p className="text-xs text-slate-600">
            Directive 8020 is part of The Dark Pictures Anthology. This is an
            unofficial fan guide.
          </p>
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} directive-8020.com
          </p>
        </div>
      </div>
    </footer>
  );
}
