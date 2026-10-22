import { getEpisodes, getCharacters } from '@/lib/localized-data';
import { interpolate } from '@/i18n/format';
import { notFound } from 'next/navigation';
import { MessagesProvider } from '@/components/i18n/Messages';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { defaultLocale, isLocale, locales, openGraphLocales, type Locale } from '@/i18n/config';
import { getUiStrings } from '@/i18n/ui';
import { getTranslatedPaths } from '@/lib/routes';
import { getContentReview } from '@/lib/content';
import { LocalePathProvider } from '@/components/i18n/LocalePaths';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BottomTabBar from '@/components/layout/BottomTabBar';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const t = getUiStrings(locale).layoutMeta;
  return {
    metadataBase: new URL('https://directive-8020.com'),
    title: {
      default: t.defaultTitle,
      template: t.titleTemplate,
    },
    description: t.description,
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      images: ['/og-image.png'],
      type: 'website',
      locale: openGraphLocales[locale],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.ogTitle,
      description: t.ogDescription,
      images: ['/og-image.png'],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiUrl =
    process.env.NEXT_PUBLIC_UMAMI_URL || 'https://cloud.umami.is';
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const translatedPathsByLocale = Object.fromEntries(
    locales.map((candidate) => [candidate, getTranslatedPaths(candidate)])
  ) as Record<Locale, string[]>;

  const labels = Object.fromEntries([
    ...getEpisodes(locale).map((episode) => {
      const review = getContentReview('walkthrough-episode', locale, `/walkthrough/${episode.slug}`);
      return [`walkthrough/${episode.slug}`, review?.status === 'pending' && review.replacement
        ? review.replacement.heading
        : interpolate(getUiStrings(locale).breadcrumbs.episodeFormat, { number: episode.number, title: episode.title })];
    }),
    ...getCharacters(locale).map((character) => [`characters/${character.id}`, character.fullName]),
  ]);

  return (
    <html lang={params.locale} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-100 pb-16 xl:pb-0">
        {/* lazyOnload keeps gtag's ~100KB off the critical path: afterInteractive
            makes next/script emit a preload that competes with CSS/font/JS on
            mobile, and gtag is not needed for first paint. */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W2GMHSSLVR"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W2GMHSSLVR');
          `}
        </Script>
        {umamiId && (
          <Script
            defer
            src={`${umamiUrl}/script.js`}
            data-website-id={umamiId}
            strategy="afterInteractive"
          />
        )}
        <MessagesProvider locale={locale} messages={getUiStrings(locale)} labels={labels}>
        <LocalePathProvider pathsByLocale={translatedPathsByLocale}>
          <Header locale={locale} />
          <Breadcrumbs />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
          <BottomTabBar />
        </LocalePathProvider>
        </MessagesProvider>
      </body>
    </html>
  );
}
