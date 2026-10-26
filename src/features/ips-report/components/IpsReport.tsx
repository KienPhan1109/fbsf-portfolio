import { useState } from 'react';
import { useInView } from '../../../shared/hooks/useAnimations';
import { ipsData } from '../data/ipsData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../IpsReport.css';

export function IpsReport() {
  const [ref, visible] = useInView();
  const [activeYearIndex, setActiveYearIndex] = useState<number>(5); // default 2036 (Year 10)

  // Projection Line Chart SVG Dimensions - Optimized for generous padding & zero clipping
  const chartW = 760;
  const chartH = 290;
  const padL = 76;
  const padR = 64;
  const padT = 64;
  const padB = 30;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;

  const maxVal = 4.4;
  const minVal = 0.5;

  const getX = (idx: number) => {
    return padL + (idx / (ipsData.wealthProjection.length - 1)) * plotW;
  };

  const getY = (val: number) => {
    const norm = (val - minVal) / (maxVal - minVal);
    return padT + plotH - norm * plotH;
  };

  // SVG lines
  const optPoints = ipsData.wealthProjection
    .map((pt, i) => `${getX(i)},${getY(pt.optimized)}`)
    .join(' ');
  const basePoints = ipsData.wealthProjection
    .map((pt, i) => `${getX(i)},${getY(pt.baseline)}`)
    .join(' ');
  const optAreaPoints = `${getX(0)},${padT + plotH} ${optPoints} ${getX(
    ipsData.wealthProjection.length - 1
  )},${padT + plotH}`;

  // Donut chart constants
  const donutR = 60;
  const donutCirc = 2 * Math.PI * donutR;
  const orpWeight = ipsData.allocationBreakdown[0].weight / 100;
  const orpDash = orpWeight * donutCirc;
  const bondDash = donutCirc - orpDash;

  const activePoint = ipsData.wealthProjection[activeYearIndex];

  return (
    <section
      className="section sec-ips-report"
      id="ips-report"
      aria-label="Investment Policy Statement (IPS) Report"
    >
      <div className="container container--wide">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`ips-wrapper animate-on-scroll ${
            visible ? 'is-visible' : ''
          }`}
        >
          {/* Executive 2-Column Section Header */}
          <div className="ips-header">
            <div className="ips-header__title-wrap">
              <h2 className="ips-title">
                <span className="ips-title__line1">INVESTMENT POLICY</span>
                <span className="ips-title__line2">STATEMENT</span>
              </h2>
            </div>
            <div className="ips-header__desc-wrap">
              <p className="ips-desc">
                The Nam–Nu Family · A disciplined 10-year strategy for balanced growth, cash flow turnaround, and long-term financial security.
              </p>
            </div>
          </div>

          {/* Master Institutional Dossier Stack */}
          <div className="ips-content-stack">
            {/* BOX 1: 4 Symmetrical Institutional KPI Metric Columns */}
            <div className="ips-card ips-card--kpi">
              <div className="ips-kpi-grid">
                <div className="ips-kpi-card">
                  <span className="ips-kpi-label">TOTAL NET WORTH</span>
                  <div className="ips-kpi-val font-heading">{ipsData.netWorth}</div>
                  <div className="ips-kpi-desc">{ipsData.netWorthDesc}</div>
                </div>

                <div className="ips-kpi-card">
                  <span className="ips-kpi-label">MONTHLY NET CASH FLOW</span>
                  <div className="ips-kpi-val ips-kpi-val--emerald font-heading">
                    {ipsData.cashFlow.mainHighlight}
                    <span className="ips-kpi-unit">/mo</span>
                  </div>
                  <div className="ips-kpi-desc">
                    Net turnaround: <strong>{ipsData.cashFlow.monthlyImprovement}</strong>
                  </div>
                </div>

                <div className="ips-kpi-card">
                  <span className="ips-kpi-label">RISK PROFILE</span>
                  <div className="ips-kpi-val font-heading">
                    {ipsData.riskProfile}
                  </div>
                  <div className="ips-kpi-desc">
                    Risk aversion: <strong>A = {ipsData.riskAversion}</strong>
                  </div>
                </div>

                <div className="ips-kpi-card">
                  <span className="ips-kpi-label">STRATEGY MANDATE</span>
                  <div className="ips-kpi-val ips-kpi-val--strategy font-heading">
                    {ipsData.strategy.title}
                  </div>
                  <div className="ips-kpi-desc">10-Yr Horizon · 15% Target Return</div>
                </div>
              </div>
            </div>

            {/* BOX 2: CASH FLOW TRANSFORMATION (BOX RIÊNG BIỆT TRÊN - RỘNG VÀ THOÁNG) */}
            <div className="ips-card ips-card--cf">
              <div className="ips-panel-header">
                <div>
                  <h4 className="ips-panel-title font-heading">Cash Flow Transformation</h4>
                  <p className="ips-panel-subtitle">Monthly before vs. after optimization comparison</p>
                </div>
                <div className="ips-cf-legend">
                  <span className="ips-cf-legend-item font-mono">
                    <span className="ips-cf-legend-dot ips-cf-legend-dot--before" />
                    Baseline
                  </span>
                  <span className="ips-cf-legend-item font-mono">
                    <span className="ips-cf-legend-dot ips-cf-legend-dot--after" />
                    Optimized
                  </span>
                </div>
              </div>

              <div className="ips-cf-list">
                {ipsData.cashFlowComparison.map((item) => {
                  const diff = item.after - item.before;
                  const isPositive = diff > 0;
                  const diffStr = isPositive
                    ? `+₫${diff.toFixed(1)}M`
                    : `−₫${Math.abs(diff).toFixed(1)}M`;

                  return (
                    <div key={item.label} className="ips-cf-item">
                      <div className="ips-cf-item-left">
                        <span className="ips-cf-item-title">{item.label}</span>
                      </div>

                      {/* Dual sleek comparison bars */}
                      <div className="ips-cf-item-center">
                        <div className="ips-cf-track-pair">
                          <div className="ips-cf-track">
                            <div
                              className={`ips-cf-bar ${item.before < 0 ? 'ips-cf-bar--negative' : 'ips-cf-bar--before'}`}
                              style={{ width: `${Math.min(Math.abs(item.before) * 1.6, 100)}%` }}
                            />
                          </div>
                          <div className="ips-cf-track">
                            <div
                              className="ips-cf-bar ips-cf-bar--after"
                              style={{ width: `${Math.min(Math.abs(item.after) * 1.6, 100)}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="ips-cf-item-right font-mono">
                        <span className={`ips-cf-val-before ${item.before < 0 ? 'text-danger' : ''}`}>
                          {item.before > 0 ? `₫${item.before}${item.unit}` : `−₫${Math.abs(item.before)}${item.unit}`}
                        </span>
                        <span className="ips-cf-arrow">→</span>
                        <span className="ips-cf-val-after text-success">
                          {item.after > 0 ? `₫${item.after}${item.unit}` : `−₫${Math.abs(item.after)}${item.unit}`}
                        </span>
                        <span className="ips-cf-diff font-mono text-success">
                          ({diffStr})
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="ips-panel-footer-note">
                <span>Net Turnaround: <strong>+₫12M/month</strong> redirected into wealth accumulation</span>
              </div>
            </div>

            {/* BOX 3: ASSET ALLOCATION (OCP) (BOX RIÊNG BIỆT DƯỚI - RỘNG VÀ THOÁNG) */}
            <div className="ips-card ips-card--alloc">
              <div className="ips-panel-header">
                <div>
                  <h4 className="ips-panel-title font-heading">Asset Allocation (OCP)</h4>
                  <p className="ips-panel-subtitle">Optimal Complete Portfolio recommended mix</p>
                </div>
                <div className="ips-alloc-mandate font-mono">
                  A = {ipsData.riskAversion}
                </div>
              </div>

              <div className="ips-alloc-body">
                <div className="ips-donut-visual-wrap">
                  <svg className="ips-donut-svg" viewBox="0 0 160 160">
                    <circle
                      className="ips-donut-bg-ring"
                      cx="80"
                      cy="80"
                      r={donutR}
                    />
                    {/* Bonds Slice */}
                    <circle
                      className="ips-donut-slice ips-donut-slice--bonds"
                      cx="80"
                      cy="80"
                      r={donutR}
                      strokeDasharray={`${bondDash} ${donutCirc}`}
                      strokeDashoffset={-orpDash}
                    />
                    {/* ORP Slice */}
                    <circle
                      className="ips-donut-slice ips-donut-slice--orp"
                      cx="80"
                      cy="80"
                      r={donutR}
                      strokeDasharray={`${orpDash} ${donutCirc}`}
                      strokeDashoffset="0"
                    />
                  </svg>

                  <div className="ips-donut-center">
                    <span className="ips-donut-center-val font-heading">{ipsData.allocation.riskyWeight}</span>
                    <span className="ips-donut-center-label font-mono">ORP SHARE</span>
                  </div>
                </div>

                <div className="ips-alloc-list">
                  <div className="ips-alloc-card-item">
                    <div className="ips-alloc-item-top">
                      <div className="ips-alloc-title-group">
                        <span className="ips-alloc-dot ips-alloc-dot--orp" />
                        <div>
                          <span className="ips-alloc-name">Optimal Risky Portfolio (ORP)</span>
                          <span className="ips-alloc-desc font-mono">Equities: VCB · SSI · MWG · GAS</span>
                        </div>
                      </div>
                      <span className="ips-alloc-pct font-mono">{ipsData.allocation.riskyWeight}</span>
                    </div>
                    <div className="ips-alloc-bar-track">
                      <div
                        className="ips-alloc-bar ips-alloc-bar--orp"
                        style={{ width: ipsData.allocation.riskyWeight }}
                      />
                    </div>
                  </div>

                  <div className="ips-alloc-card-item">
                    <div className="ips-alloc-item-top">
                      <div className="ips-alloc-title-group">
                        <span className="ips-alloc-dot ips-alloc-dot--bonds" />
                        <div>
                          <span className="ips-alloc-name">Vietnam Government Bonds</span>
                          <span className="ips-alloc-desc font-mono">10-Year Sovereign Risk-Free Anchor</span>
                        </div>
                      </div>
                      <span className="ips-alloc-pct font-mono">{ipsData.allocation.riskFreeWeight}</span>
                    </div>
                    <div className="ips-alloc-bar-track">
                      <div
                        className="ips-alloc-bar ips-alloc-bar--bonds"
                        style={{ width: ipsData.allocation.riskFreeWeight }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="ips-panel-footer-note">
                <span>Policy Mandate: Balanced risk-return optimized under Markowitz utility theory</span>
              </div>
            </div>

            {/* BOX 4: 10-YEAR WEALTH TRAJECTORY */}
            <div className="ips-card ips-card--trajectory">
              <div className="ips-panel-header">
                <div>
                  <h4 className="ips-panel-title font-heading">10-Year Wealth Trajectory</h4>
                  <p className="ips-panel-subtitle">
                    Projected capital accumulation · Milestone: <strong>{activePoint.milestone}</strong>
                  </p>
                </div>

                <div className="ips-line-legend">
                  <div className="ips-line-legend-item">
                    <span className="ips-line-swatch ips-line-swatch--opt" />
                    <span>FBSF Strategy</span>
                  </div>
                  <div className="ips-line-legend-item">
                    <span className="ips-line-swatch ips-line-swatch--base" />
                    <span>Baseline</span>
                  </div>
                </div>
              </div>

              {/* SVG Line Chart */}
              <div className="ips-linechart-wrap">
                <svg
                  className="ips-linechart-svg"
                  viewBox={`0 0 ${chartW} ${chartH}`}
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="optAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#07875A" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#07875A" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines with generous left clearance */}
                  {[1.0, 2.0, 3.0, 4.0].map((gridVal) => {
                    const y = getY(gridVal);
                    return (
                      <g key={gridVal}>
                        <line
                          x1={padL}
                          y1={y}
                          x2={chartW - padR}
                          y2={y}
                          className="ips-grid-line"
                        />
                        <text
                          x={padL - 14}
                          y={y + 4}
                          className="ips-grid-label font-mono"
                          textAnchor="end"
                        >
                          ₫{gridVal.toFixed(1)}B
                        </text>
                      </g>
                    );
                  })}

                  {/* Baseline Line */}
                  <polyline points={basePoints} className="ips-baseline-line" />

                  {/* Area fill */}
                  <polygon points={optAreaPoints} fill="url(#optAreaGrad)" />

                  {/* Optimized Growth Line */}
                  <polyline points={optPoints} className="ips-opt-line" />

                  {/* Interactive Milestone Nodes with Prominent Monetary Values Above */}
                  {ipsData.wealthProjection.map((pt, i) => {
                    const cx = getX(i);
                    const cyOpt = getY(pt.optimized);
                    const cyBase = getY(pt.baseline);
                    const isActive = activeYearIndex === i;

                    // Clamped horizontal center for active callout box so it never touches SVG borders
                    const calloutBoxW = 76;
                    const calloutBoxHalf = calloutBoxW / 2;
                    const calloutX = Math.max(
                      padL - 25,
                      Math.min(chartW - padR - 50, cx - calloutBoxHalf)
                    );

                    return (
                      <g
                        key={pt.year}
                        className="ips-point-group"
                        onClick={() => setActiveYearIndex(i)}
                      >
                        {/* Milestone vertical guideline directly connecting dot to timeline */}
                        <line
                          x1={cx}
                          y1={cyOpt}
                          x2={cx}
                          y2={padT + plotH}
                          className={`ips-milestone-guide ${
                            isActive ? 'is-active' : ''
                          }`}
                        />

                        {/* Baseline Node */}
                        <circle cx={cx} cy={cyBase} r={3} className="ips-base-dot" />

                        {/* Optimized Node */}
                        <circle
                          cx={cx}
                          cy={cyOpt}
                          r={isActive ? 6 : 4}
                          className={`ips-opt-dot ${isActive ? 'is-active' : ''}`}
                        />

                        {/* Prominent Monetary Value Above Node with Safe Clearance */}
                        {isActive ? (
                          <g className="ips-callout-group">
                            <rect
                              x={calloutX}
                              y={cyOpt - 36}
                              width={calloutBoxW}
                              height={24}
                              rx={12}
                              className="ips-callout-bg"
                            />
                            <polygon
                              points={`${cx - 5},${cyOpt - 12} ${cx + 5},${cyOpt - 12} ${cx},${cyOpt - 6}`}
                              className="ips-callout-arrow"
                            />
                            <text
                              x={calloutX + calloutBoxHalf}
                              y={cyOpt - 20}
                              className="ips-callout-text font-mono font-heading"
                              textAnchor="middle"
                            >
                              ₫{pt.optimized.toFixed(2)}B
                            </text>
                          </g>
                        ) : (
                          <text
                            x={
                              i === 0
                                ? cx + 6
                                : i === ipsData.wealthProjection.length - 1
                                ? cx - 6
                                : cx
                            }
                            y={cyOpt - 12}
                            className="ips-node-val font-mono"
                            textAnchor={
                              i === 0
                                ? 'start'
                                : i === ipsData.wealthProjection.length - 1
                                ? 'end'
                                : 'middle'
                            }
                          >
                            ₫{pt.optimized.toFixed(2)}B
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Clean Timeline Year Selector - EXACTLY CENTERED WITH SVG MILESTONE DOTS */}
              <div
                className="ips-year-timeline"
                role="tablist"
                aria-label="Investment timeline years"
              >
                {ipsData.wealthProjection.map((pt, i) => {
                  const leftPct = (getX(i) / chartW) * 100;
                  const isActive = activeYearIndex === i;

                  return (
                    <button
                      type="button"
                      key={pt.year}
                      className={`ips-year-pill ${isActive ? 'is-active' : ''}`}
                      style={{ left: `${leftPct}%` }}
                      onClick={() => setActiveYearIndex(i)}
                      aria-selected={isActive}
                      role="tab"
                    >
                      <span className="ips-yp-year font-mono">{pt.year}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IpsReport;
