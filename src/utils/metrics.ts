import type { CareerRegion, ChartMetric, MetricKey, ScoreEvidence, Technology } from '../types';

export const metricLabels: Record<MetricKey, string> = {
  performance: 'Performans',
  learning: 'Öğrenme',
  ecosystem: 'Ekosistem',
  versatility: 'Esneklik',
  developmentSpeed: 'Geliştirme Hızı',
  career: 'Kariyer',
};

export function getMetricEvidence(
  technology: Technology,
  key: MetricKey,
  careerRegion: CareerRegion,
): ScoreEvidence {
  return key === 'career' ? technology.career[careerRegion] : technology.metrics[key];
}

export function toChartMetrics(technology: Technology, careerRegion: CareerRegion): ChartMetric[] {
  return (Object.keys(metricLabels) as MetricKey[]).map((key) => ({
    key,
    subject: key === 'career'
      ? `Kariyer ${careerRegion === 'turkey' ? 'TR' : 'Global'}`
      : metricLabels[key],
    score: getMetricEvidence(technology, key, careerRegion).score,
    fullMark: 100,
  }));
}

