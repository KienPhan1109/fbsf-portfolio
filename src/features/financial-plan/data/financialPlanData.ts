// ============================================================
// FBSF Cash Flow Optimization Fund — Section 6.3 Data
// Financial Plan and Goal Implementation Roadmap
// ============================================================

export interface EvaluationRow {
  id: string;
  goal: string;
  goalValue: string; // VND Million
  acquiredCapital: string; // VND Million
  result: 'Achieved' | 'Unachieved';
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
    goalValue: '912,93',
    acquiredCapital: '442,16',
    result: 'Unachieved',
    presentValue: '800,00',
    timeline: 'Month 36',
    note: 'Quỹ đầu tư tại tháng 36 đạt khoảng 442,16 triệu đ, thấp hơn mức 912,93 triệu đ cần thiết sau lạm phát. Gia đình ưu tiên hoãn mua xe để bảo toàn sức mạnh lãi kép cho mục tiêu mua nhà.',
  },
  {
    id: 'loan-recovery',
    goal: 'Loan Recovery',
    goalValue: '100',
    acquiredCapital: '100',
    result: 'Achieved',
    timeline: 'Month 60',
    note: 'Khoản cho mượn cá nhân 100 triệu đ được thu hồi tại tháng 60 và tái đầu tư toàn bộ vào danh mục OCP.',
  },
  {
    id: 'housing-purchase',
    goal: 'Housing Purchase (Year 10)',
    goalValue: '6.056,60',
    acquiredCapital: '6.066,96',
    result: 'Achieved',
    presentValue: '3.900,00',
    timeline: 'Month 120',
    note: 'Danh mục OCP sau thuế (3.473,22 triệu đ) kết hợp BĐS Bảo Lộc (2.593,74 triệu đ) đạt tổng 6.066,96 triệu đ, vượt mức 6.056,60 triệu đ với thặng dư vốn +10,38 triệu đ.',
  },
];

export const planAssumptions: FinancialPlanAssumptions = {
  cashHoldings: '300 triệu đ',
  emergencyFund: '150 triệu đ',
  initialInvestment: '150 triệu đ',
  expectedReturnMonthly: '0,5653% / tháng',
  expectedReturnAnnual: '6,78% / năm',
  inflationRate: '4,5% / năm',
  incomeGrowth: '8,02% / năm',
  expenseGrowth: '4,5% / năm',
  loanRecoveryMonth: 'Tháng 60',
  loanRecoveryAmount: '100 triệu đ',
  baoLocAppreciation: '10% / năm',
  baoLocInitialValue: '1.000 triệu đ',
  baoLocFutureValueYear10: '2.593,74 triệu đ',
  portfolioPreTaxYear10: '3.476,70 triệu đ',
  securitiesTax: '3,48 triệu đ (0,1%)',
  portfolioAfterTaxYear10: '3.473,22 triệu đ',
  totalAvailableAssetYear10: '6.066,96 triệu đ',
  targetHousingValueYear10: '6.056,60 triệu đ',
  capitalSurplus: '+10,38 triệu đ',
};
