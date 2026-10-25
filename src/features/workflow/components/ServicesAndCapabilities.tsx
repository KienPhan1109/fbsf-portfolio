import React from 'react';
import {
  FileSearchOutlined,
  StockOutlined,
  SlidersOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { useInView } from '../../../shared/hooks/useAnimations';
import '../../../shared/ui/ui.css';
import '../styles/ServicesAndCapabilities.css';

interface ServiceItem {
  readonly num: string;
  readonly title: string;
  readonly desc: string;
  readonly href?: string;
}

interface CapabilityItem {
  readonly num: string;
  readonly title: string;
  readonly desc: string;
  readonly icon: React.ReactNode;
}

const SERVICES: readonly ServiceItem[] = [
  {
    num: "1",
    title: "Household Cash Flow Engineering",
    desc: "Diagnosing structural leaks, eliminating deficits, and building automated monthly surpluses.",
  },
  {
    num: "2",
    title: "Markowitz Mean-Variance Asset Allocation",
    desc: "Construct an Optimal Risky Portfolio (ORP) tailored to each client's risk aversion and investment objectives.",
    href: "#financial-profile",
  },
  {
    num: "3",
    title: "Goal-Based Multi-Stage Matching",
    desc: "Develop personalized financial roadmaps for major life goals, including homeownership and long-term capital preservation.",
  },
  {
    num: "4",
    title: "Governance & Performance Benchmarking",
    desc: "Continuous portfolio monitoring and tracking against the market benchmark (VN-Index).",
  },
];

const CAPABILITIES: readonly CapabilityItem[] = [
  {
    num: "01",
    title: "Financial & Risk Assessment",
    desc: "Assess the client’s financial position, investment horizon and risk tolerance to establish an appropriate investment framework.",
    icon: <FileSearchOutlined style={{ fontSize: 24, color: '#047857' }} />,
  },
  {
    num: "02",
    title: "Equity Screening & Analysis",
    desc: "Screen listed companies based on financial strength, valuation, liquidity, growth potential and diversification requirements.",
    icon: <StockOutlined style={{ fontSize: 24, color: '#047857' }} />,
  },
  {
    num: "03",
    title: "Portfolio Optimization",
    desc: "Analyze expected returns, volatility and correlations to identify the optimal risky portfolio using Modern Portfolio Theory.",
    icon: <SlidersOutlined style={{ fontSize: 24, color: '#047857' }} />,
  },
  {
    num: "04",
    title: "Optimal Complete Portfolio",
    desc: "Combine the Optimal Risky Portfolio (ORP) with a risk-free asset to construct a complete portfolio aligned with the client's risk preferences.",
    icon: <SafetyCertificateOutlined style={{ fontSize: 24, color: '#047857' }} />,
  },
];

export function ServicesAndCapabilities() {
  const [sectionRef, sectionVisible] = useInView();

  const handleServiceClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href?: string
  ) => {
    if (!href) return;
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="sc-section"
      id="system-services"
      aria-label="Our Services and Investment Capabilities"
    >
      {/* Anchor targets to preserve backward compatibility */}
      <div id="system-benefits" aria-hidden="true" style={{ position: 'absolute', top: 0 }} />
      <div id="system-features" aria-hidden="true" style={{ position: 'absolute', top: 0 }} />

      <div className="sc-container">
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className={`sc-bento-matrix animate-on-scroll ${sectionVisible ? "is-visible" : ""}`}
        >
          {/* LEFT 5/12: HERO DARK CARD (OUR SERVICES) */}
          <div className="sc-services-hero">
            <div className="sc-services-header">
              <h2 className="sc-services-title">OUR SERVICES</h2>
              <p className="sc-services-subtitle">
                Personalized Financial Planning &amp; Investment Management
              </p>
            </div>

            <div className="sc-services-list">
              {SERVICES.map((service) => {
                if (service.href) {
                  return (
                    <a
                      key={service.num}
                      href={service.href}
                      onClick={(e) => handleServiceClick(e, service.href)}
                      className="sc-service-item sc-service-item--link"
                      title="Xem Household Financial Profile"
                    >
                      <span className="sc-service-num">{service.num}</span>
                      <div className="sc-service-content">
                        <h3 className="sc-service-title">{service.title}</h3>
                        <p className="sc-service-desc">{service.desc}</p>
                      </div>
                    </a>
                  );
                }

                return (
                  <div key={service.num} className="sc-service-item">
                    <span className="sc-service-num">{service.num}</span>
                    <div className="sc-service-content">
                      <h3 className="sc-service-title">{service.title}</h3>
                      <p className="sc-service-desc">{service.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT 7/12: 2x2 BENTO GRID (INVESTMENT CAPABILITIES) */}
          <div className="sc-capabilities-col">
            <div className="sc-capabilities-header sw-heading">
              <h2 className="sw-heading__title sc-capabilities-title">
                <span className="sw-heading__title-highlight">
                  INVESTMENT CAPABILITIES
                </span>
              </h2>
              <p className="sw-heading__subtitle sc-capabilities-subtitle">
                A disciplined framework for portfolio selection, risk management and optimization.
              </p>
            </div>

            <div className="sc-cap-grid">
              {CAPABILITIES.map((cap) => (
                <div key={cap.num} className="sc-cap-card">
                  <div className="sc-cap-card-header">
                    <div className="sc-cap-icon" aria-hidden="true">
                      {cap.icon}
                    </div>
                    <span className="sc-cap-num">{cap.num}</span>
                  </div>

                  <div className="sc-cap-body">
                    <h3 className="sc-cap-title">{cap.title}</h3>
                    <p className="sc-cap-desc">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesAndCapabilities;
