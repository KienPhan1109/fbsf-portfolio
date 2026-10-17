import { useState } from 'react';
import { useInView } from '../../hooks/useAnimations';
import {
  orpSelectedStocks,
  orpStockAllocations,
  completePortfolioTable,
  correlationTickers,
  correlationMatrixData,
  orpPerformance,
  optimizationObjective,
  ocpData,
  type OrpStock,
  type CompletePortfolioItem,
} from '../../data/markowitzData';
import '../ui/ui.css';
import './SystemWorkflow.css';
import './MarkowitzOptimization.css';

/* ============================================================
   SVG DONUT CHART CALCULATIONS
   ============================================================ */
function getSectorPath(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  startAngle: number,
  endAngle: number
): string {
  const x1 = cx + rOuter * Math.cos(startAngle);
  const y1 = cy + rOuter * Math.sin(startAngle);
  const x2 = cx + rOuter * Math.cos(endAngle);
  const y2 = cy + rOuter * Math.sin(endAngle);
  const x3 = cx + rInner * Math.cos(endAngle);
  const y3 = cy + rInner * Math.sin(endAngle);
  const x4 = cx + rInner * Math.cos(startAngle);
  const y4 = cy + rInner * Math.sin(startAngle);

  const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

  return [
    `M ${x1} ${y1}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2} ${y2}`,
    `L ${x3} ${y3}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 0 ${x4} ${y4}`,
    'Z',
  ].join(' ');
}

/* ============================================================
   MARKOWITZ PORTFOLIO OPTIMIZATION
   Part A: Optimal Risky Portfolio (ORP)
   1. Optimal Risky Portfolio (Weights & Donut Chart)
   2. Correlation Matrix (4x4 without DHG)
   ============================================================ */
export default function MarkowitzOptimization() {
  const [orpRef, orpVisible] = useInView();
  const [corrRef, corrVisible] = useInView();
  const [ocpRef, ocpVisible] = useInView();
  const [hoveredTicker, setHoveredTicker] = useState<string | null>(null);

  // Calculate sector angles for the Donut Chart
  const totalWeight = orpStockAllocations.reduce(
    (sum, item) => sum + item.weightOrp,
    0
  );

  const gap = 0.04;
  const sectors = orpStockAllocations.map((item, index) => {
    const prevSpan = orpStockAllocations
      .slice(0, index)
      .reduce((sum, prev) => sum + (prev.weightOrp / totalWeight) * 2 * Math.PI, 0);

    const startAngle = -Math.PI / 2 + prevSpan + gap / 2;
    const angleSpan = (item.weightOrp / totalWeight) * 2 * Math.PI;
    const endAngle = startAngle + angleSpan - gap;

    return {
      ...item,
      path: getSectorPath(120, 120, 100, 68, startAngle, endAngle),
    };
  });

  const activeStock = orpStockAllocations.find(
    (s) => s.ticker === hoveredTicker
  );

  return (
    <>
      {/* ============================================================
          ORP SECTION 1: OPTIMAL RISKY PORTFOLIO
          ============================================================ */}
      <section
        className="section sec-markowitz"
        id="markowitz"
        aria-label="Optimal Risky Portfolio"
      >
        <div className="container">
          <div
            ref={orpRef as React.RefObject<HTMLDivElement>}
            className={`markowitz-wrapper animate-on-scroll ${orpVisible ? 'is-visible' : ''}`}
          >
            {/* Section Heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  OPTIMAL RISKY PORTFOLIO
                </span>
              </h2>
            </div>

            {/* Sample Card (Image 1 Style: Dark Navy Theme) */}
            <div className="orp-concept-card">
              <h3 className="orp-concept-card__title">
                Optimal Risky Portfolio
              </h3>
              <div className="orp-concept-card__label">Selected Stocks</div>

              <div className="orp-concept-card__badges">
                {orpSelectedStocks.map((ticker) => (
                  <span key={ticker} className="orp-concept-badge font-mono">
                    {ticker}
                  </span>
                ))}
              </div>

              <p className="orp-concept-card__desc">
                Optimized asset weights based on risk and expected return.
              </p>
            </div>

            {/* 2-Column Balanced Master Grid: Chart + Real Data Table */}
            <div className="orp-grid">
              {/* Left Column: Interactive Donut Chart */}
              <div className="orp-panel orp-panel--chart">
                <div className="orp-panel__header">
                  <h4 className="orp-panel__title">Cơ Cấu Tỷ Trọng ORP</h4>
                </div>

                <div className="orp-chart-box">
                  <div className="orp-svg-wrap">
                    <svg
                      viewBox="0 0 240 240"
                      className="orp-svg"
                      role="img"
                      aria-label="ORP Stock Allocation Donut Chart"
                    >
                      {sectors.map((sector) => {
                        const isHovered = hoveredTicker === sector.ticker;
                        return (
                          <path
                            key={sector.ticker}
                            d={sector.path}
                            fill={sector.color}
                            className={`orp-sector-slice ${isHovered ? 'is-hovered' : ''}`}
                            onMouseEnter={() => setHoveredTicker(sector.ticker)}
                            onMouseLeave={() => setHoveredTicker(null)}
                          />
                        );
                      })}
                    </svg>

                    {/* Centered Stat Badge inside Donut */}
                    <div className="orp-donut-center">
                      {activeStock ? (
                        <>
                          <span
                            className="orp-center-val font-mono"
                            style={{ color: activeStock.color }}
                          >
                            {activeStock.weightOrp}%
                          </span>
                          <span className="orp-center-sub font-mono">
                            {activeStock.ticker}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="orp-center-val font-mono">100%</span>
                          <span className="orp-center-sub font-mono">ORP</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Legend Chips */}
                  <div className="orp-legend">
                    {orpStockAllocations.map((item: OrpStock) => {
                      const isHovered = hoveredTicker === item.ticker;
                      return (
                        <button
                          type="button"
                          key={item.ticker}
                          className={`orp-legend-item ${isHovered ? 'is-active' : ''}`}
                          onMouseEnter={() => setHoveredTicker(item.ticker)}
                          onMouseLeave={() => setHoveredTicker(null)}
                        >
                          <span
                            className="orp-legend-dot"
                            style={{ backgroundColor: item.color }}
                          />
                          <strong className="orp-legend-ticker font-mono">
                            {item.ticker}
                          </strong>
                          <span className="orp-legend-pct font-mono">
                            {item.weightOrp}%
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Real Data Table (Image 2 Style) */}
              <div className="orp-panel orp-panel--table">
                <div className="orp-panel__header">
                  <h4 className="orp-panel__title">Phân Bổ Tài Sản Tối Ưu</h4>
                </div>

                <div className="orp-table-wrap">
                  <table className="orp-table">
                    <thead>
                      <tr>
                        <th style={{ width: '40%' }}>Mã</th>
                        <th style={{ width: '30%', textAlign: 'center' }}>
                          w trong ORP
                        </th>
                        <th style={{ width: '30%', textAlign: 'right' }}>
                          Trên TỔNG tài sản
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {completePortfolioTable.map(
                        (row: CompletePortfolioItem, idx: number) => {
                          return (
                            <tr
                              key={idx}
                              className={`orp-tr ${row.isTotal ? 'orp-tr--total' : ''} ${row.isRiskFree ? 'orp-tr--rf' : ''}`}
                            >
                              <td className="orp-td-name">
                                <strong
                                  className={
                                    !row.isRiskFree && !row.isTotal
                                      ? 'font-mono'
                                      : ''
                                  }
                                >
                                  {row.name}
                                </strong>
                              </td>
                              <td
                                className="orp-td-orp font-mono"
                                style={{ textAlign: 'center' }}
                              >
                                {row.weightOrp}
                              </td>
                              <td
                                className={`orp-td-total font-mono ${row.isTotal ? 'orp-td-total--highlight' : ''}`}
                                style={{ textAlign: 'right' }}
                              >
                                {row.weightTotal}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ORP SECTION 2: CORRELATION MATRIX, PERFORMANCE & OBJECTIVE (COMBINED)
          ============================================================ */}
      <section
        className="section section--alt sec-markowitz"
        id="correlation-matrix"
        aria-label="Correlation Matrix, Portfolio Performance and Optimization Objective"
      >
        <div className="container">
          <div
            ref={corrRef as React.RefObject<HTMLDivElement>}
            className={`markowitz-wrapper animate-on-scroll ${corrVisible ? 'is-visible' : ''}`}
          >
            {/* Section Heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  CORRELATION & PERFORMANCE
                </span>
              </h2>
              <p className="sw-heading__subtitle">
                Correlation Matrix, Portfolio Performance & Optimization Objective
              </p>
            </div>

            {/* 2-Column Unified Layout */}
            <div className="orp-eval-grid">
              {/* Left Column: Correlation Matrix */}
              <div className="orp-eval-col orp-eval-col--matrix">
                {/* Concept Card */}
                <div className="corr-concept-card">
                  <h3 className="corr-concept-card__title">Correlation Matrix</h3>
                  <div className="corr-concept-card__subtitle font-mono">
                    VCB · SSI · MWG · GAS
                  </div>
                  <p className="corr-concept-card__desc">
                    Shows how stock returns move in relation to one another,
                    supporting portfolio diversification.
                  </p>
                </div>

                {/* 4x4 Correlation Matrix Table Card */}
                <div className="equity-card corr-card">
                  <div className="corr-table-wrap">
                    <table className="corr-table">
                      <thead>
                        <tr>
                          <th className="corr-th-corner"></th>
                          {correlationTickers.map((t) => (
                            <th key={t} className="corr-th font-mono">
                              {t}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {correlationMatrixData.map((row) => (
                          <tr key={row.ticker}>
                            <td className="corr-td-header font-mono">
                              {row.ticker}
                            </td>
                            {correlationTickers.map((colTicker) => {
                              const val =
                                row.correlations[
                                  colTicker as keyof typeof row.correlations
                                ];
                              const isDiagonal = row.ticker === colTicker;
                              return (
                                <td
                                  key={colTicker}
                                  className={`corr-td-val font-mono ${isDiagonal ? 'corr-td-val--diag' : ''}`}
                                >
                                  {val}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Column: Performance + Optimization Objective */}
              <div className="orp-eval-col orp-eval-col--metrics">
                {/* Performance Stat Card */}
                <div className="equity-card perf-stat-card" id="portfolio-performance">
                  <h3 className="perf-stat-card__title">Portfolio Performance</h3>

                  <div className="perf-stat-item">
                    <span className="perf-stat-label">Expected Return</span>
                    <span className="perf-stat-val font-mono">
                      {orpPerformance.expectedReturn}
                    </span>
                  </div>

                  <div className="perf-stat-divider" />

                  <div className="perf-stat-item">
                    <span className="perf-stat-label">Portfolio Risk</span>
                    <span className="perf-stat-val font-mono">
                      {orpPerformance.portfolioRisk}
                    </span>
                  </div>

                  <div className="perf-stat-divider" />

                  <div className="perf-stat-item">
                    <span className="perf-stat-label">Sharpe Ratio</span>
                    <span className="perf-stat-val font-mono perf-stat-val--sharpe">
                      {orpPerformance.sharpeRatio}
                    </span>
                  </div>
                </div>

                {/* Optimization Objective Card */}
                <div className="opt-obj-card" id="optimization-objective">
                  <h3 className="opt-obj-card__title">
                    {optimizationObjective.title}
                  </h3>
                  <p className="opt-obj-card__desc">
                    {optimizationObjective.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PART B: OPTIMAL COMPLETE PORTFOLIO (OCP) - UNIFIED SECTION
          ============================================================ */}
      <section
        className="section sec-markowitz sec-markowitz--ocp"
        id="ocp-section"
        aria-label="Optimal Complete Portfolio (OCP)"
      >
        <div className="container">
          <div
            ref={ocpRef as React.RefObject<HTMLDivElement>}
            className={`markowitz-wrapper animate-on-scroll ${ocpVisible ? 'is-visible' : ''}`}
          >
            {/* Section Heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  OPTIMAL COMPLETE PORTFOLIO (OCP)
                </span>
              </h2>
              <p className="sw-heading__subtitle">
                Asset Allocation, Performance Metrics, Risk Appetite & Investment Objectives
              </p>
            </div>

            {/* 2x2 Unified Grid */}
            <div className="ocp-grid">
              {/* Card 1: Optimal Asset Allocation */}
              <div className="ocp-card ocp-card--dark" id="ocp-asset-allocation">
                <div className="ocp-card__icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                </div>
                <h3 className="ocp-card__title">Optimal Asset Allocation</h3>

                <div className="ocp-metric-block">
                  <div className="ocp-metric-val font-mono">
                    {ocpData.allocation.riskyWeight}
                  </div>
                  <div className="ocp-metric-label">
                    {ocpData.allocation.riskyLabel}
                  </div>
                </div>

                <div className="ocp-card__divider" />

                <div className="ocp-metric-block">
                  <div className="ocp-metric-val font-mono">
                    {ocpData.allocation.riskFreeWeight}
                  </div>
                  <div className="ocp-metric-label">
                    {ocpData.allocation.riskFreeLabel}
                  </div>
                </div>
              </div>

              {/* Card 2: Portfolio Performance */}
              <div className="ocp-card ocp-card--light" id="ocp-performance">
                <div className="ocp-card__icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h3 className="ocp-card__title">Portfolio Performance</h3>

                <div className="ocp-metric-block">
                  <div className="ocp-metric-sublabel">Expected Return</div>
                  <div className="ocp-metric-val ocp-metric-val--blue font-mono">
                    {ocpData.performance.expectedReturn}
                  </div>
                  <div className="ocp-metric-subdesc">
                    {ocpData.performance.expectedReturnUnit}
                  </div>
                </div>

                <div className="ocp-metric-block" style={{ marginTop: '24px' }}>
                  <div className="ocp-metric-sublabel">Portfolio Risk</div>
                  <div className="ocp-metric-val ocp-metric-val--dark font-mono">
                    {ocpData.performance.portfolioRisk}
                  </div>
                  <div className="ocp-metric-subdesc">
                    {ocpData.performance.portfolioRiskUnit}
                  </div>
                </div>
              </div>

              {/* Card 3: Risk Profile */}
              <div className="ocp-card ocp-card--light" id="ocp-risk-profile">
                <div className="ocp-card__icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="ocp-card__title">Risk Profile</h3>

                <div className="ocp-profile-block">
                  <div className="ocp-profile-type">
                    {ocpData.riskProfile.type}
                  </div>
                  <div className="ocp-profile-aversion font-mono">
                    {ocpData.riskProfile.riskAversion}
                  </div>
                </div>

                <p className="ocp-profile-desc">
                  {ocpData.riskProfile.description}
                </p>
              </div>

              {/* Card 4: Investment Objective */}
              <div className="ocp-card ocp-card--dark" id="ocp-investment-objective">
                <div className="ocp-card__icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="ocp-card__title">Investment Objective</h3>
                <p className="ocp-card__desc">
                  {ocpData.investmentObjective.description}
                </p>

                <div className="ocp-card__divider" />

                <h4 className="ocp-card__subtitle">
                  {ocpData.investmentObjective.subTitle}
                </h4>
                <p className="ocp-card__desc">
                  {ocpData.investmentObjective.subDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
