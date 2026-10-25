import { CarOutlined, HomeOutlined } from '@ant-design/icons';
import { useInView } from '../../../shared/hooks/useAnimations';
import { financialGoals, formatVND } from '../data/profileData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../FinancialProfile.css';

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
                    {goal.id === "goal-car" ? (
                      <CarOutlined style={{ fontSize: 24, color: '#047857' }} />
                    ) : (
                      <HomeOutlined style={{ fontSize: 24, color: '#047857' }} />
                    )}
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
