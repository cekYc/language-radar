import type { SourceReference } from '../types';

export const METHODOLOGY_UPDATED_AT = '2026-11-16';

export const sources = {
  benchmarksGame: {
    id: 'benchmarks-game-25-03',
    title: 'Computer Language Benchmarks Game 25.03',
    url: 'https://benchmarksgame-team.pages.debian.net/benchmarksgame/box-plot-summary-charts.html',
    publisher: 'Benchmarks Game',
    accessedAt: METHODOLOGY_UPDATED_AT,
    kind: 'benchmark',
  },
  stackOverflowTechnology: {
    id: 'stack-overflow-2026-technology',
    title: '2026 Developer Survey — Technology',
    url: 'https://survey.stackoverflow.co/2026/technology',
    publisher: 'Stack Overflow',
    publishedAt: '2026-10-06',
    accessedAt: METHODOLOGY_UPDATED_AT,
    kind: 'survey',
  },
  stackOverflowKnowledge: {
    id: 'stack-overflow-2026-knowledge',
    title: '2026 Developer Survey — Knowledge',
    url: 'https://survey.stackoverflow.co/2026/knowledge',
    publisher: 'Stack Overflow',
    publishedAt: '2026-10-06',
    accessedAt: METHODOLOGY_UPDATED_AT,
    kind: 'survey',
  },
  githubOctoverse: {
    id: 'github-octoverse-2026',
    title: 'Octoverse 2026: Commits, pushes reach new highs as developers build with agents',
    url: 'https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/',
    publisher: 'GitHub',
    publishedAt: '2026-10-28',
    accessedAt: METHODOLOGY_UPDATED_AT,
    kind: 'survey',
  },
  tiobeIndex: {
    id: 'tiobe-index-2026-11',
    title: 'TIOBE Index — November 2026',
    url: 'https://www.tiobe.com/tiobe-index/',
    publisher: 'TIOBE',
    publishedAt: '2026-11-01',
    accessedAt: METHODOLOGY_UPDATED_AT,
    kind: 'survey',
  },
  techcareerTurkey: {
    id: 'techcareer-turkey-2025',
    title: 'Yazılımcı Araştırması ve Maaş Raporu 2025',
    url: 'https://cdn.gcp.techcareer.net/Tech_Report_2025_Yazilimci_Arastirmasi_and_Maas_Raporu_Aralik_2025_e064c37a00/Tech_Report_2025_Yazilimci_Arastirmasi_and_Maas_Raporu_Aralik_2025_e064c37a00.pdf',
    publisher: 'Techcareer.net',
    publishedAt: '2025-12-01',
    accessedAt: METHODOLOGY_UPDATED_AT,
    kind: 'market',
  },
  kariyerNet: {
    id: 'kariyer-net-software-roles-2026',
    title: 'Yazılım geliştirme iş ilanları',
    url: 'https://www.kariyer.net/pozisyonlar/yazilim%2Bgelistirme%2Buzmani',
    publisher: 'Kariyer.net',
    accessedAt: METHODOLOGY_UPDATED_AT,
    kind: 'market',
  },
} satisfies Record<string, SourceReference>;

export function officialSource(name: string, url: string): SourceReference {
  return {
    id: `official-${name.toLocaleLowerCase('en-US').replace(/[^a-z0-9]+/g, '-')}`,
    title: `${name} official documentation / standard`,
    url,
    publisher: name,
    accessedAt: METHODOLOGY_UPDATED_AT,
    kind: 'official',
  };
}
