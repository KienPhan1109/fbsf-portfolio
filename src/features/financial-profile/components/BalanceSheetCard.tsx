import { useInView } from '../../../shared/hooks/useAnimations';
import {
  assets,
  totalAssets,
  liabilities,
  totalLiabilities,
  netWorth,
  formatVND,
} from '../data/profileData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../FinancialProfile.css';

function IconScale() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

function DonutChart() {
  const total = totalAssets;
  const segments = assets.map((a) => ({
    ...a,
    percent: (a.value / total) * 100,
  }));

  const gradientParts: string[] = [];
  let currentAngle = 0;
  segments.forEach((seg) => {
    const endAngle = currentAngle + seg.percent * 3.6;
    gradientParts.push(`${seg.color} ${currentAngle}deg ${endAngle}deg`);
    currentAngle = endAngle;
  });

  return (
    <div
      className="donut-chart"
      style={{
        background: `conic-gradient(${gradientParts.join(', ')})`,
        width: '136px',
        height: '136px',
      }}
    >
      <div className="donut-chart__center" style={{ width: '92px', height: '92px' }}>
        <span className="donut-chart__center-value" style={{ fontSize: '16px', fontWeight: 800 }}>1,4 Tỷ</span>
        <span className="donut-chart__center-label" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tổng TS</span>
      </div>
    </div>
  );
}

export function BalanceSheetCard() {
  const [balanceRef, balanceVisible] = useInView();

  return (
    <section
      className="section"
      id="financial-balance"
      aria-label="Bảng cân đối tài sản"
    >
      <div className="container">
        <div
          className={`fp-balance animate-on-scroll ${balanceVisible ? "is-visible" : ""}`}
          ref={balanceRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                HOUSEHOLD BALANCE SHEET
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Đánh giá toàn diện cơ cấu tài sản, nguồn vốn nợ và xác định giá trị tài sản ròng thực tế của gia đình.
            </p>
          </div>

          <div className="fp-balance__grid">
            {/* Table */}
            <div className="fp-balance__table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th style={{ padding: "10px 16px" }}>Danh mục tài sản & Nợ</th>
                    <th style={{ padding: "10px 16px" }}>Chi tiết phân loại</th>
                    <th style={{ textAlign: "right", padding: "10px 16px" }}>Giá trị (VNĐ)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Assets */}
                  <tr>
                    <td
                      colSpan={2}
                      style={{
                        fontWeight: 700,
                        color: "var(--color-emerald-800)",
                        background: "rgba(16, 185, 129, 0.08)",
                        padding: "8px 16px",
                      }}
                    >
                      I. TỔNG TÀI SẢN
                    </td>
                    <td
                      className="data-table__value data-table__value--positive font-mono"
                      style={{
                        background: "rgba(16, 185, 129, 0.08)",
                        padding: "8px 16px",
                      }}
                    >
                      {formatVND(totalAssets)}
                    </td>
                  </tr>
                  {assets.map((asset) => (
                    <tr key={asset.id}>
                      <td style={{ paddingLeft: "24px", padding: "8px 16px" }}>{asset.name}</td>
                      <td style={{ padding: "8px 16px" }}>{asset.detail}</td>
                      <td className="data-table__value font-mono" style={{ padding: "8px 16px" }}>
                        {formatVND(asset.value)}
                      </td>
                    </tr>
                  ))}

                  {/* Liabilities */}
                  <tr>
                    <td
                      colSpan={2}
                      style={{
                        fontWeight: 700,
                        color: "var(--color-red-600)",
                        background: "rgba(239, 68, 68, 0.06)",
                        padding: "8px 16px",
                      }}
                    >
                      II. TỔNG NỢ PHẢI TRẢ
                    </td>
                    <td
                      className="data-table__value data-table__value--negative font-mono"
                      style={{
                        background: "rgba(239, 68, 68, 0.06)",
                        padding: "8px 16px",
                      }}
                    >
                      {formatVND(totalLiabilities)}
                    </td>
                  </tr>
                  {liabilities.map((liability) => (
                    <tr key={liability.id}>
                      <td style={{ paddingLeft: "24px", padding: "8px 16px" }}>{liability.name}</td>
                      <td style={{ padding: "8px 16px" }}>{liability.detail}</td>
                      <td className="data-table__value font-mono" style={{ padding: "8px 16px" }}>
                        {formatVND(liability.value)}
                      </td>
                    </tr>
                  ))}

                  {/* Net Worth */}
                  <tr className="data-table__total">
                    <td colSpan={2} style={{ padding: "10px 16px" }}>
                      III. TÀI SẢN RÒNG (NET WORTH)
                    </td>
                    <td
                      className="data-table__value data-table__value--positive font-mono"
                      style={{ padding: "10px 16px" }}
                    >
                      {formatVND(netWorth)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Chart */}
            <div className="fp-balance__chart">
              <h4 className="fp-balance__chart-title">Cơ cấu Phân bổ Tài sản</h4>
              <DonutChart />
              <div className="fp-balance__legend">
                {assets.map((asset) => (
                  <div className="fp-balance__legend-item" key={asset.id}>
                    <div className="fp-balance__legend-color" style={{ background: asset.color }} />
                    <span className="fp-balance__legend-label">{asset.name}</span>
                    <span className="fp-balance__legend-value font-mono">
                      {((asset.value / totalAssets) * 100).toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Net Worth Card */}
          <div className="fp-networth">
            <div className="fp-networth__left">
              <div className="fp-networth__icon-wrap">
                <IconScale />
              </div>
              <div>
                <div className="fp-networth__label">
                  Tài sản ròng thực tế (Net Worth)
                </div>
                <div className="fp-networth__sublabel">
                  Tổng tài sản (1,4 tỷ) trừ dư nợ vay ngân hàng (450 triệu)
                </div>
              </div>
            </div>
            <span className="fp-networth__value font-mono">
              {formatVND(netWorth)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BalanceSheetCard;
