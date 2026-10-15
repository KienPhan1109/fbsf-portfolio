export interface StockCriterion {
  id: string;
  name: string;
  requirement: string;
  isMono?: boolean;
}

export const stockSelectionCriteria: StockCriterion[] = [
  {
    id: 'profitability',
    name: 'Profitability',
    requirement: 'ROE > 15%',
    isMono: true,
  },
  {
    id: 'valuation',
    name: 'Valuation',
    requirement: 'Forward P/E ≤ 16; P/B < 3',
    isMono: true,
  },
  {
    id: 'financial-health',
    name: 'Financial Health',
    requirement: 'D/E < 0.8; banks assessed by key risk indicators',
  },
  {
    id: 'dividends',
    name: 'Dividends',
    requirement: 'Stable payout history',
  },
  {
    id: 'liquidity',
    name: 'Liquidity',
    requirement: 'Large-cap, highly liquid stocks',
  },
  {
    id: 'exclusions',
    name: 'Exclusions',
    requirement: 'Tobacco, weapons, gambling',
  },
  {
    id: 'esg',
    name: 'ESG',
    requirement: 'Transparent governance and sustainable growth',
  },
];

export interface SelectedStock {
  ticker: string;
  industry: string;
  role: string;
  profitDriver: string;
  familyNeed: string;
  isDefensive?: boolean;
}

export const selectedStocks: SelectedStock[] = [
  {
    ticker: 'VCB',
    industry: 'Ngân hàng',
    role: 'Phòng thủ (nền ổn định)',
    profitDriver: 'Tăng trưởng tín dụng, lãi suất',
    familyNeed: 'Bảo toàn vốn, nhu cầu tích lũy dài hạn',
    isDefensive: true,
  },
  {
    ticker: 'DHG',
    industry: 'Dược phẩm',
    role: 'Phòng thủ',
    profitDriver: 'Nhu cầu y tế, ít theo chu kỳ',
    familyNeed: 'Giảm biến động, giữ ổn định giá trị',
    isDefensive: true,
  },
  {
    ticker: 'GAS',
    industry: 'Năng lượng',
    role: 'Phòng thủ có dòng tiền',
    profitDriver: 'Sản lượng và giá khí',
    familyNeed: 'Dòng tiền ổn định, đa dạng hóa ngành',
    isDefensive: true,
  },
  {
    ticker: 'MWG',
    industry: 'Bán lẻ',
    role: 'Tăng trưởng',
    profitDriver: 'Sức mua tiêu dùng',
    familyNeed: 'Mục tiêu nhà ở và quỹ giáo dục dài hạn',
    isDefensive: false,
  },
  {
    ticker: 'SSI',
    industry: 'Chứng khoán',
    role: 'Tăng trưởng, chu kỳ',
    profitDriver: 'Thanh khoản và tâm lý thị trường',
    familyNeed: 'Tăng giá trị khi thị trường thuận lợi',
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
