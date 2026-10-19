import { useInView } from '../../../shared/hooks/useAnimations';
import { gsoepData } from '../data/riskData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../RiskAssessment.css';

export function GsoepModelCard() {
  const [modelRef, modelVisible] = useInView();

  return (
    <section
      className="section ra-section"
      id="risk-coefficient"
      aria-label="Hệ số ngại rủi ro và hàm hữu dụng Markowitz"
    >
      <div className="container container--wide">
        <div
          className={`ra-wrapper animate-on-scroll ${modelVisible ? 'is-visible' : ''}`}
          ref={modelRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                CRRA RISK AVERSION & UTILITY MODEL
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Establish a risk aversion coefficient of A = 5.07 based on the 2025 GSOEP framework and apply the Mean-Variance utility function to portfolio optimization.
            </p>
          </div>

          <div className="ra-academic-grid">
            {/* Left Column: Table 2.2 GSOEP */}
            <div className="ra-academic-card">
              <div className="ra-academic-card__header">
                <h3 className="ra-academic-card__title">
                  Table 2.2. Risk Aversion Coefficient Classification (GSOEP)
                </h3>
                <p className="ra-academic-card__subtitle">
                  Standardized classification of risk aversion parameters based on the German Socio-Economic Panel (GSOEP).
                </p>
              </div>

              <div className="ra-academic-table-wrap">
                <table className="ra-academic-table">
                  <thead>
                    <tr>
                      <th>Willingness to Take on Risk</th>
                      <th>Probability Mass</th>
                      <th style={{ textAlign: 'right' }}>Risk Aversion (A)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gsoepData.map((row, idx) => (
                      <tr
                        key={idx}
                        className={row.isClientCategory ? 'is-client-row' : ''}
                      >
                        <td>
                          <span className="font-mono">{row.range}</span>
                          {row.isClientCategory && (
                            <span className="ra-client-tag">
                              Survey Score: 4/10 (Mr. Nam)
                            </span>
                          )}
                        </td>
                        <td className="font-mono">{row.probabilityMass}</td>
                        <td style={{ textAlign: 'right' }}>
                          <span className={`ra-a-number font-mono ${row.isClientCategory ? 'is-active' : ''}`}>
                            {row.riskAversion.toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="ra-academic-footnote">
                Source: <em>Hochmuth, Merz, &amp; Prettensthaler (2025)</em>, based on GSOEP.
              </div>
            </div>

            {/* Right Column: Utility Function & Narrative Analysis */}
            <div className="ra-academic-card">
              <div className="ra-academic-card__header">
                <h3 className="ra-academic-card__title">
                  Utility Function &amp; Portfolio Evaluation
                </h3>
                <p className="ra-academic-card__subtitle">
                  Input parameters for the Mean-Variance Markowitz portfolio optimization model.
                </p>
              </div>

              {/* Clean Academic Math Box */}
              <div className="ra-math-card">
                <div className="ra-math-card__label">Investor Utility Function:</div>
                <div className="ra-math-card__equation font-mono">
                  U = E(r) - ½ · A · σ²
                </div>
                <div className="ra-math-card__meta font-mono">
                  Standardized Risk Aversion Coefficient: <strong>A = 5.07</strong>
                </div>
              </div>

              {/* Editorial Professional Financial Commentary */}
              <div className="ra-academic-editorial">
                <p>
                  <strong>1. Survey-Based Assessment:</strong> Mr. Nam’s willingness-to-take-risk score of <strong>4/10</strong> places the household in the <strong>[4–6]</strong> risk-aversion group, representing the most prevalent group in the sample (53%). The corresponding CRRA risk aversion coefficient is <strong>A = 5.07</strong>.
                </p>
                <p>
                  <strong>2. Investment Philosophy:</strong> The household prioritizes capital preservation and risk control while remaining willing to accept a reasonable level of volatility to achieve long-term financial goals.
                </p>
                <p>
                  <strong>3. Markowitz Model Parameter:</strong> The risk aversion coefficient <strong>A = 5.07</strong> serves as the risk-weighting parameter in the Mean-Variance Markowitz optimization model, supporting the identification of an optimal portfolio aligned with the household’s financial objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GsoepModelCard;
