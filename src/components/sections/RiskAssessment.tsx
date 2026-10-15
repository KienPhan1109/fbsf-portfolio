import { useState } from 'react';
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
function IconChevron({ isExpanded }: { isExpanded: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
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

  // Accordion state
  const [expandedIds, setExpandedIds] = useState<number[]>([1]);

  const toggleQuestion = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedIds(surveyQuestions.map((q) => q.id));
  };

  const collapseAll = () => {
    setExpandedIds([]);
  };

  const isAllExpanded = expandedIds.length === surveyQuestions.length;

  // Split into 2 clean columns
  const col1Questions = surveyQuestions.slice(0, 5);
  const col2Questions = surveyQuestions.slice(5, 10);

  return (
    <>
      {/* ============================================================
          SECTION 4A: KHẢO SÁT KHẨU VỊ RỦI RO (Risk Survey)
          Clean, document-style questionnaire layout
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
                Phiếu khảo sát 10 câu hỏi đo lường hành vi tài chính và mức độ chấp nhận biến động danh mục.
              </p>
            </div>

            {/* Sub-header Controls */}
            <div className="ra-survey-header-row">
              <span className="ra-survey-meta">
                Bảng câu hỏi khảo sát thực tế • <strong className="font-mono">10 / 10 câu hỏi</strong>
              </span>
              <button
                type="button"
                className="ra-btn-link"
                onClick={isAllExpanded ? collapseAll : expandAll}
              >
                {isAllExpanded ? 'Thu gọn tất cả' : 'Mở rộng tất cả'}
              </button>
            </div>

            {/* 2-Column Clean Questions Grid */}
            <div className="ra-survey-grid">
              {/* Column 1: Questions 1 to 5 */}
              <div className="ra-survey-column">
                {col1Questions.map((q) => {
                  const isExpanded = expandedIds.includes(q.id);

                  return (
                    <div
                      key={q.id}
                      className={`ra-question-item ${isExpanded ? 'is-open' : ''}`}
                    >
                      <button
                        type="button"
                        className="ra-question-summary"
                        onClick={() => toggleQuestion(q.id)}
                        aria-expanded={isExpanded}
                      >
                        <div className="ra-question-info">
                          <span className="ra-question-idx font-mono">
                            {q.id < 10 ? `0${q.id}` : q.id}
                          </span>
                          <span className="ra-question-title">{q.question}</span>
                        </div>
                        <div className="ra-question-action">
                          <span className="ra-choice-pill font-mono">
                            Đáp án {q.selectedKey} ({q.selectedPoints}đ)
                          </span>
                          <span className="ra-chevron-icon">
                            <IconChevron isExpanded={isExpanded} />
                          </span>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="ra-question-detail">
                          <div className="ra-choices-stack">
                            {q.options.map((opt) => {
                              const isSelected = opt.key === q.selectedKey;
                              return (
                                <div
                                  key={opt.key}
                                  className={`ra-choice-row ${isSelected ? 'is-selected' : ''}`}
                                >
                                  <div className="ra-choice-content">
                                    <span className="ra-choice-key font-mono">{opt.key}</span>
                                    <span className="ra-choice-text">{opt.text}</span>
                                  </div>
                                  <div className="ra-choice-meta">
                                    <span className="ra-choice-pts font-mono">{opt.points}đ</span>
                                    {isSelected && (
                                      <span className="ra-choice-check" title="Khách hàng đã chọn">
                                        <IconCheck />
                                      </span>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Column 2: Questions 6 to 10 */}
              <div className="ra-survey-column">
                {col2Questions.map((q) => {
                  const isExpanded = expandedIds.includes(q.id);

                  return (
                    <div
                      key={q.id}
                      className={`ra-question-item ${isExpanded ? 'is-open' : ''}`}
                    >
                      <button
                        type="button"
                        className="ra-question-summary"
                        onClick={() => toggleQuestion(q.id)}
                        aria-expanded={isExpanded}
                      >
                        <div className="ra-question-info">
                          <span className="ra-question-idx font-mono">
                            {q.id < 10 ? `0${q.id}` : q.id}
                          </span>
                          <span className="ra-question-title">{q.question}</span>
                        </div>
                        <div className="ra-question-action">
                          <span className="ra-choice-pill font-mono">
                            Đáp án {q.selectedKey} ({q.selectedPoints}đ)
                          </span>
                          <span className="ra-chevron-icon">
                            <IconChevron isExpanded={isExpanded} />
                          </span>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="ra-question-detail">
                          <div className="ra-choices-stack">
                            {q.options.map((opt) => {
                              const isSelected = opt.key === q.selectedKey;
                              return (
                                <div
                                  key={opt.key}
                                  className={`ra-choice-row ${isSelected ? 'is-selected' : ''}`}
                                >
                                  <div className="ra-choice-content">
                                    <span className="ra-choice-key font-mono">{opt.key}</span>
                                    <span className="ra-choice-text">{opt.text}</span>
                                  </div>
                                  <div className="ra-choice-meta">
                                    <span className="ra-choice-pts font-mono">{opt.points}đ</span>
                                    {isSelected && (
                                      <span className="ra-choice-check" title="Khách hàng đã chọn">
                                        <IconCheck />
                                      </span>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
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
