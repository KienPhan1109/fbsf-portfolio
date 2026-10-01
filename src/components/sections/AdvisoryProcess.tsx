import { useInView } from '../../hooks/useAnimations';
import image1 from '../../assets/Image1.jpg';
import '../ui/ui.css';
import './SystemWorkflow.css';

const PROCESS_STEPS = [
  {
    number: 1,
    stepLabel: '01',
    title: 'Financial Profiling',
    description: 'Comprehensive household cash flow & balance sheet analysis',
    image: image1,
  },
  {
    number: 2,
    stepLabel: '02',
    title: 'Risk Assessment',
    description: 'Standardized international risk appetite & tolerance scoring',
    image: image1,
  },
  {
    number: 3,
    stepLabel: '03',
    title: 'Equity Screening',
    description: 'In-depth fundamental evaluation of P/E, EPS, and ROE metrics',
    image: image1,
  },
  {
    number: 4,
    stepLabel: '04',
    title: 'Portfolio Optimization',
    description: 'Markowitz Modern Portfolio Theory & Efficient Frontier model',
    image: image1,
  },
  {
    number: 5,
    stepLabel: '05',
    title: 'IPS Report Delivery',
    description: 'Complete institutional-grade Investment Policy Statement generation',
    image: image1,
  },
];

export default function AdvisoryProcess() {
  const [processRef, processVisible] = useInView();

  return (
    <section
      className="section"
      id="system-process"
      aria-label="5-Step Advisory Process"
    >
      <div className="container container--wide">
        <div
          className={`sw-process animate-on-scroll ${processVisible ? 'is-visible' : ''}`}
          ref={processRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                5-STEP ADVISORY PROCESS
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              From comprehensive financial profiling to institutional IPS delivery —
              a disciplined end-to-end framework.
            </p>
          </div>

          <div className="sw-process__pipeline">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className={`sw-step-card animate-on-scroll stagger-${idx + 1} ${processVisible ? 'is-visible' : ''}`}
              >
                <div className="sw-step-card__media">
                  {step.image ? (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="sw-step-card__img"
                    />
                  ) : (
                    <div className="sw-step-card__placeholder">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="sw-step-card__placeholder-icon"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <span className="sw-step-card__placeholder-tag">
                        IMAGE SLOT
                      </span>
                    </div>
                  )}
                  <div className="sw-step-card__badge">
                    <span className="sw-step-card__badge-num">
                      {step.stepLabel}
                    </span>
                  </div>
                </div>

                <div className="sw-step-card__content">
                  <h4 className="sw-step-card__title">
                    {step.title}
                  </h4>
                  <p className="sw-step-card__desc">
                    {step.description}
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
