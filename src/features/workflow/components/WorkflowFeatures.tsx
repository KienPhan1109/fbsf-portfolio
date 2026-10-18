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
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
        <circle cx="19" cy="9" r="2" />
        <circle cx="14" cy="14" r="2" />
        <circle cx="10" cy="10" r="2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Equity Screening & Analysis",
    description:
      "Screen listed companies based on financial strength, valuation, liquidity, growth potential and diversification requirements.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="6" cy="11" r="2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Portfolio Optimization",
    description:
      "Analyze expected returns, volatility and correlations to identify the optimal risky portfolio using Modern Portfolio Theory.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Optimal Complete Portfolio",
    description:
      "Combine the Optimal Risky Portfolio (ORP) with a risk-free asset to construct a complete portfolio aligned with the client's risk preferences.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
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
