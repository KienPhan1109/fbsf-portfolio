import { useState } from 'react';
import { useScrollSpy, useScrolled } from '../../hooks/useAnimations';
import logoImg from '../../assets/Logo.png';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'system-workflow', label: 'Overview' },
  { id: 'financial-profile', label: 'Profile' },
  { id: 'risk-assessment', label: 'Risk' },
  { id: 'equity-analysis', label: 'Equity' },
  { id: 'markowitz', label: 'Portfolio' },
  { id: 'financial-plan', label: 'Plan' },
  { id: 'ips-report', label: 'IPS' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isScrolled = useScrolled(30);
  const activeId = useScrollSpy(SECTION_IDS, 120);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to Roadmap section if module is upcoming
      const roadmapEl = document.getElementById('system-roadmap');
      if (roadmapEl) {
        roadmapEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileOpen(false);
  };

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      id="navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, 'hero')} title="FBSF Fund">
          <img src={logoImg} alt="Logo" className="navbar__logo-img" />
          <div className="navbar__logo-brand">
            <span className="navbar__logo-fbs">FBS</span>
            <span className="navbar__logo-f-accent">F</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar__link ${activeId === item.id ? 'navbar__link--active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
              title={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="navbar__cta">
          <a
            href="#financial-profile"
            className="btn btn--primary btn--sm navbar__cta-btn"
            onClick={(e) => handleNavClick(e, 'financial-profile')}
          >
            <span>Get Started</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle ${isMobileOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${isMobileOpen ? 'is-open' : ''}`}>
        {NAV_ITEMS.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`navbar__mobile-link ${activeId === item.id ? 'navbar__mobile-link--active' : ''}`}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            <span className="navbar__mobile-link-num">0{index + 1}</span>
            {item.label}
          </a>
        ))}
        <a
          href="#financial-profile"
          className="btn btn--primary"
          style={{ marginTop: '16px' }}
          onClick={(e) => handleNavClick(e, 'financial-profile')}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
