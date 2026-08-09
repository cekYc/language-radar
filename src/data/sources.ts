import type { SourceReference } from '../types';

export const METHODOLOGY_UPDATED_AT = '2026-08-09';

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
    id: 'stack-overflow-2025-technology',
    title: '2025 Developer Survey — Technology',
    url: 'https://survey.stackoverflow.co/2025/technology',
    publisher: 'Stack Overflow',
    accessedAt: METHODOLOGY_UPDATED_AT,
    kind: 'survey',
  },
  stackOverflowDevelopers: {
    id: 'stack-overflow-2025-developers',
    title: '2025 Developer Survey — Developers',
    url: 'https://survey.stackoverflow.co/2025/developers',
    publisher: 'Stack Overflow',
    accessedAt: METHODOLOGY_UPDATED_AT,
    kind: 'survey',
  },
  githubOctoverse: {
    id: 'github-octoverse-2025',
    title: 'Octoverse 2025: TypeScript to #1',
    url: 'https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/',
    publisher: 'GitHub',
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
