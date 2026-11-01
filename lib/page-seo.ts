import type { Metadata } from 'next';
import { defaultLocale, hreflangTag, localizeHref, openGraphLocales, type Locale } from '@/i18n/config';
import { getIndexableLocales, getContentReview } from '@/lib/content';
import type { ContentMeta, FaqItem } from '@/types/content-pages';

export function buildAlternates(
  path: string,
  locale: Locale,
  contentSlug: string
): Metadata['alternates'] {
  const available = getIndexableLocales(contentSlug, path);

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
    canonical: localizeHref(path, locale),
    ...(available.length > 1 ? { languages } : {}),
  };
}

export function buildPageMetadata(
  slug: string,
  meta: ContentMeta,
  locale: Locale = defaultLocale,
  contentSlug = slug
): Metadata {
  const path = slug === '' ? '/' : `/${slug}`;

  return {
    ...(getContentReview(contentSlug, locale, path)?.status === 'pending' ? { robots: { index: false, follow: true } } : {}),
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description, images: ['/og-image.png'] },
    title: meta.title.includes('Directive 8020') ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: buildAlternates(path, locale, contentSlug),
    openGraph: {
      url: localizeHref(path, locale),
      locale: openGraphLocales[locale],
      alternateLocale: getIndexableLocales(contentSlug, path).filter((candidate) => candidate !== locale).map((candidate) => openGraphLocales[candidate]),
      title: meta.ogTitle ?? meta.title,
      description: meta.ogDescription ?? meta.description,
      images: ['/og-image.png'],
      type: 'website',
    },
  };
}

export function buildFaqSchema(faqs: FaqItem[], locale: Locale = defaultLocale, verified = false) {
  if (!verified) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
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
