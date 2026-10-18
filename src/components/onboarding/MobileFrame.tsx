import React, { useState } from 'react';
import { Wifi, Battery, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { Screen1Welcome } from './Screen1Welcome';
import { Screen2PreKYC } from './Screen2PreKYC';
import { Screen3KYCInput } from './Screen3KYCInput';
import { Screen4Verification } from './Screen4Verification';
import { Screen5Investment } from './Screen5Investment';
import type { Language, OnboardingState } from '../../types';

interface MobileFrameProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onClose?: () => void;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({
  language,
  onLanguageChange,
}) => {
  const [state, setState] = useState<OnboardingState>({
    currentScreen: 1,
    mobileNumber: '9876543210',
    isOtpSent: false,
    otp: '',
    panNumber: 'ABCDE1234F',
    dob: '2000-01-15',
    digilockerConsent: true,
    verificationStep: 0,
    selectedBasketId: 'nifty50',
    investmentAmount: 100,
    paymentSuccess: false,
  });

  const updateState = (updates: Partial<OnboardingState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const goToScreen = (screenNum: number) => {
    setState((prev) => ({ ...prev, currentScreen: screenNum }));
  };

  const handleReset = () => {
    setState({
      currentScreen: 1,
      mobileNumber: '9876543210',
      isOtpSent: false,
      otp: '',
      panNumber: 'ABCDE1234F',
      dob: '2000-01-15',
      digilockerConsent: true,
      verificationStep: 0,
      selectedBasketId: 'nifty50',
      investmentAmount: 100,
      paymentSuccess: false,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 px-4">
      {/* Simulator Control Dock (For Evaluator Convenience) */}
      <div className="mb-4 flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-white border border-slate-200/80 px-4 py-2 shadow-sm text-xs font-semibold text-slate-700">
        <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">
          Onboarding Inspector:
        </span>

        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((screenNum) => (
            <button
              key={screenNum}
              onClick={() => goToScreen(screenNum)}
              className={`min-h-[32px] px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                state.currentScreen === screenNum
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Screen {screenNum}
            </button>
          ))}
        </div>

        <div className="h-4 w-px bg-slate-200 mx-1" />

        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg transition-colors min-h-[32px]"
          title="Reset Flow"
        >
          <RotateCcw className="h-3 w-3" />
          <span>Reset Flow</span>
        </button>
      </div>

      {/* Realistic Smartphone Chassis */}
      <div className="relative w-full max-w-[390px] h-[780px] bg-slate-950 rounded-[50px] p-3 shadow-2xl ring-1 ring-slate-800/80 shadow-emerald-950/20">
        {/* Outer buttons (Volume & Power simulation) */}
        <div className="absolute -left-1.5 top-28 w-1 h-10 bg-slate-800 rounded-l-md" />
        <div className="absolute -left-1.5 top-42 w-1 h-10 bg-slate-800 rounded-l-md" />
        <div className="absolute -right-1.5 top-32 w-1 h-14 bg-slate-800 rounded-r-md" />

        {/* Screen Bezel / Container */}
        <div className="relative w-full h-full bg-slate-50 rounded-[40px] overflow-hidden flex flex-col border border-slate-200 shadow-inner">
          {/* Dynamic Island / Speaker & Status Bar */}
          <div className="relative z-20 flex items-center justify-between px-6 pt-3 pb-2 text-[11px] font-semibold text-slate-900 bg-white/70 backdrop-blur-md select-none border-b border-slate-100/60">
            {/* Clock */}
            <span className="font-mono">19:42</span>

            {/* Dynamic Island */}
            <div className="h-4 w-24 bg-slate-900 rounded-full flex items-center justify-end px-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Signal & Battery */}
            <div className="flex items-center gap-1.5 text-slate-800">
              <span className="text-[10px] font-bold">5G</span>
              <Wifi className="h-3.5 w-3.5" />
              <Battery className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Screen Content Viewport */}
          <div className="flex-1 overflow-y-auto">
            {state.currentScreen === 1 && (
              <Screen1Welcome
                language={language}
                onLanguageChange={onLanguageChange}
                state={state}
                updateState={updateState}
                onNext={() => goToScreen(2)}
              />
            )}

            {state.currentScreen === 2 && (
              <Screen2PreKYC
                language={language}
                onNext={() => goToScreen(3)}
                onBack={() => goToScreen(1)}
              />
            )}

            {state.currentScreen === 3 && (
              <Screen3KYCInput
                language={language}
                state={state}
                updateState={updateState}
                onNext={() => goToScreen(4)}
                onBack={() => goToScreen(2)}
              />
            )}

            {state.currentScreen === 4 && (
              <Screen4Verification
                language={language}
                state={state}
                updateState={updateState}
                onNext={() => goToScreen(5)}
                onBack={() => goToScreen(3)}
              />
            )}

            {state.currentScreen === 5 && (
              <Screen5Investment
                language={language}
                state={state}
                updateState={updateState}
                onReset={handleReset}
                onBack={() => goToScreen(4)}
              />
            )}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="py-2 flex justify-center bg-white/90 border-t border-slate-100">
            <div className="h-1 w-32 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>

      {/* Screen Pagination Pill */}
      <div className="mt-3 flex items-center gap-4 text-xs font-medium text-slate-500">
        <button
          onClick={() => goToScreen(Math.max(1, state.currentScreen - 1))}
          disabled={state.currentScreen === 1}
          className="flex items-center gap-1 hover:text-slate-900 disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous Screen</span>
        </button>

        <span className="font-mono text-slate-700 font-bold">
          {state.currentScreen} / 5
        </span>

        <button
          onClick={() => goToScreen(Math.min(5, state.currentScreen + 1))}
          disabled={state.currentScreen === 5}
          className="flex items-center gap-1 hover:text-slate-900 disabled:opacity-40"
        >
          <span>Next Screen</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
