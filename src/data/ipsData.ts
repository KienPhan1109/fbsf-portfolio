// ============================================================
// FBSF Cash Flow Optimization Fund — IPS Report Data
// Investment Policy Statement for The Nam–Nu Family
// ============================================================

export interface IpsProfileData {
  familyName: string;
  strategySubtitle: string;
  netWorth: string;
  netWorthDesc: string;
  riskProfile: string;
  riskProfileDesc: string;
  riskAversion: string;
  riskAversionDesc: string;
  cashFlow: {
    title: string;
    mainHighlight: string;
    badge: string;
    beforeOptimization: string;
    afterOptimization: string;
    monthlyImprovement: string;
  };
  allocation: {
    title: string;
    subtitle: string;
    riskyWeight: string;
    riskyLabel: string;
    riskyAssets: string;
    riskFreeWeight: string;
    riskFreeLabel: string;
    riskFreeDesc: string;
  };
  strategy: {
    eyebrow: string;
    title: string;
    description: string;
  };
}

export const ipsData: IpsProfileData = {
  familyName: 'The Nam–Nu Family',
  strategySubtitle:
    'A decade-long strategy for balanced growth and financial security.',
  netWorth: '₫950M',
  netWorthDesc: 'Total assets less liabilities',
  riskProfile: 'Moderate',
  riskProfileDesc: 'Balanced investor',
  riskAversion: '5.07',
  riskAversionDesc: 'Coefficient A',
  cashFlow: {
    title: 'MONTHLY NET CASH FLOW',
    mainHighlight: '+₫3.7M',
    badge: 'Positive cash flow after optimization',
    beforeOptimization: '−₫8.3M',
    afterOptimization: '+₫3.7M',
    monthlyImprovement: '+₫12M',
  },
  allocation: {
    title: 'Optimal Complete Portfolio',
    subtitle: 'Recommended investment allocation',
    riskyWeight: '21.16%',
    riskyLabel: 'Optimal Risky Portfolio',
    riskyAssets: 'VCB · SSI · MWG · GAS',
    riskFreeWeight: '78.84%',
    riskFreeLabel: 'Vietnam Government Bonds',
    riskFreeDesc: 'Risk-free asset assumption',
  },
  strategy: {
    eyebrow: 'INVESTMENT STRATEGY',
    title: 'Balanced Growth',
    description:
      'Balance long-term capital growth with capital preservation while accounting for family expenses, debt obligations, and liquidity needs.',
  },
};
