import { useInView } from '../../hooks/useAnimations';
import '../ui/ui.css';
import './SystemWorkflow.css';
import './WorkflowRoadmap.css';

const SECTION_NAV = [
    {
        number: "01",
        title: "Financial Profile Collection",
        subtitle: "Thu thập và phân tích toàn diện hồ sơ tài chính gia đình",
        href: "#financial-profile",
        available: true,
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Risk Appetite Assessment",
        subtitle: "Đo lường năng lực và tâm lý chấp nhận rủi ro chuẩn hóa",
        href: "#risk-assessment",
        available: true,
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <circle cx="12" cy="11" r="3" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Sample Equity Analysis",
        subtitle: "Bộ tiêu chí sàng lọc và định giá cổ phiếu cơ bản P/E, ROE",
        href: "#equity-analysis",
        available: true,
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Markowitz Portfolio Optimization",
        subtitle:
            " Optimal Risky Portfolio (ORP) & Optimal Complete Portfolio (OCP)",
        href: "#markowitz",
        available: true,
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v9l6 3" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "IPS Report Generation",
        subtitle:
            "Tự động xuất văn kiện Investment Policy Statement chuẩn thể chế",
        href: "#ips-report",
        available: false,
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        ),
    },
];

export default function WorkflowRoadmap() {
  const [navRef, navVisible] = useInView();

  return (
    <section
      className="section section--alt wr-section"
      id="system-roadmap"
      aria-label="Lộ trình hệ thống"
    >
      <div className="container">
        <div
          className={`animate-on-scroll ${navVisible ? 'is-visible' : ''}`}
          ref={navRef as React.RefObject<HTMLDivElement>}
        >
          {/* Section Heading matching previous sections */}
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                SYSTEM ARCHITECTURE ROADMAP
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Khám phá chi tiết từng module chuyên biệt trong quy trình tư vấn và tối ưu hóa danh mục đầu tư.
            </p>
          </div>

          {/* Clean, Refined Roadmap List */}
          <div className="wr-list">
            {SECTION_NAV.map((item, i) => (
              <a
                key={item.number}
                href={item.available ? item.href : undefined}
                className={`wr-card animate-on-scroll stagger-${i + 1} ${navVisible ? 'is-visible' : ''} ${!item.available ? 'wr-card--upcoming' : ''}`}
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
                <div className="wr-card__left">
                  <div className="wr-card__num">{item.number}</div>
                  <div className="wr-card__icon">{item.icon}</div>
                  <div className="wr-card__text">
                    <h4 className="wr-card__title">{item.title}</h4>
                    <span className="wr-card__subtitle">{item.subtitle}</span>
                  </div>
                </div>

                <div className="wr-card__right">
                  {item.available ? (
                    <div className="wr-card__action" aria-label="Explore module">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  ) : (
                    <span className="wr-card__badge">Coming Soon</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
