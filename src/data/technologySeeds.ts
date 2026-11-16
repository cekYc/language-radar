import type { TechnologySeed } from '../types';

export const technologySeeds = [
  {
    "id": "assembly",
    "name": "Assembly",
    "color": "#E040FB",
    "philosophy": "Makineyle birebir konuş. Arada kimse yok.",
    "pros": [
      "Teorik olarak mümkün olan en yüksek performans",
      "Donanımın her bir bitine tam hakimiyet",
      "İşletim sistemi çekirdekleri ve bootloader yazımı"
    ],
    "cons": [
      "Öğrenmesi ve yazması son derece zor",
      "Taşınabilir değil (İşlemci mimarisine bağımlı)",
      "Geliştirme hızı çok düşük"
    ],
    "category": "programming",
    "officialUrl": "https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html",
    "evidenceTier": "limited",
    "scores": {
      "performance": 98,
      "learning": 15,
      "ecosystem": 45,
      "versatility": 25,
      "developmentSpeed": 12,
      "careerGlobal": 45,
      "careerTurkey": 35
    }
  },
  {
    "id": "c",
    "name": "C",
    "color": "#A8B9CC",
    "philosophy": "Basit, hızlı ve taşınabilir assembler. Modern dünyanın temeli.",
    "pros": [
      "Gömülü sistemlerin (Arduino vb.) tartışmasız kralı",
      "Çok hafif ve hızlı",
      "İşletim sistemlerinin (Linux, Windows) yazıldığı dil"
    ],
    "cons": [
      "Manuel bellek yönetimi (Malloc/Free) hataya açık",
      "Nesne Yönelimli Programlama (OOP) desteği yok",
      "Güvenlik açıkları oluşturmak kolay (Buffer Overflow)"
    ],
    "category": "programming",
    "officialUrl": "https://www.open-std.org/jtc1/sc22/wg14/",
    "evidenceTier": "strong",
    "scores": {
      "performance": 96,
      "learning": 42,
      "ecosystem": 86,
      "versatility": 78,
      "developmentSpeed": 42,
      "careerGlobal": 78,
      "careerTurkey": 78
    }
  },
  {
    "id": "cpp",
    "name": "C++",
    "color": "#00599C",
    "philosophy": "Kullanmadığın şeyin bedelini ödeme. Donanıma tam hakimiyet.",
    "pros": [
      "Eşsiz performans ve donanım kontrolü",
      "Oyun motorları ve Gömülü sistemler için kral",
      "Kaynak yönetimi üzerinde tam yetki"
    ],
    "cons": [
      "Öğrenme eğrisi çok dik",
      "Bellek hataları (Pointer yönetimi) zorlu",
      "Derleme süreleri uzun"
    ],
    "category": "programming",
    "officialUrl": "https://isocpp.org/",
    "evidenceTier": "strong",
    "scores": {
      "performance": 95,
      "learning": 26,
      "ecosystem": 90,
      "versatility": 90,
      "developmentSpeed": 40,
      "careerGlobal": 84,
      "careerTurkey": 82
    }
  },
  {
    "id": "rust",
    "name": "Rust",
    "color": "#dea584",
    "philosophy": "Hafıza güvenliği performansla buluşuyor. Garbage Collector yok.",
    "pros": [
      "Bellek güvenliği garantisi (Borrow Checker)",
      "C++ seviyesinde performans",
      "Harika araçlar (Cargo) ve modern sözdizimi"
    ],
    "cons": [
      "Öğrenme eğrisi oldukça dik",
      "Derleme süreleri yavaş olabilir",
      "İş piyasası diğerlerine göre daha dar ama büyüyor"
    ],
    "category": "programming",
    "officialUrl": "https://www.rust-lang.org/learn",
    "evidenceTier": "strong",
    "scores": {
      "performance": 94,
      "learning": 30,
      "ecosystem": 87,
      "versatility": 85,
      "developmentSpeed": 60,
      "careerGlobal": 78,
      "careerTurkey": 42
    }
  },
  {
    "id": "python",
    "name": "Python",
    "color": "#306998",
    "philosophy": "Okunabilirlik önemlidir. Basit, karmaşıktan daha iyidir.",
    "pros": [
      "Öğrenmesi çok kolay ve sözdizimi temiz",
      "Yapay Zeka ve Veri Bilimi dominasyonu",
      "Muazzam kütüphane ekosistemi"
    ],
    "cons": [
      "Derlenen dillere (C++/Rust) göre yavaş",
      "Mobil geliştirmede zayıf",
      "GIL'siz (free-threaded) derleme artık resmî, ancak paket ve araç desteği hâlâ olgunlaşıyor"
    ],
    "category": "programming",
    "officialUrl": "https://docs.python.org/3/",
    "evidenceTier": "strong",
    "scores": {
      "performance": 47,
      "learning": 92,
      "ecosystem": 99,
      "versatility": 93,
      "developmentSpeed": 94,
      "careerGlobal": 96,
      "careerTurkey": 90
    }
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "color": "#F7DF1E",
    "philosophy": "Web'in dili. Her yerde çalışır (Tarayıcı, Sunucu, Mobil).",
    "pros": [
      "Her modern web tarayıcısında çalışır",
      "Full-stack imkanı (Node.js)",
      "Devasa topluluk ve NPM paketi"
    ],
    "cons": [
      "Tür güvenliği eksikliği (TypeScript olmadan)",
      "Hızlı değişen framework dünyası (JS Fatigue)",
      "Garip tip dönüşümleri"
    ],
    "category": "programming",
    "officialUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "evidenceTier": "strong",
    "scores": {
      "performance": 68,
      "learning": 75,
      "ecosystem": 100,
      "versatility": 95,
      "developmentSpeed": 88,
      "careerGlobal": 90,
      "careerTurkey": 90
    }
  },
  {
    "id": "java",
    "name": "Java",
    "color": "#b07219",
    "philosophy": "Bir kez yaz, her yerde çalıştır. Kurumsal sağlamlık.",
    "pros": [
      "Platform bağımsız (JVM)",
      "Güçlü bellek yönetimi ve Type sistemi",
      "Kurumsal dünyada standart"
    ],
    "cons": [
      "Çok fazla \"boilerplate\" (gereksiz) kod",
      "Modern dillere göre hantal başlangıç",
      "Bellek tüketimi yüksek olabilir"
    ],
    "category": "programming",
    "officialUrl": "https://dev.java/learn/",
    "evidenceTier": "strong",
    "scores": {
      "performance": 81,
      "learning": 62,
      "ecosystem": 96,
      "versatility": 86,
      "developmentSpeed": 76,
      "careerGlobal": 87,
      "careerTurkey": 91
    }
  },
  {
    "id": "go",
    "name": "Go (Golang)",
    "color": "#00ADD8",
    "philosophy": "Basitlik karmaşıklıktan iyidir. Ölçeklenebilir sistemler için.",
    "pros": [
      "Muazzam Concurrency (Eşzamanlılık) desteği",
      "Çok hızlı derleme ve çalıştırma",
      "Öğrenmesi ve okuması çok basit"
    ],
    "cons": [
      "Hata yönetimi ve açık kontrol akışı yer yer tekrar üretebilir",
      "Kütüphane ekosistemi Java/JS kadar geniş değil",
      "UI/GUI geliştirme için zayıf"
    ],
    "category": "programming",
    "officialUrl": "https://go.dev/doc/",
    "evidenceTier": "strong",
    "scores": {
      "performance": 86,
      "learning": 80,
      "ecosystem": 87,
      "versatility": 76,
      "developmentSpeed": 86,
      "careerGlobal": 82,
      "careerTurkey": 66
    }
  },
  {
    "id": "csharp",
    "name": "C#",
    "color": "#178600",
    "philosophy": "Verimlilik ve güç. .NET ekosisteminin amiral gemisi.",
    "pros": [
      "Güçlü IDE desteği (Visual Studio)",
      "Oyun geliştirme (Unity) için standart",
      "Kurumsal backend ve web için çok kararlı"
    ],
    "cons": [
      "Windows odaklı geçmiş (Core ile değişti ama algı sürüyor)",
      "Ağır çalışma zamanı (Runtime)",
      "Linux ekosisteminde ikinci sınıf vatandaş algısı"
    ],
    "category": "programming",
    "officialUrl": "https://learn.microsoft.com/dotnet/csharp/",
    "evidenceTier": "strong",
    "scores": {
      "performance": 84,
      "learning": 66,
      "ecosystem": 94,
      "versatility": 90,
      "developmentSpeed": 86,
      "careerGlobal": 85,
      "careerTurkey": 94
    }
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "color": "#3178C6",
    "philosophy": "JavaScript ama ölçeklenebilir. Tür güvenliği her şeydir.",
    "pros": [
      "Büyük projelerde hata yakalamayı kolaylaştırır",
      "TypeScript 7 yerel derleyicisiyle çok daha hızlı tip denetimi ve derleme",
      "JS ekosisteminin tamamını kullanabilir"
    ],
    "cons": [
      "Tür tanımları bazen karmaşıklaşabilir",
      "TS 7'de kararlı programatik API henüz yok; bazı araçlar eski sürümde kalıyor",
      "Kurulumu JS'e göre bir tık daha zahmetli"
    ],
    "category": "programming",
    "officialUrl": "https://www.typescriptlang.org/docs/",
    "evidenceTier": "strong",
    "scores": {
      "performance": 68,
      "learning": 64,
      "ecosystem": 100,
      "versatility": 95,
      "developmentSpeed": 92,
      "careerGlobal": 94,
      "careerTurkey": 89
    }
  },
  {
    "id": "php",
    "name": "PHP",
    "color": "#4F5D95",
    "philosophy": "Web için tasarlandı. İşi çabuk ve pratik şekilde hallet.",
    "pros": [
      "Kurulumu ve barındırması (Hosting) çok ucuz/kolay",
      "WordPress ve Laravel sayesinde devasa ekosistem",
      "Web için özel olarak üretilmiş"
    ],
    "cons": [
      "Tutarsız fonksiyon isimlendirmeleri",
      "Eski sürümlerden kalan kötü şöhret",
      "Uzun süre çalışan (Long-running) işlemler için ideal değil"
    ],
    "category": "programming",
    "officialUrl": "https://www.php.net/docs.php",
    "evidenceTier": "strong",
    "scores": {
      "performance": 63,
      "learning": 80,
      "ecosystem": 90,
      "versatility": 58,
      "developmentSpeed": 88,
      "careerGlobal": 70,
      "careerTurkey": 72
    }
  },
  {
    "id": "swift",
    "name": "Swift",
    "color": "#F05138",
    "philosophy": "Güvenli, Hızlı, Etkileşimli. Apple dünyasının modern yüzü.",
    "pros": [
      "iOS/macOS için optimize edilmiş yüksek performans",
      "Objective-C'ye göre çok daha güvenli ve modern",
      "Okunabilirliği yüksek"
    ],
    "cons": [
      "Apple ekosistemi dışında (Server-side vb.) zayıf",
      "Dil özellikleri sık değişebiliyor",
      "Sadece Mac donanımında tam verimli geliştiriliyor"
    ],
    "category": "programming",
    "officialUrl": "https://www.swift.org/documentation/",
    "evidenceTier": "strong",
    "scores": {
      "performance": 85,
      "learning": 68,
      "ecosystem": 82,
      "versatility": 66,
      "developmentSpeed": 78,
      "careerGlobal": 72,
      "careerTurkey": 64
    }
  },
  {
    "id": "kotlin",
    "name": "Kotlin",
    "color": "#7F52FF",
    "philosophy": "Daha iyi bir Java. Kısa, güvenli ve %100 uyumlu.",
    "pros": [
      "Android geliştirmede Google'ın önerdiği standart",
      "Java kodlarıyla tamamen uyumlu çalışır",
      "NullPointer hatalarını büyük ölçüde engeller"
    ],
    "cons": [
      "Derleme hızı Java'dan biraz daha yavaş olabilir",
      "Java kadar devasa bir kaynak geçmişi yok (ama artıyor)",
      "Backend tarafında Java kadar yaygın değil"
    ],
    "category": "programming",
    "officialUrl": "https://kotlinlang.org/docs/home.html",
    "evidenceTier": "strong",
    "scores": {
      "performance": 80,
      "learning": 70,
      "ecosystem": 88,
      "versatility": 82,
      "developmentSpeed": 86,
      "careerGlobal": 76,
      "careerTurkey": 72
    }
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "color": "#CC342D",
    "philosophy": "Yazılımcı mutluluğu için tasarlandı. En az sürpriz ilkesi.",
    "pros": [
      "Okuması neredeyse İngilizce cümleler kadar kolay",
      "Ruby on Rails ile çok hızlı MVP/Ürün çıkarma",
      "Güçlü ve esnek metaprogramming"
    ],
    "cons": [
      "Çalışma hızı (Runtime) diğer modern dillere göre yavaş",
      "Popülaritesi 2010'lara göre düşüşte",
      "Büyük ölçekte performans darboğazları olabilir"
    ],
    "category": "programming",
    "officialUrl": "https://www.ruby-lang.org/en/documentation/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 57,
      "learning": 82,
      "ecosystem": 84,
      "versatility": 62,
      "developmentSpeed": 92,
      "careerGlobal": 56,
      "careerTurkey": 32
    }
  },
  {
    "id": "dart",
    "name": "Dart",
    "color": "#00B4AB",
    "philosophy": "Her ekranda hızlı, güzel uygulamalar (Flutter).",
    "pros": [
      "Flutter ile tek kod tabanıyla Mobil, Web ve Masaüstü",
      "Hot Reload özelliği ile anında görsel sonuç",
      "C tarzı dilleri bilenler için öğrenmesi kolay"
    ],
    "cons": [
      "Flutter dışında genel amaçlı kullanımı çok az",
      "Backend ekosistemi zayıf",
      "Dilin kaderi büyük ölçüde Google'a ve Flutter'a bağlı"
    ],
    "category": "programming",
    "officialUrl": "https://dart.dev/guides",
    "evidenceTier": "strong",
    "scores": {
      "performance": 76,
      "learning": 76,
      "ecosystem": 78,
      "versatility": 68,
      "developmentSpeed": 90,
      "careerGlobal": 66,
      "careerTurkey": 70
    }
  },
  {
    "id": "sql",
    "name": "SQL",
    "color": "#e34c26",
    "philosophy": "Veriye hükmet. Ne istediğini söyle, nasıl yapılacağını değil.",
    "pros": [
      "Veritabanı işlemlerinde dünya standardı",
      "Deklaratif yapısı (Ne yapılacağını yazarsın)",
      "Neredeyse her backend işinde gerekli"
    ],
    "cons": [
      "Prosedürel akışlar için kısıtlı",
      "Farklı motorlar (MySQL, PostgreSQL) arası lehçe farkları",
      "Versiyonlaması zor"
    ],
    "category": "sql",
    "officialUrl": "https://www.iso.org/standard/76583.html",
    "evidenceTier": "strong",
    "scores": {
      "performance": 85,
      "learning": 72,
      "ecosystem": 97,
      "versatility": 58,
      "developmentSpeed": 84,
      "careerGlobal": 93,
      "careerTurkey": 95
    }
  },
  {
    "id": "r",
    "name": "R",
    "color": "#276DC3",
    "philosophy": "İstatistikçiler tarafından, istatistik için tasarlandı.",
    "pros": [
      "İstatistiksel analiz ve veri görselleştirmede (ggplot2) zirve",
      "Akademik araştırmaların standardı",
      "Güçlü CRAN paket sistemi"
    ],
    "cons": [
      "Genel amaçlı yazılım geliştirme için hantal",
      "Bellek yönetimi verimsiz olabilir",
      "Sözdizimi yazılımcılara garip gelebilir"
    ],
    "category": "programming",
    "officialUrl": "https://www.r-project.org/other-docs.html",
    "evidenceTier": "strong",
    "scores": {
      "performance": 44,
      "learning": 62,
      "ecosystem": 85,
      "versatility": 45,
      "developmentSpeed": 84,
      "careerGlobal": 64,
      "careerTurkey": 45
    }
  },
  {
    "id": "scala",
    "name": "Scala",
    "color": "#DC322F",
    "philosophy": "Nesne yönelimli ve Fonksiyonel paradigmanın güçlü birleşimi.",
    "pros": [
      "JVM üzerinde çalışır, Java kütüphanelerini kullanır",
      "Spark ile Büyük Veri işlemede çok güçlü",
      "Az kodla çok iş (concise)"
    ],
    "cons": [
      "Derleme süreleri oldukça yavaş",
      "Öğrenme eğrisi Java'dan çok daha dik",
      "Karmaşık sözdizimi bazen okunabilirliği düşürür"
    ],
    "category": "programming",
    "officialUrl": "https://docs.scala-lang.org/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 79,
      "learning": 35,
      "ecosystem": 82,
      "versatility": 68,
      "developmentSpeed": 62,
      "careerGlobal": 60,
      "careerTurkey": 42
    }
  },
  {
    "id": "elixir",
    "name": "Elixir",
    "color": "#4e2a8e",
    "philosophy": "Ölçeklenebilir, dağıtık ve hataya dayanıklı sistemler.",
    "pros": [
      "Muazzam eşzamanlılık (Erlang VM üzerinde)",
      "Phoenix framework ile çok hızlı gerçek zamanlı web",
      "Fonksiyonel ve temiz sözdizimi"
    ],
    "cons": [
      "Nispeten küçük bir topluluk",
      "Sayısal hesaplamalar/işlemci yükü yüksek işler için yavaş",
      "İş ilanları az ama maaşlar yüksek"
    ],
    "category": "programming",
    "officialUrl": "https://elixir-lang.org/docs.html",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 70,
      "learning": 58,
      "ecosystem": 78,
      "versatility": 62,
      "developmentSpeed": 85,
      "careerGlobal": 58,
      "careerTurkey": 22
    }
  },
  {
    "id": "haskell",
    "name": "Haskell",
    "color": "#5e5086",
    "philosophy": "Saflık ve matematiksel doğruluk. Yan etki (Side-effect) yok.",
    "pros": [
      "Hata yapması zor (Çok güçlü tip sistemi)",
      "Akademik ve finansal kritik sistemlerde güvenilir",
      "Programlama ufkunu genişletir"
    ],
    "cons": [
      "Öğrenmesi en zor dillerden biri (Monadlar vs.)",
      "Pratik iş dünyasında kullanımı sınırlı",
      "Lazy evaluation performans tahmini zordur"
    ],
    "category": "programming",
    "officialUrl": "https://www.haskell.org/documentation/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 74,
      "learning": 24,
      "ecosystem": 70,
      "versatility": 58,
      "developmentSpeed": 55,
      "careerGlobal": 46,
      "careerTurkey": 12
    }
  },
  {
    "id": "lua",
    "name": "Lua",
    "color": "#000080",
    "philosophy": "Küçük, hızlı ve her yere gömülebilir (Embedded).",
    "pros": [
      "İnanılmaz hafif ve hızlı entegrasyon",
      "Oyun dünyası (Roblox, WoW) standardı",
      "C/C++ projelerine betik dili olarak eklemek çok kolay"
    ],
    "cons": [
      "Diziler 1'den başlar (alışkanlıkları bozar)",
      "Kendi başına büyük uygulama geliştirmek zordur",
      "Standart kütüphanesi çok sınırlı"
    ],
    "category": "programming",
    "officialUrl": "https://www.lua.org/docs.html",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 74,
      "learning": 88,
      "ecosystem": 70,
      "versatility": 64,
      "developmentSpeed": 86,
      "careerGlobal": 54,
      "careerTurkey": 22
    }
  },
  {
    "id": "objectivec",
    "name": "Objective-C",
    "color": "#438eff",
    "philosophy": "C'ye Smalltalk mesajlaşması ekle. Apple'ın eski gücü.",
    "pros": [
      "iOS/macOS için hala geçerli (eski projeler)",
      "C ile tam uyumlu",
      "Dinamik runtime özellikleri"
    ],
    "cons": [
      "Swift tarafından büyük ölçüde yerini aldı",
      "Sözdizimi çok garip ve eski",
      "Yeni projeler için önerilmiyor"
    ],
    "category": "programming",
    "officialUrl": "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/",
    "evidenceTier": "limited",
    "scores": {
      "performance": 80,
      "learning": 40,
      "ecosystem": 66,
      "versatility": 40,
      "developmentSpeed": 52,
      "careerGlobal": 42,
      "careerTurkey": 25
    }
  },
  {
    "id": "perl",
    "name": "Perl",
    "color": "#39457E",
    "philosophy": "Birden fazla yol var. Metin işlemenin İsviçre çakısı.",
    "pros": [
      "Regex ve metin işlemede efsane",
      "Unix/Linux sistem yönetiminde köklü",
      "CPAN ile devasa modül arşivi"
    ],
    "cons": [
      "Okunması zor \"write-only\" kod",
      "Modern alternatifler (Python) tarafından gölgelendi",
      "Topluluk küçülüyor"
    ],
    "category": "programming",
    "officialUrl": "https://perldoc.perl.org/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 55,
      "learning": 48,
      "ecosystem": 72,
      "versatility": 58,
      "developmentSpeed": 72,
      "careerGlobal": 42,
      "careerTurkey": 20
    }
  },
  {
    "id": "matlab",
    "name": "MATLAB",
    "color": "#e16737",
    "philosophy": "Mühendisler için sayısal hesaplama. Matrisler her şeydir.",
    "pros": [
      "Mühendislik ve akademide standart",
      "Simulink ile simülasyon gücü",
      "Sinyal işleme ve kontrol sistemlerinde rakipsiz"
    ],
    "cons": [
      "Çok pahalı lisans",
      "Genel amaçlı programlama için uygun değil",
      "Açık kaynak alternatifleri (Python/Julia) yükseliyor"
    ],
    "category": "programming",
    "officialUrl": "https://www.mathworks.com/help/matlab/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 70,
      "learning": 78,
      "ecosystem": 88,
      "versatility": 45,
      "developmentSpeed": 86,
      "careerGlobal": 62,
      "careerTurkey": 66
    }
  },
  {
    "id": "fortran",
    "name": "Fortran",
    "color": "#734f96",
    "philosophy": "İlk yüksek seviyeli dil. Bilimsel hesaplamanın dedesi.",
    "pros": [
      "Sayısal hesaplamada hala en hızlılardan",
      "Süper bilgisayarlarda yaygın",
      "60+ yıllık optimize edilmiş kütüphaneler"
    ],
    "cons": [
      "Modern yazılım geliştirme pratiklerinden uzak",
      "Yeni nesil için çekici değil",
      "Web/mobil gibi alanlarda kullanılmaz"
    ],
    "category": "programming",
    "officialUrl": "https://fortran-lang.org/learn/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 92,
      "learning": 48,
      "ecosystem": 66,
      "versatility": 35,
      "developmentSpeed": 48,
      "careerGlobal": 48,
      "careerTurkey": 25
    }
  },
  {
    "id": "cobol",
    "name": "COBOL",
    "color": "#005ca5",
    "philosophy": "İş dünyası için tasarlandı. Bankalar hala buna bağımlı.",
    "pros": [
      "Finans ve bankacılık sistemlerinin temeli",
      "İnanılmaz geriye uyumluluk",
      "Legacy sistemlerde iş garantisi"
    ],
    "cons": [
      "Çok eski ve hantal sözdizimi",
      "Yeni geliştirici bulmak zor",
      "Sadece bakım işleri için geçerli"
    ],
    "category": "programming",
    "officialUrl": "https://www.iso.org/standard/74527.html",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 70,
      "learning": 45,
      "ecosystem": 58,
      "versatility": 25,
      "developmentSpeed": 38,
      "careerGlobal": 55,
      "careerTurkey": 45
    }
  },
  {
    "id": "vbnet",
    "name": "Visual Basic .NET",
    "color": "#945db7",
    "philosophy": "Programlamayı herkes için erişilebilir kıl.",
    "pros": [
      "Başlangıç için çok kolay",
      "Windows Forms ile hızlı GUI",
      ".NET ekosisteminin tamamına erişim"
    ],
    "cons": [
      "C# tarafından gölgelendi",
      "Profesyonel dünyada ciddiye alınmıyor",
      "Microsoft desteği azalıyor"
    ],
    "category": "programming",
    "officialUrl": "https://learn.microsoft.com/dotnet/visual-basic/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 80,
      "learning": 80,
      "ecosystem": 78,
      "versatility": 58,
      "developmentSpeed": 80,
      "careerGlobal": 45,
      "careerTurkey": 48
    }
  },
  {
    "id": "fsharp",
    "name": "F#",
    "color": "#b845fc",
    "philosophy": "Fonksiyonel öncelikli, pratik sonuçlar. ML ailesinin .NET üyesi.",
    "pros": [
      "Tip çıkarımı ve pattern matching harika",
      "Finansal modelleme için ideal",
      "C# ile sorunsuz entegrasyon"
    ],
    "cons": [
      "Topluluk C# yanında çok küçük",
      "İş ilanları sınırlı",
      "Öğrenme eğrisi OOP'den gelenlere dik"
    ],
    "category": "programming",
    "officialUrl": "https://learn.microsoft.com/dotnet/fsharp/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 80,
      "learning": 50,
      "ecosystem": 78,
      "versatility": 68,
      "developmentSpeed": 80,
      "careerGlobal": 45,
      "careerTurkey": 15
    }
  },
  {
    "id": "clojure",
    "name": "Clojure",
    "color": "#5881d8",
    "philosophy": "Modern Lisp. Değişmezlik (Immutability) ve basitlik.",
    "pros": [
      "JVM üzerinde Lisp gücü",
      "Eşzamanlılık için mükemmel tasarım",
      "ClojureScript ile frontend de yazılır"
    ],
    "cons": [
      "Lisp parantezleri herkese göre değil",
      "Hata mesajları kötü",
      "Startup süresi yavaş"
    ],
    "category": "programming",
    "officialUrl": "https://clojure.org/guides/getting_started",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 70,
      "learning": 42,
      "ecosystem": 74,
      "versatility": 66,
      "developmentSpeed": 82,
      "careerGlobal": 46,
      "careerTurkey": 12
    }
  },
  {
    "id": "groovy",
    "name": "Groovy",
    "color": "#4298b8",
    "philosophy": "Java ama daha az seremoni. Dinamik ve pragmatik.",
    "pros": [
      "Java ile %100 uyumlu",
      "Gradle build aracının dili",
      "Scripting için Java'dan çok daha pratik"
    ],
    "cons": [
      "Kotlin tarafından gölgelendi",
      "Performans Java'dan düşük",
      "Tip güvenliği zayıf"
    ],
    "category": "programming",
    "officialUrl": "https://groovy-lang.org/documentation.html",
    "evidenceTier": "limited",
    "scores": {
      "performance": 67,
      "learning": 72,
      "ecosystem": 76,
      "versatility": 60,
      "developmentSpeed": 80,
      "careerGlobal": 48,
      "careerTurkey": 35
    }
  },
  {
    "id": "julia",
    "name": "Julia",
    "color": "#9558b2",
    "philosophy": "Python'un kolaylığı, C'nin hızı. Bilimsel hesaplama için.",
    "pros": [
      "Bilimsel hesaplamada Python'a rakip hız",
      "Matematiksel sözdizimi çok doğal",
      "Paralel hesaplama desteği güçlü"
    ],
    "cons": [
      "Ekosistem henüz olgunlaşmadı",
      "İlk çalıştırma (JIT) süresi uzun",
      "Genel amaçlı kullanım için erken"
    ],
    "category": "programming",
    "officialUrl": "https://docs.julialang.org/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 82,
      "learning": 70,
      "ecosystem": 74,
      "versatility": 55,
      "developmentSpeed": 82,
      "careerGlobal": 50,
      "careerTurkey": 18
    }
  },
  {
    "id": "zig",
    "name": "Zig",
    "color": "#f7a41d",
    "philosophy": "C'nin gücü, modern güvenlik. Gizli davranış yok.",
    "pros": [
      "C ile doğrudan entegrasyon",
      "Derleme zamanı hesaplama çok güçlü",
      "LLVM backend ile yüksek performans"
    ],
    "cons": [
      "Hâlâ 1.0 değil; sürümler arası kırıcı değişiklikler sürüyor",
      "Ekosistem küçük ve araçlar (dil sunucusu dahil) sürümlere geç yetişiyor",
      "Dokümantasyon eksik"
    ],
    "category": "programming",
    "officialUrl": "https://ziglang.org/documentation/master/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 93,
      "learning": 42,
      "ecosystem": 60,
      "versatility": 68,
      "developmentSpeed": 56,
      "careerGlobal": 44,
      "careerTurkey": 10
    }
  },
  {
    "id": "nim",
    "name": "Nim",
    "color": "#ffe953",
    "philosophy": "Python gibi yaz, C gibi çalıştır.",
    "pros": [
      "Python benzeri temiz sözdizimi",
      "C/C++/JS'e derlenir",
      "Metaprogramming çok güçlü"
    ],
    "cons": [
      "Topluluk çok küçük",
      "Kütüphane ekosistemi sınırlı",
      "İş piyasasında neredeyse yok"
    ],
    "category": "programming",
    "officialUrl": "https://nim-lang.org/documentation.html",
    "evidenceTier": "limited",
    "scores": {
      "performance": 86,
      "learning": 68,
      "ecosystem": 50,
      "versatility": 66,
      "developmentSpeed": 74,
      "careerGlobal": 25,
      "careerTurkey": 5
    }
  },
  {
    "id": "crystal",
    "name": "Crystal",
    "color": "#000000",
    "philosophy": "Ruby gibi yaz, C gibi hızlı çalıştır.",
    "pros": [
      "Ruby sözdiziminin güzelliği",
      "Statik tip sistemi ile güvenlik",
      "Derlenen dil performansı"
    ],
    "cons": [
      "Windows desteği zayıf",
      "Topluluk küçük",
      "Olgunlaşma aşamasında"
    ],
    "category": "programming",
    "officialUrl": "https://crystal-lang.org/reference/",
    "evidenceTier": "limited",
    "scores": {
      "performance": 84,
      "learning": 72,
      "ecosystem": 48,
      "versatility": 52,
      "developmentSpeed": 72,
      "careerGlobal": 24,
      "careerTurkey": 5
    }
  },
  {
    "id": "ocaml",
    "name": "OCaml",
    "color": "#ec6813",
    "philosophy": "Pratik fonksiyonel programlama. Tip sistemi efsanesi.",
    "pros": [
      "Çok güçlü tip çıkarımı",
      "Derleme hızı inanılmaz",
      "Facebook'un Hack ve Flow'unun temeli"
    ],
    "cons": [
      "Topluluk küçük",
      "Tooling modern dillere göre zayıf",
      "Paradigma değişikliği gerektirir"
    ],
    "category": "programming",
    "officialUrl": "https://ocaml.org/docs",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 84,
      "learning": 40,
      "ecosystem": 68,
      "versatility": 62,
      "developmentSpeed": 72,
      "careerGlobal": 46,
      "careerTurkey": 8
    }
  },
  {
    "id": "erlang",
    "name": "Erlang",
    "color": "#a90533",
    "philosophy": "Telekomünikasyon güvenilirliği. Hata toleransı her şeydir.",
    "pros": [
      "%99.9999999 uptime için tasarlandı (Ericsson)",
      "Hot code swapping - sistem durmadan güncelleme",
      "Dağıtık sistemlerde efsane"
    ],
    "cons": [
      "Sözdizimi çok farklı ve garip",
      "Genel amaçlı kullanım için uygun değil",
      "Öğrenme kaynakları sınırlı"
    ],
    "category": "programming",
    "officialUrl": "https://www.erlang.org/docs",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 70,
      "learning": 42,
      "ecosystem": 72,
      "versatility": 55,
      "developmentSpeed": 70,
      "careerGlobal": 48,
      "careerTurkey": 20
    }
  },
  {
    "id": "lisp",
    "name": "Common Lisp",
    "color": "#3fb68b",
    "philosophy": "Kod veridir, veri koddur. Programlanabilir programlama dili.",
    "pros": [
      "Makro sistemi ile dili genişletme gücü",
      "REPL odaklı geliştirme deneyimi",
      "AI araştırmalarının tarihsel dili"
    ],
    "cons": [
      "Parantez cehennemi",
      "Modern tooling eksik",
      "Topluluk çok niş"
    ],
    "category": "programming",
    "officialUrl": "https://lisp-lang.org/learn/",
    "evidenceTier": "limited",
    "scores": {
      "performance": 76,
      "learning": 40,
      "ecosystem": 60,
      "versatility": 62,
      "developmentSpeed": 72,
      "careerGlobal": 28,
      "careerTurkey": 6
    }
  },
  {
    "id": "prolog",
    "name": "Prolog",
    "color": "#e61b1b",
    "philosophy": "Ne istediğini söyle, nasıl yapılacağını değil. Mantık programlama.",
    "pros": [
      "Yapay zeka ve uzman sistemler için ideal",
      "Doğal dil işleme araştırmalarında kullanılır",
      "Tamamen farklı düşünme biçimi öğretir"
    ],
    "cons": [
      "Pratik uygulamalarda çok sınırlı",
      "Performans tahmin edilemez",
      "Öğrenmesi paradigma değişikliği gerektirir"
    ],
    "category": "programming",
    "officialUrl": "https://www.swi-prolog.org/pldoc/doc_for?object=manual",
    "evidenceTier": "limited",
    "scores": {
      "performance": 48,
      "learning": 28,
      "ecosystem": 48,
      "versatility": 35,
      "developmentSpeed": 50,
      "careerGlobal": 22,
      "careerTurkey": 6
    }
  },
  {
    "id": "ada",
    "name": "Ada",
    "color": "#02f88c",
    "philosophy": "Güvenlik kritik sistemler için. Hata kabul edilemez.",
    "pros": [
      "Havacılık, savunma, uzay sistemlerinde standart",
      "Derleme zamanında çok sıkı kontroller",
      "Gerçek zamanlı sistemler için tasarlandı"
    ],
    "cons": [
      "Çok katı ve verbose",
      "Ticari dünyada nadir",
      "Öğrenme kaynakları sınırlı"
    ],
    "category": "programming",
    "officialUrl": "https://learn.adacore.com/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 90,
      "learning": 42,
      "ecosystem": 62,
      "versatility": 50,
      "developmentSpeed": 48,
      "careerGlobal": 50,
      "careerTurkey": 40
    }
  },
  {
    "id": "pascal",
    "name": "Pascal / Delphi",
    "color": "#e3f171",
    "philosophy": "Yapısal programlamayı öğret. Temiz ve anlaşılır.",
    "pros": [
      "Programlama öğretimi için mükemmel",
      "Delphi ile hızlı Windows uygulaması",
      "Lazarus ile cross-platform"
    ],
    "cons": [
      "Modern dünyada marjinal",
      "Topluluk küçülüyor",
      "İş piyasasında çok nadir"
    ],
    "category": "programming",
    "officialUrl": "https://docwiki.embarcadero.com/RADStudio/en/Delphi_Language_Guide_Index",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 78,
      "learning": 82,
      "ecosystem": 62,
      "versatility": 56,
      "developmentSpeed": 78,
      "careerGlobal": 42,
      "careerTurkey": 55
    }
  },
  {
    "id": "bash",
    "name": "Bash / Shell",
    "color": "#4eaa25",
    "philosophy": "Unix felsefesi: Küçük araçları birleştir, büyük işler başar.",
    "pros": [
      "Her Linux/macOS sistemde hazır",
      "Sistem yönetimi ve otomasyon için vazgeçilmez",
      "CI/CD pipeline'larının temeli"
    ],
    "cons": [
      "Karmaşık mantık için uygun değil",
      "Hata ayıklama zor",
      "Taşınabilirlik sorunları (bash vs sh vs zsh)"
    ],
    "category": "programming",
    "officialUrl": "https://www.gnu.org/software/bash/manual/",
    "evidenceTier": "strong",
    "scores": {
      "performance": 38,
      "learning": 60,
      "ecosystem": 90,
      "versatility": 55,
      "developmentSpeed": 72,
      "careerGlobal": 80,
      "careerTurkey": 72
    }
  },
  {
    "id": "powershell",
    "name": "PowerShell",
    "color": "#012456",
    "philosophy": "Windows yönetiminin gücü. Object-oriented scripting.",
    "pros": [
      "Windows yönetimi için vazgeçilmez",
      "Object pipeline (metin değil, nesne)",
      ".NET entegrasyonu ile sınırsız güç"
    ],
    "cons": [
      "Linux/macOS'ta ikinci sınıf vatandaş",
      "Sözdizimi verbose",
      "Öğrenme eğrisi bash'ten dik"
    ],
    "category": "programming",
    "officialUrl": "https://learn.microsoft.com/powershell/",
    "evidenceTier": "strong",
    "scores": {
      "performance": 42,
      "learning": 60,
      "ecosystem": 84,
      "versatility": 55,
      "developmentSpeed": 76,
      "careerGlobal": 72,
      "careerTurkey": 68
    }
  },
  {
    "id": "solidity",
    "name": "Solidity",
    "color": "#363636",
    "philosophy": "Ethereum akıllı sözleşmeleri. Blockchain'in programlama dili.",
    "pros": [
      "Ethereum ve EVM zincirleri için standart",
      "DeFi ve NFT dünyasının temeli",
      "Yüksek maaşlı niş alan"
    ],
    "cons": [
      "Güvenlik hataları çok maliyetli (para kaybı)",
      "Blockchain dışında kullanılmaz",
      "Kripto piyasasına bağımlı kariyer"
    ],
    "category": "programming",
    "officialUrl": "https://docs.soliditylang.org/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 50,
      "learning": 45,
      "ecosystem": 74,
      "versatility": 25,
      "developmentSpeed": 58,
      "careerGlobal": 55,
      "careerTurkey": 35
    }
  },
  {
    "id": "vhdl",
    "name": "VHDL",
    "color": "#543978",
    "philosophy": "Donanımı yazılım gibi tanımla. Dijital tasarımın dili.",
    "pros": [
      "FPGA ve ASIC tasarımında standart",
      "Paralel donanım davranışını modeller",
      "Havacılık/savunmada yaygın"
    ],
    "cons": [
      "Yazılım değil, donanım tanımlama dili",
      "Çok verbose ve katı",
      "Simülasyon/sentez öğrenme eğrisi dik"
    ],
    "category": "hdl",
    "officialUrl": "https://standards.ieee.org/ieee/1076/6843/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 93,
      "learning": 30,
      "ecosystem": 66,
      "versatility": 30,
      "developmentSpeed": 35,
      "careerGlobal": 62,
      "careerTurkey": 74
    }
  },
  {
    "id": "verilog",
    "name": "Verilog / SystemVerilog",
    "color": "#848200",
    "philosophy": "C tarzı donanım tanımlama. Chip tasarımının dili.",
    "pros": [
      "ASIC tasarımında endüstri standardı",
      "VHDL'den daha az verbose",
      "SystemVerilog ile modern özellikler"
    ],
    "cons": [
      "Sadece donanım tasarımı için",
      "Öğrenmesi donanım bilgisi gerektirir",
      "Araç lisansları çok pahalı"
    ],
    "category": "hdl",
    "officialUrl": "https://standards.ieee.org/ieee/1800/7743/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 93,
      "learning": 34,
      "ecosystem": 78,
      "versatility": 34,
      "developmentSpeed": 40,
      "careerGlobal": 78,
      "careerTurkey": 66
    }
  },
  {
    "id": "d",
    "name": "D",
    "color": "#b03931",
    "philosophy": "C++ yapılması gereken şekilde. Modern sistem programlama.",
    "pros": [
      "C++ karmaşıklığı olmadan sistem programlama",
      "C kütüphaneleriyle doğrudan uyumlu",
      "Güçlü metaprogramming"
    ],
    "cons": [
      "Hiçbir zaman ana akım olamadı",
      "Topluluk çok küçük",
      "İş piyasasında neredeyse yok"
    ],
    "category": "programming",
    "officialUrl": "https://dlang.org/spec/spec.html",
    "evidenceTier": "limited",
    "scores": {
      "performance": 86,
      "learning": 52,
      "ecosystem": 50,
      "versatility": 66,
      "developmentSpeed": 68,
      "careerGlobal": 24,
      "careerTurkey": 5
    }
  },
  {
    "id": "hack",
    "name": "Hack",
    "color": "#375eab",
    "philosophy": "PHP ama tip güvenli. Facebook ölçeğinde PHP.",
    "pros": [
      "PHP ile geriye uyumlu",
      "Gradual typing ile güvenlik",
      "Facebook altyapısında kanıtlanmış"
    ],
    "cons": [
      "Facebook dışında neredeyse kullanılmıyor",
      "HHVM runtime gerekli",
      "Topluluk yok denecek kadar az"
    ],
    "category": "programming",
    "officialUrl": "https://docs.hhvm.com/hack/",
    "evidenceTier": "limited",
    "scores": {
      "performance": 74,
      "learning": 58,
      "ecosystem": 40,
      "versatility": 25,
      "developmentSpeed": 70,
      "careerGlobal": 22,
      "careerTurkey": 3
    }
  },
  {
    "id": "abap",
    "name": "ABAP",
    "color": "#0066b3",
    "philosophy": "SAP dünyasının dili. Kurumsal iş süreçleri.",
    "pros": [
      "SAP sistemlerinde tek seçenek",
      "Kurumsal dünyada yüksek maaş",
      "İş sürekliliği garantisi"
    ],
    "cons": [
      "SAP dışında kullanılmaz",
      "Çok eski ve hantal",
      "Yaratıcılık alanı dar"
    ],
    "category": "programming",
    "officialUrl": "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 58,
      "learning": 45,
      "ecosystem": 72,
      "versatility": 22,
      "developmentSpeed": 58,
      "careerGlobal": 70,
      "careerTurkey": 80
    }
  },
  {
    "id": "scratch",
    "name": "Scratch",
    "color": "#4d97ff",
    "philosophy": "Programlamayı oyun gibi öğret. Blok tabanlı kodlama.",
    "pros": [
      "Çocuklar için mükemmel başlangıç",
      "Sözdizimi hatası imkansız",
      "Algoritmik düşünceyi öğretir"
    ],
    "cons": [
      "Gerçek dünya projelerinde kullanılmaz",
      "Performans ve ölçeklenebilirlik yok",
      "Profesyonel değeri yok"
    ],
    "category": "visual",
    "officialUrl": "https://scratch.mit.edu/educators",
    "evidenceTier": "limited",
    "scores": {
      "performance": 20,
      "learning": 100,
      "ecosystem": 68,
      "versatility": 22,
      "developmentSpeed": 92,
      "careerGlobal": 18,
      "careerTurkey": 20
    }
  },
  {
    "id": "v",
    "name": "V",
    "color": "#5d87bf",
    "philosophy": "Basit, hızlı, güvenli. Go + Rust + C arası bir şey.",
    "pros": [
      "İnanılmaz hızlı derleme",
      "C interop çok kolay",
      "Bellek güvenliği (GC olmadan)"
    ],
    "cons": [
      "Birçok vaat henüz gerçekleşmedi",
      "Topluluk çok küçük",
      "Üretimde kullanımı riskli"
    ],
    "category": "programming",
    "officialUrl": "https://docs.vlang.io/",
    "evidenceTier": "limited",
    "scores": {
      "performance": 80,
      "learning": 72,
      "ecosystem": 34,
      "versatility": 52,
      "developmentSpeed": 68,
      "careerGlobal": 12,
      "careerTurkey": 3
    }
  },
  {
    "id": "carbon",
    "name": "Carbon",
    "color": "#0d0d0d",
    "philosophy": "C++'ın halefi olmak. Google'ın yeni denemesi.",
    "pros": [
      "C++ ile tam entegrasyon hedefi",
      "Modern sözdizimi ve güvenlik",
      "C++ birlikte çalışabilirliğini merkezine alan açık tasarım"
    ],
    "cons": [
      "Henüz deneysel aşamada",
      "Gerçek dünyada kullanıma hazır değil",
      "Dil ve araç zinciri kararlılığı henüz oluşmadı"
    ],
    "category": "programming",
    "officialUrl": "https://docs.carbon-lang.dev/",
    "evidenceTier": "limited",
    "scores": {
      "performance": 35,
      "learning": 35,
      "ecosystem": 10,
      "versatility": 15,
      "developmentSpeed": 18,
      "careerGlobal": 8,
      "careerTurkey": 2
    }
  },
  {
    "id": "mojo",
    "name": "Mojo",
    "color": "#ff4d00",
    "philosophy": "Python ama C kadar hızlı. AI için süper güç.",
    "pros": [
      "Python sözdizimi ile C/Rust performansı",
      "AI/ML workload'ları için optimize (CPU + GPU)",
      "1.0 sürümüyle (Ağustos 2026) kararlı dil çekirdeği"
    ],
    "cons": [
      "Paket ekosistemi ve topluluk hâlâ çok küçük",
      "Yol haritası Modular'a (artık bir Qualcomm şirketi) bağımlı",
      "Genel amaçlı üretim örnekleri hâlâ sınırlı"
    ],
    "category": "programming",
    "officialUrl": "https://docs.modular.com/mojo/manual/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 86,
      "learning": 60,
      "ecosystem": 40,
      "versatility": 48,
      "developmentSpeed": 66,
      "careerGlobal": 34,
      "careerTurkey": 8
    }
  },
  {
    "id": "gleam",
    "name": "Gleam",
    "color": "#ffaff3",
    "philosophy": "Erlang VM üzerinde tip güvenli fonksiyonel programlama.",
    "pros": [
      "Erlang/Elixir ekosistemini kullanır",
      "Güçlü tip sistemi",
      "Dost canlısı hata mesajları"
    ],
    "cons": [
      "Çok yeni ve küçük topluluk",
      "Üretimde kullanımı riskli",
      "İş piyasasında yok"
    ],
    "category": "programming",
    "officialUrl": "https://gleam.run/documentation/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 69,
      "learning": 72,
      "ecosystem": 55,
      "versatility": 58,
      "developmentSpeed": 80,
      "careerGlobal": 30,
      "careerTurkey": 4
    }
  },
  {
    "id": "raku",
    "name": "Raku (Perl 6)",
    "color": "#0298c3",
    "philosophy": "Perl'in yeniden doğuşu. 100 yıllık dil hedefi.",
    "pros": [
      "İnanılmaz esnek gramer sistemi",
      "Regex'in evrimleşmiş hali (Grammar)",
      "Unicode desteği mükemmel"
    ],
    "cons": [
      "Perl topluluğunu böldü",
      "Performans sorunları",
      "Ana akım kabul görmedi"
    ],
    "category": "programming",
    "officialUrl": "https://docs.raku.org/",
    "evidenceTier": "limited",
    "scores": {
      "performance": 40,
      "learning": 42,
      "ecosystem": 42,
      "versatility": 52,
      "developmentSpeed": 66,
      "careerGlobal": 15,
      "careerTurkey": 3
    }
  },
  {
    "id": "tcl",
    "name": "Tcl/Tk",
    "color": "#e4cc98",
    "philosophy": "Her şey stringdir. Gömülü scripting ve hızlı GUI.",
    "pros": [
      "Gömülü sistemlerde hala kullanılır",
      "Tk ile cross-platform GUI",
      "Öğrenmesi çok basit"
    ],
    "cons": [
      "Modern dünyada marjinalleşti",
      "Performans düşük",
      "Topluluk küçülüyor"
    ],
    "category": "programming",
    "officialUrl": "https://www.tcl.tk/doc/",
    "evidenceTier": "limited",
    "scores": {
      "performance": 50,
      "learning": 76,
      "ecosystem": 55,
      "versatility": 50,
      "developmentSpeed": 72,
      "careerGlobal": 40,
      "careerTurkey": 18
    }
  },
  {
    "id": "apex",
    "name": "Apex (Salesforce)",
    "color": "#1798c1",
    "philosophy": "Salesforce platformunun dili. Bulut CRM programlama.",
    "pros": [
      "Salesforce ekosisteminde tek seçenek",
      "Java benzeri öğrenmesi kolay",
      "Yüksek maaşlı niş alan"
    ],
    "cons": [
      "Salesforce dışında kullanılmaz",
      "Platform kısıtlamaları çok",
      "Yaratıcılık alanı sınırlı"
    ],
    "category": "programming",
    "officialUrl": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 55,
      "learning": 62,
      "ecosystem": 76,
      "versatility": 22,
      "developmentSpeed": 68,
      "careerGlobal": 70,
      "careerTurkey": 52
    }
  },
  {
    "id": "labview",
    "name": "LabVIEW",
    "color": "#fed500",
    "philosophy": "Görsel programlama. Mühendisler için veri akışı.",
    "pros": [
      "Donanım kontrolü ve ölçüm için ideal",
      "Mühendisler için programlama bilmeden kullanılabilir",
      "Endüstriyel otomasyon standardı"
    ],
    "cons": [
      "Görsel yaklaşım büyük projelerde karmaşık",
      "Çok pahalı lisans",
      "NI ekosistemine bağımlı"
    ],
    "category": "visual",
    "officialUrl": "https://www.ni.com/docs/en-US/bundle/labview/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 75,
      "learning": 74,
      "ecosystem": 78,
      "versatility": 38,
      "developmentSpeed": 82,
      "careerGlobal": 58,
      "careerTurkey": 58
    }
  },
  {
    "id": "plsql",
    "name": "PL/SQL",
    "color": "#f80000",
    "philosophy": "Oracle veritabanı içinde programlama. SQL'in prosedürel gücü.",
    "pros": [
      "Oracle DB içinde en verimli seçenek",
      "Veri yoğun işlemler için optimize",
      "Kurumsal dünyada yaygın"
    ],
    "cons": [
      "Oracle'a bağımlı (vendor lock-in)",
      "Lisans maliyeti çok yüksek",
      "Modern dillere göre hantal"
    ],
    "category": "sql",
    "officialUrl": "https://docs.oracle.com/en/database/oracle/oracle-database/23/lnpls/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 82,
      "learning": 62,
      "ecosystem": 80,
      "versatility": 28,
      "developmentSpeed": 70,
      "careerGlobal": 72,
      "careerTurkey": 84
    }
  },
  {
    "id": "tsql",
    "name": "T-SQL",
    "color": "#cc2927",
    "philosophy": "Microsoft SQL Server'ın dili. Veritabanı programlama.",
    "pros": [
      "SQL Server ekosisteminin standardı",
      "Azure entegrasyonu güçlü",
      "İş zekası (BI) alanında yaygın"
    ],
    "cons": [
      "Microsoft ekosistemine bağımlı",
      "Genel amaçlı programlama için değil",
      "Bulut geçişiyle önemi azalıyor"
    ],
    "category": "sql",
    "officialUrl": "https://learn.microsoft.com/sql/t-sql/language-reference",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 82,
      "learning": 64,
      "ecosystem": 84,
      "versatility": 30,
      "developmentSpeed": 72,
      "careerGlobal": 76,
      "careerTurkey": 88
    }
  },
  {
    "id": "nix",
    "name": "Nix",
    "color": "#7e7eff",
    "philosophy": "Yeniden üretilebilirlik her şeydir. Paketler ve sistemler saf fonksiyonlardır.",
    "pros": [
      "Bit düzeyinde yeniden üretilebilir derleme ve ortamlar",
      "nixpkgs ile en büyük paket koleksiyonlarından biri",
      "Atomik güncelleme ve anında geri alma (rollback)"
    ],
    "cons": [
      "Öğrenme eğrisi çok dik, hata mesajları anlaşılması zor",
      "Dokümantasyon dağınık; flakes hâlâ \"deneysel\" etiketli",
      "Yalnızca paketleme ve yapılandırma alanında kullanılır"
    ],
    "category": "programming",
    "officialUrl": "https://nix.dev/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 40,
      "learning": 28,
      "ecosystem": 74,
      "versatility": 35,
      "developmentSpeed": 58,
      "careerGlobal": 48,
      "careerTurkey": 15
    }
  },
  {
    "id": "hcl",
    "name": "HCL (Terraform)",
    "color": "#844fba",
    "philosophy": "Altyapıyı kod olarak tanımla. İstenen durumu yaz, gerisini araç halletsin.",
    "pros": [
      "Bulut altyapısında fiilî standart (Terraform / OpenTofu)",
      "Binlerce sağlayıcı (provider) ile her buluta erişim",
      "DevOps ve platform mühendisliği ilanlarının değişmez şartı"
    ],
    "cons": [
      "Genel amaçlı bir dil değil; döngü ve mantık kısıtlı",
      "State yönetimi hataya açık ve ekip içinde koordinasyon ister",
      "Lisans değişikliği sonrası ekosistem Terraform / OpenTofu olarak bölündü"
    ],
    "category": "programming",
    "officialUrl": "https://developer.hashicorp.com/terraform/language",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 55,
      "learning": 74,
      "ecosystem": 88,
      "versatility": 30,
      "developmentSpeed": 80,
      "careerGlobal": 80,
      "careerTurkey": 64
    }
  },
  {
    "id": "vba",
    "name": "VBA",
    "color": "#867db1",
    "philosophy": "Excel'i programla. Ofis işlerini otomatikleştirmenin en kısa yolu.",
    "pros": [
      "Her Office kurulumunda hazır, ek kurulum gerektirmez",
      "Makro kaydedici ile programcı olmayanlar da başlayabilir",
      "Finans, raporlama ve operasyon ekiplerinde devasa kurulu taban"
    ],
    "cons": [
      "Dil ve editör yıllardır gelişmiyor",
      "Sürüm kontrolü, test ve paket yönetimi neredeyse yok",
      "Microsoft yeni yatırımı Office Scripts ve Python in Excel'e kaydırıyor"
    ],
    "category": "programming",
    "officialUrl": "https://learn.microsoft.com/office/vba/api/overview/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 45,
      "learning": 80,
      "ecosystem": 62,
      "versatility": 30,
      "developmentSpeed": 72,
      "careerGlobal": 52,
      "careerTurkey": 58
    }
  },
  {
    "id": "gdscript",
    "name": "GDScript",
    "color": "#478cbf",
    "philosophy": "Godot için tasarlandı. Oyun mantığını Python rahatlığında yaz.",
    "pros": [
      "Python benzeri sözdizimi, editörle tam bütünleşik",
      "Anında çalıştırma ve hot reload ile çok hızlı iterasyon",
      "Açık kaynak Godot ile lisans ücreti yok"
    ],
    "cons": [
      "Godot motoru dışında kullanılmaz",
      "Hesap yoğun işlerde C#/C++ kadar hızlı değil",
      "Maaşlı iş ilanı sayısı Unity/Unreal'a göre çok az"
    ],
    "category": "programming",
    "officialUrl": "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/index.html",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 50,
      "learning": 88,
      "ecosystem": 66,
      "versatility": 38,
      "developmentSpeed": 88,
      "careerGlobal": 42,
      "careerTurkey": 18
    }
  },
  {
    "id": "luau",
    "name": "Luau",
    "color": "#00a2ff",
    "philosophy": "Lua ama kademeli tiplerle ve daha hızlı. Roblox'un dili.",
    "pros": [
      "Lua sadeliği üzerine kademeli (gradual) tip sistemi",
      "Hızlı bytecode VM ve yerel kod üretimi",
      "Roblox'un devasa içerik üretici ekonomisinin tek dili"
    ],
    "cons": [
      "Roblox dışında kullanım alanı çok dar",
      "Bağımsız paket ekosistemi küçük",
      "Kariyer çoğunlukla serbest/üretici gelirine dayanıyor"
    ],
    "category": "programming",
    "officialUrl": "https://luau.org/",
    "evidenceTier": "limited",
    "scores": {
      "performance": 72,
      "learning": 88,
      "ecosystem": 62,
      "versatility": 28,
      "developmentSpeed": 86,
      "careerGlobal": 45,
      "careerTurkey": 15
    }
  },
  {
    "id": "odin",
    "name": "Odin",
    "color": "#3882d2",
    "philosophy": "Programlamanın keyfi için. Veri odaklı, sade bir C alternatifi.",
    "pros": [
      "C seviyesinde performans, çok hızlı derleme",
      "Dizi programlama, SOA ve matris tipleri dile gömülü",
      "Grafik/oyun kütüphaneleri (vendor) derleyiciyle birlikte gelir"
    ],
    "cons": [
      "Henüz 1.0 yok; aylık \"dev\" sürümleriyle ilerliyor",
      "Topluluk ve kütüphane ekosistemi çok küçük",
      "İş piyasasında birkaç şirket dışında karşılığı yok"
    ],
    "category": "programming",
    "officialUrl": "https://odin-lang.org/docs/",
    "evidenceTier": "limited",
    "scores": {
      "performance": 92,
      "learning": 55,
      "ecosystem": 42,
      "versatility": 55,
      "developmentSpeed": 68,
      "careerGlobal": 18,
      "careerTurkey": 3
    }
  },
  {
    "id": "elm",
    "name": "Elm",
    "color": "#60b5cc",
    "philosophy": "Çalışma zamanı hatası olmayan web arayüzleri. Derleyici senin dostun.",
    "pros": [
      "Pratikte çalışma zamanı istisnası yok",
      "Sektörün en anlaşılır derleyici hata mesajları",
      "The Elm Architecture, Redux gibi kalıplara ilham verdi"
    ],
    "cons": [
      "Son kararlı sürüm 2019'dan; gelişim çok yavaş",
      "Yalnızca tarayıcı arayüzü için; JS ile etkileşim zahmetli",
      "İş ilanı neredeyse yok"
    ],
    "category": "programming",
    "officialUrl": "https://guide.elm-lang.org/",
    "evidenceTier": "limited",
    "scores": {
      "performance": 62,
      "learning": 70,
      "ecosystem": 45,
      "versatility": 18,
      "developmentSpeed": 78,
      "careerGlobal": 20,
      "careerTurkey": 3
    }
  },
  {
    "id": "lean",
    "name": "Lean 4",
    "color": "#5b6ee1",
    "philosophy": "Kanıtla, sonra çalıştır. Matematik ve yazılım aynı dilde.",
    "pros": [
      "Hem teorem ispatlayıcı hem genel amaçlı fonksiyonel dil",
      "Mathlib ile dev bir formel matematik kütüphanesi",
      "Yapay zekâ destekli ispat ve doğrulama araştırmalarının ortak dili"
    ],
    "cons": [
      "Bağımlı tipler ve ispat taktikleri çok dik bir öğrenme eğrisi getirir",
      "Sık sürüm çıkıyor; kütüphaneler arası uyum çaba ister",
      "Araştırma ve doğrulama dışında iş alanı çok dar"
    ],
    "category": "programming",
    "officialUrl": "https://lean-lang.org/documentation/",
    "evidenceTier": "limited",
    "scores": {
      "performance": 70,
      "learning": 22,
      "ecosystem": 58,
      "versatility": 35,
      "developmentSpeed": 45,
      "careerGlobal": 34,
      "careerTurkey": 4
    }
  },
  {
    "id": "sas",
    "name": "SAS",
    "color": "#0766d1",
    "philosophy": "Kurumsal analitik. Denetlenebilir, doğrulanmış istatistik.",
    "pros": [
      "Bankacılık riski ve klinik araştırmada düzenleyici kabulü yüksek",
      "Büyük tablolar üzerinde olgun ve doğrulanmış prosedürler",
      "Kurumsal destek ve uzun vadeli geriye uyumluluk"
    ],
    "cons": [
      "Çok pahalı lisans",
      "Python ve R karşısında pazar payı kaybediyor",
      "Kapalı ekosistem; modern yazılım pratiklerinden uzak"
    ],
    "category": "programming",
    "officialUrl": "https://documentation.sas.com/",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 70,
      "learning": 62,
      "ecosystem": 74,
      "versatility": 30,
      "developmentSpeed": 74,
      "careerGlobal": 58,
      "careerTurkey": 58
    }
  },
  {
    "id": "structuredtext",
    "name": "Structured Text (IEC 61131-3)",
    "color": "#2f6f9f",
    "philosophy": "Fabrikayı kodla. PLC'ler için Pascal benzeri metin dili.",
    "pros": [
      "IEC 61131-3 standardı; Siemens, Beckhoff, CODESYS hepsinde var",
      "Deterministik, gerçek zamanlı çevrimsel yürütme",
      "Karmaşık algoritmalar için Ladder'dan çok daha uygun"
    ],
    "cons": [
      "Üretici IDE'lerine ve lehçelerine bağımlı",
      "Sürüm kontrolü ve otomatik test kültürü zayıf",
      "Endüstriyel otomasyon dışında kullanılmaz"
    ],
    "category": "programming",
    "officialUrl": "https://plcopen.org/iec-61131-3",
    "evidenceTier": "limited",
    "scores": {
      "performance": 80,
      "learning": 68,
      "ecosystem": 68,
      "versatility": 28,
      "developmentSpeed": 62,
      "careerGlobal": 66,
      "careerTurkey": 72
    }
  },
  {
    "id": "plpgsql",
    "name": "PL/pgSQL",
    "color": "#336791",
    "philosophy": "PostgreSQL'in içinde programla. Açık kaynak veritabanının prosedürel gücü.",
    "pros": [
      "Geliştiricilerin en çok kullandığı veritabanının yerleşik dili",
      "Lisans maliyeti yok; Oracle'dan geçişlerde doğal hedef",
      "Uzantılar (extension) ile çok zengin ekosistem"
    ],
    "cons": [
      "PostgreSQL'e özgü; başka motorlara taşınmaz",
      "Veritabanına gömülü iş mantığının testi ve sürümlemesi zor",
      "Genel amaçlı programlama için değil"
    ],
    "category": "sql",
    "officialUrl": "https://www.postgresql.org/docs/current/plpgsql.html",
    "evidenceTier": "moderate",
    "scores": {
      "performance": 80,
      "learning": 64,
      "ecosystem": 88,
      "versatility": 30,
      "developmentSpeed": 76,
      "careerGlobal": 74,
      "careerTurkey": 70
    }
  },
  {
    "id": "chisel",
    "name": "Chisel",
    "color": "#c0392b",
    "philosophy": "Donanımı üret, elle yazma. Scala içine gömülü donanım inşa dili.",
    "pros": [
      "Parametrik donanım üreteçleriyle yüksek yeniden kullanım",
      "RISC-V dünyasının (Rocket, BOOM, Chipyard) temel aracı",
      "Sentezlenebilir Verilog üretir; mevcut akışlara bağlanır"
    ],
    "cons": [
      "Hem Scala hem dijital tasarım bilgisi gerektirir",
      "Üretilen RTL'de hata ayıklama ve doğrulama akışı zor",
      "Endüstride Verilog/VHDL'e göre çok az kullanılıyor"
    ],
    "category": "hdl",
    "officialUrl": "https://www.chisel-lang.org/docs",
    "evidenceTier": "limited",
    "scores": {
      "performance": 90,
      "learning": 28,
      "ecosystem": 50,
      "versatility": 26,
      "developmentSpeed": 60,
      "careerGlobal": 38,
      "careerTurkey": 8
    }
  },
  {
    "id": "ladder",
    "name": "Ladder Logic (PLC)",
    "color": "#c97a1e",
    "philosophy": "Röle şemasını programa çevir. Elektrikçinin okuyabildiği kod.",
    "pros": [
      "Her PLC üreticisinin desteklediği ortak görsel dil",
      "Canlı izleme ile sahada arıza bulmak çok kolay",
      "Üretim tesislerinde devasa kurulu taban"
    ],
    "cons": [
      "Karmaşık algoritma ve veri işleme için elverişsiz",
      "Üretici araçlarına bağımlı, taşınabilirliği sınırlı",
      "Endüstriyel otomasyon dışında kullanılmaz"
    ],
    "category": "visual",
    "officialUrl": "https://plcopen.org/iec-61131-3",
    "evidenceTier": "limited",
    "scores": {
      "performance": 78,
      "learning": 76,
      "ecosystem": 72,
      "versatility": 22,
      "developmentSpeed": 68,
      "careerGlobal": 64,
      "careerTurkey": 74
    }
  },
  {
    "id": "blueprints",
    "name": "Blueprints (Unreal Engine)",
    "color": "#1b6fd1",
    "philosophy": "Kod yazmadan oyun mantığı kur. Düğümleri bağla, çalıştır.",
    "pros": [
      "Tasarımcılar programcı olmadan oynanış kurabilir",
      "Editör içinde anında deneme ve görsel hata ayıklama",
      "Unreal Engine'in tüm API'lerine doğrudan erişim"
    ],
    "cons": [
      "Büyük graflar hızla karmaşıklaşır",
      "İkili dosya biçimi nedeniyle birleştirme (merge) ve kod inceleme zor",
      "C++'a göre belirgin biçimde yavaş"
    ],
    "category": "visual",
    "officialUrl": "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprints-visual-scripting-in-unreal-engine",
    "evidenceTier": "limited",
    "scores": {
      "performance": 50,
      "learning": 84,
      "ecosystem": 82,
      "versatility": 34,
      "developmentSpeed": 82,
      "careerGlobal": 62,
      "careerTurkey": 36
    }
  }
] satisfies TechnologySeed[];
