import { CtaSection } from '@/components/content/CtaSection';
import { HeroSection } from '@/components/content/HeroSection';
import { SectionBlocks } from '@/components/content/SectionBlocks';
import { RichText } from '@/components/ui/RichText';
import type { BugFixesContent } from '@/types/content-pages';


export default function BugFixesView({ content }: { content: BugFixesContent }) {
  return (
    <>
      <HeroSection hero={content.hero} />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 mdx-content">
        {content.sections.map((section, i) => (
          <section key={i} id={section.id}>
            <h2>{section.heading}</h2>
            <SectionBlocks blocks={section.blocks} />
          </section>
        ))}

        {/* Official System Requirements */}
        <section>
          <h2>{content.specsTable.heading}</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  {content.specsTable.headers.map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.specsTable.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>
                        <RichText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <CtaSection cta={content.cta} />
      </div>
    </>
  );
}
