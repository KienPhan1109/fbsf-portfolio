import { useInView, useCountUp } from '../../hooks/useAnimations';
import bgImg from '../../assets/background.jpg';
import './Hero.css';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 500, suffix: '+', label: 'Families Advised' },
  { value: 15, suffix: '%', label: 'Target Annual Return' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 10, suffix: ' Years', label: 'Fund Experience' },
];

function StripStatItem({ value, suffix, label }: StatItem) {
  const [ref, isVisible] = useInView({ threshold: 0.3 });
  const count = useCountUp(value, 3500, isVisible);

  return (
    <div className="hero-strip__item" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="hero-strip__value">
        <span className="font-mono hero-strip__number">{count}</span>
        <span className="hero-strip__suffix">{suffix}</span>
      </div>
      <div className="hero-strip__label">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Giới thiệu FBSF Fund">
      {/* Background Architectural Photo & Gradient */}
      <div className="hero__bg" aria-hidden="true">
        <img src={bgImg} alt="" className="hero__bg-img" />
        <div className="hero__bg-gradient" />
        <div className="hero__bg-circle hero__bg-circle--1" />
        <div className="hero__bg-circle hero__bg-circle--2" />
        <div className="hero__bg-circle hero__bg-circle--3" />
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
      </div>

      {/* Full-Width Bottom Emerald Ribbon (Stats Strip) */}
      <div className="hero__bottom-strip">
        <div className="container container--wide hero-strip__container">
          <div className="hero-strip__grid">
            {STATS.map((stat) => (
              <StripStatItem key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
