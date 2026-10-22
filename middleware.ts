import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, normalizeLocale } from '@/i18n/config';
import { hasPublicRoute, localizedNotFound } from '@/i18n/not-found-response';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split('/')[1];
  const normalized = normalizeLocale(first ?? '');

  if (normalized) {
    // Prefixed non-default locales render as-is; /en/* canonicalizes to unprefixed.
    // 308: the redirect is permanent, so search engines consolidate /en/* with
    // the canonical URL instead of treating it as temporary.
    if (first === normalized && normalized !== defaultLocale) {
      const path = pathname.slice(first.length + 1) || '/';
      return hasPublicRoute(normalized, path) ? NextResponse.next() : localizedNotFound(normalized);
    }
    const url = request.nextUrl.clone();
    const rest = pathname.slice(first.length + 1);
    url.pathname = normalized === defaultLocale ? rest || '/' : `/${normalized}${rest}`;
    return NextResponse.redirect(url, 308);
  }

  if (!hasPublicRoute(defaultLocale, pathname)) return localizedNotFound(defaultLocale);
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // `icon` is excluded because Next serves the generated app/icon.tsx at a
  // root path without an extension (e.g. /icon?be580b4b).
  matcher: ['/((?!api|_next|_vercel|icon|.*\\..*).*)'],
};
