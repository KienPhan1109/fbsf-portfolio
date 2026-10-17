import { useInView } from '../../hooks/useAnimations';
import {
  surveyQuestions,
  totalScore,
  maxScore,
  riskClassifications,
  gsoepData,
} from '../../data/riskData';
import '../ui/ui.css';
import './SystemWorkflow.css';
import './RiskAssessment.css';

/* ============================================================
   CLEAN MONOLINE SVG ICONS (Minimalist, 1.75px stroke)
   ============================================================ */
function IconCheckCircle() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

/* ============================================================
   RISK ASSESSMENT: 3 REFINED, MINIMALIST SECTIONS (4A, 4B, 4C)
   ============================================================ */
export default function RiskAssessment() {
  const [surveyRef, surveyVisible] = useInView();
  const [scoreRef, scoreVisible] = useInView();
  const [modelRef, modelVisible] = useInView();

  // Split into 2 clean columns
  const col1Questions = surveyQuestions.slice(0, 5);
  const col2Questions = surveyQuestions.slice(5, 10);

  return (
    <>
      {/* ============================================================
          SECTION 4A: KHẢO SÁT KHẨU VỊ RỦI RO (Risk Survey)
          Clean, direct Question & Answer layout with points preserved
          ============================================================ */}
      <section
        className="section ra-section"
        id="risk-assessment"
        aria-label="Phiếu khảo sát khả năng chấp nhận rủi ro"
      >
        <div className="container container--wide">
          <div
            className={`ra-wrapper animate-on-scroll ${surveyVisible ? 'is-visible' : ''}`}
            ref={surveyRef as React.RefObject<HTMLDivElement>}
          >
            {/* Standardized Section Heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  RISK TOLERANCE QUESTIONNAIRE
                </span>
              </h2>
              <p className="sw-heading__subtitle">
                Phiếu khảo sát 10 câu hỏi & câu trả lời thực tế đo lường khẩu vị rủi ro và hành vi tài chính của khách hàng.
              </p>
            </div>

            {/* Sub-header Summary Row */}
            <div className="ra-survey-header-row">
              <span className="ra-survey-meta">
                Biên bản khảo sát thực tế • <strong className="font-mono">10 / 10 câu hỏi & câu trả lời</strong>
              </span>
              <div className="ra-survey-badge font-mono">
                <span className="ra-survey-badge-dot" />
                <span>Tổng điểm khảo sát: <strong>{totalScore} / {maxScore} điểm</strong></span>
              </div>
            </div>

            {/* 2-Column Clean Questions Grid */}
            <div className="ra-qa-grid">
              {/* Column 1: Questions 1 to 5 */}
              <div className="ra-qa-column">
                {col1Questions.map((q) => (
                  <div key={q.id} className="ra-qa-card">
                    <div className="ra-qa-header">
                      <div className="ra-qa-idx-wrap">
                        <span className="ra-qa-idx font-mono">
                          {q.id < 10 ? `0${q.id}` : q.id}
                        </span>
                        <span className="ra-qa-tag">Câu hỏi {q.id}</span>
                      </div>
                      <div className="ra-qa-points font-mono">
                        <span>+{q.points} điểm</span>
                      </div>
                    </div>

                    <h4 className="ra-qa-question">{q.question}</h4>

                    <div className="ra-qa-answer-box">
                      <div className="ra-qa-answer-meta">
                        <span className="ra-qa-answer-icon">
                          <IconCheckCircle />
                        </span>
                        <span>Câu trả lời ghi nhận</span>
                        <span className="ra-qa-option-badge font-mono">Đáp án {q.optionKey}</span>
                      </div>
                      <p className="ra-qa-answer-text">{q.answer}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2: Questions 6 to 10 */}
              <div className="ra-qa-column">
                {col2Questions.map((q) => (
                  <div key={q.id} className="ra-qa-card">
                    <div className="ra-qa-header">
                      <div className="ra-qa-idx-wrap">
                        <span className="ra-qa-idx font-mono">
                          {q.id < 10 ? `0${q.id}` : q.id}
                        </span>
                        <span className="ra-qa-tag">Câu hỏi {q.id}</span>
                      </div>
                      <div className="ra-qa-points font-mono">
                        <span>+{q.points} điểm</span>
                      </div>
                    </div>

                    <h4 className="ra-qa-question">{q.question}</h4>

                    <div className="ra-qa-answer-box">
                      <div className="ra-qa-answer-meta">
                        <span className="ra-qa-answer-icon">
                          <IconCheckCircle />
                        </span>
                        <span>Câu trả lời ghi nhận</span>
                        <span className="ra-qa-option-badge font-mono">Đáp án {q.optionKey}</span>
                      </div>
                      <p className="ra-qa-answer-text">{q.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4B: KẾT QUẢ ĐIỂM SỐ & PHÂN LOẠI (Risk Score)
          Simple, dignified private wealth score summary
          ============================================================ */}
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
            {/* Standardized Section Heading */}
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

            {/* Score Result Hero Card */}
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

              {/* Refined Minimalist Scale Line */}
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

                {/* 3 Range Clarifications */}
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

      {/* ============================================================
          SECTION 4C: HỆ SỐ NGẠI RỦI RO & HÀM THỎA DỤNG (Table 2.2 & Model)
          Clean academic table & dignified utility function analysis
          ============================================================ */}
      <section
        className="section ra-section"
        id="risk-coefficient"
        aria-label="Hệ số ngại rủi ro và hàm thỏa dụng Markowitz"
      >
        <div className="container container--wide">
          <div
            className={`ra-wrapper animate-on-scroll ${modelVisible ? 'is-visible' : ''}`}
            ref={modelRef as React.RefObject<HTMLDivElement>}
          >
            {/* Standardized Section Heading */}
            <div className="section-heading sw-heading">
              <h2 className="sw-heading__title">
                <span className="sw-heading__title-highlight">
                  CRRA RISK AVERSION & UTILITY MODEL
                </span>
              </h2>
              <p className="sw-heading__subtitle">
                Xác lập hệ số ngại rủi ro A = 5.07 theo chuẩn GSOEP 2025 và ứng dụng hàm thỏa dụng Mean-Variance trong tối ưu hóa danh mục.
              </p>
            </div>

            {/* 2 Balanced Institutional Cards */}
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
                    Hàm Thỏa Dụng & Đánh Giá Danh Mục
                  </h3>
                  <p className="ra-academic-card__subtitle">
                    Tham số đầu vào cho thuật toán tối ưu hóa Mean-Variance Markowitz MPT
                  </p>
                </div>

                {/* Clean Academic Math Box */}
                <div className="ra-math-card">
                  <div className="ra-math-card__label">Hàm thỏa dụng nhà đầu tư (Utility Function):</div>
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
    </>
  );
}
