import { useInView, useCountUp } from '../../hooks/useAnimations';
import './Hero.css';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 500, suffix: '+', label: 'Gia đình tư vấn' },
  { value: 15, suffix: '%+', label: 'Lợi suất BQ/năm' },
  { value: 98, suffix: '%', label: 'Khách hài lòng' },
  { value: 10, suffix: ' năm+', label: 'Kinh nghiệm' },
];

function StatCard({ value, suffix, label }: StatItem) {
  const [ref, isVisible] = useInView({ threshold: 0.3 });
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="stat-card" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="stat-card__value">
        <span className="font-mono">{count}</span>
        <span className="stat-card__suffix">{suffix}</span>
      </div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Giới thiệu FBSF Fund">
      {/* Background Decorations */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-circle hero__bg-circle--1" />
        <div className="hero__bg-circle hero__bg-circle--2" />
        <div className="hero__bg-circle hero__bg-circle--3" />
        <div className="hero__bg-grid" />
      </div>

      {/* Main Content */}
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Smart Portfolio Advisory System
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">
            <span className="hero__title-highlight">FBSF Cash Flow</span>
          </span>
          <span className="hero__title-line">Optimization Fund</span>
        </h1>

        <p className="hero__subtitle">
          Tối ưu hóa dòng tiền — Kiến tạo tương lai tài chính vững chắc
          cho gia đình Việt bằng phương pháp Markowitz Modern Portfolio Theory.
        </p>

        <div className="hero__ctas">
          <a href="#financial-profile" className="btn btn--primary btn--lg">
            Bắt đầu tư vấn
          </a>
          <a href="#system-workflow" className="btn btn--secondary btn--lg">
            Tìm hiểu thêm
          </a>
        </div>

        <div className="hero__stats">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-text">Khám phá quy trình</span>
        <span className="hero__scroll-icon">↓</span>
      </div>
    </section>
  );
}
