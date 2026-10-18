import React, { useState } from 'react';
import { ShieldAlert, Info, ChevronUp, ChevronDown } from 'lucide-react';
import type { Language } from '../types';
import { translations } from '../data/translations';

interface ComplianceDisclaimerProps {
  language: Language;
}

export const ComplianceDisclaimer: React.FC<ComplianceDisclaimerProps> = ({ language }) => {
  const [expanded, setExpanded] = useState(false);
  const t = translations[language].compliance;

  return (
    <aside
      aria-label="Regulatory Disclosures"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_-4px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[12px] leading-relaxed text-slate-700">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
              <ShieldAlert className="h-3.5 w-3.5" />
            </span>
            <span className="font-semibold text-slate-900 tracking-wide uppercase text-[11px] bg-slate-100 px-2 py-0.5 rounded">
              SEBI / AMFI Statutory Notice
            </span>
            <span className="hidden md:inline text-slate-600">
              {t.persistentNotice}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
            <span className="text-[12px] text-slate-500 font-mono hidden lg:inline">
              ARN-982134
            </span>
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 text-[12px] font-medium text-emerald-700 hover:text-emerald-800 underline underline-offset-2 py-1 px-2 rounded hover:bg-emerald-50 transition-colors"
            >
              <Info className="h-3.5 w-3.5" />
              <span>{expanded ? 'Hide Details' : 'Full Disclosures'}</span>
              {expanded ? <ChevronDown className="h-3 w-3" /> : <ChevronUp className="h-3 w-3" />}
            </button>
          </div>
        </div>

        {/* Mobile preview text if not expanded */}
        <p className="mt-1 text-[12px] text-slate-600 md:hidden">
          {t.persistentNotice}
        </p>

        {/* Expanded detailed legal compliance text */}
        {expanded && (
          <div className="mt-2.5 pt-2 border-t border-slate-100 text-[12px] text-slate-600 space-y-1.5 animate-fadeIn">
            <p>
              <strong>Depository & Brokerage Ecosystem:</strong> {t.sebiRegistration}
            </p>
            <p>
              <strong>Market Risk Warning:</strong> {t.noGuarantee} Past market behavior is not indicative of future performance. Users are urged to assess their financial risk capacity.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};
