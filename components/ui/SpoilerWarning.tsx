'use client';

import { useMessages } from '@/components/i18n/Messages';
import { useState } from 'react';

interface SpoilerWarningProps {
  title?: string;
  children: React.ReactNode;
}

export default function SpoilerWarning({
  title,
  children,
}: SpoilerWarningProps) {
  const { messages } = useMessages();
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    return <>{children}</>;
  }

  return (
    <button
      onClick={() => setRevealed(true)}
      className="w-full border border-amber-500 bg-amber-900/20 p-4 rounded-lg text-left hover:bg-amber-900/30 transition-colors"
    >
      <div className="flex items-center gap-2">
        <span className="text-amber-400 text-lg">⚠</span>
        <span className="text-amber-400 font-bold">{title ?? messages.spoiler.title}</span>
      </div>
      <p className="text-slate-400 text-sm mt-1">
        {messages.spoiler.body}
      </p>
    </button>
  );
}
