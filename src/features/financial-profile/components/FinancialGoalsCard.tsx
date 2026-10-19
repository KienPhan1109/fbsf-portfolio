import { useInView } from '../../../shared/hooks/useAnimations';
import { financialGoals, formatVND } from '../data/profileData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../FinancialProfile.css';

function IconCar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2 11 2 11.3 2 11.6V16c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function IconLandmark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
    </svg>
  );
}

export function FinancialGoalsCard() {
  const [goalsRef, goalsVisible] = useInView();

  return (
    <section
      className="section section--alt"
      id="financial-goals"
      aria-label="Mục tiêu tài chính"
    >
      <div className="container">
        <div
          className={`fp-goals animate-on-scroll ${goalsVisible ? "is-visible" : ""}`}
          ref={goalsRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                STRATEGIC FINANCIAL GOALS
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Define key financial objectives over the medium and long term, establishing funding requirements and accumulation milestones.
            </p>
          </div>

          <div className="fp-goals__grid">
            {financialGoals.map((goal) => (
              <div
                key={goal.id}
                className={`fp-goal-card fp-goal-card--${goal.type === "mid-term" ? "mid" : "long"}`}
              >
                <div className="fp-goal-card__header">
                  <div className="fp-goal-card__icon-box">
                    {goal.id === "goal-car" ? <IconCar /> : <IconLandmark />}
                  </div>
                  <span
                    className={`fp-goal-card__badge ${goal.type === "mid-term" ? "fp-goal-card__badge--mid" : "fp-goal-card__badge--long"}`}
                  >
                    {goal.type === "mid-term" ? "MEDIUM-TERM • 3 YEARS" : "LONG-TERM • 10 YEARS"}
                  </span>
                </div>
                <h3 className="fp-goal-card__title">{goal.title}</h3>
                <div className="fp-goal-card__timeline">{goal.timeline}</div>
                <div className="fp-goal-card__target font-mono">
                  {formatVND(goal.targetAmount)}
                </div>
                <p className="fp-goal-card__description">{goal.description}</p>
                <div className="fp-goal-card__progress">
                  <div className="fp-goal-card__progress-header">
                    <span className="fp-goal-card__progress-label">
                      Current Savings Progress
                    </span>
                    <span className="fp-goal-card__progress-value font-mono">
                      {goal.progress}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar__fill"
                      style={{
                        width: goalsVisible ? `${goal.progress}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialGoalsCard;
