import type { BuyFeatured } from '@/types/content-pages';

export function AffiliateCard({ card }: { card: BuyFeatured }) {
  return (
    <div className="border border-violet-700/60 bg-slate-800/50 rounded-xl overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <img
          src={card.image.src}
          alt={card.image.alt}
          width={card.image.width}
          height={card.image.height}
          decoding="async"
          className="w-full sm:w-64 h-auto object-cover"
        />
        <div className="p-6 flex-1">
          <p className="text-xs uppercase tracking-wide text-violet-400 font-semibold mb-1">
            {card.storeLabel}
          </p>
          <h2 className="text-xl font-bold text-slate-100 mb-2">{card.productName}</h2>
          <p className="text-slate-400 text-sm mb-4">{card.priceNote}</p>
          <ul className="mb-5 space-y-1.5">
            {card.trustPoints.map((point, i) => (
              <li key={i} className="text-slate-300 text-sm flex gap-2">
                <span className="text-violet-400 shrink-0">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <a
            href={card.href}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-colors bg-violet-600 hover:bg-violet-500 text-white"
          >
            {card.ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
