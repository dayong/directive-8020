// Compile the project's TypeScript in memory; no additional test dependency.
const ts = require('typescript');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function(request, parent, ...rest) {
  return originalResolve.call(this, request.startsWith('@/') ? path.join(process.cwd(), request.slice(2)) : request, parent, ...rest);
};
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true, target: ts.ScriptTarget.ES2020 },
}).outputText, filename);
const { test } = require('node:test');
const assert = require('node:assert/strict');
const config = require('../i18n/config.ts');
const { getPageLocales, getIndexableLocales, getContentReview } = require('../lib/content.ts');
const { buildAlternates, buildPageMetadata } = require('../lib/page-seo.ts');
const { missingMessages } = require('../i18n/validate.ts');
const { formatDate, formatNumber, formatPlural, interpolate } = require('../i18n/format.ts');
const middleware = require('../middleware.ts').default;
const { NextRequest } = require('next/server');

test('nine canonical locale codes and idempotent public URLs', () => {
  assert.equal(config.locales.length, 9);
  for (const locale of config.locales) {
    const url = config.localizeHref('/choices', locale);
    assert.equal(config.localizeHref(url, locale), url);
    assert.equal(config.localeFromPathname(url), locale);
    assert.equal(config.stripLocalePrefix(url), '/choices');
  }
  assert.equal(config.localizeHref('https://example.com', 'es'), 'https://example.com');
  assert.equal(config.localizeHref('/es/choices', 'en'), '/choices');
});
test('legacy/default/case routes permanently canonicalize without losing queries', () => {
  for (const [source, target] of [['/en/choices','/choices'], ['/ES/choices','/es/choices'], ['/zh-hant','/zh-TW'], ['/pt-br/choices','/pt-BR/choices']]) {
    const response = middleware(new NextRequest(`https://directive-8020.com${source}?ref=test`));
    assert.equal(response.status, 308);
    assert.equal(response.headers.get('location'), `https://directive-8020.com${target}?ref=test`);
  }
  const response = middleware(new NextRequest('https://directive-8020.com/choices'));
  assert.equal(new URL(response.headers.get('x-middleware-rewrite')).pathname, '/en/choices');
  assert.equal(middleware(new NextRequest('https://directive-8020.com/es/choices')).headers.get('location'), null);
});
test('metadata is self canonical and reciprocal only for published translations', () => {
  const en = buildAlternates('/choices', 'en', 'choices');
  const es = buildAlternates('/choices', 'es', 'choices');
  assert.equal(en.canonical, '/choices');
  assert.equal(es.canonical, '/es/choices');
  assert.deepEqual(en.languages, es.languages);
  assert.deepEqual(Object.keys(es.languages).sort(), [...config.locales, 'x-default'].sort());
  const metadata = buildPageMetadata('choices', { title: 'Decisiones', description: 'Guía de decisiones' }, 'es');
  assert.equal(metadata.openGraph.url, '/es/choices');
  assert.equal(metadata.twitter.description, 'Guía de decisiones');
});
test('dynamic translations require article content, not only a translated view template', () => {
  assert.deepEqual(getPageLocales('walkthrough-episode', '/walkthrough/episode-1'), ['en','es']);
  assert.deepEqual(getPageLocales('walkthrough-episode', '/walkthrough/not-translated'), ['en']);
  assert.deepEqual(getPageLocales('home', '/'), [...config.locales]);
  assert.ok(getPageLocales('character-detail', '/characters/young').includes('ja'));
  assert.ok(!getPageLocales('character-detail', '/characters/not-published').includes('ja'));
  assert.deepEqual(getIndexableLocales('who-is-the-real-eisele-directive-8020', '/who-is-the-real-eisele-directive-8020'), []);
});
test('UI key and interpolation validation', () => {
  for (const locale of config.locales) assert.deepEqual(missingMessages(require('../i18n/messages/en.json'), require(`../i18n/messages/${locale}.json`)), [], locale);
  assert.deepEqual(missingMessages({ a: { b: 'Hello {name}' } }, { a: { b: 'Hola' } }), ['a.b']);
});
test('Intl formatting, plurals and interpolation', () => {
  assert.equal(formatNumber('de', 1234.5), '1.234,5');
  assert.equal(formatPlural('en', 1, { one: '{count} choice', other: '{count} choices' }), '1 choice');
  assert.equal(formatPlural('en', 2, { one: '{count} choice', other: '{count} choices' }), '2 choices');
  assert.equal(interpolate('Episode {number}', { number: 3 }), 'Episode 3');
  assert.equal(formatDate('en', new Date('2026-01-01T23:00:00Z'), {year: 'numeric'}), '2026');
});

test('official character identities, roles and explicit playable membership', () => {
  const { characters, playableCharacters } = require('../data/characters.ts');
  assert.equal(characters.length, 10);
  assert.equal(new Set(characters.map((character) => character.id)).size, 10);
  assert.equal(characters.find((character) => character.id === 'young').fullName, 'Brianna Young');
  assert.equal(characters.find((character) => character.id === 'eisele').fullName, 'Laura Eisele');
  assert.equal(characters.find((character) => character.id === 'eisele').role, 'Senior Mission Officer');
  assert.equal(characters.find((character) => character.id === 'anders').role, 'Science Officer');
  assert.equal(playableCharacters.length, 5);
  for (const locale of config.locales.filter((locale) => locale !== 'en')) {
    const overlays = require(`../content/data/${locale}/characters.json`);
    for (const character of characters) assert.ok(overlays[character.id]?.role && overlays[character.id]?.description, `${locale}/${character.id}`);
  }
});
test('corrected pending routes have self canonicals and no indexable alternates', () => {
  const slug = 'who-is-the-real-eisele-directive-8020';
  const metadata = buildPageMetadata(slug, { title: 'Verification', description: 'Under review' }, 'en');
  assert.equal(metadata.robots.index, false);
  assert.equal(metadata.alternates.canonical, `/${slug}`);
  assert.equal(metadata.alternates.languages, undefined);
});
test('root links retain query/fragment without a duplicate locale or trailing slash', () => {
  assert.equal(config.localizeHref('/?ref=test#top', 'zh-TW'), '/zh-TW?ref=test#top');
  assert.equal(config.localizeHref('/es?ref=test#top', 'en'), '/?ref=test#top');
});
test('corrected PC specifications and current multiplayer metadata', () => {
  for (const locale of ['en', 'es']) {
    const specs = require(`../content/pages/${locale}/bug-fixes.json`).article.sections[0].blocks.find((block) => block.type === 'table').rows;
    assert.ok(specs[0][1].includes('i5-8500'));
    assert.ok(specs[1][1].includes('RTX 2060'));
    assert.ok(specs[1][2].includes('RTX 3070 Ti'));
    assert.ok(specs[3][1].includes('40 GB'));
    const multiplayer = require(`../content/pages/${locale}/multiplayer.json`);
    assert.equal(multiplayer.review.status, 'verified');
    assert.ok(!JSON.stringify(multiplayer.meta).includes('no online mode'));
  }
});

test('published editorial guides are fully authored in all nine languages', () => {
  for (const locale of config.locales) {
    for (const slug of ['trophies', 'directive-8020-skill-checks', 'walkthrough', 'choices']) {
      const content = require(`../content/pages/${locale}/${slug}.json`);
      assert.equal(content.review.status, 'verified', `${locale}/${slug}`);
      assert.ok(content.article.sections.length >= 4);
      assert.ok(content.meta.title && content.meta.description && content.hero.intro);
      assert.ok(content.review.sources.every((source) => source.url.startsWith('https://')));
      const alternates = buildAlternates(`/${slug}`, locale, slug);
      assert.equal(Object.keys(alternates.languages).length, 10);
    }
  }
});
test('settings guides preserve Solo Story restriction and correct-input requirement', () => {
  const content = require('../content/pages/en/directive-8020-skill-checks.json');
  const table = content.article.sections.flatMap((section) => section.blocks).find((block) => block.type === 'table');
  assert.ok(table.rows[2][2].includes('Solo Story'));
  assert.ok(table.rows[2][2].includes('wrong input still fails'));
  assert.ok(!JSON.stringify(content).includes('guaranteed survival'));
});
test('old trophy and outcome predictions are archived rather than published as verified records', () => {
  assert.ok(require('../content/archive/en/trophies.json').roadmap);
  assert.ok(require('../content/archive/en/choices.json').tree);
  for (const locale of config.locales) {
    const trophy = require(`../content/pages/${locale}/trophies.json`);
    assert.ok(trophy.article);
    assert.equal(trophy.roadmap, undefined);
    assert.ok(!JSON.stringify(trophy).includes('Directive Complete'));
  }
});

test('browser recommendations respect language priority and explicit choices', () => {
  const { recommendedLocale } = require('../i18n/recommendation.ts');
  const options = { current: 'en', saved: null, available: [...config.locales] };
  assert.equal(recommendedLocale({ ...options, languages: ['en-US','es'] }), null);
  assert.equal(recommendedLocale({ ...options, languages: ['ja-JP','en-US'] }), 'ja');
  assert.equal(recommendedLocale({ ...options, languages: ['zh-Hant-HK'] }), 'zh-TW');
  assert.equal(recommendedLocale({ ...options, languages: ['ja','en'], available: ['en','es'] }), null);
  assert.equal(recommendedLocale({ ...options, languages: ['es'], saved: 'en' }), null);
  assert.equal(recommendedLocale({ ...options, languages: ['ja'], saved: 'zh-TW' }), 'zh-TW');
  assert.equal(recommendedLocale({ ...options, current: 'fr', languages: ['ja'] }), null);
});

test('unverified ending, survival and password guarantees are withdrawn from indexing', () => {
  for (const locale of ['en', 'es']) for (const slug of ['all-endings', 'save-everyone', 'codes']) {
    const { getPageContent } = require('../lib/content.ts');
    const content = getPageContent(slug, locale);
    assert.equal(content.review.status, 'pending');
    assert.ok(content.review.replacement.sections.length >= 2);
    assert.deepEqual(getIndexableLocales(slug, `/${slug}`), []);
    assert.equal(buildPageMetadata(slug, content.meta, locale).robots.index, false);
  }
});

test('Open Graph locales use territory codes, while hreflang stays BCP 47', () => {
  for (const locale of config.locales) {
    const metadata = buildPageMetadata('trophies', { title: 'Guide', description: 'Guide' }, locale);
    assert.match(metadata.openGraph.locale, /^[a-z]{2}_[A-Z]{2}$/);
    assert.equal(metadata.openGraph.alternateLocale.length, 8);
    assert.ok(metadata.alternates.languages[locale]);
  }
});

test('multiplayer, purchase and collection guides are published in every locale', () => {
  for (const locale of config.locales) for (const slug of ['multiplayer','directive-8020-buy','collectibles']) {
    const content = require(`../content/pages/${locale}/${slug}.json`);
    assert.equal(content.review.status, 'verified');
    assert.ok(content.article.sections.length >= 5);
    assert.equal(Object.keys(buildAlternates(`/${slug}`,locale,slug).languages).length, 10);
  }
});
test('buying guide separates the upgrade and retains disclosed affiliate and preview features', () => {
  for (const locale of config.locales) {
    const content = require(`../content/pages/${locale}/directive-8020-buy.json`);
    assert.ok(JSON.stringify(content.article).includes('igr=gamer-8917036'));
    assert.equal(content.article.media.src, '/videos/directive-8020-preview.webm');
    assert.ok(content.article.media.posterAlt && content.article.media.caption);
    assert.ok(content.review.sources.some((source) => source.url.includes('/3883930/')));
    assert.equal(content.featured, undefined);
  }
  const content = require('../content/pages/en/directive-8020-buy.json');
  const rows = content.article.sections[0].blocks[0].rows;
  assert.equal(rows.length, 3);
  assert.ok(rows[2][2].includes('Required separately'));
});
test('collection and multiplayer articles avoid the previous unsupported claims', () => {
  const collection = require('../content/pages/en/collectibles.json');
  assert.equal(collection.episodes, undefined);
  assert.ok(!collection.meta.description.includes('65'));
  const multiplayer = require('../content/pages/en/multiplayer.json');
  const rows = multiplayer.article.sections[0].blocks[0].rows;
  assert.ok(rows[1][2].includes('PlayStation Plus'));
  assert.ok(rows[2][1].includes('Local co-op'));
  assert.ok(!multiplayer.meta.description.includes('no online mode'));
});


test('length, cast and PC guides have real articles in every published language', () => {
  for (const locale of config.locales) {
    for (const slug of ['game-length', 'directive-8020-actress', 'bug-fixes']) {
      const content = require(`../content/pages/${locale}/${slug}.json`);
      assert.equal(content.review.status, 'verified');
      assert.ok(content.article.sections.length >= 6);
      assert.ok(content.meta.description && content.hero.intro);
      assert.equal(Object.keys(buildAlternates(`/${slug}`, locale, slug).languages).length, 10);
    }
    const specs = require(`../content/pages/${locale}/bug-fixes.json`).article.sections[0].blocks.find((block) => block.type === 'table').rows;
    assert.ok(specs[0][1].includes('Ryzen 5 3500'));
    assert.ok(specs[1][2].includes('RTX 3070 Ti'));
    assert.equal(specs[3][1], '40 GB');
  }
});
test('old fixed hours, chapter timings and patch recovery promises are archived', () => {
  for (const locale of ['en', 'es']) {
    for (const slug of ['game-length', 'directive-8020-actress', 'bug-fixes']) {
      assert.ok(fs.existsSync(path.join(process.cwd(), 'content/archive', locale, `${slug}.json`)));
    }
    const length = require(`../content/pages/${locale}/game-length.json`);
    assert.equal(length.episodeTable, undefined);
    assert.equal(length.summaryCards, undefined);
    const bugs = require(`../content/pages/${locale}/bug-fixes.json`);
    assert.ok(!JSON.stringify(bugs).includes('-dx11'));
    assert.ok(!JSON.stringify(bugs).includes('673997481174894605'));
    assert.ok(!JSON.stringify(bugs).includes('Game Pass install issues'));
  }
});
test('cast records keep the confirmed lead and do not guess a full localized cast', () => {
  for (const locale of config.locales) {
    const cast = require(`../content/pages/${locale}/directive-8020-actress.json`);
    const body = JSON.stringify(cast.article);
    assert.ok(body.includes('Lashana Lynch') && body.includes('Brianna Young'));
    assert.ok(cast.review.sources.some((source) => source.url === 'https://www.thedarkpictures.com/games/directive-8020'));
    assert.equal(cast.castFaq, undefined);
  }
});


test('privacy pages cover the actual language storage and analytics in every locale', () => {
  for (const locale of config.locales) {
    const page = require(`../content/pages/${locale}/privacy-policy.json`);
    const body = JSON.stringify(page.sections);
    assert.ok(page.sections.length >= 7);
    assert.ok(body.includes('directive-locale') && body.includes('localStorage'));
    assert.ok(body.includes('Google Analytics 4') && body.includes('Umami'));
    assert.ok(body.includes('mailto:contact@directive-8020.com'));
    assert.ok(body.includes('https://tools.google.com/dlpage/gaoptout'));
    assert.ok(body.includes('https://support.google.com/analytics/answer/7667196'));
    assert.ok(!body.includes('14 months by default'));
    assert.equal(Object.keys(buildAlternates('/privacy-policy', locale, 'privacy-policy').languages).length, 10);
  }
  for (const locale of ['en', 'es']) assert.ok(fs.existsSync(`content/archive/${locale}/privacy-policy.json`));
});
test('individual chapter review overrides the shared template and controls indexing', () => {
  for (const locale of ['en', 'es']) {
    assert.equal(getContentReview('walkthrough-episode', locale).status, 'needs-review');
    for (let n = 1; n <= 8; n++) {
      const route = `/walkthrough/episode-${n}`;
      const review = getContentReview('walkthrough-episode', locale, route);
      assert.equal(review.status, 'pending');
      assert.ok(review.replacement.heading.includes(String(n)));
      assert.equal(getIndexableLocales('walkthrough-episode', route).length, 0);
      const metadata = buildPageMetadata(route.slice(1), { title: review.replacement.heading, description: review.replacement.intro }, locale, 'walkthrough-episode');
      assert.equal(metadata.robots.index, false);
      assert.equal(metadata.alternates.canonical, config.localizeHref(route, locale));
      assert.equal(metadata.alternates.languages, undefined);
      assert.ok(fs.existsSync(locale === 'en' ? `content/episodes/episode-${n}.mdx` : `content/episodes/es/episode-${n}.mdx`));
    }
  }
  assert.equal(getContentReview('walkthrough-episode', 'en', '/walkthrough/not-published').status, 'needs-review');
  assert.ok(getIndexableLocales('characters', '/characters').includes('ja'));
});


test('all ten character articles have independent bodies, metadata and review in nine locales', () => {
  const { getCharacterArticle, hasCharacterArticle } = require('../lib/character-content.ts');
  for (const locale of config.locales) {
    for (const id of ['young', 'stafford', 'eisele', 'cernan', 'cooper', 'carter', 'simms', 'williams', 'mitchell', 'anders']) {
      const article = getCharacterArticle(id, locale);
      assert.ok(hasCharacterArticle(id, locale));
      assert.equal(article.review.status, 'verified');
      assert.ok(article.sections.length >= 2);
      assert.ok(article.sections.every((section) => section.blocks.some((block) => block.type === 'paragraph' && block.text.length > 40)));
      assert.equal(Object.keys(buildAlternates(`/characters/${id}`, locale, 'character-detail').languages).length, 10);
      assert.equal(getContentReview('character-detail', locale, `/characters/${id}`).checkedAt, article.review.checkedAt);
    }
  }
  assert.equal(getCharacterArticle('../en/young', 'ja'), null);
});
test('a shared character template and directory summaries cannot publish a missing article', () => {
  const { getCharacterArticle, hasCharacterArticle } = require('../lib/character-content.ts');
  assert.deepEqual(getPageLocales('character-detail', '/characters/not-published'), []);
  for (const locale of config.locales) {
    assert.equal(getCharacterArticle('not-published', locale), null);
    assert.equal(hasCharacterArticle('not-published', locale), false);
    assert.equal(require(`../content/pages/${locale}/character-detail.json`).showChoices, false);
  }
  const fixture = 'content/characters/ja/i18n-incomplete-fixture.json';
  try {
    fs.writeFileSync(fixture, JSON.stringify({ meta: { title: 'Incomplete', description: 'No body' }, sections: [], review: { status: 'verified' } }));
    assert.equal(hasCharacterArticle('i18n-incomplete-fixture', 'ja'), false);
  } finally { fs.rmSync(fixture, { force: true }); }
});


test('Edge route manifest matches the actual published paths in every language', () => {
  const { getTranslatedPaths } = require('../lib/routes.ts');
  const manifest = require('../i18n/generated/route-manifest.json');
  for (const locale of config.locales) {
    assert.deepEqual(manifest.paths[locale], getTranslatedPaths(locale).sort());
    assert.equal(manifest.errors[locale].title, require(`../i18n/messages/${locale}.json`).errors.notFoundTitle);
  }
});
test('unknown content URLs return real localized 404 HTML without JavaScript or locale cookies', async () => {
  for (const locale of config.locales) {
    const prefix = locale === 'en' ? '' : `/${locale}`;
    for (const path of ['/missing-page', '/characters/unknown', '/walkthrough/not-published']) {
      const response = middleware(new NextRequest(`https://directive-8020.com${prefix}${path}`, { headers: { 'accept-language': 'es', cookie: 'directive-locale=es' } }));
      assert.equal(response.status, 404);
      assert.equal(response.headers.get('content-language'), locale);
      assert.equal(response.headers.get('x-robots-tag'), 'noindex, follow');
      const html = await response.text();
      assert.ok(html.includes(`<html lang="${locale}">`));
      assert.ok(html.includes(`href="${config.localizeHref('/', locale)}"`));
      assert.ok(!html.includes('<script'));
      assert.ok(!html.includes('rel="canonical"'));
    }
  }
});
