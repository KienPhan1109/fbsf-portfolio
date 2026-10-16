import { useInView } from '../../hooks/useAnimations';
import {
  planEvaluationRows,
  planAssumptions,
  type EvaluationRow,
} from '../../data/financialPlanData';
import '../ui/ui.css';
import './SystemWorkflow.css';
import './FinancialPlanRoadmap.css';

export default function FinancialPlanRoadmap() {
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
          {/* Section Heading (Standard project style) */}
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                INVESTMENT PLAN EVALUATION SHEET
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              The evaluation shows that the investment plan is fully capable of
              meeting the 10-year housing goal without relying on financial
              leverage.
            </p>
          </div>

          {/* Investment Plan Evaluation Table Card */}
          <div className="plan-eval-card">
            <div className="plan-eval-table-wrap">
              <table className="plan-eval-table">
                <thead>
                  <tr>
                    <th className="plan-eval-th-goal">GOAL</th>
                    <th className="plan-eval-th-val">
                      GOAL VALUE( VND MILLION )
                    </th>
                    <th className="plan-eval-th-source">
                      ACQUIRED CAPITAL SOURCE
                    </th>
                    <th className="plan-eval-th-result">RESULT</th>
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
          </div>

          {/* Institutional Highlights Based on Research Assumptions */}
          <div className="plan-highlights">
            <div className="plan-highlight-card">
              <span className="plan-highlight-label">10-Year Housing Goal</span>
              <span className="plan-highlight-val plan-highlight-val--surplus font-mono">
                {planAssumptions.capitalSurplus}
              </span>
              <p className="plan-highlight-desc">
                Tài sản tích lũy ({planAssumptions.totalAvailableAssetYear10}) vượt
                giá trị nhà ({planAssumptions.targetHousingValueYear10}).
              </p>
            </div>

            <div className="plan-highlight-card">
              <span className="plan-highlight-label">Emergency Reserve</span>
              <span className="plan-highlight-val font-mono">
                {planAssumptions.emergencyFund}
              </span>
              <p className="plan-highlight-desc">
                Bảo lưu dự phòng thanh khoản an toàn, không đem toàn bộ tiền mặt đi đầu tư rủi ro.
              </p>
            </div>

            <div className="plan-highlight-card">
              <span className="plan-highlight-label">Compound Growth</span>
              <span className="plan-highlight-val font-mono">
                {planAssumptions.expectedReturnAnnual}
              </span>
              <p className="plan-highlight-desc">
                Tỷ suất sinh lời kỳ vọng OCP ({planAssumptions.expectedReturnMonthly}) tạo nền tảng tăng trưởng bền vững.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
