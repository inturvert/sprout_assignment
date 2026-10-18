import React from 'react';
import { CreditCard, Smartphone, ShieldCheck, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { Mascot } from '../Mascot';
import type { Language } from '../../types';
import { translations } from '../../data/translations';

interface Screen2PreKYCProps {
  language: Language;
  onNext: () => void;
  onBack: () => void;
}

export const Screen2PreKYC: React.FC<Screen2PreKYCProps> = ({
  language,
  onNext,
  onBack,
}) => {
  const t = translations[language].onboarding.screen2;

  const checklist = [
    {
      icon: CreditCard,
      title: t.item1Title,
      desc: t.item1Desc,
      readyNote: language === 'en' ? 'Just number needed (no scan)' : 'केवल नंबर चाहिए (फोटो नहीं)',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      icon: Smartphone,
      title: t.item2Title,
      desc: t.item2Desc,
      readyNote: language === 'en' ? 'For instant OTP' : 'त्वरित OTP के लिए',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      icon: ShieldCheck,
      title: t.item3Title,
      desc: t.item3Desc,
      readyNote: language === 'en' ? 'GPay, PhonePe, Paytm' : 'GPay, PhonePe, Paytm',
      color: 'bg-amber-50 text-amber-700 border-amber-200',
    },
  ];

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
          <div className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full font-mono text-[11px]">
            <Clock className="h-3 w-3 text-emerald-600" />
            <span>90 Seconds</span>
          </div>
        </div>

        {/* Mascot & Heading */}
        <div className="flex items-center gap-3 my-2">
          <Mascot state="guiding" size="sm" />
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900 leading-snug">
              {t.preKycTitle}
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              {language === 'en' ? 'Zero surprises. Here is what you need:' : 'कोई आश्चर्य नहीं। आपको केवल इनकी जरूरत है:'}
            </p>
          </div>
        </div>

        {/* Checklist Cards */}
        <div className="mt-4 space-y-2.5">
          {checklist.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xs hover:border-emerald-300 transition-colors"
              >
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${item.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-slate-900 truncate">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                      {item.readyNote}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mascot reassurance card */}
        <div className="mt-3.5 rounded-2xl bg-gradient-to-r from-emerald-50/90 to-teal-50/90 border border-emerald-100 p-3 text-xs text-slate-700 flex items-center gap-2.5">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <p className="text-[11px] leading-snug text-slate-700">
            {t.mascotNote}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-slate-100">
        <button
          onClick={onNext}
          className="w-full min-h-[46px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
        >
          <span>{t.readyBtn}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-2 text-[10px] text-center text-slate-500">
          {language === 'en'
            ? 'Fully compliant with SEBI master circular on digital KYC'
            : 'डिजिटल केवाईसी पर सेबी के मास्टर सर्कुलर के पूर्णतः अनुरूप'}
        </p>
      </div>
    </div>
  );
};
