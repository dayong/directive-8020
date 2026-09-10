import { getPageContent } from '@/lib/content';
import { buildPageMetadata } from '@/lib/page-seo';
import type { ChoicesContent } from '@/types/content-pages';

const SLUG = 'choices';

const content: ChoicesContent = (() => {
  const c = getPageContent<ChoicesContent>(SLUG);
  if (!c) throw new Error(`Missing content file: content/pages/en/${SLUG}.json`);
  return c;
})();

export const metadata = buildPageMetadata(SLUG, content.meta);

export default function ChoicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
