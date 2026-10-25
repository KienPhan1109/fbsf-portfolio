import {
  WalletOutlined,
  PieChartOutlined,
  AimOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { useInView } from '../../../shared/hooks/useAnimations';
import '../../../shared/ui/ui.css';
import '../styles/SystemWorkflow.css';
import '../styles/WorkflowBenefits.css';

interface BenefitItem {
  readonly num: string;
  readonly title: string;
  readonly desc: string;
  readonly icon: React.ReactNode;
}

const BENEFITS: readonly BenefitItem[] = [
  {
    num: "01",
    title: "Household Cash Flow Engineering",
    desc: "Diagnosing structural leaks, eliminating deficits, and building automated monthly surpluses.",
    icon: <WalletOutlined style={{ fontSize: 24, color: '#047857' }} />,
  },
  {
    num: "02",
    title: "Markowitz Mean-Variance Asset Allocation",
    desc: "Construct an Optimal Risky Portfolio (ORP) tailored to each client's risk aversion and investment objectives.",
    icon: <PieChartOutlined style={{ fontSize: 24, color: '#047857' }} />,
  },
  {
    num: "03",
    title: "Goal-Based Multi-Stage Matching",
    desc: "Develop personalized financial roadmaps for major life goals, including homeownership and long-term capital preservation.",
    icon: <AimOutlined style={{ fontSize: 24, color: '#047857' }} />,
  },
  {
    num: "04",
    title: "Governance & Performance Benchmarking",
    desc: "Continuous portfolio monitoring and tracking against the market benchmark (VN-Index).",
    icon: <BarChartOutlined style={{ fontSize: 24, color: '#047857' }} />,
  },
];

export function WorkflowBenefits() {
  const [benefitsRef, benefitsVisible] = useInView();

  return (
    <section
      className="section section--alt wb-section"
      id="system-benefits"
      aria-label="Lợi ích đạt được"
    >
      <div className="container">
        <div
          className={`animate-on-scroll ${benefitsVisible ? "is-visible" : ""}`}
          ref={benefitsRef as React.RefObject<HTMLDivElement>}
        >
          {/* Section Heading matching previous sections */}
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                OUR SERVICES
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Personalized Financial Planning & Investment Management
            </p>
          </div>

          {/* Clean, Refined Minimal Cards */}
          <div className="wb-grid">
            {BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`wb-card animate-on-scroll stagger-${i + 1} ${benefitsVisible ? "is-visible" : ""}`}
              >
                <div className="wb-card__header">
                  <div className="wb-card__icon">
                    {benefit.icon}
                  </div>
                  <span className="wb-card__num">
                    {benefit.num}
                  </span>
                </div>

                <div className="wb-card__content">
                  <h4 className="wb-card__title">
                    {benefit.title}
                  </h4>
                  <p className="wb-card__desc">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkflowBenefits;
