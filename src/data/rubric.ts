import type { Locale, RubricDefinition } from '../types';

export const SCORE_BANDS = [
  { min: 90, max: 100, label: 'Lider' },
  { min: 75, max: 89, label: 'Güçlü' },
  { min: 60, max: 74, label: 'Yeterli' },
  { min: 40, max: 59, label: 'Sınırlı' },
  { min: 20, max: 39, label: 'Zayıf' },
  { min: 0, max: 19, label: 'Çok zayıf / deneysel' },
] as const;

export const metricRubrics: RubricDefinition[] = [
  {
    key: 'performance',
    label: 'Performans',
    description: 'Tipik üretim iş yükünde çalışma zamanı verimi; yalnızca dil sözdizimi değil, olgun uygulamalar da değerlendirilir.',
    factors: [
      { label: 'Çalışma süresi / throughput', weight: 45, description: 'Aynı sınıftaki iş yükünde yürütme hızı.' },
      { label: 'Bellek ve başlangıç maliyeti', weight: 30, description: 'Bellek ayak izi, başlatma ve runtime yükü.' },
      { label: 'Öngörülebilirlik', weight: 25, description: 'Gecikme, eşzamanlılık ve performans kontrolü.' },
    ],
  },
  {
    key: 'learning',
    label: 'Öğrenme',
    description: '100 puan daha kolay öğrenmeyi gösterir; ilk üretkenliğe kadar gereken kavramsal ve araçsal yük ölçülür.',
    factors: [
      { label: 'Dil yüzeyi', weight: 35, description: 'Sözdizimi ve temel kavramların sadeliği.' },
      { label: 'Zihinsel model', weight: 35, description: 'Tür, bellek, eşzamanlılık ve hata modelinin yükü.' },
      { label: 'Başlangıç deneyimi', weight: 30, description: 'Kurulum, resmi eğitim ve başlangıç kaynakları.' },
    ],
  },
  {
    key: 'ecosystem',
    label: 'Ekosistem',
    description: 'Kütüphane, araç, dokümantasyon ve sürdürülen topluluk kapsamı birlikte puanlanır.',
    factors: [
      { label: 'Paket ve framework kapsamı', weight: 40, description: 'Üretim ihtiyaçlarını kapsayan sürdürülen çözümler.' },
      { label: 'Araç olgunluğu', weight: 30, description: 'IDE, test, build, paketleme ve gözlemlenebilirlik.' },
      { label: 'Topluluk ve bakım', weight: 30, description: 'Aktif kullanıcı, katkıcı, dokümantasyon ve sürüm sağlığı.' },
    ],
  },
  {
    key: 'versatility',
    label: 'Esneklik',
    description: 'Teknolojinin farklı üretim alanlarına ve hedef platformlara uygunluğu değerlendirilir.',
    factors: [
      { label: 'Uygulama alanı genişliği', weight: 50, description: 'Web, sistem, veri, mobil, masaüstü, gömülü ve bilimsel kullanım.' },
      { label: 'Platform erişimi', weight: 30, description: 'İşletim sistemi, cihaz ve bulut hedefleri.' },
      { label: 'Birlikte çalışabilirlik', weight: 20, description: 'FFI, standartlar ve diğer yığınlarla entegrasyon.' },
    ],
  },
  {
    key: 'developmentSpeed',
    label: 'Geliştirme Hızı',
    description: 'Bir fikri güvenilir çalışan değişikliğe dönüştürme hızıdır; yalnızca yazılan satır sayısı değildir.',
    factors: [
      { label: 'Geri bildirim döngüsü', weight: 35, description: 'Derleme, çalıştırma, hot reload ve test süresi.' },
      { label: 'İfade gücü', weight: 30, description: 'Boilerplate miktarı ve standart kütüphane desteği.' },
      { label: 'Hata önleme ve otomasyon', weight: 35, description: 'Türler, araçlar, test ve dağıtım desteği.' },
    ],
  },
  {
    key: 'career',
    label: 'Kariyer',
    description: 'Türkiye ve Global ayrı hesaplanır; talep, rol çeşitliliği ve pazar yönü aynı ağırlıklarla değerlendirilir.',
    factors: [
      { label: 'Güncel talep', weight: 55, description: 'İlan ve profesyonel kullanım sinyalleri.' },
      { label: 'Rol / sektör genişliği', weight: 25, description: 'Tek becerinin açtığı farklı iş türleri.' },
      { label: 'Yön ve dayanıklılık', weight: 20, description: 'Büyüme, kurumsal taban ve geçici hype riski.' },
    ],
  },
];

const englishScoreBands = [
  { min: 90, max: 100, label: 'Leader' },
  { min: 75, max: 89, label: 'Strong' },
  { min: 60, max: 74, label: 'Capable' },
  { min: 40, max: 59, label: 'Limited' },
  { min: 20, max: 39, label: 'Weak' },
  { min: 0, max: 19, label: 'Very weak / experimental' },
] as const;

const englishRubrics: RubricDefinition[] = [
  {
    key: 'performance',
    label: 'Performance',
    description: 'Runtime efficiency in typical production workloads, considering mature implementations rather than syntax alone.',
    factors: [
      { label: 'Runtime / throughput', weight: 45, description: 'Execution speed within comparable workload classes.' },
      { label: 'Memory and startup cost', weight: 30, description: 'Memory footprint, startup time, and runtime overhead.' },
      { label: 'Predictability', weight: 25, description: 'Latency, concurrency, and performance control.' },
    ],
  },
  {
    key: 'learning',
    label: 'Learning',
    description: 'A higher score means easier learning and a shorter path to initial productivity.',
    factors: [
      { label: 'Language surface', weight: 35, description: 'Simplicity of syntax and core concepts.' },
      { label: 'Mental model', weight: 35, description: 'Complexity of types, memory, concurrency, and errors.' },
      { label: 'Onboarding', weight: 30, description: 'Setup, official education, and beginner resources.' },
    ],
  },
  {
    key: 'ecosystem',
    label: 'Ecosystem',
    description: 'Libraries, tooling, documentation, and sustained community health are scored together.',
    factors: [
      { label: 'Packages and frameworks', weight: 40, description: 'Maintained solutions covering production needs.' },
      { label: 'Tool maturity', weight: 30, description: 'IDE, testing, build, packaging, and observability.' },
      { label: 'Community and maintenance', weight: 30, description: 'Active users, contributors, documentation, and releases.' },
    ],
  },
  {
    key: 'versatility',
    label: 'Versatility',
    description: 'Suitability across production domains and target platforms.',
    factors: [
      { label: 'Domain breadth', weight: 50, description: 'Web, systems, data, mobile, desktop, embedded, and scientific use.' },
      { label: 'Platform reach', weight: 30, description: 'Operating system, device, and cloud targets.' },
      { label: 'Interoperability', weight: 20, description: 'FFI, standards, and integration with other stacks.' },
    ],
  },
  {
    key: 'developmentSpeed',
    label: 'Development Speed',
    description: 'How quickly an idea becomes a reliable working change, not merely how few lines are written.',
    factors: [
      { label: 'Feedback loop', weight: 35, description: 'Build, run, hot reload, and test time.' },
      { label: 'Expressiveness', weight: 30, description: 'Boilerplate and standard-library support.' },
      { label: 'Prevention and automation', weight: 35, description: 'Types, tools, testing, and deployment support.' },
    ],
  },
  {
    key: 'career',
    label: 'Career',
    description: 'Türkiye and Global are scored separately using the same demand, breadth, and durability weights.',
    factors: [
      { label: 'Current demand', weight: 55, description: 'Job-listing and professional-usage signals.' },
      { label: 'Role and sector breadth', weight: 25, description: 'Different jobs opened by the same skill.' },
      { label: 'Direction and durability', weight: 20, description: 'Growth, installed base, and temporary-hype risk.' },
    ],
  },
];

export function getMetricRubrics(locale: Locale): RubricDefinition[] {
  return locale === 'en' ? englishRubrics : metricRubrics;
}

export function getScoreBands(locale: Locale) {
  return locale === 'en' ? englishScoreBands : SCORE_BANDS;
}
