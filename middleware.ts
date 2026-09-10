import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from '@/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false,
});

export const config = {
  // `icon` is excluded because Next serves the generated app/icon.tsx at a
  // root path without an extension (e.g. /icon?be580b4b).
  matcher: ['/((?!api|_next|_vercel|icon|.*\\..*).*)'],
};
