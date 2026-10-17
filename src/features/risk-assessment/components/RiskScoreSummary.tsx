import { useInView } from '../../../shared/hooks/useAnimations';
import { totalScore, maxScore, riskClassifications } from '../data/riskData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../RiskAssessment.css';

export function RiskScoreSummary() {
  const [scoreRef, scoreVisible] = useInView();

  return (
    <section
      className="section section--alt ra-section"
      id="risk-score"
      aria-label="Kết quả điểm số và phân loại khẩu vị rủi ro"
    >
      <div className="container container--wide">
        <div
          className={`ra-wrapper animate-on-scroll ${scoreVisible ? 'is-visible' : ''}`}
          ref={scoreRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                RISK PROFILE CLASSIFICATION
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Tổng hợp kết quả định lượng và xác định cấp độ chấp nhận rủi ro trên thang đo chuẩn hóa.
            </p>
          </div>

          <div className="ra-score-card">
            <div className="ra-score-card__top">
              <div className="ra-score-card__primary">
                <span className="ra-score-card__caption">Tổng điểm khảo sát</span>
                <div className="ra-score-card__value font-mono">
                  <span className="ra-score-card__num">{totalScore}</span>
                  <span className="ra-score-card__denom">/ {maxScore}</span>
                </div>
                <span className="ra-score-card__formula font-mono">
                  2 + 2 + 3 + 2 + 3 + 3 + 3 + 2 + 3 + 3 = 26 điểm (65%)
                </span>
              </div>

              <div className="ra-score-card__divider" />

              <div className="ra-score-card__profile">
                <span className="ra-score-card__caption">Phân loại khẩu vị</span>
                <div className="ra-score-card__badge-text">
                  Rủi ro Trung bình
                </div>
                <p className="ra-score-card__sub-desc">
                  Thuộc khung điểm <strong>18 – 27 điểm</strong>. Ưu tiên cân bằng giữa tăng trưởng vốn dài hạn và kiểm soát biến động danh mục.
                </p>
              </div>
            </div>

            <div className="ra-scale-container">
              <div className="ra-scale-bar">
                <div className="ra-scale-segment ra-scale-segment--low">
                  <span>Thấp (10–17đ)</span>
                </div>
                <div className="ra-scale-segment ra-scale-segment--mid">
                  <span className="ra-scale-segment__active-text">Trung bình (18–27đ)</span>
                  <div className="ra-scale-marker" title="Điểm của Anh Nam: 26đ">
                    <div className="ra-scale-marker__line" />
                    <span className="ra-scale-marker__label font-mono">26đ</span>
                  </div>
                </div>
                <div className="ra-scale-segment ra-scale-segment--high">
                  <span>Cao (28–40đ)</span>
                </div>
              </div>

              <div className="ra-scale-legend">
                {riskClassifications.map((item, idx) => {
                  const isSelected = idx === 1;
                  return (
                    <div
                      key={idx}
                      className={`ra-scale-legend-item ${isSelected ? 'is-selected' : ''}`}
                    >
                      <div className="ra-scale-legend-title">
                        <span className="ra-scale-legend-dot" />
                        <strong>{item.level}</strong>
                        <span className="font-mono">({item.range})</span>
                      </div>
                      <p className="ra-scale-legend-desc">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RiskScoreSummary;
