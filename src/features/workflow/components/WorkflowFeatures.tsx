import {
  FileSearchOutlined,
  StockOutlined,
  SlidersOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { useInView } from '../../../shared/hooks/useAnimations';
import '../../../shared/ui/ui.css';
import '../styles/SystemWorkflow.css';
import '../styles/WorkflowFeatures.css';

interface FeatureItem {
  readonly num: string;
  readonly title: string;
  readonly description: string;
  readonly icon: React.ReactNode;
}

const KEY_FEATURES: readonly FeatureItem[] = [
  {
    num: "01",
    title: "Financial & Risk Assessment",
    description:
      "Assess the client’s financial position, investment horizon and risk tolerance to establish an appropriate investment framework.",
    icon: <FileSearchOutlined style={{ fontSize: 24, color: '#047857' }} />,
  },
  {
    num: "02",
    title: "Equity Screening & Analysis",
    description:
      "Screen listed companies based on financial strength, valuation, liquidity, growth potential and diversification requirements.",
    icon: <StockOutlined style={{ fontSize: 24, color: '#047857' }} />,
  },
  {
    num: "03",
    title: "Portfolio Optimization",
    description:
      "Analyze expected returns, volatility and correlations to identify the optimal risky portfolio using Modern Portfolio Theory.",
    icon: <SlidersOutlined style={{ fontSize: 24, color: '#047857' }} />,
  },
  {
    num: "04",
    title: "Optimal Complete Portfolio",
    description:
      "Combine the Optimal Risky Portfolio (ORP) with a risk-free asset to construct a complete portfolio aligned with the client's risk preferences.",
    icon: <SafetyCertificateOutlined style={{ fontSize: 24, color: '#047857' }} />,
  },
];

export function WorkflowFeatures() {
  const [featuresRef, featuresVisible] = useInView();

  return (
    <section
      className="section wf-section"
      id="system-features"
      aria-label="Tính năng nổi bật"
    >
      <div className="container">
        <div
          className={`animate-on-scroll ${featuresVisible ? "is-visible" : ""}`}
          ref={featuresRef as React.RefObject<HTMLDivElement>}
        >
          {/* Section Heading matching previous sections */}
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                INVESTMENT CAPABILITIES
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              A disciplined framework for portfolio selection, risk management and optimization.
            </p>
          </div>

          {/* Clean, Refined Minimal 2x2 Grid */}
          <div className="wf-grid">
            {KEY_FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`wf-card animate-on-scroll stagger-${i + 1} ${featuresVisible ? "is-visible" : ""}`}
              >
                <div className="wf-card__header">
                  <div className="wf-card__icon">
                    {feature.icon}
                  </div>
                  <span className="wf-card__num">
                    {feature.num}
                  </span>
                </div>

                <div className="wf-card__content">
                  <h4 className="wf-card__title">
                    {feature.title}
                  </h4>
                  <p className="wf-card__desc">
                    {feature.description}
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

export default WorkflowFeatures;
