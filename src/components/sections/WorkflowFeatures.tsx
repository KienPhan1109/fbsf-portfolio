import { useInView } from '../../hooks/useAnimations';
import '../ui/ui.css';
import './SystemWorkflow.css';
import './WorkflowFeatures.css';

const KEY_FEATURES = [
  {
    num: '01',
    title: 'Markowitz MPT Engine',
    description: 'Tối ưu hóa tỷ trọng danh mục dựa trên Efficient Frontier, tự động tính toán biên độ để tìm điểm cân bằng tối ưu giữa rủi ro và lợi suất kỳ vọng.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
        <circle cx="19" cy="9" r="2" />
        <circle cx="14" cy="14" r="2" />
        <circle cx="10" cy="10" r="2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Equity Analysis Module',
    description: 'Đánh giá đa chiều cổ phiếu: P/E, EPS growth, ROE, phân tích kỹ thuật MA/RSI kết hợp định giá chiết khấu dòng tiền và so sánh ngành.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="6" cy="11" r="2" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Risk Profiling System',
    description: 'Bộ tiêu chí chuẩn quốc tế 20+ tham số định lượng, xác định chính xác năng lực chịu đựng rủi ro và hành vi tâm lý của nhà đầu tư.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'IPS Auto-Generation',
    description: 'Tự động xuất văn kiện Investment Policy Statement toàn diện, chuẩn hóa mục tiêu tài chính, ràng buộc thanh khoản và khung tái cơ cấu.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
];

export default function WorkflowFeatures() {
  const [featuresRef, featuresVisible] = useInView();

  return (
    <section
      className="section wf-section"
      id="system-features"
      aria-label="Tính năng nổi bật"
    >
      <div className="container">
        <div
          className={`animate-on-scroll ${featuresVisible ? 'is-visible' : ''}`}
          ref={featuresRef as React.RefObject<HTMLDivElement>}
        >
          {/* Section Heading matching previous sections */}
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                CORE SYSTEM CAPABILITIES
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Công nghệ phân tích tài chính tiên tiến kết hợp các mô hình định lượng chuẩn quốc tế, thiết kế chuyên biệt cho việc tối ưu hóa danh mục cá nhân.
            </p>
          </div>

          {/* Clean, Refined Minimal 2x2 Grid */}
          <div className="wf-grid">
            {KEY_FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`wf-card animate-on-scroll stagger-${i + 1} ${featuresVisible ? 'is-visible' : ''}`}
              >
                <div className="wf-card__header">
                  <div className="wf-card__icon">
                    {feature.icon}
                  </div>
                  <span className="wf-card__num">
                    {feature.num}
                  </span>
                </div>

                <div className="wf-card__content">
                  <h4 className="wf-card__title">
                    {feature.title}
                  </h4>
                  <p className="wf-card__desc">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
