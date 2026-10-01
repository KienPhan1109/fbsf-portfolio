import { useInView } from '../../hooks/useAnimations';
import '../ui/ui.css';
import './SystemWorkflow.css';

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

export default function WorkflowBenefits() {
  const [benefitsRef, benefitsVisible] = useInView();

  return (
    <section
      className="section section--alt"
      id="system-benefits"
      aria-label="Lợi ích đạt được"
    >
      <div className="container">
        <div
          className={`sw-benefits animate-on-scroll ${benefitsVisible ? 'is-visible' : ''}`}
          ref={benefitsRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading">
            <span className="section-heading__badge">
              <span className="section-heading__badge-icon">✨</span>
              Benefits
            </span>
            <h2 className="section-heading__title">
              Lợi ích Đạt được
            </h2>
            <p className="section-heading__subtitle">
              Giải pháp toàn diện giúp gia đình đạt được mục tiêu tài chính một cách khoa học và bền vững.
            </p>
          </div>

          <div className="sw-benefits__grid">
            {BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`feature-card animate-on-scroll stagger-${i + 1} ${benefitsVisible ? 'is-visible' : ''}`}
              >
                <div className="feature-card__icon">
                  {benefit.icon}
                </div>
                <h4 className="feature-card__title">
                  {benefit.title}
                </h4>
                <p className="feature-card__description">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
