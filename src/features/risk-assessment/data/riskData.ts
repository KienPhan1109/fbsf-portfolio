// ============================================================
// FBSF Cash Flow Optimization Fund — Risk Assessment Data
// Structured data from survey questionnaire and GSOEP Table 2.2
// ============================================================

export interface SurveyQuestion {
  id: number;
  question: string;
  answer: string;
  points: number;
  optionKey: 'A' | 'B' | 'C' | 'D';
}

export interface RiskClassification {
  range: string;
  minPoints: number;
  maxPoints: number;
  level: string;
  description: string;
}

export interface GSOEPRow {
  range: string;
  probabilityMass: string;
  riskAversion: number;
  isClientCategory?: boolean;
}

// 10 Survey Questions with Client Selected Answers and Points
export const surveyQuestions: SurveyQuestion[] = [
  {
    id: 1,
    question: 'What is your primary investment objective?',
    answer: 'Achieve stable capital growth while preserving capital.',
    points: 2,
    optionKey: 'B',
  },
  {
    id: 2,
    question: 'If your investment portfolio declined by 20% over a short period, what would you do?',
    answer: 'Feel concerned but maintain the portfolio and wait for a recovery.',
    points: 2,
    optionKey: 'B',
  },
  {
    id: 3,
    question: 'How would you rate your understanding of financial markets?',
    answer: 'Intermediate – regularly monitor and research financial markets.',
    points: 3,
    optionKey: 'C',
  },
  {
    id: 4,
    question: 'What percentage of your total assets are you willing to invest in risky assets, provided that any potential loss would not affect your living expenses?',
    answer: 'Between 10% and 25%.',
    points: 2,
    optionKey: 'B',
  },
  {
    id: 5,
    question: 'If you were offered an investment opportunity with high potential returns but significant risk, what would you do?',
    answer: 'Invest a portion of my funds if sufficient information is available and thorough research has been conducted.',
    points: 3,
    optionKey: 'C',
  },
  {
    id: 6,
    question: 'When financial markets experience significant volatility, what do you usually do?',
    answer: 'Closely monitor the market and look for buying opportunities.',
    points: 3,
    optionKey: 'C',
  },
  {
    id: 7,
    question: 'What is your investment time horizon?',
    answer: 'Long-term (5–10 years).',
    points: 3,
    optionKey: 'C',
  },
  {
    id: 8,
    question: 'In an uncertain economic environment, what would you do?',
    answer: 'Maintain my existing portfolio and monitor market conditions.',
    points: 2,
    optionKey: 'B',
  },
  {
    id: 9,
    question: 'When presented with a high-risk investment opportunity with substantial profit potential, what would you do?',
    answer: 'Invest if I have access to professional advice and have conducted thorough research.',
    points: 3,
    optionKey: 'C',
  },
  {
    id: 10,
    question: 'How would you assess your own risk tolerance?',
    answer: 'Moderate – willing to accept a reasonable level of risk in pursuit of higher returns.',
    points: 3,
    optionKey: 'C',
  },
];

// Total Score Calculation
export const totalScore = surveyQuestions.reduce((acc, q) => acc + q.points, 0); // 26
export const maxScore = 40;

// Risk Classifications
export const riskClassifications: RiskClassification[] = [
  {
    range: '10–17 points',
    minPoints: 10,
    maxPoints: 17,
    level: 'Low Risk Tolerance',
    description: 'Prioritizes capital preservation, with investments concentrated in safer assets such as bonds, savings deposits, and stable equities with predictable cash flows.',
  },
  {
    range: '18–27 points',
    minPoints: 18,
    maxPoints: 27,
    level: 'Moderate Risk Tolerance',
    description: 'A balanced portfolio combining equities and bonds, with an emphasis on both long-term capital growth and capital preservation.',
  },
  {
    range: '28–40 points',
    minPoints: 28,
    maxPoints: 40,
    level: 'High Risk Tolerance',
    description: 'Prioritizes growth-oriented equities and higher-risk financial assets, with a greater focus on long-term capital appreciation.',
  },
];

// Table 2.2: GSOEP Risk Aversion
export const gsoepData: GSOEPRow[] = [
  {
    range: '[0 – 3]',
    probabilityMass: '34%',
    riskAversion: 10.04,
    isClientCategory: false,
  },
  {
    range: '[4 – 6]',
    probabilityMass: '53%',
    riskAversion: 5.07,
    isClientCategory: true,
  },
  {
    range: '[7 – 10]',
    probabilityMass: '13%',
    riskAversion: 3.00,
    isClientCategory: false,
  },
];

export const clientRiskProfile = {
  score: 26,
  maxScore: 40,
  scorePercentage: (26 / 40) * 100, // 65%
  classification: 'Moderate Risk Tolerance',
  willingnessScore: 4, // 4/10
  gsoepRange: '[4 – 6)',
  riskAversionA: 5.07,
  utilityFormula: 'U = E(r) - ½ · A · σ²',
  commentary:
    'Mr. Nam’s willingness-to-take-risk score of 4/10 places the household in the [4–6] risk-aversion group, representing the most prevalent group in the sample (53%). The corresponding CRRA risk aversion coefficient is A = 5.07. The household prioritizes capital preservation and risk control while remaining willing to accept a reasonable level of volatility to achieve long-term financial goals.',
};
