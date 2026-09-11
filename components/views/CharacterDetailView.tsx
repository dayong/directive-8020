import type { Metadata } from 'next';
import Link from '@/components/ui/LocaleLink';
import { notFound } from 'next/navigation';
import CharacterBadge from '@/components/ui/CharacterBadge';
import ChoiceCard from '@/components/ui/ChoiceCard';
import { getCharacters, getChoices } from '@/lib/localized-data';
import { buildAlternates } from '@/lib/page-seo';
import type { Locale } from '@/i18n/config';
import type { CharacterDetailContent } from '@/types/content-pages';

interface Props {
  params: { character: string };
  locale: Locale;
}

type ViewProps = Props & { content: CharacterDetailContent };

export async function generateMetadata({ content, params, locale }: ViewProps): Promise<Metadata> {
  const char = getCharacters(locale).find((c) => c.id === params.character);
  if (!char) return { title: content.notFoundTitle };
  const title = content.metaTitleFormat
    .replace('{name}', char.name)
    .replace('{role}', char.role);
  return {
    title,
    description: content.metaDescriptionFormat
      .replace('{fullName}', char.fullName)
      .replace('{role}', char.role)
      .replace('{description}', char.description),
    alternates: buildAlternates(`/characters/${char.id}`, locale, 'character-detail'),
    openGraph: {
      title,
      description: char.description,
      images: ['/og-image.png'],
      type: 'profile',
    },
  };
}

export default function CharacterDetailView({ content, params, locale }: ViewProps) {
  const char = getCharacters(locale).find((c) => c.id === params.character);
  if (!char) notFound();

  // Find choices affecting this character
  const relevantChoices = getChoices(locale).filter((c) =>
    c.options.some(
      (o) =>
        o.characterEffect &&
        o.characterEffect.toLowerCase().includes(char.name.toLowerCase())
    )
  );

  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="relative max-w-4xl mx-auto px-4 py-12 md:py-16">
          <Link
            href="/characters"
            className="text-sm text-violet-400 hover:text-violet-300 mb-4 inline-block"
          >
            {content.backLink}
          </Link>
          <div className="flex items-center gap-4 mt-2 mb-4">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                char.scriptedDeath
                  ? 'bg-amber-900/50 text-amber-400'
                  : 'bg-violet-900/50 text-violet-400'
              }`}
            >
              {char.scriptedDeath ? '💀' : char.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-100">
                {char.fullName}
              </h1>
              <p className="text-slate-400">{char.role}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Bio */}
        <section>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            {content.profileHeading}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-xs text-slate-500 mb-1">{content.actorLabel}</p>
              <p className="text-slate-200">{char.actor}</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-xs text-slate-500 mb-1">
                {content.survivalStatusLabel}
              </p>
              <CharacterBadge
                character={char}
                alive={!char.scriptedDeath}
                locale={locale}
              />
            </div>
          </div>
          <p className="text-slate-300">{char.description}</p>
          {char.destiny && (
            <div className="mt-4 bg-violet-900/20 border border-violet-700 rounded-lg p-4">
              <p className="text-xs text-violet-400 mb-1">
                {content.destinyLabel}
              </p>
              <p className="text-slate-200 font-medium">{char.destiny}</p>
            </div>
          )}
        </section>

        {/* Key choices affecting this character */}
        {relevantChoices.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">
              {content.keyChoicesFormat.replace('{name}', char.name)}
            </h2>
            <div className="space-y-4">
              {relevantChoices.map((choice) => (
                <div
                  key={choice.id}
                  className="border border-slate-700 rounded-lg p-4 bg-slate-800/30"
                >
                  <p className="text-sm text-slate-400 mb-3">
                    <span className="text-violet-400">{choice.scene}</span>
                    {' — '}
                    {choice.description}
                  </p>
                  {choice.options
                    .filter(
                      (o) =>
                        o.characterEffect &&
                        o.characterEffect
                          .toLowerCase()
                          .includes(char.name.toLowerCase())
                    )
                    .map((opt, i) => (
                      <ChoiceCard
                        key={i}
                        scene={choice.scene}
                        option={opt.text}
                        recommended={opt.recommended}
                        consequence={opt.consequence}
                        characterEffect={opt.characterEffect}
                        locale={locale}
                      />
                    ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Scripted death note */}
        {char.scriptedDeath && (
          <section>
            <div className="bg-amber-900/30 border border-amber-600 rounded-lg p-4">
              <h3 className="text-amber-400 font-bold mb-2">
                {content.cannotBeSavedFormat.replace('{name}', char.name)}
              </h3>
              <p className="text-slate-300 text-sm">
                {content.cannotBeSavedTextFormat.replace('{name}', char.name)}
              </p>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
