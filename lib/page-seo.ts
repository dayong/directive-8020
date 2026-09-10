import type { Metadata } from 'next';
import type { ContentMeta, FaqItem } from '@/types/content-pages';

export function buildPageMetadata(slug: string, meta: ContentMeta): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${slug}`,
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
