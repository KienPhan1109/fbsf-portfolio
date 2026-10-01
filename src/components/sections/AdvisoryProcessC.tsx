import { useInView } from '../../hooks/useAnimations';
import './AdvisoryProcessC.css';
import './SystemWorkflow.css';

import financialProfilingImg from '../../assets/Financial Profiling.jpg';
import riskAssessmentImg from '../../assets/Risk Assessment.jpg';
import equityScreeningImg from '../../assets/Equity Screening.jpg';
import portfolioOptimizationImg from '../../assets/Portfolio Optimization.jpg';
import ipsReportDeliveryImg from '../../assets/IPS Report Delivery.jpg';

const STEPS = [
  {
    num: '01',
    title: 'Financial Profiling',
    image: financialProfilingImg,
  },
  {
    num: '02',
    title: 'Risk Assessment',
    image: riskAssessmentImg,
  },
  {
    num: '03',
    title: 'Equity Screening',
    image: equityScreeningImg,
  },
  {
    num: '04',
    title: 'Portfolio Optimization',
    image: portfolioOptimizationImg,
  },
  {
    num: '05',
    title: 'IPS Report Delivery',
    image: ipsReportDeliveryImg,
  },
];

export default function AdvisoryProcessC() {
  const [ref, visible] = useInView();

  return (
    <section className="section apc" id="system-process" aria-label="5-Step Advisory Process">
      <div className="container container--wide">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-on-scroll ${visible ? 'is-visible' : ''}`}
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

          <div className="apc__grid">
            {STEPS.map((step, idx) => (
              <div
                key={step.num}
                className={`apc__card animate-on-scroll stagger-${idx + 1} ${visible ? 'is-visible' : ''}`}
              >
                {/* Background Image with Overlay */}
                <div className="apc__card-bg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="apc__card-bg-image"
                    loading="lazy"
                  />
                  <div className="apc__card-overlay" />
                </div>

                {/* Prominent Large Number at Top-Right */}
                <div className="apc__card-top">
                  <span className="apc__card-num">{step.num}</span>
                </div>

                <div className="apc__card-bottom">
                  <h4 className="apc__card-title">{step.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
