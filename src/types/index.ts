export type Language = 'en' | 'hi';

export type ViewMode = 'desktop-home' | 'mobile-home' | 'onboarding' | 'case-study';

export type MascotState = 'idle' | 'guiding' | 'verifying' | 'celebrating';

export interface InvestmentBasket {
  id: string;
  name: string;
  nameHi: string;
  category: string;
  categoryHi: string;
  riskLevel: 'Moderate' | 'Low' | 'High';
  riskLevelHi: string;
  cagr3Yr: string;
  minAmount: number;
  description: string;
  descriptionHi: string;
  allocation: { name: string; percent: number }[];
  tag: string;
  tagHi: string;
}

export interface OnboardingState {
  currentScreen: number; // 1 to 5
  mobileNumber: string;
  isOtpSent: boolean;
  otp: string;
  panNumber: string;
  dob: string;
  digilockerConsent: boolean;
  verificationStep: number; // 0: not started, 1: PAN check, 2: Aadhaar DigiLocker, 3: Account ready
  selectedBasketId: string;
  investmentAmount: number;
  paymentSuccess: boolean;
}
