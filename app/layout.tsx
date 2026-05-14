import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import BottomTabBar from '@/components/layout/BottomTabBar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://directive-8020.com'),
  title: {
    default: 'Directive 8020 Guide | Complete Walkthrough',
    template: '%s | Directive 8020 Guide',
  },
  description:
    'The Dark Pictures Anthology: Directive 8020 complete walkthrough — save everyone, all endings, choices, trophy guide, and character survival tips.',
  openGraph: {
    title: 'Directive 8020 Guide | Complete Walkthrough',
    description:
      'Directive 8020 complete walkthrough guide. Save all crew members, unlock every ending, and master every choice.',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiUrl =
    process.env.NEXT_PUBLIC_UMAMI_URL || 'https://cloud.umami.is';

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-100 pb-16 md:pb-0">
        {umamiId && (
          <Script
            defer
            src={`${umamiUrl}/script.js`}
            data-website-id={umamiId}
            strategy="afterInteractive"
          />
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BottomTabBar />
      </body>
    </html>
  );
}
