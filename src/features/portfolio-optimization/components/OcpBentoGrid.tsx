import { useMemo } from 'react';
import { useInView } from '../../../shared/hooks/useAnimations';
import { ocpData } from '../data/markowitzData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../MarkowitzOptimization.css';

function getSectorPath(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  startAngle: number,
  endAngle: number
): string {
  const x1 = cx + rOuter * Math.cos(startAngle);
  const y1 = cy + rOuter * Math.sin(startAngle);
  const x2 = cx + rOuter * Math.cos(endAngle);
  const y2 = cy + rOuter * Math.sin(endAngle);
  const x3 = cx + rInner * Math.cos(endAngle);
  const y3 = cy + rInner * Math.sin(endAngle);
  const x4 = cx + rInner * Math.cos(startAngle);
  const y4 = cy + rInner * Math.sin(startAngle);

  const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

  return [
    `M ${x1} ${y1}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2} ${y2}`,
    `L ${x3} ${y3}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 0 ${x4} ${y4}`,
    'Z',
  ].join(' ');
}

export function OcpBentoGrid() {
  const [ocpRef, ocpVisible] = useInView();

  // Donut geometry: Risky Portfolio (21.16%) centered at top 12 o'clock, Risk-free (78.84%) wrapping around
  const { pathRisky, pathRiskFree } = useMemo(() => {
    const cx = 130;
    const cy = 130;
    const rOuter = 108;
    const rInner = 68;
    const gap = 0.025;

    const riskySpan = 0.2116 * 2 * Math.PI; // ~76.18 deg
    const topAngle = -Math.PI / 2; // 12 o'clock

    // Risky slice centered at top
    const startRisky = topAngle - riskySpan / 2 + gap / 2;
    const endRisky = topAngle + riskySpan / 2 - gap / 2;

    // Risk-free slice filling the rest clockwise
    const startRiskFree = endRisky + gap;
    const endRiskFree = startRisky + 2 * Math.PI - gap;

    return {
      pathRisky: getSectorPath(cx, cy, rOuter, rInner, startRisky, endRisky),
      pathRiskFree: getSectorPath(
        cx,
        cy,
        rOuter,
        rInner,
        startRiskFree,
        endRiskFree
      ),
    };
  }, []);

  return (
    <section
      className="section sec-markowitz sec-markowitz--ocp"
      id="ocp-section"
      aria-label="Optimal Complete Portfolio (OCP)"
    >
      <div className="container container--wide">
        <div
          ref={ocpRef as React.RefObject<HTMLDivElement>}
          className={`markowitz-wrapper animate-on-scroll ${
            ocpVisible ? 'is-visible' : ''
          }`}
        >
          {/* Header matching reference mockup */}
          <div className="ocp-v2-header text-center">
            <h2 className="ocp-v2-title">
              <span className="ocp-v2-title__part1">OPTIMAL COMPLETE </span>
              <span className="ocp-v2-title__part2">PORTFOLIO (OCP)</span>
            </h2>
            <p className="ocp-v2-subtitle">
              Asset Allocation, Performance Metrics, Risk Appetite &amp;
              Investment Objectives
            </p>
          </div>

          {/* Unified 2-Panel OCP Card */}
          <div className="ocp-v2-container">
            {/* Left Pane: Lime Allocation Donut */}
            <div className="ocp-left-pane">
              <div className="ocp-donut-wrapper">
                <svg
                  viewBox="0 0 260 260"
                  className="ocp-svg"
                  role="img"
                  aria-label="OCP Asset Allocation Donut Chart"
                >
                  {/* Risk-free slice (Vibrant Emerald / Mint) */}
                  <path
                    d={pathRiskFree}
                    fill="#34D399"
                    className="ocp-slice ocp-slice--rf"
                  />
                  {/* Risky slice (Dark forest green) */}
                  <path
                    d={pathRisky}
                    fill="#064E3B"
                    className="ocp-slice ocp-slice--risky"
                  />

                  {/* Donut Center Label */}
                  <text
                    x="130"
                    y="126"
                    textAnchor="middle"
                    fill="#062C1E"
                    fontFamily="var(--font-heading)"
                    fontWeight="800"
                    fontSize="30"
                  >
                    21.16%
                  </text>
                  <text
                    x="130"
                    y="148"
                    textAnchor="middle"
                    fill="#062C1E"
                    fontFamily="var(--font-mono)"
                    fontWeight="700"
                    fontSize="11"
                    letterSpacing="0.1em"
                  >
                    ORP
                  </text>
                </svg>
              </div>

              {/* Legend matching mockup */}
              <div className="ocp-donut-legend">
                <div className="ocp-legend-row">
                  <div className="ocp-legend-item">
                    <span className="ocp-legend-dot ocp-legend-dot--rf" />
                    <span className="ocp-legend-label">Risk-free Asset</span>
                  </div>
                  <span className="ocp-legend-val font-mono">
                    {ocpData.allocation.riskFreeWeight}
                  </span>
                </div>
                <div className="ocp-legend-row">
                  <div className="ocp-legend-item">
                    <span className="ocp-legend-dot ocp-legend-dot--risky" />
                    <span className="ocp-legend-label">Risky Portfolio</span>
                  </div>
                  <span className="ocp-legend-val font-mono">
                    {ocpData.allocation.riskyWeight}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Pane: Emerald Signals & Metrics */}
            <div className="ocp-right-pane">
              <div className="ocp-signals-tag font-mono">PORTFOLIO SIGNALS</div>

              {/* Row 1: Expected Return & Portfolio Risk */}
              <div className="ocp-metrics-grid">
                <div className="ocp-metric-cell">
                  <div className="ocp-metric-tag font-mono">EXPECTED RETURN</div>
                  <div className="ocp-metric-num font-heading">
                    {ocpData.performance.expectedReturn}
                  </div>
                  <div className="ocp-metric-sub">per month</div>
                </div>
                <div className="ocp-metric-cell">
                  <div className="ocp-metric-tag font-mono">PORTFOLIO RISK</div>
                  <div className="ocp-metric-num font-heading">
                    {ocpData.performance.portfolioRisk}
                  </div>
                  <div className="ocp-metric-sub">monthly std. deviation</div>
                </div>
              </div>

              {/* Row 2: Risk Profile Card */}
              <div className="ocp-profile-box">
                <div className="ocp-profile-tag font-mono">RISK PROFILE</div>
                <div className="ocp-profile-num font-heading">
                  <span>{ocpData.riskProfile.type}</span>
                  <span className="ocp-profile-coeff font-mono">A = 5.07</span>
                </div>
                <div className="ocp-profile-sub">
                  Tailored risk tolerance for balanced asset growth
                </div>
              </div>

              {/* Row 3: Investment Objective */}
              <div className="ocp-objective-box">
                <div className="ocp-objective-tag font-mono">OBJECTIVE</div>
                <p className="ocp-objective-desc">
                  Balance long-term growth, risk reduction, and capital
                  preservation by combining ORP with a risk-free asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OcpBentoGrid;
