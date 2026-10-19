// ============================================================
// FBSF Cash Flow Optimization Fund — Section 6.3 Data
// Financial Plan and Goal Implementation Roadmap
// ============================================================

export interface EvaluationRow {
  id: string;
  goal: string;
  goalValue: string; // VND Million
  acquiredCapital: string; // VND Million
  result: 'Achieved' | 'Not Achieved';
  presentValue?: string;
  timeline?: string;
  note?: string;
}

export interface FinancialPlanAssumptions {
  cashHoldings: string;
  emergencyFund: string;
  initialInvestment: string;
  expectedReturnMonthly: string;
  expectedReturnAnnual: string;
  inflationRate: string;
  incomeGrowth: string;
  expenseGrowth: string;
  loanRecoveryMonth: string;
  loanRecoveryAmount: string;
  baoLocAppreciation: string;
  baoLocInitialValue: string;
  baoLocFutureValueYear10: string;
  portfolioPreTaxYear10: string;
  securitiesTax: string;
  portfolioAfterTaxYear10: string;
  totalAvailableAssetYear10: string;
  targetHousingValueYear10: string;
  capitalSurplus: string;
}

export const planEvaluationRows: EvaluationRow[] = [
  {
    id: 'vehicle-purchase',
    goal: 'Vehicle Purchase (Year 3)',
    goalValue: '912.93',
    acquiredCapital: '442.16',
    result: 'Not Achieved',
    presentValue: '800.00',
    timeline: 'Month 36',
    note: 'Quỹ đầu tư tại tháng 36 đạt khoảng 442,16 triệu đ, thấp hơn mức 912,93 triệu đ cần thiết sau lạm phát. Gia đình ưu tiên hoãn mua xe để bảo toàn sức mạnh lãi kép cho mục tiêu mua nhà.',
  },
  {
    id: 'loan-repayment',
    goal: 'Loan Repayment',
    goalValue: '100',
    acquiredCapital: '100',
    result: 'Achieved',
    timeline: 'Month 60',
    note: 'Khoản cho mượn cá nhân 100 triệu đ được thu hồi tại tháng 60 và tái đầu tư toàn bộ vào danh mục OCP.',
  },
  {
    id: 'home-purchase',
    goal: 'Home Purchase (Year 10)',
    goalValue: '6,056.60',
    acquiredCapital: '6,066.96',
    result: 'Achieved',
    presentValue: '3,900.00',
    timeline: 'Month 120',
    note: 'Danh mục OCP sau thuế (3.473,22 triệu đ) kết hợp BĐS Bảo Lộc (2.593,74 triệu đ) đạt tổng 6.066,96 triệu đ, vượt mức 6.056,60 triệu đ với thặng dư vốn +10,38 triệu đ.',
  },
];

export const planAssumptions: FinancialPlanAssumptions = {
  cashHoldings: 'VND 300 million',
  emergencyFund: 'VND 150 million',
  initialInvestment: 'VND 150 million',
  expectedReturnMonthly: '0.5653% / month',
  expectedReturnAnnual: '6.78% per annum',
  inflationRate: '4.5% / year',
  incomeGrowth: '8.02% / year',
  expenseGrowth: '4.5% / year',
  loanRecoveryMonth: 'Month 60',
  loanRecoveryAmount: 'VND 100 million',
  baoLocAppreciation: '10% / year',
  baoLocInitialValue: 'VND 1,000 million',
  baoLocFutureValueYear10: 'VND 2,593.74 million',
  portfolioPreTaxYear10: 'VND 3,476.70 million',
  securitiesTax: 'VND 3.48 million (0.1%)',
  portfolioAfterTaxYear10: 'VND 3,473.22 million',
  totalAvailableAssetYear10: 'VND 6,066.96 million',
  targetHousingValueYear10: 'VND 6,056.60 million',
  capitalSurplus: '+VND 10.38 million',
};
