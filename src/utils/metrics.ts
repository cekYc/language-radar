import type { CareerRegion, ChartMetric, Locale, MetricKey, ScoreEvidence, Technology } from '../types';

export const metricLabels: Record<Locale, Record<MetricKey, string>> = {
  tr: {
    performance: 'Performans',
    learning: 'Öğrenme',
    ecosystem: 'Ekosistem',
    versatility: 'Esneklik',
    developmentSpeed: 'Geliştirme Hızı',
    career: 'Kariyer',
  },
  en: {
    performance: 'Performance',
    learning: 'Learning',
    ecosystem: 'Ecosystem',
    versatility: 'Versatility',
    developmentSpeed: 'Development Speed',
    career: 'Career',
  },
};

export function getMetricEvidence(
  technology: Technology,
  key: MetricKey,
  careerRegion: CareerRegion,
): ScoreEvidence {
  return key === 'career' ? technology.career[careerRegion] : technology.metrics[key];
}

export function toChartMetrics(technology: Technology, careerRegion: CareerRegion, locale: Locale = 'tr'): ChartMetric[] {
  return (Object.keys(metricLabels[locale]) as MetricKey[]).map((key) => ({
    key,
    subject: key === 'career'
      ? `${metricLabels[locale].career} ${careerRegion === 'turkey' ? 'TR' : 'Global'}`
      : metricLabels[locale][key],
    score: getMetricEvidence(technology, key, careerRegion).score,
    fullMark: 100,
  }));
}

export function getTechnologyCopy(technology: Technology, careerRegion: CareerRegion, locale: Locale) {
  if (locale === 'tr') {
    return {
      philosophy: technology.philosophy,
      pros: technology.pros,
      cons: technology.cons,
    };
  }

  const category = {
    programming: 'programming language',
    sql: 'SQL language',
    hdl: 'hardware description language',
    visual: 'visual programming tool',
  }[technology.category];
  const ranked = (Object.keys(metricLabels.en) as MetricKey[])
    .map((key) => ({ key, evidence: getMetricEvidence(technology, key, careerRegion) }))
    .sort((first, second) => second.evidence.score - first.evidence.score);

  const summarize = ({ key, evidence }: (typeof ranked)[number]) => (
    `${metricLabels.en[key]}: ${evidence.score}/100 — ${evidence.rationaleEn}`
  );

  return {
    philosophy: `${technology.name} is assessed as a ${category} across six consistent 0–100 dimensions.`,
    pros: ranked.slice(0, 3).map(summarize),
    cons: ranked.slice(-3).reverse().map(summarize),
  };
}
