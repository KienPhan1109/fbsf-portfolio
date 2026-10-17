import { useInView } from '../../../shared/hooks/useAnimations';
import { surveyQuestions, totalScore, maxScore } from '../data/riskData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../RiskAssessment.css';

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

export function RiskSurveyQuestionnaire() {
  const [surveyRef, surveyVisible] = useInView();
  const col1Questions = surveyQuestions.slice(0, 5);
  const col2Questions = surveyQuestions.slice(5, 10);

  return (
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

          <div className="ra-survey-header-row">
            <span className="ra-survey-meta">
              Biên bản khảo sát thực tế • <strong className="font-mono">10 / 10 câu hỏi & câu trả lời</strong>
            </span>
            <div className="ra-survey-badge font-mono">
              <span className="ra-survey-badge-dot" />
              <span>Tổng điểm khảo sát: <strong>{totalScore} / {maxScore} điểm</strong></span>
            </div>
          </div>

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
                      <span className="ra-qa-answer-icon"><IconCheckCircle /></span>
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
                      <span className="ra-qa-answer-icon"><IconCheckCircle /></span>
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
  );
}

export default RiskSurveyQuestionnaire;
