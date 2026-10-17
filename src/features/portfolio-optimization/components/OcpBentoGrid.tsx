import { useInView } from '../../../shared/hooks/useAnimations';
import { ocpData } from '../data/markowitzData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../MarkowitzOptimization.css';

export function OcpBentoGrid() {
  const [ocpRef, ocpVisible] = useInView();

  return (
    <section
      className="section sec-markowitz sec-markowitz--ocp"
      id="ocp-section"
      aria-label="Optimal Complete Portfolio (OCP)"
    >
      <div className="container">
        <div
          ref={ocpRef as React.RefObject<HTMLDivElement>}
          className={`markowitz-wrapper animate-on-scroll ${ocpVisible ? 'is-visible' : ''}`}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                OPTIMAL COMPLETE PORTFOLIO (OCP)
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Asset Allocation, Performance Metrics, Risk Appetite & Investment Objectives
            </p>
          </div>

          <div className="ocp-grid">
            {/* Card 1: Optimal Asset Allocation */}
            <div className="ocp-card ocp-card--dark" id="ocp-asset-allocation">
              <div className="ocp-card__icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg>
              </div>
              <h3 className="ocp-card__title">Optimal Asset Allocation</h3>

              <div className="ocp-metric-block">
                <div className="ocp-metric-val font-mono">
                  {ocpData.allocation.riskyWeight}
                </div>
                <div className="ocp-metric-label">
                  {ocpData.allocation.riskyLabel}
                </div>
              </div>

              <div className="ocp-card__divider" />

              <div className="ocp-metric-block">
                <div className="ocp-metric-val font-mono">
                  {ocpData.allocation.riskFreeWeight}
                </div>
                <div className="ocp-metric-label">
                  {ocpData.allocation.riskFreeLabel}
                </div>
              </div>
            </div>

            {/* Card 2: Portfolio Performance */}
            <div className="ocp-card ocp-card--light" id="ocp-performance">
              <div className="ocp-card__icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <h3 className="ocp-card__title">Portfolio Performance</h3>

              <div className="ocp-metric-block">
                <div className="ocp-metric-sublabel">Expected Return</div>
                <div className="ocp-metric-val ocp-metric-val--blue font-mono">
                  {ocpData.performance.expectedReturn}
                </div>
                <div className="ocp-metric-subdesc">
                  {ocpData.performance.expectedReturnUnit}
                </div>
              </div>

              <div className="ocp-metric-block" style={{ marginTop: '24px' }}>
                <div className="ocp-metric-sublabel">Portfolio Risk</div>
                <div className="ocp-metric-val ocp-metric-val--dark font-mono">
                  {ocpData.performance.portfolioRisk}
                </div>
                <div className="ocp-metric-subdesc">
                  {ocpData.performance.portfolioRiskUnit}
                </div>
              </div>
            </div>

            {/* Card 3: Risk Profile */}
            <div className="ocp-card ocp-card--light" id="ocp-risk-profile">
              <div className="ocp-card__icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="ocp-card__title">Risk Profile</h3>

              <div className="ocp-profile-block">
                <div className="ocp-profile-type">
                  {ocpData.riskProfile.type}
                </div>
                <div className="ocp-profile-aversion font-mono">
                  {ocpData.riskProfile.riskAversion}
                </div>
              </div>

              <p className="ocp-profile-desc">
                {ocpData.riskProfile.description}
              </p>
            </div>

            {/* Card 4: Investment Objective */}
            <div className="ocp-card ocp-card--dark" id="ocp-investment-objective">
              <div className="ocp-card__icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="ocp-card__title">Investment Objective</h3>
              <p className="ocp-card__desc">
                {ocpData.investmentObjective.description}
              </p>

              <div className="ocp-card__divider" />

              <h4 className="ocp-card__subtitle">
                {ocpData.investmentObjective.subTitle}
              </h4>
              <p className="ocp-card__desc">
                {ocpData.investmentObjective.subDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OcpBentoGrid;
