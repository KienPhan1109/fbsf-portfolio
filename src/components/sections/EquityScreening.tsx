import { useInView } from '../../hooks/useAnimations';
import {
  stockSelectionCriteria,
  selectedStocks,
  stockPerformanceData,
  type StockCriterion,
  type SelectedStock,
  type StockPerformance,
} from '../../data/equityData';
import '../ui/ui.css';
import './SystemWorkflow.css';
import './EquityScreening.css';

/* ============================================================
   EQUITY ANALYSIS MODULE
   1. Stock Selection Criteria (Spec Table)
   2. Selected Stock Analysis (5 Tickers Table)
   3. Performance Evaluation (5 Tickers Stats Table)
   ============================================================ */
export default function EquityScreening() {
  const [criteriaRef, criteriaVisible] = useInView();
  const [stocksRef, stocksVisible] = useInView();
  const [perfRef, perfVisible] = useInView();

  return (
    <>
      {/* ============================================================
          SECTION 1: TIÊU CHÍ LỰA CHỌN CỔ PHIẾU
          ============================================================ */}
      <section
        className="section sec-equity"
        id="equity-analysis"
        aria-label="Stock Selection Criteria"
      >
        <div className="container">
          <div
            ref={criteriaRef as React.RefObject<HTMLDivElement>}
            className={`equity-wrapper animate-on-scroll ${criteriaVisible ? 'is-visible' : ''}`}
          >
            {/* Section Heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  STOCK SELECTION CRITERIA
                </span>
              </h2>
            </div>

            {/* Clean Spec Table Card */}
            <div className="equity-card">
              <div className="equity-table-wrap">
                <table className="equity-table">
                  <thead>
                    <tr>
                      <th style={{ width: '35%' }}>Criterion</th>
                      <th>Requirement / Benchmark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockSelectionCriteria.map(
                      (item: StockCriterion, idx: number) => (
                        <tr key={item.id}>
                          <td className="equity-td-name">
                            <span className="equity-idx font-mono">
                              0{idx + 1}
                            </span>
                            <strong className="equity-name">{item.name}</strong>
                          </td>
                          <td className="equity-td-val">
                            <span
                              className={
                                item.isMono
                                  ? 'font-mono equity-val-mono'
                                  : 'equity-val'
                              }
                            >
                              {item.requirement}
                            </span>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: PHÂN TÍCH CỔ PHIẾU ĐÃ ĐƯỢC CHỌN
          ============================================================ */}
      <section
        className="section section--alt sec-equity"
        id="selected-stocks"
        aria-label="Selected Stock Analysis"
      >
        <div className="container">
          <div
            ref={stocksRef as React.RefObject<HTMLDivElement>}
            className={`equity-wrapper equity-wrapper--wide animate-on-scroll ${stocksVisible ? 'is-visible' : ''}`}
          >
            {/* Section Heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  SELECTED STOCK ANALYSIS
                </span>
              </h2>
            </div>

            {/* Selected Equities Table Card */}
            <div className="equity-card">
              <div className="equity-table-wrap">
                <table className="equity-table">
                  <thead>
                    <tr>
                      <th style={{ width: '10%' }}>Mã</th>
                      <th style={{ width: '14%' }}>Ngành</th>
                      <th style={{ width: '22%' }}>Vai trò</th>
                      <th style={{ width: '26%' }}>Động lực lợi nhuận chính</th>
                      <th>Nhu cầu của gia đình mà mã đáp ứng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedStocks.map((s: SelectedStock) => (
                      <tr key={s.ticker}>
                        <td className="equity-td-ticker">
                          <strong className="equity-ticker font-mono">
                            {s.ticker}
                          </strong>
                        </td>
                        <td className="equity-td-industry">{s.industry}</td>
                        <td className="equity-td-role">
                          <span
                            className={`equity-role-pill ${
                              s.isDefensive
                                ? 'equity-role-pill--def'
                                : 'equity-role-pill--grow'
                            }`}
                          >
                            {s.role}
                          </span>
                        </td>
                        <td className="equity-td-driver">{s.profitDriver}</td>
                        <td className="equity-td-need">{s.familyNeed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: PERFORMANCE EVALUATION
          ============================================================ */}
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
            {/* Section Heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  PERFORMANCE EVALUATION
                </span>
              </h2>
            </div>

            {/* Performance Spec Card with Dark Navy Header */}
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
    </>
  );
}
