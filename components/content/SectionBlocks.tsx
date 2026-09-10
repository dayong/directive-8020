import type { ReactNode } from 'react';
import { RichText } from '@/components/ui/RichText';
import type { ContentBlock, TableCell } from '@/types/content-pages';

const toneClasses = { red: 'text-red-400', green: 'text-green-400' } as const;

function renderCell(cell: TableCell, key: number): ReactNode {
  if (typeof cell === 'string') {
    return <RichText key={key} text={cell} />;
  }
  return (
    <strong key={key} className={toneClasses[cell.tone]}>
      {cell.text}
    </strong>
  );
}

function renderBlock(block: ContentBlock, key: number): ReactNode {
  if (block.type === 'subheading') {
    return <h3 key={key}>{block.text}</h3>;
  }
  if (block.type === 'table') {
    return (
      <div key={key} className="overflow-x-auto mb-6">
        <table>
          <thead>
            <tr>
              {block.headers.map((header, j) => (
                <th key={j}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, j) => (
              <tr key={j}>
                {row.map((cell, k) => (
                  <td key={k}>{renderCell(cell, k)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.type === 'list') {
    return block.ordered ? (
      <ol key={key}>
        {block.items.map((item, j) => (
          <li key={j}>
            <RichText text={item} />
          </li>
        ))}
      </ol>
    ) : (
      <ul key={key}>
        {block.items.map((item, j) => (
          <li key={j}>
            <RichText text={item} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p key={key}>
      <RichText text={block.text} />
    </p>
  );
}

export function SectionBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return <>{blocks.map((block, i) => renderBlock(block, i))}</>;
}
