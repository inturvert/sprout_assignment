import React, { useState, useEffect } from 'react';
import { CheckCircle2, Loader2, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import { Mascot } from '../Mascot';
import type { Language, OnboardingState } from '../../types';
import { translations } from '../../data/translations';

interface Screen4VerificationProps {
  language: Language;
  state: OnboardingState;
  updateState: (updates: Partial<OnboardingState>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Screen4Verification: React.FC<Screen4VerificationProps> = ({
  language,
  updateState,
  onNext,
  onBack,
}) => {
  const t = translations[language].onboarding.screen4;
  const [progress, setProgress] = useState(25);
  const [currentStep, setCurrentStep] = useState(1);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Stage 1 -> Stage 2
    const timer1 = setTimeout(() => {
      setCurrentStep(2);
      setProgress(65);
    }, 1800);

    // Stage 2 -> Stage 3
    const timer2 = setTimeout(() => {
      setCurrentStep(3);
      setProgress(90);
    }, 3600);

    // Stage 3 -> Complete
    const timer3 = setTimeout(() => {
      setCurrentStep(4);
      setProgress(100);
      setIsDone(true);
      updateState({ verificationStep: 3 });
    }, 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [updateState]);

  const steps = [
    { id: 1, text: t.step1 },
    { id: 2, text: t.step2 },
    { id: 3, text: t.step3 },
  ];

  return (
    <div className="flex flex-col h-full justify-between p-5 sm:p-6 text-slate-900">
      <div>
        {/* Top bar with back button & live connection pulse */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
          <button
            onClick={onBack}
            className="text-slate-600 hover:text-slate-900 flex items-center gap-1 font-medium"
          >
            ← {language === 'en' ? 'Back' : 'पीछे'}
          </button>
          <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full font-mono text-[10px] border border-emerald-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>{isDone ? t.statusDone : t.statusActive}</span>
          </div>
        </div>

        {/* Mascot Centerpiece */}
        <div className="flex justify-center my-2">
          <Mascot
            state={isDone ? 'celebrating' : 'verifying'}
            size="md"
            speechText={
              isDone
                ? (language === 'en' ? 'Verified! You are all set! 🎉' : 'सत्यापित! आप तैयार हैं! 🎉')
                : (language === 'en' ? 'Verifying with NSDL & UIDAI... Hang tight!' : 'NSDL और आधार से पुष्टि हो रही है...')
            }
          />
        </div>

        {/* Header & Subtitle */}
        <div className="text-center mt-2">
          <h2 className="text-lg font-bold tracking-tight text-slate-900">
            {isDone ? (language === 'en' ? 'Verification Successful!' : 'पहचान सत्यापन सफल!') : t.title}
          </h2>
          <p className="mt-0.5 text-xs text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* Animated Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-[11px] font-semibold text-slate-700 mb-1">
            <span>{language === 'en' ? 'Progress' : 'प्रगति'}</span>
            <span className="font-mono text-emerald-700">{progress}%</span>
          </div>
          <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Live Step-by-Step Transparency List */}
        <div className="mt-4 space-y-2">
          {steps.map((st) => {
            const isCompleted = currentStep > st.id || isDone;
            const isRunning = currentStep === st.id && !isDone;

            return (
              <div
                key={st.id}
                className={`flex items-center gap-3 rounded-xl p-2.5 text-xs transition-all border ${
                  isCompleted
                    ? 'bg-emerald-50/80 border-emerald-200 text-slate-900'
                    : isRunning
                    ? 'bg-white border-emerald-400 shadow-sm text-slate-900 ring-2 ring-emerald-500/10'
                    : 'bg-slate-50 border-slate-200/60 text-slate-400'
                }`}
              >
                <div className="shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  ) : isRunning ? (
                    <Loader2 className="h-4 w-4 text-emerald-600 animate-spin" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border border-slate-300 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                      {st.id}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`text-[11px] leading-tight block ${isCompleted ? 'font-semibold text-emerald-950' : isRunning ? 'font-bold text-slate-900' : 'text-slate-500'}`}>
                    {st.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Reassurance Card (directly answers "I thought it crashed") */}
        <div className="mt-3.5 rounded-2xl bg-slate-50 border border-slate-200 p-2.5 flex items-center gap-2 text-[11px] text-slate-600">
          <Activity className="h-4 w-4 text-emerald-600 shrink-0 animate-pulse" />
          <span>
            {language === 'en'
              ? 'Real-time background verification. Do not refresh.'
              : 'सिस्टम सक्रिय है। कृपया बैक या रिफ्रेश न करें।'}
          </span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-slate-100">
        <button
          onClick={onNext}
          disabled={!isDone}
          className={`w-full min-h-[46px] rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
            isDone
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/25 cursor-pointer transform active:scale-98'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {isDone ? (
            <>
              <span>{t.nextBtn}</span>
              <ArrowRight className="h-4 w-4" />
            </>
          ) : (
            <span className="flex items-center gap-2">
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              <span>{language === 'en' ? 'Verifying with Depository...' : 'सत्यापन जारी है...'}</span>
            </span>
          )}
        </button>

        <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          <span>UIDAI & SEBI Compliant Digital Demat Allotment</span>
        </div>
      </div>
    </div>
  );
};
