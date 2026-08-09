import type { RubricDefinition } from '../types';

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

