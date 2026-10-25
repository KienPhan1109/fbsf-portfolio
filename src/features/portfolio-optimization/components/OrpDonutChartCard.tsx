import { useState, useMemo } from 'react';
import { useInView } from '../../../shared/hooks/useAnimations';
import {
  orpStockAllocations,
  completePortfolioTable,
  type CompletePortfolioItem,
} from '../data/markowitzData';
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

export function OrpDonutChartCard() {
  const [orpRef, orpVisible] = useInView();
  const [hoveredTicker, setHoveredTicker] = useState<string | null>(null);

  const totalWeight = useMemo(
    () => orpStockAllocations.reduce((sum, item) => sum + item.weightOrp, 0),
    []
  );

  const sectors = useMemo(() => {
    const gap = 0.025;
    return orpStockAllocations.map((item, index) => {
      const prevSpan = orpStockAllocations
        .slice(0, index)
        .reduce((sum, prev) => sum + (prev.weightOrp / totalWeight) * 2 * Math.PI, 0);

      const startAngle = -Math.PI / 2 + prevSpan + gap / 2;
      const angleSpan = (item.weightOrp / totalWeight) * 2 * Math.PI;
      const endAngle = startAngle + angleSpan - gap;

      return {
        ...item,
        path: getSectorPath(140, 140, 126, 78, startAngle, endAngle),
      };
    });
  }, [totalWeight]);

  return (
    <section
      className="section sec-orp"
      id="markowitz"
      aria-label="Optimal Risky Portfolio"
    >
      <div className="container container--wide">
        <div
          ref={orpRef as React.RefObject<HTMLDivElement>}
          className={`markowitz-wrapper animate-on-scroll ${
            orpVisible ? 'is-visible' : ''
          }`}
        >
          {/* Header matching reference mockup with (ORP) appended */}
          <div className="orp-header">
            <div className="orp-header__title-wrap">
              <h2 className="orp-title">
                <span className="orp-title__line1">OPTIMAL RISKY</span>
                <span className="orp-title__line2">PORTFOLIO (ORP)</span>
              </h2>
            </div>
            <div className="orp-header__desc-wrap">
        
              <p className="orp-desc">
                Optimized asset weights based on expected returns and risk characteristics.
              </p>
            </div>
          </div>

          {/* 2-Column Main Container */}
          <div className="orp-main-container">
            {/* Left: Donut Chart Pane */}
            <div className="orp-chart-pane">
              <div className="orp-donut-wrapper">
                <svg
                  viewBox="0 0 280 280"
                  className="orp-svg"
                  role="img"
                  aria-label="Optimal Risky Portfolio Donut Chart"
                >
                  {sectors.map((sector) => {
                    const isHovered = hoveredTicker === sector.ticker;
                    return (
                      <path
                        key={sector.ticker}
                        d={sector.path}
                        fill={sector.color}
                        className={`orp-sector-slice ${isHovered ? 'is-hovered' : ''}`}
                        onMouseEnter={() => setHoveredTicker(sector.ticker)}
                        onMouseLeave={() => setHoveredTicker(null)}
                      />
                    );
                  })}

                  {/* Donut Center */}
                  <text
                    x="140"
                    y="135"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontFamily="var(--font-heading)"
                    fontWeight="800"
                    fontSize="36"
                  >
                    100%
                  </text>
                  <text
                    x="140"
                    y="158"
                    textAnchor="middle"
                    fill="rgba(255, 255, 255, 0.7)"
                    fontFamily="var(--font-mono)"
                    fontWeight="600"
                    fontSize="12"
                    letterSpacing="0.08em"
                  >
                    ORP
                  </text>
                </svg>
              </div>
            </div>

            {/* Right: Asset Allocation Table */}
            <div className="orp-table-pane">
              <table className="orp-v2-table">
                <thead>
                  <tr>
                    <th style={{ width: '46%' }}>ASSET</th>
                    <th style={{ width: '27%', textAlign: 'center' }}>
                      WEIGHT IN ORP
                    </th>
                    <th style={{ width: '27%', textAlign: 'right' }}>
                      WEIGHT IN TOTAL ASSETS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {completePortfolioTable.map(
                    (row: CompletePortfolioItem, idx: number) => {
                      const stockAllocation = orpStockAllocations.find(
                        (s) => s.ticker === row.name
                      );
                      const isSpecial = row.isRiskFree || row.isTotal;
                      const isHovered = hoveredTicker === row.name;

                      return (
                        <tr
                          key={idx}
                          className={`orp-v2-tr ${
                            row.isTotal ? 'orp-v2-tr--total' : ''
                          } ${row.isRiskFree ? 'orp-v2-tr--rf' : ''} ${
                            isHovered ? 'is-hovered' : ''
                          } ${stockAllocation ? 'orp-v2-tr--stock' : ''}`}
                          onMouseEnter={() =>
                            stockAllocation && setHoveredTicker(row.name)
                          }
                          onMouseLeave={() =>
                            stockAllocation && setHoveredTicker(null)
                          }
                        >
                          <td className="orp-v2-td-name">
                            {stockAllocation ? (
                              <div className="orp-table-stock-cell">
                                <span
                                  className="orp-table-swatch"
                                  style={{
                                    backgroundColor: stockAllocation.color,
                                  }}
                                />
                                <span className="orp-stock-name font-heading">
                                  {row.name}
                                </span>
                              </div>
                            ) : (
                              <span
                                className={
                                  !isSpecial ? 'font-heading font-bold' : ''
                                }
                              >
                                {row.name}
                              </span>
                            )}
                          </td>
                          <td
                            className={`orp-v2-td-orp font-mono ${
                              stockAllocation ? 'orp-v2-td-orp--prominent' : ''
                            }`}
                            style={{ textAlign: 'center' }}
                          >
                            {stockAllocation ? (
                              <span className="orp-weight-chip font-heading font-mono">
                                {row.weightOrp}
                              </span>
                            ) : (
                              row.weightOrp
                            )}
                          </td>
                          <td
                            className={`orp-v2-td-total font-mono ${
                              stockAllocation ? 'orp-v2-td-total--prominent' : ''
                            }`}
                            style={{ textAlign: 'right' }}
                          >
                            {row.weightTotal}
                          </td>
                        </tr>
                      );
                    }
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

export default OrpDonutChartCard;
