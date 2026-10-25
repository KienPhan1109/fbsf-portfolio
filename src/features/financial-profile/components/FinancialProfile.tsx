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
    { label: 'Rent', pct: 27.3 },
    { label: 'Education', pct: 27.3 },
    { label: 'Essential Living', pct: 20.5 },
    { label: 'Debt Repayment', pct: 11.3 },
    { label: 'Entertainment & Social', pct: 10.9 },
    { label: 'Gifts & External Relations', pct: 2.7 },
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
        aria-label="Household Financial Profile & Strategic Goals"
      >
        <div id="financial-goals" aria-hidden="true" style={{ position: 'absolute', top: 0 }} />

        <div className="container container--wide">
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
                Collect and analyze household financial data, income structure, and living conditions for Mr. Nam and Mrs. Nu.
              </p>
            </div>

            <div className="fp-group">
              {/* CARD 1: DARK DEMOGRAPHICS CARD */}
              <div className="fp-dark-card">
                <div className="fp-dark-grid">
                  {familyMembers.map((member) => {
                    let badge = 'MN';
                    if (member.name === 'Mr. Nam' || member.name === 'Anh Nam') badge = 'MN';
                    else if (member.name === 'Mrs. Nu' || member.name === 'Chị Nữ') badge = 'NU';
                    else if (member.id === 'member-child1') badge = 'C1';
                    else if (member.id === 'member-child2') badge = 'C2';

                    let subtitle = '';
                    if (member.name === 'Mr. Nam' || member.name === 'Anh Nam') subtitle = '41 years old · Accounting Manager';
                    else if (member.name === 'Mrs. Nu' || member.name === 'Chị Nữ') subtitle = '36 years old · Accountant';
                    else if (member.id === 'member-child1') subtitle = 'Middle School Student · Tue Duc School';
                    else if (member.id === 'member-child2') subtitle = 'Kindergarten · Vuon Hong';

                    return (
                      <div key={member.id} className="fp-dark-col">
                        <div className="fp-dark-badge font-mono">{badge}</div>
                        <div className="fp-dark-name">{member.name}</div>
                        <div className="fp-dark-sub">{subtitle}</div>
                        {member.monthlyIncome ? (
                          <div className="fp-dark-income font-mono">
                            {formatVND(member.monthlyIncome)} / month
                          </div>
                        ) : (
                          <div className="fp-dark-status">Dependent — No Income</div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Family Context Strip */}
                <div className="fp-dark-context">
                  <span className="fp-dark-context-label font-mono">FAMILY CONTEXT</span>
                  <span className="fp-dark-context-text">
                    Renting in District 2 (VND 20M/month) · {additionalInfo.insurance} · Extended Family Support: Both parents financially self-sufficient
                  </span>
                </div>
              </div>

              {/* CARD 2: WHITE STRATEGIC GOALS CARD */}
              <div className="fp-goals-card">
                {financialGoals.map((goal) => {
                  const tag = goal.type === 'mid-term' ? 'MEDIUM-TERM • 3 YEARS' : 'LONG-TERM • 10 YEARS';

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
                          {goal.progress}% Current Savings Progress
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
          SECTION 2: HOUSEHOLD BALANCE SHEET & CASH FLOW
          Pixel-perfect matching user's reference mockup:
          Row 1: 4 KPI Cards (Total Assets, Liabilities, Net Worth Hero, Net Cash Flow)
          Row 2: Asset Allocation Donut & 3-Asset List ("I. Total assets")
          Row 3: Assets & Liabilities Breakdown (II. Liabilities & III. Net Worth)
          Row 4: Monthly Cash Flow & Expense Progress Bars ("Income & expenses")
          ============================================================ */}
      <section
        className="section section--alt fp-section"
        id="financial-balance"
        aria-label="Household Balance Sheet & Cash Flow"
      >
        <div id="financial-cashflow" aria-hidden="true" style={{ position: 'absolute', top: 0 }} />

        <div className="container container--wide">
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
                Assess the household’s asset and liability structure to determine its actual net worth.
              </p>
            </div>

            <div className="fp-group">
              {/* ============================================================
                  ROW 1: 4 TOP KPI CARDS
                  ============================================================ */}
              <div className="fp-kpi-grid">
                {/* 1. Total Assets */}
                <div className="fp-kpi-card">
                  <div className="fp-kpi-label font-mono">TOTAL ASSETS</div>
                  <div className="fp-kpi-value">
                    <span className="fp-kpi-num font-mono">
                      VND {(totalAssets / 1_000_000_000).toFixed(1)}
                    </span>
                    <span className="fp-kpi-unit">billion</span>
                  </div>
                  <div className="fp-kpi-sub">Cash 21.4% · Land Plot 71.4% · Receivables 7.1%</div>
                </div>

                {/* 2. Liabilities */}
                <div className="fp-kpi-card">
                  <div className="fp-kpi-label font-mono">LIABILITIES</div>
                  <div className="fp-kpi-value">
                    <span className="fp-kpi-num font-mono">
                      VND {(totalLiabilities / 1_000_000).toFixed(0)}
                    </span>
                    <span className="fp-kpi-unit">million</span>
                  </div>
                  <div className="fp-kpi-sub">Interest rate 10% · 12 years remaining</div>
                </div>

                {/* 3. Net Worth (Hero Dark Forest Green Card) */}
                <div className="fp-kpi-card fp-kpi-card--hero">
                  <div className="fp-kpi-label font-mono">NET WORTH</div>
                  <div className="fp-kpi-value">
                    <span className="fp-kpi-num font-mono">
                      VND {(netWorth / 1_000_000).toFixed(0)}
                    </span>
                    <span className="fp-kpi-unit">million</span>
                  </div>
                  <div className="fp-kpi-sub">Total assets less bank liabilities</div>
                </div>

                {/* 4. Net Cash Flow */}
                <div className="fp-kpi-card">
                  <div className="fp-kpi-label font-mono">NET CASH FLOW</div>
                  <div className="fp-kpi-value">
                    <span className="fp-kpi-num fp-kpi-num--red font-mono">
                      -VND {Math.abs(cashFlow.monthlySurplus / 1_000_000).toFixed(1)}
                    </span>
                    <span className="fp-kpi-unit">million</span>
                  </div>
                  <div className="fp-kpi-sub">Monthly deficit · ~VND 99.6M / year</div>
                </div>
              </div>

              {/* ============================================================
                  ROW 2: ASSET ALLOCATION — "Total assets"
                  ============================================================ */}
              <div className="fp-asset-card">
                <div className="fp-card-header">
                  <span className="fp-card-tag font-mono">ASSET ALLOCATION</span>
                  <h3 className="fp-card-title">Total assets</h3>
                </div>

                <div className="fp-asset-layout">
                  {/* Left: Donut Chart with Center Hole Label */}
                  <div className="fp-donut-wrapper">
                    <div className="fp-donut-chart">
                      <div className="fp-donut-center">
                        <span className="fp-donut-center__num font-mono">
                          {(totalAssets / 1_000_000_000).toFixed(1)}B
                        </span>
                        <span className="fp-donut-center__label font-mono">TOTAL ASSETS</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: 3 Clean Asset Items */}
                  <div className="fp-asset-list">
                    <div className="fp-asset-item">
                      <div className="fp-asset-item__left">
                        <span className="fp-asset-dot" style={{ backgroundColor: '#047857' }} />
                        <div>
                          <div className="fp-asset-name">{assets[2]?.name || 'Bảo Lộc Land Plot'}</div>
                          <div className="fp-asset-val font-mono">{formatVND(assets[2]?.value || 1_000_000_000)}</div>
                        </div>
                      </div>
                      <div className="fp-asset-pct font-mono">71.4%</div>
                    </div>

                    <div className="fp-asset-item">
                      <div className="fp-asset-item__left">
                        <span className="fp-asset-dot" style={{ backgroundColor: '#10B981' }} />
                        <div>
                          <div className="fp-asset-name">{assets[0]?.name || 'Cash and Bank Deposits'}</div>
                          <div className="fp-asset-val font-mono">{formatVND(assets[0]?.value || 300_000_000)}</div>
                        </div>
                      </div>
                      <div className="fp-asset-pct font-mono">21.4%</div>
                    </div>

                    <div className="fp-asset-item">
                      <div className="fp-asset-item__left">
                        <span className="fp-asset-dot" style={{ backgroundColor: '#6EE7B7' }} />
                        <div>
                          <div className="fp-asset-name">{assets[1]?.name || 'Accounts Receivable'}</div>
                          <div className="fp-asset-val font-mono">{formatVND(assets[1]?.value || 100_000_000)}</div>
                        </div>
                      </div>
                      <div className="fp-asset-pct font-mono">7.1%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================================
                  ROW 3: ASSETS & LIABILITIES BREAKDOWN
                  ============================================================ */}
              <div className="fp-breakdown-card">
                <div className="fp-breakdown-grid">
                  {/* Left Column: Total Liabilities */}
                  <div className="fp-breakdown-panel">
                    <div className="fp-bp-header">
                      <span className="fp-bp-tag font-mono">TOTAL LIABILITIES</span>
                    </div>
                    <div className="fp-bp-val font-mono">
                      VND {(totalLiabilities / 1_000_000).toFixed(0)} million
                    </div>
                    <div className="fp-bp-bar-track">
                      <div
                        className="fp-bp-bar-fill"
                        style={{ width: balanceVisible ? '32.1%' : '0%' }}
                      >
                        <span className="fp-bp-bar-text font-mono">32.1%</span>
                      </div>
                    </div>
                    <div className="fp-bp-detail">
                      <div className="fp-bp-detail__left">
                        <span className="fp-bp-dot" style={{ backgroundColor: '#EF4444' }} />
                        <strong className="fp-bp-detail__name">{liabilities[0]?.name || 'Bank Loan'}</strong>
                        <span className="fp-bp-detail__desc">
                          Outstanding loan for the Bảo Lộc land purchase, at an annual interest rate of 12%...
                        </span>
                      </div>
                      <div className="fp-bp-detail__right font-mono">
                        VND {(totalLiabilities / 1_000_000).toFixed(0)} million · Leverage 32.1%
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Net Worth */}
                  <div className="fp-breakdown-panel fp-breakdown-panel--networth">
                    <div className="fp-bp-header">
                      <span className="fp-bp-tag font-mono">NET WORTH</span>
                    </div>
                    <div className="fp-bp-networth">
                      <span className="fp-bp-nw-prefix font-mono">VND</span>
                      <span className="fp-bp-nw-num font-mono">
                        {(netWorth / 1_000_000).toFixed(0)}
                      </span>
                      <span className="fp-bp-nw-suffix font-mono">million</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================================
                  ROW 4: MONTHLY CASH FLOW — "Income & expenses"
                  ============================================================ */}
              <div className="fp-cashflow-card-v2">
                <div className="fp-card-header">
                  <span className="fp-card-tag font-mono">MONTHLY CASH FLOW</span>
                  <h3 className="fp-card-title">Income &amp; expenses</h3>
                </div>

                {/* Top Panel: Metrics & 2 Vertical Comparison Bars */}
                <div className="fp-cf-summary-panel">
                  <div className="fp-cf-metrics">
                    <div className="fp-cf-metric-item">
                      <div className="fp-cf-metric-label">Income</div>
                      <div className="fp-cf-metric-val font-mono">
                        {(cashFlow.totalMonthlyIncome / 1_000_000).toFixed(1)}m
                      </div>
                    </div>
                    <div className="fp-cf-metric-item">
                      <div className="fp-cf-metric-label">Expenses</div>
                      <div className="fp-cf-metric-val font-mono">
                        {(cashFlow.totalMonthlyExpense / 1_000_000).toFixed(1)}m
                      </div>
                    </div>
                  </div>

                  {/* Vertical Comparison Bar Chart */}
                  <div className="fp-cf-chart-wrap">
                    <div className="fp-cf-bar-col">
                      <div className="fp-cf-bar fp-cf-bar--income">
                        <span className="fp-cf-bar-val font-mono">
                          {(cashFlow.totalMonthlyIncome / 1_000_000).toFixed(1)}m
                        </span>
                      </div>
                      <span className="fp-cf-bar-label">Income</span>
                    </div>

                    <div className="fp-cf-bar-col">
                      <div className="fp-cf-bar fp-cf-bar--expense">
                        <span className="fp-cf-bar-val font-mono">
                          {(cashFlow.totalMonthlyExpense / 1_000_000).toFixed(1)}m
                        </span>
                      </div>
                      <span className="fp-cf-bar-label">Expenses</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Panel: 6 Clean Horizontal Progress Bars */}
                <div className="fp-cf-expense-list">
                  {orderedExpenses.map((exp) => (
                    <div key={exp.label} className="fp-expense-row">
                      <span className="fp-expense-label">{exp.label}</span>
                      <div className="fp-expense-track">
                        <div
                          className="fp-expense-fill"
                          style={{
                            width: balanceVisible ? `${(exp.pct / 30) * 100}%` : '0%',
                          }}
                        />
                      </div>
                      <span className="fp-expense-pct font-mono">{exp.pct.toFixed(1)}%</span>
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
