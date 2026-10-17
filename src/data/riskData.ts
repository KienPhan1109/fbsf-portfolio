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
    question: 'Mục tiêu đầu tư của bạn là gì?',
    answer: 'Tăng trưởng vốn ổn định kết hợp với bảo toàn vốn',
    points: 2,
    optionKey: 'B',
  },
  {
    id: 2,
    question: 'Nếu danh mục đầu tư của bạn giảm 20% trong thời gian ngắn, bạn sẽ làm gì?',
    answer: 'Cảm thấy lo lắng nhưng giữ nguyên danh mục và chờ phục hồi',
    points: 2,
    optionKey: 'B',
  },
  {
    id: 3,
    question: 'Mức độ hiểu biết của bạn về thị trường tài chính là:',
    answer: 'Trung bình – theo dõi và nghiên cứu thường xuyên',
    points: 3,
    optionKey: 'C',
  },
  {
    id: 4,
    question: 'Khoản tiền bạn sẵn sàng đầu tư (mà nếu mất đi vẫn đảm bảo cuộc sống) chiếm bao nhiêu % tổng tài sản?',
    answer: 'Từ 10% đến 25%',
    points: 2,
    optionKey: 'B',
  },
  {
    id: 5,
    question: 'Khi nghe tin về cơ hội đầu tư với lợi nhuận cao nhưng rủi ro lớn, bạn sẽ:',
    answer: 'Đầu tư một phần nếu có đủ thông tin và nghiên cứu kỹ',
    points: 3,
    optionKey: 'C',
  },
  {
    id: 6,
    question: 'Khi thị trường biến động mạnh, bạn thường:',
    answer: 'Theo dõi sát sao và tìm cơ hội mua vào',
    points: 3,
    optionKey: 'C',
  },
  {
    id: 7,
    question: 'Mục tiêu đầu tư về thời gian của bạn là:',
    answer: 'Dài hạn (5-10 năm)',
    points: 3,
    optionKey: 'C',
  },
  {
    id: 8,
    question: 'Trong bối cảnh kinh tế không ổn định, bạn sẽ:',
    answer: 'Giữ nguyên danh mục và theo dõi tình hình',
    points: 2,
    optionKey: 'B',
  },
  {
    id: 9,
    question: 'Khi có cơ hội đầu tư mạo hiểm với tiềm năng lợi nhuận lớn, bạn sẽ:',
    answer: 'Đầu tư nếu có sự tư vấn và nghiên cứu đầy đủ',
    points: 3,
    optionKey: 'C',
  },
  {
    id: 10,
    question: 'Bạn tự đánh giá khả năng chấp nhận rủi ro của mình là:',
    answer: 'Trung bình – sẵn sàng chịu rủi ro vừa phải để có lợi nhuận tốt hơn',
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
