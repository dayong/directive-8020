import Link from 'next/link';
import type { CtaContent } from '@/types/content-pages';

const variantClasses: Record<CtaContent['links'][number]['variant'], string> = {
  primary: 'bg-violet-600 hover:bg-violet-500 text-white',
  outline: 'border border-violet-500 text-violet-400 hover:bg-violet-500/10',
  ghost: 'border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-slate-100',
};

export function CtaSection({ cta }: { cta: CtaContent }) {
  return (
    <div className="text-center pt-8 border-t border-slate-800">
      <p className="text-slate-400 mb-4">
        {cta.text}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {cta.links.map((link, i) => (
          <Link key={i} href={link.href} className={`inline-block px-8 py-3 rounded-lg font-semibold transition-colors ${variantClasses[link.variant]}`}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
