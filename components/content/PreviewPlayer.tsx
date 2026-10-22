'use client';

import { useMessages } from '@/components/i18n/Messages';

import { useState } from 'react';

export function PreviewPlayer({
  src,
  poster,
  posterAlt,
}: {
  src: string;
  poster: string;
  posterAlt: string;
}) {
  const { messages } = useMessages();
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 bg-slate-950">
      {playing ? (
        <video src={src} poster={poster} controls autoPlay playsInline className="w-full h-full" />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group w-full h-full relative"
          aria-label={messages.accessibility.playPreview}
        >
          <img
            src={poster}
            alt={posterAlt}
            width={380}
            height={218}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-violet-600/90 group-hover:bg-violet-500 flex items-center justify-center text-white text-2xl transition-colors">
              ▶
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
