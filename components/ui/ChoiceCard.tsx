import { uiStrings } from '@/i18n/ui';
import type { Locale } from '@/i18n/config';

interface ChoiceCardProps {
  scene: string;
  option: string;
  recommended: boolean;
  consequence: string;
  locale: Locale;
  characterEffect?: string;
  chainEffect?: string;
  endingImpact?: string;
}

export default function ChoiceCard({
  scene,
  option,
  recommended,
  consequence,
  locale,
  characterEffect,
  chainEffect,
  endingImpact,
}: ChoiceCardProps) {
  const t = uiStrings[locale].choiceCard;
  return (
    <div
      className={`border-l-4 rounded-r-lg p-4 mb-3 ${
        recommended
          ? 'border-green-500 bg-green-900/20'
          : 'border-red-500 bg-red-900/20'
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`font-bold text-sm ${
            recommended ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {recommended ? t.recommended : t.avoid}
        </span>
        <span className="text-slate-200 font-medium">{option}</span>
      </div>
      <p className="text-slate-400 text-sm mb-1">{consequence}</p>
      {characterEffect && (
        <p className="text-violet-400 text-xs mt-1">{characterEffect}</p>
      )}
      {chainEffect && (
        <div className="mt-2 pt-2 border-t border-slate-700/50">
          <span className="text-amber-400 text-xs font-medium">{t.crossEpisode}</span>
          <span className="text-slate-400 text-xs">{chainEffect}</span>
        </div>
      )}
      {endingImpact && (
        <div className="mt-1">
          <span className="text-red-400 text-xs font-medium">{t.endingImpact}</span>
          <span className="text-slate-500 text-xs">{endingImpact}</span>
        </div>
      )}
    </div>
  );
}
