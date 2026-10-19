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
      <div className="container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`plan-eval-wrapper animate-on-scroll ${visible ? 'is-visible' : ''}`}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                INVESTMENT PLAN EVALUATION SHEET
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              The evaluation indicates that the investment plan is projected to meet the household’s 10-year housing goal without relying on additional financial leverage.
            </p>
          </div>

          <div className="plan-eval-card">
            <div className="plan-eval-table-wrap">
              <table className="plan-eval-table">
                <thead>
                  <tr>
                    <th className="plan-eval-th-goal">Goal</th>
                    <th className="plan-eval-th-val">
                      Goal Value (VND million)
                    </th>
                    <th className="plan-eval-th-source">
                      Accumulated Capital (VND million)
                    </th>
                    <th className="plan-eval-th-result">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {planEvaluationRows.map((row: EvaluationRow) => (
                    <tr key={row.id}>
                      <td className="plan-eval-td-goal">{row.goal}</td>
                      <td className="plan-eval-td-val font-mono">
                        {row.goalValue}
                      </td>
                      <td className="plan-eval-td-source font-mono">
                        {row.acquiredCapital}
                      </td>
                      <td
                        className={`plan-eval-td-result ${
                          row.result === 'Achieved'
                            ? 'plan-result--achieved'
                            : 'plan-result--unachieved'
                        }`}
                      >
                        {row.result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--color-slate-500, #64748b)',
                marginTop: '12px',
                fontStyle: 'italic',
                lineHeight: '1.5',
              }}
            >
              The investment plan is projected to meet the 10-year housing goal, subject to the achievement of intermediate savings targets and the maintenance of adequate liquidity.
            </p>
          </div>

          <div className="plan-highlights">
            <div className="plan-highlight-card">
              <span className="plan-highlight-label">10-Year Housing Goal</span>
              <span className="plan-highlight-val plan-highlight-val--surplus font-mono">
                {planAssumptions.capitalSurplus}
              </span>
              <p className="plan-highlight-desc">
                Accumulated assets ({planAssumptions.totalAvailableAssetYear10}) exceed the projected home purchase value ({planAssumptions.targetHousingValueYear10}).
              </p>
            </div>

            <div className="plan-highlight-card">
              <span className="plan-highlight-label">Emergency Reserve</span>
              <span className="plan-highlight-val font-mono">
                {planAssumptions.emergencyFund}
              </span>
              <p className="plan-highlight-desc">
                Maintain a liquid emergency reserve and avoid committing all available cash to risk-bearing investments.
              </p>
            </div>

            <div className="plan-highlight-card">
              <span className="plan-highlight-label">Compound Growth</span>
              <span className="plan-highlight-val font-mono">
                {planAssumptions.expectedReturnAnnual}
              </span>
              <p className="plan-highlight-desc">
                The expected OCP return ({planAssumptions.expectedReturnMonthly}) provides a foundation for sustainable long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialPlanRoadmap;
