import React from 'react';
import { ArrowRight, BookOpen, Smartphone, Laptop } from 'lucide-react';
import type { Language, ViewMode } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onStartOnboarding: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  viewMode,
  onViewModeChange,
  onStartOnboarding,
}) => {
  const t = translations[language].nav;

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Logo & Mascot Symbol */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onViewModeChange('desktop-home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22v-9" />
                <path d="M9 13a4 4 0 0 1 6-3.46" />
                <path d="M17 10a4 4 0 0 1-5 5" />
                <circle cx="12" cy="7" r="1.5" fill="currentColor" />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                Sprout <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">2.0</span>
              </div>
              <div className="text-[10px] font-semibold text-slate-500 tracking-wide uppercase">
                Micro-Investing from ₹100
              </div>
            </div>
          </button>
        </div>

        {/* Center: Quick Evaluator View Mode Switcher */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-slate-100 p-1 border border-slate-200/80 text-xs font-semibold text-slate-600">
          <button
            onClick={() => onViewModeChange('desktop-home')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all min-h-[36px] ${
              viewMode === 'desktop-home'
                ? 'bg-white text-slate-900 shadow-sm font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            <Laptop className="h-3.5 w-3.5 text-emerald-600" />
            <span>Desktop Web</span>
          </button>

          <button
            onClick={() => onViewModeChange('mobile-home')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all min-h-[36px] ${
              viewMode === 'mobile-home'
                ? 'bg-white text-slate-900 shadow-sm font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            <Smartphone className="h-3.5 w-3.5 text-emerald-600" />
            <span>Mobile Web</span>
          </button>

          <button
            onClick={() => onViewModeChange('onboarding')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all min-h-[36px] ${
              viewMode === 'onboarding'
                ? 'bg-emerald-600 text-white shadow-sm font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span>5-Screen Onboarding</span>
          </button>

          <button
            onClick={() => onViewModeChange('case-study')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all min-h-[36px] ${
              viewMode === 'case-study'
                ? 'bg-slate-900 text-white shadow-sm font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5 text-amber-400" />
            <span>Design Rationale</span>
          </button>
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-xl bg-slate-100 p-0.5 border border-slate-200">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all min-h-[32px] ${
                language === 'en'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all min-h-[32px] ${
                language === 'hi'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              हिन्दी
            </button>
          </div>

          {/* Primary Onboarding CTA */}
          <button
            onClick={onStartOnboarding}
            className="min-h-[44px] px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/25 flex items-center gap-2"
          >
            <span>{t.startInvesting}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
