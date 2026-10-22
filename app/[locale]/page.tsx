import type { Metadata } from 'next';
import Link from '@/components/ui/LocaleLink';
import EpisodeCard from '@/components/ui/EpisodeCard';
import { FaqSection } from '@/components/content/FaqSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { getEpisodes } from '@/lib/localized-data';
import { notFound } from 'next/navigation';
import { getAvailableLocales, getPageContent } from '@/lib/content';
import { buildFaqSchema, buildPageMetadata } from '@/lib/page-seo';
import { isLocale } from '@/i18n/config';
import { getUiStrings } from '@/i18n/ui';
import type { CtaLink, HomeContent } from '@/types/content-pages';

const SLUG = 'home';

interface Props {
  params: { locale: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAvailableLocales(SLUG).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const content = getPageContent<HomeContent>(SLUG, params.locale);
  if (!content) return {};
  return buildPageMetadata('', content.meta, params.locale, SLUG);
}

const heroButtonClasses: Record<CtaLink['variant'], string> = {
  primary: 'bg-violet-600 hover:bg-violet-500 text-white',
  outline: 'border border-violet-500 text-violet-400 hover:bg-violet-500/10',
  ghost: 'border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-slate-100',
};

const kickerColors = [
  'text-violet-400',
  'text-red-400',
  'text-cyan-400',
  'text-amber-400',
  'text-red-400',
  'text-cyan-400',
];

export default function Home({ params }: Props) {
  const { locale } = params;
  if (!isLocale(locale)) notFound();
  const content = getPageContent<HomeContent>(SLUG, locale);
  if (!content) notFound();
  const faqSchema = buildFaqSchema(content.faqs, locale, true);
  const episodes = getEpisodes(locale);
  const localeMeta = getUiStrings(locale).layoutMeta;
  const gameSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Directive 8020',
    inLanguage: locale,
    description: localeMeta.jsonLdDescription,
    genre: localeMeta.jsonLdGenres,
    gamePlatform: ['PlayStation 5', 'Xbox Series X', 'PC'],
    datePublished: '2026-05-12',
    publisher: {
      '@type': 'Organization',
      name: 'Supermassive Games',
    },
  };

  return (
    <>
      <JsonLd data={gameSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900">
        {/* Purple gradient decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-900 to-slate-900 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-4">
            {content.hero.titleMain}{' '}
            <span className="text-violet-400">{content.hero.titleAccent}</span>
          </h1>
          <p className="text-lg md:text-xl text-violet-400 mb-10">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {content.hero.buttons.map((button, i) => (
              <Link
                key={i}
                href={button.href}
                className={`w-full sm:w-auto px-8 py-3 rounded-lg font-semibold transition-colors text-center ${heroButtonClasses[button.variant]}`}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
        {/* Important Warning */}
        <div className="bg-amber-900/30 border border-amber-600 rounded-lg p-4 mb-8">
          <h3 className="text-amber-400 font-bold mb-2">
            {content.warning.heading}
          </h3>
          <p className="text-slate-300 text-sm">
            {content.warning.text}
          </p>
        </div>

        {/* Quick Access Navigation */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">{content.quickAccess.heading}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {content.quickAccess.tiles.map((tile, i) => (
              <Link key={i} href={tile.href} className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-3 text-center transition-colors group">
                <div className="text-2xl mb-1">{tile.icon}</div>
                <p className="text-xs text-slate-300 group-hover:text-violet-300 font-medium">{tile.label}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Only render chapter cards when this edition has reviewed chapter content. */}
        {content.episodeSection.enabled !== false && <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            {content.episodeSection.heading}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {episodes.filter(e => e.keyChoices > 0).map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} locale={locale} />
            ))}
          </div>
        </section>

        }

        {/* Best Ending Quick Path */}
        <section>
          <div className="bg-gradient-to-r from-violet-900/30 to-amber-900/20 border border-violet-700/50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-slate-100 mb-1">
              {content.truePath.heading}
            </h2>
            <p className="text-sm text-slate-400 mb-4">
              {content.truePath.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.truePath.steps.map((step, i) => (
                <div key={i} className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-violet-400 text-2xl font-bold mb-1">{i + 1}</div>
                  <p className="text-slate-200 font-medium text-sm">{step.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{step.sub}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-4">
              <span className="text-amber-400 font-bold text-sm">{content.truePath.resultLabel}&nbsp;</span>
              <span className="text-violet-400 font-bold text-sm">{content.truePath.result}</span>
            </p>
            <div className="text-center mt-3">
              <Link href={content.truePath.cta.href} className="inline-block px-6 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors">
                {content.truePath.cta.label}
              </Link>
            </div>
          </div>
        </section>

        {/* More Guides */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">{content.moreGuides.heading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {content.moreGuides.cards.map((card, i) => (
              <Link key={i} href={card.href} className="bg-slate-800 border border-slate-700 hover:border-violet-500 rounded-lg p-5 transition-colors group">
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className={`text-xs font-bold ${kickerColors[i % kickerColors.length]} uppercase tracking-wide mb-1`}>{card.kicker}</div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-violet-300">{card.title}</h3>
                <p className="text-slate-400 text-sm">{card.body}</p>
              </Link>
            ))}
          </div>
        </section>

        <FaqSection heading={content.faqHeading} faqs={content.faqs} />

        {/* Friendly Links */}
        <section className="pt-8 border-t border-slate-800 text-center">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            {content.friendlyLinks.heading}
          </p>
          <p className="text-sm text-slate-400">
            {content.friendlyLinks.links.map((link, i) => (
              <span key={i}>
                {i > 0 && ' · '}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-violet-400 transition-colors"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        </section>
      </div>
    </>
  );
}
