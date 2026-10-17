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
              Xác lập hệ số ngại rủi ro A = 5.07 theo chuẩn GSOEP 2025 và ứng dụng hàm hữu dụng Mean-Variance trong tối ưu hóa danh mục.
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
                  Phân loại tham số ngại rủi ro chuẩn hóa theo khảo sát kinh tế xã hội Đức
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
                              Điểm 4/10 (Anh Nam)
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
                Nguồn trích dẫn: <em>Hochmuth, Merz, & Prettensthaler (2025)</em>, based on GSOEP.
              </div>
            </div>

            {/* Right Column: Utility Function & Narrative Analysis */}
            <div className="ra-academic-card">
              <div className="ra-academic-card__header">
                <h3 className="ra-academic-card__title">
                  Hàm Hữu Dụng & Đánh Giá Danh Mục
                </h3>
                <p className="ra-academic-card__subtitle">
                  Tham số đầu vào cho thuật toán tối ưu hóa Mean-Variance Markowitz MPT
                </p>
              </div>

              {/* Clean Academic Math Box */}
              <div className="ra-math-card">
                <div className="ra-math-card__label">Hàm hữu dụng nhà đầu tư (Utility Function):</div>
                <div className="ra-math-card__equation font-mono">
                  U = E(r) - ½ · A · σ²
                </div>
                <div className="ra-math-card__meta font-mono">
                  Hệ số ngại rủi ro chuẩn hóa: <strong>A = 5.07</strong>
                </div>
              </div>

              {/* Editorial Professional Financial Commentary */}
              <div className="ra-academic-editorial">
                <p>
                  <strong>1. Phân vị khảo sát:</strong> Điểm sẵn sàng chịu rủi ro <strong>4/10</strong> của Anh Nam xếp gia đình vào nhóm <strong>[4–6)</strong> — nhóm phổ biến nhất (53% mẫu dữ liệu toàn cầu), tương ứng hệ số CRRA là <strong>A = 5.07</strong>.
                </p>
                <p>
                  <strong>2. Khẩu vị đầu tư:</strong> Gia đình đặt trọng tâm hàng đầu vào việc bảo toàn tài sản và kiểm soát phương sai rủi ro (σ²), nhưng hoàn toàn sẵn sàng đón nhận mức độ biến động hợp lý để tối ưu hóa tỷ suất sinh lời dài hạn.
                </p>
                <p>
                  <strong>3. Tham số mô hình Markowitz:</strong> Hệ số <strong>A = 5.07</strong> đóng vai trò là trọng số đánh đổi rủi ro cốt lõi để nạp vào mô hình Efficient Frontier ở bước tiếp theo, nhằm thiết lập danh mục tối ưu giúp gia đình đạt được mục tiêu mua nhà 3.9 tỷ và xe 800 triệu.
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
