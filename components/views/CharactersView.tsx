import Link from '@/components/ui/LocaleLink';
import { HeroSection } from '@/components/content/HeroSection';
import { getCharacters } from '@/lib/localized-data';
import { uiStrings } from '@/i18n/ui';
import type { Locale } from '@/i18n/config';
import type { CharactersContent } from '@/types/content-pages';


export default function CharactersView({
  content,
  locale,
}: {
  content: CharactersContent;
  locale: Locale;
}) {
  const charList = getCharacters(locale);
  const t = uiStrings[locale].charactersView;
  return (
    <>
      <HeroSection hero={content.hero} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {charList.map((char) => (
            <Link
              key={char.id}
              href={`/characters/${char.id}`}
              className={`block p-5 rounded-lg border transition-all hover:border-violet-500 hover:bg-slate-800 ${
                char.scriptedDeath
                  ? 'border-slate-700 bg-slate-800/30'
                  : 'border-slate-700 bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                    char.scriptedDeath
                      ? 'bg-amber-900/50 text-amber-400'
                      : 'bg-violet-900/50 text-violet-400'
                  }`}
                >
                  {char.scriptedDeath ? '💀' : char.name.charAt(0)}
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      char.scriptedDeath
                        ? 'text-slate-400 line-through'
                        : 'text-slate-100'
                    }`}
                  >
                    {char.name}
                  </h3>
                  <p className="text-xs text-slate-500">{char.role}</p>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-3 line-clamp-2">
                {char.description}
              </p>

              <div className="flex items-center gap-3 text-xs">
                <span className="text-slate-500">
                  {t.actor}
                  {char.actor}
                </span>
                {char.scriptedDeath ? (
                  <span className="text-amber-400 font-medium">
                    {t.scriptedDeath}
                  </span>
                ) : char.playable === false ? (
                  <span className="text-cyan-400 font-medium">
                    {t.npcCanSurvive}
                  </span>
                ) : (
                  <span className="text-green-400 font-medium">
                    {t.canSurvive}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
