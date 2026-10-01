import { useInView } from '../../hooks/useAnimations';
import {
  familyMembers,
  additionalInfo,
  financialGoals,
  assets,
  totalAssets,
  liabilities,
  totalLiabilities,
  netWorth,
  expenses,
  cashFlow,
  formatVND,
} from '../../data/profileData';
import '../ui/ui.css';
import './FinancialProfile.css';

/* ============================================================
   DONUT CHART COMPONENT (CSS conic-gradient)
   ============================================================ */
function DonutChart() {
  const total = totalAssets;
  const segments = assets.map((a) => ({
    ...a,
    percent: (a.value / total) * 100,
  }));

  // Build conic-gradient
  let gradientParts: string[] = [];
  let currentAngle = 0;
  segments.forEach((seg) => {
    const endAngle = currentAngle + seg.percent * 3.6;
    gradientParts.push(`${seg.color} ${currentAngle}deg ${endAngle}deg`);
    currentAngle = endAngle;
  });

  return (
    <div
      className="donut-chart"
      style={{
        background: `conic-gradient(${gradientParts.join(', ')})`,
      }}
    >
      <div className="donut-chart__center">
        <span className="donut-chart__center-value">1,4 tỷ</span>
        <span className="donut-chart__center-label">Tổng TS</span>
      </div>
    </div>
  );
}

/* ============================================================
   BAR CHART COMPONENT
   ============================================================ */
function ExpenseBarChart({ isVisible }: { isVisible: boolean }) {
  const livingExpenses = expenses.filter((e) => e.id !== 'expense-loan');
  const maxMonthly = Math.max(...livingExpenses.map((e) => e.monthly));

  return (
    <div>
      {livingExpenses.map((exp) => (
        <div className="bar-chart__item" key={exp.id}>
          <span className="bar-chart__label">
            <span>{exp.icon}</span> {exp.category.replace('Chi phí ', '')}
          </span>
          <div className="bar-chart__bar-wrapper">
            <div
              className="bar-chart__bar"
              style={{
                width: isVisible ? `${(exp.monthly / maxMonthly) * 100}%` : '0%',
                background: exp.color,
              }}
            >
              <span className="bar-chart__bar-value">{exp.percentage}%</span>
            </div>
          </div>
          <span className="bar-chart__amount">{formatVND(exp.monthly)}</span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function FinancialProfile() {
  const [familyRef, familyVisible] = useInView();
  const [goalsRef, goalsVisible] = useInView();
  const [balanceRef, balanceVisible] = useInView();
  const [cashflowRef, cashflowVisible] = useInView();

  return (
    <section className="section financial-profile" id="financial-profile" aria-label="Hồ sơ tài chính">
      <div className="container">

        {/* --- Section Heading --- */}
        <div className="section-heading">
          <span className="section-heading__badge">
            <span className="section-heading__badge-icon">📋</span>
            Financial Profile Collection
          </span>
          <h2 className="section-heading__title">
            Hồ sơ Tài chính Gia đình
          </h2>
          <p className="section-heading__subtitle">
            Thu thập và phân tích toàn diện tình hình tài chính gia đình Anh Nam & Chị Nữ —
            cơ sở để xây dựng chiến lược đầu tư tối ưu.
          </p>
        </div>

        {/* --- 3A: Family Info --- */}
        <div
          className={`fp-family animate-on-scroll ${familyVisible ? 'is-visible' : ''}`}
          ref={familyRef as React.RefObject<HTMLDivElement>}
        >
          {/* Member Cards */}
          <div className="fp-family__grid">
            {familyMembers.map((member, i) => (
              <div
                key={member.id}
                className={`fp-member-card ${member.isDependent ? 'fp-member-card--dependent' : ''} animate-on-scroll stagger-${i + 1} ${familyVisible ? 'is-visible' : ''}`}
              >
                <div className="fp-member-card__emoji">{member.emoji}</div>
                <div className="fp-member-card__info">
                  <div className="fp-member-card__name">{member.name}</div>
                  <div className="fp-member-card__role">
                    {member.role} • {member.birthYear} ({member.age} tuổi)
                  </div>
                  <div className="fp-member-card__details">
                    <span className="fp-member-card__detail">
                      <span className="fp-member-card__detail-icon">💼</span>
                      {member.occupation}
                    </span>
                    <span className="fp-member-card__detail">
                      <span className="fp-member-card__detail-icon">🏢</span>
                      {member.workplace}
                    </span>
                  </div>
                  {member.monthlyIncome ? (
                    <div className="fp-member-card__income">
                      {formatVND(member.monthlyIncome)}/tháng
                    </div>
                  ) : (
                    <div className="fp-member-card__income" style={{ color: 'var(--color-navy-300)' }}>
                      Phụ thuộc
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Total Income */}
          <div className="fp-income-total">
            <span className="fp-income-total__label">💰 Tổng thu nhập hàng tháng</span>
            <span className="fp-income-total__value">{formatVND(cashFlow.totalMonthlyIncome)}</span>
          </div>

          {/* Additional Info */}
          <div className="fp-additional">
            <div className="fp-additional__card">
              <span className="fp-additional__card-icon">🏠</span>
              <div className="fp-additional__card-content">
                <div className="fp-additional__card-title">{additionalInfo.housing}</div>
                <div className="fp-additional__card-text">{additionalInfo.housingDetail}</div>
              </div>
            </div>
            <div className="fp-additional__card">
              <span className="fp-additional__card-icon">🛡️</span>
              <div className="fp-additional__card-content">
                <div className="fp-additional__card-title">{additionalInfo.insurance}</div>
                <div className="fp-additional__card-text">{additionalInfo.insuranceDetail}</div>
              </div>
            </div>
            <div className="fp-additional__card">
              <span className="fp-additional__card-icon">👴</span>
              <div className="fp-additional__card-content">
                <div className="fp-additional__card-title">Gia đình hai bên</div>
                <div className="fp-additional__card-text">{additionalInfo.parents}</div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3B: Financial Goals --- */}
        <div
          className={`fp-goals animate-on-scroll ${goalsVisible ? 'is-visible' : ''}`}
          ref={goalsRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading">
            <span className="section-heading__badge">
              <span className="section-heading__badge-icon">🎯</span>
              Financial Goals
            </span>
            <h2 className="section-heading__title" style={{ fontSize: 'var(--text-3xl)' }}>
              Mục tiêu Tài chính
            </h2>
          </div>

          <div className="fp-goals__grid">
            {financialGoals.map((goal) => (
              <div
                key={goal.id}
                className={`fp-goal-card fp-goal-card--${goal.type === 'mid-term' ? 'mid' : 'long'}`}
              >
                <div className="fp-goal-card__header">
                  <span className="fp-goal-card__icon">{goal.icon}</span>
                  <span className={`badge ${goal.type === 'mid-term' ? 'badge--emerald' : 'badge--navy'}`}>
                    {goal.type === 'mid-term' ? 'Trung hạn' : 'Dài hạn'}
                  </span>
                </div>
                <h3 className="fp-goal-card__title">{goal.title}</h3>
                <div className="fp-goal-card__timeline">{goal.timeline}</div>
                <div className="fp-goal-card__target">{formatVND(goal.targetAmount)}</div>
                <p className="fp-goal-card__description">{goal.description}</p>
                <div className="fp-goal-card__progress">
                  <div className="fp-goal-card__progress-header">
                    <span className="fp-goal-card__progress-label">Tiến độ tích lũy</span>
                    <span className="fp-goal-card__progress-value">{goal.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar__fill"
                      style={{ width: goalsVisible ? `${goal.progress}%` : '0%' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- 3C: Balance Sheet --- */}
        <div
          className={`fp-balance animate-on-scroll ${balanceVisible ? 'is-visible' : ''}`}
          ref={balanceRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading">
            <span className="section-heading__badge">
              <span className="section-heading__badge-icon">💼</span>
              Balance Sheet
            </span>
            <h2 className="section-heading__title" style={{ fontSize: 'var(--text-3xl)' }}>
              Bảng Cân đối Tài sản
            </h2>
          </div>

          <div className="fp-balance__grid">
            {/* Table */}
            <div className="fp-balance__table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Danh mục</th>
                    <th>Chi tiết</th>
                    <th style={{ textAlign: 'right' }}>Giá trị (VNĐ)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Assets */}
                  <tr>
                    <td colSpan={2} style={{ fontWeight: 700, color: 'var(--color-navy-900)', background: 'var(--color-emerald-50)' }}>
                      I. TỔNG TÀI SẢN
                    </td>
                    <td className="data-table__value data-table__value--positive" style={{ background: 'var(--color-emerald-50)' }}>
                      {formatVND(totalAssets)}
                    </td>
                  </tr>
                  {assets.map((asset) => (
                    <tr key={asset.id}>
                      <td style={{ paddingLeft: 'var(--space-8)' }}>{asset.name}</td>
                      <td>{asset.detail}</td>
                      <td className="data-table__value">{formatVND(asset.value)}</td>
                    </tr>
                  ))}

                  {/* Liabilities */}
                  <tr>
                    <td colSpan={2} style={{ fontWeight: 700, color: 'var(--color-navy-900)', background: 'var(--color-red-50)' }}>
                      II. TỔNG NỢ PHẢI TRẢ
                    </td>
                    <td className="data-table__value data-table__value--negative" style={{ background: 'var(--color-red-50)' }}>
                      {formatVND(totalLiabilities)}
                    </td>
                  </tr>
                  {liabilities.map((liability) => (
                    <tr key={liability.id}>
                      <td style={{ paddingLeft: 'var(--space-8)' }}>{liability.name}</td>
                      <td>{liability.detail}</td>
                      <td className="data-table__value">{formatVND(liability.value)}</td>
                    </tr>
                  ))}

                  {/* Net Worth */}
                  <tr className="data-table__total">
                    <td colSpan={2}>III. TÀI SẢN RÒNG (THUẦN)</td>
                    <td className="data-table__value data-table__value--positive">
                      {formatVND(netWorth)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Chart */}
            <div className="fp-balance__chart">
              <h4 className="fp-balance__chart-title">Cơ cấu Tài sản</h4>
              <DonutChart />
              <div className="fp-balance__legend">
                {assets.map((asset) => (
                  <div className="fp-balance__legend-item" key={asset.id}>
                    <div className="fp-balance__legend-color" style={{ background: asset.color }} />
                    <span className="fp-balance__legend-label">{asset.name}</span>
                    <span className="fp-balance__legend-value">
                      {((asset.value / totalAssets) * 100).toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Net Worth Card */}
          <div className="fp-networth">
            <span className="fp-networth__label">📊 Tài sản ròng (Net Worth)</span>
            <span className="fp-networth__value">{formatVND(netWorth)}</span>
          </div>
        </div>

        {/* --- 3D: Cash Flow --- */}
        <div
          className={`fp-cashflow animate-on-scroll ${cashflowVisible ? 'is-visible' : ''}`}
          ref={cashflowRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading">
            <span className="section-heading__badge">
              <span className="section-heading__badge-icon">📊</span>
              Cash Flow Analysis
            </span>
            <h2 className="section-heading__title" style={{ fontSize: 'var(--text-3xl)' }}>
              Cơ cấu Chi phí & Dòng tiền
            </h2>
          </div>

          <div className="fp-cashflow__grid">
            {/* Expense Breakdown */}
            <div className="fp-cashflow__panel">
              <h3 className="fp-cashflow__panel-title">
                📊 Chi phí sinh hoạt hàng tháng
              </h3>
              <ExpenseBarChart isVisible={cashflowVisible} />

              <div style={{
                marginTop: 'var(--space-5)',
                paddingTop: 'var(--space-4)',
                borderTop: '2px solid var(--color-navy-100)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ fontWeight: 700, color: 'var(--color-navy-700)' }}>
                  Subtotal chi phí sinh hoạt
                </span>
                <span className="font-mono" style={{ fontWeight: 700, color: 'var(--color-navy-900)' }}>
                  {formatVND(65_000_000)}
                </span>
              </div>
              <div style={{
                marginTop: 'var(--space-3)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ fontWeight: 500, color: 'var(--color-navy-500)', fontSize: 'var(--text-sm)' }}>
                  + Chi trả nợ vay
                </span>
                <span className="font-mono" style={{ fontWeight: 600, color: 'var(--color-red-500)', fontSize: 'var(--text-sm)' }}>
                  {formatVND(8_300_000)}
                </span>
              </div>
              <div style={{
                marginTop: 'var(--space-3)',
                paddingTop: 'var(--space-3)',
                borderTop: '2px solid var(--color-navy-200)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ fontWeight: 800, color: 'var(--color-navy-900)' }}>
                  TỔNG CHI PHÍ
                </span>
                <span className="font-mono" style={{ fontWeight: 800, color: 'var(--color-navy-900)', fontSize: 'var(--text-lg)' }}>
                  {formatVND(cashFlow.totalMonthlyExpense)}
                </span>
              </div>
            </div>

            {/* Cash Flow Summary */}
            <div className="fp-cashflow-summary fp-cashflow-summary--deficit">
              <div className="fp-cashflow-summary__header">
                <div className="fp-cashflow-summary__icon">⚠️</div>
                <div>
                  <div className="fp-cashflow-summary__title">Phân tích Dòng tiền</div>
                  <div className="fp-cashflow-summary__subtitle">Cảnh báo thâm hụt</div>
                </div>
              </div>

              <div className="fp-cashflow-summary__row">
                <span className="fp-cashflow-summary__row-label">Tổng thu nhập/tháng</span>
                <span className="fp-cashflow-summary__row-value fp-cashflow-summary__row-value--income">
                  {formatVND(cashFlow.totalMonthlyIncome)}
                </span>
              </div>

              <div className="fp-cashflow-summary__row">
                <span className="fp-cashflow-summary__row-label">Tổng chi phí/tháng</span>
                <span className="fp-cashflow-summary__row-value fp-cashflow-summary__row-value--expense">
                  {formatVND(cashFlow.totalMonthlyExpense)}
                </span>
              </div>

              <div className="fp-cashflow-summary__divider" />

              <div className="fp-cashflow-summary__deficit">
                <span className="fp-cashflow-summary__deficit-label">
                  Thặng dư / Thâm hụt
                </span>
                <span className="fp-cashflow-summary__deficit-value">
                  {formatVND(cashFlow.monthlySurplus)}
                </span>
              </div>

              <div className="fp-cashflow-summary__note">
                <p>
                  <strong>⚠️ Gia đình đang chi tiêu vượt thu nhập {formatVND(Math.abs(cashFlow.monthlySurplus))}/tháng</strong>
                  {' '}({formatVND(Math.abs(cashFlow.annualSurplus))}/năm).
                  Cần tái cơ cấu ngân sách và tìm nguồn thu nhập bổ sung qua đầu tư
                  để đạt được các mục tiêu tài chính đã đề ra.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
