import type { ReactNode } from 'react';
import Link from 'next/link';

const INLINE_RE = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

function renderToken(token: string, key: number): ReactNode {
  if (token.startsWith('**') && token.endsWith('**')) {
    return <strong key={key}>{token.slice(2, -2)}</strong>;
  }
  if (token.startsWith('`') && token.endsWith('`')) {
    return <code key={key}>{token.slice(1, -1)}</code>;
  }
  if (token.startsWith('*') && token.endsWith('*') && token.length > 2) {
    return <em key={key}>{token.slice(1, -1)}</em>;
  }
  if (token.startsWith('[')) {
    const close = token.lastIndexOf('](');
    const label = token.slice(1, close);
    const href = token.slice(close + 2, -1);
    if (href.startsWith('/')) {
      return (
        <Link key={key} href={href} className="text-violet-400 hover:underline">
          {label}
        </Link>
      );
    }
    if (href.startsWith('mailto:')) {
      return (
        <a key={key} href={href} className="text-violet-400 hover:underline">
          {label}
        </a>
      );
    }
    return (
      <a key={key} href={href} target="_blank" rel="noreferrer" className="text-violet-400 hover:underline">
        {label}
      </a>
    );
  }
  return token;
}

export function RichText({ text }: { text: string }) {
  const parts = text.split(INLINE_RE);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? renderToken(part, i) : part
      )}
    </>
  );
}
