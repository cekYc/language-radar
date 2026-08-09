import { ExternalLink } from 'lucide-react';
import { t } from '../i18n';
import type { CareerRegion, ConfidenceLevel, Locale, MetricKey, Technology } from '../types';
import { getMetricEvidence, metricLabels } from '../utils/metrics';

const confidenceClasses: Record<ConfidenceLevel, string> = {
  high: 'text-green-300 bg-green-500/10',
  medium: 'text-amber-300 bg-amber-500/10',
  low: 'text-rose-300 bg-rose-500/10',
};

interface EvidenceRowProps {
  technology: Technology;
  metric: MetricKey;
  careerRegion: CareerRegion;
  locale: Locale;
}

function EvidenceRow({ technology, metric, careerRegion, locale }: EvidenceRowProps) {
  const copy = t(locale);
  const confidenceLabels: Record<ConfidenceLevel, string> = {
    high: copy.confidenceHigh,
    medium: copy.confidenceMedium,
    low: copy.confidenceLow,
  };
  const evidence = getMetricEvidence(technology, metric, careerRegion);
  const label = metric === 'career'
    ? `${metricLabels[locale][metric]} · ${careerRegion === 'turkey' ? copy.turkey : copy.global}`
    : metricLabels[locale][metric];

  return (
    <div className="rounded-lg bg-slate-900/50 p-3 border border-slate-700/40">
      <div className="flex items-start justify-between gap-3 mb-1.5">
        <span className="text-xs font-bold text-slate-200">{label} · {evidence.score}/100</span>
        <span className={`text-[10px] px-2 py-0.5 rounded-full ${confidenceClasses[evidence.confidence]}`}>
          {confidenceLabels[evidence.confidence]} {copy.confidence}
        </span>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed">{locale === 'en' ? evidence.rationaleEn : evidence.rationale}</p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
        {evidence.sources.map((source) => (
          <a
            key={source.id}
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-indigo-300 hover:text-indigo-200"
            title={source.title}
          >
            {source.publisher} <ExternalLink size={10} />
          </a>
        ))}
        <span className="text-[10px] text-slate-600">{evidence.updatedAt}</span>
      </div>
    </div>
  );
}

interface TechnologyEvidenceProps {
  technology: Technology;
  locale: Locale;
}

export function TechnologyEvidence({ technology, locale }: TechnologyEvidenceProps) {
  const copy = t(locale);
  const regularMetrics: MetricKey[] = [
    'performance',
    'learning',
    'ecosystem',
    'versatility',
    'developmentSpeed',
  ];

  return (
    <details className="border-t border-slate-700/50 bg-slate-900/20">
      <summary className="cursor-pointer list-none px-5 py-3 text-xs font-semibold text-indigo-300 hover:text-indigo-200">
        {copy.evidenceTitle}
      </summary>
      <div className="px-4 pb-4 space-y-2">
        {regularMetrics.map((metric) => (
          <EvidenceRow key={metric} technology={technology} metric={metric} careerRegion="global" locale={locale} />
        ))}
        <EvidenceRow technology={technology} metric="career" careerRegion="turkey" locale={locale} />
        <EvidenceRow technology={technology} metric="career" careerRegion="global" locale={locale} />
      </div>
    </details>
  );
}
