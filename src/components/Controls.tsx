import { Filter, Scale, Search } from 'lucide-react';
import type { CareerRegion, MetricKey, TechnologyCategory } from '../types';

export type CategoryFilter = 'all' | TechnologyCategory;
export type SortKey = 'default' | MetricKey;

const sortOptions: Array<{ value: SortKey; label: string }> = [
  { value: 'default', label: 'Varsayılan Sıralama' },
  { value: 'performance', label: 'En Yüksek Performans' },
  { value: 'learning', label: 'En Kolay Öğrenme' },
  { value: 'ecosystem', label: 'En Geniş Ekosistem' },
  { value: 'versatility', label: 'En Esnek Kullanım' },
  { value: 'developmentSpeed', label: 'En Hızlı Geliştirme' },
  { value: 'career', label: 'En İyi Kariyer İmkânı' },
];

const categoryOptions: Array<{ value: CategoryFilter; label: string }> = [
  { value: 'all', label: 'Tüm Kategoriler' },
  { value: 'programming', label: 'Programlama Dilleri' },
  { value: 'sql', label: 'SQL Dilleri' },
  { value: 'hdl', label: 'HDL' },
  { value: 'visual', label: 'Görsel Araçlar' },
];

interface ControlsProps {
  searchTerm: string;
  sortBy: SortKey;
  category: CategoryFilter;
  careerRegion: CareerRegion;
  selectedCount: number;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortKey) => void;
  onCategoryChange: (value: CategoryFilter) => void;
  onCareerRegionChange: (value: CareerRegion) => void;
  onClearSelection: () => void;
}

export function Controls({
  searchTerm,
  sortBy,
  category,
  careerRegion,
  selectedCount,
  onSearchChange,
  onSortChange,
  onCategoryChange,
  onCareerRegionChange,
  onClearSelection,
}: ControlsProps) {
  return (
    <div className="max-w-7xl mx-auto mb-8 sticky top-4 z-30">
      <div className="glass rounded-2xl p-4 shadow-2xl grid md:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_auto] items-center gap-3">
        <label className="relative group">
          <span className="sr-only">Teknoloji ara</span>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400" size={20} />
          <input
            type="search"
            placeholder="Teknoloji ara (örn: Python, Rust)..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/80 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </label>

        <label className="relative group">
          <span className="sr-only">Kategori seç</span>
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400" size={20} />
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value as CategoryFilter)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/80 border border-slate-600/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 appearance-none cursor-pointer"
          >
            {categoryOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>

        <label className="relative group">
          <span className="sr-only">Sıralama seç</span>
          <Scale className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400" size={20} />
          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value as SortKey)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/80 border border-slate-600/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 appearance-none cursor-pointer"
          >
            {sortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>

        <div className="flex flex-wrap xl:flex-nowrap items-center gap-2 justify-between xl:justify-end">
          <div className="flex rounded-xl bg-slate-800/70 p-1" aria-label="Kariyer bölgesi">
            {(['turkey', 'global'] as const).map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => onCareerRegionChange(region)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  careerRegion === region ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                aria-pressed={careerRegion === region}
              >
                {region === 'turkey' ? 'Türkiye' : 'Global'}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/50 whitespace-nowrap">
            <span className="text-sm"><span className="text-indigo-400">{selectedCount}</span><span className="text-slate-400"> / 3</span></span>
          </div>
          {selectedCount > 0 && (
            <button type="button" onClick={onClearSelection} className="px-3 py-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 text-sm">
              Temizle
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

