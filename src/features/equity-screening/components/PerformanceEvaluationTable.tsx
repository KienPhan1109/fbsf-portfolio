import { useInView } from '../../../shared/hooks/useAnimations';
import { stockPerformanceData, type StockPerformance } from '../data/equityData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../EquityScreening.css';

export function PerformanceEvaluationTable() {
  const [perfRef, perfVisible] = useInView();

  return (
    <section
      className="section sec-equity"
      id="performance-evaluation"
      aria-label="Performance Evaluation"
    >
      <div className="container">
        <div
          ref={perfRef as React.RefObject<HTMLDivElement>}
          className={`equity-wrapper equity-wrapper--wide animate-on-scroll ${perfVisible ? 'is-visible' : ''}`}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                PERFORMANCE EVALUATION
              </span>
            </h2>
          </div>

          <div className="equity-card perf-card">
            <div className="perf-table-wrap">
              <table className="perf-table">
                <thead>
                  <tr>
                    <th style={{ width: '18%' }}>TICKER</th>
                    <th style={{ width: '20%' }}>MONTHLY AVG RETURN</th>
                    <th style={{ width: '20%' }}>MONTHLY STD DEV</th>
                    <th style={{ width: '21%' }}>ANNUALIZED RETURN</th>
                    <th style={{ width: '21%' }}>ANNUALIZED STD DEV</th>
                  </tr>
                </thead>
                <tbody>
                  {stockPerformanceData.map((item: StockPerformance) => (
                    <tr key={item.ticker}>
                      <td className="perf-td-ticker">
                        <strong className="perf-ticker font-mono">
                          {item.ticker}
                        </strong>
                      </td>
                      <td className="perf-td-num">
                        <span className="font-mono perf-val-dark">
                          {item.monthlyReturn.toFixed(2)}%
                        </span>
                      </td>
                      <td className="perf-td-num">
                        <span className="font-mono perf-val-green">
                          {item.monthlyStdDev.toFixed(2)}%
                        </span>
                      </td>
                      <td className="perf-td-num">
                        <span className="font-mono perf-val-dark">
                          {item.annualReturn.toFixed(2)}%
                        </span>
                      </td>
                      <td className="perf-td-num">
                        <span className="font-mono perf-val-dark">
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
