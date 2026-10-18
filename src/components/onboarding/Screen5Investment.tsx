import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, ShieldAlert, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';
import { Mascot } from '../Mascot';
import type { Language, OnboardingState } from '../../types';
import { translations, starterBaskets } from '../../data/translations';

interface Screen5InvestmentProps {
  language: Language;
  state: OnboardingState;
  updateState: (updates: Partial<OnboardingState>) => void;
  onReset: () => void;
  onBack: () => void;
}

export const Screen5Investment: React.FC<Screen5InvestmentProps> = ({
  language,
  state,
  updateState,
  onReset,
  onBack,
}) => {
  const t = translations[language].onboarding.screen5;
  const [selectedBasket, setSelectedBasket] = useState(state.selectedBasketId || 'nifty50');
  const [amount, setAmount] = useState(state.investmentAmount || 100);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(state.paymentSuccess || false);

  const activeBasket = starterBaskets.find((b) => b.id === selectedBasket) || starterBaskets[0];

  const handlePayUpi = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
      updateState({ paymentSuccess: true, selectedBasketId: selectedBasket, investmentAmount: amount });

      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#10B981', '#F59E0B', '#3B82F6', '#059669'],
        });
      } catch (err) {
        console.log('Confetti triggered', err);
      }
    }, 1200);
  };

  return (
    <div className="flex flex-col h-full justify-between p-5 sm:p-6 text-slate-900">
      {!isPaid ? (
        <div>
          {/* Top navigation */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <button
              onClick={onBack}
              className="text-slate-600 hover:text-slate-900 flex items-center gap-1 font-medium"
            >
              ← {language === 'en' ? 'Back' : 'पीछे'}
            </button>
            <span className="font-mono text-[11px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-bold">
              Step 5 of 5
            </span>
          </div>

          {/* Mascot & Header */}
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

          {/* Curated Basket Selector */}
          <div className="mt-3">
            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
              {t.curatedHeading}
            </label>
            <div className="space-y-2">
              {starterBaskets.map((basket) => {
                const isSelected = basket.id === selectedBasket;
                return (
                  <div
                    key={basket.id}
                    onClick={() => setSelectedBasket(basket.id)}
                    className={`rounded-2xl p-3 border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-500/15 shadow-xs'
                        : 'border-slate-200/90 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">
                            {language === 'en' ? basket.name : basket.nameHi}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">
                          {language === 'en' ? basket.description : basket.descriptionHi}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold text-emerald-700 font-mono">
                          {basket.cagr3Yr}
                        </span>
                        <div className="text-[10px] text-slate-400">3Y CAGR</div>
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                      <span className="font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                        {language === 'en' ? basket.tag : basket.tagHi}
                      </span>
                      <span className="text-slate-500 font-mono">
                        Min. ₹{basket.minAmount}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Amount Presets */}
          <div className="mt-3">
            <div className="flex items-center justify-between mb-1.5 text-xs font-semibold text-slate-700">
              <span>{t.amountLabel}</span>
              <span className="font-mono text-emerald-700 font-bold">
                ₹{amount}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[100, 250, 500].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setAmount(amt)}
                  className={`min-h-[44px] rounded-xl text-xs font-bold transition-all ${
                    amount === amt
                      ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-600/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>

          {/* Compliance Disclaimer (Mandatory font >= 12px) */}
          <div className="mt-3 rounded-xl bg-amber-50/80 border border-amber-200/80 p-2.5 text-[12px] leading-relaxed text-amber-950 flex items-start gap-2">
            <ShieldAlert className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              {translations[language].compliance.persistentNotice}
            </p>
          </div>
        </div>
      ) : (
        /* Celebration / Success Screen */
        <div className="flex flex-col items-center justify-center text-center my-auto py-4 animate-fadeIn">
          <Mascot
            state="celebrating"
            size="lg"
            speechText={language === 'en' ? 'Boom! ₹100 Invested! 🌱' : 'बधाई! ₹100 का निवेश पूरा हुआ! 🌱'}
          />

          <h2 className="text-xl font-extrabold text-slate-900 mt-3">
            {t.upiSuccessTitle}
          </h2>
          <p className="text-xs text-slate-600 mt-1 max-w-xs leading-relaxed">
            {t.upiSuccessDesc}
          </p>

          {/* Portfolio Allotment Card */}
          <div className="mt-4 w-full rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-4 shadow-lg text-left">
            <div className="flex items-center justify-between text-[11px] text-emerald-100 border-b border-emerald-500/50 pb-2">
              <span>Folio No: SP-2026-9481</span>
              <span className="font-mono bg-emerald-800/60 px-2 py-0.5 rounded text-emerald-200">
                ACTIVE
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-emerald-200 font-medium">Asset Basket</div>
                <div className="text-sm font-bold text-white">
                  {language === 'en' ? activeBasket.name : activeBasket.nameHi}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-emerald-200 font-medium">Allotted</div>
                <div className="text-lg font-mono font-extrabold text-white">₹{amount}</div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-emerald-500/40 flex items-center justify-between text-[10px] text-emerald-100">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                <span>UPI ID: user@okhdfcbank</span>
              </span>
              <span>Units: 0.395 units</span>
            </div>
          </div>
        </div>
      )}

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-slate-100">
        {!isPaid ? (
          <button
            onClick={handlePayUpi}
            disabled={isProcessing}
            className="w-full min-h-[46px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 transform active:scale-98"
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span>Connecting to UPI Gateway...</span>
              </span>
            ) : (
              <>
                <Sparkles className="h-4 w-4 text-amber-300" />
                <span>{language === 'en' ? `Invest ₹${amount} via UPI` : `UPI द्वारा ₹${amount} निवेश करें`}</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        ) : (
          <div className="space-y-2">
            <button
              onClick={onReset}
              className="w-full min-h-[46px] rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{t.viewPortfolio}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                setIsPaid(false);
                updateState({ paymentSuccess: false });
              }}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-800 font-medium py-1"
            >
              Restart Simulation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
