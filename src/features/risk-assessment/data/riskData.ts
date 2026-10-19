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
    range: '10 – 17 điểm',
    minPoints: 10,
    maxPoints: 17,
    level: 'Rủi ro thấp',
    description: 'Ưu tiên bảo toàn vốn, đầu tư vào các tài sản an toàn như trái phiếu, tiền gửi và cổ phiếu ổn định với cổ tức đều đặn.',
  },
  {
    range: '18 – 27 điểm',
    minPoints: 18,
    maxPoints: 27,
    level: 'Rủi ro trung bình',
    description: 'Danh mục kết hợp cổ phiếu và trái phiếu, chú trọng cả tăng trưởng vốn và bảo toàn vốn.',
  },
  {
    range: '28 – 40 điểm',
    minPoints: 28,
    maxPoints: 40,
    level: 'Rủi ro cao',
    description: 'Ưu tiên đầu tư vào cổ phiếu tăng trưởng và các sản phẩm tài chính mạo hiểm với mục tiêu lợi nhuận cao.',
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
  classification: 'Khả năng chấp nhận rủi ro Trung bình',
  willingnessScore: 4, // 4/10
  gsoepRange: '[4 – 6)',
  riskAversionA: 5.07,
  utilityFormula: 'U = E(r) - ½ · A · σ²',
  commentary:
    'Điểm khảo sát của Anh Nam là 26/40 điểm, tương ứng với khẩu vị rủi ro Trung bình và mức độ sẵn sàng chấp nhận rủi ro chuẩn hóa 4/10. Theo bảng phân loại GSOEP (Hochmuth et al., 2025), giá trị tham số hệ số ngại rủi ro CRRA được xác lập là A = 5.07. Điều này thể hiện gia đình đặc biệt coi trọng việc bảo vệ vốn và kiểm soát tổn thất, song vẫn sẵn sàng đón nhận mức độ biến động vừa phải để tối ưu hóa tỷ suất sinh lời dài hạn trong mô hình Markowitz MPT.',
};
