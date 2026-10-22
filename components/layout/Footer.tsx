import Link from '@/components/ui/LocaleLink';
import { getUiStrings } from '@/i18n/ui';
import type { Locale } from '@/i18n/config';

export default function Footer({ locale }: { locale: Locale }) {
  const t = getUiStrings(locale).footer;
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">{t.story}</h4>
            <ul className="space-y-2">
              <li><Link href="/walkthrough" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.walkthrough}</Link></li>
              <li><Link href="/all-endings" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.allEndings}</Link></li>
              <li><Link href="/choices" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.choices}</Link></li>
              <li><Link href="/game-length" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.gameLength}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">{t.gameplay}</h4>
            <ul className="space-y-2">
              <li><Link href="/save-everyone" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.saveEveryone}</Link></li>
              <li><Link href="/trophies" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.trophyGuide}</Link></li>
              <li><Link href="/multiplayer" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.multiplayer}</Link></li>
              <li><Link href="/bug-fixes" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.bugFixes}</Link></li>
              <li><Link href="/directive-8020-buy" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.whereToBuy}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">{t.collectibles}</h4>
            <ul className="space-y-2">
              <li><Link href="/characters" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.charactersAndCast}</Link></li>
              <li><Link href="/collectibles" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.collectiblesLink}</Link></li>
              <li><Link href="/trophies" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.trophiesAndAchievements}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">{t.technical}</h4>
            <ul className="space-y-2">
              <li><Link href="/bug-fixes" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.crashingAndFixes}</Link></li>
              <li><Link href="/bug-fixes#pc" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.pcIssues}</Link></li>
              <li><Link href="/bug-fixes#console" className="text-slate-400 hover:text-violet-400 text-sm transition-colors">{t.consoleIssues}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 space-y-2">
          <p className="text-xs text-slate-500">
            {t.disclaimer1}
          </p>
          <p className="text-xs text-slate-600">
            {t.disclaimer2}
          </p>
          <p className="text-xs text-slate-600">
            {t.affiliateNote}
          </p>
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} directive-8020.com &middot;{' '}
            <Link href="/privacy-policy" className="text-slate-500 hover:text-violet-400 transition-colors">
              {t.privacyPolicy}
            </Link>
            {' '}&middot;{' '}
            <a href="mailto:contact@directive-8020.com" className="text-slate-500 hover:text-violet-400 transition-colors">
              {t.contact}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
