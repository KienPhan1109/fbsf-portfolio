import { useInView } from '../../../shared/hooks/useAnimations';
import {
  planEvaluationRows,
  planAssumptions,
  type EvaluationRow,
} from '../data/financialPlanData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../FinancialPlanRoadmap.css';

export function FinancialPlanRoadmap() {
  const [ref, visible] = useInView();

  return (
    <section
      className="section sec-financial-plan"
      id="financial-plan"
      aria-label="Financial Plan and Goal Implementation Roadmap"
    >
      <div className="container container--wide">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`plan-eval-wrapper animate-on-scroll ${
            visible ? 'is-visible' : ''
          }`}
        >
          {/* Editorial Section Header matching project standard */}
          <div className="plan-eval-header">
            <div className="plan-eval-header__title-wrap">
              <h2 className="plan-eval-title">
                <span className="plan-eval-title__dark">INVESTMENT PLAN</span>
                <span className="plan-eval-title__emerald">EVALUATION</span>
              </h2>
            </div>
            <div className="plan-eval-header__desc-wrap">
              <p className="plan-eval-desc">
                The financial plan evaluates the family's ability to achieve its goals over the next 10 years.
              </p>
            </div>
          </div>

          {/* Institutional Table Card */}
          <div className="plan-eval-card">
            <div className="plan-eval-table-wrap">
              <table className="plan-eval-table">
                <thead>
                  <tr>
                    <th className="plan-eval-th-goal">GOAL</th>
                    <th className="plan-eval-th-val">GOAL VALUE (VND MILLION)</th>
                    <th className="plan-eval-th-capital">ACCUMULATED CAPITAL</th>
                    <th className="plan-eval-th-status">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {planEvaluationRows.map((row: EvaluationRow, idx: number) => (
                    <tr key={row.id}>
                      <td className="plan-eval-td-goal">
                        <div className="plan-goal-item">
                          <span className="plan-goal-idx font-mono">0{idx + 1}</span>
                          <span className="plan-goal-name">{row.goal}</span>
                        </div>
                      </td>
                      <td className="plan-eval-td-val font-mono">{row.goalValue}</td>
                      <td className="plan-eval-td-capital">
                        <div className="plan-progress-pill">
                          <div
                            className={`plan-progress-fill ${
                              row.result === 'Achieved'
                                ? 'plan-progress-fill--achieved'
                                : 'plan-progress-fill--pending'
                            }`}
                            style={{
                              width: `${Math.min(row.progressPercent, 100)}%`,
                            }}
                          />
                          <span className="plan-progress-text font-mono">
                            {row.acquiredCapital}
                          </span>
                          <span className="plan-progress-pct font-mono">
                            {row.progressPercent}%
                          </span>
                        </div>
                      </td>
                      <td className="plan-eval-td-status">
                        <span
                          className={`plan-status-pill ${
                            row.result === 'Achieved'
                              ? 'plan-status-pill--achieved'
                              : 'plan-status-pill--not-achieved'
                          }`}
                        >
                          <span className="plan-status-pill__dot" />
                          {row.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="plan-eval-footer-note">
              <div className="plan-eval-footer-badge font-mono">AUDIT SUMMARY</div>
              <p className="plan-eval-footer-text">
                The loan repayment and 10-year home purchase goals are projected to be achieved. The vehicle purchase goal should be postponed.
              </p>
            </div>
          </div>

          {/* Bottom 3 Cards Row */}
          <div className="plan-highlights-grid">
            {/* Card 1: Lush Deep Forest Green Card */}
            <div className="plan-highlight-card plan-highlight-card--emerald">
              <span className="plan-card-tag font-mono">10-YEAR HOUSING GOAL</span>
              <div className="plan-card-val font-heading">
                {planAssumptions.capitalSurplus}
              </div>
              <p className="plan-card-desc">
                Accumulated assets exceed the projected home purchase value.
              </p>
            </div>

            {/* Card 2: Emergency Reserve */}
            <div className="plan-highlight-card plan-highlight-card--white">
              <span className="plan-card-tag font-mono">EMERGENCY RESERVE</span>
              <div className="plan-card-val font-heading">
                {planAssumptions.emergencyFund}
              </div>
              <p className="plan-card-desc">
                Maintain a liquid reserve and avoid committing all available cash.
              </p>
            </div>

            {/* Card 3: Compound Growth */}
            <div className="plan-highlight-card plan-highlight-card--white">
              <span className="plan-card-tag font-mono">COMPOUND GROWTH</span>
              <div className="plan-card-val font-heading">
                {planAssumptions.expectedReturnAnnual}
              </div>
              <p className="plan-card-desc">
                The expected OCP return provides a foundation for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialPlanRoadmap;
