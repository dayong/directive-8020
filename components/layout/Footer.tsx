import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Story</h4>
            <ul className="space-y-2">
              <li><Link href="/walkthrough" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Walkthrough</Link></li>
              <li><Link href="/all-endings" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">All Endings</Link></li>
              <li><Link href="/all-endings#best-ending" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Best Ending</Link></li>
              <li><Link href="/choices" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Choices</Link></li>
              <li><Link href="/game-length" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Game Length</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Gameplay</h4>
            <ul className="space-y-2">
              <li><Link href="/save-everyone" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Save Everyone</Link></li>
              <li><Link href="/trophies" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Trophy Guide</Link></li>
              <li><Link href="/multiplayer" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Multiplayer</Link></li>
              <li><Link href="/bug-fixes" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Bug Fixes</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Collectibles</h4>
            <ul className="space-y-2">
              <li><Link href="/characters" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Characters & Cast</Link></li>
              <li><Link href="/collectibles" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Collectibles</Link></li>
              <li><Link href="/trophies" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Trophies & Achievements</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Technical</h4>
            <ul className="space-y-2">
              <li><Link href="/bug-fixes" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Crashing & Fixes</Link></li>
              <li><Link href="/bug-fixes#pc" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">PC Issues</Link></li>
              <li><Link href="/bug-fixes#console" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">Console Issues</Link></li>
            </ul>
          </div>
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
            &copy; {new Date().getFullYear()} directive-8020.com &middot;{' '}
            <Link href="/privacy-policy" className="text-slate-500 hover:text-violet-400 transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
