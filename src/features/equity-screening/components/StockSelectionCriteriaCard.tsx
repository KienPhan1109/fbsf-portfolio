import { useInView } from '../../../shared/hooks/useAnimations';
import { stockSelectionCriteria } from '../data/equityData';
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
      <div className="container container--wide">
        <div
          ref={criteriaRef as React.RefObject<HTMLDivElement>}
          className={`equity-wrapper animate-on-scroll ${criteriaVisible ? 'is-visible' : ''}`}
        >
          {/* Header matching user's editorial design */}
          <div className="ssc-header">
            <div className="ssc-header__title-wrap">
              <h2 className="ssc-title">
                <span className="ssc-title__line1">STOCK SELECTION</span>
                <span className="ssc-title__line2">CRITERIA</span>
              </h2>
            </div>
            <div className="ssc-header__desc-wrap">
              <p className="ssc-desc">
                A disciplined screening framework designed to identify resilient businesses with sustainable long-term growth potential.
              </p>
            </div>
          </div>

          {/* Minimalist Editorial Grid with 7 criteria */}
          <div className="ssc-grid" role="list">
            {stockSelectionCriteria.map((item) => {
              if (item.isFullWidth) {
                return (
                  <div
                    key={item.id}
                    className="ssc-cell ssc-cell--full"
                    role="listitem"
                  >
                    <div className="ssc-cell__full-left">
                      <div className="ssc-cell__idx ssc-cell__idx--badge font-mono">
                        {item.idx}
                      </div>
                      <div className="ssc-cell__full-title-wrap">
                        <h3 className="ssc-cell__name ssc-cell__name--inline">
                          {item.name}
                        </h3>
                        <span className="ssc-cell__tagline font-mono">
                          {item.tagline || 'Screening Mandate'}
                        </span>
                      </div>
                    </div>
                    <div className="ssc-cell__full-right">
                      {item.tags && (
                        <div className="ssc-cell__pills">
                          {item.tags.map((tag) => (
                            <span key={tag} className="ssc-pill font-mono">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="ssc-cell__subnote">
                        {item.subNote || item.requirement}
                      </p>
                    </div>
                  </div>
                );
              }

              return (
                <div key={item.id} className="ssc-cell" role="listitem">
                  <div className="ssc-cell__idx font-mono">{item.idx}</div>
                  <h3 className="ssc-cell__name">{item.name}</h3>
                  <div className={`ssc-cell__req ${item.isMono ? 'font-mono' : ''}`}>
                    {item.requirement}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StockSelectionCriteriaCard;

