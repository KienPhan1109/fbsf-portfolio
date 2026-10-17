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
    href: '#financial-profile',
    image: financialProfilingImg,
  },
  {
    num: '02',
    title: 'Risk Assessment',
    href: '#risk-assessment',
    image: riskAssessmentImg,
  },
  {
    num: '03',
    title: 'Equity Screening',
    href: '#equity-analysis',
    image: equityScreeningImg,
  },
  {
    num: '04',
    title: 'Portfolio Optimization',
    href: '#markowitz',
    image: portfolioOptimizationImg,
  },
  {
    num: '05',
    title: 'IPS Report Delivery',
    href: '#ips-report',
    image: ipsReportDeliveryImg,
  },
];

export default function AdvisoryProcessC() {
  const [ref, visible] = useInView();

  const handleStepClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <a
                key={step.num}
                href={step.href}
                onClick={(e) => handleStepClick(e, step.href)}
                className={`apc__card animate-on-scroll stagger-${idx + 1} ${visible ? 'is-visible' : ''}`}
                title={`Khám phá ${step.title}`}
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
                  <h4 className="apc__card-title">
                    {step.title}
                    <span className="apc__card-arrow" aria-hidden="true"> ↗</span>
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
