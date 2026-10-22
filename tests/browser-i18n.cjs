// Requires Playwright as a development-only test runner; no runtime dependency.
// NODE_PATH=/path/to/playwright/node_modules BASE_URL=http://localhost:3001 node tests/browser-i18n.cjs
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const base = process.env.BASE_URL || 'http://localhost:3000';
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const context = await browser.newContext({ locale: 'ja-JP' });
    // Keep analytics requests out of deterministic local checks.
    await context.route('https://**/*', (route) => route.abort());
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error' && /hydration|did not match|Minified React error/i.test(message.text())) errors.push(message.text());
    });
    await page.goto(`${base}/?ref=i18n#top`);
    await page.getByRole('button', { name: '日本語 →' }).waitFor();
    assert.equal(new URL(page.url()).pathname, '/'); // recommendation does not force navigation
    await page.selectOption('#site-language', 'ja');
    await page.waitForURL('**/ja?ref=i18n#top');
    assert.equal(await page.locator('html').getAttribute('lang'), 'ja');
    assert.equal(await page.evaluate(() => localStorage.getItem('directive-locale')), 'ja');
    await page.reload();
    assert.equal(await page.locator('#site-language').inputValue(), 'ja');
    await page.selectOption('#site-language', 'zh-TW');
    await page.waitForURL('**/zh-TW?ref=i18n#top');
    await page.goto(base);
    await page.getByRole('button', { name: '繁體中文 →' }).waitFor();
    await page.getByRole('button', { name: 'Dismiss language suggestion' }).click();
    assert.equal(await page.evaluate(() => localStorage.getItem('directive-locale')), 'en');
    await page.goto(`${base}/es/walkthrough/episode-1?ref=i18n#top`);
    assert.equal(await page.locator('#site-language option[value="ja"]').isDisabled(), true);
    await page.selectOption('#site-language', 'en');
    await page.waitForURL('**/walkthrough/episode-1?ref=i18n#top');
    await page.goto(`${base}/characters/young?ref=profile#bio`);
    await page.selectOption('#site-language', 'ja');
    await page.waitForURL('**/ja/characters/young?ref=profile#bio');
    assert.equal(await page.locator('h1').textContent(), 'Brianna Young');
    assert.equal(await page.locator('html').getAttribute('lang'), 'ja');
    for (const locale of ['en','zh-CN','zh-TW','ja','ko','es','fr','de','pt-BR']) {
      const prefix = locale === 'en' ? '' : `/${locale}`;
      for (const width of [320, 768, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(`${base}${prefix}/characters`);
        await page.locator('#site-language').waitFor();
        assert.equal(await page.locator('html').getAttribute('lang'), locale);
        assert.equal(await page.locator('#site-language').inputValue(), locale);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${locale} horizontal overflow at ${width}`);
      }
    }
    // Preference storage may be unavailable; route-based SSR and switching still work.
    const restricted = await browser.newContext();
    await restricted.addInitScript(() => {
      Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Disabled', 'SecurityError'); } });
    });
    const restrictedPage = await restricted.newPage();
    await restrictedPage.goto(`${base}/ja`);
    await restrictedPage.selectOption('#site-language', 'ko');
    await restrictedPage.waitForURL('**/ko');
    assert.equal(await restrictedPage.locator('html').getAttribute('lang'), 'ko');
    assert.deepEqual(errors, []);
    console.log('Browser checks passed: recommendations, persistence, refresh, same-route/query/hash switching, disabled translations, 27 locale/viewport combinations, storage denial and hydration.');
    await context.close();
    await restricted.close();
  } finally { await browser.close(); }
})().catch((error) => { console.error(error); process.exitCode = 1; });
