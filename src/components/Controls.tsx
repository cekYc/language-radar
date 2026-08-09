import { Filter, Scale, Search } from 'lucide-react';
import { t } from '../i18n';
import type { CareerRegion, Locale, MetricKey, TechnologyCategory } from '../types';

export type CategoryFilter = 'all' | TechnologyCategory;
export type SortKey = 'default' | MetricKey;

interface ControlsProps {
  searchTerm: string;
  sortBy: SortKey;
  category: CategoryFilter;
  careerRegion: CareerRegion;
  selectedCount: number;
  locale: Locale;
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
  locale,
  onSearchChange,
  onSortChange,
  onCategoryChange,
  onCareerRegionChange,
  onClearSelection,
}: ControlsProps) {
  const copy = t(locale);
  const sortOptions: Array<{ value: SortKey; label: string }> = [
    { value: 'default', label: copy.defaultSort },
    { value: 'performance', label: copy.sortPerformance },
    { value: 'learning', label: copy.sortLearning },
    { value: 'ecosystem', label: copy.sortEcosystem },
    { value: 'versatility', label: copy.sortVersatility },
    { value: 'developmentSpeed', label: copy.sortDevelopment },
    { value: 'career', label: copy.sortCareer },
  ];
  const categoryOptions: Array<{ value: CategoryFilter; label: string }> = [
    { value: 'all', label: copy.allCategories },
    { value: 'programming', label: copy.programmingLanguages },
    { value: 'sql', label: copy.sqlLanguages },
    { value: 'hdl', label: 'HDL' },
    { value: 'visual', label: copy.visualTools },
  ];

  return (
    <div className="max-w-7xl mx-auto mb-8 sticky top-4 z-30">
      <div className="glass rounded-2xl p-4 shadow-2xl grid md:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_auto] items-center gap-3">
        <label className="relative group">
          <span className="sr-only">{copy.searchLabel}</span>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400" size={20} />
          <input
            type="search"
            placeholder={copy.searchPlaceholder}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/80 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </label>

        <label className="relative group">
          <span className="sr-only">{copy.categoryLabel}</span>
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
          <span className="sr-only">{copy.sortLabel}</span>
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
          <div className="flex rounded-xl bg-slate-800/70 p-1" aria-label={copy.careerRegion}>
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
                {region === 'turkey' ? copy.turkey : copy.global}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/50 whitespace-nowrap">
            <span className="text-sm"><span className="text-indigo-400">{selectedCount}</span><span className="text-slate-400"> / 3</span></span>
          </div>
          {selectedCount > 0 && (
            <button type="button" onClick={onClearSelection} className="px-3 py-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 text-sm">
              {copy.clear}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
