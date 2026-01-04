# Yazılım Dilleri Radar

Programlama dillerini interaktif radar grafikleriyle keşfedin, karşılaştırın ve analiz edin.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## Ekran Görüntüsü

<p align="center">
  <img src="screenshot.png" alt="Yazılım Dilleri Radar" width="800">
</p>

## Özellikler

- **58+ Programlama Dili** - Assembly'den Mojo'ya, COBOL'dan Rust'a
- **Radar Grafikleri** - Her dilin 6 metrikte görsel analizi
- **Karşılaştırma** - 3 dile kadar yan yana kıyaslama
- **Arama & Filtreleme** - İsme göre ara, metriğe göre sırala
- **Koyu Tema** - Göz yormayan modern tasarım
- **Responsive** - Mobil ve masaüstü uyumlu

## Değerlendirme Metrikleri

| Metrik | Açıklama |
|--------|----------|
| **Performans** | Çalışma hızı ve verimlilik |
| **Öğrenme** | Öğrenme kolaylığı (10 = çok kolay) |
| **Ekosistem** | Kütüphane, araç ve topluluk zenginliği |
| **Esneklik** | Farklı alanlarda kullanılabilirlik |
| **Geliştirme Hızı** | Prototipleme ve kodlama hızı |
| **Kariyer** | İş piyasasındaki talep |

## Kurulum

```bash
# Repo'yu klonla
git clone https://github.com/cekYc/language-radar.git
cd language-radar

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

## Build

```bash
# Üretim için build al
npm run build

# Build'i önizle
npm run preview
```

## 🛠️ Teknolojiler

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Recharts** - Radar grafikleri
- **Lucide React** - İkonlar

## Proje Yapısı

```
language-radar/
├── src/
│   ├── App.jsx        # Ana uygulama (58 dil verisi + UI)
│   ├── main.jsx       # React entry point
│   └── index.css      # Tailwind imports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Kullanım

1. **Keşfet**: Dil kartlarındaki radar grafiklerini incele
2. **Ara**: Üst kısımdaki arama kutusunu kullan
3. **Sırala**: Dropdown'dan metrik seç (Performans, Öğrenme, vb.)
4. **Karşılaştır**: "Kıyasla" butonlarıyla 3'e kadar dil seç
5. **Analiz Et**: Karşılaştırma panelinde detaylı inceleme yap

## Desteklenen Diller

<details>
<summary>58 Programlama Dili (Tıkla ve gör)</summary>

**Sistem & Düşük Seviye:**
Assembly, C, C++, Rust, Zig, Nim, D, Carbon

**Genel Amaçlı:**
Python, Java, C#, Go, Kotlin, Swift, Dart

**Web & Frontend:**
JavaScript, TypeScript, PHP, Ruby

**Fonksiyonel:**
Haskell, F#, Clojure, OCaml, Elixir, Erlang, Scala, Common Lisp, Gleam

**Bilimsel & Mühendislik:**
MATLAB, Julia, R, Fortran, LabVIEW

**Scripting:**
Lua, Perl, Bash, PowerShell, Tcl/Tk

**Veritabanı:**
SQL, PL/SQL, T-SQL

**Donanım (HDL):**
VHDL, Verilog/SystemVerilog

**Legacy:**
COBOL, Pascal/Delphi, Objective-C, Visual Basic .NET

**Kurumsal/Niş:**
ABAP, Apex, Hack, Prolog, Ada

**Blockchain:**
Solidity

**Yeni Nesil:**
Mojo, V, Crystal, Raku

**Eğitim:**
Scratch

</details>

## Katkıda Bulunma

1. Fork'la
2. Feature branch oluştur (`git checkout -b feature/yeni-dil`)
3. Commit'le (`git commit -m 'Yeni dil eklendi: X'`)
4. Push'la (`git push origin feature/yeni-dil`)
5. Pull Request aç

### Yeni Dil Ekleme

`src/App.jsx` içindeki `languagesData` dizisine şu formatta ekle:

```javascript
{
  id: 'dil-id',
  name: 'Dil Adı',
  color: '#hex-renk',
  philosophy: "Dilin felsefesi",
  pros: ['Artı 1', 'Artı 2', 'Artı 3'],
  cons: ['Eksi 1', 'Eksi 2', 'Eksi 3'],
  metrics: [
    { subject: 'Performans', A: 7, fullMark: 10 },
    { subject: 'Öğrenme', A: 6, fullMark: 10 },
    { subject: 'Ekosistem', A: 5, fullMark: 10 },
    { subject: 'Esneklik', A: 5, fullMark: 10 },
    { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
    { subject: 'Kariyer', A: 5, fullMark: 10 },
  ]
}
```

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## Teşekkürler

- [Recharts](https://recharts.org/) - Harika grafik kütüphanesi
- [Lucide](https://lucide.dev/) - Güzel ikonlar
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

---

<p align="center">
 Beğendiysen yıldız vermeyi unutma!
</p>
