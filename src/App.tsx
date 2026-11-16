import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';
import { ComparisonPanel } from './components/ComparisonPanel';
import { Controls, type CategoryFilter, type SortKey } from './components/Controls';
import { MethodologyPanel } from './components/MethodologyPanel';
import { ScrollToTop } from './components/ScrollToTop';
import { StatsSection } from './components/StatsSection';
import { TechnologyCard } from './components/TechnologyCard';
import { technologies } from './data/technologies';
import { t } from './i18n';
import type { CareerRegion, Locale } from './types';
import { getMetricEvidence } from './utils/metrics';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>('default');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [careerRegion, setCareerRegion] = useState<CareerRegion>('turkey');
  const [locale, setLocale] = useState<Locale>(() => {
    const savedLocale = window.localStorage.getItem('language-radar-locale');
    if (savedLocale === 'tr' || savedLocale === 'en') return savedLocale;
    return window.navigator.language.toLocaleLowerCase().startsWith('en') ? 'en' : 'tr';
  });
  const copy = t(locale);

  useEffect(() => {
    window.localStorage.setItem('language-radar-locale', locale);
    document.documentElement.lang = locale;
    document.title = locale === 'tr'
      ? 'Yazılım Dilleri Radar | 73 Teknoloji Analizi'
      : 'Language Radar | 73 Technology Comparisons';
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = locale === 'tr'
        ? '73 programlama dili ve aracını kaynaklı 0–100 puanlar ve Türkiye/Global kariyer analiziyle karşılaştırın.'
        : 'Compare 73 programming languages and tools using sourced 0–100 scores and Türkiye/Global career analysis.';
    }
  }, [locale]);

  const processedTechnologies = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase(locale === 'tr' ? 'tr-TR' : 'en-US');
    const result = technologies.filter((technology) => {
      const matchesSearch = technology.name.toLocaleLowerCase(locale === 'tr' ? 'tr-TR' : 'en-US').includes(normalizedSearch);
      const matchesCategory = category === 'all' || technology.category === category;
      return matchesSearch && matchesCategory;
    });

    if (sortBy !== 'default') {
      result.sort((first, second) => (
        getMetricEvidence(second, sortBy, careerRegion).score
        - getMetricEvidence(first, sortBy, careerRegion).score
      ));
    }

    return result;
  }, [careerRegion, category, locale, searchTerm, sortBy]);

  const selectedTechnologies = useMemo(
    () => technologies.filter((technology) => selectedIds.includes(technology.id)),
    [selectedIds],
  );

  const toggleSelection = (id: string) => {
    setSelectedIds((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= 3) {
        window.alert(copy.maxComparison);
        return current;
      }
      return [...current, id];
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSortBy('default');
    setCategory('all');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 gradient-mesh pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 p-4 md:p-8">
        <AppHeader technologyCount={technologies.length} locale={locale} onLocaleChange={setLocale} />
        <StatsSection technologies={technologies} locale={locale} />
        <MethodologyPanel locale={locale} />
        <Controls
          searchTerm={searchTerm}
          sortBy={sortBy}
          category={category}
          careerRegion={careerRegion}
          selectedCount={selectedIds.length}
          locale={locale}
          onSearchChange={setSearchTerm}
          onSortChange={setSortBy}
          onCategoryChange={setCategory}
          onCareerRegionChange={setCareerRegion}
          onClearSelection={() => setSelectedIds([])}
        />

        <ComparisonPanel
          technologies={selectedTechnologies}
          careerRegion={careerRegion}
          locale={locale}
          onClear={() => setSelectedIds([])}
        />

        <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processedTechnologies.map((technology, index) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              index={index}
              selected={selectedIds.includes(technology.id)}
              careerRegion={careerRegion}
              locale={locale}
              onToggle={toggleSelection}
            />
          ))}
        </main>

        {processedTechnologies.length === 0 && (
          <div className="text-center py-20 animate-fade-in-up">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-800 flex items-center justify-center">
              <Search size={32} className="text-slate-600" />
            </div>
            <p className="text-slate-500 text-xl mb-2">{copy.noResults}</p>
            <p className="text-slate-600 text-sm mb-6">{copy.tryDifferent}</p>
            <button
              type="button"
              onClick={clearFilters}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              {copy.clearFilters}
            </button>
          </div>
        )}

        <AppFooter technologyCount={technologies.length} locale={locale} />
      </div>

      <ScrollToTop locale={locale} />
    </div>
  );
}
