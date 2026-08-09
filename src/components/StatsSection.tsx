import { useMemo } from 'react';
import { Award, BarChart3, Code2, Target } from 'lucide-react';
import type { Technology } from '../types';
import type { Locale } from '../types';
import { t } from '../i18n';
import { AnimatedCounter } from './AnimatedCounter';

interface StatsSectionProps {
  technologies: Technology[];
  locale: Locale;
}

export function StatsSection({ technologies, locale }: StatsSectionProps) {
  const copy = t(locale);
  const stats = useMemo(() => {
    const topPerformer = technologies.reduce((best, technology) => (
      technology.metrics.performance.score > best.metrics.performance.score ? technology : best
    ));
    const easiestToLearn = technologies.reduce((best, technology) => (
      technology.metrics.learning.score > best.metrics.learning.score ? technology : best
    ));
    return { topPerformer, easiestToLearn };
  }, [technologies]);

  return (
    <div className="max-w-7xl mx-auto mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass rounded-2xl p-6 text-center card-hover">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Code2 className="text-white" size={24} />
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            <AnimatedCounter target={technologies.length} />
          </div>
          <div className="text-slate-400 text-sm">{copy.technology}</div>
        </div>

        <div className="glass rounded-2xl p-6 text-center card-hover">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
            <BarChart3 className="text-white" size={24} />
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            <AnimatedCounter target={6} />
          </div>
          <div className="text-slate-400 text-sm">{copy.metric}</div>
        </div>

        <div className="glass rounded-2xl p-6 text-center card-hover">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
            <Award className="text-white" size={24} />
          </div>
          <div className="text-lg font-bold text-amber-400 mb-1">{stats.topPerformer.name}</div>
          <div className="text-slate-400 text-sm">{copy.topPerformance}</div>
        </div>

        <div className="glass rounded-2xl p-6 text-center card-hover">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Target className="text-white" size={24} />
          </div>
          <div className="text-lg font-bold text-cyan-400 mb-1">{stats.easiestToLearn.name}</div>
          <div className="text-slate-400 text-sm">{copy.easiestLearning}</div>
        </div>
      </div>
    </div>
  );
}
