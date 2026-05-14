'use client';

import { useState } from 'react';

interface SpoilerWarningProps {
  title?: string;
  children: React.ReactNode;
}

export default function SpoilerWarning({
  title = 'Spoiler Warning',
  children,
}: SpoilerWarningProps) {
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
        <span className="text-amber-400 font-bold">{title}</span>
      </div>
      <p className="text-slate-400 text-sm mt-1">
        Click to reveal. This section contains critical story spoilers that may
        affect your gameplay experience.
      </p>
    </button>
  );
}
