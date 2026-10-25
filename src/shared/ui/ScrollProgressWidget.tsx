import { ArrowUpOutlined } from '@ant-design/icons';
import { useScrollProgress, useScrolled } from '../hooks/useAnimations';
import './ScrollProgressWidget.css';

export function ScrollProgressWidget() {
  const progress = useScrollProgress();
  const isScrolled = useScrolled(220);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circular perimeter calculation: 2 * PI * r
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      {/* 1. Top Reading Progress Line */}
      <div
        className="global-scroll-progress"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      >
        <div
          className="global-scroll-progress__fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 2. Floating Circular Progress & Back-to-Top Widget */}
      <button
        type="button"
        className={`scroll-top-widget ${isScrolled ? 'scroll-top-widget--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <svg
          className="scroll-top-widget__svg"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          {/* Background Track */}
          <circle
            className="scroll-top-widget__track"
            cx="24"
            cy="24"
            r={radius}
          />
          {/* Animated Progress Meter */}
          <circle
            className="scroll-top-widget__meter"
            cx="24"
            cy="24"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        {/* Center Up Icon */}
        <ArrowUpOutlined className="scroll-top-widget__icon" />

        {/* Hover Micro Tooltip */}
        <span className="scroll-top-widget__tooltip" aria-hidden="true">
          Top <span className="scroll-top-widget__tooltip-pct">{progress}%</span>
        </span>
      </button>
    </>
  );
}

export default ScrollProgressWidget;
