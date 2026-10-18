import React, { useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Mascot } from '../Mascot';
import type { Language, OnboardingState } from '../../types';
import { translations } from '../../data/translations';

interface Screen3KYCInputProps {
  language: Language;
  state: OnboardingState;
  updateState: (updates: Partial<OnboardingState>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Screen3KYCInput: React.FC<Screen3KYCInputProps> = ({
  language,
  state,
  updateState,
  onNext,
  onBack,
}) => {
  const t = translations[language].onboarding.screen3;
  const [pan, setPan] = useState(state.panNumber || 'ABCDE1234F');
  const [dob, setDob] = useState(state.dob || '2000-01-15');
  const [consent, setConsent] = useState(state.digilockerConsent ?? true);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(pan.toUpperCase())) {
      setError(
        language === 'en'
          ? 'Please enter a valid 10-character PAN (e.g., ABCDE1234F)'
          : 'कृपया मान्य 10-अक्षरों का पैन नंबर दर्ज करें (उदा. ABCDE1234F)'
      );
      return;
    }
    if (!consent) {
      setError(
        language === 'en'
          ? 'Please authorize verification consent to proceed'
          : 'कृपया आगे बढ़ने के लिए सत्यापन सहमति दें'
      );
      return;
    }
    setError('');
    updateState({ panNumber: pan.toUpperCase(), dob, digilockerConsent: consent });
    onNext();
  };

  return (
    <div className="flex flex-col h-full justify-between p-5 sm:p-6 text-slate-900">
      <div>
        {/* Step indicator */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
          <button
            onClick={onBack}
            className="text-slate-600 hover:text-slate-900 flex items-center gap-1 font-medium"
          >
            ← {language === 'en' ? 'Back' : 'पीछे'}
          </button>
          <span className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600">
            Step 3 of 5
          </span>
        </div>

        {/* Mascot Header */}
        <div className="flex items-center gap-3 my-2">
          <Mascot state="guiding" size="sm" />
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              {t.title}
            </h2>
            <p className="text-xs text-slate-600">
              {t.subtitle}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
          {/* PAN Card Field */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-700">
                {t.panLabel}
              </label>
              <button
                type="button"
                onClick={() => setPan('ABCDE1234F')}
                className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded"
              >
                Sample PAN
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                maxLength={10}
                value={pan}
                onChange={(e) => setPan(e.target.value.toUpperCase())}
                placeholder={t.panPlaceholder}
                className="w-full min-h-[46px] rounded-xl border border-slate-300 bg-white px-3.5 text-sm font-mono font-bold tracking-widest text-slate-900 uppercase focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
              />
              <span className="absolute right-3 top-3 text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" />
              </span>
            </div>
          </div>

          {/* Date of Birth Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.dobLabel}
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full min-h-[46px] rounded-xl border border-slate-300 bg-white px-3.5 text-xs font-semibold text-slate-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
            />
          </div>

          {/* DigiLocker Consent Box */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-3 text-xs">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 shrink-0"
              />
              <div>
                <span className="font-bold text-slate-900 text-xs block">
                  {t.consentTitle}
                </span>
                <span className="text-[11px] text-slate-600 leading-snug mt-0.5 block">
                  {t.consentDesc}
                </span>
              </div>
            </label>
          </div>

          {error && <p className="text-xs text-rose-600 font-medium">{error}</p>}
        </form>
      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-slate-100">
        <button
          onClick={handleSubmit}
          className="w-full min-h-[46px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
        >
          <Lock className="h-3.5 w-3.5" />
          <span>{t.submitBtn}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
        <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          <span>Direct secure gateway to NSDL & UIDAI DigiLocker</span>
        </div>
      </div>
    </div>
  );
};
