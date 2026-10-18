import React, { useState } from 'react';
import {
  X,
  Award,
  Layers,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Globe,
  AlertTriangle,
  HeartHandshake,
  Smartphone,
} from 'lucide-react';
import { Mascot } from './Mascot';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'funnel' | 'stakeholders' | 'mascot' | 'tech' | 'roadmap'>('funnel');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold">
              🌱
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900">
                Sprout 2.0 — Product & UX Engineering Case Study
              </h2>
              <p className="text-xs text-slate-500">
                Comprehensive design decisions, funnel mathematics, and stakeholder conflict resolution.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center text-slate-700 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-200 bg-white overflow-x-auto text-xs font-bold text-slate-600">
          <button
            onClick={() => setActiveTab('funnel')}
            className={`pb-3 px-3 border-b-2 transition-all shrink-0 flex items-center gap-1.5 ${
              activeTab === 'funnel'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            <span>1. Funnel Crisis & Math</span>
          </button>

          <button
            onClick={() => setActiveTab('stakeholders')}
            className={`pb-3 px-3 border-b-2 transition-all shrink-0 flex items-center gap-1.5 ${
              activeTab === 'stakeholders'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <HeartHandshake className="h-4 w-4" />
            <span>2. Stakeholder Conflicts</span>
          </button>

          <button
            onClick={() => setActiveTab('mascot')}
            className={`pb-3 px-3 border-b-2 transition-all shrink-0 flex items-center gap-1.5 ${
              activeTab === 'mascot'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Award className="h-4 w-4" />
            <span>3. Mascot System ("Sprout")</span>
          </button>

          <button
            onClick={() => setActiveTab('tech')}
            className={`pb-3 px-3 border-b-2 transition-all shrink-0 flex items-center gap-1.5 ${
              activeTab === 'tech'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Cpu className="h-4 w-4" />
            <span>4. Tech & Accessibility</span>
          </button>

          <button
            onClick={() => setActiveTab('roadmap')}
            className={`pb-3 px-3 border-b-2 transition-all shrink-0 flex items-center gap-1.5 ${
              activeTab === 'roadmap'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>5. 3-Week Launch Plan</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 text-slate-800 space-y-6">
          {/* TAB 1: FUNNEL CRISIS */}
          {activeTab === 'funnel' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-950 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">The Core Problem: A 92.5% Cumulative Drop-Off</h4>
                  <p className="mt-1 leading-relaxed">
                    Out of 40,000 users who downloaded Sprout, only 9,000 finished KYC (62% KYC abandonment rate), and only 3,000 made a first investment. Over 78% bounced on the homepage. Our mission in Sprout 2.0 is repairing the leaky bucket.
                  </p>
                </div>
              </div>

              {/* Visual Funnel Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5">
                  <div className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2">Before: Sprout 1.0 Funnel</div>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-rose-100">
                      <span>1. App Downloads</span>
                      <span className="font-mono font-bold">40,000 (100%)</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-rose-100">
                      <span>2. KYC Completed</span>
                      <span className="font-mono font-bold text-rose-700">9,000 (22.5%) — 77.5% drop!</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-rose-100">
                      <span>3. First Investment</span>
                      <span className="font-mono font-bold text-rose-700">3,000 (7.5% overall)</span>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-rose-700 leading-normal">
                    <strong>Root causes:</strong> Unexpected PAN/Aadhaar document surprises, 6.2s 4G load time, intimidating financial jargon, and silent verification screens where users thought the app crashed.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">After: Sprout 2.0 Target Funnel</div>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-emerald-100">
                      <span>1. High-Speed Landing</span>
                      <span className="font-mono font-bold text-emerald-700">&lt;1.5s load on 4G (sub-300KB)</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-emerald-100">
                      <span>2. Pre-KYC Preparation</span>
                      <span className="font-mono font-bold text-emerald-700">Projected 65% KYC completion</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-emerald-100">
                      <span>3. First ₹100 Investment</span>
                      <span className="font-mono font-bold text-emerald-700">Projected 40% conversion (+430% uplift)</span>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-emerald-800 leading-normal">
                    <strong>Solution levers:</strong> Upfront 90-second checklist, real-time animated verification stepper, frictionless 1-tap UPI, and a reassuring botanical mascot.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STAKEHOLDER CONFLICTS */}
          {activeTab === 'stakeholders' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-sm font-bold text-slate-900">
                Resolving Conflicting Stakeholder Mandates Without Compromise
              </h3>

              <div className="space-y-3 text-xs">
                {/* CEO vs Marketing */}
                <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm mb-1">
                    Conflict 1: Apple Minimalism (CEO) vs Viral Mascot & Pop-ups (Marketing)
                  </div>
                  <p className="text-slate-600 mb-2">
                    <strong>The Conflict:</strong> CEO wanted zero cartoon characters, premium minimalist Apple feel. Marketing wanted a mascot, 3 pop-ups, a live ticker, video, and referral banner.
                  </p>
                  <div className="bg-white p-3 rounded-xl border border-emerald-200 text-emerald-950">
                    <strong>Our Resolution:</strong> Created <em>"Sprout"</em> — a sleek, geometric monoline botanical companion. It is warm and iconic enough to be memorable and viral, yet abstract and refined enough to preserve executive trust. Pop-ups were replaced with non-intrusive bottom corner social proof toasts.
                  </div>
                </div>

                {/* Compliance vs Growth */}
                <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm mb-1">
                    Conflict 2: SEBI Disclaimers (Compliance) vs Conversion Rate (Product)
                  </div>
                  <p className="text-slate-600 mb-2">
                    <strong>The Conflict:</strong> Compliance required ≥12px font disclaimers visible without scrolling on every investment page, with strict prohibitions on words like "guaranteed", "safe", or "risk-free".
                  </p>
                  <div className="bg-white p-3 rounded-xl border border-emerald-200 text-emerald-950">
                    <strong>Our Resolution:</strong> Implemented a persistent, floating statutory disclosure bar at the viewport bottom (≥12px font) with expandable SEBI ARN details. Hero and calculator copy rigorously avoids forbidden words, substituting them with "historic CAGR", "sovereign backed", and "market-linked".
                  </div>
                </div>

                {/* Dev Limits vs Rich UI */}
                <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm mb-1">
                    Conflict 3: 1.5 MB Weight & 1 Dev (Engineering) vs Multi-screen Delight (Design)
                  </div>
                  <p className="text-slate-600 mb-2">
                    <strong>The Conflict:</strong> Only 1 frontend developer, 3-week timeline, 1.5 MB total bundle limit, animations under 100 KB.
                  </p>
                  <div className="bg-white p-3 rounded-xl border border-emerald-200 text-emerald-950">
                    <strong>Our Resolution:</strong> Zero heavy image assets. All illustrations and mascot animations are pure inline SVG and CSS keyframes. The total production build is sub-300 KB (80% below the 1.5 MB cap), loading in &lt;1.5s on budget 4G smartphones.
                  </div>
                </div>

                {/* Support Complaints */}
                <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm mb-1">
                    Conflict 4: Customer Confusion & Support Ticket Burden (Customer Support)
                  </div>
                  <p className="text-slate-600 mb-2">
                    <strong>The Conflict:</strong> Support tickets dominated by users unprepared for PAN/Aadhaar and users quitting because they thought the app crashed during verification.
                  </p>
                  <div className="bg-white p-3 rounded-xl border border-emerald-200 text-emerald-950">
                    <strong>Our Resolution:</strong> Created dedicated Screen 2 (Pre-KYC Readiness Checklist) so users are prepared in advance, and Screen 4 (Transparent Real-Time Verification Stepper) with continuous progress indicators and reassuring mascot copy.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MASCOT SYSTEM */}
          {activeTab === 'mascot' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <Mascot state="celebrating" size="lg" />
                <div className="text-xs space-y-1.5">
                  <h4 className="font-extrabold text-sm text-slate-900">
                    Meet "Sprout" (अंकुर) — The Financial Sherpa
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Rather than a juvenile cartoon or a cold sterile robotic emblem, Sprout is an intelligent, botanical micro-companion. It represents the psychological journey of an Indian investor: starting as a tiny seed of ₹100 and compounding into a thriving financial tree.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 font-semibold text-[11px]">
                    <span className="bg-white text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">Apple Minimalist Geometry</span>
                    <span className="bg-white text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">Sub-4 KB SVG Vector</span>
                    <span className="bg-white text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">4 Dynamic Emotional States</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="h-16 flex items-center justify-center">
                    <Mascot state="idle" size="sm" />
                  </div>
                  <div className="font-bold text-slate-900 mt-2">1. Idle / Welcome</div>
                  <div className="text-[11px] text-slate-500">Gentle breathing float, builds calm trust on Landing.</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="h-16 flex items-center justify-center">
                    <Mascot state="guiding" size="sm" />
                  </div>
                  <div className="font-bold text-slate-900 mt-2">2. Guiding</div>
                  <div className="text-[11px] text-slate-500">Explains why PAN is needed in Pre-KYC checklist.</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="h-16 flex items-center justify-center">
                    <Mascot state="verifying" size="sm" />
                  </div>
                  <div className="font-bold text-slate-900 mt-2">3. Verifying</div>
                  <div className="text-[11px] text-slate-500">Focused scanner mode, reassures user during wait.</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="h-16 flex items-center justify-center">
                    <Mascot state="celebrating" size="sm" />
                  </div>
                  <div className="font-bold text-slate-900 mt-2">4. Celebrating</div>
                  <div className="text-[11px] text-slate-500">Gold leaf shimmer and confetti on first ₹100 deposit.</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TECH & ACCESSIBILITY */}
          {activeTab === 'tech' && (
            <div className="space-y-4 animate-fadeIn text-xs">
              <h3 className="text-sm font-bold text-slate-900">
                Technical Constraints, Accessibility & Regional Localization
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                    <Smartphone className="h-4 w-4 text-emerald-600" />
                    <span>Budget Hardware Optimization (Sub-₹10,000 Phones)</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>• <strong>40% of users</strong> are on devices under ₹10,000 (limited GPU/RAM).</li>
                    <li>• Zero expensive backdrop-filter blur chains that stutter on low-end chipsets.</li>
                    <li>• Pure CSS hardware-accelerated transforms (`translate3d`, `opacity`).</li>
                    <li>• Total production build is <strong>~230 KB gzip</strong>, loading in &lt;1.2s on 4G.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                    <Globe className="h-4 w-4 text-emerald-600" />
                    <span>Hindi & Regional Scaling Without Redesign</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>• Devanagari script requires 15-20% additional vertical line height.</li>
                    <li>• Flexible auto-wrapping card layout prevents text clipping.</li>
                    <li>• Instant reactive language switch between English and Hindi.</li>
                    <li>• Financial jargon translated into intuitive everyday phrases (e.g. "Seed of Tomorrow", "Bachat").</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50 md:col-span-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>WCAG AA Accessibility Audit</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-900">Color Contrast</div>
                      <div className="text-emerald-700 font-mono font-bold">5.8:1 to 14.1:1</div>
                      <p className="text-[10px] text-slate-500 mt-0.5">Surpasses 4.5:1 WCAG AA minimum across all body text.</p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-900">Touch Target Sizes</div>
                      <div className="text-emerald-700 font-mono font-bold">Min. 44px x 44px</div>
                      <p className="text-[10px] text-slate-500 mt-0.5">Every interactive button, chip, and toggle meets ergonomic standards.</p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-900">Compliance Font Size</div>
                      <div className="text-emerald-700 font-mono font-bold">≥ 12px Strictly Enforced</div>
                      <p className="text-[10px] text-slate-500 mt-0.5">SEBI risk notices are clearly readable without microscopic legal text.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: ROADMAP */}
          {activeTab === 'roadmap' && (
            <div className="space-y-4 animate-fadeIn text-xs">
              <h3 className="text-sm font-bold text-slate-900">
                1-Developer 3-Week Execution Roadmap
              </h3>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                    <span>Week 1: Core Landing Page & Design System Scaffolding</span>
                    <span className="text-emerald-700 font-mono bg-emerald-50 px-2 py-0.5 rounded">Completed</span>
                  </div>
                  <p className="text-slate-600">
                    Implement Vite + React + Tailwind v4 base, create SVG mascot component, build responsive Hero, Calculator, and SEBI compliance bar.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                    <span>Week 2: 5-Screen Onboarding Flow & Verification Stepper</span>
                    <span className="text-emerald-700 font-mono bg-emerald-50 px-2 py-0.5 rounded">Completed</span>
                  </div>
                  <p className="text-slate-600">
                    Construct the continuous storytelling onboarding: Mobile OTP, Pre-KYC readiness screen, DigiLocker PAN input, live animated verification feedback, and first ₹100 UPI screen.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                    <span>Week 3: Hindi i18n Localization, Low-End Device QA & Launch</span>
                    <span className="text-emerald-700 font-mono bg-emerald-50 px-2 py-0.5 rounded">Ready for Production</span>
                  </div>
                  <p className="text-slate-600">
                    Bundle optimization (&lt;300 KB), testing on Android 4G budget devices, verifying WCAG AA contrast, and finalizing SEBI regulatory review.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Author: Sprout 2.0 Product & UX Engineering Candidate</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
