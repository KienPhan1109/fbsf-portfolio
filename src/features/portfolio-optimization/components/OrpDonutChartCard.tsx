import { useState, useMemo } from 'react';
import { useInView } from '../../../shared/hooks/useAnimations';
import {
  orpSelectedStocks,
  orpStockAllocations,
  completePortfolioTable,
  type OrpStock,
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
    const gap = 0.04;
    return orpStockAllocations.map((item, index) => {
      const prevSpan = orpStockAllocations
        .slice(0, index)
        .reduce((sum, prev) => sum + (prev.weightOrp / totalWeight) * 2 * Math.PI, 0);

      const startAngle = -Math.PI / 2 + prevSpan + gap / 2;
      const angleSpan = (item.weightOrp / totalWeight) * 2 * Math.PI;
      const endAngle = startAngle + angleSpan - gap;

      return {
        ...item,
        path: getSectorPath(120, 120, 100, 68, startAngle, endAngle),
      };
    });
  }, [totalWeight]);

  const activeStock = orpStockAllocations.find(
    (s) => s.ticker === hoveredTicker
  );

  return (
    <section
      className="section sec-markowitz"
      id="markowitz"
      aria-label="Optimal Risky Portfolio"
    >
      <div className="container">
        <div
          ref={orpRef as React.RefObject<HTMLDivElement>}
          className={`markowitz-wrapper animate-on-scroll ${orpVisible ? 'is-visible' : ''}`}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                OPTIMAL RISKY PORTFOLIO
              </span>
            </h2>
          </div>

          <div className="orp-concept-card">
            <h3 className="orp-concept-card__title">
              Optimal Risky Portfolio
            </h3>
            <div className="orp-concept-card__label">Selected Stocks</div>

            <div className="orp-concept-card__badges">
              {orpSelectedStocks.map((ticker) => (
                <span key={ticker} className="orp-concept-badge font-mono">
                  {ticker}
                </span>
              ))}
            </div>

            <p className="orp-concept-card__desc">
              Optimized asset weights based on expected returns and risk characteristics.
            </p>
          </div>

          <div className="orp-grid">
            <div className="orp-panel orp-panel--chart">
              <div className="orp-panel__header">
                <h4 className="orp-panel__title">Optimal Risky Portfolio Allocation</h4>
              </div>

              <div className="orp-chart-box">
                <div className="orp-svg-wrap">
                  <svg
                    viewBox="0 0 240 240"
                    className="orp-svg"
                    role="img"
                    aria-label="ORP Stock Allocation Donut Chart"
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
                  </svg>

                  <div className="orp-donut-center">
                    {activeStock ? (
                      <>
                        <span
                          className="orp-center-val font-mono"
                          style={{ color: activeStock.color }}
                        >
                          {activeStock.weightOrp}%
                        </span>
                        <span className="orp-center-sub font-mono">
                          {activeStock.ticker}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="orp-center-val font-mono">100%</span>
                        <span className="orp-center-sub font-mono">ORP</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="orp-legend">
                  {orpStockAllocations.map((item: OrpStock) => {
                    const isHovered = hoveredTicker === item.ticker;
                    return (
                      <button
                        type="button"
                        key={item.ticker}
                        className={`orp-legend-item ${isHovered ? 'is-active' : ''}`}
                        onMouseEnter={() => setHoveredTicker(item.ticker)}
                        onMouseLeave={() => setHoveredTicker(null)}
                      >
                        <span
                          className="orp-legend-dot"
                          style={{ backgroundColor: item.color }}
                        />
                        <strong className="orp-legend-ticker font-mono">
                          {item.ticker}
                        </strong>
                        <span className="orp-legend-pct font-mono">
                          {item.weightOrp}%
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="orp-panel orp-panel--table">
              <div className="orp-panel__header">
                <h4 className="orp-panel__title">Optimal Asset Allocation</h4>
              </div>

              <div className="orp-table-wrap">
                <table className="orp-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40%' }}>Ticker</th>
                      <th style={{ width: '30%', textAlign: 'center' }}>
                        Weight in ORP
                      </th>
                      <th style={{ width: '30%', textAlign: 'right' }}>
                        Weight in Total Assets
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {completePortfolioTable.map(
                      (row: CompletePortfolioItem, idx: number) => (
                        <tr
                          key={idx}
                          className={`orp-tr ${row.isTotal ? 'orp-tr--total' : ''} ${row.isRiskFree ? 'orp-tr--rf' : ''}`}
                        >
                          <td className="orp-td-name">
                            <strong
                              className={
                                !row.isRiskFree && !row.isTotal
                                  ? 'font-mono'
                                  : ''
                              }
                            >
                              {row.name}
                            </strong>
                          </td>
                          <td
                            className="orp-td-orp font-mono"
                            style={{ textAlign: 'center' }}
                          >
                            {row.weightOrp}
                          </td>
                          <td
                            className={`orp-td-total font-mono ${row.isTotal ? 'orp-td-total--highlight' : ''}`}
                            style={{ textAlign: 'right' }}
                          >
                            {row.weightTotal}
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
      </div>
    </section>
  );
}

export default OrpDonutChartCard;
