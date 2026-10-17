import { useInView } from '../../../shared/hooks/useAnimations';
import introImg from '../../../assets/1791220049300_2607338586959584821_2607338586959584821_996d4df7c6902ce1edbbc6c6d1a15123.jpg';
import '../../../shared/ui/ui.css';
import '../styles/SystemWorkflow.css';

export function SystemOverview() {
  const [introRef, introVisible] = useInView();

  return (
    <section
      className="section section--alt"
      id="system-workflow"
      aria-label="Giới thiệu hệ thống"
    >
      <div className="container container--wide">
        <div
          className={`sw-intro animate-on-scroll ${introVisible ? 'is-visible' : ''}`}
          ref={introRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                OUR INVESTMENT FRAMEWORK
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              FBSF evaluates each client’s financial profile,
              risk tolerance, investment objectives, and cash
              flow needs to construct a diversified and
              optimized portfolio
            </p>
          </div>

          <div className="sw-intro__grid">
            <div className="sw-intro__text">
              <h3 className="sw-intro__title">
                Analyze comprehensively.
                <br />
                Optimize systematically.
                <br />
                Invest with purpose.
              </h3>
              <p className="sw-intro__description">
                The FBSF system aggregates family financial data, evaluates risk tolerance,
                screens high-potential equities, and optimizes portfolio allocation through
                Markowitz Modern Portfolio Theory—automatically generating a professional
                Investment Policy Statement (IPS).
              </p>
              <p className="sw-intro__description">
                Every step of the framework is rigorously designed to ensure tailored
                investment recommendations that align seamlessly with each family's unique
                financial profile and long-term goals.
              </p>
            </div>
            <div className="sw-intro__visual">
              <div className="sw-intro__blob-container">
                <div className="sw-intro__blob-aura" />
                <div className="sw-intro__blob-frame">
                  <img
                    src={introImg}
                    alt="FBSF Portfolio Analysis and Cash Flow Planning"
                    className="sw-intro__blob-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SystemOverview;
