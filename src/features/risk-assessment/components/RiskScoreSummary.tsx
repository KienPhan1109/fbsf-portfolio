import { useInView } from '../../../shared/hooks/useAnimations';
import { totalScore, maxScore, riskClassifications } from '../data/riskData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../RiskAssessment.css';

export function RiskScoreSummary() {
  const [scoreRef, scoreVisible] = useInView();

  return (
    <section
      className="section section--alt ra-section"
      id="risk-score"
      aria-label="Kết quả điểm số và phân loại khẩu vị rủi ro"
    >
      <div className="container container--wide">
        <div
          className={`ra-wrapper animate-on-scroll ${scoreVisible ? 'is-visible' : ''}`}
          ref={scoreRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                RISK PROFILE CLASSIFICATION
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Consolidate quantitative assessment results to determine the household’s risk tolerance level on a standardized scale.
            </p>
          </div>

          <div className="ra-score-card">
            <div className="ra-score-card__top">
              <div className="ra-score-card__primary">
                <span className="ra-score-card__caption">Total Survey Score</span>
                <div className="ra-score-card__value font-mono">
                  <span className="ra-score-card__num">{totalScore}</span>
                  <span className="ra-score-card__denom">/ {maxScore}</span>
                </div>
                <span className="ra-score-card__formula font-mono">
                  2 + 2 + 3 + 2 + 3 + 3 + 3 + 2 + 3 + 3 = 26 points (65%)
                </span>
              </div>

              <div className="ra-score-card__divider" />

              <div className="ra-score-card__profile">
                <span className="ra-score-card__caption">Risk Tolerance Classification</span>
                <div className="ra-score-card__badge-text">
                  Moderate Risk Tolerance
                </div>
                <p className="ra-score-card__sub-desc">
                  Falls within the 18–27 point range. Prioritizes a balance between long-term capital growth and portfolio volatility management.
                </p>
              </div>
            </div>

            <div className="ra-scale-container">
              <div className="ra-scale-bar">
                <div className="ra-scale-segment ra-scale-segment--low">
                  <span>Low (10–17 points)</span>
                </div>
                <div className="ra-scale-segment ra-scale-segment--mid">
                  <span className="ra-scale-segment__active-text">Moderate (18–27 points)</span>
                  <div className="ra-scale-marker" title="Mr. Nam's Score: 26 points">
                    <div className="ra-scale-marker__line" />
                    <span className="ra-scale-marker__label font-mono">26 pts</span>
                  </div>
                </div>
                <div className="ra-scale-segment ra-scale-segment--high">
                  <span>High (28–40 points)</span>
                </div>
              </div>

              <div className="ra-scale-legend">
                {riskClassifications.map((item, idx) => {
                  const isSelected = idx === 1;
                  return (
                    <div
                      key={idx}
                      className={`ra-scale-legend-item ${isSelected ? 'is-selected' : ''}`}
                    >
                      <div className="ra-scale-legend-title">
                        <span className="ra-scale-legend-dot" />
                        <strong>{item.level}</strong>
                        <span className="font-mono">({item.range})</span>
                      </div>
                      <p className="ra-scale-legend-desc">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RiskScoreSummary;
