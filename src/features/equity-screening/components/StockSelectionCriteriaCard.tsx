import { useInView } from '../../../shared/hooks/useAnimations';
import { stockSelectionCriteria, type StockCriterion } from '../data/equityData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../EquityScreening.css';

export function StockSelectionCriteriaCard() {
  const [criteriaRef, criteriaVisible] = useInView();

  return (
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
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                STOCK SELECTION CRITERIA
              </span>
            </h2>
          </div>

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
  );
}

export default StockSelectionCriteriaCard;
