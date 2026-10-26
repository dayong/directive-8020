// Run against a production server: BASE_URL=http://localhost:3001 node tests/seo-http.cjs
const assert = require('node:assert/strict');
const base = process.env.BASE_URL || 'http://localhost:3000';
const locales = ['en', 'zh-CN', 'zh-TW', 'ja', 'ko', 'es', 'fr', 'de', 'pt-BR'];
const ogLocales = { en: 'en_US', 'zh-CN': 'zh_CN', 'zh-TW': 'zh_TW', ja: 'ja_JP', ko: 'ko_KR', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', 'pt-BR': 'pt_BR' };
const pending = ['who-is-the-real-eisele-directive-8020','shoot-williams-or-stand-down','can-carter-survive','directive-8020-cove','save-everyone','codes'];
(async () => {
  const sitemap = await fetch(`${base}/sitemap.xml`).then((response) => response.text());
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.ok(urls.length > 0);
  assert.equal(new Set(urls).size, urls.length);
  const graphs = new Map();
  for (const url of urls) {
    const path = new URL(url).pathname;
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const first = path.split('/')[1];
    const locale = locales.includes(first) ? first : 'en';
    assert.ok(html.includes(`<html lang="${locale}"`), `lang ${path}`);
    assert.ok(html.includes(`rel="canonical" href="${url}"`), `canonical ${path}`);
    assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), `indexable ${path}`);
    assert.ok(html.includes(`property="og:locale" content="${ogLocales[locale]}"`), `OG locale ${path}`);
    if (['/trophies', '/choices', '/walkthrough', '/directive-8020-skill-checks'].some((suffix) => path.endsWith(suffix))) {
      assert.ok(!html.includes('Directive Complete'), `withdrawn trophy data ${path}`);
      assert.ok(!html.includes('Written from three playthroughs'), `withdrawn first-person claim ${path}`);
      assert.ok(!html.includes('IRREVERSIBLE — True ending permanently locked'), `withdrawn outcome prediction ${path}`);
    }
    if (path.endsWith('/all-endings')) {
      assert.ok(!response.headers.get('x-robots-tag')?.includes('noindex'), `no header exclusion ${path}`);
      assert.ok(html.includes('Home Free') && html.includes('Message in a Bottle'), `reviewed outcomes rendered ${path}`);
      assert.ok(!html.includes('10 possible endings') && !html.includes('10 finales posibles'), `old count withdrawn ${path}`);
      assert.equal([...html.matchAll(/<link rel="alternate" hrefLang=/g)].length, 3, `only real ending translations ${path}`);
    }
    if (path.endsWith('/game-length')) {
      assert.ok(!html.includes('Main story ~8 hours'), `withdrawn hour guarantees ${path}`);
      assert.ok(!html.includes('Episode Length Breakdown'), `withdrawn chapter timetable ${path}`);
    }
    if (path.endsWith('/bug-fixes')) {
      assert.ok(html.includes('RTX 3070 Ti') && html.includes('40 GB'), `official specs rendered ${path}`);
      assert.ok(html.includes('id="pc"') && html.includes('id="console"'), `existing section anchors retained ${path}`);
      assert.ok(!html.includes('-dx11'), `unverified launch argument withdrawn ${path}`);
      assert.ok(!html.includes('673997481174894605'), `unverified patch summary withdrawn ${path}`);
    }
    if (path.endsWith('/privacy-policy')) {
      assert.ok(html.includes('directive-locale') && html.includes('localStorage'), `preference disclosure ${path}`);
      assert.ok(html.includes('Google Analytics 4') && html.includes('Umami'), `analytics disclosure ${path}`);
    }
    if (/\/characters\/(young|stafford|eisele|cernan|cooper|carter|simms|williams|mitchell|anders)$/.test(path)) {
      const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
      const page = schemas.find((schema) => schema['@type'] === 'WebPage');
      assert.ok(page, `profile schema ${path}`);
      assert.equal(page.inLanguage, locale);
      assert.equal(page.url, url);
      const profile = require(`../content/characters/${locale}/${path.split('/').pop()}.json`);
      for (const section of profile.sections) assert.ok(html.includes(section.heading), `authored profile section ${path}`);
      assert.ok(!html.includes('IRREVERSIBLE'), `unverified choice cards absent ${path}`);
    }
    const graph = Object.fromEntries([...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)].map((match) => [match[1], match[2]]));
    const switcher = html.match(/<details[^>]+id="site-language"[^>]*>([\s\S]*?)<\/details>/)?.[1];
    assert.ok(switcher, `SSR language disclosure ${path}`);
    const languageLinks = [...switcher.matchAll(/<a[^>]+href="([^"]+)"[^>]+hrefLang="([^"]+)"/g)];
    assert.equal(languageLinks.length, Object.keys(graph).filter((key) => key !== 'x-default').length, `crawlable language links ${path}`);
    for (const [, href, target] of languageLinks) {
      assert.ok(urls.some((url) => new URL(url).href === new URL(href, 'https://directive-8020.com').href), `real language counterpart ${path} ${target}`);
      const unprefixed = locale === 'en' ? path : path.slice(locale.length + 1) || '/';
      const expected = target === 'en' ? unprefixed : `/${target}${unprefixed === '/' ? '' : unprefixed}`;
      assert.equal(href, expected, `same-page language link ${path} ${target}`);
    }
    assert.ok(switcher.includes('aria-current="page"'), `current language indicated ${path}`);
    assert.ok(graph.en && graph['x-default'], `English/default alternate ${path}`);
    for (const alternate of Object.values(graph)) assert.ok(urls.includes(alternate), `alternate in sitemap ${alternate}`);
    graphs.set(url, graph);
  }
  for (const graph of graphs.values()) {
    for (const alternate of Object.values(graph)) assert.deepEqual(graphs.get(alternate), graph, `reciprocity ${alternate}`);
  }
  for (const locale of locales) {
    const root = locale === 'en' ? '' : `/${locale}`;
    for (const suffix of ['', '/characters', '/trophies', '/directive-8020-skill-checks', '/walkthrough', '/choices', '/multiplayer', '/directive-8020-buy', '/collectibles', '/game-length', '/directive-8020-actress', '/bug-fixes', '/privacy-policy']) {
      const url = `https://directive-8020.com${root}${suffix}`;
      assert.ok(urls.includes(url), `published ${url}`);
      assert.equal(Object.keys(graphs.get(url)).length, 10, `all nine locales + default ${url}`);
    }
    for (const id of ['young', 'stafford', 'eisele', 'cernan', 'cooper', 'carter', 'simms', 'williams', 'mitchell', 'anders']) {
      const url = `https://directive-8020.com${root}/characters/${id}`;
      assert.ok(urls.includes(url), `authored profile ${url}`);
      assert.equal(Object.keys(graphs.get(url)).length, 10, `profile alternates ${url}`);
    }
    for (const suffix of ['/missing-page', '/characters/unknown', '/walkthrough/not-published']) {
      const response = await fetch(`${base}${root}${suffix}`, { headers: { 'accept-language': 'es', cookie: 'directive-locale=es' } });
      assert.equal(response.status, 404, `real error status ${locale}${suffix}`);
      assert.equal(response.headers.get('content-language'), locale);
      const html = await response.text();
      assert.ok(html.includes(`<html lang="${locale}"`), `localized error lang ${locale}${suffix}`);
      assert.ok(html.includes('noindex'), `error not indexable ${locale}${suffix}`);
      assert.ok(html.includes(`href="${root || '/'}"`), `localized recovery ${locale}${suffix}`);
    }
    if (locale === 'en' || locale === 'es') continue;
    for (const path of ['/walkthrough/episode-1','/characters/not-published']) {
      assert.equal((await fetch(`${base}${root}${path}`)).status, 404, `untranslated ${locale}${path}`);
    }
  }
  for (const locale of ['en', 'es']) assert.ok(urls.includes(`https://directive-8020.com${locale === 'en' ? '' : '/es'}/all-endings`), 'ending guide restored to sitemap');
  for (const locale of ['en','es']) {
    for (const slug of [...pending, ...Array.from({ length: 8 }, (_, index) => `walkthrough/episode-${index + 1}`)]) {
      const path = `${locale === 'en' ? '' : '/es'}/${slug}`;
      assert.ok(!urls.some((url) => new URL(url).pathname === path), `pending excluded ${path}`);
      const response = await fetch(base + path);
      assert.equal(response.status, 200, `legacy URL retained ${path}`);
      const html = await response.text();
      assert.ok(/<meta name="robots" content="[^"]*noindex/.test(html), `pending noindex ${path}`);
      assert.ok(!html.slice(0, html.indexOf('</head>')).includes('hrefLang='), `no pending head hreflang ${path}`);
      const switcher = html.match(/<details[^>]+id="site-language"[^>]*>([\s\S]*?)<\/details>/)?.[1];
      assert.ok(switcher?.includes('data-locale="ja" aria-disabled="true"'), `missing translation not linked ${path}`);
      assert.equal([...switcher.matchAll(/<a[^>]+hrefLang=/g)].length, 2, `only real translations linked ${path}`);
      assert.ok(!html.includes('locked myself out'), `withdrawn first-person account ${path}`);
      assert.ok(html.includes(`rel="canonical" href="https://directive-8020.com${path}"`), `pending self canonical ${path}`);
      if (slug.startsWith('walkthrough/')) {
        assert.ok(!html.includes('Little Star') && !html.includes('Pequeña estrella'), `unverified chapter subtitle withdrawn ${path}`);
        assert.ok(!html.includes('hard-coded into the narrative'), `unverified death claim withdrawn ${path}`);
        assert.ok(!html.includes('I remember finishing Episode'), `unverified playthrough claim withdrawn ${path}`);
        assert.ok(html.includes(locale === 'en' ? 'guide under verification' : 'guía en verificación'), `neutral chapter metadata ${path}`);
      }
    }
  }
  for (const asset of ['/videos/directive-8020-preview.webm', '/images/directive-8020-cover.jpg']) {
    assert.equal((await fetch(base + asset, { method: 'HEAD' })).status, 200, `preserved media ${asset}`);
  }
  for (const locale of locales) {
    const path = `${locale === 'en' ? '' : '/' + locale}/directive-8020-buy`;
    const html = await fetch(base + path).then((response) => response.text());
    assert.ok(html.includes('igr=gamer-8917036'), `affiliate tracking retained ${path}`);
    const affiliateTag = html.match(/<a[^>]+href="https:\/\/www\.instant-gaming\.com[^>]+>/)?.[0];
    assert.ok(affiliateTag?.includes('sponsored nofollow'), `affiliate rel ${path}`);
    assert.ok(html.includes('/images/directive-8020-cover.jpg'), `preview poster ${path}`);
    assert.ok(!html.includes('Prices and store details are re-checked each month'), `unsupported monthly promise withdrawn ${path}`);
  }
  for (const [path, target] of [['/en/characters','/characters'],['/ZH-cn/characters','/zh-CN/characters'],['/zh-hant','/zh-TW']]) {
    const response = await fetch(`${base}${path}?ref=test`, { redirect: 'manual' });
    assert.equal(response.status, 308);
    assert.equal(new URL(response.headers.get('location'), base).pathname, target);
    assert.equal(new URL(response.headers.get('location'), base).search, '?ref=test');
  }
  console.log(`Validated ${urls.length} indexable URLs: HTML lang, canonical, reciprocal hreflang, nine-language guides, draft 404s and pending correction pages.`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
