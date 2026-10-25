import React from 'react';
import {
  TeamOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
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
      {/* Curved Card Container matching reference mockup */}
      <div className="footer-card">
        <div className="footer__container">
          <div className="footer__grid">
            {/* Column 1: Brand & Socials */}
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
                Hệ thống tối ưu hóa dòng tiền &amp; danh mục đầu tư khoa học
                theo phương pháp Markowitz MPT chuyên sâu cho gia đình Việt.
              </p>

              {/* Copyright */}
              <div className="footer__copyright font-mono">
                © 2026 FBSF Cash Flow Optimization Fund. All rights reserved.
              </div>
            </div>

            {/* Column 2: Khám phá (Navigation Links) */}
            <div className="footer__col">
              <h4 className="footer__col-title font-heading">Khám phá</h4>
              <ul className="footer__links-list">
                <li>
                  <a
                    href="#system-workflow"
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, 'system-workflow')}
                  >
                    Khung đầu tư &amp; Quy trình 5 bước
                  </a>
                </li>
                <li>
                  <a
                    href="#financial-profile"
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, 'financial-profile')}
                  >
                    Hồ sơ tài chính &amp; Mục tiêu gia đình
                  </a>
                </li>
                <li>
                  <a
                    href="#risk-assessment"
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, 'risk-assessment')}
                  >
                    Đánh giá rủi ro &amp; Hệ số CRRA (A = 5.07)
                  </a>
                </li>
                <li>
                  <a
                    href="#equity-analysis"
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, 'equity-analysis')}
                  >
                    Sàng lọc &amp; Phân tích cổ phiếu
                  </a>
                </li>
                <li>
                  <a
                    href="#markowitz"
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, 'markowitz')}
                  >
                    Tối ưu hóa danh mục ORP &amp; OCP
                  </a>
                </li>
                <li>
                  <a
                    href="#financial-plan"
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, 'financial-plan')}
                  >
                    Đánh giá kế hoạch mục tiêu (IPE)
                  </a>
                </li>
                <li>
                  <a
                    href="#ips-report"
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, 'ips-report')}
                  >
                    Văn kiện &amp; Báo cáo chính sách IPS
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Liên hệ (Contact Details) */}
            <div className="footer__col">
              <h4 className="footer__col-title font-heading">Liên hệ</h4>
              <ul className="footer__contact-list">
                <li className="footer__contact-item">
                  <span className="footer__contact-hotline">
                    Hotline: <strong className="font-mono">1900 xxxx xx</strong>
                  </span>
                </li>
                <li className="footer__contact-item">
                  <a
                    href="mailto:contact@fbsf-fund.vn"
                    className="footer__contact-link"
                  >
                    <MailOutlined className="footer__contact-icon" />
                    contact@fbsf-fund.vn
                  </a>
                </li>
                <li className="footer__contact-item">
                  <span className="footer__contact-info">
                    <TeamOutlined className="footer__contact-icon" />
                    Chủ sở hữu: <strong>Group 06</strong> ↗
                  </span>
                </li>
                <li className="footer__contact-item">
                  <span className="footer__contact-info">
                    <EnvironmentOutlined className="footer__contact-icon" />
                    TP. Hồ Chí Minh, Việt Nam
                  </span>
                </li>
                <li className="footer__contact-item">
                  <span className="footer__contact-hours font-mono">
                    <ClockCircleOutlined className="footer__contact-icon" />
                    08:00 – 17:30 (T2 – T6)
                  </span>
                </li>
                <li className="footer__contact-item footer__contact-disclaimer">
                  Dự án công ty quỹ giả lập phục vụ học thuật &amp; nghiên cứu.
                </li>
              </ul>
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
