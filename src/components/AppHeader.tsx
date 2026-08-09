import { Sparkles, TrendingUp, Users } from 'lucide-react';

interface AppHeaderProps {
  technologyCount: number;
}

export function AppHeader({ technologyCount }: AppHeaderProps) {
  return (
    <header className="mb-12 text-center max-w-4xl mx-auto animate-fade-in-up">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
        <Sparkles size={16} className="text-yellow-400" />
        <span className="text-sm text-slate-300">{technologyCount} Teknoloji Analizi</span>
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
          <span>Kaynaklı ve Tarihli</span>
        </div>
        <div className="w-1 h-1 bg-slate-600 rounded-full" />
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Users size={16} className="text-blue-400" />
          <span>Türkçe Destekli</span>
        </div>
      </div>
    </header>
  );
}

