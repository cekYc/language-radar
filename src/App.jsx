import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Search, Check, X, Code2, Scale, Zap, BookOpen, Share2, Layers, ArrowDownUp, Sparkles, TrendingUp, Award, Users, Github, Heart, ChevronUp, Filter, BarChart3, Target } from 'lucide-react';

// === Animated Counter Component ===
const AnimatedCounter = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(target * easeOut));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={elementRef} className="stat-number">{count}{suffix}</span>;
};

// === Stats Section Component ===
const StatsSection = ({ languages }) => {
  const stats = useMemo(() => {
    const avgPerformance = languages.reduce((sum, l) => sum + l.metrics.find(m => m.subject === 'Performans').A, 0) / languages.length;
    const avgCareer = languages.reduce((sum, l) => sum + l.metrics.find(m => m.subject === 'Kariyer').A, 0) / languages.length;
    const topPerformer = languages.reduce((best, l) => {
      const perf = l.metrics.find(m => m.subject === 'Performans').A;
      return perf > (best.metrics.find(m => m.subject === 'Performans')?.A || 0) ? l : best;
    });
    const easiestToLearn = languages.reduce((best, l) => {
      const learn = l.metrics.find(m => m.subject === 'Öğrenme').A;
      return learn > (best.metrics.find(m => m.subject === 'Öğrenme')?.A || 0) ? l : best;
    });
    return { avgPerformance, avgCareer, topPerformer, easiestToLearn };
  }, [languages]);

  return (
    <div className="max-w-7xl mx-auto mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass rounded-2xl p-6 text-center card-hover">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Code2 className="text-white" size={24} />
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            <AnimatedCounter target={languages.length} suffix="+" />
          </div>
          <div className="text-slate-400 text-sm">Programlama Dili</div>
        </div>
        
        <div className="glass rounded-2xl p-6 text-center card-hover">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
            <BarChart3 className="text-white" size={24} />
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            <AnimatedCounter target={6} />
          </div>
          <div className="text-slate-400 text-sm">Metrik Kategorisi</div>
        </div>
        
        <div className="glass rounded-2xl p-6 text-center card-hover">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
            <Award className="text-white" size={24} />
          </div>
          <div className="text-lg font-bold text-amber-400 mb-1">{stats.topPerformer.name}</div>
          <div className="text-slate-400 text-sm">En Performanslı</div>
        </div>
        
        <div className="glass rounded-2xl p-6 text-center card-hover">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Target className="text-white" size={24} />
          </div>
          <div className="text-lg font-bold text-cyan-400 mb-1">{stats.easiestToLearn.name}</div>
          <div className="text-slate-400 text-sm">En Kolay Öğrenme</div>
        </div>
      </div>
    </div>
  );
};

// === Scroll to Top Button ===
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 animate-scale-in"
      aria-label="Yukarı çık"
    >
      <ChevronUp size={24} />
    </button>
  ) : null;
};

// --- Veri Seti ---
const languagesData = [
  {
    id: 'assembly',
    name: 'Assembly',
    color: '#E040FB',
    philosophy: "Makineyle birebir konuş. Arada kimse yok.",
    pros: ['Teorik olarak mümkün olan en yüksek performans', 'Donanımın her bir bitine tam hakimiyet', 'İşletim sistemi çekirdekleri ve bootloader yazımı'],
    cons: ['Öğrenmesi ve yazması son derece zor', 'Taşınabilir değil (İşlemci mimarisine bağımlı)', 'Geliştirme hızı çok düşük'],
    metrics: [
      { subject: 'Performans', A: 10, fullMark: 10 },
      { subject: 'Öğrenme', A: 1, fullMark: 10 },
      { subject: 'Ekosistem', A: 1, fullMark: 10 },
      { subject: 'Esneklik', A: 1, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 1, fullMark: 10 },
      { subject: 'Kariyer', A: 3, fullMark: 10 },
    ]
  },
  {
    id: 'c',
    name: 'C',
    color: '#A8B9CC',
    philosophy: "Basit, hızlı ve taşınabilir assembler. Modern dünyanın temeli.",
    pros: ['Gömülü sistemlerin (Arduino vb.) tartışmasız kralı', 'Çok hafif ve hızlı', 'İşletim sistemlerinin (Linux, Windows) yazıldığı dil'],
    cons: ['Manuel bellek yönetimi (Malloc/Free) hataya açık', 'Nesne Yönelimli Programlama (OOP) desteği yok', 'Güvenlik açıkları oluşturmak kolay (Buffer Overflow)'],
    metrics: [
      { subject: 'Performans', A: 9.5, fullMark: 10 },
      { subject: 'Öğrenme', A: 5, fullMark: 10 },
      { subject: 'Ekosistem', A: 7, fullMark: 10 },
      { subject: 'Esneklik', A: 4, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 4, fullMark: 10 },
      { subject: 'Kariyer', A: 7, fullMark: 10 },
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    color: '#00599C',
    philosophy: "Kullanmadığın şeyin bedelini ödeme. Donanıma tam hakimiyet.",
    pros: ['Eşsiz performans ve donanım kontrolü', 'Oyun motorları ve Gömülü sistemler için kral', 'Kaynak yönetimi üzerinde tam yetki'],
    cons: ['Öğrenme eğrisi çok dik', 'Bellek hataları (Pointer yönetimi) zorlu', 'Derleme süreleri uzun'],
    metrics: [
      { subject: 'Performans', A: 9.5, fullMark: 10 },
      { subject: 'Öğrenme', A: 3, fullMark: 10 },
      { subject: 'Ekosistem', A: 7, fullMark: 10 },
      { subject: 'Esneklik', A: 7, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 4, fullMark: 10 },
      { subject: 'Kariyer', A: 7, fullMark: 10 },
    ]
  },
  {
    id: 'rust',
    name: 'Rust',
    color: '#dea584',
    philosophy: "Hafıza güvenliği performansla buluşuyor. Garbage Collector yok.",
    pros: ['Bellek güvenliği garantisi (Borrow Checker)', 'C++ seviyesinde performans', 'Harika araçlar (Cargo) ve modern sözdizimi'],
    cons: ['Öğrenme eğrisi oldukça dik', 'Derleme süreleri yavaş olabilir', 'İş piyasası diğerlerine göre daha dar ama büyüyor'],
    metrics: [
      { subject: 'Performans', A: 9.5, fullMark: 10 },
      { subject: 'Öğrenme', A: 2, fullMark: 10 },
      { subject: 'Ekosistem', A: 5, fullMark: 10 },
      { subject: 'Esneklik', A: 6, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 5, fullMark: 10 },
      { subject: 'Kariyer', A: 5, fullMark: 10 },
    ]
  },
  {
    id: 'python',
    name: 'Python',
    color: '#306998',
    philosophy: "Okunabilirlik önemlidir. Basit, karmaşıktan daha iyidir.",
    pros: ['Öğrenmesi çok kolay ve sözdizimi temiz', 'Yapay Zeka ve Veri Bilimi dominasyonu', 'Muazzam kütüphane ekosistemi'],
    cons: ['Derlenen dillere (C++/Rust) göre yavaş', 'Mobil geliştirmede zayıf', 'Global Interpreter Lock (GIL) sınırlamaları'],
    metrics: [
      { subject: 'Performans', A: 3, fullMark: 10 },
      { subject: 'Öğrenme', A: 10, fullMark: 10 },
      { subject: 'Ekosistem', A: 10, fullMark: 10 },
      { subject: 'Esneklik', A: 9, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 10, fullMark: 10 },
      { subject: 'Kariyer', A: 9, fullMark: 10 },
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    color: '#F7DF1E',
    philosophy: "Web'in dili. Her yerde çalışır (Tarayıcı, Sunucu, Mobil).",
    pros: ['Her modern web tarayıcısında çalışır', 'Full-stack imkanı (Node.js)', 'Devasa topluluk ve NPM paketi'],
    cons: ['Tür güvenliği eksikliği (TypeScript olmadan)', 'Hızlı değişen framework dünyası (JS Fatigue)', 'Garip tip dönüşümleri'],
    metrics: [
      { subject: 'Performans', A: 5, fullMark: 10 },
      { subject: 'Öğrenme', A: 7, fullMark: 10 },
      { subject: 'Ekosistem', A: 10, fullMark: 10 },
      { subject: 'Esneklik', A: 9, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 8, fullMark: 10 },
      { subject: 'Kariyer', A: 10, fullMark: 10 },
    ]
  },
  {
    id: 'java',
    name: 'Java',
    color: '#b07219',
    philosophy: "Bir kez yaz, her yerde çalıştır. Kurumsal sağlamlık.",
    pros: ['Platform bağımsız (JVM)', 'Güçlü bellek yönetimi ve Type sistemi', 'Kurumsal dünyada standart'],
    cons: ['Çok fazla "boilerplate" (gereksiz) kod', 'Modern dillere göre hantal başlangıç', 'Bellek tüketimi yüksek olabilir'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 6, fullMark: 10 },
      { subject: 'Ekosistem', A: 9, fullMark: 10 },
      { subject: 'Esneklik', A: 7, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 5, fullMark: 10 },
      { subject: 'Kariyer', A: 8, fullMark: 10 },
    ]
  },
  {
    id: 'go',
    name: 'Go (Golang)',
    color: '#00ADD8',
    philosophy: "Basitlik karmaşıklıktan iyidir. Ölçeklenebilir sistemler için.",
    pros: ['Muazzam Concurrency (Eşzamanlılık) desteği', 'Çok hızlı derleme ve çalıştırma', 'Öğrenmesi ve okuması çok basit'],
    cons: ['Generics (yeni geldi ama hala tartışmalı)', 'Kütüphane ekosistemi Java/JS kadar geniş değil', 'UI/GUI geliştirme için zayıf'],
    metrics: [
      { subject: 'Performans', A: 8, fullMark: 10 },
      { subject: 'Öğrenme', A: 8, fullMark: 10 },
      { subject: 'Ekosistem', A: 6, fullMark: 10 },
      { subject: 'Esneklik', A: 5, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 8, fullMark: 10 },
      { subject: 'Kariyer', A: 7, fullMark: 10 },
    ]
  },
  {
    id: 'csharp',
    name: 'C#',
    color: '#178600',
    philosophy: "Verimlilik ve güç. .NET ekosisteminin amiral gemisi.",
    pros: ['Güçlü IDE desteği (Visual Studio)', 'Oyun geliştirme (Unity) için standart', 'Kurumsal backend ve web için çok kararlı'],
    cons: ['Windows odaklı geçmiş (Core ile değişti ama algı sürüyor)', 'Ağır çalışma zamanı (Runtime)', 'Linux ekosisteminde ikinci sınıf vatandaş algısı'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 6, fullMark: 10 },
      { subject: 'Ekosistem', A: 8, fullMark: 10 },
      { subject: 'Esneklik', A: 8, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 8, fullMark: 10 },
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    color: '#3178C6',
    philosophy: "JavaScript ama ölçeklenebilir. Tür güvenliği her şeydir.",
    pros: ['Büyük projelerde hata yakalamayı kolaylaştırır', 'Mükemmel IDE otomatik tamamlama', 'JS ekosisteminin tamamını kullanabilir'],
    cons: ['Ekstra derleme (transpile) adımı gerekir', 'Tür tanımları bazen karmaşıklaşabilir', 'Kurulumu JS\'e göre bir tık daha zahmetli'],
    metrics: [
      { subject: 'Performans', A: 5, fullMark: 10 },
      { subject: 'Öğrenme', A: 6, fullMark: 10 },
      { subject: 'Ekosistem', A: 10, fullMark: 10 },
      { subject: 'Esneklik', A: 9, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 9, fullMark: 10 },
    ]
  },
  {
    id: 'php',
    name: 'PHP',
    color: '#4F5D95',
    philosophy: "Web için tasarlandı. İşi çabuk ve pratik şekilde hallet.",
    pros: ['Kurulumu ve barındırması (Hosting) çok ucuz/kolay', 'WordPress ve Laravel sayesinde devasa ekosistem', 'Web için özel olarak üretilmiş'],
    cons: ['Tutarsız fonksiyon isimlendirmeleri', 'Eski sürümlerden kalan kötü şöhret', 'Uzun süre çalışan (Long-running) işlemler için ideal değil'],
    metrics: [
      { subject: 'Performans', A: 5, fullMark: 10 },
      { subject: 'Öğrenme', A: 8, fullMark: 10 },
      { subject: 'Ekosistem', A: 8, fullMark: 10 },
      { subject: 'Esneklik', A: 5, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 8, fullMark: 10 },
      { subject: 'Kariyer', A: 6, fullMark: 10 },
    ]
  },
  {
    id: 'swift',
    name: 'Swift',
    color: '#F05138',
    philosophy: "Güvenli, Hızlı, Etkileşimli. Apple dünyasının modern yüzü.",
    pros: ['iOS/macOS için optimize edilmiş yüksek performans', 'Objective-C\'ye göre çok daha güvenli ve modern', 'Okunabilirliği yüksek'],
    cons: ['Apple ekosistemi dışında (Server-side vb.) zayıf', 'Dil özellikleri sık değişebiliyor', 'Sadece Mac donanımında tam verimli geliştiriliyor'],
    metrics: [
      { subject: 'Performans', A: 8, fullMark: 10 },
      { subject: 'Öğrenme', A: 7, fullMark: 10 },
      { subject: 'Ekosistem', A: 5, fullMark: 10 },
      { subject: 'Esneklik', A: 4, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 6, fullMark: 10 },
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    color: '#7F52FF',
    philosophy: "Daha iyi bir Java. Kısa, güvenli ve %100 uyumlu.",
    pros: ['Android geliştirmede Google\'ın önerdiği standart', 'Java kodlarıyla tamamen uyumlu çalışır', 'NullPointer hatalarını büyük ölçüde engeller'],
    cons: ['Derleme hızı Java\'dan biraz daha yavaş olabilir', 'Java kadar devasa bir kaynak geçmişi yok (ama artıyor)', 'Backend tarafında Java kadar yaygın değil'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 7, fullMark: 10 },
      { subject: 'Ekosistem', A: 7, fullMark: 10 },
      { subject: 'Esneklik', A: 7, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 8, fullMark: 10 },
      { subject: 'Kariyer', A: 7, fullMark: 10 },
    ]
  },
  {
    id: 'ruby',
    name: 'Ruby',
    color: '#CC342D',
    philosophy: "Yazılımcı mutluluğu için tasarlandı. En az sürpriz ilkesi.",
    pros: ['Okuması neredeyse İngilizce cümleler kadar kolay', 'Ruby on Rails ile çok hızlı MVP/Ürün çıkarma', 'Güçlü ve esnek metaprogramming'],
    cons: ['Çalışma hızı (Runtime) diğer modern dillere göre yavaş', 'Popülaritesi 2010\'lara göre düşüşte', 'Büyük ölçekte performans darboğazları olabilir'],
    metrics: [
      { subject: 'Performans', A: 3, fullMark: 10 },
      { subject: 'Öğrenme', A: 8, fullMark: 10 },
      { subject: 'Ekosistem', A: 6, fullMark: 10 },
      { subject: 'Esneklik', A: 6, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 9, fullMark: 10 },
      { subject: 'Kariyer', A: 4, fullMark: 10 },
    ]
  },
  {
    id: 'dart',
    name: 'Dart',
    color: '#00B4AB',
    philosophy: "Her ekranda hızlı, güzel uygulamalar (Flutter).",
    pros: ['Flutter ile tek kod tabanıyla Mobil, Web ve Masaüstü', 'Hot Reload özelliği ile anında görsel sonuç', 'C tarzı dilleri bilenler için öğrenmesi kolay'],
    cons: ['Flutter dışında genel amaçlı kullanımı çok az', 'Backend ekosistemi zayıf', 'Dilin kaderi büyük ölçüde Google\'a ve Flutter\'a bağlı'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 7, fullMark: 10 },
      { subject: 'Ekosistem', A: 4, fullMark: 10 },
      { subject: 'Esneklik', A: 4, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 8, fullMark: 10 },
      { subject: 'Kariyer', A: 6, fullMark: 10 },
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    color: '#e34c26',
    philosophy: "Veriye hükmet. Ne istediğini söyle, nasıl yapılacağını değil.",
    pros: ['Veritabanı işlemlerinde dünya standardı', 'Deklaratif yapısı (Ne yapılacağını yazarsın)', 'Neredeyse her backend işinde gerekli'],
    cons: ['Prosedürel akışlar için kısıtlı', 'Farklı motorlar (MySQL, PostgreSQL) arası lehçe farkları', 'Versiyonlaması zor'],
    metrics: [
      { subject: 'Performans', A: 8, fullMark: 10 },
      { subject: 'Öğrenme', A: 7, fullMark: 10 },
      { subject: 'Ekosistem', A: 10, fullMark: 10 },
      { subject: 'Esneklik', A: 2, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 9, fullMark: 10 },
    ]
  },
  {
    id: 'r',
    name: 'R',
    color: '#276DC3',
    philosophy: "İstatistikçiler tarafından, istatistik için tasarlandı.",
    pros: ['İstatistiksel analiz ve veri görselleştirmede (ggplot2) zirve', 'Akademik araştırmaların standardı', 'Güçlü CRAN paket sistemi'],
    cons: ['Genel amaçlı yazılım geliştirme için hantal', 'Bellek yönetimi verimsiz olabilir', 'Sözdizimi yazılımcılara garip gelebilir'],
    metrics: [
      { subject: 'Performans', A: 3, fullMark: 10 },
      { subject: 'Öğrenme', A: 5, fullMark: 10 },
      { subject: 'Ekosistem', A: 5, fullMark: 10 },
      { subject: 'Esneklik', A: 2, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 5, fullMark: 10 },
    ]
  },
  {
    id: 'scala',
    name: 'Scala',
    color: '#DC322F',
    philosophy: "Nesne yönelimli ve Fonksiyonel paradigmanın güçlü birleşimi.",
    pros: ['JVM üzerinde çalışır, Java kütüphanelerini kullanır', 'Spark ile Büyük Veri işlemede çok güçlü', 'Az kodla çok iş (concise)'],
    cons: ['Derleme süreleri oldukça yavaş', 'Öğrenme eğrisi Java\'dan çok daha dik', 'Karmaşık sözdizimi bazen okunabilirliği düşürür'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 3, fullMark: 10 },
      { subject: 'Ekosistem', A: 6, fullMark: 10 },
      { subject: 'Esneklik', A: 7, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 5, fullMark: 10 },
      { subject: 'Kariyer', A: 5, fullMark: 10 },
    ]
  },
  {
    id: 'elixir',
    name: 'Elixir',
    color: '#4e2a8e',
    philosophy: "Ölçeklenebilir, dağıtık ve hataya dayanıklı sistemler.",
    pros: ['Muazzam eşzamanlılık (Erlang VM üzerinde)', 'Phoenix framework ile çok hızlı gerçek zamanlı web', 'Fonksiyonel ve temiz sözdizimi'],
    cons: ['Nispeten küçük bir topluluk', 'Sayısal hesaplamalar/işlemci yükü yüksek işler için yavaş', 'İş ilanları az ama maaşlar yüksek'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 5, fullMark: 10 },
      { subject: 'Ekosistem', A: 4, fullMark: 10 },
      { subject: 'Esneklik', A: 5, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 4, fullMark: 10 },
    ]
  },
  {
    id: 'haskell',
    name: 'Haskell',
    color: '#5e5086',
    philosophy: "Saflık ve matematiksel doğruluk. Yan etki (Side-effect) yok.",
    pros: ['Hata yapması zor (Çok güçlü tip sistemi)', 'Akademik ve finansal kritik sistemlerde güvenilir', 'Programlama ufkunu genişletir'],
    cons: ['Öğrenmesi en zor dillerden biri (Monadlar vs.)', 'Pratik iş dünyasında kullanımı sınırlı', 'Lazy evaluation performans tahmini zordur'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 1, fullMark: 10 },
      { subject: 'Ekosistem', A: 3, fullMark: 10 },
      { subject: 'Esneklik', A: 4, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 3, fullMark: 10 },
      { subject: 'Kariyer', A: 3, fullMark: 10 },
    ]
  },
  {
    id: 'lua',
    name: 'Lua',
    color: '#000080',
    philosophy: "Küçük, hızlı ve her yere gömülebilir (Embedded).",
    pros: ['İnanılmaz hafif ve hızlı entegrasyon', 'Oyun dünyası (Roblox, WoW) standardı', 'C/C++ projelerine betik dili olarak eklemek çok kolay'],
    cons: ['Diziler 1\'den başlar (alışkanlıkları bozar)', 'Kendi başına büyük uygulama geliştirmek zordur', 'Standart kütüphanesi çok sınırlı'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 9, fullMark: 10 },
      { subject: 'Ekosistem', A: 4, fullMark: 10 },
      { subject: 'Esneklik', A: 5, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 8, fullMark: 10 },
      { subject: 'Kariyer', A: 4, fullMark: 10 },
    ]
  },
  {
    id: 'objectivec',
    name: 'Objective-C',
    color: '#438eff',
    philosophy: "C'ye Smalltalk mesajlaşması ekle. Apple'ın eski gücü.",
    pros: ['iOS/macOS için hala geçerli (eski projeler)', 'C ile tam uyumlu', 'Dinamik runtime özellikleri'],
    cons: ['Swift tarafından büyük ölçüde yerini aldı', 'Sözdizimi çok garip ve eski', 'Yeni projeler için önerilmiyor'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 4, fullMark: 10 },
      { subject: 'Ekosistem', A: 4, fullMark: 10 },
      { subject: 'Esneklik', A: 3, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 5, fullMark: 10 },
      { subject: 'Kariyer', A: 3, fullMark: 10 },
    ]
  },
  {
    id: 'perl',
    name: 'Perl',
    color: '#39457E',
    philosophy: "Birden fazla yol var. Metin işlemenin İsviçre çakısı.",
    pros: ['Regex ve metin işlemede efsane', 'Unix/Linux sistem yönetiminde köklü', 'CPAN ile devasa modül arşivi'],
    cons: ['Okunması zor "write-only" kod', 'Modern alternatifler (Python) tarafından gölgelendi', 'Topluluk küçülüyor'],
    metrics: [
      { subject: 'Performans', A: 5, fullMark: 10 },
      { subject: 'Öğrenme', A: 4, fullMark: 10 },
      { subject: 'Ekosistem', A: 6, fullMark: 10 },
      { subject: 'Esneklik', A: 6, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 3, fullMark: 10 },
    ]
  },
  {
    id: 'matlab',
    name: 'MATLAB',
    color: '#e16737',
    philosophy: "Mühendisler için sayısal hesaplama. Matrisler her şeydir.",
    pros: ['Mühendislik ve akademide standart', 'Simulink ile simülasyon gücü', 'Sinyal işleme ve kontrol sistemlerinde rakipsiz'],
    cons: ['Çok pahalı lisans', 'Genel amaçlı programlama için uygun değil', 'Açık kaynak alternatifleri (Python/Julia) yükseliyor'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 7, fullMark: 10 },
      { subject: 'Ekosistem', A: 6, fullMark: 10 },
      { subject: 'Esneklik', A: 3, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 8, fullMark: 10 },
      { subject: 'Kariyer', A: 5, fullMark: 10 },
    ]
  },
  {
    id: 'fortran',
    name: 'Fortran',
    color: '#734f96',
    philosophy: "İlk yüksek seviyeli dil. Bilimsel hesaplamanın dedesi.",
    pros: ['Sayısal hesaplamada hala en hızlılardan', 'Süper bilgisayarlarda yaygın', '60+ yıllık optimize edilmiş kütüphaneler'],
    cons: ['Modern yazılım geliştirme pratiklerinden uzak', 'Yeni nesil için çekici değil', 'Web/mobil gibi alanlarda kullanılmaz'],
    metrics: [
      { subject: 'Performans', A: 9, fullMark: 10 },
      { subject: 'Öğrenme', A: 5, fullMark: 10 },
      { subject: 'Ekosistem', A: 4, fullMark: 10 },
      { subject: 'Esneklik', A: 2, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 4, fullMark: 10 },
      { subject: 'Kariyer', A: 4, fullMark: 10 },
    ]
  },
  {
    id: 'cobol',
    name: 'COBOL',
    color: '#005ca5',
    philosophy: "İş dünyası için tasarlandı. Bankalar hala buna bağımlı.",
    pros: ['Finans ve bankacılık sistemlerinin temeli', 'İnanılmaz geriye uyumluluk', 'Legacy sistemlerde iş garantisi'],
    cons: ['Çok eski ve hantal sözdizimi', 'Yeni geliştirici bulmak zor', 'Sadece bakım işleri için geçerli'],
    metrics: [
      { subject: 'Performans', A: 6, fullMark: 10 },
      { subject: 'Öğrenme', A: 4, fullMark: 10 },
      { subject: 'Ekosistem', A: 2, fullMark: 10 },
      { subject: 'Esneklik', A: 1, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 3, fullMark: 10 },
      { subject: 'Kariyer', A: 4, fullMark: 10 },
    ]
  },
  {
    id: 'vbnet',
    name: 'Visual Basic .NET',
    color: '#945db7',
    philosophy: "Programlamayı herkes için erişilebilir kıl.",
    pros: ['Başlangıç için çok kolay', 'Windows Forms ile hızlı GUI', '.NET ekosisteminin tamamına erişim'],
    cons: ['C# tarafından gölgelendi', 'Profesyonel dünyada ciddiye alınmıyor', 'Microsoft desteği azalıyor'],
    metrics: [
      { subject: 'Performans', A: 6, fullMark: 10 },
      { subject: 'Öğrenme', A: 9, fullMark: 10 },
      { subject: 'Ekosistem', A: 7, fullMark: 10 },
      { subject: 'Esneklik', A: 5, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 8, fullMark: 10 },
      { subject: 'Kariyer', A: 3, fullMark: 10 },
    ]
  },
  {
    id: 'fsharp',
    name: 'F#',
    color: '#b845fc',
    philosophy: "Fonksiyonel öncelikli, pratik sonuçlar. ML ailesinin .NET üyesi.",
    pros: ['Tip çıkarımı ve pattern matching harika', 'Finansal modelleme için ideal', 'C# ile sorunsuz entegrasyon'],
    cons: ['Topluluk C# yanında çok küçük', 'İş ilanları sınırlı', 'Öğrenme eğrisi OOP\'den gelenlere dik'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 4, fullMark: 10 },
      { subject: 'Ekosistem', A: 6, fullMark: 10 },
      { subject: 'Esneklik', A: 5, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 4, fullMark: 10 },
    ]
  },
  {
    id: 'clojure',
    name: 'Clojure',
    color: '#5881d8',
    philosophy: "Modern Lisp. Değişmezlik (Immutability) ve basitlik.",
    pros: ['JVM üzerinde Lisp gücü', 'Eşzamanlılık için mükemmel tasarım', 'ClojureScript ile frontend de yazılır'],
    cons: ['Lisp parantezleri herkese göre değil', 'Hata mesajları kötü', 'Startup süresi yavaş'],
    metrics: [
      { subject: 'Performans', A: 6, fullMark: 10 },
      { subject: 'Öğrenme', A: 3, fullMark: 10 },
      { subject: 'Ekosistem', A: 5, fullMark: 10 },
      { subject: 'Esneklik', A: 6, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 4, fullMark: 10 },
    ]
  },
  {
    id: 'groovy',
    name: 'Groovy',
    color: '#4298b8',
    philosophy: "Java ama daha az seremoni. Dinamik ve pragmatik.",
    pros: ['Java ile %100 uyumlu', 'Gradle build aracının dili', 'Scripting için Java\'dan çok daha pratik'],
    cons: ['Kotlin tarafından gölgelendi', 'Performans Java\'dan düşük', 'Tip güvenliği zayıf'],
    metrics: [
      { subject: 'Performans', A: 5, fullMark: 10 },
      { subject: 'Öğrenme', A: 7, fullMark: 10 },
      { subject: 'Ekosistem', A: 7, fullMark: 10 },
      { subject: 'Esneklik', A: 7, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 8, fullMark: 10 },
      { subject: 'Kariyer', A: 4, fullMark: 10 },
    ]
  },
  {
    id: 'julia',
    name: 'Julia',
    color: '#9558b2',
    philosophy: "Python'un kolaylığı, C'nin hızı. Bilimsel hesaplama için.",
    pros: ['Bilimsel hesaplamada Python\'a rakip hız', 'Matematiksel sözdizimi çok doğal', 'Paralel hesaplama desteği güçlü'],
    cons: ['Ekosistem henüz olgunlaşmadı', 'İlk çalıştırma (JIT) süresi uzun', 'Genel amaçlı kullanım için erken'],
    metrics: [
      { subject: 'Performans', A: 8, fullMark: 10 },
      { subject: 'Öğrenme', A: 7, fullMark: 10 },
      { subject: 'Ekosistem', A: 4, fullMark: 10 },
      { subject: 'Esneklik', A: 4, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 8, fullMark: 10 },
      { subject: 'Kariyer', A: 4, fullMark: 10 },
    ]
  },
  {
    id: 'zig',
    name: 'Zig',
    color: '#f7a41d',
    philosophy: "C'nin gücü, modern güvenlik. Gizli davranış yok.",
    pros: ['C ile doğrudan entegrasyon', 'Derleme zamanı hesaplama çok güçlü', 'LLVM backend ile yüksek performans'],
    cons: ['Henüz 1.0 bile değil', 'Ekosistem çok küçük', 'Dokümantasyon eksik'],
    metrics: [
      { subject: 'Performans', A: 9, fullMark: 10 },
      { subject: 'Öğrenme', A: 4, fullMark: 10 },
      { subject: 'Ekosistem', A: 2, fullMark: 10 },
      { subject: 'Esneklik', A: 5, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 5, fullMark: 10 },
      { subject: 'Kariyer', A: 2, fullMark: 10 },
    ]
  },
  {
    id: 'nim',
    name: 'Nim',
    color: '#ffe953',
    philosophy: "Python gibi yaz, C gibi çalıştır.",
    pros: ['Python benzeri temiz sözdizimi', 'C/C++/JS\'e derlenir', 'Metaprogramming çok güçlü'],
    cons: ['Topluluk çok küçük', 'Kütüphane ekosistemi sınırlı', 'İş piyasasında neredeyse yok'],
    metrics: [
      { subject: 'Performans', A: 8, fullMark: 10 },
      { subject: 'Öğrenme', A: 7, fullMark: 10 },
      { subject: 'Ekosistem', A: 2, fullMark: 10 },
      { subject: 'Esneklik', A: 6, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 1, fullMark: 10 },
    ]
  },
  {
    id: 'crystal',
    name: 'Crystal',
    color: '#000000',
    philosophy: "Ruby gibi yaz, C gibi hızlı çalıştır.",
    pros: ['Ruby sözdiziminin güzelliği', 'Statik tip sistemi ile güvenlik', 'Derlenen dil performansı'],
    cons: ['Windows desteği zayıf', 'Topluluk küçük', 'Olgunlaşma aşamasında'],
    metrics: [
      { subject: 'Performans', A: 8, fullMark: 10 },
      { subject: 'Öğrenme', A: 7, fullMark: 10 },
      { subject: 'Ekosistem', A: 2, fullMark: 10 },
      { subject: 'Esneklik', A: 4, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 1, fullMark: 10 },
    ]
  },
  {
    id: 'ocaml',
    name: 'OCaml',
    color: '#ec6813',
    philosophy: "Pratik fonksiyonel programlama. Tip sistemi efsanesi.",
    pros: ['Çok güçlü tip çıkarımı', 'Derleme hızı inanılmaz', 'Facebook\'un Hack ve Flow\'unun temeli'],
    cons: ['Topluluk küçük', 'Tooling modern dillere göre zayıf', 'Paradigma değişikliği gerektirir'],
    metrics: [
      { subject: 'Performans', A: 8, fullMark: 10 },
      { subject: 'Öğrenme', A: 3, fullMark: 10 },
      { subject: 'Ekosistem', A: 3, fullMark: 10 },
      { subject: 'Esneklik', A: 5, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 6, fullMark: 10 },
      { subject: 'Kariyer', A: 3, fullMark: 10 },
    ]
  },
  {
    id: 'erlang',
    name: 'Erlang',
    color: '#a90533',
    philosophy: "Telekomünikasyon güvenilirliği. Hata toleransı her şeydir.",
    pros: ['%99.9999999 uptime için tasarlandı (Ericsson)', 'Hot code swapping - sistem durmadan güncelleme', 'Dağıtık sistemlerde efsane'],
    cons: ['Sözdizimi çok farklı ve garip', 'Genel amaçlı kullanım için uygun değil', 'Öğrenme kaynakları sınırlı'],
    metrics: [
      { subject: 'Performans', A: 6, fullMark: 10 },
      { subject: 'Öğrenme', A: 3, fullMark: 10 },
      { subject: 'Ekosistem', A: 4, fullMark: 10 },
      { subject: 'Esneklik', A: 3, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 6, fullMark: 10 },
      { subject: 'Kariyer', A: 4, fullMark: 10 },
    ]
  },
  {
    id: 'lisp',
    name: 'Common Lisp',
    color: '#3fb68b',
    philosophy: "Kod veridir, veri koddur. Programlanabilir programlama dili.",
    pros: ['Makro sistemi ile dili genişletme gücü', 'REPL odaklı geliştirme deneyimi', 'AI araştırmalarının tarihsel dili'],
    cons: ['Parantez cehennemi', 'Modern tooling eksik', 'Topluluk çok niş'],
    metrics: [
      { subject: 'Performans', A: 6, fullMark: 10 },
      { subject: 'Öğrenme', A: 3, fullMark: 10 },
      { subject: 'Ekosistem', A: 3, fullMark: 10 },
      { subject: 'Esneklik', A: 8, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 6, fullMark: 10 },
      { subject: 'Kariyer', A: 2, fullMark: 10 },
    ]
  },
  {
    id: 'prolog',
    name: 'Prolog',
    color: '#e61b1b',
    philosophy: "Ne istediğini söyle, nasıl yapılacağını değil. Mantık programlama.",
    pros: ['Yapay zeka ve uzman sistemler için ideal', 'Doğal dil işleme araştırmalarında kullanılır', 'Tamamen farklı düşünme biçimi öğretir'],
    cons: ['Pratik uygulamalarda çok sınırlı', 'Performans tahmin edilemez', 'Öğrenmesi paradigma değişikliği gerektirir'],
    metrics: [
      { subject: 'Performans', A: 4, fullMark: 10 },
      { subject: 'Öğrenme', A: 2, fullMark: 10 },
      { subject: 'Ekosistem', A: 2, fullMark: 10 },
      { subject: 'Esneklik', A: 2, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 5, fullMark: 10 },
      { subject: 'Kariyer', A: 2, fullMark: 10 },
    ]
  },
  {
    id: 'ada',
    name: 'Ada',
    color: '#02f88c',
    philosophy: "Güvenlik kritik sistemler için. Hata kabul edilemez.",
    pros: ['Havacılık, savunma, uzay sistemlerinde standart', 'Derleme zamanında çok sıkı kontroller', 'Gerçek zamanlı sistemler için tasarlandı'],
    cons: ['Çok katı ve verbose', 'Ticari dünyada nadir', 'Öğrenme kaynakları sınırlı'],
    metrics: [
      { subject: 'Performans', A: 8, fullMark: 10 },
      { subject: 'Öğrenme', A: 4, fullMark: 10 },
      { subject: 'Ekosistem', A: 3, fullMark: 10 },
      { subject: 'Esneklik', A: 3, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 4, fullMark: 10 },
      { subject: 'Kariyer', A: 4, fullMark: 10 },
    ]
  },
  {
    id: 'pascal',
    name: 'Pascal / Delphi',
    color: '#e3f171',
    philosophy: "Yapısal programlamayı öğret. Temiz ve anlaşılır.",
    pros: ['Programlama öğretimi için mükemmel', 'Delphi ile hızlı Windows uygulaması', 'Lazarus ile cross-platform'],
    cons: ['Modern dünyada marjinal', 'Topluluk küçülüyor', 'İş piyasasında çok nadir'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 8, fullMark: 10 },
      { subject: 'Ekosistem', A: 3, fullMark: 10 },
      { subject: 'Esneklik', A: 4, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 6, fullMark: 10 },
      { subject: 'Kariyer', A: 2, fullMark: 10 },
    ]
  },
  {
    id: 'bash',
    name: 'Bash / Shell',
    color: '#4eaa25',
    philosophy: "Unix felsefesi: Küçük araçları birleştir, büyük işler başar.",
    pros: ['Her Linux/macOS sistemde hazır', 'Sistem yönetimi ve otomasyon için vazgeçilmez', 'CI/CD pipeline\'larının temeli'],
    cons: ['Karmaşık mantık için uygun değil', 'Hata ayıklama zor', 'Taşınabilirlik sorunları (bash vs sh vs zsh)'],
    metrics: [
      { subject: 'Performans', A: 3, fullMark: 10 },
      { subject: 'Öğrenme', A: 6, fullMark: 10 },
      { subject: 'Ekosistem', A: 8, fullMark: 10 },
      { subject: 'Esneklik', A: 4, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 7, fullMark: 10 },
    ]
  },
  {
    id: 'powershell',
    name: 'PowerShell',
    color: '#012456',
    philosophy: "Windows yönetiminin gücü. Object-oriented scripting.",
    pros: ['Windows yönetimi için vazgeçilmez', 'Object pipeline (metin değil, nesne)', '.NET entegrasyonu ile sınırsız güç'],
    cons: ['Linux/macOS\'ta ikinci sınıf vatandaş', 'Sözdizimi verbose', 'Öğrenme eğrisi bash\'ten dik'],
    metrics: [
      { subject: 'Performans', A: 4, fullMark: 10 },
      { subject: 'Öğrenme', A: 5, fullMark: 10 },
      { subject: 'Ekosistem', A: 7, fullMark: 10 },
      { subject: 'Esneklik', A: 5, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 6, fullMark: 10 },
    ]
  },
  {
    id: 'solidity',
    name: 'Solidity',
    color: '#363636',
    philosophy: "Ethereum akıllı sözleşmeleri. Blockchain'in programlama dili.",
    pros: ['Ethereum ve EVM zincirleri için standart', 'DeFi ve NFT dünyasının temeli', 'Yüksek maaşlı niş alan'],
    cons: ['Güvenlik hataları çok maliyetli (para kaybı)', 'Blockchain dışında kullanılmaz', 'Kripto piyasasına bağımlı kariyer'],
    metrics: [
      { subject: 'Performans', A: 3, fullMark: 10 },
      { subject: 'Öğrenme', A: 5, fullMark: 10 },
      { subject: 'Ekosistem', A: 4, fullMark: 10 },
      { subject: 'Esneklik', A: 1, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 6, fullMark: 10 },
      { subject: 'Kariyer', A: 5, fullMark: 10 },
    ]
  },
  {
    id: 'vhdl',
    name: 'VHDL',
    color: '#543978',
    philosophy: "Donanımı yazılım gibi tanımla. Dijital tasarımın dili.",
    pros: ['FPGA ve ASIC tasarımında standart', 'Paralel donanım davranışını modeller', 'Havacılık/savunmada yaygın'],
    cons: ['Yazılım değil, donanım tanımlama dili', 'Çok verbose ve katı', 'Simülasyon/sentez öğrenme eğrisi dik'],
    metrics: [
      { subject: 'Performans', A: 10, fullMark: 10 },
      { subject: 'Öğrenme', A: 3, fullMark: 10 },
      { subject: 'Ekosistem', A: 4, fullMark: 10 },
      { subject: 'Esneklik', A: 2, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 3, fullMark: 10 },
      { subject: 'Kariyer', A: 5, fullMark: 10 },
    ]
  },
  {
    id: 'verilog',
    name: 'Verilog / SystemVerilog',
    color: '#848200',
    philosophy: "C tarzı donanım tanımlama. Chip tasarımının dili.",
    pros: ['ASIC tasarımında endüstri standardı', 'VHDL\'den daha az verbose', 'SystemVerilog ile modern özellikler'],
    cons: ['Sadece donanım tasarımı için', 'Öğrenmesi donanım bilgisi gerektirir', 'Araç lisansları çok pahalı'],
    metrics: [
      { subject: 'Performans', A: 10, fullMark: 10 },
      { subject: 'Öğrenme', A: 4, fullMark: 10 },
      { subject: 'Ekosistem', A: 4, fullMark: 10 },
      { subject: 'Esneklik', A: 2, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 4, fullMark: 10 },
      { subject: 'Kariyer', A: 6, fullMark: 10 },
    ]
  },
  {
    id: 'd',
    name: 'D',
    color: '#b03931',
    philosophy: "C++ yapılması gereken şekilde. Modern sistem programlama.",
    pros: ['C++ karmaşıklığı olmadan sistem programlama', 'C kütüphaneleriyle doğrudan uyumlu', 'Güçlü metaprogramming'],
    cons: ['Hiçbir zaman ana akım olamadı', 'Topluluk çok küçük', 'İş piyasasında neredeyse yok'],
    metrics: [
      { subject: 'Performans', A: 8, fullMark: 10 },
      { subject: 'Öğrenme', A: 5, fullMark: 10 },
      { subject: 'Ekosistem', A: 2, fullMark: 10 },
      { subject: 'Esneklik', A: 6, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 6, fullMark: 10 },
      { subject: 'Kariyer', A: 1, fullMark: 10 },
    ]
  },
  {
    id: 'hack',
    name: 'Hack',
    color: '#375eab',
    philosophy: "PHP ama tip güvenli. Facebook ölçeğinde PHP.",
    pros: ['PHP ile geriye uyumlu', 'Gradual typing ile güvenlik', 'Facebook altyapısında kanıtlanmış'],
    cons: ['Facebook dışında neredeyse kullanılmıyor', 'HHVM runtime gerekli', 'Topluluk yok denecek kadar az'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 6, fullMark: 10 },
      { subject: 'Ekosistem', A: 2, fullMark: 10 },
      { subject: 'Esneklik', A: 3, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 1, fullMark: 10 },
    ]
  },
  {
    id: 'abap',
    name: 'ABAP',
    color: '#0066b3',
    philosophy: "SAP dünyasının dili. Kurumsal iş süreçleri.",
    pros: ['SAP sistemlerinde tek seçenek', 'Kurumsal dünyada yüksek maaş', 'İş sürekliliği garantisi'],
    cons: ['SAP dışında kullanılmaz', 'Çok eski ve hantal', 'Yaratıcılık alanı dar'],
    metrics: [
      { subject: 'Performans', A: 5, fullMark: 10 },
      { subject: 'Öğrenme', A: 4, fullMark: 10 },
      { subject: 'Ekosistem', A: 3, fullMark: 10 },
      { subject: 'Esneklik', A: 1, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 5, fullMark: 10 },
      { subject: 'Kariyer', A: 5, fullMark: 10 },
    ]
  },
  {
    id: 'scratch',
    name: 'Scratch',
    color: '#4d97ff',
    philosophy: "Programlamayı oyun gibi öğret. Blok tabanlı kodlama.",
    pros: ['Çocuklar için mükemmel başlangıç', 'Sözdizimi hatası imkansız', 'Algoritmik düşünceyi öğretir'],
    cons: ['Gerçek dünya projelerinde kullanılmaz', 'Performans ve ölçeklenebilirlik yok', 'Profesyonel değeri yok'],
    metrics: [
      { subject: 'Performans', A: 1, fullMark: 10 },
      { subject: 'Öğrenme', A: 10, fullMark: 10 },
      { subject: 'Ekosistem', A: 3, fullMark: 10 },
      { subject: 'Esneklik', A: 2, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 8, fullMark: 10 },
      { subject: 'Kariyer', A: 1, fullMark: 10 },
    ]
  },
  {
    id: 'v',
    name: 'V',
    color: '#5d87bf',
    philosophy: "Basit, hızlı, güvenli. Go + Rust + C arası bir şey.",
    pros: ['İnanılmaz hızlı derleme', 'C interop çok kolay', 'Bellek güvenliği (GC olmadan)'],
    cons: ['Birçok vaat henüz gerçekleşmedi', 'Topluluk çok küçük', 'Üretimde kullanımı riskli'],
    metrics: [
      { subject: 'Performans', A: 8, fullMark: 10 },
      { subject: 'Öğrenme', A: 8, fullMark: 10 },
      { subject: 'Ekosistem', A: 1, fullMark: 10 },
      { subject: 'Esneklik', A: 4, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 1, fullMark: 10 },
    ]
  },
  {
    id: 'carbon',
    name: 'Carbon',
    color: '#0d0d0d',
    philosophy: "C++'ın halefi olmak. Google'ın yeni denemesi.",
    pros: ['C++ ile tam entegrasyon hedefi', 'Modern sözdizimi ve güvenlik', 'Google desteği'],
    cons: ['Henüz deneysel aşamada', 'Gerçek dünyada kullanıma hazır değil', 'Rust zaten var, neden Carbon?'],
    metrics: [
      { subject: 'Performans', A: 9, fullMark: 10 },
      { subject: 'Öğrenme', A: 5, fullMark: 10 },
      { subject: 'Ekosistem', A: 1, fullMark: 10 },
      { subject: 'Esneklik', A: 5, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 5, fullMark: 10 },
      { subject: 'Kariyer', A: 1, fullMark: 10 },
    ]
  },
  {
    id: 'mojo',
    name: 'Mojo',
    color: '#ff4d00',
    philosophy: "Python ama C kadar hızlı. AI için süper güç.",
    pros: ['Python sözdizimi ile C/Rust performansı', 'AI/ML workload\'ları için optimize', 'Python ekosistemi ile uyumlu'],
    cons: ['Çok yeni, henüz olgunlaşmadı', 'Modular şirketine bağımlı', 'Açık kaynak değil (henüz)'],
    metrics: [
      { subject: 'Performans', A: 9, fullMark: 10 },
      { subject: 'Öğrenme', A: 8, fullMark: 10 },
      { subject: 'Ekosistem', A: 2, fullMark: 10 },
      { subject: 'Esneklik', A: 4, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 2, fullMark: 10 },
    ]
  },
  {
    id: 'gleam',
    name: 'Gleam',
    color: '#ffaff3',
    philosophy: "Erlang VM üzerinde tip güvenli fonksiyonel programlama.",
    pros: ['Erlang/Elixir ekosistemini kullanır', 'Güçlü tip sistemi', 'Dost canlısı hata mesajları'],
    cons: ['Çok yeni ve küçük topluluk', 'Üretimde kullanımı riskli', 'İş piyasasında yok'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 6, fullMark: 10 },
      { subject: 'Ekosistem', A: 2, fullMark: 10 },
      { subject: 'Esneklik', A: 4, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 1, fullMark: 10 },
    ]
  },
  {
    id: 'raku',
    name: 'Raku (Perl 6)',
    color: '#0298c3',
    philosophy: "Perl'in yeniden doğuşu. 100 yıllık dil hedefi.",
    pros: ['İnanılmaz esnek gramer sistemi', 'Regex\'in evrimleşmiş hali (Grammar)', 'Unicode desteği mükemmel'],
    cons: ['Perl topluluğunu böldü', 'Performans sorunları', 'Ana akım kabul görmedi'],
    metrics: [
      { subject: 'Performans', A: 3, fullMark: 10 },
      { subject: 'Öğrenme', A: 3, fullMark: 10 },
      { subject: 'Ekosistem', A: 2, fullMark: 10 },
      { subject: 'Esneklik', A: 8, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 6, fullMark: 10 },
      { subject: 'Kariyer', A: 1, fullMark: 10 },
    ]
  },
  {
    id: 'tcl',
    name: 'Tcl/Tk',
    color: '#e4cc98',
    philosophy: "Her şey stringdir. Gömülü scripting ve hızlı GUI.",
    pros: ['Gömülü sistemlerde hala kullanılır', 'Tk ile cross-platform GUI', 'Öğrenmesi çok basit'],
    cons: ['Modern dünyada marjinalleşti', 'Performans düşük', 'Topluluk küçülüyor'],
    metrics: [
      { subject: 'Performans', A: 4, fullMark: 10 },
      { subject: 'Öğrenme', A: 8, fullMark: 10 },
      { subject: 'Ekosistem', A: 3, fullMark: 10 },
      { subject: 'Esneklik', A: 5, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 7, fullMark: 10 },
      { subject: 'Kariyer', A: 2, fullMark: 10 },
    ]
  },
  {
    id: 'apex',
    name: 'Apex (Salesforce)',
    color: '#1798c1',
    philosophy: "Salesforce platformunun dili. Bulut CRM programlama.",
    pros: ['Salesforce ekosisteminde tek seçenek', 'Java benzeri öğrenmesi kolay', 'Yüksek maaşlı niş alan'],
    cons: ['Salesforce dışında kullanılmaz', 'Platform kısıtlamaları çok', 'Yaratıcılık alanı sınırlı'],
    metrics: [
      { subject: 'Performans', A: 5, fullMark: 10 },
      { subject: 'Öğrenme', A: 6, fullMark: 10 },
      { subject: 'Ekosistem', A: 4, fullMark: 10 },
      { subject: 'Esneklik', A: 2, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 6, fullMark: 10 },
      { subject: 'Kariyer', A: 6, fullMark: 10 },
    ]
  },
  {
    id: 'labview',
    name: 'LabVIEW',
    color: '#fed500',
    philosophy: "Görsel programlama. Mühendisler için veri akışı.",
    pros: ['Donanım kontrolü ve ölçüm için ideal', 'Mühendisler için programlama bilmeden kullanılabilir', 'Endüstriyel otomasyon standardı'],
    cons: ['Görsel yaklaşım büyük projelerde karmaşık', 'Çok pahalı lisans', 'NI ekosistemine bağımlı'],
    metrics: [
      { subject: 'Performans', A: 7, fullMark: 10 },
      { subject: 'Öğrenme', A: 7, fullMark: 10 },
      { subject: 'Ekosistem', A: 4, fullMark: 10 },
      { subject: 'Esneklik', A: 3, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 8, fullMark: 10 },
      { subject: 'Kariyer', A: 4, fullMark: 10 },
    ]
  },
  {
    id: 'plsql',
    name: 'PL/SQL',
    color: '#f80000',
    philosophy: "Oracle veritabanı içinde programlama. SQL'in prosedürel gücü.",
    pros: ['Oracle DB içinde en verimli seçenek', 'Veri yoğun işlemler için optimize', 'Kurumsal dünyada yaygın'],
    cons: ['Oracle\'a bağımlı (vendor lock-in)', 'Lisans maliyeti çok yüksek', 'Modern dillere göre hantal'],
    metrics: [
      { subject: 'Performans', A: 8, fullMark: 10 },
      { subject: 'Öğrenme', A: 6, fullMark: 10 },
      { subject: 'Ekosistem', A: 5, fullMark: 10 },
      { subject: 'Esneklik', A: 2, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 6, fullMark: 10 },
      { subject: 'Kariyer', A: 6, fullMark: 10 },
    ]
  },
  {
    id: 'tsql',
    name: 'T-SQL',
    color: '#cc2927',
    philosophy: "Microsoft SQL Server'ın dili. Veritabanı programlama.",
    pros: ['SQL Server ekosisteminin standardı', 'Azure entegrasyonu güçlü', 'İş zekası (BI) alanında yaygın'],
    cons: ['Microsoft ekosistemine bağımlı', 'Genel amaçlı programlama için değil', 'Bulut geçişiyle önemi azalıyor'],
    metrics: [
      { subject: 'Performans', A: 8, fullMark: 10 },
      { subject: 'Öğrenme', A: 6, fullMark: 10 },
      { subject: 'Ekosistem', A: 6, fullMark: 10 },
      { subject: 'Esneklik', A: 2, fullMark: 10 },
      { subject: 'Geliştirme Hızı', A: 6, fullMark: 10 },
      { subject: 'Kariyer', A: 7, fullMark: 10 },
    ]
  }
];

// --- Bileşenler ---

const RadarChartComponent = ({ data, color, showAxis = true }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid gridType="polygon" stroke="#4b5563" strokeDasharray="3 3" />
        <PolarAngleAxis 
          dataKey="subject" 
          tick={{ fill: '#e2e8f0', fontSize: 10, fontWeight: 'bold' }} 
        />
        {showAxis && <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />}
        <Radar
          name="Değerler"
          dataKey="A"
          stroke={color}
          strokeWidth={3}
          fill={color}
          fillOpacity={0.5}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1f2937', borderRadius: '8px', border: '1px solid #374151', color: '#fff' }}
          itemStyle={{ color: color, fontWeight: 'bold' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const ComparisonRadar = ({ languages }) => {
  const combinedData = useMemo(() => {
    if (languages.length === 0) return [];
    const subjects = languages[0].metrics.map(m => m.subject);
    return subjects.map(subj => {
      const entry = { subject: subj };
      languages.forEach(lang => {
        const metric = lang.metrics.find(m => m.subject === subj);
        entry[lang.name] = metric ? metric.A : 0;
      });
      return entry;
    });
  }, [languages]);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={combinedData}>
        <PolarGrid stroke="#4b5563" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#e2e8f0', fontSize: 12, fontWeight: '600' }} />
        <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false}/>
        <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }} />
        <Legend wrapperStyle={{ color: '#fff' }} />
        {languages.map((lang) => (
          <Radar
            key={lang.id}
            name={lang.name}
            dataKey={lang.name}
            stroke={lang.color}
            strokeWidth={3}
            fill={lang.color}
            fillOpacity={0.1}
          />
        ))}
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);
  const [sortBy, setSortBy] = useState('default'); // default, Performans, Öğrenme, vb.

  // Filtreleme ve Sıralama
  const processedLanguages = useMemo(() => {
    let result = languagesData.filter(lang => 
      lang.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy !== 'default') {
      result.sort((a, b) => {
        const scoreA = a.metrics.find(m => m.subject === sortBy)?.A || 0;
        const scoreB = b.metrics.find(m => m.subject === sortBy)?.A || 0;
        return scoreB - scoreA; // Büyükten küçüğe sırala
      });
    }

    return result;
  }, [searchTerm, sortBy]);

  const toggleSelection = (id) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        if (prev.length >= 3) {
          alert("En fazla 3 dili aynı anda karşılaştırabilirsiniz.");
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  const selectedLanguages = languagesData.filter(lang => selectedIds.includes(lang.id));

  const sortOptions = [
    { value: 'default', label: 'Varsayılan Sıralama' },
    { value: 'Performans', label: 'En Yüksek Performans' },
    { value: 'Öğrenme', label: 'En Kolay Öğrenme' },
    { value: 'Ekosistem', label: 'En Geniş Ekosistem' },
    { value: 'Geliştirme Hızı', label: 'En Hızlı Geliştirme' },
    { value: 'Kariyer', label: 'En İyi Kariyer İmkanı' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 gradient-mesh pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 p-4 md:p-8">
        {/* Header */}
        <header className="mb-12 text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm text-slate-300">58+ Programlama Dili Analizi</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Yazılım Dilleri Radar
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Dillerin felsefelerini keşfedin, metriklerini radar grafiğinde analiz edin 
            ve yan yana karşılaştırın.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <TrendingUp size={16} className="text-green-400" />
              <span>Sürekli Güncelleniyor</span>
            </div>
            <div className="w-1 h-1 bg-slate-600 rounded-full" />
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Users size={16} className="text-blue-400" />
              <span>Türkçe Destekli</span>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <StatsSection languages={languagesData} />

      {/* Arama ve Kontroller */}
        <div className="max-w-6xl mx-auto mb-8 sticky top-4 z-30">
          <div className="glass rounded-2xl p-4 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          
            {/* Arama */}
            <div className="relative w-full md:w-1/3 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Dil ara (örn: Python, Rust)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800/80 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Sıralama */}
            <div className="relative w-full md:w-1/3 group">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors" size={20} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-800/80 border border-slate-600/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 appearance-none cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          
            {/* Seçim Bilgisi */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50">
                <Scale size={18} className="text-indigo-400" />
                <span className="text-sm font-medium">
                  <span className="text-indigo-400">{selectedIds.length}</span>
                  <span className="text-slate-400"> / 3 seçili</span>
                </span>
              </div>
              {selectedIds.length > 0 && (
                <button 
                  onClick={() => setSelectedIds([])}
                  className="px-4 py-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors text-sm font-medium"
                >
                  Temizle
                </button>
              )}
            </div>
          </div>
        </div>

      {/* Karşılaştırma Alanı (Conditional Render) */}
        {selectedLanguages.length > 0 && (
          <div className="max-w-7xl mx-auto mb-12 animate-scale-in">
            <div className="glass-dark rounded-3xl shadow-2xl overflow-hidden border border-indigo-500/20">
              <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 p-5 border-b border-slate-700/50 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/20">
                    <Layers size={22} className="text-indigo-400" />
                  </div>
                  Karşılaştırma Analizi
                  <span className="badge badge-primary ml-2">{selectedLanguages.length} Dil</span>
                </h2>
                <button 
                  onClick={() => setSelectedIds([])} 
                  className="p-2.5 hover:bg-slate-700/50 rounded-xl text-slate-400 hover:text-white transition-all duration-300"
                >
                  <X size={20} />
                </button>
              </div>
            
              <div className="flex flex-col lg:flex-row">
                {/* Ortak Radar Grafiği */}
                <div className="w-full lg:w-1/3 p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-700/50">
                  <div className="w-full h-80">
                    <ComparisonRadar languages={selectedLanguages} />
                  </div>
                </div>

                {/* Yan Yana Detaylar */}
                <div className="w-full lg:w-2/3 p-6 overflow-x-auto">
                  <div className="flex gap-6 min-w-max">
                    {selectedLanguages.map((lang, index) => (
                      <div 
                        key={lang.id} 
                        className="w-72 flex-shrink-0 flex flex-col animate-slide-in-right"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-3 mb-4 pb-3 border-b-2" style={{ borderColor: lang.color }}>
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: lang.color }} />
                          <h3 className="text-2xl font-bold" style={{ color: lang.color }}>{lang.name}</h3>
                        </div>
                      
                        <div className="space-y-4 text-sm">
                          <div className="p-3 rounded-xl bg-slate-800/50">
                            <p className="font-semibold text-slate-400 mb-1 text-xs uppercase tracking-wide">Felsefe</p>
                            <p className="italic text-slate-200">"{lang.philosophy}"</p>
                          </div>

                          <div>
                            <p className="font-semibold text-green-400 flex items-center gap-2 mb-2">
                              <Zap size={14} className="fill-current"/> Artılar
                            </p>
                            <ul className="space-y-1.5">
                              {lang.pros.map((p, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-red-400 flex items-center gap-2 mb-2">
                              <BookOpen size={14}/> Eksiler
                            </p>
                            <ul className="space-y-1.5">
                              {lang.cons.map((c, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Grid Listesi */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processedLanguages.map((lang, index) => {
            const isSelected = selectedIds.includes(lang.id);
            const perfScore = lang.metrics.find(m=>m.subject==='Performans').A;
            const learnScore = lang.metrics.find(m=>m.subject==='Öğrenme').A;
            const careerScore = lang.metrics.find(m=>m.subject==='Kariyer').A;
          
            return (
              <div 
                key={lang.id}
                className={`group glass rounded-2xl shadow-lg overflow-hidden flex flex-col card-hover animate-fade-in-up border-2 transition-all duration-300 ${
                  isSelected 
                    ? 'border-indigo-500 ring-2 ring-indigo-500/30' 
                    : 'border-transparent hover:border-slate-600'
                }`}
                style={{ animationDelay: `${(index % 9) * 50}ms` }}
              >
                {/* Kart Üstü */}
                <div className="p-5 pb-3">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-10 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <div>
                        <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {lang.name}
                        </h2>
                        <div className="flex gap-2 mt-1">
                          {perfScore >= 8 && <span className="badge badge-success">Hızlı</span>}
                          {learnScore >= 8 && <span className="badge badge-primary">Kolay</span>}
                          {careerScore >= 8 && <span className="badge badge-warning">Talep</span>}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSelection(lang.id)}
                      className={`p-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-medium ${
                        isSelected 
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25' 
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:scale-105'
                      }`}
                    >
                      {isSelected ? <Check size={16} /> : <Share2 size={16} />}
                      <span className="hidden sm:inline">{isSelected ? 'Seçili' : 'Kıyasla'}</span>
                    </button>
                  </div>
                  <p className="text-slate-400 text-sm min-h-[40px] italic leading-relaxed">
                    "{lang.philosophy}"
                  </p>
                </div>

                {/* Radar Grafiği */}
                <div className="h-56 w-full bg-gradient-to-b from-transparent to-slate-800/30 relative">
                  <RadarChartComponent data={lang.metrics} color={lang.color} />
                </div>

                {/* Metrik Özetleri */}
                <div className="px-5 py-3 bg-slate-800/30 border-t border-slate-700/50">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Performans</div>
                      <div className="flex items-center justify-center gap-1">
                        <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-500"
                            style={{ width: `${perfScore * 10}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-300 w-6">{perfScore}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Öğrenme</div>
                      <div className="flex items-center justify-center gap-1">
                        <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
                            style={{ width: `${learnScore * 10}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-300 w-6">{learnScore}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Kariyer</div>
                      <div className="flex items-center justify-center gap-1">
                        <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-500"
                            style={{ width: `${careerScore * 10}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-300 w-6">{careerScore}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detaylar (Artı/Eksi) */}
                <div className="p-5 flex-grow flex flex-col gap-4 border-t border-slate-700/50">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-green-400 mb-2 flex items-center gap-2">
                        <Zap size={14} className="fill-current" /> Güçlü Yönler
                      </h4>
                      <ul className="text-sm text-slate-300 space-y-1.5">
                        {lang.pros.slice(0, 2).map((p, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                            <span className="line-clamp-2">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  
                    <div>
                      <h4 className="text-sm font-bold text-red-400 mb-2 flex items-center gap-2">
                        <BookOpen size={14} /> Zayıf Yönler
                      </h4>
                      <ul className="text-sm text-slate-300 space-y-1.5">
                        {lang.cons.slice(0, 2).map((c, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                            <span className="line-clamp-2">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      
      {processedLanguages.length === 0 && (
          <div className="text-center py-20 animate-fade-in-up">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-800 flex items-center justify-center">
              <Search size={32} className="text-slate-600" />
            </div>
            <p className="text-slate-500 text-xl mb-2">Aradığınız kriterlere uygun bir dil bulunamadı.</p>
            <p className="text-slate-600 text-sm mb-6">Farklı bir arama terimi veya filtre deneyin.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSortBy('default');
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="max-w-7xl mx-auto mt-20 pt-12 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Code2 size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">Yazılım Dilleri Radar</h3>
                <p className="text-xs text-slate-500">58+ dil, 6 metrik, sınırsız analiz</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="text-center py-6 border-t border-slate-800/50">
            <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
              <Heart size={14} className="text-red-500 fill-current" />
              ile yapıldı • 2024-2026
            </p>
          </div>
        </footer>
      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}