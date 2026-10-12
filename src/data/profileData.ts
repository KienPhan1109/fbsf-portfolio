// ============================================================
// FBSF Cash Flow Optimization Fund — Financial Profile Data
// Structured data from profile.md for Anh Nam & Chị Nữ family
// ============================================================

export interface FamilyMember {
  id: string;
  name: string;
  role: string;
  relationship: string;
  birthYear: number;
  age: number;
  occupation: string;
  workplace: string;
  monthlyIncome: number | null;
  annualIncome: number | null;
  isDependent: boolean;
  emoji: string;
}

export interface FinancialGoal {
  id: string;
  title: string;
  timeline: string;
  timelineYears: number;
  targetAmount: number;
  description: string;
  progress: number;
  icon: string;
  type: 'mid-term' | 'long-term';
}

export interface Asset {
  id: string;
  name: string;
  detail: string;
  value: number;
  category: 'liquid' | 'receivable' | 'investment';
  color: string;
}

export interface Liability {
  id: string;
  name: string;
  detail: string;
  value: number;
  interestRate: number;
  remainingYears: number;
  monthlyPayment: number;
}

export interface Expense {
  id: string;
  category: string;
  detail: string;
  monthly: number;
  annual: number;
  percentage: number;
  color: string;
  icon: string;
}

export interface AdditionalInfo {
  housing: string;
  housingDetail: string;
  insurance: string;
  insuranceDetail: string;
  parents: string;
}

export interface CashFlowSummary {
  totalMonthlyIncome: number;
  totalAnnualIncome: number;
  totalMonthlyExpense: number;
  totalAnnualExpense: number;
  monthlySurplus: number;
  annualSurplus: number;
  isDeficit: boolean;
}

export interface FinancialProfile {
  familyMembers: FamilyMember[];
  additionalInfo: AdditionalInfo;
  goals: FinancialGoal[];
  assets: Asset[];
  totalAssets: number;
  liabilities: Liability[];
  totalLiabilities: number;
  netWorth: number;
  expenses: Expense[];
  cashFlow: CashFlowSummary;
}

// ============================================================
// DATA
// ============================================================

export const familyMembers: FamilyMember[] = [
  {
    id: 'member-nam',
    name: 'Anh Nam',
    role: 'Chồng',
    relationship: 'Trụ cột chính',
    birthYear: 1985,
    age: 41,
    occupation: 'Trưởng phòng Kế toán',
    workplace: 'Phòng giao dịch Ngân hàng',
    monthlyIncome: 45_000_000,
    annualIncome: 540_000_000,
    isDependent: false,
    emoji: '👨‍💼',
  },
  {
    id: 'member-nu',
    name: 'Chị Nữ',
    role: 'Vợ',
    relationship: 'Trụ cột phụ',
    birthYear: 1990,
    age: 36,
    occupation: 'Nhân viên Kế toán',
    workplace: 'Phòng giao dịch Ngân hàng',
    monthlyIncome: 20_000_000,
    annualIncome: 240_000_000,
    isDependent: false,
    emoji: '👩‍💼',
  },
  {
    id: 'member-child1',
    name: 'Bé lớn',
    role: 'Con thứ 1',
    relationship: 'Phụ thuộc',
    birthYear: 2014,
    age: 12,
    occupation: 'Học sinh cấp 2',
    workplace: 'Trường Tuệ Đức (Quận 2)',
    monthlyIncome: null,
    annualIncome: null,
    isDependent: true,
    emoji: '👦',
  },
  {
    id: 'member-child2',
    name: 'Bé nhỏ',
    role: 'Con thứ 2',
    relationship: 'Phụ thuộc',
    birthYear: 2021,
    age: 5,
    occupation: 'Học sinh mẫu giáo',
    workplace: 'Trường Vườn Hồng (Quận 2)',
    monthlyIncome: null,
    annualIncome: null,
    isDependent: true,
    emoji: '👧',
  },
];

export const additionalInfo: AdditionalInfo = {
  housing: 'Chưa có nhà riêng',
  housingDetail: 'Đang thuê nhà tại đường Lương Đình Của, Quận 2',
  insurance: 'Có BHXH, BHYT — Chưa có BHNT',
  insuranceDetail: 'Cả hai vợ chồng đều có Bảo hiểm xã hội và Bảo hiểm y tế, nhưng chưa có Bảo hiểm nhân thọ',
  parents: 'Bố mẹ nội ngoại đều còn khỏe, có lương hưu và tự trang trải, chưa cần chu cấp',
};

export const financialGoals: FinancialGoal[] = [
  {
    id: 'goal-car',
    title: 'Mua xe hơi',
    timeline: 'Trung hạn — 3 năm tới',
    timelineYears: 3,
    targetAmount: 800_000_000,
    description: 'Mua xe hơi trị giá khoảng 800 triệu đ để thuận tiện đưa đón các con đi học.',
    progress: 37.5, // 300tr tiền mặt / 800tr target
    icon: '🚗',
    type: 'mid-term',
  },
  {
    id: 'goal-house',
    title: 'Mua nhà đất',
    timeline: 'Dài hạn — 10 năm tới',
    timelineYears: 10,
    targetAmount: 6_500_000_000, // ước tính giá nhà đất 80m² Q2/Q9
    description: 'Mua nhà đất diện tích khoảng 80m² tại khu vực Quận 2 hoặc Quận 9 cũ để ổn định chỗ ở, thuận tiện đi làm và cho con đi học.',
    progress: 14.6, // 950tr net worth / ~6.5 tỷ target
    icon: '🏠',
    type: 'long-term',
  },
];

export const assets: Asset[] = [
  {
    id: 'asset-cash',
    name: 'Tiền mặt hiện có',
    detail: 'Tiền mặt và tiền gửi ngân hàng',
    value: 300_000_000,
    category: 'liquid',
    color: '#10B981',
  },
  {
    id: 'asset-receivable',
    name: 'Khoản phải thu',
    detail: 'Tiền cho bạn bè mượn',
    value: 100_000_000,
    category: 'receivable',
    color: '#3B82F6',
  },
  {
    id: 'asset-land',
    name: 'Đất nền Bảo Lộc',
    detail: '01 lô đất nền 6×30m, mua năm 2022',
    value: 1_000_000_000,
    category: 'investment',
    color: '#0A1628',
  },
];

export const liabilities: Liability[] = [
  {
    id: 'liability-loan',
    name: 'Vay ngân hàng',
    detail: 'Dư nợ vay mua đất Bảo Lộc, lãi suất 10%/năm, còn 12 năm',
    value: 450_000_000,
    interestRate: 10,
    remainingYears: 12,
    monthlyPayment: 8_300_000,
  },
];

export const expenses: Expense[] = [
  {
    id: 'expense-rent',
    category: 'Chi phí thuê nhà',
    detail: 'Thuê nhà tại đường Lương Đình Của, Quận 2',
    monthly: 20_000_000,
    annual: 240_000_000,
    percentage: 27.3,
    color: '#0A1628',
    icon: '🏠',
  },
  {
    id: 'expense-education',
    category: 'Chi phí giáo dục',
    detail: 'Học phí bé lớn (10tr) + bé nhỏ (5tr) + học thêm (5tr)',
    monthly: 20_000_000,
    annual: 240_000_000,
    percentage: 27.3,
    color: '#059669',
    icon: '📚',
  },
  {
    id: 'expense-living',
    category: 'Sinh hoạt thiết yếu',
    detail: 'Ăn uống, điện nước, sinh hoạt phí cơ bản',
    monthly: 15_000_000,
    annual: 180_000_000,
    percentage: 20.5,
    color: '#3B82F6',
    icon: '🛒',
  },
  {
    id: 'expense-entertainment',
    category: 'Giải trí & Giao tiếp',
    detail: 'Đi chơi, ăn ngoài, du lịch, giao tiếp, hiếu hỷ',
    monthly: 8_000_000,
    annual: 96_000_000,
    percentage: 10.9,
    color: '#8B5CF6',
    icon: '🎭',
  },
  {
    id: 'expense-gifts',
    category: 'Biếu tặng & Đối ngoại',
    detail: 'Biếu bố mẹ hai bên, đối ngoại',
    monthly: 2_000_000,
    annual: 24_000_000,
    percentage: 2.7,
    color: '#F59E0B',
    icon: '🎁',
  },
  {
    id: 'expense-loan',
    category: 'Chi trả nợ vay',
    detail: 'Thanh toán gốc và lãi vay mua đất Bảo Lộc',
    monthly: 8_300_000,
    annual: 99_600_000,
    percentage: 11.3,
    color: '#EF4444',
    icon: '🏦',
  },
];

export const cashFlow: CashFlowSummary = {
  totalMonthlyIncome: 65_000_000,
  totalAnnualIncome: 780_000_000,
  totalMonthlyExpense: 73_300_000,
  totalAnnualExpense: 879_600_000,
  monthlySurplus: -8_300_000,
  annualSurplus: -99_600_000,
  isDeficit: true,
};

export const totalAssets = 1_400_000_000;
export const totalLiabilities = 450_000_000;
export const netWorth = 950_000_000;

// ============================================================
// COMPLETE PROFILE EXPORT
// ============================================================
export const financialProfile: FinancialProfile = {
  familyMembers,
  additionalInfo,
  goals: financialGoals,
  assets,
  totalAssets,
  liabilities,
  totalLiabilities,
  netWorth,
  expenses,
  cashFlow,
};

// ============================================================
// UTILITY: Format VND currency
// ============================================================
export function formatVND(value: number): string {
  const absValue = Math.abs(value);
  if (absValue >= 1_000_000_000) {
    const billions = absValue / 1_000_000_000;
    const formatted = billions % 1 === 0 ? billions.toFixed(0) : billions.toFixed(1);
    return `${value < 0 ? '-' : ''}${formatted} tỷ đ`;
  }
  if (absValue >= 1_000_000) {
    const millions = absValue / 1_000_000;
    const formatted = millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1);
    return `${value < 0 ? '-' : ''}${formatted} triệu đ`;
  }
  return `${value < 0 ? '-' : ''}${absValue.toLocaleString('vi-VN')} đ`;
}

export function formatVNDShort(value: number): string {
  const absValue = Math.abs(value);
  if (absValue >= 1_000_000_000) {
    return `${value < 0 ? '-' : ''}${(absValue / 1_000_000_000).toFixed(1)}B`;
  }
  if (absValue >= 1_000_000) {
    return `${value < 0 ? '-' : ''}${(absValue / 1_000_000).toFixed(0)}M`;
  }
  return `${value < 0 ? '-' : ''}${absValue.toLocaleString('vi-VN')}`;
}

export function formatNumber(value: number): string {
  return Math.abs(value).toLocaleString('vi-VN');
}
