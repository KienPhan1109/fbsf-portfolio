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
                <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FBS</span>
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
              <span className="footer__link">📧 contact@fbsf-fund.vn</span>
              <span className="footer__link">📞 1900 xxxx xx</span>
              <span className="footer__link">📍 TP. Hồ Chí Minh, Việt Nam</span>
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
