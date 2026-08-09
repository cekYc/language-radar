import type {
  ConfidenceLevel,
  MetricKey,
  ScoreEvidence,
  Technology,
  TechnologySeed,
} from '../types';
import { METHODOLOGY_UPDATED_AT, officialSource, sources } from './sources';
import { technologySeeds } from './technologySeeds';

const performanceBands = [
  'yerel koda çok yakın hız ve güçlü kaynak kontrolü sunuyor',
  'optimize derleme/JIT ile yüksek ve çoğunlukla öngörülebilir hız sunuyor',
  'olgun runtime ile dengeli fakat ölçülebilir ek yük taşıyor',
  'runtime maliyeti hesap yoğun işlerde belirginleşiyor',
  'özel alanı dışında performans sınırları belirgin',
  'eğitimsel/deneysel yürütme modeli üretim performansını hedeflemiyor',
] as const;

const learningBands = [
  'başlangıç akışı ve temel model çok erişilebilir',
  'küçük ve tutarlı bir çekirdekle hızlı öğreniliyor',
  'temeller erişilebilir, üretim ayrıntıları orta düzey yük getiriyor',
  'birden fazla ileri kavram erken aşamada öğrenme yükü oluşturuyor',
  'tür/bellek/çalışma modeli belirgin bir öğrenme eğrisi yaratıyor',
  'uzmanlık gerektiren model ve araçlar başlangıcı zorlaştırıyor',
] as const;

const ecosystemBands = [
  'çok geniş, aktif ve üretimce doğrulanmış araç/paket tabanına sahip',
  'çoğu üretim ihtiyacını karşılayan olgun bir ekosisteme sahip',
  'ana kullanım alanlarında yeterli, uçlarda daha dar bir ekosisteme sahip',
  'temel araçlar var ancak kapsam ve bakım sinyalleri düzensiz',
  'niş topluluk ve sınırlı paket seçeneğiyle ilerliyor',
  'deneysel veya çok küçük bir araç/paket tabanına sahip',
] as const;

const versatilityBands = [
  'çok sayıda üretim alanı ve platformda birinci sınıf seçenek',
  'birden fazla büyük alanda güçlü ve taşınabilir',
  'birkaç alanda güvenilir, bazı hedeflerde ikincil seçenek',
  'belirli alanlarda güçlü fakat genel amaçlı kapsamı sınırlı',
  'tek bir ana alan veya platform çevresinde yoğunlaşıyor',
  'çok dar/deneysel bir kullanım alanına sahip',
] as const;

const developmentBands = [
  'çok kısa geri bildirim döngüsü ve güçlü otomasyon sağlıyor',
  'üretken araçlar, makul güvenlik ve az boilerplate sunuyor',
  'geliştirme akışı yeterli; bazı derleme veya tören maliyetleri var',
  'araç, derleme ya da ayrıntı yükü iterasyonu yavaşlatıyor',
  'yoğun manuel iş ve uzun geri bildirim döngüsü gerektiriyor',
  'üretim geliştirme akışı henüz çok sınırlı',
] as const;

const careerBands = [
  'çok güçlü talep, geniş rol çeşitliliği ve dayanıklı pazar sinyali taşıyor',
  'güçlü talep ve birden fazla istihdam alanı sunuyor',
  'istikrarlı fakat daha odaklı bir iş pazarı sunuyor',
  'niş fırsatlar var; rol ve şirket sayısı sınırlı',
  'az sayıda uzman rolüne veya dalgalı talebe bağlı',
  'henüz anlamlı ve tekrarlanabilir iş talebi oluşturmuyor',
] as const;

const englishBands = {
  performance: [
    'offers near-native speed and strong resource control',
    'delivers high, mostly predictable speed through optimized compilation or JIT',
    'uses a mature runtime with balanced but measurable overhead',
    'shows noticeable runtime cost in compute-intensive workloads',
    'has clear performance limits outside its specialized domain',
    'does not target production runtime performance in its educational or experimental model',
  ],
  learning: [
    'provides a highly accessible onboarding flow and core model',
    'is learned quickly through a small and consistent core',
    'has approachable fundamentals with moderate production-level complexity',
    'introduces several advanced concepts early in the learning path',
    'creates a steep learning curve through its type, memory, or runtime model',
    'requires specialist concepts and tooling from the outset',
  ],
  ecosystem: [
    'has a very broad, active, and production-proven package and tooling base',
    'has a mature ecosystem covering most production needs',
    'is well supported in its main domains but narrower at the edges',
    'has core tools, though coverage and maintenance signals are uneven',
    'depends on a niche community and limited package selection',
    'has an experimental or very small package and tooling base',
  ],
  versatility: [
    'is a first-class option across many production domains and platforms',
    'is strong and portable across several major domains',
    'is reliable in several domains but secondary on some targets',
    'is strong in specific domains with limited general-purpose reach',
    'is concentrated around one primary domain or platform',
    'serves a very narrow or experimental use case',
  ],
  developmentSpeed: [
    'provides a very short feedback loop and strong automation',
    'combines productive tools, reasonable safety, and little boilerplate',
    'has a capable workflow with some build or ceremony cost',
    'is slowed by tooling, build time, or implementation detail',
    'requires substantial manual work and long feedback cycles',
    'still has a very limited production development workflow',
  ],
  career: [
    'has very strong demand, broad role variety, and durable market signals',
    'has strong demand across multiple employment areas',
    'has a stable but more focused job market',
    'offers niche opportunities with limited role and employer breadth',
    'depends on a small number of specialist roles or volatile demand',
    'has not yet formed meaningful and repeatable job demand',
  ],
} as const;

function bandIndex(score: number): number {
  if (score >= 90) return 0;
  if (score >= 75) return 1;
  if (score >= 60) return 2;
  if (score >= 40) return 3;
  if (score >= 20) return 4;
  return 5;
}

function confidenceFor(seed: TechnologySeed, metric: MetricKey, turkey = false): ConfidenceLevel {
  if (turkey) return seed.evidenceTier === 'strong' ? 'medium' : 'low';
  if (metric === 'performance' && seed.category !== 'programming') return 'low';
  if (seed.evidenceTier === 'limited') return 'low';
  if (seed.evidenceTier === 'strong' && ['performance', 'ecosystem', 'career'].includes(metric)) return 'high';
  return 'medium';
}

function evidence(
  seed: TechnologySeed,
  metric: Exclude<MetricKey, 'career'>,
  score: number,
): ScoreEvidence {
  const official = officialSource(seed.name, seed.officialUrl);
  const index = bandIndex(score);
  const descriptions = {
    performance: performanceBands,
    learning: learningBands,
    ecosystem: ecosystemBands,
    versatility: versatilityBands,
    developmentSpeed: developmentBands,
  } as const;
  const metricSources = {
    performance: [official, sources.benchmarksGame],
    learning: [official, sources.stackOverflowDevelopers],
    ecosystem: [official, sources.stackOverflowTechnology, sources.githubOctoverse],
    versatility: [official],
    developmentSpeed: [official, sources.stackOverflowTechnology],
  } as const;

  return {
    score,
    rationale: `${seed.name}, rubrikte ${descriptions[metric][index]}.`,
    rationaleEn: `${seed.name} ${englishBands[metric][index]}.`,
    sources: [...metricSources[metric]],
    updatedAt: METHODOLOGY_UPDATED_AT,
    confidence: confidenceFor(seed, metric),
  };
}

function careerEvidence(seed: TechnologySeed, score: number, turkey: boolean): ScoreEvidence {
  const region = turkey ? 'Türkiye pazarında' : 'global pazarda';
  return {
    score,
    rationale: `${seed.name}, ${region} ${careerBands[bandIndex(score)]}.`,
    rationaleEn: `${seed.name}, in the ${turkey ? 'Türkiye' : 'global'} market, ${englishBands.career[bandIndex(score)]}.`,
    sources: turkey
      ? [sources.techcareerTurkey, sources.kariyerNet, officialSource(seed.name, seed.officialUrl)]
      : [sources.stackOverflowTechnology, sources.githubOctoverse, officialSource(seed.name, seed.officialUrl)],
    updatedAt: METHODOLOGY_UPDATED_AT,
    confidence: confidenceFor(seed, 'career', turkey),
  };
}

function buildTechnology(seed: TechnologySeed): Technology {
  return {
    id: seed.id,
    name: seed.name,
    color: seed.color,
    philosophy: seed.philosophy,
    pros: seed.pros,
    cons: seed.cons,
    category: seed.category,
    metrics: {
      performance: evidence(seed, 'performance', seed.scores.performance),
      learning: evidence(seed, 'learning', seed.scores.learning),
      ecosystem: evidence(seed, 'ecosystem', seed.scores.ecosystem),
      versatility: evidence(seed, 'versatility', seed.scores.versatility),
      developmentSpeed: evidence(seed, 'developmentSpeed', seed.scores.developmentSpeed),
    },
    career: {
      global: careerEvidence(seed, seed.scores.careerGlobal, false),
      turkey: careerEvidence(seed, seed.scores.careerTurkey, true),
    },
  };
}

export const technologies: Technology[] = technologySeeds.map(buildTechnology);
