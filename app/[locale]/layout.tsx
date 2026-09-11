import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { defaultLocale, isLocale, locales } from '@/i18n/config';
import { uiStrings } from '@/i18n/ui';
import { getTranslatedPaths } from '@/lib/routes';
import { LocalePathProvider } from '@/components/i18n/LocalePaths';
import Header from '@/components/layout/Header';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BottomTabBar from '@/components/layout/BottomTabBar';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const t = uiStrings[locale].layoutMeta;
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
    },
    twitter: {
      card: 'summary_large_image',
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
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiUrl =
    process.env.NEXT_PUBLIC_UMAMI_URL || 'https://cloud.umami.is';
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;

  return (
    <html lang={params.locale} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-100 pb-16 md:pb-0">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W2GMHSSLVR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
        <LocalePathProvider paths={getTranslatedPaths(locale)}>
          <Header locale={locale} />
          <Breadcrumbs />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
          <BottomTabBar />
        </LocalePathProvider>
      </body>
    </html>
  );
}
