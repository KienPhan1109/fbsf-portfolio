import { useState } from 'react';
import { useInView } from '../../../shared/hooks/useAnimations';
import { ipsData } from '../data/ipsData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../IpsReport.css';

export function IpsReport() {
  const [ref, visible] = useInView();
  const [activeYearIndex, setActiveYearIndex] = useState<number>(5); // default 2036 (Year 10)

  // Projection Line Chart SVG Dimensions
  const chartW = 760;
  const chartH = 240;
  const padL = 54;
  const padR = 30;
  const padT = 24;
  const padB = 34;
  const plotW = chartW - padL - padR;
  const plotH = chartH - padT - padB;

  const maxVal = 4.2;
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
          {/* Main Section Header */}
          <div className="ips-main-header text-center">
            <h2 className="ips-main-title font-heading">
              <span className="ips-main-title__dark">INVESTMENT POLICY </span>
              <span className="ips-main-title__emerald">STATEMENT</span>
            </h2>
            <p className="ips-main-subtitle">
              The Nam–Nu Family · A disciplined 10-year strategy for balanced growth and financial security.
            </p>
          </div>

          {/* Master Institutional Card */}
          <div className="ips-doc-card">
            {/* ROW 1: 4 Clean, Pure KPI Metric Cards */}
            <div className="ips-kpi-grid">
              <div className="ips-kpi-card">
                <span className="ips-kpi-label">TOTAL NET WORTH</span>
                <div className="ips-kpi-val font-heading">{ipsData.netWorth}</div>
                <div className="ips-kpi-desc">{ipsData.netWorthDesc}</div>
              </div>

              <div className="ips-kpi-card ips-kpi-card--highlight">
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
                  <span className="ips-kpi-val__sub font-mono">A = {ipsData.riskAversion}</span>
                </div>
                <div className="ips-kpi-desc">{ipsData.riskProfileDesc}</div>
              </div>

              <div className="ips-kpi-card">
                <span className="ips-kpi-label">STRATEGY MANDATE</span>
                <div className="ips-kpi-val font-heading">{ipsData.strategy.title}</div>
                <div className="ips-kpi-desc">10-Yr Horizon · 15% Target Return</div>
              </div>
            </div>

            {/* ROW 2: DUAL VISUAL CHARTS (BAR & DONUT) */}
            <div className="ips-charts-grid">
              {/* CHART 1: BIỂU ĐỒ CỘT (CASH FLOW) */}
              <div className="ips-panel">
                <div className="ips-panel-header">
                  <div>
                    <h4 className="ips-panel-title font-heading">Cash Flow Transformation</h4>
                    <p className="ips-panel-subtitle">Monthly before vs. after optimization comparison</p>
                  </div>
                  <div className="ips-panel-metric font-mono">+₫12M/mo Swing</div>
                </div>

                <div className="ips-bars-list">
                  {ipsData.cashFlowComparison.map((item) => (
                    <div key={item.label} className="ips-bar-group">
                      <div className="ips-bar-meta">
                        <span className="ips-bar-label">{item.label}</span>
                        <div className="ips-bar-vals font-mono">
                          <span className={`ips-bar-val ${item.before < 0 ? 'text-danger' : 'text-muted'}`}>
                            {item.before > 0 ? `+₫${item.before}${item.unit}` : `−₫${Math.abs(item.before)}${item.unit}`}
                          </span>
                          <span className="ips-bar-vals__arrow">→</span>
                          <span className="ips-bar-val text-success">
                            {item.after > 0 ? `+₫${item.after}${item.unit}` : `−₫${Math.abs(item.after)}${item.unit}`}
                          </span>
                        </div>
                      </div>

                      <div className="ips-dual-bar-track">
                        <div className="ips-bar-subgroup">
                          <span className="ips-bar-sublabel font-mono">BEFORE</span>
                          <div className="ips-bar-shell">
                            <div
                              className={`ips-bar-fill ${item.before < 0 ? 'ips-bar-fill--negative' : 'ips-bar-fill--before'}`}
                              style={{ width: `${Math.min(Math.abs(item.before) * 1.8, 100)}%` }}
                            >
                              <span className="ips-bar-fill-text font-mono">
                                {Math.abs(item.before)}{item.unit}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="ips-bar-subgroup">
                          <span className="ips-bar-sublabel font-mono">AFTER</span>
                          <div className="ips-bar-shell">
                            <div
                              className="ips-bar-fill ips-bar-fill--positive"
                              style={{ width: `${Math.min(Math.abs(item.after) * 1.8, 100)}%` }}
                            >
                              <span className="ips-bar-fill-text font-mono">
                                {Math.abs(item.after)}{item.unit}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CHART 2: BIỂU ĐỒ TRÒN / DONUT (ASSET ALLOCATION) */}
              <div className="ips-panel">
                <div className="ips-panel-header">
                  <div>
                    <h4 className="ips-panel-title font-heading">Asset Allocation (OCP)</h4>
                    <p className="ips-panel-subtitle">Optimal Complete Portfolio recommended mix</p>
                  </div>
                </div>

                <div className="ips-donut-container">
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
                      <span className="ips-donut-center-label font-mono">RISKY RATIO</span>
                      <span className="ips-donut-center-val font-heading">{ipsData.allocation.riskyWeight}</span>
                      <span className="ips-donut-center-sub font-mono">Bonds 78.84%</span>
                    </div>
                  </div>

                  <div className="ips-donut-legend">
                    <div className="ips-donut-legend-row">
                      <div className="ips-legend-left">
                        <span className="ips-donut-dot" style={{ backgroundColor: '#07875A' }} />
                        <span className="ips-donut-name">Optimal Risky Portfolio (ORP)</span>
                      </div>
                      <span className="ips-donut-pct font-mono">{ipsData.allocation.riskyWeight}</span>
                    </div>

                    <div className="ips-donut-legend-row">
                      <div className="ips-legend-left">
                        <span className="ips-donut-dot" style={{ backgroundColor: '#34D399' }} />
                        <span className="ips-donut-name">Vietnam Government Bonds</span>
                      </div>
                      <span className="ips-donut-pct font-mono">{ipsData.allocation.riskFreeWeight}</span>
                    </div>

                    <div className="ips-ticker-summary font-mono">
                      Equities: VCB · SSI · MWG · GAS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3: BIỂU ĐỒ ĐƯỜNG (10-YEAR WEALTH TRAJECTORY) */}
            <div className="ips-panel ips-panel--line">
              <div className="ips-panel-header">
                <div>
                  <h4 className="ips-panel-title font-heading">10-Year Wealth Trajectory</h4>
                  <p className="ips-panel-subtitle">
                    Projected capital accumulation: FBSF Strategy ({activePoint.year}: <strong>₫{activePoint.optimized.toFixed(2)}B</strong> · {activePoint.milestone})
                  </p>
                </div>

                <div className="ips-line-legend">
                  <div className="ips-line-legend-item">
                    <span className="ips-line-swatch ips-line-swatch--opt" />
                    <span>FBSF Strategy (₫3.85B)</span>
                  </div>
                  <div className="ips-line-legend-item">
                    <span className="ips-line-swatch ips-line-swatch--base" />
                    <span>Baseline (₫1.42B)</span>
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

                  {/* Horizontal Grid lines */}
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
                          x={padL - 10}
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

                  {/* Interactive Milestone Nodes */}
                  {ipsData.wealthProjection.map((pt, i) => {
                    const cx = getX(i);
                    const cyOpt = getY(pt.optimized);
                    const cyBase = getY(pt.baseline);
                    const isActive = activeYearIndex === i;

                    return (
                      <g
                        key={pt.year}
                        className="ips-point-group"
                        onClick={() => setActiveYearIndex(i)}
                      >
                        <circle cx={cx} cy={cyBase} r={3} className="ips-base-dot" />
                        {isActive && (
                          <circle cx={cx} cy={cyOpt} r={9} className="ips-opt-dot-pulse" />
                        )}
                        <circle
                          cx={cx}
                          cy={cyOpt}
                          r={isActive ? 5.5 : 4}
                          className={`ips-opt-dot ${isActive ? 'is-active' : ''}`}
                        />
                        <text
                          x={cx}
                          y={chartH - 12}
                          className={`ips-axis-label font-mono ${isActive ? 'is-active' : ''}`}
                          textAnchor="middle"
                        >
                          {pt.year}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Clean Timeline Year Pills */}
              <div className="ips-year-pills">
                {ipsData.wealthProjection.map((pt, i) => (
                  <button
                    type="button"
                    key={pt.year}
                    className={`ips-year-pill ${activeYearIndex === i ? 'is-active' : ''}`}
                    onClick={() => setActiveYearIndex(i)}
                  >
                    <span className="ips-yp-year font-mono">{pt.year}</span>
                    <span className="ips-yp-val font-mono">₫{pt.optimized.toFixed(2)}B</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IpsReport;
