import { useInView } from '../../../shared/hooks/useAnimations';
import { ipsData } from '../data/ipsData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../IpsReport.css';

export function IpsReport() {
  const [ref, visible] = useInView();

  // Donut chart constants
  const donutR = 60;
  const donutCirc = 2 * Math.PI * donutR;
  const orpWeight = ipsData.allocationBreakdown[0].weight / 100;
  const orpDash = orpWeight * donutCirc;
  const bondDash = donutCirc - orpDash;

  return (
    <section
      className="section sec-ips-report"
      id="ips-report"
      aria-label="Investment Policy Statement (IPS) Report"
    >
      <div className="container container--wide">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`ips-wrapper animate-on-scroll ${
            visible ? 'is-visible' : ''
          }`}
        >
          {/* Executive 2-Column Section Header */}
          <div className="ips-header">
            <div className="ips-header__title-wrap">
              <h2 className="ips-title">
                <span className="ips-title__line1">INVESTMENT POLICY</span>
                <span className="ips-title__line2">STATEMENT</span>
              </h2>
            </div>
            <div className="ips-header__desc-wrap">
              <p className="ips-desc">
                The Nam–Nu Family · A disciplined 10-year strategy for balanced growth, cash flow turnaround, and long-term financial security.
              </p>
            </div>
          </div>

          {/* Master Institutional Dossier Stack */}
          <div className="ips-content-stack">
            {/* BOX 1: 4 Symmetrical Institutional KPI Metric Columns */}
            <div className="ips-card ips-card--kpi">
              <div className="ips-kpi-grid">
                <div className="ips-kpi-card">
                  <span className="ips-kpi-label">TOTAL NET WORTH</span>
                  <div className="ips-kpi-val font-heading">{ipsData.netWorth}</div>
                  <div className="ips-kpi-desc">{ipsData.netWorthDesc}</div>
                </div>

                <div className="ips-kpi-card">
                  <span className="ips-kpi-label">MONTHLY NET CASH FLOW</span>
                  <div className="ips-kpi-val ips-kpi-val--emerald font-heading">
                    {ipsData.cashFlow.mainHighlight}
                    <span className="ips-kpi-unit">/mo</span>
                  </div>
                  <div className="ips-kpi-desc">
                    Net turnaround: <strong>{ipsData.cashFlow.monthlyImprovement}</strong>
                  </div>
                </div>

                <div className="ips-kpi-card">
                  <span className="ips-kpi-label">RISK PROFILE</span>
                  <div className="ips-kpi-val font-heading">
                    {ipsData.riskProfile}
                  </div>
                  <div className="ips-kpi-desc">
                    Risk aversion: <strong>A = {ipsData.riskAversion}</strong>
                  </div>
                </div>

                <div className="ips-kpi-card">
                  <span className="ips-kpi-label">STRATEGY MANDATE</span>
                  <div className="ips-kpi-val ips-kpi-val--strategy font-heading">
                    {ipsData.strategy.title}
                  </div>
                  <div className="ips-kpi-desc">10-Yr Horizon · 15% Target Return</div>
                </div>
              </div>
            </div>

            {/* BOX 2: CASH FLOW TRANSFORMATION (BOX RIÊNG BIỆT TRÊN - RỘNG VÀ THOÁNG) */}
            <div className="ips-card ips-card--cf">
              <div className="ips-panel-header">
                <div>
                  <h4 className="ips-panel-title font-heading">Cash Flow Transformation</h4>
                  <p className="ips-panel-subtitle">Monthly before vs. after optimization comparison</p>
                </div>
                <div className="ips-cf-legend">
                  <span className="ips-cf-legend-item font-mono">
                    <span className="ips-cf-legend-dot ips-cf-legend-dot--before" />
                    Baseline
                  </span>
                  <span className="ips-cf-legend-item font-mono">
                    <span className="ips-cf-legend-dot ips-cf-legend-dot--after" />
                    Optimized
                  </span>
                </div>
              </div>

              <div className="ips-cf-list">
                {ipsData.cashFlowComparison.map((item) => {
                  const diff = item.after - item.before;
                  const isPositive = diff > 0;
                  const diffStr = isPositive
                    ? `+₫${diff.toFixed(1)}M`
                    : `−₫${Math.abs(diff).toFixed(1)}M`;

                  return (
                    <div key={item.label} className="ips-cf-item">
                      <div className="ips-cf-item-left">
                        <span className="ips-cf-item-title">{item.label}</span>
                      </div>

                      {/* Dual sleek comparison bars */}
                      <div className="ips-cf-item-center">
                        <div className="ips-cf-track-pair">
                          <div className="ips-cf-track">
                            <div
                              className={`ips-cf-bar ${item.before < 0 ? 'ips-cf-bar--negative' : 'ips-cf-bar--before'}`}
                              style={{ width: `${Math.min(Math.abs(item.before) * 1.6, 100)}%` }}
                            />
                          </div>
                          <div className="ips-cf-track">
                            <div
                              className="ips-cf-bar ips-cf-bar--after"
                              style={{ width: `${Math.min(Math.abs(item.after) * 1.6, 100)}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="ips-cf-item-right font-mono">
                        <span className={`ips-cf-val-before ${item.before < 0 ? 'text-danger' : ''}`}>
                          {item.before > 0 ? `₫${item.before}${item.unit}` : `−₫${Math.abs(item.before)}${item.unit}`}
                        </span>
                        <span className="ips-cf-arrow">→</span>
                        <span className="ips-cf-val-after text-success">
                          {item.after > 0 ? `₫${item.after}${item.unit}` : `−₫${Math.abs(item.after)}${item.unit}`}
                        </span>
                        <span className="ips-cf-diff font-mono text-success">
                          ({diffStr})
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="ips-panel-footer-note">
                <span>Net Turnaround: <strong>+₫12M/month</strong> redirected into wealth accumulation</span>
              </div>
            </div>

            {/* BOX 3: ASSET ALLOCATION (OCP) (BOX RIÊNG BIỆT DƯỚI - RỘNG VÀ THOÁNG) */}
            <div className="ips-card ips-card--alloc">
              <div className="ips-panel-header">
                <div>
                  <h4 className="ips-panel-title font-heading">Asset Allocation (OCP)</h4>
                  <p className="ips-panel-subtitle">Optimal Complete Portfolio recommended mix</p>
                </div>
                <div className="ips-alloc-mandate font-mono">
                  A = {ipsData.riskAversion}
                </div>
              </div>

              <div className="ips-alloc-body">
                <div className="ips-donut-visual-wrap">
                  <svg className="ips-donut-svg" viewBox="0 0 160 160">
                    <circle
                      className="ips-donut-bg-ring"
                      cx="80"
                      cy="80"
                      r={donutR}
                    />
                    {/* Bonds Slice */}
                    <circle
                      className="ips-donut-slice ips-donut-slice--bonds"
                      cx="80"
                      cy="80"
                      r={donutR}
                      strokeDasharray={`${bondDash} ${donutCirc}`}
                      strokeDashoffset={-orpDash}
                    />
                    {/* ORP Slice */}
                    <circle
                      className="ips-donut-slice ips-donut-slice--orp"
                      cx="80"
                      cy="80"
                      r={donutR}
                      strokeDasharray={`${orpDash} ${donutCirc}`}
                      strokeDashoffset="0"
                    />
                  </svg>

                  <div className="ips-donut-center">
                    <span className="ips-donut-center-val font-heading">{ipsData.allocation.riskyWeight}</span>
                    <span className="ips-donut-center-label font-mono">ORP SHARE</span>
                  </div>
                </div>

                <div className="ips-alloc-list">
                  <div className="ips-alloc-card-item">
                    <div className="ips-alloc-item-top">
                      <div className="ips-alloc-title-group">
                        <span className="ips-alloc-dot ips-alloc-dot--orp" />
                        <div>
                          <span className="ips-alloc-name">Optimal Risky Portfolio (ORP)</span>
                          <span className="ips-alloc-desc font-mono">Equities: VCB · SSI · MWG · GAS</span>
                        </div>
                      </div>
                      <span className="ips-alloc-pct font-mono">{ipsData.allocation.riskyWeight}</span>
                    </div>
                    <div className="ips-alloc-bar-track">
                      <div
                        className="ips-alloc-bar ips-alloc-bar--orp"
                        style={{ width: ipsData.allocation.riskyWeight }}
                      />
                    </div>
                  </div>

                  <div className="ips-alloc-card-item">
                    <div className="ips-alloc-item-top">
                      <div className="ips-alloc-title-group">
                        <span className="ips-alloc-dot ips-alloc-dot--bonds" />
                        <div>
                          <span className="ips-alloc-name">Vietnam Government Bonds</span>
                          <span className="ips-alloc-desc font-mono">10-Year Sovereign Risk-Free Anchor</span>
                        </div>
                      </div>
                      <span className="ips-alloc-pct font-mono">{ipsData.allocation.riskFreeWeight}</span>
                    </div>
                    <div className="ips-alloc-bar-track">
                      <div
                        className="ips-alloc-bar ips-alloc-bar--bonds"
                        style={{ width: ipsData.allocation.riskFreeWeight }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="ips-panel-footer-note">
                <span>Policy Mandate: Balanced risk-return optimized under Markowitz utility theory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IpsReport;
