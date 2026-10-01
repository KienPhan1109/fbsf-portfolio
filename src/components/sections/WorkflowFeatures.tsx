import { useInView } from '../../hooks/useAnimations';
import '../ui/ui.css';
import './SystemWorkflow.css';

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

export default function WorkflowFeatures() {
  const [featuresRef, featuresVisible] = useInView();

  return (
    <section
      className="section"
      id="system-features"
      aria-label="Tính năng nổi bật"
    >
      <div className="container">
        <div
          className={`sw-features animate-on-scroll ${featuresVisible ? 'is-visible' : ''}`}
          ref={featuresRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading">
            <span className="section-heading__badge">
              <span className="section-heading__badge-icon">🚀</span>
              Features
            </span>
            <h2 className="section-heading__title">
              Tính năng Nổi bật
            </h2>
            <p className="section-heading__subtitle">
              Công nghệ phân tích tài chính tiên tiến, được thiết kế chuyên biệt cho nhà đầu tư cá nhân.
            </p>
          </div>

          <div className="sw-features__grid">
            {KEY_FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`feature-card animate-on-scroll stagger-${i + 1} ${featuresVisible ? 'is-visible' : ''}`}
              >
                <div className="feature-card__icon">
                  {feature.icon}
                </div>
                <h4 className="feature-card__title">
                  {feature.title}
                </h4>
                <p className="feature-card__description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
