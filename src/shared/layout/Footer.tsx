import React from 'react';
import {
  PhoneOutlined,
  MailOutlined,
  TeamOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import logoImg from '../../assets/Logo.png';
import './Footer.css';

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrapper" id="footer" role="contentinfo">
      <div className="footer-card">
        <div className="footer__container">
          <div className="footer__grid">
            {/* Column 1: Brand & Description */}
            <div className="footer__brand">
              <a
                href="#hero"
                className="footer__logo"
                onClick={(e) => handleNavClick(e, 'hero')}
                title="FBSF Cash Flow Optimization Fund"
              >
                <img
                  src={logoImg}
                  alt="FBSF Logo"
                  className="footer__logo-img"
                />
                <div className="footer__logo-text font-heading">
                  <span className="footer__logo-text-dark">FBS</span>
                  <span className="footer__logo-text-emerald">F</span>
                </div>
              </a>

              <p className="footer__description">
                Institutional cash flow optimization and quantitative portfolio management
                based on advanced Modern Portfolio Theory (MPT) for family wealth.
              </p>

              {/* Copyright */}
              <div className="footer__copyright font-mono">
                © 2026 FBSF Cash Flow Optimization Fund. All rights reserved.
              </div>
            </div>

            {/* Column 2: Explore (Exactly 5 Core Project Stages) */}
            <div className="footer__col">
              <h4 className="footer__col-title font-heading">Explore</h4>
              <ul className="footer__links-list">
                <li>
                  <a
                    href="#financial-profile"
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, 'financial-profile')}
                  >
                    Financial Profiling
                  </a>
                </li>
                <li>
                  <a
                    href="#risk-assessment"
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, 'risk-assessment')}
                  >
                    Risk Assessment
                  </a>
                </li>
                <li>
                  <a
                    href="#equity-analysis"
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, 'equity-analysis')}
                  >
                    Equity Screening
                  </a>
                </li>
                <li>
                  <a
                    href="#markowitz"
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, 'markowitz')}
                  >
                    Portfolio Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="#ips-report"
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, 'ips-report')}
                  >
                    IPS Report Delivery
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Details (Clean, Uncluttered & Refined) */}
            <div className="footer__col">
              <h4 className="footer__col-title font-heading">Contact</h4>
              <ul className="footer__contact-list">
                <li>
                  <a
                    href="tel:1900xxxxxx"
                    className="footer__contact-item footer__contact-link"
                  >
                    <span className="footer__contact-icon-box">
                      <PhoneOutlined />
                    </span>
                    <span className="footer__contact-text">
                      Hotline: <strong className="font-mono">1900 xxxx xx</strong>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@fbsf-fund.vn"
                    className="footer__contact-item footer__contact-link"
                  >
                    <span className="footer__contact-icon-box">
                      <MailOutlined />
                    </span>
                    <span className="footer__contact-text">contact@fbsf-fund.vn</span>
                  </a>
                </li>
                <li className="footer__contact-item">
                  <span className="footer__contact-icon-box">
                    <TeamOutlined />
                  </span>
                  <span className="footer__contact-text">
                    Ownership: <strong>Group 06</strong>
                  </span>
                </li>
                <li className="footer__contact-item">
                  <span className="footer__contact-icon-box">
                    <EnvironmentOutlined />
                  </span>
                  <span className="footer__contact-text">
                    Ho Chi Minh City, Vietnam
                  </span>
                </li>
              </ul>

              {/* Clean Academic Disclaimer */}
              <div className="footer__disclaimer">
                Academic simulation fund project for educational &amp; research purposes.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Giant White Watermark Text */}
        <div className="footer__watermark-wrap" aria-hidden="true">
          <div className="footer__watermark-text font-heading">
            FBSF FUND
          </div>
        </div>
      </div>
    </footer>
  );
}
