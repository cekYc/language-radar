import { Sparkles, TrendingUp, Users } from 'lucide-react';
import { t } from '../i18n';
import type { Locale } from '../types';

interface AppHeaderProps {
  technologyCount: number;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function AppHeader({ technologyCount, locale, onLocaleChange }: AppHeaderProps) {
  const copy = t(locale);
  return (
    <header className="mb-12 text-center max-w-4xl mx-auto animate-fade-in-up relative">
      <div className="flex justify-center md:absolute md:right-0 md:top-0 mb-5 md:mb-0">
        <div className="glass rounded-xl p-1 flex" aria-label={copy.languageSelection}>
          {(['tr', 'en'] as const).map((language) => (
            <button
              key={language}
              type="button"
              onClick={() => onLocaleChange(language)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${locale === language ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
              aria-pressed={locale === language}
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
        <Sparkles size={16} className="text-yellow-400" />
        <span className="text-sm text-slate-300">{technologyCount} {copy.analysisBadge}</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
        {copy.title}
      </h1>

      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        {copy.subtitle}
      </p>

      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <TrendingUp size={16} className="text-green-400" />
          <span>{copy.sourcedAndDated}</span>
        </div>
        <div className="w-1 h-1 bg-slate-600 rounded-full" />
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Users size={16} className="text-blue-400" />
          <span>{copy.bilingual}</span>
        </div>
      </div>
    </header>
  );
}
