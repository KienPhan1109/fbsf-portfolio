import { useInView, useCountUp } from '../../hooks/useAnimations';
import './Hero.css';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 500, suffix: '+', label: 'Gia đình tư vấn' },
  { value: 15, suffix: '%', label: 'Lợi suất BQ/năm' },
  { value: 98, suffix: '%', label: 'Khách hài lòng' },
  { value: 10, suffix: 'năm', label: 'Kinh nghiệm' },
];

function StatCard({ value, suffix, label }: StatItem) {
  const [ref, isVisible] = useInView({ threshold: 0.3 });
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="stat-card" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="stat-card__value">
        <span className="font-mono stat-card__number">{count}</span>
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


              <h1 className="hero__title">
                  <span className="hero__title-line">
                      <span className="hero__title-highlight">
                          FBSF Cash Flow
                      </span>
                  </span>
                  <span className="hero__title-line">Optimization Fund</span>
              </h1>

              <p className="hero__subtitle">
                  A disciplined investment strategy balancing
                  long-term growth, risk management, and financial stability
              </p>

              <div className="hero__ctas">
                  <a
                      href="#financial-profile"
                      className="hero__btn hero__btn--primary"
                  >
                      <span>Bắt đầu tư vấn</span>
                      <span className="hero__btn-icon">→</span>
                  </a>
                  <a
                      href="#system-workflow"
                      className="hero__btn hero__btn--secondary"
                  >
                      <span>Tìm hiểu thêm</span>
                  </a>
              </div>

              <div className="hero__stats">
                  {STATS.map((stat) => (
                      <StatCard key={stat.label} {...stat} />
                  ))}
              </div>
          </div>
      </section>
  );
}
