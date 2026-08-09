import { BookOpenCheck, ExternalLink } from 'lucide-react';
import { metricRubrics, SCORE_BANDS } from '../data/rubric';
import { METHODOLOGY_UPDATED_AT, sources } from '../data/sources';

export function MethodologyPanel() {
  return (
    <div className="max-w-6xl mx-auto mb-8">
      <details className="glass rounded-2xl overflow-hidden group">
        <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors">
          <span className="flex items-center gap-3 font-semibold text-slate-200">
            <BookOpenCheck size={20} className="text-indigo-400" />
            Sabit puanlama rubriği ve kaynak yöntemi
          </span>
          <span className="text-xs text-slate-500">Güncelleme: {METHODOLOGY_UPDATED_AT}</span>
        </summary>

        <div className="p-5 pt-0 border-t border-slate-700/50">
          <p className="text-sm text-slate-400 leading-relaxed my-5">
            Puanlar ölçülmüş mutlak gerçekler değil; aşağıdaki sabit ağırlıkların kaynak sinyallerine uygulanmasıyla
            üretilen karşılaştırmalı karar skorlarıdır. Kategoriler ayrı gösterilir, ancak rubrik ve 0–100 ölçeği değişmez.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {metricRubrics.map((rubric) => (
              <article key={rubric.key} className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-4">
                <h3 className="font-bold text-white mb-1">{rubric.label}</h3>
                <p className="text-xs text-slate-400 mb-3 min-h-[48px]">{rubric.description}</p>
                <ul className="space-y-2">
                  {rubric.factors.map((factor) => (
                    <li key={factor.label} className="text-xs text-slate-300">
                      <span className="font-semibold text-indigo-300">%{factor.weight} {factor.label}:</span>{' '}
                      {factor.description}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-slate-800/40 p-4 text-xs text-slate-400">
            <span className="font-semibold text-slate-200">Sabit bantlar: </span>
            {SCORE_BANDS.map((band) => `${band.min}–${band.max} ${band.label}`).join(' · ')}
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            {Object.values(sources).map((source) => (
              <a
                key={source.id}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-indigo-300 hover:text-indigo-200"
              >
                {source.publisher} <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
}

