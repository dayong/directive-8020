import type { Metadata } from 'next';
import type { ComponentType } from 'react';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getAvailableLocales, getPageContent } from '@/lib/content';
import { buildPageMetadata } from '@/lib/page-seo';
import { getAllEpisodeSlugs } from '@/lib/mdx';
import { getChoices, getEpisodes } from '@/lib/localized-data';
import { characters } from '@/data/characters';
import type { ContentMeta } from '@/types/content-pages';
import AllEndingsView from '@/components/views/AllEndingsView';
import BugFixesView from '@/components/views/BugFixesView';
import BuyView from '@/components/views/BuyView';
import CanCarterSurviveView from '@/components/views/CanCarterSurviveView';
import CharactersView from '@/components/views/CharactersView';
import CharacterDetailView, {
  generateMetadata as characterDetailMetadata,
} from '@/components/views/CharacterDetailView';
import ChoicesView from '@/components/views/ChoicesView';
import CodesView from '@/components/views/CodesView';
import CollectiblesView from '@/components/views/CollectiblesView';
import ActressView from '@/components/views/ActressView';
import CoveView from '@/components/views/CoveView';
import EiseleView from '@/components/views/EiseleView';
import SkillChecksView from '@/components/views/SkillChecksView';
import GameLengthView from '@/components/views/GameLengthView';
import MultiplayerView from '@/components/views/MultiplayerView';
import PrivacyPolicyView from '@/components/views/PrivacyPolicyView';
import SaveEveryoneView from '@/components/views/SaveEveryoneView';
import ShootWilliamsView from '@/components/views/ShootWilliamsView';
import TrophiesView from '@/components/views/TrophiesView';
import WalkthroughView from '@/components/views/WalkthroughView';
import EpisodeDetailView, {
  generateMetadata as episodeDetailMetadata,
} from '@/components/views/EpisodeDetailView';

interface Props {
  params: { locale: string; slug: string[] };
}

interface PageContent {
  meta: ContentMeta;
}

interface RouteEntry {
  contentSlug: string;
  View: ComponentType<any>;
  generateMetadata?: (args: { content: any; params: any; locale: Locale }) => Metadata | Promise<Metadata>;
  loadData?: (locale: Locale) => Record<string, unknown>;
}

const staticRoutes: Record<string, RouteEntry> = {
  'all-endings': { contentSlug: 'all-endings', View: AllEndingsView },
  'bug-fixes': { contentSlug: 'bug-fixes', View: BugFixesView },
  'can-carter-survive': { contentSlug: 'can-carter-survive', View: CanCarterSurviveView },
  'directive-8020-buy': { contentSlug: 'directive-8020-buy', View: BuyView },
  characters: { contentSlug: 'characters', View: CharactersView },
  choices: {
    contentSlug: 'choices',
    View: ChoicesView,
    loadData: (locale) => ({
      choices: getChoices(locale),
      episodes: getEpisodes(locale),
    }),
  },
  codes: { contentSlug: 'codes', View: CodesView },
  collectibles: { contentSlug: 'collectibles', View: CollectiblesView },
  'directive-8020-actress': { contentSlug: 'directive-8020-actress', View: ActressView },
  'directive-8020-cove': { contentSlug: 'directive-8020-cove', View: CoveView },
  'directive-8020-skill-checks': {
    contentSlug: 'directive-8020-skill-checks',
    View: SkillChecksView,
  },
  'game-length': { contentSlug: 'game-length', View: GameLengthView },
  multiplayer: { contentSlug: 'multiplayer', View: MultiplayerView },
  'privacy-policy': { contentSlug: 'privacy-policy', View: PrivacyPolicyView },
  'save-everyone': { contentSlug: 'save-everyone', View: SaveEveryoneView },
  'shoot-williams-or-stand-down': {
    contentSlug: 'shoot-williams-or-stand-down',
    View: ShootWilliamsView,
  },
  trophies: { contentSlug: 'trophies', View: TrophiesView },
  walkthrough: { contentSlug: 'walkthrough', View: WalkthroughView },
  'who-is-the-real-eisele-directive-8020': {
    contentSlug: 'who-is-the-real-eisele-directive-8020',
    View: EiseleView,
  },
};

interface DynamicRoute extends RouteEntry {
  param: string;
  ids: string[];
}

const dynamicRoutes: Record<string, DynamicRoute> = {
  characters: {
    contentSlug: 'character-detail',
    View: CharacterDetailView,
    generateMetadata: characterDetailMetadata,
    param: 'character',
    ids: characters.map((character) => character.id),
  },
  walkthrough: {
    contentSlug: 'walkthrough-episode',
    View: EpisodeDetailView,
    generateMetadata: episodeDetailMetadata,
    param: 'episode',
    ids: getAllEpisodeSlugs(),
  },
};

function resolveRoute(slug: string[]): { entry: RouteEntry; path: string; viewParams: object } | null {
  if (slug.length === 1) {
    const entry = staticRoutes[slug[0]];
    return entry ? { entry, path: slug[0], viewParams: {} } : null;
  }
  if (slug.length === 2) {
    const entry = dynamicRoutes[slug[0]];
    if (entry && entry.ids.includes(slug[1])) {
      return {
        entry,
        path: `${slug[0]}/${slug[1]}`,
        viewParams: { [entry.param]: slug[1] },
      };
    }
  }
  return null;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: string; slug: string[] }[] = [];
  for (const [path, entry] of Object.entries(staticRoutes)) {
    for (const locale of getAvailableLocales(entry.contentSlug)) {
      params.push({ locale, slug: [path] });
    }
  }
  for (const [prefix, entry] of Object.entries(dynamicRoutes)) {
    for (const locale of getAvailableLocales(entry.contentSlug)) {
      for (const id of entry.ids) {
        params.push({ locale, slug: [prefix, id] });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const resolved = resolveRoute(params.slug);
  if (!resolved) return {};
  const content = getPageContent<PageContent>(resolved.entry.contentSlug, params.locale);
  if (!content) return {};
  if (resolved.entry.generateMetadata) {
    return resolved.entry.generateMetadata({ content, params: resolved.viewParams, locale: params.locale });
  }
  return buildPageMetadata(resolved.path, content.meta, params.locale);
}

export default function CatchAllPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const resolved = resolveRoute(params.slug);
  if (!resolved) notFound();

  const content = getPageContent<PageContent>(resolved.entry.contentSlug, params.locale);
  if (!content) notFound();

  const { View, loadData } = resolved.entry;
  const extraProps = loadData ? loadData(params.locale) : {};
  return (
    <View
      content={content}
      params={resolved.viewParams}
      locale={params.locale}
      {...extraProps}
    />
  );
}
