import { useInView } from '../../hooks/useAnimations';
import '../ui/ui.css';
import './SystemWorkflow.css';
import './WorkflowBenefits.css';

const BENEFITS = [
  {
    num: '01',
    title: 'Tối ưu dòng tiền',
    desc: 'Phân tích cơ cấu thu chi, kiểm soát lãng phí và tái phân bổ ngân sách khoa học nhằm tối đa hóa thặng dư hàng tháng.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Quản trị rủi ro đa tầng',
    desc: 'Đa dạng hóa danh mục theo Modern Portfolio Theory, giảm thiểu tối đa rủi ro phi hệ thống trước biến động thị trường.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Tăng trưởng bền vững',
    desc: 'Chiến lược phân bổ tài sản dài hạn bám sát mục tiêu cụ thể, bảo toàn vốn và tăng trưởng ổn định qua các chu kỳ thị trường.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Báo cáo IPS chuẩn thể chế',
    desc: 'Tự động tạo văn kiện Investment Policy Statement tiêu chuẩn quốc tế, ghi nhận đầy đủ mục tiêu, khẩu vị rủi ro và khung giải ngân.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Cá nhân hóa theo Profile',
    desc: 'Tùy biến khuyến nghị đầu tư độc bản dựa trên hồ sơ tài chính gia đình, nghĩa vụ dòng tiền và khẩu vị rủi ro riêng biệt.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Tái cân bằng thông minh',
    desc: 'Giám sát tỷ trọng danh mục liên tục theo Efficient Frontier, chủ động gửi cảnh báo và gợi ý tái cơ cấu khi thị trường biến động.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
];

export default function WorkflowBenefits() {
  const [benefitsRef, benefitsVisible] = useInView();

  return (
    <section
      className="section section--alt wb-section"
      id="system-benefits"
      aria-label="Lợi ích đạt được"
    >
      <div className="container">
        <div
          className={`animate-on-scroll ${benefitsVisible ? 'is-visible' : ''}`}
          ref={benefitsRef as React.RefObject<HTMLDivElement>}
        >
          {/* Section Heading matching previous sections */}
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                KEY CLIENT BENEFITS
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Giải pháp toàn diện giúp gia đình đạt được mục tiêu tài chính một cách khoa học, an toàn và bền vững.
            </p>
          </div>

          {/* Clean, Refined Minimal Cards */}
          <div className="wb-grid">
            {BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`wb-card animate-on-scroll stagger-${i + 1} ${benefitsVisible ? 'is-visible' : ''}`}
              >
                <div className="wb-card__header">
                  <div className="wb-card__icon">
                    {benefit.icon}
                  </div>
                  <span className="wb-card__num">
                    {benefit.num}
                  </span>
                </div>

                <div className="wb-card__content">
                  <h4 className="wb-card__title">
                    {benefit.title}
                  </h4>
                  <p className="wb-card__desc">
                    {benefit.desc}
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
