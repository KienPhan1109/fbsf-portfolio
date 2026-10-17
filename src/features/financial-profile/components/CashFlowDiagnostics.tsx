import { useInView } from '../../../shared/hooks/useAnimations';
import { expenses, cashFlow, formatVND } from '../data/profileData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../FinancialProfile.css';

function IconAlertTriangle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function getExpenseIcon(id: string) {
  switch (id) {
    case 'expense-rent':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      );
    case 'expense-education':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10M6 10h10" />
        </svg>
      );
    case 'expense-living':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      );
    case 'expense-entertainment':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
        </svg>
      );
    case 'expense-gifts':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 12 20 22 4 22 4 12" />
          <rect width="20" height="5" x="2" y="7" />
          <line x1="12" x2="12" y1="22" y2="7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      );
    default:
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
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
              Phân tích định lượng các dòng tiền ra vào hàng tháng và cảnh báo rủi ro thâm hụt ngân sách gia đình.
            </p>
          </div>

          <div className="fp-cashflow__grid">
            {/* Expense Breakdown */}
            <div className="fp-cashflow__panel">
              <h3 className="fp-cashflow__panel-title">
                <span className="fp-cashflow__panel-title-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </span>
                Cơ cấu chi phí sinh hoạt hàng tháng
              </h3>
              <ExpenseBarChart isVisible={cashflowVisible} />

              <div className="fp-cashflow__subtotal">
                <span className="fp-cashflow__subtotal-label">
                  Chi phí sinh hoạt gia đình
                </span>
                <span className="font-mono fp-cashflow__subtotal-val">
                  {formatVND(65_000_000)}
                </span>
              </div>
              <div className="fp-cashflow__loan-row">
                <span className="fp-cashflow__loan-label">
                  + Nghĩa vụ trả nợ vay mua đất Bảo Lộc
                </span>
                <span className="font-mono fp-cashflow__loan-val">
                  {formatVND(8_300_000)}
                </span>
              </div>
              <div className="fp-cashflow__total-row">
                <span className="fp-cashflow__total-label">
                  TỔNG CHI PHÍ THỰC TẾ
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
                  <IconAlertTriangle />
                </div>
                <div>
                  <div className="fp-cashflow-summary__title">
                    Phân tích Cân đối Dòng tiền
                  </div>
                  <div className="fp-cashflow-summary__subtitle">
                    Cảnh báo thâm hụt ngân sách hàng tháng
                  </div>
                </div>
              </div>

              <div className="fp-cashflow-summary__row">
                <span className="fp-cashflow-summary__row-label">
                  Tổng thu nhập / tháng
                </span>
                <span className="fp-cashflow-summary__row-value fp-cashflow-summary__row-value--income font-mono">
                  {formatVND(cashFlow.totalMonthlyIncome)}
                </span>
              </div>

              <div className="fp-cashflow-summary__row">
                <span className="fp-cashflow-summary__row-label">
                  Tổng chi phí / tháng
                </span>
                <span className="fp-cashflow-summary__row-value fp-cashflow-summary__row-value--expense font-mono">
                  {formatVND(cashFlow.totalMonthlyExpense)}
                </span>
              </div>

              <div className="fp-cashflow-summary__divider" />

              <div className="fp-cashflow-summary__deficit">
                <span className="fp-cashflow-summary__deficit-label">
                  Thâm hụt dòng tiền hàng tháng
                </span>
                <span className="fp-cashflow-summary__deficit-value font-mono">
                  {formatVND(cashFlow.monthlySurplus)}
                </span>
              </div>

              <div className="fp-cashflow-summary__note">
                <div className="fp-cashflow-summary__note-header">
                  <IconAlertTriangle />
                  <span>Assessment & Recommendations for Rebalancing</span>
                </div>
                <p>
                  The household's current expenditures exceed its income by VND 8.3 million per month (VND 99.6 million annually), due to high combined living expenses and bank loan repayments. The household should restructure its budget and reallocate spending to reduce the deficit and establish a sustainable cash flow surplus.
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
