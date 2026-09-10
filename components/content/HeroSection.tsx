import { RichText } from '@/components/ui/RichText';
import type { HeroContent } from '@/types/content-pages';

const glowClasses: Record<'amber' | 'violet', string> = {
  amber: 'from-amber-900/10',
  violet: 'from-violet-900/10',
};

export function HeroSection({ hero, glow }: { hero: HeroContent; glow?: 'amber' | 'violet' }) {
  return (
    <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
      {glow && (
        <div
          className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${glowClasses[glow]} via-slate-900 to-slate-900 pointer-events-none`}
        />
      )}
      <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
          {hero.h1}
        </h1>
        {hero.tagline && (
          <p className="text-violet-300 font-medium text-lg mb-2">
            {hero.tagline}
          </p>
        )}
        <p className="text-slate-400 max-w-2xl mx-auto">
          <RichText text={hero.intro} />
        </p>
      </div>
    </section>
  );
}
