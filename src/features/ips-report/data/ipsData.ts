// ============================================================
// FBSF Cash Flow Optimization Fund — IPS Report Data
// Investment Policy Statement for The Nam–Nu Family
// ============================================================


export interface CashFlowComparisonItem {
  label: string;
  before: number; // in Millions VND
  after: number;  // in Millions VND
  unit: string;
}

export interface WealthProjectionPoint {
  year: number;
  label: string;
  baseline: number;   // in Billions VND (e.g. 0.95 = 950M)
  optimized: number;  // in Billions VND
  milestone?: string;
}

export interface IpsProfileData {
  familyName: string;
  strategySubtitle: string;
  portfolioCode: string;
  reviewCycle: string;
  approvalStatus: string;
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
  cashFlowComparison: readonly CashFlowComparisonItem[];
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
  allocationBreakdown: readonly {
    label: string;
    weight: number;
    pctStr: string;
    color: string;
    type: 'risky' | 'risk-free';
    role: string;
  }[];
  wealthProjection: readonly WealthProjectionPoint[];
  strategy: {
    eyebrow: string;
    title: string;
    description: string;
  };
  governancePillars: readonly {
    title: string;
    subtitle: string;
    desc: string;
    tag: string;
  }[];
}

export const ipsData: IpsProfileData = {
  familyName: 'The Nam–Nu Family',
  strategySubtitle:
    'A decade-long strategy for balanced growth and financial security.',
  portfolioCode: 'FBSF-IPS-2026-NN',
  reviewCycle: 'Semi-Annual (Q2 & Q4)',
  approvalStatus: 'Fiduciary Approved · Active',
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
  cashFlowComparison: [
    { label: 'Monthly Inflow', before: 45.0, after: 47.0, unit: 'M' },
    { label: 'Living & Debt Outflow', before: 53.3, after: 43.3, unit: 'M' },
    { label: 'Net Cash Flow', before: -8.3, after: 3.7, unit: 'M' },
  ],
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
  allocationBreakdown: [
    {
      label: 'Optimal Risky Portfolio (ORP)',
      weight: 21.16,
      pctStr: '21.16%',
      color: '#07875A',
      type: 'risky',
      role: 'VCB · SSI · MWG · GAS (Equity Growth Engine)',
    },
    {
      label: 'Vietnam Government Bonds (Rf)',
      weight: 78.84,
      pctStr: '78.84%',
      color: '#34D399',
      type: 'risk-free',
      role: 'Risk-Free Capital Anchor & Fixed Income Yield',
    },
  ],
  wealthProjection: [
    { year: 2026, label: 'Start (2026)', baseline: 0.95, optimized: 0.95, milestone: 'Baseline Restructuring' },
    { year: 2028, label: 'Yr 2 (2028)', baseline: 1.04, optimized: 1.32, milestone: 'Emergency Buffer Locked' },
    { year: 2030, label: 'Yr 4 (2030)', baseline: 1.13, optimized: 1.81, milestone: 'Education Fund Secured' },
    { year: 2032, label: 'Yr 6 (2032)', baseline: 1.22, optimized: 2.42, milestone: 'Home Equity Growth' },
    { year: 2034, label: 'Yr 8 (2034)', baseline: 1.31, optimized: 3.15, milestone: 'Debt Retired' },
    { year: 2036, label: 'Yr 10 (2036)', baseline: 1.42, optimized: 3.85, milestone: 'Financial Independence' },
  ],
  strategy: {
    eyebrow: 'INVESTMENT STRATEGY',
    title: 'Balanced Growth',
    description:
      'Balance long-term capital growth with capital preservation while accounting for family expenses, debt obligations, and liquidity needs.',
  },
  governancePillars: [
    {
      title: 'Target Strategy & Mandate',
      subtitle: 'Horizon: 10 Years · Target Return: 15% p.a.',
      desc: 'Balanced long-term capital growth with capital preservation while accounting for family expenses, debt retirement, and inflation hedge.',
      tag: 'Strategic Mandate',
    },
    {
      title: 'Rebalancing Discipline',
      subtitle: 'Semi-Annual Frequency (June & December)',
      desc: 'Systematic rebalancing triggered whenever risky asset weight drifts by ±5% from the 21.16% target, harvesting gains and mitigating drawdowns.',
      tag: 'Risk Control',
    },
    {
      title: 'Liquidity Safeguard',
      subtitle: '6-Month Emergency Buffer (₫260M)',
      desc: 'Strict liquidity tiering preserving minimum 6 months of living expenses in government bonds and money-market instruments before ORP deployment.',
      tag: 'Capital Safety',
    },
  ],
};
