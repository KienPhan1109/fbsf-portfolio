import { useState } from 'react';
import { useInView } from '../../../shared/hooks/useAnimations';
import { selectedStocks, type SelectedStock } from '../data/equityData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../EquityScreening.css';

export function SelectedStockAnalysisTable() {
  const [stocksRef, stocksVisible] = useInView();
  const [activeTicker, setActiveTicker] = useState<string>('VCB');

  const activeStock =
    selectedStocks.find((s) => s.ticker === activeTicker) || selectedStocks[0];

  return (
    <section
      className="section sec-selected-stocks"
      id="selected-stocks"
      aria-label="Selected Stock Analysis"
    >
      <div className="container container--wide">
        <div
          ref={stocksRef as React.RefObject<HTMLDivElement>}
          className={`equity-wrapper equity-wrapper--wide animate-on-scroll ${
            stocksVisible ? 'is-visible' : ''
          }`}
        >
          {/* Header matching reference mockup */}
          <div className="ssa-header">
            <div className="ssa-header__title-wrap">
              <h2 className="ssa-title">
                <span className="ssa-title__line1">SELECTED STOCK</span>
                <span className="ssa-title__line2">ANALYSIS</span>
              </h2>
            </div>
            <div className="ssa-header__desc-wrap">
              <p className="ssa-desc">
                Select a ticker to explore its role, investor need and position in the
                risk-return landscape.
              </p>
            </div>
          </div>

          {/* 2-Column Interactive Layout */}
          <div className="ssa-grid">
            {/* Left Column: Interactive Ticker List */}
            <div
              className="ssa-list"
              role="tablist"
              aria-label="Selected stocks list"
            >
              {selectedStocks.map((stock: SelectedStock) => {
                const isActive = stock.ticker === activeStock.ticker;
                return (
                  <button
                    key={stock.ticker}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`ssa-row ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveTicker(stock.ticker)}
                  >
                    <span className="ssa-col ssa-col--ticker font-heading">
                      {stock.ticker}
                    </span>
                    <span className="ssa-col ssa-col--sector">
                      {stock.sector}
                    </span>
                    <span className="ssa-col ssa-col--role">
                      {stock.role}
                    </span>
                    <span className="ssa-col ssa-col--arrow" aria-hidden="true">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Investment Profile Card */}
            <div className="ssa-profile-card">
              <div className="ssa-profile-card__header">
                <span className="ssa-profile-card__tag font-mono">
                  INVESTMENT PROFILE
                </span>
                <span className="ssa-profile-card__dot" aria-hidden="true" />
              </div>
              <div
                key={activeStock.ticker}
                className="ssa-profile-card__content ssa-profile-card__content--animated"
              >
                <h3 className="ssa-profile-card__ticker font-heading">
                  {activeStock.ticker}
                </h3>
                <div className="ssa-profile-card__role font-serif">
                  {activeStock.role}
                </div>
                <p className="ssa-profile-card__desc">
                  {activeStock.clientNeedsMet}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedStockAnalysisTable;
