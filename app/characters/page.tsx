import type { Metadata } from 'next';
import Link from 'next/link';
import { characters } from '@/data/characters';

export const metadata: Metadata = {
  title: 'Directive 8020 Characters | Crew Roster & Survival Guide',
  description:
    'Meet every character in Directive 8020 — Young, Stafford, Eisele, Cernan, Cooper, Carter, and Simms. Learn who can survive and who has a scripted death.',
  openGraph: {
    title: 'Directive 8020 Characters | Full Crew Roster',
    description:
      'Complete character guide for Directive 8020. Crew bios, survival status, and key decisions for each character.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function CharactersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Characters
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The crew of the Cassiopeia. 7 characters, 5 playable, 2 with
            scripted deaths — know who to save and who cannot be saved.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {characters.map((char) => (
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
                  Actor: {char.actor}
                </span>
                {char.scriptedDeath ? (
                  <span className="text-amber-400 font-medium">
                    Scripted Death
                  </span>
                ) : (
                  <span className="text-green-400 font-medium">
                    Can Survive
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
