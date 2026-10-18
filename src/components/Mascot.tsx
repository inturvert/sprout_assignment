import React from 'react';
import type { MascotState } from '../types';

interface MascotProps {
  state?: MascotState;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  speechText?: string;
}

export const Mascot: React.FC<MascotProps> = ({
  state = 'idle',
  size = 'md',
  className = '',
  speechText,
}) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Optional Speech Bubble */}
      {speechText && (
        <div className="mb-2 max-w-xs animate-bounce rounded-2xl bg-white/95 px-3.5 py-1.5 text-xs font-medium text-slate-800 shadow-md border border-emerald-100 backdrop-blur-sm">
          <span>{speechText}</span>
          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-emerald-100 bg-white" />
        </div>
      )}

      {/* Mascot SVG Vector Body */}
      <div className={`relative ${sizeMap[size]} transition-transform duration-500`}>
        {/* Glow halo */}
        <div
          className={`absolute inset-0 rounded-full blur-xl transition-all duration-700 ${
            state === 'celebrating'
              ? 'bg-amber-300/40 scale-125'
              : state === 'verifying'
              ? 'bg-emerald-400/30 animate-pulse'
              : 'bg-emerald-200/20'
          }`}
        />

        <svg
          viewBox="0 0 120 120"
          className={`w-full h-full drop-shadow-sm ${
            state === 'idle'
              ? 'animate-float'
              : state === 'verifying'
              ? 'animate-pulse'
              : ''
          }`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Pod / Base */}
          <ellipse cx="60" cy="110" rx="35" ry="6" fill="#0F172A" fillOpacity="0.06" />

          {/* Seed / Body (Apple-like curved pebble / droplet) */}
          <path
            d="M60 22C41.2 22 26 37.2 26 56C26 77.5 42 102 60 106C78 102 94 77.5 94 56C94 37.2 78.8 22 60 22Z"
            fill="url(#bodyGradient)"
            stroke="#059669"
            strokeWidth="2.5"
          />

          {/* Inner Light Sheen / Glass Highlight */}
          <path
            d="M34 52C34 38 43 28 58 26C52 29 46 36 44 48C42 60 48 76 56 86C44 76 34 64 34 52Z"
            fill="white"
            fillOpacity="0.35"
          />

          {/* The Golden / Emerald Sprout Leaf Crown */}
          <g className={state === 'celebrating' ? 'animate-bounce' : ''}>
            {/* Primary Leaf */}
            <path
              d="M60 22C60 22 58 6 74 6C74 18 64 22 60 22Z"
              fill={state === 'celebrating' ? '#F59E0B' : '#10B981'}
              stroke={state === 'celebrating' ? '#D97706' : '#047857'}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Secondary Twin Leaflet */}
            <path
              d="M59 22C59 22 55 12 43 14C45 23 54 23 59 22Z"
              fill={state === 'celebrating' ? '#FBBF24' : '#34D399'}
              stroke={state === 'celebrating' ? '#D97706' : '#059669'}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Leaf Vein */}
            <path
              d="M60 21C64 16 68 12 72 9"
              stroke={state === 'celebrating' ? '#92400E' : '#065F46'}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>

          {/* Facial Expressions - Minimal, Intelligent, Non-Cartoonish */}
          {state === 'verifying' ? (
            /* Verifying: Focused, scanning glasses / digital visor look */
            <g>
              <rect x="42" y="50" width="14" height="10" rx="3" fill="#047857" fillOpacity="0.1" stroke="#047857" strokeWidth="1.8" />
              <rect x="64" y="50" width="14" height="10" rx="3" fill="#047857" fillOpacity="0.1" stroke="#047857" strokeWidth="1.8" />
              <line x1="56" y1="55" x2="64" y2="55" stroke="#047857" strokeWidth="1.8" />
              <circle cx="49" cy="55" r="2" fill="#047857" />
              <circle cx="71" cy="55" r="2" fill="#047857" />
              <path d="M53 72C57 74 63 74 67 72" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
            </g>
          ) : state === 'celebrating' ? (
            /* Celebrating: Joyful curved eyes, radiant smile */
            <g>
              <path d="M42 54C45 49 51 49 54 54" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M66 54C69 49 75 49 78 54" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
              {/* Happy Open Smile */}
              <path d="M49 66C49 73 71 73 71 66" fill="#F87171" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
              {/* Sparkles */}
              <circle cx="28" cy="36" r="2.5" fill="#F59E0B" />
              <circle cx="92" cy="38" r="2" fill="#10B981" />
              <circle cx="95" cy="62" r="2.5" fill="#F59E0B" />
              <circle cx="24" cy="68" r="1.5" fill="#3B82F6" />
            </g>
          ) : (
            /* Idle / Guiding: Calm, friendly, reassuring look */
            <g>
              {/* Calm, intelligent eyes */}
              <ellipse cx="48" cy="53" rx="3" ry="4" fill="#0F172A" />
              <ellipse cx="72" cy="53" rx="3" ry="4" fill="#0F172A" />
              {/* Eye Catchlights */}
              <circle cx="47" cy="51" r="1.2" fill="white" />
              <circle cx="71" cy="51" r="1.2" fill="white" />
              {/* Subtle Blush */}
              <ellipse cx="41" cy="60" rx="4" ry="2" fill="#FCA5A5" fillOpacity="0.4" />
              <ellipse cx="79" cy="60" rx="4" ry="2" fill="#FCA5A5" fillOpacity="0.4" />
              {/* Reassuring Smile */}
              <path d="M53 65C57 68 63 68 67 65" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
            </g>
          )}

          {/* Gradients */}
          <defs>
            <linearGradient id="bodyGradient" x1="60" y1="22" x2="60" y2="106" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F0FDF4" />
              <stop offset="0.65" stopColor="#D1FAE5" />
              <stop offset="1" stopColor="#A7F3D0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mascot Name Badge */}
      <div className="mt-1 flex items-center gap-1 rounded-full bg-slate-900/5 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 tracking-wide uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
        Sprout Guide
      </div>
    </div>
  );
};
