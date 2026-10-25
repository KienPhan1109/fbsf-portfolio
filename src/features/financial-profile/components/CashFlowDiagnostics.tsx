import {
  WarningOutlined,
  HomeOutlined,
  ReadOutlined,
  ShoppingCartOutlined,
  CustomerServiceOutlined,
  GiftOutlined,
  BankOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { useInView } from '../../../shared/hooks/useAnimations';
import { expenses, cashFlow, formatVND } from '../data/profileData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../FinancialProfile.css';

function getExpenseIcon(id: string) {
  switch (id) {
    case 'expense-rent':
      return <HomeOutlined style={{ fontSize: 13 }} />;
    case 'expense-education':
      return <ReadOutlined style={{ fontSize: 13 }} />;
    case 'expense-living':
      return <ShoppingCartOutlined style={{ fontSize: 13 }} />;
    case 'expense-entertainment':
      return <CustomerServiceOutlined style={{ fontSize: 13 }} />;
    case 'expense-gifts':
      return <GiftOutlined style={{ fontSize: 13 }} />;
    default:
      return <BankOutlined style={{ fontSize: 13 }} />;
  }
}

function ExpenseBarChart({ isVisible }: { readonly isVisible: boolean }) {
  const livingExpenses = expenses.filter((e) => e.id !== 'expense-loan');
  const maxMonthly = Math.max(...livingExpenses.map((e) => e.monthly));

  return (
    <div className="fp-barchart-container">
      {livingExpenses.map((exp) => (
        <div className="bar-chart__item" key={exp.id} style={{ marginBottom: '10px' }}>
          <span className="bar-chart__label" style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--color-navy-500)', display: 'inline-flex' }}>{getExpenseIcon(exp.id)}</span>
            <span>{exp.category.replace('Chi phí ', '')}</span>
          </span>
          <div className="bar-chart__bar-wrapper" style={{ height: '18px', background: '#F1F5F9', borderRadius: '6px' }}>
            <div
              className="bar-chart__bar"
              style={{
                width: isVisible ? `${(exp.monthly / maxMonthly) * 100}%` : '0%',
                background: exp.color,
                borderRadius: '6px',
                transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span className="bar-chart__bar-value" style={{ fontSize: '10px' }}>{exp.percentage}%</span>
            </div>
          </div>
          <span className="bar-chart__amount font-mono" style={{ fontSize: '12px' }}>{formatVND(exp.monthly)}</span>
        </div>
      ))}
    </div>
  );
}

export function CashFlowDiagnostics() {
  const [cashflowRef, cashflowVisible] = useInView();

  return (
    <section
      className="section section--alt"
      id="financial-cashflow"
      aria-label="Cơ cấu chi phí & Dòng tiền"
    >
      <div className="container">
        <div
          className={`fp-cashflow animate-on-scroll ${cashflowVisible ? "is-visible" : ""}`}
          ref={cashflowRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                CASH FLOW & BUDGET ANALYSIS
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Quantify monthly cash inflows and outflows and identify potential household budget deficits.
            </p>
          </div>

          <div className="fp-cashflow__grid">
            {/* Expense Breakdown */}
            <div className="fp-cashflow__panel">
              <h3 className="fp-cashflow__panel-title">
                <span className="fp-cashflow__panel-title-icon">
                  <BarChartOutlined style={{ fontSize: 16, color: '#047857' }} />
                </span>
                Monthly Living Expense Breakdown
              </h3>
              <ExpenseBarChart isVisible={cashflowVisible} />

              <div className="fp-cashflow__subtotal">
                <span className="fp-cashflow__subtotal-label">
                  Total Household Living Expenses
                </span>
                <span className="font-mono fp-cashflow__subtotal-val">
                  {formatVND(65_000_000)}
                </span>
              </div>
              <div className="fp-cashflow__loan-row">
                <span className="fp-cashflow__loan-label">
                  + Debt Repayment Obligations — Bảo Lộc Land Loan
                </span>
                <span className="font-mono fp-cashflow__loan-val">
                  {formatVND(8_300_000)}
                </span>
              </div>
              <div className="fp-cashflow__total-row">
                <span className="fp-cashflow__total-label">
                  TOTAL ACTUAL EXPENSES
                </span>
                <span className="font-mono fp-cashflow__total-val">
                  {formatVND(cashFlow.totalMonthlyExpense)}
                </span>
              </div>
            </div>

            {/* Cash Flow Summary */}
            <div className="fp-cashflow-summary fp-cashflow-summary--deficit">
              <div className="fp-cashflow-summary__header">
                <div className="fp-cashflow-summary__icon-box">
                  <WarningOutlined style={{ fontSize: 20, color: '#DC2626' }} />
                </div>
                <div>
                  <div className="fp-cashflow-summary__title">
                    Cash Flow Balance Assessment
                  </div>
                  <div className="fp-cashflow-summary__subtitle">
                    Monthly Budget Deficit Alert
                  </div>
                </div>
              </div>

              <div className="fp-cashflow-summary__row">
                <span className="fp-cashflow-summary__row-label">
                  Total Monthly Income
                </span>
                <span className="fp-cashflow-summary__row-value fp-cashflow-summary__row-value--income font-mono">
                  {formatVND(cashFlow.totalMonthlyIncome)}
                </span>
              </div>

              <div className="fp-cashflow-summary__row">
                <span className="fp-cashflow-summary__row-label">
                  Total Monthly Expenses
                </span>
                <span className="fp-cashflow-summary__row-value fp-cashflow-summary__row-value--expense font-mono">
                  {formatVND(cashFlow.totalMonthlyExpense)}
                </span>
              </div>

              <div className="fp-cashflow-summary__divider" />

              <div className="fp-cashflow-summary__deficit">
                <span className="fp-cashflow-summary__deficit-label">
                  Monthly Cash Flow Deficit
                </span>
                <span className="fp-cashflow-summary__deficit-value font-mono">
                  {formatVND(cashFlow.monthlySurplus)}
                </span>
              </div>

              <div className="fp-cashflow-summary__note">
                <div className="fp-cashflow-summary__note-header">
                  <WarningOutlined style={{ color: '#DC2626', fontSize: 16 }} />
                  <span>Assessment &amp; Recommendations for Budget Rebalancing</span>
                </div>
                <p>
                  The household’s monthly expenses exceed its income by VND 8.3 million (approximately VND 99.6 million annually), primarily due to elevated living expenses and bank loan repayments.
                </p>
                <p style={{ marginTop: '8px' }}>
                  The household should restructure its budget and reallocate spending to reduce the deficit and establish a sustainable cash flow surplus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CashFlowDiagnostics;
