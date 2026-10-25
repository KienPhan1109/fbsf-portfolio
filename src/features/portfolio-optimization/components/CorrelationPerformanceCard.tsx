import { useInView } from '../../../shared/hooks/useAnimations';
import {
  correlationTickers,
  correlationMatrixData,
  orpPerformance,
  optimizationObjective,
} from '../data/markowitzData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../MarkowitzOptimization.css';

function getCellHeatmapBg(valStr: string, isDiagonal: boolean): string {
  if (isDiagonal) return '#D9EBE1';
  const val = parseFloat(valStr);
  if (val >= 0.5) return '#E3F1E8';
  if (val >= 0.4) return '#E6F2EA';
  if (val >= 0.25) return '#EBF4ED';
  return '#EFF6F1';
}

export function CorrelationPerformanceCard() {
  const [corrRef, corrVisible] = useInView();

  // Split performance strings into value and unit for clean institutional styling
  const [retVal, retUnit] = orpPerformance.expectedReturn.split(' / ');
  const [riskVal, riskUnit] = orpPerformance.portfolioRisk.split(' / ');

  return (
    <section
      className="section sec-corr-perf"
      id="correlation-matrix"
      aria-label="Correlation Matrix, Portfolio Performance and Optimization Objective"
    >
      <div className="container container--wide">
        <div
          ref={corrRef as React.RefObject<HTMLDivElement>}
          className={`markowitz-wrapper animate-on-scroll ${
            corrVisible ? 'is-visible' : ''
          }`}
        >
          {/* Centered Section Header matching reference mockup */}
          <div className="corr-perf-header text-center">
            <h2 className="corr-perf-title">
              <span className="corr-perf-title__part1">CORRELATION &amp; </span>
              <span className="corr-perf-title__part2">PERFORMANCE</span>
            </h2>
            <p className="corr-perf-subtitle">
              Correlation Matrix, Portfolio Performance &amp; Optimization Objective
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="corr-perf-grid">
            {/* Left Column: Unified Correlation Matrix Card */}
            <div className="corr-matrix-card">
              <div className="corr-matrix-card__header">
                <div className="corr-matrix-card__title-wrap">
                  <h3 className="corr-matrix-card__title">Correlation Matrix</h3>
                  <div className="corr-matrix-card__tickers font-mono">
                    VCB · SSI · MWG · GAS
                  </div>
                  <p className="corr-matrix-card__desc">
                    Shows how stock returns move in relation to one another, supporting
                    portfolio diversification.
                  </p>
                </div>
              </div>

              <div className="corr-matrix-table-wrap">
                <table className="corr-matrix-table">
                  <thead>
                    <tr>
                      <th className="corr-matrix-th-corner" aria-label="Corner" />
                      {correlationTickers.map((t) => (
                        <th key={t} className="corr-matrix-th font-mono">
                          {t}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {correlationMatrixData.map((row) => (
                      <tr key={row.ticker}>
                        <td className="corr-matrix-td-header font-mono">
                          {row.ticker}
                        </td>
                        {correlationTickers.map((colTicker) => {
                          const val =
                            row.correlations[
                              colTicker as keyof typeof row.correlations
                            ];
                          const isDiagonal = row.ticker === colTicker;
                          const bg = getCellHeatmapBg(val, isDiagonal);

                          return (
                            <td
                              key={colTicker}
                              className={`corr-matrix-td-val font-mono ${
                                isDiagonal ? 'is-diag' : ''
                              }`}
                              style={{ backgroundColor: bg }}
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

            {/* Right Column: Stacked Performance & Optimization Objective */}
            <div className="corr-perf-right-col">
              {/* Card 1: Portfolio Performance */}
              <div
                className="perf-metrics-card"
                id="portfolio-performance"
              >
                <div className="perf-card-tag font-mono">
                  PORTFOLIO PERFORMANCE
                </div>

                <div className="perf-metric-item">
                  <span className="perf-metric-label">Expected Return</span>
                  <div className="perf-metric-val-row">
                    <span className="perf-metric-num font-heading">{retVal}</span>
                    {retUnit && (
                      <span className="perf-metric-unit font-mono">
                        / {retUnit}
                      </span>
                    )}
                  </div>
                </div>

                <hr className="perf-metric-divider" />

                <div className="perf-metric-item">
                  <span className="perf-metric-label">Portfolio Risk</span>
                  <div className="perf-metric-val-row">
                    <span className="perf-metric-num font-heading">{riskVal}</span>
                    {riskUnit && (
                      <span className="perf-metric-unit font-mono">
                        / {riskUnit}
                      </span>
                    )}
                  </div>
                </div>

                <hr className="perf-metric-divider" />

                <div className="perf-metric-item">
                  <span className="perf-metric-label">Sharpe Ratio</span>
                  <div className="perf-metric-val-row">
                    <span className="perf-metric-num perf-metric-num--sharpe font-heading">
                      {orpPerformance.sharpeRatio}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Optimization Objective */}
              <div
                className="perf-obj-card"
                id="optimization-objective"
              >
                <div className="perf-obj-tag font-mono">
                  OPTIMIZATION OBJECTIVE
                </div>
                <p className="perf-obj-desc">
                  {optimizationObjective.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CorrelationPerformanceCard;
