import { BookOpen, Layers, X, Zap } from 'lucide-react';
import { t } from '../i18n';
import type { CareerRegion, Locale, Technology } from '../types';
import { getTechnologyCopy } from '../utils/metrics';
import { ComparisonRadar } from './RadarCharts';

interface ComparisonPanelProps {
  technologies: Technology[];
  careerRegion: CareerRegion;
  locale: Locale;
  onClear: () => void;
}

export function ComparisonPanel({ technologies, careerRegion, locale, onClear }: ComparisonPanelProps) {
  if (technologies.length === 0) return null;
  const copy = t(locale);

  return (
    <section className="max-w-7xl mx-auto mb-12 animate-scale-in" aria-label={copy.comparisonRegion}>
      <div className="glass-dark rounded-3xl shadow-2xl overflow-hidden border border-indigo-500/20">
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 p-5 border-b border-slate-700/50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white flex items-center gap-3">
            <span className="p-2 rounded-lg bg-indigo-500/20">
              <Layers size={22} className="text-indigo-400" />
            </span>
            {copy.comparisonAnalysis}
            <span className="badge badge-primary ml-2">{technologies.length} {copy.technology}</span>
          </h2>
          <button type="button" onClick={onClear} className="p-2.5 hover:bg-slate-700/50 rounded-xl text-slate-400 hover:text-white" aria-label={copy.clearComparison}>
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-700/50">
            <div className="w-full h-80">
              <ComparisonRadar technologies={technologies} careerRegion={careerRegion} locale={locale} />
            </div>
          </div>

          <div className="w-full lg:w-2/3 p-6 overflow-x-auto">
            <div className="flex gap-6 min-w-max">
              {technologies.map((technology, index) => {
                const content = getTechnologyCopy(technology, careerRegion, locale);
                return (
                <article
                  key={technology.id}
                  className="w-72 flex-shrink-0 flex flex-col animate-slide-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b-2" style={{ borderColor: technology.color }}>
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: technology.color }} />
                    <h3 className="text-2xl font-bold" style={{ color: technology.color }}>{technology.name}</h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="p-3 rounded-xl bg-slate-800/50">
                      <p className="font-semibold text-slate-400 mb-1 text-xs uppercase tracking-wide">{copy.philosophy}</p>
                      <p className="italic text-slate-200">“{content.philosophy}”</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-400 flex items-center gap-2 mb-2"><Zap size={14} /> {copy.pros}</p>
                      <ul className="space-y-1.5">
                        {content.pros.map((pro) => <li key={pro} className="text-slate-300">• {pro}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-400 flex items-center gap-2 mb-2"><BookOpen size={14} /> {copy.cons}</p>
                      <ul className="space-y-1.5">
                        {content.cons.map((con) => <li key={con} className="text-slate-300">• {con}</li>)}
                      </ul>
                    </div>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
