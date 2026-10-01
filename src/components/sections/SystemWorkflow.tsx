import { useInView } from '../../hooks/useAnimations';
import '../ui/ui.css';
import './SystemWorkflow.css';

/* ============================================================
   SUB-SECTION DATA
   ============================================================ */

const FLOW_STEPS = [
  { icon: '📋', label: 'Thu thập\nhồ sơ' },
  { icon: '🎯', label: 'Đánh giá\nrủi ro' },
  { icon: '📈', label: 'Phân tích\ncổ phiếu' },
  { icon: '🧮', label: 'Tối ưu\nMarkowitz' },
  { icon: '📄', label: 'Báo cáo\nIPS' },
];

const BENEFITS = [
  {
    icon: '📊',
    title: 'Tối ưu dòng tiền',
    description: 'Phân tích chi tiêu, tìm khoản tiết kiệm và tái phân bổ ngân sách hiệu quả để tối đa hóa dòng tiền thặng dư hàng tháng.',
  },
  {
    icon: '🛡️',
    title: 'Quản trị rủi ro',
    description: 'Đa dạng hóa danh mục đầu tư theo Modern Portfolio Theory, giảm thiểu rủi ro phi hệ thống một cách khoa học.',
  },
  {
    icon: '📈',
    title: 'Tăng trưởng bền vững',
    description: 'Chiến lược đầu tư dài hạn phù hợp mục tiêu tài chính cá nhân, đảm bảo tăng trưởng ổn định qua các chu kỳ thị trường.',
  },
  {
    icon: '📋',
    title: 'Báo cáo IPS chuyên nghiệp',
    description: 'Tự động tạo Investment Policy Statement chuẩn quốc tế, ghi nhận đầy đủ mục tiêu, ràng buộc và chiến lược.',
  },
  {
    icon: '🎯',
    title: 'Cá nhân hóa theo profile',
    description: 'Mỗi gia đình có hoàn cảnh khác nhau — hệ thống tùy biến toàn bộ phân tích và khuyến nghị theo hồ sơ cụ thể.',
  },
  {
    icon: '🔄',
    title: 'Tái cân bằng thông minh',
    description: 'Theo dõi danh mục liên tục, gợi ý tái cân bằng khi tỷ trọng lệch khỏi phân bổ tối ưu theo Efficient Frontier.',
  },
];

const PROCESS_STEPS = [
  { number: 1, icon: '📋', title: 'Thu thập hồ sơ', description: 'Phân tích tài chính gia đình' },
  { number: 2, icon: '🎯', title: 'Đánh giá rủi ro', description: 'Xác định risk appetite' },
  { number: 3, icon: '📈', title: 'Phân tích cổ phiếu', description: 'Đánh giá P/E, EPS, ROE' },
  { number: 4, icon: '🧮', title: 'Tối ưu danh mục', description: 'Markowitz Optimization' },
  { number: 5, icon: '📄', title: 'Xuất báo cáo IPS', description: 'Investment Policy Statement' },
];

const KEY_FEATURES = [
  {
    icon: '🧮',
    title: 'Markowitz MPT Engine',
    description: 'Tối ưu hóa tỷ trọng danh mục dựa trên Efficient Frontier, tìm kiếm điểm cân bằng tối ưu giữa rủi ro và lợi suất kỳ vọng.',
  },
  {
    icon: '📊',
    title: 'Equity Analysis Module',
    description: 'Đánh giá đa chiều cổ phiếu: P/E ratio, EPS growth, ROE, phân tích kỹ thuật MA/RSI và định giá so sánh ngành.',
  },
  {
    icon: '🎯',
    title: 'Risk Profiling System',
    description: 'Bộ câu hỏi 20+ tiêu chí chuẩn quốc tế, scoring model xác định chính xác mức độ chấp nhận rủi ro của nhà đầu tư.',
  },
  {
    icon: '📄',
    title: 'IPS Auto-Generation',
    description: 'Tự động tạo báo cáo Investment Policy Statement chuyên nghiệp, bao gồm mục tiêu, ràng buộc, phân bổ tài sản chiến lược.',
  },
];

const SECTION_NAV = [
  {
    number: '01',
    icon: '📋',
    title: 'Financial Profile Collection',
    subtitle: 'Thu thập và phân tích hồ sơ tài chính',
    href: '#financial-profile',
    available: true,
  },
  {
    number: '02',
    icon: '🎯',
    title: 'Risk Appetite Assessment',
    subtitle: 'Đánh giá mức độ chấp nhận rủi ro',
    href: '#risk-assessment',
    available: false,
  },
  {
    number: '03',
    icon: '📈',
    title: 'Sample Equity Analysis',
    subtitle: 'Phân tích mẫu cổ phiếu tiềm năng',
    href: '#equity-analysis',
    available: false,
  },
  {
    number: '04',
    icon: '🧮',
    title: 'Markowitz Portfolio Optimization',
    subtitle: 'Tối ưu danh mục theo Markowitz MPT',
    href: '#markowitz',
    available: false,
  },
  {
    number: '05',
    icon: '📄',
    title: 'IPS Report Generation',
    subtitle: 'Tạo báo cáo chính sách đầu tư',
    href: '#ips-report',
    available: false,
  },
];

/* ============================================================
   COMPONENT
   ============================================================ */

export default function SystemWorkflow() {
  const [introRef, introVisible] = useInView();
  const [benefitsRef, benefitsVisible] = useInView();
  const [processRef, processVisible] = useInView();
  const [featuresRef, featuresVisible] = useInView();
  const [navRef, navVisible] = useInView();

  return (
    <section className="section section--alt system-workflow" id="system-workflow" aria-label="Hệ thống tư vấn">
      <div className="container">

        {/* --- 2A: System Introduction --- */}
        <div
          className={`sw-intro animate-on-scroll ${introVisible ? 'is-visible' : ''}`}
          ref={introRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading">
            <span className="section-heading__badge">
              <span className="section-heading__badge-icon">⚙️</span>
              System Overview
            </span>
            <h2 className="section-heading__title">
              Hệ thống Tư vấn Tài chính Thông minh
            </h2>
            <p className="section-heading__subtitle">
              FBSF sử dụng phương pháp Markowitz Modern Portfolio Theory
              kết hợp phân tích dòng tiền cá nhân để xây dựng danh mục đầu tư tối ưu.
            </p>
          </div>

          <div className="sw-intro__grid">
            <div className="sw-intro__text">
              <h3 className="sw-intro__title">
                Phân tích toàn diện.<br />
                Tối ưu khoa học.<br />
                Kết quả đo lường được.
              </h3>
              <p className="sw-intro__description">
                Hệ thống FBSF thu thập dữ liệu tài chính gia đình, đánh giá mức chấp nhận rủi ro,
                phân tích cổ phiếu tiềm năng, tối ưu hóa danh mục theo Markowitz và tự động tạo
                báo cáo Investment Policy Statement (IPS) chuyên nghiệp.
              </p>
              <p className="sw-intro__description">
                Mỗi bước trong quy trình được thiết kế khoa học, đảm bảo khuyến nghị đầu tư
                phù hợp với hoàn cảnh và mục tiêu cụ thể của từng gia đình.
              </p>
            </div>
            <div className="sw-intro__diagram">
              <div className="sw-intro__flow">
                {FLOW_STEPS.map((step, i) => (
                  <span key={step.label} style={{ display: 'contents' }}>
                    <div className="sw-intro__flow-step">
                      <span className="sw-intro__flow-step-icon">{step.icon}</span>
                      <span className="sw-intro__flow-step-label">
                        {step.label.split('\n').map((line, j) => (
                          <span key={j}>{line}{j === 0 && <br />}</span>
                        ))}
                      </span>
                    </div>
                    {i < FLOW_STEPS.length - 1 && (
                      <span className="sw-intro__flow-arrow">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="sw-divider" />

        {/* --- 2B: Benefits --- */}
        <div
          className={`sw-benefits animate-on-scroll ${benefitsVisible ? 'is-visible' : ''}`}
          ref={benefitsRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading">
            <span className="section-heading__badge">
              <span className="section-heading__badge-icon">✨</span>
              Benefits
            </span>
            <h2 className="section-heading__title">Lợi ích đạt được</h2>
            <p className="section-heading__subtitle">
              Giải pháp toàn diện giúp gia đình bạn đạt được mục tiêu tài chính một cách khoa học và bền vững.
            </p>
          </div>

          <div className="sw-benefits__grid">
            {BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`feature-card animate-on-scroll stagger-${i + 1} ${benefitsVisible ? 'is-visible' : ''}`}
              >
                <div className="feature-card__icon">{benefit.icon}</div>
                <h4 className="feature-card__title">{benefit.title}</h4>
                <p className="feature-card__description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sw-divider" />

        {/* --- 2C: Process Steps --- */}
        <div
          className={`sw-process animate-on-scroll ${processVisible ? 'is-visible' : ''}`}
          ref={processRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading">
            <span className="section-heading__badge">
              <span className="section-heading__badge-icon">🔄</span>
              Process
            </span>
            <h2 className="section-heading__title">Quy trình Tư vấn 5 Bước</h2>
            <p className="section-heading__subtitle">
              Từ thu thập dữ liệu đến báo cáo chuyên nghiệp — mỗi bước được tối ưu để mang lại kết quả tốt nhất.
            </p>
          </div>

          <div className="process-steps">
            <div className="process-steps__line">
              <div className={`process-steps__line-fill ${processVisible ? 'is-visible' : ''}`} />
            </div>
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="process-step is-active">
                <div className="process-step__number">{step.number}</div>
                <span className="process-step__icon">{step.icon}</span>
                <h4 className="process-step__title">{step.title}</h4>
                <p className="process-step__description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sw-divider" />

        {/* --- 2D: Key Features --- */}
        <div
          className={`sw-features animate-on-scroll ${featuresVisible ? 'is-visible' : ''}`}
          ref={featuresRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading">
            <span className="section-heading__badge">
              <span className="section-heading__badge-icon">🚀</span>
              Features
            </span>
            <h2 className="section-heading__title">Tính năng Nổi bật</h2>
            <p className="section-heading__subtitle">
              Công nghệ phân tích tài chính tiên tiến, được thiết kế riêng cho nhà đầu tư cá nhân Việt Nam.
            </p>
          </div>

          <div className="sw-features__grid">
            {KEY_FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`feature-card animate-on-scroll stagger-${i + 1} ${featuresVisible ? 'is-visible' : ''}`}
              >
                <div className="feature-card__icon">{feature.icon}</div>
                <h4 className="feature-card__title">{feature.title}</h4>
                <p className="feature-card__description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sw-divider" />

        {/* --- 2E: Section Navigation Index --- */}
        <div
          className={`sw-navigation animate-on-scroll ${navVisible ? 'is-visible' : ''}`}
          ref={navRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading">
            <span className="section-heading__badge">
              <span className="section-heading__badge-icon">📑</span>
              Explore
            </span>
            <h2 className="section-heading__title">Khám phá Chi tiết</h2>
            <p className="section-heading__subtitle">
              Tìm hiểu sâu từng bước trong quy trình tư vấn đầu tư của FBSF Fund.
            </p>
          </div>

          <div className="sw-navigation__list">
            {SECTION_NAV.map((item, i) => (
              <a
                key={item.number}
                href={item.available ? item.href : undefined}
                className={`nav-card animate-on-scroll stagger-${i + 1} ${navVisible ? 'is-visible' : ''} ${!item.available ? 'nav-card--coming-soon' : ''}`}
                onClick={item.available ? (e) => {
                  e.preventDefault();
                  document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                } : undefined}
              >
                <div className="nav-card__number">{item.number}</div>
                <span className="nav-card__icon">{item.icon}</span>
                <div className="nav-card__content">
                  <div className="nav-card__title">
                    {item.title}
                    {!item.available && (
                      <span className="badge badge--gold" style={{ marginLeft: '8px', fontSize: '10px' }}>
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <div className="nav-card__subtitle">{item.subtitle}</div>
                </div>
                <span className="nav-card__arrow">→</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
