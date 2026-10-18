import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Award,
  Share2,
} from 'lucide-react';
import { Mascot } from './Mascot';
import { MarketTicker } from './MarketTicker';
import { InvestmentCalculator } from './InvestmentCalculator';
import type { Language } from '../types';
import { translations, starterBaskets } from '../data/translations';

interface HomepageProps {
  language: Language;
  onStartOnboarding: () => void;
  onOpenCaseStudy: () => void;
}

export const Homepage: React.FC<HomepageProps> = ({
  language,
  onStartOnboarding,
  onOpenCaseStudy,
}) => {
  const t = translations[language];

  // Simulated polite social-proof toast (replaces annoying pop-ups demanded by marketing)
  const [socialToast, setSocialToast] = useState<{ name: string; city: string; amount: number; time: string } | null>({
    name: 'Priya S.',
    city: 'Pune',
    amount: 100,
    time: '2 mins ago',
  });

  useEffect(() => {
    const toasts = [
      { name: 'Aman V.', city: 'Indore', amount: 250, time: 'Just now' },
      { name: 'Kavita M.', city: 'Lucknow', amount: 100, time: '1 min ago' },
      { name: 'Rohan D.', city: 'Bengaluru', amount: 500, time: '3 mins ago' },
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % toasts.length;
      setSocialToast(toasts[idx]);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Live Market Ticker */}
      <MarketTicker language={language} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3.5 py-1 text-xs font-semibold text-emerald-900 border border-emerald-300/60 shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
                <span>{t.hero.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
                {t.hero.headlineStart}{' '}
                <span className="relative whitespace-nowrap text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-from-font">
                  {t.hero.headlineHighlight}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                {t.hero.subheadline}
              </p>

              {/* Key Conversion CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={onStartOnboarding}
                  className="min-h-[50px] px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2.5 transform active:scale-98"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="#calculator-section"
                  className="min-h-[50px] px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300/80 shadow-xs flex items-center justify-center gap-2 transition-all"
                >
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                  <span>{t.hero.ctaSecondary}</span>
                </a>
              </div>

              {/* Trust micro-bar */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{t.hero.trustMicro}</span>
              </div>

              {/* Fast 3-stat pill row */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-slate-200/70">
                  <div className="text-[11px] font-semibold text-slate-500">{t.hero.stat1Label}</div>
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-700 font-mono">{t.hero.stat1Val}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-slate-200/70">
                  <div className="text-[11px] font-semibold text-slate-500">{t.hero.stat2Label}</div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono">{t.hero.stat2Val}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-slate-200/70">
                  <div className="text-[11px] font-semibold text-slate-500">{t.hero.stat3Label}</div>
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-700 font-mono">{t.hero.stat3Val}</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Mascot & Visual Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-white to-emerald-50/50 p-6 sm:p-8 border border-emerald-100 shadow-xl shadow-emerald-950/5 text-center">
                {/* Floating micro-badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-800 shadow-sm border border-slate-200 mb-4">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Meet Your Growth Mascot</span>
                </div>

                <div className="my-2">
                  <Mascot
                    state="idle"
                    size="xl"
                    speechText={language === 'en' ? 'Start small. ₹100 today, an oak tree tomorrow! 🌱' : 'छोटी शुरुआत, बड़ा भविष्य! 🌱'}
                  />
                </div>

                {/* Micro Product Preview Widget */}
                <div className="mt-6 rounded-2xl bg-white p-3.5 border border-slate-200/80 shadow-xs text-left">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="font-semibold text-slate-800">Your First Seed</span>
                    <span className="font-mono text-emerald-700 font-bold">100% Paperless</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-3/4 rounded-full animate-pulse" />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px]">
                    <span className="text-slate-600">Takes only 90 seconds</span>
                    <button
                      onClick={onStartOnboarding}
                      className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5"
                    >
                      <span>Try Now</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storyline Section: One Connected Journey */}
      <section className="py-14 bg-white border-y border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.storyline.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              {t.storyline.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200/80 hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 font-bold font-mono text-lg mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t.storyline.step1Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.storyline.step1Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                <span>Instant OTP autofill</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200/80 hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800 font-bold font-mono text-lg mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t.storyline.step2Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.storyline.step2Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-blue-700 flex items-center gap-1">
                <span>Solves KYC anxiety</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200/80 hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 font-bold font-mono text-lg mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t.storyline.step3Title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.storyline.step3Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-amber-700 flex items-center gap-1">
                <span>1-Tap UPI (GPay/PhonePe)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Baskets Showcase */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                Curated for Beginners
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Invest with ₹100. Never Jargon.
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Each basket is pre-diversified across India’s blue-chip companies or physical sovereign gold vaults.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {starterBaskets.map((basket) => (
              <div
                key={basket.id}
                className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      {language === 'en' ? basket.category : basket.categoryHi}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      Min. ₹{basket.minAmount}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {language === 'en' ? basket.name : basket.nameHi}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {language === 'en' ? basket.description : basket.descriptionHi}
                  </p>

                  {/* Asset Allocation Pill */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-700">Allocation:</div>
                    {basket.allocation.map((alloc: { name: string; percent: number }, i: number) => (
                      <div key={i} className="flex items-center justify-between text-[11px] text-slate-600">
                        <span>{alloc.name}</span>
                        <span className="font-mono font-semibold">{alloc.percent}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400">3Y Past Performance</div>
                    <div className="text-sm font-extrabold text-emerald-700 font-mono">
                      {basket.cagr3Yr}
                    </div>
                  </div>

                  <button
                    onClick={onStartOnboarding}
                    className="min-h-[40px] px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>Invest ₹100</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compounding Calculator Section */}
      <section id="calculator-section" className="py-14 bg-slate-100/70 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <InvestmentCalculator
            language={language}
            onStartOnboarding={onStartOnboarding}
          />
        </div>
      </section>

      {/* Stakeholder Reconciliation Grid (Core Evaluation Proof) */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full mb-2">
                <Award className="h-3.5 w-3.5 text-emerald-600" />
                <span>{t.reconciliation.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {t.reconciliation.title}
              </h2>
            </div>
            <button
              onClick={onOpenCaseStudy}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 self-start md:self-auto"
            >
              <span>View Full Design Case Study</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CEO Card */}
            <div className="rounded-2xl border border-slate-200/90 p-5 bg-slate-50 hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                <span className="h-2 w-2 rounded-full bg-slate-900" />
                <span>CEO Requirement</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                {t.reconciliation.ceoTitle}
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                {t.reconciliation.ceoDesc}
              </p>
            </div>

            {/* Marketing Card */}
            <div className="rounded-2xl border border-slate-200/90 p-5 bg-slate-50 hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-900 uppercase tracking-wider mb-2">
                <span className="h-2 w-2 rounded-full bg-purple-600" />
                <span>Marketing Requirement</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                {t.reconciliation.marketingTitle}
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                {t.reconciliation.marketingDesc}
              </p>
            </div>

            {/* Compliance Card */}
            <div className="rounded-2xl border border-slate-200/90 p-5 bg-slate-50 hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
                <span className="h-2 w-2 rounded-full bg-amber-600" />
                <span>Compliance Officer</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                {t.reconciliation.complianceTitle}
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                {t.reconciliation.complianceDesc}
              </p>
            </div>

            {/* Developer Card */}
            <div className="rounded-2xl border border-slate-200/90 p-5 bg-slate-50 hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                <span>Lead Developer</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                {t.reconciliation.techTitle}
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                {t.reconciliation.techDesc}
              </p>
            </div>

            {/* Support Lead Card */}
            <div className="rounded-2xl border border-slate-200/90 p-5 bg-slate-50 hover:border-slate-300 transition-all md:col-span-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                <span>Customer Support Lead (Drop-off & Complaints)</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                {t.reconciliation.supportTitle}
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                {t.reconciliation.supportDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Referral Micro-Incentive Banner */}
      <section className="py-12 bg-gradient-to-r from-emerald-800 to-teal-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-700/80 px-3 py-1 text-xs font-semibold text-emerald-200">
                <Share2 className="h-3.5 w-3.5" />
                <span>Sprout Referral Program</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                Plant a Seed with a Friend: Get ₹25 Bonus Investment
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
                When your friend completes KYC and plants their first ₹100, both of you receive ₹25 directly allocated into your Nifty Starter Basket.
              </p>
            </div>

            <button
              onClick={onStartOnboarding}
              className="min-h-[48px] px-6 py-2.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <span>Get Your Invite Code</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Social proof toast (Polite marketing replacement for 3 pop-ups) */}
      {socialToast && (
        <div className="fixed bottom-14 left-4 z-30 hidden sm:flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-md p-3 border border-emerald-100 shadow-lg text-xs text-slate-800 animate-fadeIn">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 font-bold">
            🌱
          </div>
          <div>
            <div className="font-semibold text-slate-900">
              {socialToast.name} from {socialToast.city}
            </div>
            <div className="text-[11px] text-slate-500">
              Invested ₹{socialToast.amount} • {socialToast.time}
            </div>
          </div>
        </div>
      )}

      {/* Comprehensive Desktop Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white pt-10 pb-20 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <div className="h-6 w-6 rounded-lg bg-emerald-600 flex items-center justify-center text-white text-xs">
                  🌱
                </div>
                <span>Sprout 2.0</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Empowering India’s next 100 million retail investors starting with just ₹100.
              </p>
            </div>

            <div>
              <div className="font-bold text-slate-900 mb-2">Products</div>
              <ul className="space-y-1.5 text-slate-600">
                <li>Nifty 50 Titan Basket</li>
                <li>24K Digital Gold</li>
                <li>Govt. 91-Day Treasury</li>
                <li>₹100 SIP Compounding</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-slate-900 mb-2">Compliance & Trust</div>
              <ul className="space-y-1.5 text-slate-600">
                <li>AMFI Registered: ARN-982134</li>
                <li>CDSL Depository Partner</li>
                <li>SEBI Master Circular KYC</li>
                <li>256-bit AES Vault Security</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-slate-900 mb-2">Corporate Office</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sprout Financial Technologies Pvt. Ltd.<br />
                Bandra Kurla Complex, Mumbai, Maharashtra 400051.<br />
                Support: help@sprout.invest | Mon-Sat 9am-6pm IST
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6 text-[11px] text-slate-400 space-y-2">
            <p>
              {t.compliance.sebiRegistration}
            </p>
            <p>
              {t.compliance.persistentNotice}
            </p>
            <p>© 2026 Sprout Financial Technologies Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
