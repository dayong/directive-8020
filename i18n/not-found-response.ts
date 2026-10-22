import { NextResponse } from 'next/server';
import { localizeHref, type Locale } from './config';
import manifest from './generated/route-manifest.json';

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]!);

/** A real, localized 404, independent of cookies, client JavaScript and React hydration. */
export function localizedNotFound(locale: Locale) {
  const { title, body, home } = manifest.errors[locale];
  return new NextResponse(`<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>${escapeHtml(title)} | Directive 8020</title><style>html{color-scheme:dark;background:#0f172a;color:#f1f5f9;font-family:system-ui,sans-serif}body{margin:0;min-height:100vh;display:grid;place-items:center}main{max-width:42rem;padding:2rem;text-align:center}h1{font-size:clamp(1.7rem,5vw,2.5rem)}p{color:#cbd5e1;line-height:1.8}a{display:inline-block;margin-top:1rem;padding:.8rem 1.5rem;background:#7c3aed;color:white;border-radius:.5rem;text-decoration:none}a:focus-visible{outline:3px solid #c4b5fd;outline-offset:4px}</style></head><body><main><h1>${escapeHtml(title)}</h1><p>${escapeHtml(body)}</p><a href="${localizeHref('/', locale)}">${escapeHtml(home)}</a></main></body></html>`, {
    status: 404,
    headers: { 'content-type': 'text/html; charset=utf-8', 'content-language': locale, 'x-robots-tag': 'noindex, follow', 'cache-control': 'public, max-age=0, must-revalidate' },
  });
}

export function hasPublicRoute(locale: Locale, path: string) {
  return (manifest.paths[locale] as readonly string[]).includes(path.replace(/\/$/, '') || '/');
}
