import React from 'react';
import { useInView } from '../../../shared/hooks/useAnimations';
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
  formatFullVND,
} from '../data/profileData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../FinancialProfile.css';

export function FinancialProfile() {
  const [profileRef, profileVisible] = useInView();
  const [balanceRef, balanceVisible] = useInView();

  // 6 expense categories in exact order as shown in user's design
  const orderedExpenses = [
    { label: 'Thuê nhà', pct: 27.3 },
    { label: 'Giáo dục', pct: 27.3 },
    { label: 'Sinh hoạt', pct: 20.5 },
    { label: 'Trả nợ', pct: 11.3 },
    { label: 'Giải trí', pct: 10.9 },
    { label: 'Đối ngoại', pct: 2.7 },
  ];

  return (
    <>
      {/* ============================================================
          SECTION 1: HOUSEHOLD FINANCIAL PROFILE & STRATEGIC GOALS (Phần 7 & 8)
          Phong cách chuẩn theo thiết kế media_1792322975440.png
          ============================================================ */}
      <section
        className="section fp-section"
        id="financial-profile"
        aria-label="Hồ sơ tài chính và Mục tiêu gia đình"
      >
        <div id="financial-goals" aria-hidden="true" style={{ position: 'absolute', top: 0 }} />

        <div className="container">
          <div
            ref={profileRef as React.RefObject<HTMLDivElement>}
            className={`fp-container animate-on-scroll ${profileVisible ? 'is-visible' : ''}`}
          >
            {/* Section Heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  HOUSEHOLD FINANCIAL PROFILE
                </span>
              </h2>
              <p className="sw-heading__subtitle">
                Thu thập và phân tích dữ liệu nhân khẩu, cơ cấu thu nhập và định vị các mục tiêu tài chính trọng điểm của gia đình.
              </p>
            </div>

            <div className="fp-group">
              {/* CARD 1: DARK DEMOGRAPHICS CARD */}
              <div className="fp-dark-card">
                <div className="fp-dark-grid">
                  {familyMembers.map((member) => {
                    let badge = 'AN';
                    if (member.name === 'Anh Nam') badge = 'AN';
                    else if (member.name === 'Chị Nữ') badge = 'NỮ';
                    else if (member.name === 'Bé lớn') badge = '12';
                    else if (member.name === 'Bé nhỏ') badge = '05';

                    let subtitle = '';
                    if (member.name === 'Anh Nam') subtitle = '41 tuổi · Trưởng phòng Kế toán';
                    else if (member.name === 'Chị Nữ') subtitle = '36 tuổi · Nhân viên Kế toán';
                    else if (member.name === 'Bé lớn') subtitle = 'Học sinh cấp 2 · Tuệ Đức';
                    else if (member.name === 'Bé nhỏ') subtitle = 'Mẫu giáo · Vườn Hồng';

                    return (
                      <div key={member.id} className="fp-dark-col">
                        <div className="fp-dark-badge font-mono">{badge}</div>
                        <div className="fp-dark-name">{member.name}</div>
                        <div className="fp-dark-sub">{subtitle}</div>
                        {member.monthlyIncome ? (
                          <div className="fp-dark-income font-mono">
                            {formatVND(member.monthlyIncome)} / tháng
                          </div>
                        ) : (
                          <div className="fp-dark-status">Người phụ thuộc</div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Family Context Strip */}
                <div className="fp-dark-context">
                  <span className="fp-dark-context-label font-mono">FAMILY CONTEXT</span>
                  <span className="fp-dark-context-text">
                    Đang thuê nhà tại Quận 2 20 tr/tháng · {additionalInfo.insurance} · Bố mẹ hai bên tự chủ tài chính
                  </span>
                </div>
              </div>

              {/* CARD 2: WHITE STRATEGIC GOALS CARD */}
              <div className="fp-goals-card">
                {financialGoals.map((goal) => {
                  const tag = goal.type === 'mid-term' ? '03 NĂM TỚI' : '10 NĂM TỚI';

                  return (
                    <div key={goal.id} className="fp-goal-col">
                      <div className="fp-goal-tag font-mono">{tag}</div>
                      <h3 className="fp-goal-title">{goal.title}</h3>
                      <div className="fp-goal-amount font-mono">
                        {formatFullVND(goal.targetAmount)}
                      </div>

                      <div className="fp-goal-bar-wrap">
                        <div className="fp-goal-bar-track">
                          <div
                            className="fp-goal-bar-fill"
                            style={{
                              width: profileVisible ? `${goal.progress}%` : '0%',
                            }}
                          />
                        </div>
                        <div className="fp-goal-bar-label font-mono">
                          {goal.progress}% tiến độ hiện tại
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: HOUSEHOLD BALANCE SHEET & CASH FLOW (Phần 9 & 10)
          Phong cách chuẩn theo thiết kế media_1792322975444.png
          ============================================================ */}
      <section
        className="section section--alt fp-section"
        id="financial-balance"
        aria-label="Bảng cân đối tài sản và Dòng tiền"
      >
        <div id="financial-cashflow" aria-hidden="true" style={{ position: 'absolute', top: 0 }} />

        <div className="container">
          <div
            ref={balanceRef as React.RefObject<HTMLDivElement>}
            className={`fp-container animate-on-scroll ${balanceVisible ? 'is-visible' : ''}`}
          >
            {/* Section Heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  HOUSEHOLD BALANCE SHEET &amp; CASH FLOW
                </span>
              </h2>
              <p className="sw-heading__subtitle">
                Đánh giá toàn diện cơ cấu tài sản, nguồn vốn nợ và chẩn đoán cân đối các dòng tiền thu chi hàng tháng.
              </p>
            </div>

            <div className="fp-group">
              {/* CARD 3: WHITE BALANCE SHEET STRIP */}
              <div className="fp-balance-strip">
                {/* Total Assets */}
                <div className="fp-balance-col">
                  <div className="fp-balance-label font-mono">TOTAL ASSETS</div>
                  <div className="fp-balance-val font-mono">{formatFullVND(totalAssets)}</div>
                  <div className="fp-balance-sub">Tiền gửi 21.4% · BĐS 71.4% · Phải thu 7.1%</div>
                </div>

                {/* Liabilities */}
                <div className="fp-balance-col">
                  <div className="fp-balance-label font-mono">LIABILITIES</div>
                  <div className="fp-balance-val font-mono">{formatFullVND(totalLiabilities)}</div>
                  <div className="fp-balance-sub">Lãi suất 10% · 12 năm còn lại</div>
                </div>

                {/* Net Worth (Green Accent Border Underline) */}
                <div className="fp-balance-col fp-balance-col--networth">
                  <div className="fp-balance-label font-mono">NET WORTH</div>
                  <div className="fp-balance-val fp-balance-val--green font-mono">{formatFullVND(netWorth)}</div>
                  <div className="fp-balance-sub">Tài sản trừ tổng nợ phải trả</div>
                </div>

                {/* Net Cash Flow (Red Accent Border Underline) */}
                <div className="fp-balance-col fp-balance-col--cashflow">
                  <div className="fp-balance-label font-mono">NET CASH FLOW</div>
                  <div className="fp-balance-val fp-balance-val--red font-mono">{formatFullVND(cashFlow.monthlySurplus)}</div>
                  <div className="fp-balance-sub">Mỗi tháng · thâm hụt 99.6 tr/năm</div>
                </div>
              </div>

              {/* CARD 3B: BALANCE SHEET DETAIL DUAL PANEL (Option 1) */}
              <div className="fp-balance-detail">
                {/* Left Panel (60%): Breakdown Table */}
                <div className="fp-bd-table-panel">
                  <div className="fp-bd-header">
                    <span className="fp-bd-title font-mono">DANH MỤC TÀI SẢN &amp; CÔNG NỢ CHI TIẾT</span>
                    <span className="fp-bd-badge font-mono">FIDUCIARY AUDIT</span>
                  </div>

                  <div className="fp-bd-table">
                    {/* Group I: Assets */}
                    <div className="fp-bd-group">
                      <div className="fp-bd-group-header">
                        <span className="fp-bd-group-title">I. TỔNG TÀI SẢN</span>
                        <span className="fp-bd-group-val font-mono">{formatVND(totalAssets)}</span>
                      </div>

                      <div className="fp-bd-row">
                        <div className="fp-bd-cell-name">
                          <span className="fp-bd-dot" style={{ backgroundColor: '#10B981' }} />
                          <span className="fp-bd-item-name">{assets[0]?.name}</span>
                          <span className="fp-bd-cell-desc">({assets[0]?.detail})</span>
                        </div>
                        <div className="fp-bd-cell-val font-mono">
                          <span>{formatVND(assets[0]?.value)}</span>
                          <span className="fp-bd-cell-pct">21.4%</span>
                        </div>
                      </div>

                      <div className="fp-bd-row">
                        <div className="fp-bd-cell-name">
                          <span className="fp-bd-dot" style={{ backgroundColor: '#3B82F6' }} />
                          <span className="fp-bd-item-name">{assets[1]?.name}</span>
                          <span className="fp-bd-cell-desc">({assets[1]?.detail} — thu hồi tháng 60 cho OCP)</span>
                        </div>
                        <div className="fp-bd-cell-val font-mono">
                          <span>{formatVND(assets[1]?.value)}</span>
                          <span className="fp-bd-cell-pct">7.1%</span>
                        </div>
                      </div>

                      <div className="fp-bd-row">
                        <div className="fp-bd-cell-name">
                          <span className="fp-bd-dot" style={{ backgroundColor: '#062C1E' }} />
                          <span className="fp-bd-item-name">{assets[2]?.name}</span>
                          <span className="fp-bd-cell-desc">({assets[2]?.detail})</span>
                        </div>
                        <div className="fp-bd-cell-val font-mono">
                          <span>{formatVND(assets[2]?.value)}</span>
                          <span className="fp-bd-cell-pct">71.4%</span>
                        </div>
                      </div>
                    </div>

                    {/* Group II: Liabilities */}
                    <div className="fp-bd-group">
                      <div className="fp-bd-group-header">
                        <span className="fp-bd-group-title">II. TỔNG NỢ PHẢI TRẢ</span>
                        <span className="fp-bd-group-val font-mono" style={{ color: '#EF4444' }}>
                          {formatVND(totalLiabilities)}
                        </span>
                      </div>

                      <div className="fp-bd-row">
                        <div className="fp-bd-cell-name">
                          <span className="fp-bd-dot" style={{ backgroundColor: '#EF4444' }} />
                          <span className="fp-bd-item-name">{liabilities[0]?.name}</span>
                          <span className="fp-bd-cell-desc">({liabilities[0]?.detail} · Trả 8.300.000 đ/tháng)</span>
                        </div>
                        <div className="fp-bd-cell-val font-mono">
                          <span>{formatVND(liabilities[0]?.value)}</span>
                          <span className="fp-bd-cell-pct" style={{ color: '#EF4444' }}>Đòn bẩy 32.1%</span>
                        </div>
                      </div>
                    </div>

                    {/* Group III: Net Worth Summary */}
                    <div className="fp-bd-summary-row">
                      <span className="fp-bd-summary-label">III. TÀI SẢN RÒNG (NET WORTH):</span>
                      <span className="fp-bd-summary-val font-mono">{formatVND(netWorth)}</span>
                    </div>
                  </div>
                </div>

                {/* Right Panel (40%): Donut Chart & Legend */}
                <div className="fp-bd-chart-panel">
                  <div className="fp-bd-header">
                    <span className="fp-bd-title font-mono">CƠ CẤU PHÂN BỔ TÀI SẢN</span>
                  </div>

                  <div className="fp-bd-donut-wrap">
                    <div
                      className="fp-bd-donut"
                      style={{
                        background: `conic-gradient(
                          #10B981 0deg 77.04deg,
                          #3B82F6 77.04deg 102.6deg,
                          #062C1E 102.6deg 360deg
                        )`,
                      }}
                    >
                      <div className="fp-bd-donut-center">
                        <span className="fp-bd-donut-val font-mono">1,4 Tỷ</span>
                        <span className="fp-bd-donut-label font-mono">TỔNG TS</span>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="fp-bd-legend">
                    <div className="fp-bd-legend-item">
                      <div className="fp-bd-legend-left">
                        <span className="fp-bd-legend-dot" style={{ backgroundColor: '#10B981' }} />
                        <span className="fp-bd-legend-name">Tiền mặt &amp; tiền gửi</span>
                      </div>
                      <span className="fp-bd-legend-val font-mono">21.4% (300M)</span>
                    </div>

                    <div className="fp-bd-legend-item">
                      <div className="fp-bd-legend-left">
                        <span className="fp-bd-legend-dot" style={{ backgroundColor: '#3B82F6' }} />
                        <span className="fp-bd-legend-name">Khoản phải thu</span>
                      </div>
                      <span className="fp-bd-legend-val font-mono">7.1% (100M)</span>
                    </div>

                    <div className="fp-bd-legend-item">
                      <div className="fp-bd-legend-left">
                        <span className="fp-bd-legend-dot" style={{ backgroundColor: '#062C1E' }} />
                        <span className="fp-bd-legend-name">Đất nền Bảo Lộc</span>
                      </div>
                      <span className="fp-bd-legend-val font-mono">71.4% (1.000M)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 4: LIGHT SAGE CASH FLOW & EXPENSES */}
              <div className="fp-cashflow-card">
                {/* Left: Monthly Cash Flow */}
                <div className="fp-cf-left">
                  <div className="fp-cf-label font-mono">MONTHLY CASH FLOW</div>

                  <div className="fp-cf-stat">
                    <span className="fp-cf-num font-mono">
                      {(cashFlow.totalMonthlyIncome / 1_000_000).toFixed(1)}m
                    </span>
                    <span className="fp-cf-tag">income</span>
                  </div>

                  <div className="fp-cf-stat">
                    <span className="fp-cf-num font-mono">
                      {(cashFlow.totalMonthlyExpense / 1_000_000).toFixed(1)}m
                    </span>
                    <span className="fp-cf-tag">expenses</span>
                  </div>
                </div>

                {/* Right: 6 Clean Progress Bars */}
                <div className="fp-cf-right">
                  {orderedExpenses.map((exp) => (
                    <div key={exp.label} className="fp-bar-row">
                      <span className="fp-bar-label">{exp.label}</span>
                      <div className="fp-bar-track">
                        <div
                          className="fp-bar-fill"
                          style={{
                            width: balanceVisible ? `${(exp.pct / 30) * 100}%` : '0%',
                          }}
                        />
                      </div>
                      <span className="fp-bar-pct font-mono">{exp.pct.toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FinancialProfile;
