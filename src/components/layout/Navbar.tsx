import { useState } from 'react';
import { useScrollSpy, useScrolled } from '../../hooks/useAnimations';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'hero', label: 'Tổng quan' },
  { id: 'system-workflow', label: 'Hệ thống' },
  { id: 'financial-profile', label: 'Hồ sơ tài chính' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isScrolled = useScrolled(50);
  const activeId = useScrollSpy(SECTION_IDS, 120);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, 'hero')}>
          <div className="navbar__logo-icon" aria-hidden="true">F</div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">FBSF Fund</span>
            <span className="navbar__logo-tagline">Cash Flow Optimization</span>
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
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="navbar__cta">
          <a
            href="#financial-profile"
            className="btn btn--primary btn--sm"
            onClick={(e) => handleNavClick(e, 'financial-profile')}
          >
            Bắt đầu tư vấn
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
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`navbar__mobile-link ${activeId === item.id ? 'navbar__mobile-link--active' : ''}`}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#financial-profile"
          className="btn btn--primary"
          style={{ marginTop: '16px' }}
          onClick={(e) => handleNavClick(e, 'financial-profile')}
        >
          Bắt đầu tư vấn
        </a>
      </div>
    </nav>
  );
}
