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
      aria-label="Risk Tolerance Questionnaire"
    >
      <div className="container container--wide">
        <div
          className={`ra-wrapper animate-on-scroll ${surveyVisible ? 'is-visible' : ''}`}
          ref={surveyRef as React.RefObject<HTMLDivElement>}
        >
          {/* Section Heading */}
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                RISK TOLERANCE QUESTIONNAIRE
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Comprehensive 10-question risk profiling questionnaire evaluating client risk tolerance, loss appetite, and investment behavior.
            </p>
          </div>

          {/* Dossier Summary Bar */}
          <div className="ra-dossier-bar">
            <div className="ra-dossier-left">
              <span className="ra-dossier-tag font-mono">
                OFFICIAL SURVEY RECORD · GSOEP 2025 COMPLIANT
              </span>
              <div className="ra-dossier-client">
                Respondent: <strong>Mr. Nam</strong>
                <span className="ra-dossier-meta">
                  {' '}· Primary Earner (Age 41) · 10/10 Questions Completed
                </span>
              </div>
            </div>

            <div className="ra-dossier-right">
              <div className="ra-dossier-score-wrap">
                <span className="ra-dossier-score-label font-mono">SURVEY SCORE</span>
                <div className="ra-dossier-score font-mono">
                  <span className="ra-dossier-score-val">{totalScore}</span>
                  <span className="ra-dossier-score-max">/{maxScore}</span>
                  <span className="ra-dossier-score-pct">
                    ({((totalScore / maxScore) * 100).toFixed(0)}%)
                  </span>
                </div>
              </div>
              <div className="ra-dossier-class-badge font-mono">
                MODERATE
              </div>
            </div>
          </div>

          {/* 10-Question Matrix Grid: 2 Columns */}
          <div className="ra-matrix-grid">
            {/* Column 1: Questions 01 - 05 */}
            <div className="ra-matrix-col">
              {col1Questions.map((q) => (
                <div key={q.id} className="ra-matrix-card">
                  <div className="ra-matrix-card__top">
                    <div className="ra-matrix-card__idx-wrap">
                      <span className="ra-matrix-card__idx font-mono">
                        {q.id < 10 ? `0${q.id}` : q.id}
                      </span>
                      <span className="ra-matrix-card__tag font-mono">
                        QUESTION {q.id < 10 ? `0${q.id}` : q.id}
                      </span>
                    </div>
                    <div className="ra-matrix-card__points font-mono">
                      +{q.points} PTS
                    </div>
                  </div>

                  <h4 className="ra-matrix-card__question">{q.question}</h4>

                  <div className="ra-matrix-card__answer-box">
                    <div className="ra-matrix-card__answer-header">
                      <div className="ra-matrix-card__answer-badge">
                        <IconCheckCircle />
                        <span>RECORDED ANSWER</span>
                      </div>
                      <span className="ra-matrix-card__opt-badge font-mono">
                        OPTION {q.optionKey}
                      </span>
                    </div>
                    <p className="ra-matrix-card__answer-text">{q.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2: Questions 06 - 10 */}
            <div className="ra-matrix-col">
              {col2Questions.map((q) => (
                <div key={q.id} className="ra-matrix-card">
                  <div className="ra-matrix-card__top">
                    <div className="ra-matrix-card__idx-wrap">
                      <span className="ra-matrix-card__idx font-mono">
                        {q.id < 10 ? `0${q.id}` : q.id}
                      </span>
                      <span className="ra-matrix-card__tag font-mono">
                        QUESTION {q.id < 10 ? `0${q.id}` : q.id}
                      </span>
                    </div>
                    <div className="ra-matrix-card__points font-mono">
                      +{q.points} PTS
                    </div>
                  </div>

                  <h4 className="ra-matrix-card__question">{q.question}</h4>

                  <div className="ra-matrix-card__answer-box">
                    <div className="ra-matrix-card__answer-header">
                      <div className="ra-matrix-card__answer-badge">
                        <IconCheckCircle />
                        <span>RECORDED ANSWER</span>
                      </div>
                      <span className="ra-matrix-card__opt-badge font-mono">
                        OPTION {q.optionKey}
                      </span>
                    </div>
                    <p className="ra-matrix-card__answer-text">{q.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Transition / Synthesis Banner */}
          <div className="ra-survey-footer-strip">
            <div className="ra-sfs-left">
              <span className="ra-sfs-label font-mono">EMPIRICAL SYNTHESIS</span>
              <p className="ra-sfs-desc">
                The household’s normalized score of <strong>{totalScore}/{maxScore} ({((totalScore / maxScore) * 100).toFixed(0)}%)</strong> establishes a <strong>Moderate Risk Tolerance</strong> baseline, prioritizing capital preservation with calculated risk exposure for subsequent asset allocation modeling.
              </p>
            </div>
            <div className="ra-sfs-right font-mono">
              <span className="ra-sfs-stat-label">ASSESSMENT OUTCOME</span>
              <span className="ra-sfs-stat-val">MODERATE (SCORE {totalScore})</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RiskSurveyQuestionnaire;
