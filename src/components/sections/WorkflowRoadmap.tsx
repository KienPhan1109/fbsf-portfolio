import { useInView } from '../../hooks/useAnimations';
import '../ui/ui.css';
import './SystemWorkflow.css';

const SECTION_NAV = [
  {
    number: '01',
    icon: '📋',
    title: 'Financial Profile Collection',
    subtitle: 'Thu thập và phân tích hồ sơ tài chính gia đình',
    href: '#financial-profile',
    available: true,
  },
  {
    number: '02',
    icon: '🎯',
    title: 'Risk Appetite Assessment',
    subtitle: 'Đánh giá mức độ chấp nhận rủi ro nhà đầu tư',
    href: '#risk-assessment',
    available: false,
  },
  {
    number: '03',
    icon: '📈',
    title: 'Sample Equity Analysis',
    subtitle: 'Phân tích mẫu cổ phiếu tiềm năng trên thị trường',
    href: '#equity-analysis',
    available: false,
  },
  {
    number: '04',
    icon: '🧮',
    title: 'Markowitz Portfolio Optimization',
    subtitle: 'Tối ưu danh mục theo Markowitz MPT & Efficient Frontier',
    href: '#markowitz',
    available: false,
  },
  {
    number: '05',
    icon: '📄',
    title: 'IPS Report Generation',
    subtitle: 'Tạo và xuất báo cáo chính sách đầu tư hoàn chỉnh',
    href: '#ips-report',
    available: false,
  },
];

export default function WorkflowRoadmap() {
  const [navRef, navVisible] = useInView();

  return (
    <section
      className="section section--alt"
      id="system-roadmap"
      aria-label="Lộ trình hệ thống"
    >
      <div className="container">
        <div
          className={`sw-navigation animate-on-scroll ${navVisible ? 'is-visible' : ''}`}
          ref={navRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading">
            <span className="section-heading__badge">
              <span className="section-heading__badge-icon">📑</span>
              Roadmap
            </span>
            <h2 className="section-heading__title">
              Khám phá Chi tiết Lộ trình
            </h2>
            <p className="section-heading__subtitle">
              Tìm hiểu sâu từng module trong quy trình tư vấn và tối ưu danh mục đầu tư của hệ thống FBS.
            </p>
          </div>

          <div className="sw-navigation__list">
            {SECTION_NAV.map((item, i) => (
              <a
                key={item.number}
                href={item.available ? item.href : undefined}
                className={`nav-card animate-on-scroll stagger-${i + 1} ${navVisible ? 'is-visible' : ''} ${!item.available ? 'nav-card--coming-soon' : ''}`}
                onClick={
                  item.available
                    ? (e) => {
                        e.preventDefault();
                        document
                          .getElementById(item.href.slice(1))
                          ?.scrollIntoView({
                            behavior: 'smooth',
                          });
                      }
                    : undefined
                }
              >
                <div className="nav-card__number">{item.number}</div>
                <span className="nav-card__icon">{item.icon}</span>
                <div className="nav-card__content">
                  <div className="nav-card__title">
                    {item.title}
                    {!item.available && (
                      <span
                        className="badge badge--gold"
                        style={{
                          marginLeft: '8px',
                          fontSize: '10px',
                        }}
                      >
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
