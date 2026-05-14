import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Directive 8020 Choices & Consequences | All Decisions',
  description:
    'Complete guide to all choices and consequences in Directive 8020. See recommended options, character effects, and how each decision impacts the ending.',
  openGraph: {
    title: 'Directive 8020 Choices & Consequences',
    description:
      'Every key choice in Directive 8020 explained — recommended options, consequences, and ending impacts.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function ChoicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
