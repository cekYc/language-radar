export const METRIC_KEYS = [
  'performance',
  'learning',
  'ecosystem',
  'versatility',
  'developmentSpeed',
  'career',
] as const;

export type MetricKey = (typeof METRIC_KEYS)[number];
export type NonCareerMetricKey = Exclude<MetricKey, 'career'>;
export type CareerRegion = 'turkey' | 'global';
export type TechnologyCategory = 'programming' | 'sql' | 'hdl' | 'visual';
export type ConfidenceLevel = 'high' | 'medium' | 'low';
export type EvidenceTier = 'strong' | 'moderate' | 'limited';

export interface SourceReference {
  id: string;
  title: string;
  url: string;
  publisher: string;
  publishedAt?: string;
  accessedAt: string;
  kind: 'official' | 'benchmark' | 'survey' | 'market';
}

export interface ScoreEvidence {
  score: number;
  rationale: string;
  sources: SourceReference[];
  updatedAt: string;
  confidence: ConfidenceLevel;
}

export interface TechnologyScores {
  performance: number;
  learning: number;
  ecosystem: number;
  versatility: number;
  developmentSpeed: number;
  careerGlobal: number;
  careerTurkey: number;
}

export interface TechnologySeed {
  id: string;
  name: string;
  color: string;
  philosophy: string;
  pros: string[];
  cons: string[];
  category: TechnologyCategory;
  officialUrl: string;
  evidenceTier: EvidenceTier;
  scores: TechnologyScores;
}

export interface Technology {
  id: string;
  name: string;
  color: string;
  philosophy: string;
  pros: string[];
  cons: string[];
  category: TechnologyCategory;
  metrics: Record<NonCareerMetricKey, ScoreEvidence>;
  career: Record<CareerRegion, ScoreEvidence>;
}

export interface ChartMetric {
  key: MetricKey;
  subject: string;
  score: number;
  fullMark: 100;
}

export interface RubricFactor {
  label: string;
  weight: number;
  description: string;
}

export interface RubricDefinition {
  key: MetricKey;
  label: string;
  description: string;
  factors: RubricFactor[];
}

