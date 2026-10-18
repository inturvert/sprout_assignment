import React, { useState, useMemo } from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import type { Language } from '../types';
import { translations } from '../data/translations';

interface InvestmentCalculatorProps {
  language: Language;
  onStartOnboarding: () => void;
}

export const InvestmentCalculator: React.FC<InvestmentCalculatorProps> = ({
  language,
  onStartOnboarding,
}) => {
  const [monthlyAmount, setMonthlyAmount] = useState<number>(500);
  const [years, setYears] = useState<number>(5);
  const t = translations[language].calculator;

  // Compounding SIP calculation: FV = P * [ ( (1 + r)^n - 1 ) / r ] * (1 + r)
  // assuming annualized return 12.4% (Nifty 50 15-year average CAGR)
  const stats = useMemo(() => {
    const annualRate = 0.124;
    const monthlyRate = annualRate / 12;
    const months = years * 12;

    const invested = monthlyAmount * months;
    const futureValue =
      monthlyAmount *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const wealthGained = Math.max(0, futureValue - invested);

    return {
      invested: Math.round(invested),
      futureValue: Math.round(futureValue),
      wealthGained: Math.round(wealthGained),
      gainRatio: ((wealthGained / invested) * 100).toFixed(0),
    };
  }, [monthlyAmount, years]);

  const presetAmounts = [100, 250, 500, 1000, 2500];
  const presetYears = [1, 3, 5, 10];

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xl shadow-slate-100/50">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 mb-2">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            <span>Interactive Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {t.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            {t.subtitle}
          </p>
        </div>

        <div className="shrink-0 bg-slate-50 px-3.5 py-2 rounded-2xl border border-slate-200/60 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-emerald-600" />
          <span className="text-xs font-medium text-slate-700">Benchmark: Nifty 50 (~12.4% CAGR)</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Monthly Amount Input & Presets */}
          <div>
            <div className="flex items-center justify-between text-sm font-semibold text-slate-800 mb-2">
              <span>{t.monthlyLabel}</span>
              <span className="text-lg font-bold text-emerald-700 font-mono">
                ₹{monthlyAmount.toLocaleString('en-IN')} / mo
              </span>
            </div>

            <input
              type="range"
              min="100"
              max="5000"
              step="50"
              value={monthlyAmount}
              onChange={(e) => setMonthlyAmount(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none"
            />

            <div className="flex items-center gap-2 mt-3 flex-wrap">
              {presetAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setMonthlyAmount(amt)}
                  className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    monthlyAmount === amt
                      ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-600/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>

          {/* Time Horizon Slider & Presets */}
          <div>
            <div className="flex items-center justify-between text-sm font-semibold text-slate-800 mb-2">
              <span>{t.durationLabel}</span>
              <span className="text-lg font-bold text-slate-900 font-mono">
                {years} {years === 1 ? t.year : t.years}
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="15"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600 focus:outline-none"
            />

            <div className="flex items-center gap-2 mt-3 flex-wrap">
              {presetYears.map((yr) => (
                <button
                  key={yr}
                  onClick={() => setYears(yr)}
                  className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    years === yr
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {yr} {yr === 1 ? t.year : t.years}
                </button>
              ))}
            </div>
          </div>

          {/* Micro-insight */}
          <div className="rounded-2xl bg-emerald-50/70 border border-emerald-100 p-3.5 text-xs text-emerald-900 flex items-start gap-2.5">
            <span className="text-base">💡</span>
            <p>
              Starting with just <strong>₹{monthlyAmount}</strong> every month at age 22 vs waiting until age 30 can double your long-term wealth because time in the market beats timing the market.
            </p>
          </div>
        </div>

        {/* Results Card Column */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-7 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
          {/* Subtle backdrop circle */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              {t.potentialValue}
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight">
              ₹{stats.futureValue.toLocaleString('en-IN')}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-700/80 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{t.totalInvested}</span>
                <span className="font-semibold font-mono text-slate-200">
                  ₹{stats.invested.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-emerald-300 font-medium">{t.estimatedGrowth}</span>
                <span className="font-bold font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                  +₹{stats.wealthGained.toLocaleString('en-IN')} ({stats.gainRatio}%)
                </span>
              </div>
            </div>

            {/* Visual Bar Ratio */}
            <div className="mt-4">
              <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden flex">
                <div
                  className="bg-slate-400 h-full"
                  style={{
                    width: `${Math.min(100, (stats.invested / stats.futureValue) * 100)}%`,
                  }}
                  title="Deposited Amount"
                />
                <div
                  className="bg-emerald-400 h-full flex-1"
                  title="Estimated Growth"
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                <span>Deposited ({((stats.invested / stats.futureValue) * 100).toFixed(0)}%)</span>
                <span>Growth ({((stats.wealthGained / stats.futureValue) * 100).toFixed(0)}%)</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={onStartOnboarding}
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all transform active:scale-98 shadow-lg shadow-emerald-500/20"
            >
              <span>Plant Your First ₹100 Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-2 text-[10px] text-slate-400 text-center leading-normal">
              {t.cagrNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
