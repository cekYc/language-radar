import { BookOpen, Check, Share2, Zap } from 'lucide-react';
import type { CareerRegion, Technology } from '../types';
import { toChartMetrics } from '../utils/metrics';
import { TechnologyEvidence } from './TechnologyEvidence';
import { TechnologyRadar } from './RadarCharts';

const categoryLabels = {
  programming: 'Programlama',
  sql: 'SQL',
  hdl: 'HDL',
  visual: 'Görsel Araç',
} as const;

interface ScoreBarProps {
  label: string;
  score: number;
  gradient: string;
}

function ScoreBar({ label, score, gradient }: ScoreBarProps) {
  return (
    <div>
      <div className="text-xs text-slate-500 mb-1">{label}</div>
      <div className="flex items-center justify-center gap-1">
        <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${gradient} transition-all duration-500`} style={{ width: `${score}%` }} />
        </div>
        <span className="text-xs font-bold text-slate-300 w-7">{score}</span>
      </div>
    </div>
  );
}

interface TechnologyCardProps {
  technology: Technology;
  index: number;
  selected: boolean;
  careerRegion: CareerRegion;
  onToggle: (id: string) => void;
}

export function TechnologyCard({ technology, index, selected, careerRegion, onToggle }: TechnologyCardProps) {
  const performance = technology.metrics.performance.score;
  const learning = technology.metrics.learning.score;
  const career = technology.career[careerRegion].score;

  return (
    <article
      className={`group glass rounded-2xl shadow-lg overflow-hidden flex flex-col card-hover animate-fade-in-up border-2 transition-all duration-300 ${
        selected ? 'border-indigo-500 ring-2 ring-indigo-500/30' : 'border-transparent hover:border-slate-600'
      }`}
      style={{ animationDelay: `${(index % 9) * 50}ms` }}
    >
      <div className="p-5 pb-3">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-10 rounded-full" style={{ backgroundColor: technology.color }} />
            <div>
              <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                {technology.name}
              </h2>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="badge bg-slate-700/60 text-slate-300">{categoryLabels[technology.category]}</span>
                {performance >= 90 && <span className="badge badge-success">Hızlı</span>}
                {learning >= 90 && <span className="badge badge-primary">Kolay</span>}
                {career >= 85 && <span className="badge badge-warning">Talep</span>}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onToggle(technology.id)}
            className={`p-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-medium ${
              selected
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:scale-105'
            }`}
            aria-pressed={selected}
            aria-label={`${technology.name} ${selected ? 'karşılaştırmadan çıkar' : 'karşılaştırmaya ekle'}`}
          >
            {selected ? <Check size={16} /> : <Share2 size={16} />}
            <span className="hidden sm:inline">{selected ? 'Seçili' : 'Kıyasla'}</span>
          </button>
        </div>
        <p className="text-slate-400 text-sm min-h-[40px] italic leading-relaxed">“{technology.philosophy}”</p>
      </div>

      <div className="h-56 w-full bg-gradient-to-b from-transparent to-slate-800/30 relative">
        <TechnologyRadar data={toChartMetrics(technology, careerRegion)} color={technology.color} />
      </div>

      <div className="px-5 py-3 bg-slate-800/30 border-t border-slate-700/50">
        <div className="grid grid-cols-3 gap-3 text-center">
          <ScoreBar label="Performans" score={performance} gradient="bg-gradient-to-r from-green-500 to-emerald-400" />
          <ScoreBar label="Öğrenme" score={learning} gradient="bg-gradient-to-r from-blue-500 to-cyan-400" />
          <ScoreBar
            label={`Kariyer ${careerRegion === 'turkey' ? 'TR' : 'Global'}`}
            score={career}
            gradient="bg-gradient-to-r from-amber-500 to-orange-400"
          />
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col gap-4 border-t border-slate-700/50">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold text-green-400 mb-2 flex items-center gap-2">
              <Zap size={14} className="fill-current" /> Güçlü Yönler
            </h3>
            <ul className="text-sm text-slate-300 space-y-1.5">
              {technology.pros.slice(0, 2).map((pro) => (
                <li key={pro} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                  <span className="line-clamp-2">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-red-400 mb-2 flex items-center gap-2">
              <BookOpen size={14} /> Zayıf Yönler
            </h3>
            <ul className="text-sm text-slate-300 space-y-1.5">
              {technology.cons.slice(0, 2).map((con) => (
                <li key={con} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <span className="line-clamp-2">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <TechnologyEvidence technology={technology} />
    </article>
  );
}

