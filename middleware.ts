import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, isLocale } from '@/i18n/config';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split('/')[1];

  if (isLocale(first)) {
    // Prefixed non-default locales render as-is; /en/* canonicalizes to unprefixed.
    if (first !== defaultLocale) return NextResponse.next();
    const url = request.nextUrl.clone();
    const rest = pathname.slice(first.length + 1);
    url.pathname = rest === '' ? '/' : rest;
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // `icon` is excluded because Next serves the generated app/icon.tsx at a
  // root path without an extension (e.g. /icon?be580b4b).
  matcher: ['/((?!api|_next|_vercel|icon|.*\\..*).*)'],
};
