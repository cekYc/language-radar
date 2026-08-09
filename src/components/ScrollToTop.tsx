import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { t } from '../i18n';
import type { Locale } from '../types';

export function ScrollToTop({ locale }: { locale: Locale }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 animate-scale-in"
      aria-label={t(locale).scrollTop}
    >
      <ChevronUp size={24} />
    </button>
  );
}
