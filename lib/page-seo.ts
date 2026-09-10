import type { Metadata } from 'next';
import { defaultLocale, hreflangTag, localizeHref, type Locale } from '@/i18n/config';
import { getAvailableLocales } from '@/lib/content';
import type { ContentMeta, FaqItem } from '@/types/content-pages';

export function buildPageMetadata(
  slug: string,
  meta: ContentMeta,
  locale: Locale = defaultLocale,
  contentSlug = slug
): Metadata {
  const path = slug === '' ? '/' : `/${slug}`;
  const available = getAvailableLocales(contentSlug);

  // hreflang stays out until a page actually exists in another language, so
  // English-only pages keep emitting exactly the tags they emit today.
  const languages: Record<string, string> = {};
  if (available.length > 1) {
    for (const availableLocale of available) {
      languages[hreflangTag(availableLocale)] = localizeHref(path, availableLocale);
    }
    languages['x-default'] = path;
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localizeHref(path, locale),
      ...(available.length > 1 ? { languages } : {}),
    },
    openGraph: {
      title: meta.ogTitle ?? meta.title,
      description: meta.ogDescription ?? meta.description,
      images: ['/og-image.png'],
      type: 'website',
    },
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}
