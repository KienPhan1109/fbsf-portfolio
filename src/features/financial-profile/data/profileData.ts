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
    emoji?: string;
}

export interface FinancialGoal {
    id: string;
    title: string;
    timeline: string;
    timelineYears: number;
    targetAmount: number;
    description: string;
    progress: number;
    icon?: string;
    type: "mid-term" | "long-term";
}

export interface Asset {
    id: string;
    name: string;
    detail: string;
    value: number;
    category: "liquid" | "receivable" | "investment";
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
    icon?: string;
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
        id: "member-nam",
        name: "Mr. Nam",
        role: "Husband",
        relationship: "Primary Income Earner",
        birthYear: 1985,
        age: 41,
        occupation: "Accounting Manager",
        workplace: "Bank Branch",
        monthlyIncome: 45_000_000,
        annualIncome: 540_000_000,
        isDependent: false,
    },
    {
        id: "member-nu",
        name: "Mrs. Nu",
        role: "Wife",
        relationship: "Secondary Income Earner",
        birthYear: 1990,
        age: 36,
        occupation: "Accountant",
        workplace: "Bank Branch",
        monthlyIncome: 20_000_000,
        annualIncome: 240_000_000,
        isDependent: false,
    },
    {
        id: "member-child1",
        name: "First Child",
        role: "First Child",
        relationship: "Dependent",
        birthYear: 2014,
        age: 12,
        occupation: "Middle School Student",
        workplace: "Tue Duc School (District 2)",
        monthlyIncome: null,
        annualIncome: null,
        isDependent: true,
    },
    {
        id: "member-child2",
        name: "Second Child",
        role: "Second Child",
        relationship: "Dependent",
        birthYear: 2021,
        age: 5,
        occupation: "Kindergarten Student",
        workplace: "Vuon Hong Kindergarten (District 2)",
        monthlyIncome: null,
        annualIncome: null,
        isDependent: true,
    },
];

export const additionalInfo: AdditionalInfo = {
    housing: "No Owner-Occupied Property",
    housingDetail: "Currently renting a property on Luong Dinh Cua Street, District 2",
    insurance: "Social Insurance and Health Insurance Coverage — No Private Health Insurance",
    insuranceDetail:
        "Both spouses are covered by social and health insurance, but neither has life insurance coverage.",
    parents:
        "Both sets of parents are in good health and receive pensions and financial support, with no current need for financial assistance from the household.",
};

export const financialGoals: FinancialGoal[] = [
    {
        id: "goal-car",
        title: "Vehicle Purchase",
        timeline: "Medium-term goal — within the next 3 years",
        timelineYears: 3,
        targetAmount: 800_000_000,
        description:
            "Purchase a vehicle valued at approximately VND 800 million to facilitate the children’s daily school transportation.",
        progress: 37.5,
        type: "mid-term",
    },
    {
        id: "goal-house",
        title: "Home Purchase",
        timeline: "Long-term goal — within the next 10 years",
        timelineYears: 10,
        targetAmount: 3_400_000_000,
        description:
            "Purchase a residential property of approximately 60 square meters on Le Van Viet Street, former District 9, to establish a stable home and provide convenient access to work and the children’s schools.",
        progress: 24.4,
        type: "long-term",
    },
];

export const assets: Asset[] = [
    {
        id: "asset-cash",
        name: "Cash and Bank Deposits",
        detail: "Cash and Bank Deposits",
        value: 300_000_000,
        category: "liquid",
        color: "#10B981",
    },
    {
        id: "asset-receivable",
        name: "Accounts Receivable",
        detail: "Loans Receivable from Friends",
        value: 100_000_000,
        category: "receivable",
        color: "#07875A",
    },
    {
        id: "asset-land",
        name: "Bảo Lộc Land Plot",
        detail: "One 6 × 30-meter land plot, acquired in 2022",
        value: 1_000_000_000,
        category: "investment",
        color: "#062C1E",
    },
];

export const liabilities: Liability[] = [
    {
        id: "liability-loan",
        name: "Bank Loan",
        detail: "Outstanding loan for the Bảo Lộc land purchase, at an annual interest rate of 10%, with 12 years remaining",
        value: 450_000_000,
        interestRate: 10,
        remainingYears: 12,
        monthlyPayment: 8_300_000,
    },
];

export const expenses: Expense[] = [
    {
        id: "expense-rent",
        category: "Rent",
        detail: "Currently renting a property on Luong Dinh Cua Street, District 2",
        monthly: 20_000_000,
        annual: 240_000_000,
        percentage: 27.3,
        color: "#062C1E",
    },
    {
        id: "expense-education",
        category: "Education",
        detail: "Tuition for first child + second child + extra tutoring",
        monthly: 20_000_000,
        annual: 240_000_000,
        percentage: 27.3,
        color: "#059669",
    },
    {
        id: "expense-living",
        category: "Essential Living Expenses",
        detail: "Food, utilities, essential daily living expenses",
        monthly: 15_000_000,
        annual: 180_000_000,
        percentage: 20.5,
        color: "#07875A",
    },
    {
        id: "expense-entertainment",
        category: "Entertainment & Social Activities",
        detail: "Dining out, travel, entertainment, and social activities",
        monthly: 8_000_000,
        annual: 96_000_000,
        percentage: 10.9,
        color: "#10B981",
    },
    {
        id: "expense-gifts",
        category: "Gifts & External Relations",
        detail: "Gifts to both sets of parents and external relations",
        monthly: 2_000_000,
        annual: 24_000_000,
        percentage: 2.7,
        color: "#34D399",
    },
    {
        id: "expense-loan",
        category: "Debt Repayment Obligations — Bảo Lộc Land Loan",
        detail: "Principal and interest payments for the Bảo Lộc land loan",
        monthly: 8_300_000,
        annual: 99_600_000,
        percentage: 11.3,
        color: "#EF4444",
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
        const formatted =
            billions % 1 === 0 ? billions.toFixed(0) : billions.toFixed(1);
        return `${value < 0 ? "-" : ""}VND ${formatted} billion`;
    }
    if (absValue >= 1_000_000) {
        const millions = absValue / 1_000_000;
        const formatted =
            millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1);
        return `${value < 0 ? "-" : ""}VND ${formatted} million`;
    }
    return `${value < 0 ? "-" : ""}VND ${absValue.toLocaleString("en-US")}`;
}

export function formatVNDShort(value: number): string {
    const absValue = Math.abs(value);
    if (absValue >= 1_000_000_000) {
        return `${value < 0 ? "-" : ""}${(absValue / 1_000_000_000).toFixed(1)}B`;
    }
    if (absValue >= 1_000_000) {
        return `${value < 0 ? "-" : ""}${(absValue / 1_000_000).toFixed(0)}M`;
    }
    return `${value < 0 ? "-" : ""}${absValue.toLocaleString("en-US")}`;
}

export function formatFullVND(value: number): string {
    const absValue = Math.abs(value);
    if (absValue >= 1_000_000_000) {
        const billions = absValue / 1_000_000_000;
        const formatted =
            billions % 1 === 0 ? billions.toFixed(0) : billions.toFixed(1);
        return `${value < 0 ? "-" : ""}VND ${formatted} billion`;
    }
    if (absValue >= 1_000_000) {
        const millions = absValue / 1_000_000;
        const formatted =
            millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1);
        return `${value < 0 ? "-" : ""}VND ${formatted} million`;
    }
    return `${value < 0 ? "-" : ""}VND ${absValue.toLocaleString("en-US")}`;
}

export function formatNumber(value: number): string {
    return Math.abs(value).toLocaleString("en-US");
}
