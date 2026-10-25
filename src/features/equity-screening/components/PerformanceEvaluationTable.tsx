import { useState } from 'react';
import { useInView } from '../../../shared/hooks/useAnimations';
import {
  stockPerformanceData,
  selectedStocks,
} from '../data/equityData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../EquityScreening.css';

export function PerformanceEvaluationTable() {
  const [perfRef, perfVisible] = useInView();
  const [activeTicker, setActiveTicker] = useState<string>('VCB');

  // Combine performance with sector and role
  const combinedStocks = stockPerformanceData.map((item) => {
    const meta = selectedStocks.find((s) => s.ticker === item.ticker);
    return {
      ...item,
      sector: meta?.sector || '',
      role: meta?.role || '',
    };
  });

  const activeStock =
    combinedStocks.find((s) => s.ticker === activeTicker) || combinedStocks[0];

  // SVG Chart Dimensions & Math
  // ViewBox: 0 0 680 420
  // Plot Area: x in [80, 640] (width 560), y in [30, 370] (height 340)
  // X Domain: 14% to 54% (range 40%) -> 10% = 140px
  // Y Domain: 0% to 18% (range 18%) -> 6% = 113.33px
  const getX = (stdDev: number) => 80 + ((stdDev - 14) / 40) * 560;
  const getY = (ret: number) => 370 - (ret / 18) * 340;

  // Optimal Zone: x from 14% (80) to 33% (346), y from 18% (30) to 8.5% (209.4)
  const optimalZone = {
    x: 80,
    y: 30,
    width: 266, // from 14% to 33%
    height: 180, // from 18% down to ~8.5%
  };

  return (
    <section
      className="section sec-perf-eval"
      id="performance-evaluation"
      aria-label="Performance Evaluation"
    >
      <div className="container container--wide">
        <div
          ref={perfRef as React.RefObject<HTMLDivElement>}
          className={`equity-wrapper equity-wrapper--wide animate-on-scroll ${
            perfVisible ? 'is-visible' : ''
          }`}
        >
          {/* Header matching reference mockup */}
          <div className="pe-header">
            <div className="pe-header__title-wrap">
              <h2 className="pe-title">
                <span className="pe-title__line1">PERFORMANCE</span>
                <span className="pe-title__line2">EVALUATION</span>
              </h2>
            </div>
            <div className="pe-header__desc-wrap">
              <p className="pe-desc">
                Compare relative performance at a glance. Higher positions indicate
                stronger returns; points further right represent higher volatility.
              </p>
            </div>
          </div>

          {/* Combined Card Container: Left Chart + Right Dark Forest Green Card */}
          <div className="pe-container">
            {/* Left: Scatter Plot Risk-Return Chart */}
            <div className="pe-chart-pane">
              <div className="pe-svg-wrapper">
                <svg
                  viewBox="0 0 680 420"
                  className="pe-svg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Optimal Zone Highlight */}
                  <rect
                    x={optimalZone.x}
                    y={optimalZone.y}
                    width={optimalZone.width}
                    height={optimalZone.height}
                    fill="#EDF6F1"
                  />
                  <text
                    x={optimalZone.x + 12}
                    y={optimalZone.y + 24}
                    fill="#059669"
                    fontSize="11"
                    fontFamily="var(--font-mono)"
                    fontWeight="700"
                    letterSpacing="0.08em"
                  >
                    OPTIMAL ZONE
                  </text>

                  {/* Chart Outer Frame */}
                  <rect
                    x="80"
                    y="30"
                    width="560"
                    height="340"
                    fill="none"
                    stroke="#D8E0DA"
                    strokeWidth="1"
                  />

                  {/* Horizontal Grid Lines */}
                  {[
                    { val: '18%', y: 30 },
                    { val: '12%', y: 143.33 },
                    { val: '6%', y: 256.66 },
                    { val: '0%', y: 370 },
                  ].map((tick) => (
                    <g key={tick.val}>
                      {tick.y > 30 && tick.y < 370 && (
                        <line
                          x1="80"
                          y1={tick.y}
                          x2="640"
                          y2={tick.y}
                          stroke="#EAEFEB"
                          strokeWidth="1"
                        />
                      )}
                      <text
                        x="70"
                        y={tick.y + 4}
                        textAnchor="end"
                        fill="#64748B"
                        fontSize="11"
                        fontFamily="var(--font-mono)"
                        fontWeight="500"
                      >
                        {tick.val}
                      </text>
                    </g>
                  ))}

                  {/* Vertical Grid Lines */}
                  {[
                    { val: '20%', x: 164 },
                    { val: '30%', x: 304 },
                    { val: '40%', x: 444 },
                    { val: '50%', x: 584 },
                  ].map((tick) => (
                    <g key={tick.val}>
                      <line
                        x1={tick.x}
                        y1="30"
                        x2={tick.x}
                        y2="370"
                        stroke="#EAEFEB"
                        strokeWidth="1"
                      />
                      <text
                        x={tick.x}
                        y="392"
                        textAnchor="middle"
                        fill="#64748B"
                        fontSize="11"
                        fontFamily="var(--font-mono)"
                        fontWeight="500"
                      >
                        {tick.val}
                      </text>
                    </g>
                  ))}

                  {/* Y-Axis Label */}
                  <text
                    transform="rotate(-90)"
                    x="-200"
                    y="24"
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                    fontWeight="600"
                    letterSpacing="0.12em"
                  >
                    ANNUALIZED RETURN
                  </text>

                  {/* X-Axis Label */}
                  <text
                    x="360"
                    y="414"
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                    fontWeight="600"
                    letterSpacing="0.12em"
                  >
                    ANNUALIZED STD DEV
                  </text>

                  {/* Scatter Points */}
                  {combinedStocks.map((stock) => {
                    const cx = getX(stock.annualStdDev);
                    const cy = getY(stock.annualReturn);
                    const isSelected = stock.ticker === activeTicker;

                    return (
                      <g
                        key={stock.ticker}
                        className="pe-point-group"
                        onClick={() => setActiveTicker(stock.ticker)}
                        style={{ cursor: 'pointer' }}
                      >
                        {/* Halo for active stock */}
                        {isSelected && (
                          <circle
                            cx={cx}
                            cy={cy}
                            r="20"
                            fill="rgba(16, 185, 129, 0.22)"
                            stroke="rgba(16, 185, 129, 0.45)"
                            strokeWidth="1.2"
                            className="pe-point-halo"
                          />
                        )}

                        {/* Core Data Point Dot */}
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isSelected ? '8' : '7'}
                          fill={
                            isSelected
                              ? '#062C1E'
                              : stock.ticker === 'MWG'
                              ? '#68A18B'
                              : '#047857'
                          }
                          className="pe-point-dot"
                        />

                        {/* Ticker Name Tag */}
                        <text
                          x={cx + 12}
                          y={cy - 8}
                          fill="#0F172A"
                          fontSize="13"
                          fontFamily="var(--font-heading)"
                          fontWeight="700"
                        >
                          {stock.ticker}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Right: Selected Stock Dark Forest Green Card */}
            <div className="pe-side-card">
              <div className="pe-side-card__top">
                <span className="pe-side-card__tag font-mono">
                  SELECTED STOCK
                </span>
                <h3 className="pe-side-card__ticker font-heading">
                  {activeStock.ticker}
                </h3>
                <div className="pe-side-card__subtitle">
                  {activeStock.sector} - {activeStock.role}
                </div>

                <div className="pe-metrics">
                  <div className="pe-metric-row">
                    <span className="pe-metric-label">Monthly avg return</span>
                    <span className="pe-metric-val font-mono">
                      {activeStock.monthlyReturn.toFixed(2)}%
                    </span>
                  </div>
                  <div className="pe-metric-row">
                    <span className="pe-metric-label">Monthly std dev</span>
                    <span className="pe-metric-val font-mono">
                      {activeStock.monthlyStdDev.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>

              <p className="pe-disclaimer">
                Illustrative data based on historical performance. Past performance is
                not a guarantee of future results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerformanceEvaluationTable;
