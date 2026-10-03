import React from 'react';
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
import './SystemWorkflow.css';
import './FinancialProfile.css';

/* ============================================================
   CLEAN MONOLINE SVG ICONS (1.75px Stroke, No Emojis)
   ============================================================ */
function IconBriefcase() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
    </svg>
  );
}

function IconHouse({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconShield({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconUsers({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconCar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2 11 2 11.3 2 11.6V16c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function IconLandmark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
    </svg>
  );
}

function IconScale() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

function IconWallet() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

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

/* ============================================================
   DONUT CHART COMPONENT (Clean Modern CSS Conic Gradient)
   ============================================================ */
function DonutChart() {
  const total = totalAssets;
  const segments = assets.map((a) => ({
    ...a,
    percent: (a.value / total) * 100,
  }));

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
        width: '136px',
        height: '136px',
      }}
    >
      <div className="donut-chart__center" style={{ width: '92px', height: '92px' }}>
        <span className="donut-chart__center-value" style={{ fontSize: '16px', fontWeight: 800 }}>1,4 Tỷ</span>
        <span className="donut-chart__center-label" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tổng TS</span>
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

/* ============================================================
   MAIN COMPONENT (100vh Modular Sections)
   ============================================================ */
export default function FinancialProfile() {
  const [familyRef, familyVisible] = useInView();
  const [goalsRef, goalsVisible] = useInView();
  const [balanceRef, balanceVisible] = useInView();
  const [cashflowRef, cashflowVisible] = useInView();

  return (
    <>
      {/* --- 3A: Family Info (100vh) --- */}
      <section className="section" id="financial-profile" aria-label="Hồ sơ tài chính gia đình">
        <div className="container">
          <div
            className={`fp-family animate-on-scroll ${familyVisible ? 'is-visible' : ''}`}
            ref={familyRef as React.RefObject<HTMLDivElement>}
          >
            {/* Standardized sw-heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  HOUSEHOLD FINANCIAL PROFILE
                </span>
              </h2>
              <p className="sw-heading__subtitle">
                Thu thập và phân tích dữ liệu nhân khẩu, cơ cấu thu nhập và điều kiện sống của gia đình Anh Nam & Chị Nữ.
              </p>
            </div>

            {/* Member Cards */}
            <div className="fp-family__grid">
              {familyMembers.map((member, i) => (
                <div
                  key={member.id}
                  className={`fp-member-card ${member.isDependent ? 'fp-member-card--dependent' : ''} animate-on-scroll stagger-${i + 1} ${familyVisible ? 'is-visible' : ''}`}
                >
                  <div className={`fp-member-avatar fp-member-avatar--${member.id}`}>
                    <span className="fp-member-avatar__initials">
                      {member.name === 'Anh Nam' ? 'AN' : member.name === 'Chị Nữ' ? 'CN' : member.name === 'Bé lớn' ? 'B1' : 'B2'}
                    </span>
                  </div>
                  <div className="fp-member-card__info">
                    <div className="fp-member-card__top">
                      <div className="fp-member-card__name">{member.name}</div>
                      <span className={`fp-member-card__role-tag ${member.isDependent ? 'fp-member-card__role-tag--dependent' : ''}`}>
                        {member.relationship}
                      </span>
                    </div>
                    <div className="fp-member-card__role">
                      {member.role} • Sinh năm {member.birthYear} ({member.age} tuổi)
                    </div>
                    <div className="fp-member-card__details">
                      <span className="fp-member-card__detail">
                        <span className="fp-member-card__detail-icon"><IconBriefcase /></span>
                        {member.occupation}
                      </span>
                      <span className="fp-member-card__detail">
                        <span className="fp-member-card__detail-icon"><IconBuilding /></span>
                        {member.workplace}
                      </span>
                    </div>
                    {member.monthlyIncome ? (
                      <div className="fp-member-card__income">
                        {formatVND(member.monthlyIncome)}
                        <span className="fp-member-card__income-unit"> / tháng</span>
                      </div>
                    ) : (
                      <div className="fp-member-card__dependent-note">
                        Người phụ thuộc — Chưa có thu nhập
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Total Income Bar */}
            <div className="fp-income-total">
              <div className="fp-income-total__left">
                <div className="fp-income-total__icon-wrap">
                  <IconWallet />
                </div>
                <div>
                  <div className="fp-income-total__label">Tổng thu nhập hàng tháng</div>
                  <div className="fp-income-total__sublabel">Đóng góp tích lũy từ 2 trụ cột thu nhập gia đình</div>
                </div>
              </div>
              <div className="fp-income-total__value font-mono">{formatVND(cashFlow.totalMonthlyIncome)}</div>
            </div>

            {/* Additional Info */}
            <div className="fp-additional">
              <div className="fp-additional__card">
                <div className="fp-additional__card-icon-wrap">
                  <IconHouse size={18} />
                </div>
                <div className="fp-additional__card-content">
                  <div className="fp-additional__card-title">{additionalInfo.housing}</div>
                  <div className="fp-additional__card-text">{additionalInfo.housingDetail}</div>
                </div>
              </div>
              <div className="fp-additional__card">
                <div className="fp-additional__card-icon-wrap">
                  <IconShield size={18} />
                </div>
                <div className="fp-additional__card-content">
                  <div className="fp-additional__card-title">{additionalInfo.insurance}</div>
                  <div className="fp-additional__card-text">{additionalInfo.insuranceDetail}</div>
                </div>
              </div>
              <div className="fp-additional__card">
                <div className="fp-additional__card-icon-wrap">
                  <IconUsers size={18} />
                </div>
                <div className="fp-additional__card-content">
                  <div className="fp-additional__card-title">Gia đình hai bên</div>
                  <div className="fp-additional__card-text">{additionalInfo.parents}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3B: Financial Goals (100vh) --- */}
      <section className="section section--alt" id="financial-goals" aria-label="Mục tiêu tài chính">
        <div className="container">
          <div
            className={`fp-goals animate-on-scroll ${goalsVisible ? 'is-visible' : ''}`}
            ref={goalsRef as React.RefObject<HTMLDivElement>}
          >
            {/* Standardized sw-heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  STRATEGIC FINANCIAL GOALS
                </span>
              </h2>
              <p className="sw-heading__subtitle">
                Định vị các mục tiêu trọng điểm theo khung thời gian trung và dài hạn, xác lập quy mô vốn và lộ trình tích lũy.
              </p>
            </div>

            <div className="fp-goals__grid">
              {financialGoals.map((goal) => (
                <div
                  key={goal.id}
                  className={`fp-goal-card fp-goal-card--${goal.type === 'mid-term' ? 'mid' : 'long'}`}
                >
                  <div className="fp-goal-card__header">
                    <div className="fp-goal-card__icon-box">
                      {goal.id === 'goal-car' ? <IconCar /> : <IconLandmark />}
                    </div>
                    <span className={`fp-goal-card__badge ${goal.type === 'mid-term' ? 'fp-goal-card__badge--mid' : 'fp-goal-card__badge--long'}`}>
                      {goal.type === 'mid-term' ? 'Trung hạn • 3 năm' : 'Dài hạn • 10 năm'}
                    </span>
                  </div>
                  <h3 className="fp-goal-card__title">{goal.title}</h3>
                  <div className="fp-goal-card__timeline">{goal.timeline}</div>
                  <div className="fp-goal-card__target font-mono">{formatVND(goal.targetAmount)}</div>
                  <p className="fp-goal-card__description">{goal.description}</p>
                  <div className="fp-goal-card__progress">
                    <div className="fp-goal-card__progress-header">
                      <span className="fp-goal-card__progress-label">Tiến độ tích lũy hiện tại</span>
                      <span className="fp-goal-card__progress-value font-mono">{goal.progress}%</span>
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
        </div>
      </section>

      {/* --- 3C: Balance Sheet (100vh) --- */}
      <section className="section" id="financial-balance" aria-label="Bảng cân đối tài sản">
        <div className="container">
          <div
            className={`fp-balance animate-on-scroll ${balanceVisible ? 'is-visible' : ''}`}
            ref={balanceRef as React.RefObject<HTMLDivElement>}
          >
            {/* Standardized sw-heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  HOUSEHOLD BALANCE SHEET
                </span>
              </h2>
              <p className="sw-heading__subtitle">
                Đánh giá toàn diện cơ cấu tài sản, nguồn vốn nợ và xác định giá trị tài sản ròng thực tế của gia đình.
              </p>
            </div>

            <div className="fp-balance__grid">
              {/* Table */}
              <div className="fp-balance__table-wrapper">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th style={{ padding: '10px 16px' }}>Danh mục tài sản & Nợ</th>
                      <th style={{ padding: '10px 16px' }}>Chi tiết phân loại</th>
                      <th style={{ textAlign: 'right', padding: '10px 16px' }}>Giá trị (VNĐ)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Assets */}
                    <tr>
                      <td colSpan={2} style={{ fontWeight: 700, color: 'var(--color-emerald-800)', background: 'rgba(16, 185, 129, 0.08)', padding: '8px 16px' }}>
                        I. TỔNG TÀI SẢN
                      </td>
                      <td className="data-table__value data-table__value--positive font-mono" style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '8px 16px' }}>
                        {formatVND(totalAssets)}
                      </td>
                    </tr>
                    {assets.map((asset) => (
                      <tr key={asset.id}>
                        <td style={{ paddingLeft: '24px', padding: '8px 16px' }}>{asset.name}</td>
                        <td style={{ padding: '8px 16px' }}>{asset.detail}</td>
                        <td className="data-table__value font-mono" style={{ padding: '8px 16px' }}>{formatVND(asset.value)}</td>
                      </tr>
                    ))}

                    {/* Liabilities */}
                    <tr>
                      <td colSpan={2} style={{ fontWeight: 700, color: 'var(--color-red-600)', background: 'rgba(239, 68, 68, 0.06)', padding: '8px 16px' }}>
                        II. TỔNG NỢ PHẢI TRẢ
                      </td>
                      <td className="data-table__value data-table__value--negative font-mono" style={{ background: 'rgba(239, 68, 68, 0.06)', padding: '8px 16px' }}>
                        {formatVND(totalLiabilities)}
                      </td>
                    </tr>
                    {liabilities.map((liability) => (
                      <tr key={liability.id}>
                        <td style={{ paddingLeft: '24px', padding: '8px 16px' }}>{liability.name}</td>
                        <td style={{ padding: '8px 16px' }}>{liability.detail}</td>
                        <td className="data-table__value font-mono" style={{ padding: '8px 16px' }}>{formatVND(liability.value)}</td>
                      </tr>
                    ))}

                    {/* Net Worth */}
                    <tr className="data-table__total">
                      <td colSpan={2} style={{ padding: '10px 16px' }}>III. TÀI SẢN RÒNG (NET WORTH)</td>
                      <td className="data-table__value data-table__value--positive font-mono" style={{ padding: '10px 16px' }}>
                        {formatVND(netWorth)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Chart */}
              <div className="fp-balance__chart">
                <h4 className="fp-balance__chart-title">Cơ cấu Phân bổ Tài sản</h4>
                <DonutChart />
                <div className="fp-balance__legend">
                  {assets.map((asset) => (
                    <div className="fp-balance__legend-item" key={asset.id}>
                      <div className="fp-balance__legend-color" style={{ background: asset.color }} />
                      <span className="fp-balance__legend-label">{asset.name}</span>
                      <span className="fp-balance__legend-value font-mono">
                        {((asset.value / totalAssets) * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Net Worth Card */}
            <div className="fp-networth">
              <div className="fp-networth__left">
                <div className="fp-networth__icon-wrap">
                  <IconScale />
                </div>
                <div>
                  <div className="fp-networth__label">Tài sản ròng thực tế (Net Worth)</div>
                  <div className="fp-networth__sublabel">Tổng tài sản (1,4 tỷ) trừ dư nợ vay ngân hàng (450 triệu)</div>
                </div>
              </div>
              <span className="fp-networth__value font-mono">{formatVND(netWorth)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3D: Cash Flow (100vh) --- */}
      <section className="section section--alt" id="financial-cashflow" aria-label="Cơ cấu chi phí & Dòng tiền">
        <div className="container">
          <div
            className={`fp-cashflow animate-on-scroll ${cashflowVisible ? 'is-visible' : ''}`}
            ref={cashflowRef as React.RefObject<HTMLDivElement>}
          >
            {/* Standardized sw-heading */}
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
                    <div className="fp-cashflow-summary__title">Phân tích Cân đối Dòng tiền</div>
                    <div className="fp-cashflow-summary__subtitle">Cảnh báo thâm hụt ngân sách hàng tháng</div>
                  </div>
                </div>

                <div className="fp-cashflow-summary__row">
                  <span className="fp-cashflow-summary__row-label">Tổng thu nhập / tháng</span>
                  <span className="fp-cashflow-summary__row-value fp-cashflow-summary__row-value--income font-mono">
                    {formatVND(cashFlow.totalMonthlyIncome)}
                  </span>
                </div>

                <div className="fp-cashflow-summary__row">
                  <span className="fp-cashflow-summary__row-label">Tổng chi phí / tháng</span>
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
                    <span>Đánh giá & Khuyến nghị tái cân đối:</span>
                  </div>
                  <p>
                    Gia đình hiện chi tiêu vượt thu nhập <strong>{formatVND(Math.abs(cashFlow.monthlySurplus))}/tháng</strong> ({formatVND(Math.abs(cashFlow.annualSurplus))}/năm) do gánh nặng chi phí sinh hoạt kết hợp nợ vay ngân hàng. Cần tái cấu trúc ngân sách chi tiêu và phân bổ tối ưu 300 triệu tiền mặt hiện hữu theo danh mục Markowitz nhằm tạo dòng tiền thặng dư bù đắp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
