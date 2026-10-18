import React from 'react';
import { TrendingUp, Sparkles } from 'lucide-react';
import type { Language } from '../types';
import { translations } from '../data/translations';

interface MarketTickerProps {
  language: Language;
}

export const MarketTicker: React.FC<MarketTickerProps> = ({ language }) => {
  const t = translations[language].ticker;

  const tickerItems = [
    { label: t.nifty, value: '25,278.40', change: '+0.64%', isPositive: true },
    { label: t.sensex, value: '82,510.15', change: '+0.58%', isPositive: true },
    { label: t.gold, value: '₹7,650/gm', change: '+0.32%', isPositive: true },
    { label: t.tbill, value: '6.94% Yield', change: 'Stable', isPositive: true },
    { label: 'Tata Motors', value: '₹982.50', change: '+1.42%', isPositive: true },
    { label: 'Reliance', value: '₹2,980.00', change: '+0.88%', isPositive: true },
    { label: 'HDFC Bank', value: '₹1,664.20', change: '+0.45%', isPositive: true },
  ];

  return (
    <div className="w-full bg-slate-900 text-white overflow-hidden border-b border-slate-800 text-xs py-2 select-none">
      <div className="flex items-center">
        {/* Left Badge */}
        <div className="z-10 bg-slate-900 pl-4 pr-3 flex items-center gap-1.5 font-bold tracking-wider text-emerald-400 shrink-0 border-r border-slate-800 text-[11px]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {t.label}
        </div>

        {/* CSS Continuous Scroll Track */}
        <div className="relative flex overflow-x-hidden flex-1">
          <div className="animate-ticker flex items-center gap-8 py-0.5">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <div key={index} className="flex items-center gap-2 whitespace-nowrap text-slate-300">
                <span className="font-semibold text-slate-200">{item.label}</span>
                <span className="font-mono text-white">{item.value}</span>
                <span className="flex items-center text-emerald-400 font-mono text-[11px] bg-emerald-950/60 px-1.5 py-0.5 rounded">
                  <TrendingUp className="h-3 w-3 mr-0.5 inline" />
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Micro Pill */}
        <div className="z-10 bg-slate-900 pr-4 pl-3 hidden sm:flex items-center gap-1 text-[11px] text-slate-400 border-l border-slate-800 shrink-0">
          <Sparkles className="h-3 w-3 text-amber-400" />
          <span>Real-time via NSE / BSE</span>
        </div>
      </div>
    </div>
  );
};
