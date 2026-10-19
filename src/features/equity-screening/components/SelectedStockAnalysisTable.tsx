import { useInView } from '../../../shared/hooks/useAnimations';
import { selectedStocks, type SelectedStock } from '../data/equityData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../EquityScreening.css';

export function SelectedStockAnalysisTable() {
  const [stocksRef, stocksVisible] = useInView();

  return (
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
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                SELECTED STOCK ANALYSIS
              </span>
            </h2>
          </div>

          <div className="equity-card">
            <div className="equity-table-wrap">
              <table className="equity-table">
                <thead>
                  <tr>
                    <th style={{ width: '10%' }}>Ticker</th>
                    <th style={{ width: '14%' }}>Sector</th>
                    <th style={{ width: '22%' }}>Investment Role</th>
                    <th style={{ width: '26%' }}>Key Return Drivers</th>
                    <th>Household Financial Objective</th>
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
  );
}

export default SelectedStockAnalysisTable;
