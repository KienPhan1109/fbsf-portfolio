import { useInView } from '../../../shared/hooks/useAnimations';
import {
  stockPerformanceData,
  selectedStocks,
} from '../data/equityData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../EquityScreening.css';

export function PerformanceEvaluationTable() {
  const [perfRef, perfVisible] = useInView();

  // Combine performance data with sector from selectedStocks
  const enhancedData = stockPerformanceData.map((item) => {
    const meta = selectedStocks.find((s) => s.ticker === item.ticker);
    return {
      ...item,
      sector: meta?.sector || '',
      role: meta?.role || '',
    };
  });

  return (
    <section
      className="section sec-perf-eval"
      id="performance-evaluation"
      aria-label="Performance Evaluation"
    >
      <div className="container container--wide">
        <div
          ref={perfRef as React.RefObject<HTMLDivElement>}
          className={`equity-wrapper equity-wrapper--wide animate-on-scroll ${
            perfVisible ? 'is-visible' : ''
          }`}
        >
          {/* Header matching current design language */}
          <div className="pe-header">
            <div className="pe-header__title-wrap">
              <h2 className="pe-title font-heading">
                <span className="pe-title__line1">PERFORMANCE </span>
                <span className="pe-title__line2">EVALUATION</span>
              </h2>
            </div>
            <div className="pe-header__desc-wrap">
              <p className="pe-desc">
                Historical monthly and annualized risk-return metrics for shortlisted VN30 stocks, evaluating return potential and price volatility.
              </p>
            </div>
          </div>

          {/* Master Institutional Card */}
          <div className="perf-card">
            <div className="perf-table-wrap">
              <table className="perf-table">
                <thead>
                  <tr>
                    <th className="perf-th-ticker">TICKER</th>
                    <th className="perf-th-num">MONTHLY AVG RETURN</th>
                    <th className="perf-th-num">MONTHLY STD DEV</th>
                    <th className="perf-th-num">ANNUALIZED RETURN</th>
                    <th className="perf-th-num">ANNUALIZED STD DEV</th>
                  </tr>
                </thead>
                <tbody>
                  {enhancedData.map((item) => (
                    <tr key={item.ticker} className="perf-row">
                      <td className="perf-td-ticker">
                        <div className="perf-stock-cell">
                          <span className="perf-ticker font-mono">{item.ticker}</span>
                          {item.sector && (
                            <span className="perf-sector">{item.sector}</span>
                          )}
                        </div>
                      </td>
                      <td className="perf-td-num">
                        <span className="perf-num font-mono">
                          +{item.monthlyReturn.toFixed(2)}%
                        </span>
                      </td>
                      <td className="perf-td-num">
                        <span className="perf-num perf-num--vol font-mono">
                          {item.monthlyStdDev.toFixed(2)}%
                        </span>
                      </td>
                      <td className="perf-td-num">
                        <span className="perf-num perf-num--highlight font-mono">
                          +{item.annualReturn.toFixed(2)}%
                        </span>
                      </td>
                      <td className="perf-td-num">
                        <span className="perf-num font-mono">
                          {item.annualStdDev.toFixed(2)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default PerformanceEvaluationTable;
