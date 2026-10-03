import logoImg from '../../assets/Logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logoImg} alt="HUB Logo" className="footer__logo-img" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.5rem', fontWeight: 900 }}>
                <span style={{ color: '#FFFFFF' }}>FBS</span>
                <span style={{ background: 'var(--gradient-emerald)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginLeft: '0.5px' }}>F</span>
              </div>
            </div>
            <p className="footer__description">
              FBSF Cash Flow Optimization Fund — Tối ưu hóa dòng tiền, xây dựng danh mục đầu tư
              khoa học theo phương pháp Markowitz MPT cho gia đình Việt.
            </p>
          </div>

          {/* Quy trình */}
          <div>
            <h4 className="footer__column-title">Quy trình</h4>
            <div className="footer__links">
              <a href="#system-workflow" className="footer__link">Giới thiệu hệ thống</a>
              <a href="#financial-profile" className="footer__link">Thu thập hồ sơ</a>
              <span className="footer__link" style={{ opacity: 0.4 }}>Đánh giá rủi ro</span>
              <span className="footer__link" style={{ opacity: 0.4 }}>Phân tích cổ phiếu</span>
              <span className="footer__link" style={{ opacity: 0.4 }}>Tối ưu Markowitz</span>
            </div>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="footer__column-title">Thông tin</h4>
            <div className="footer__links">
              <span className="footer__link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle', flexShrink: 0 }}>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                contact@fbsf-fund.vn
              </span>
              <span className="footer__link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle', flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                1900 xxxx xx
              </span>
              <span className="footer__link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle', flexShrink: 0 }}>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                TP. Hồ Chí Minh, Việt Nam
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 FBSF Cash Flow Optimization Fund. Bài tập học thuật — Không phải sản phẩm tài chính thực tế.
          </p>
          <div className="footer__badges">
            <span className="footer__badge">React 19</span>
            <span className="footer__badge">TypeScript</span>
            <span className="footer__badge">Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
