import { Code2, GitFork, Heart } from 'lucide-react';
import { t } from '../i18n';
import type { Locale } from '../types';

interface AppFooterProps {
  technologyCount: number;
  locale: Locale;
}

export function AppFooter({ technologyCount, locale }: AppFooterProps) {
  const copy = t(locale);
  return (
    <footer className="max-w-7xl mx-auto mt-20 pt-12 border-t border-slate-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Code2 size={20} className="text-white" />
          </div>
          <div>
            <h2 className="font-bold text-white">{copy.title}</h2>
            <p className="text-xs text-slate-500">{technologyCount} {copy.footerSummary}</p>
          </div>
        </div>

        <a
          href="https://github.com/cekYc/language-radar"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <GitFork size={20} />
          <span className="text-sm">GitHub</span>
        </a>
      </div>

      <div className="text-center py-6 border-t border-slate-800/50">
        <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
          <Heart size={14} className="text-red-500 fill-current" /> {copy.madeBy}
        </p>
      </div>
    </footer>
  );
}
