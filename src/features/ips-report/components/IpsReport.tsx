import { useInView } from '../../../shared/hooks/useAnimations';
import { ipsData } from '../data/ipsData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../IpsReport.css';

export function IpsReport() {
  const [ref, visible] = useInView();

  return (
    <section
      className="section sec-ips-report"
      id="ips-report"
      aria-label="Investment Policy Statement (IPS) Report"
    >
      <div className="container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`ips-wrapper animate-on-scroll ${visible ? 'is-visible' : ''}`}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                INVESTMENT POLICY STATEMENT
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              The Nam–Nu Family · A decade-long strategy for balanced growth and
              financial security.
            </p>
          </div>

          <div className="ips-doc-card">
            <div className="ips-doc-header">
              <div className="ips-doc-eyebrow">
                INVESTMENT POLICY STATEMENT
              </div>
              <h3 className="ips-doc-title">{ipsData.familyName}</h3>
              <p className="ips-doc-subtitle">{ipsData.strategySubtitle}</p>
            </div>

            <div className="ips-grid">
              <div className="ips-col">
                <div className="ips-stat-card">
                  <span className="ips-stat-label">Net worth</span>
                  <span className="ips-stat-value font-mono">
                    {ipsData.netWorth}
                  </span>
                  <span className="ips-stat-desc">{ipsData.netWorthDesc}</span>
                </div>

                <div className="ips-cashflow-card">
                  <span className="ips-cf-title">
                    {ipsData.cashFlow.title}
                  </span>
                  <span className="ips-cf-highlight font-mono">
                    {ipsData.cashFlow.mainHighlight}
                  </span>
                  <span className="ips-cf-badge">
                    {ipsData.cashFlow.badge}
                  </span>

                  <div className="ips-cf-divider" />

                  <div className="ips-cf-row">
                    <span className="ips-cf-row-label">Before optimization</span>
                    <span className="ips-cf-row-val ips-cf-row-val--negative font-mono">
                      {ipsData.cashFlow.beforeOptimization}
                    </span>
                  </div>

                  <div className="ips-cf-row">
                    <span className="ips-cf-row-label">After optimization</span>
                    <span className="ips-cf-row-val ips-cf-row-val--positive font-mono">
                      {ipsData.cashFlow.afterOptimization}
                    </span>
                  </div>

                  <div className="ips-cf-row">
                    <span className="ips-cf-row-label">Monthly improvement</span>
                    <span className="ips-cf-row-val ips-cf-row-val--positive font-mono">
                      {ipsData.cashFlow.monthlyImprovement}
                    </span>
                  </div>
                </div>
              </div>

              <div className="ips-col">
                <div className="ips-stat-card">
                  <span className="ips-stat-label">Risk profile</span>
                  <span className="ips-stat-value">
                    {ipsData.riskProfile}
                  </span>
                  <span className="ips-stat-desc">
                    {ipsData.riskProfileDesc}
                  </span>
                </div>

                <div className="ips-stat-card">
                  <span className="ips-stat-label">Risk aversion</span>
                  <span className="ips-stat-value font-mono">
                    {ipsData.riskAversion}
                  </span>
                  <span className="ips-stat-desc">
                    {ipsData.riskAversionDesc}
                  </span>
                </div>
              </div>
            </div>

            {/* Optimal Complete Portfolio Card */}
            <div className="ips-alloc-card">
              <h4 className="ips-alloc-title">{ipsData.allocation.title}</h4>
              <p className="ips-alloc-sub">{ipsData.allocation.subtitle}</p>

              <div
                className="ips-alloc-bar"
                role="progressbar"
                aria-valuenow={21.16}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="ips-alloc-slice--risky"
                  style={{ width: '21.16%' }}
                  title="21.16% Optimal Risky Portfolio"
                />
                <div
                  className="ips-alloc-slice--riskfree"
                  style={{ width: '78.84%' }}
                  title="78.84% Vietnam Government Bonds"
                />
              </div>

              <div className="ips-alloc-legend">
                <div className="ips-alloc-col">
                  <span className="ips-alloc-dot ips-alloc-dot--risky" />
                  <div className="ips-alloc-info">
                    <span className="ips-alloc-pct font-mono">
                      {ipsData.allocation.riskyWeight}
                    </span>
                    <span className="ips-alloc-name">
                      {ipsData.allocation.riskyLabel}
                    </span>
                    <span className="ips-alloc-desc font-mono">
                      {ipsData.allocation.riskyAssets}
                    </span>
                  </div>
                </div>

                <div className="ips-alloc-col">
                  <span className="ips-alloc-dot ips-alloc-dot--riskfree" />
                  <div className="ips-alloc-info">
                    <span className="ips-alloc-pct font-mono">
                      {ipsData.allocation.riskFreeWeight}
                    </span>
                    <span className="ips-alloc-name">
                      {ipsData.allocation.riskFreeLabel}
                    </span>
                    <span className="ips-alloc-desc">
                      {ipsData.allocation.riskFreeDesc}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Strategy Dark Navy Card */}
            <div className="ips-strategy-card">
              <div className="ips-strat-eyebrow">
                {ipsData.strategy.eyebrow}
              </div>
              <h4 className="ips-strat-title">{ipsData.strategy.title}</h4>
              <p className="ips-strat-desc">{ipsData.strategy.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IpsReport;
