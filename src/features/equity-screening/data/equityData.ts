export interface StockCriterion {
  id: string;
  idx: string;
  name: string;
  requirement: string;
  isMono?: boolean;
  isFullWidth?: boolean;
  tagline?: string;
  tags?: string[];
  subNote?: string;
}

export const stockSelectionCriteria: StockCriterion[] = [
  {
    id: 'profitability',
    idx: '01',
    name: 'Profitability',
    requirement: 'ROE > 15%',
    isMono: true,
  },
  {
    id: 'valuation',
    idx: '02',
    name: 'Valuation',
    requirement: 'Forward P/E ≤ 16 · P/B < 3',
    isMono: true,
  },
  {
    id: 'financial-health',
    idx: '03',
    name: 'Financial Health',
    requirement: 'D/E < 0.8',
    isMono: true,
  },
  {
    id: 'dividends',
    idx: '04',
    name: 'Dividends',
    requirement: 'Stable payout history',
  },
  {
    id: 'liquidity',
    idx: '05',
    name: 'Liquidity',
    requirement: 'Large-cap, highly liquid stocks',
  },
  {
    id: 'exclusions',
    idx: '06',
    name: 'Exclusions',
    requirement: 'Tobacco · Weapons · Gambling',
  },
  {
    id: 'esg',
    idx: '07',
    name: 'ESG',
    requirement: 'Transparent governance & sustainable growth',
    isFullWidth: true,
    tagline: 'Sustainable Investment Mandate',
    tags: ['Environmental', 'Social', 'Governance'],
    subNote: 'Strict ESG framework: Transparent corporate governance, social responsibility & sustainable growth.',
  },
];

export interface SelectedStock {
  ticker: string;
  sector: string;
  role: string;
  clientNeedsMet: string;
  isDefensive?: boolean;
}

export const selectedStocks: SelectedStock[] = [
  {
    ticker: 'VCB',
    sector: 'Banking',
    role: 'Defensive, stable base',
    clientNeedsMet: "Capital preservation, long-term accumulation, while contributing to the portfolio's overall balance.",
    isDefensive: true,
  },
  {
    ticker: 'DHG',
    sector: 'Pharmaceuticals',
    role: 'Defensive, risk reduction',
    clientNeedsMet: 'Volatility reduction, value preservation for the family portfolio across market cycles.',
    isDefensive: true,
  },
  {
    ticker: 'GAS',
    sector: 'Energy',
    role: 'Defensive, steady cash flow',
    clientNeedsMet: 'Steady cash flow, energy sector exposure and reliable dividend yield generation.',
    isDefensive: true,
  },
  {
    ticker: 'MWG',
    sector: 'Retail',
    role: 'Consumer growth',
    clientNeedsMet: 'Housing goal and long-term education fund acceleration driven by consumer demand.',
    isDefensive: false,
  },
  {
    ticker: 'SSI',
    sector: 'Securities',
    role: 'Cyclical growth',
    clientNeedsMet: 'Capital appreciation in favourable macroeconomic markets and capital market expansion.',
    isDefensive: false,
  },
];

export interface StockPerformance {
  ticker: string;
  monthlyReturn: number;
  monthlyStdDev: number;
  annualReturn: number;
  annualStdDev: number;
  rawAnnualReturn: string;
  rawAnnualStdDev: string;
}

export const stockPerformanceData: StockPerformance[] = [
  {
    ticker: 'VCB',
    monthlyReturn: 0.76,
    monthlyStdDev: 6.48,
    annualReturn: 9.54,
    annualStdDev: 22.43,
    rawAnnualReturn: '9.5391%',
    rawAnnualStdDev: '22.4308%',
  },
  {
    ticker: 'DHG',
    monthlyReturn: 0.35,
    monthlyStdDev: 5.56,
    annualReturn: 4.3,
    annualStdDev: 19.26,
    rawAnnualReturn: '4.3029%',
    rawAnnualStdDev: '19.2649%',
  },
  {
    ticker: 'GAS',
    monthlyReturn: 1.23,
    monthlyStdDev: 12.18,
    annualReturn: 15.76,
    annualStdDev: 42.2,
    rawAnnualReturn: '15.7577%',
    rawAnnualStdDev: '42.2009%',
  },
  {
    ticker: 'MWG',
    monthlyReturn: 1.05,
    monthlyStdDev: 9.44,
    annualReturn: 13.32,
    annualStdDev: 32.69,
    rawAnnualReturn: '13.3228%',
    rawAnnualStdDev: '32.6940%',
  },
  {
    ticker: 'SSI',
    monthlyReturn: 0.92,
    monthlyStdDev: 13.26,
    annualReturn: 11.64,
    annualStdDev: 45.93,
    rawAnnualReturn: '11.6403%',
    rawAnnualStdDev: '45.9276%',
  },
];
