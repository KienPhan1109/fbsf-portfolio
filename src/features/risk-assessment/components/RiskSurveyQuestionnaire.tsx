import { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useInView } from '../../../shared/hooks/useAnimations';
import { surveyQuestions, totalScore, maxScore } from '../data/riskData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../RiskAssessment.css';

export function RiskSurveyQuestionnaire() {
  const [surveyRef, surveyVisible] = useInView();

  // By default, all questions are closed as requested by the user
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(
    () => new Set<number>()
  );

  const toggleQuestion = (id: number) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section
      className="section ra-section"
      id="risk-assessment"
      aria-label="Risk Tolerance Questionnaire & Assessment Result"
    >
      <div className="container container--wide">
        <div
          className={`ra-wrapper animate-on-scroll ${surveyVisible ? 'is-visible' : ''}`}
          ref={surveyRef as React.RefObject<HTMLDivElement>}
        >
          {/* Section Heading */}
          <div className="section-heading sw-heading text-left">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                RISK TOLERANCE QUESTIONNAIRE
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Comprehensive 10-question risk profiling questionnaire evaluating client risk tolerance, loss appetite, and investment behavior.
            </p>
          </div>

          {/* 2-Column Split: Questions on Left + Assessment Result Card on Right */}
          <div className="ra-quiz-layout">
            {/* Left Column: 10 Survey Questions */}
            <div className="ra-quiz-list" role="list">
              {surveyQuestions.map((q) => {
                const isOpen = openQuestions.has(q.id);
                const qNum = q.id < 10 ? `0${q.id}` : `${q.id}`;

                return (
                  <div
                    key={q.id}
                    className={`ra-quiz-item ${isOpen ? 'is-open' : ''}`}
                    role="listitem"
                  >
                    <button
                      type="button"
                      className="ra-quiz-item__header"
                      onClick={() => toggleQuestion(q.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="ra-quiz-item__title-wrap">
                        <span className="ra-quiz-item__num font-mono">{qNum}</span>
                        <span className="ra-quiz-item__question">{q.question}</span>
                      </div>
                      <div className="ra-quiz-item__meta">
                        <span className="ra-quiz-item__points font-mono">{q.points} pts</span>
                        <span className="ra-quiz-item__toggle" aria-hidden="true">
                          {isOpen ? <MinusOutlined /> : <PlusOutlined />}
                        </span>
                      </div>
                    </button>

                    {/* Smooth Gradual Collapse Animation */}
                    <div className="ra-quiz-item__collapse" aria-hidden={!isOpen}>
                      <div className="ra-quiz-item__collapse-inner">
                        <div className="ra-quiz-item__body">
                          <p className="ra-quiz-item__answer">{q.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Assessment Result Card */}
            <aside className="ra-quiz-sidebar">
              <div className="ra-quiz-card">
                <div className="ra-quiz-card__tag font-mono">
                  ASSESSMENT RESULT
                </div>

                <div className="ra-quiz-card__score font-mono">
                  <span className="ra-quiz-card__score-val">{totalScore}</span>
                  <span className="ra-quiz-card__score-denom">/{maxScore}</span>
                </div>

                <div className="ra-quiz-card__tier">Moderate Risk Tolerance</div>

                <p className="ra-quiz-card__desc">
                  A balanced portfolio combining equities and bonds, with an emphasis on both long-term capital growth and capital preservation.
                </p>

                <div className="ra-quiz-card__divider" />

                <div className="ra-quiz-card__aversion font-mono">
                  Risk aversion coefficient <strong className="ra-quiz-card__aversion-val">A = 5.07</strong>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RiskSurveyQuestionnaire;
