// Submit changed URLs to IndexNow (Bing, Yandex, Naver, Seznam, DuckDuckGo).
// Usage: after deploying, edit CHANGED_URLS below and run `npm run indexnow`.
// Note: Google does not participate in IndexNow — use GSC for Google.

const KEY = 'efab80d1175bd4860b091ae60f4517fe';
const HOST = 'directive-8020.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Edit this list to the URLs changed in the latest deploy.
const CHANGED_URLS = [
  '/directive-8020-buy',
  '/es/directive-8020-buy',
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
