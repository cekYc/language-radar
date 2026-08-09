import { describe, expect, it } from 'vitest';
import { metricRubrics } from './rubric';
import { technologies } from './technologies';
import { METRIC_KEYS, type CareerRegion } from '../types';
import { getMetricEvidence, toChartMetrics } from '../utils/metrics';

describe('v2 technology data', () => {
  it('keeps all 59 unique technologies and all requested categories', () => {
    expect(technologies).toHaveLength(59);
    expect(new Set(technologies.map(({ id }) => id)).size).toBe(technologies.length);
    expect(new Set(technologies.map(({ category }) => category))).toEqual(
      new Set(['programming', 'sql', 'hdl', 'visual']),
    );
  });

  it('provides complete 0–100 evidence for every score', () => {
    const regions: CareerRegion[] = ['turkey', 'global'];

    technologies.forEach((technology) => {
      METRIC_KEYS.filter((metric) => metric !== 'career').forEach((metric) => {
        const evidence = getMetricEvidence(technology, metric, 'global');
        expect(evidence.score).toBeGreaterThanOrEqual(0);
        expect(evidence.score).toBeLessThanOrEqual(100);
        expect(Number.isInteger(evidence.score)).toBe(true);
        expect(evidence.rationale.length).toBeGreaterThan(20);
        expect(evidence.rationaleEn.length).toBeGreaterThan(20);
        expect(evidence.sources.length).toBeGreaterThan(0);
        expect(evidence.updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(['high', 'medium', 'low']).toContain(evidence.confidence);
      });

      regions.forEach((region) => {
        const evidence = getMetricEvidence(technology, 'career', region);
        expect(evidence.score).toBeGreaterThanOrEqual(0);
        expect(evidence.score).toBeLessThanOrEqual(100);
        expect(evidence.sources.length).toBeGreaterThan(0);
      });
    });
  });

  it('uses six fixed rubrics whose weights total 100', () => {
    expect(metricRubrics.map(({ key }) => key)).toEqual(METRIC_KEYS);
    metricRubrics.forEach((rubric) => {
      expect(rubric.factors.reduce((total, factor) => total + factor.weight, 0)).toBe(100);
    });
  });

  it('builds six-axis charts with a 100-point domain', () => {
    technologies.forEach((technology) => {
      const chart = toChartMetrics(technology, 'turkey');
      expect(chart).toHaveLength(6);
      expect(chart.every(({ fullMark }) => fullMark === 100)).toBe(true);
      expect(toChartMetrics(technology, 'global', 'en').map(({ subject }) => subject)).toEqual([
        'Performance',
        'Learning',
        'Ecosystem',
        'Versatility',
        'Development Speed',
        'Career Global',
      ]);
    });
  });

  it('keeps Turkey and global career scores independently evaluated', () => {
    expect(technologies.some(({ career }) => career.turkey.score !== career.global.score)).toBe(true);
  });
});
