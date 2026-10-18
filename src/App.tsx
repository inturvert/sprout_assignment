import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Homepage } from './components/Homepage';
import { MobileFrame } from './components/onboarding/MobileFrame';
import { ComplianceDisclaimer } from './components/ComplianceDisclaimer';
import { CaseStudyModal } from './components/CaseStudyModal';
import type { Language, ViewMode } from './types';
import { Smartphone, Sparkles } from 'lucide-react';

export function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [viewMode, setViewMode] = useState<ViewMode>('desktop-home');
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        viewMode={viewMode}
        onViewModeChange={(mode) => {
          if (mode === 'case-study') {
            setIsCaseStudyOpen(true);
          } else {
            setViewMode(mode);
          }
        }}
        onStartOnboarding={() => setViewMode('onboarding')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* DESKTOP HOMEPAGE MODE */}
        {viewMode === 'desktop-home' && (
          <Homepage
            language={language}
            onStartOnboarding={() => setViewMode('onboarding')}
            onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
          />
        )}

        {/* MOBILE HOMEPAGE PREVIEW MODE (Allows testing mobile layout directly on desktop) */}
        {viewMode === 'mobile-home' && (
          <div className="py-8 px-4 flex flex-col items-center justify-center bg-slate-200/50 min-h-[calc(100vh-65px)]">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-full border border-slate-300 shadow-xs">
              <Smartphone className="h-4 w-4 text-emerald-600" />
              <span>Simulated Mobile Viewport (390px Width — 91% of Sprout Users)</span>
            </div>

            <div className="w-full max-w-[390px] bg-slate-50 border-4 border-slate-800 rounded-[36px] shadow-2xl overflow-hidden min-h-[800px] flex flex-col">
              <div className="h-5 bg-slate-800 flex justify-center items-center">
                <div className="h-2.5 w-20 bg-slate-900 rounded-full" />
              </div>
              <div className="flex-1 overflow-y-auto max-h-[750px]">
                <Homepage
                  language={language}
                  onStartOnboarding={() => setViewMode('onboarding')}
                  onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
                />
              </div>
            </div>
          </div>
        )}

        {/* 5-SCREEN ONBOARDING JOURNEY MODE */}
        {viewMode === 'onboarding' && (
          <div className="py-6 px-4 bg-slate-100/70 min-h-[calc(100vh-65px)] flex flex-col items-center">
            {/* Context Banner */}
            <div className="max-w-2xl text-center mb-2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 mb-1 border border-emerald-200">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                <span>Continuous Storytelling Journey: Screens 1 through 5</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                First-Time User Onboarding & First ₹100 Investment
              </h2>
              <p className="text-xs text-slate-600 mt-1 max-w-lg mx-auto">
                Engineered with pre-KYC expectation setting (solves 62% drop-off) and active real-time verification feedback (eliminates crash fear).
              </p>
            </div>

            {/* The Smartphone Simulator */}
            <MobileFrame
              language={language}
              onLanguageChange={setLanguage}
              onClose={() => setViewMode('desktop-home')}
            />
          </div>
        )}
      </main>

      {/* Persistent Statutory SEBI Risk Disclaimer (Font >= 12px, visible without scrolling) */}
      <ComplianceDisclaimer language={language} />

      {/* Evaluator UX Case Study Modal */}
      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />
    </div>
  );
}

export default App;
