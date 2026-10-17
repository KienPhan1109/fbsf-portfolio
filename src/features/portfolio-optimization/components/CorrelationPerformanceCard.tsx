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

export function CorrelationPerformanceCard() {
  const [corrRef, corrVisible] = useInView();

  return (
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

          <div className="orp-eval-grid">
            {/* Left Column: Correlation Matrix */}
            <div className="orp-eval-col orp-eval-col--matrix">
              <div className="corr-concept-card">
                <h3 className="corr-concept-card__title">Correlation Matrix</h3>
                <div className="corr-concept-card__subtitle font-mono">
                  VCB · SSI · MWG · GAS
                </div>
                <p className="corr-concept-card__desc">
                  Shows how stock returns move in relation to one another, supporting portfolio diversification.
                </p>
              </div>

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
  );
}

export default CorrelationPerformanceCard;
