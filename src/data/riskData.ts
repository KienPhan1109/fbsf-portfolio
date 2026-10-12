// ============================================================
// FBSF Cash Flow Optimization Fund — Risk Assessment Data
// Structured data from survey questionnaire and GSOEP Table 2.2
// ============================================================

export interface SurveyOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
  points: number;
}

export interface SurveyQuestion {
  id: number;
  question: string;
  options: SurveyOption[];
  selectedKey: 'A' | 'B' | 'C' | 'D';
  selectedPoints: number;
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

// 10 Survey Questions
export const surveyQuestions: SurveyQuestion[] = [
  {
    id: 1,
    question: 'Mục tiêu đầu tư của bạn là gì?',
    options: [
      { key: 'A', text: 'Bảo toàn vốn và tránh rủi ro', points: 1 },
      { key: 'B', text: 'Tăng trưởng vốn ổn định kết hợp với bảo toàn vốn', points: 2 },
      { key: 'C', text: 'Tăng trưởng vốn nhanh nhưng vẫn chú trọng đến an toàn một phần', points: 3 },
      { key: 'D', text: 'Tìm kiếm lợi nhuận cực cao mặc dù có rủi ro lớn', points: 4 },
    ],
    selectedKey: 'B',
    selectedPoints: 2,
  },
  {
    id: 2,
    question: 'Nếu danh mục đầu tư của bạn giảm 20% trong thời gian ngắn, bạn sẽ làm gì?',
    options: [
      { key: 'A', text: 'Bán ra ngay để cắt lỗ', points: 1 },
      { key: 'B', text: 'Cảm thấy lo lắng nhưng giữ nguyên danh mục và chờ phục hồi', points: 2 },
      { key: 'C', text: 'Xem đây là cơ hội để mua vào thêm', points: 3 },
      { key: 'D', text: 'Mua vào ngay lập tức vì tin thị trường sẽ phục hồi', points: 4 },
    ],
    selectedKey: 'B',
    selectedPoints: 2,
  },
  {
    id: 3,
    question: 'Mức độ hiểu biết của bạn về thị trường tài chính là:',
    options: [
      { key: 'A', text: 'Rất ít kinh nghiệm', points: 1 },
      { key: 'B', text: 'Hiểu biết cơ bản, mới bắt đầu đầu tư', points: 2 },
      { key: 'C', text: 'Trung bình – theo dõi và nghiên cứu thường xuyên', points: 3 },
      { key: 'D', text: 'Rất hiểu biết, có chiến lược đầu tư riêng', points: 4 },
    ],
    selectedKey: 'C',
    selectedPoints: 3,
  },
  {
    id: 4,
    question: 'Khoản tiền bạn sẵn sàng đầu tư (mà nếu mất đi vẫn đảm bảo cuộc sống) chiếm bao nhiêu % tổng tài sản?',
    options: [
      { key: 'A', text: 'Dưới 10%', points: 1 },
      { key: 'B', text: 'Từ 10% đến 25%', points: 2 },
      { key: 'C', text: 'Từ 25% đến 50%', points: 3 },
      { key: 'D', text: 'Trên 50%', points: 4 },
    ],
    selectedKey: 'B',
    selectedPoints: 2,
  },
  {
    id: 5,
    question: 'Khi nghe tin về cơ hội đầu tư với lợi nhuận cao nhưng rủi ro lớn, bạn sẽ:',
    options: [
      { key: 'A', text: 'Không đầu tư vì quá rủi ro', points: 1 },
      { key: 'B', text: 'Đầu tư với số tiền nhỏ để thử nghiệm', points: 2 },
      { key: 'C', text: 'Đầu tư một phần nếu có đủ thông tin và nghiên cứu kỹ', points: 3 },
      { key: 'D', text: 'Đầu tư mạnh mẽ vì tin rằng lợi nhuận sẽ bù đắp rủi ro', points: 4 },
    ],
    selectedKey: 'C',
    selectedPoints: 3,
  },
  {
    id: 6,
    question: 'Khi thị trường biến động mạnh, bạn thường:',
    options: [
      { key: 'A', text: 'Hoảng loạn và bán ra ngay', points: 1 },
      { key: 'B', text: 'Cảm thấy lo lắng nhưng giữ bình tĩnh', points: 2 },
      { key: 'C', text: 'Theo dõi sát sao và tìm cơ hội mua vào', points: 3 },
      { key: 'D', text: 'Tận dụng biến động để đầu tư thêm', points: 4 },
    ],
    selectedKey: 'C',
    selectedPoints: 3,
  },
  {
    id: 7,
    question: 'Mục tiêu đầu tư về thời gian của bạn là:',
    options: [
      { key: 'A', text: 'Ngắn hạn (dưới 3 năm)', points: 1 },
      { key: 'B', text: 'Trung hạn (3-5 năm)', points: 2 },
      { key: 'C', text: 'Dài hạn (5-10 năm)', points: 3 },
      { key: 'D', text: 'Rất dài hạn (trên 10 năm)', points: 4 },
    ],
    selectedKey: 'C',
    selectedPoints: 3,
  },
  {
    id: 8,
    question: 'Trong bối cảnh kinh tế không ổn định, bạn sẽ:',
    options: [
      { key: 'A', text: 'Chuyển sang tài sản an toàn (tiền mặt, trái phiếu)', points: 1 },
      { key: 'B', text: 'Giữ nguyên danh mục và theo dõi tình hình', points: 2 },
      { key: 'C', text: 'Tìm cơ hội đầu tư vào cổ phiếu bị giảm giá', points: 3 },
      { key: 'D', text: 'Mua vào thêm vì tin thị trường sẽ phục hồi', points: 4 },
    ],
    selectedKey: 'B',
    selectedPoints: 2,
  },
  {
    id: 9,
    question: 'Khi có cơ hội đầu tư mạo hiểm với tiềm năng lợi nhuận lớn, bạn sẽ:',
    options: [
      { key: 'A', text: 'Từ chối vì không muốn mạo hiểm', points: 1 },
      { key: 'B', text: 'Cân nhắc và đầu tư một phần nhỏ', points: 2 },
      { key: 'C', text: 'Đầu tư nếu có sự tư vấn và nghiên cứu đầy đủ', points: 3 },
      { key: 'D', text: 'Đầu tư mà không do dự', points: 4 },
    ],
    selectedKey: 'C',
    selectedPoints: 3,
  },
  {
    id: 10,
    question: 'Bạn tự đánh giá khả năng chấp nhận rủi ro của mình là:',
    options: [
      { key: 'A', text: 'Rất thấp – ưu tiên an toàn tuyệt đối', points: 1 },
      { key: 'B', text: 'Thấp – không muốn biến động quá lớn', points: 2 },
      { key: 'C', text: 'Trung bình – sẵn sàng chịu rủi ro vừa phải để có lợi nhuận tốt hơn', points: 3 },
      { key: 'D', text: 'Cao – sẵn sàng mạo hiểm để đạt được lợi nhuận vượt trội', points: 4 },
    ],
    selectedKey: 'C',
    selectedPoints: 3,
  },
];

// Total Score Calculation
export const totalScore = surveyQuestions.reduce((acc, q) => acc + q.selectedPoints, 0); // 26
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
  utilityFormula: 'U = E(r) - \\frac{1}{2} A \\sigma^2',
  commentary:
    'Điểm khảo sát của Anh Nam là 26/40 điểm, tương ứng với khẩu vị rủi ro Trung bình và mức độ sẵn sàng chấp nhận rủi ro chuẩn hóa 4/10. Theo bảng phân loại GSOEP (Hochmuth et al., 2025), giá trị tham số hệ số ngại rủi ro CRRA được xác lập là A = 5.07. Điều này thể hiện gia đình đặc biệt coi trọng việc bảo vệ vốn và kiểm soát tổn thất, song vẫn sẵn sàng đón nhận mức độ biến động vừa phải để tối ưu hóa tỷ suất sinh lời dài hạn trong mô hình Markowitz MPT.',
};
