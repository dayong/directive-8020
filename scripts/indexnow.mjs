// Submit changed URLs to IndexNow (Bing, Yandex, Naver, Seznam, DuckDuckGo).
// Usage: after deploying, edit CHANGED_URLS below and run `npm run indexnow`.
// Note: Google does not participate in IndexNow — use GSC for Google.

const KEY = 'efab80d1175bd4860b091ae60f4517fe';
const HOST = 'directive-8020.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Edit this list to the URLs changed in the latest deploy.
const CHANGED_URLS = [
  '/',
  '/multiplayer',
  '/game-length',
  '/bug-fixes',
  '/codes',
  '/characters',
  '/characters/young',
  '/characters/stafford',
  '/characters/eisele',
  '/characters/cernan',
  '/characters/cooper',
  '/characters/carter',
  '/characters/simms',
  '/characters/williams',
  '/characters/mitchell',
  '/shoot-williams-or-stand-down',
  '/can-carter-survive',
  '/who-is-the-real-eisele-directive-8020',
  '/save-everyone',
  '/all-endings',
  '/choices',
  '/walkthrough',
  '/walkthrough/episode-1',
  '/walkthrough/episode-2',
  '/walkthrough/episode-3',
  '/walkthrough/episode-4',
  '/walkthrough/episode-5',
  '/walkthrough/episode-6',
  '/walkthrough/episode-7',
  '/walkthrough/episode-8',
];

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: CHANGED_URLS.map((u) => `https://${HOST}${u}`),
};

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});

console.log('IndexNow response:', res.status, res.statusText);
if (!res.ok) {
  const text = await res.text();
  console.error(text);
  process.exit(1);
}
console.log(`Submitted ${CHANGED_URLS.length} URLs for ${HOST}`);
