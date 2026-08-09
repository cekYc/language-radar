# Yazılım Dilleri Radar v2

Programlama dillerini ve ilişkili teknolojileri kaynaklı 0–100 puanlarla inceleyen, radar grafiklerinde karşılaştıran Türkçe React uygulaması.

## v2 ile gelenler

- 59 teknoloji için aynı sabit rubrikle altı metrik
- Her puanda kısa gerekçe, kaynak bağlantısı, güncelleme tarihi ve güven seviyesi
- Türkiye ve Global için ayrı kariyer puanları
- Kalıcı TR/EN seçiciyle Türkçe ve İngilizce arayüz, rubrik ve puan gerekçeleri
- Programlama dilleri, SQL, HDL ve görsel araçlar için ayrı kategoriler
- TypeScript veri modeli ve küçük, sorumluluğu belirli React bileşenleri
- ESLint, Vitest veri bütünlüğü testleri, TypeScript kontrolü ve production build doğrulaması

Mevcut koyu tema, radar kartları, arama, sıralama, üçlü karşılaştırma, responsive düzen ve animasyonlar korunmuştur.

## Puanlama yöntemi

Tüm skorlar `0–100` aralığındadır. Bunlar mutlak ölçüm veya gelecek garantisi değildir; aşağıdaki sabit faktörlerin güncel kaynak sinyallerine uygulanmasıyla oluşturulan karşılaştırmalı karar puanlarıdır.

| Metrik | Sabit ağırlıklar |
| --- | --- |
| Performans | Çalışma süresi/throughput %45, bellek ve başlangıç %30, öngörülebilirlik %25 |
| Öğrenme | Dil yüzeyi %35, zihinsel model %35, başlangıç deneyimi %30 |
| Ekosistem | Paket/framework %40, araç olgunluğu %30, topluluk/bakım %30 |
| Esneklik | Uygulama alanı %50, platform erişimi %30, birlikte çalışabilirlik %20 |
| Geliştirme Hızı | Geri bildirim döngüsü %35, ifade gücü %30, hata önleme/otomasyon %35 |
| Kariyer | Güncel talep %55, rol/ sektör genişliği %25, yön/dayanıklılık %20 |

Sabit bantlar: `90–100 Lider`, `75–89 Güçlü`, `60–74 Yeterli`, `40–59 Sınırlı`, `20–39 Zayıf`, `0–19 Çok zayıf/deneysel`.

Rubriğin çalıştırılabilir tanımı [src/data/rubric.ts](src/data/rubric.ts), puanlar ve kanıt üretimi [src/data/technologies.ts](src/data/technologies.ts), ham değerlendirmeler ise [src/data/technologySeeds.ts](src/data/technologySeeds.ts) içindedir.

## Kaynak yaklaşımı

- Performans karşılaştırmalarında kapsam uygunsa [Computer Language Benchmarks Game](https://benchmarksgame-team.pages.debian.net/benchmarksgame/box-plot-summary-charts.html) ve resmi runtime/standart belgeleri
- Kullanım, ekosistem ve global kariyerde [Stack Overflow 2025 Developer Survey](https://survey.stackoverflow.co/2025/technology) ile [GitHub Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)
- Türkiye kariyerinde [Techcareer.net 2025 Yazılımcı Araştırması](https://cdn.gcp.techcareer.net/Tech_Report_2025_Yazilimci_Arastirmasi_and_Maas_Raporu_Aralik_2025_e064c37a00/Tech_Report_2025_Yazilimci_Arastirmasi_and_Maas_Raporu_Aralik_2025_e064c37a00.pdf) ve yerel ilan sinyalleri
- Her teknoloji için üreticinin resmi dokümantasyonu veya ilgili standart kurumu

Kaynak kapsamı zayıf ya da kategoriler arası doğrudan ölçüm uygun değilse güven seviyesi özellikle `Düşük` tutulur. Değerlendirme tarihi `2026-08-09` olarak her puana kaydedilmiştir.

## Kurulum

Gereksinim: Node.js `^20.19.0` veya `>=22.12.0`.

```bash
npm ci
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde açılır.

## Kalite komutları

```bash
npm run typecheck
npm run lint
npm run test
npm run build

# Hepsini sırasıyla çalıştırır
npm run check
```

Testler 59 kaydın benzersizliğini, dört kategorinin varlığını, tüm puanların 0–100 aralığını, kanıt alanlarının doluluğunu, rubrik ağırlıklarını ve altı eksenli grafik modelini doğrular.

## Proje yapısı

```text
src/
├── App.tsx                  # Sayfa durumu ve bileşen orkestrasyonu
├── components/              # Görsel ve etkileşimli bileşenler
├── data/
│   ├── rubric.ts            # Sabit puanlama rubriği
│   ├── sources.ts           # Ortak güvenilir kaynak kataloğu
│   ├── technologySeeds.ts   # 59 teknoloji için ham değerlendirmeler
│   ├── technologies.ts      # Gerekçe/kaynak/tarih/güven üretimi
│   └── technologies.test.ts # Veri bütünlüğü testleri
├── utils/metrics.ts         # Grafik ve metrik erişim yardımcıları
├── types.ts                 # TypeScript alan modeli
└── main.tsx                 # React giriş noktası
```

## Yeni teknoloji ekleme

1. `TechnologySeed` biçiminde `src/data/technologySeeds.ts` dosyasına kayıt ekleyin.
2. Resmi dokümantasyon bağlantısı ve yedi ham puanı (`5 ortak + Global kariyer + Türkiye kariyer`) doldurun.
3. Aynı rubriği kullanın; kategoriye özel yeni bir ölçek oluşturmayın.
4. `npm run check` çalıştırın.

## Lisans

[MIT](LICENSE)
