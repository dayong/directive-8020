// Submit changed URLs to IndexNow (Bing, Yandex, Naver, Seznam, DuckDuckGo).
// Usage: after deploying, edit CHANGED_URLS below and run `npm run indexnow`.
// Note: Google does not participate in IndexNow — use GSC for Google.

const KEY = 'efab80d1175bd4860b091ae60f4517fe';
const HOST = 'directive-8020.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Edit this list to the URLs changed in the latest deploy.
const CHANGED_URLS = [
  '/es',
  '/es/all-endings',
  '/es/bug-fixes',
  '/es/can-carter-survive',
  '/es/characters',
  '/es/characters/carter',
  '/es/characters/cernan',
  '/es/characters/cooper',
  '/es/characters/eisele',
  '/es/characters/mitchell',
  '/es/characters/simms',
  '/es/characters/stafford',
  '/es/characters/williams',
  '/es/characters/young',
  '/es/choices',
  '/es/codes',
  '/es/collectibles',
  '/es/directive-8020-actress',
  '/es/directive-8020-cove',
  '/es/directive-8020-skill-checks',
  '/es/game-length',
  '/es/multiplayer',
  '/es/privacy-policy',
  '/es/save-everyone',
  '/es/shoot-williams-or-stand-down',
  '/es/trophies',
  '/es/walkthrough',
  '/es/walkthrough/episode-1',
  '/es/walkthrough/episode-2',
  '/es/walkthrough/episode-3',
  '/es/walkthrough/episode-4',
  '/es/walkthrough/episode-5',
  '/es/walkthrough/episode-6',
  '/es/walkthrough/episode-7',
  '/es/walkthrough/episode-8',
  '/es/who-is-the-real-eisele-directive-8020',
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
