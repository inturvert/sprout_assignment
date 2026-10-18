import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Mascot } from '../Mascot';
import type { Language, OnboardingState } from '../../types';
import { translations } from '../../data/translations';

interface Screen1WelcomeProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  state: OnboardingState;
  updateState: (updates: Partial<OnboardingState>) => void;
  onNext: () => void;
}

export const Screen1Welcome: React.FC<Screen1WelcomeProps> = ({
  language,
  onLanguageChange,
  state,
  updateState,
  onNext,
}) => {
  const t = translations[language].onboarding.screen1;
  const [phone, setPhone] = useState(state.mobileNumber || '9876543210');
  const [otpSent, setOtpSent] = useState(state.isOtpSent);
  const [otp, setOtp] = useState(state.otp || '');
  const [error, setError] = useState('');

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      setError(language === 'en' ? 'Please enter a valid 10-digit number' : 'कृपया मान्य 10-अंकों का नंबर दर्ज करें');
      return;
    }
    setError('');
    setOtpSent(true);
    setOtp('4291'); // Auto-simulate OTP
    updateState({ mobileNumber: phone, isOtpSent: true, otp: '4291' });
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) {
      setError(language === 'en' ? 'Please enter the 4-digit OTP' : 'कृपया 4 अंकों का OTP दर्ज करें');
      return;
    }
    setError('');
    updateState({ mobileNumber: phone, otp });
    onNext();
  };

  return (
    <div className="flex flex-col h-full justify-between p-5 sm:p-6 text-slate-900">
      {/* Top Section */}
      <div>
        {/* Language selector chip */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
            Sprout 2.0
          </span>
          <div className="flex items-center rounded-lg bg-slate-100 p-0.5 text-xs font-semibold">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-0.5 rounded ${language === 'en' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-500'}`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-2 py-0.5 rounded ${language === 'hi' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-500'}`}
            >
              हिन्दी
            </button>
          </div>
        </div>

        {/* Mascot Centerpiece */}
        <div className="flex justify-center my-3">
          <Mascot
            state="idle"
            size="lg"
            speechText={language === 'en' ? 'Namaste! Let us plant your first ₹100 🌱' : 'नमस्ते! आइए आपका पहला ₹100 निवेश करें 🌱'}
          />
        </div>

        {/* Headlines */}
        <div className="text-center mt-2">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            {t.welcomeTitle}
          </h2>
          <p className="mt-1 text-xs text-slate-600 leading-relaxed px-2">
            {t.welcomeSubtitle}
          </p>
        </div>

        {/* Form Container */}
        <div className="mt-5">
          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.mobileLabel}
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-xs font-bold text-slate-500 border-r border-slate-300 pr-2">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder={t.mobilePlaceholder}
                    className="w-full min-h-[46px] rounded-xl border border-slate-300 bg-white pl-20 pr-4 text-sm font-semibold tracking-wider text-slate-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                  />
                </div>
                {error && <p className="mt-1 text-xs text-rose-600 font-medium">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full min-h-[46px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                <span>{t.sendOtpBtn}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-3.5 animate-fadeIn">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-700">
                    {t.otpLabel}
                  </label>
                  <button
                    type="button"
                    onClick={() => setOtpSent(false)}
                    className="text-[11px] font-semibold text-emerald-700 underline"
                  >
                    Change +91 {phone}
                  </button>
                </div>

                <input
                  type="text"
                  maxLength={4}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  placeholder={t.otpPlaceholder}
                  className="w-full min-h-[46px] text-center text-xl font-bold tracking-[0.5em] rounded-xl border border-emerald-500 bg-emerald-50/30 text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                />

                {/* Simulated auto-fill hint */}
                <div className="mt-1.5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Auto-read SMS OTP:</span>
                  <button
                    type="button"
                    onClick={() => setOtp('4291')}
                    className="font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded cursor-pointer hover:bg-emerald-200"
                  >
                    Autofill 4291 ✓
                  </button>
                </div>
                {error && <p className="mt-1 text-xs text-rose-600 font-medium">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full min-h-[46px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                <span>{t.verifyOtpBtn}</span>
                <CheckCircle2 className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Trust Micro-footer */}
      <div className="mt-4 pt-3 border-t border-slate-100 text-center">
        <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-600">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          <span>{language === 'en' ? '256-bit Bank Grade Encryption' : '256-बिट बैंक स्तरीय सुरक्षा'}</span>
        </div>
        <p className="mt-1 text-[10px] text-slate-500 leading-tight">
          {t.termsNotice}
        </p>
      </div>
    </div>
  );
};
