export interface OrpStock {
  ticker: string;
  weightOrp: number; // in percentage e.g. 42
  weightTotal: number; // in percentage e.g. 8.98
  color: string;
}

export interface CompletePortfolioItem {
  name: string;
  weightOrp: string;
  weightTotal: string;
  isTotal?: boolean;
  isRiskFree?: boolean;
}

export const orpSelectedStocks: string[] = ['VCB', 'SSI', 'MWG', 'GAS'];

export const orpStockAllocations: OrpStock[] = [
  {
    ticker: 'MWG',
    weightOrp: 42,
    weightTotal: 8.98,
    color: '#059669', // Emerald
  },
  {
    ticker: 'GAS',
    weightOrp: 35,
    weightTotal: 7.45,
    color: '#2563EB', // Royal Blue
  },
  {
    ticker: 'VCB',
    weightOrp: 12,
    weightTotal: 2.62,
    color: '#10B981', // Mint Green
  },
  {
    ticker: 'SSI',
    weightOrp: 10,
    weightTotal: 2.12,
    color: '#7C3AED', // Purple
  },
];

export const completePortfolioTable: CompletePortfolioItem[] = [
  {
    name: 'VCB',
    weightOrp: '12%',
    weightTotal: '2.62%',
  },
  {
    name: 'SSI',
    weightOrp: '10%',
    weightTotal: '2.12%',
  },
  {
    name: 'MWG',
    weightOrp: '42%',
    weightTotal: '8.98%',
  },
  {
    name: 'GAS',
    weightOrp: '35%',
    weightTotal: '7.45%',
  },
  {
    name: 'Trái phiếu / tiền gửi',
    weightOrp: '—',
    weightTotal: '78.84%',
    isRiskFree: true,
  },
  {
    name: 'Tổng kiểm tra',
    weightOrp: '—',
    weightTotal: '100.00%',
    isTotal: true,
  },
];

export interface CorrelationRow {
  ticker: string;
  correlations: {
    VCB: string;
    SSI: string;
    MWG: string;
    GAS: string;
  };
}

export const correlationTickers = ['VCB', 'SSI', 'MWG', 'GAS'];

export const correlationMatrixData: CorrelationRow[] = [
  {
    ticker: 'VCB',
    correlations: {
      VCB: '1.0000',
      SSI: '0.4304',
      MWG: '0.2691',
      GAS: '0.5219',
    },
  },
  {
    ticker: 'SSI',
    correlations: {
      VCB: '0.4304',
      SSI: '1.0000',
      MWG: '0.4035',
      GAS: '0.1073',
    },
  },
  {
    ticker: 'MWG',
    correlations: {
      VCB: '0.2691',
      SSI: '0.4035',
      MWG: '1.0000',
      GAS: '0.2991',
    },
  },
  {
    ticker: 'GAS',
    correlations: {
      VCB: '0.5219',
      SSI: '0.1073',
      MWG: '0.2991',
      GAS: '1.0000',
    },
  },
];

export interface PortfolioPerformanceData {
  expectedReturn: string;
  portfolioRisk: string;
  sharpeRatio: string;
}

export const orpPerformance: PortfolioPerformanceData = {
  expectedReturn: '1.0628% / month',
  portfolioRisk: '7.6695% / month',
  sharpeRatio: '0.0824',
};

export interface OptimizationObjectiveData {
  title: string;
  description: string;
}

export const optimizationObjective: OptimizationObjectiveData = {
  title: 'Optimization Objective',
  description:
    'Identify the risky portfolio with the highest Sharpe Ratio to balance excess return against portfolio risk.',
};

export interface OcpData {
  allocation: {
    riskyWeight: string;
    riskyLabel: string;
    riskFreeWeight: string;
    riskFreeLabel: string;
  };
  performance: {
    expectedReturn: string;
    expectedReturnUnit: string;
    portfolioRisk: string;
    portfolioRiskUnit: string;
  };
  riskProfile: {
    type: string;
    riskAversion: string;
    description: string;
  };
  investmentObjective: {
    description: string;
    subTitle: string;
    subDescription: string;
  };
}

export const ocpData: OcpData = {
  allocation: {
    riskyWeight: '21.16%',
    riskyLabel: 'Risky Portfolio (ORP)',
    riskFreeWeight: '78.84%',
    riskFreeLabel: 'Risk-free Asset',
  },
  performance: {
    expectedReturn: '0.5653%',
    expectedReturnUnit: 'Per month',
    portfolioRisk: '1.6232%',
    portfolioRiskUnit: 'Monthly standard deviation',
  },
  riskProfile: {
    type: 'Moderate',
    riskAversion: 'Risk Aversion (A) = 5.07',
    description:
      "Allocation tailored to the family's risk tolerance and long-term financial needs.",
  },
  investmentObjective: {
    description:
      'Balance long-term growth, risk reduction, and capital preservation.',
    subTitle: 'Optimal Complete Portfolio',
    subDescription: 'Combining ORP with a risk-free asset.',
  },
};


