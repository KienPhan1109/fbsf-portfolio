import { useInView } from '../../../shared/hooks/useAnimations';
import {
  familyMembers,
  additionalInfo,
  cashFlow,
  formatVND,
} from '../data/profileData';
import '../../../shared/ui/ui.css';
import '../../workflow/styles/SystemWorkflow.css';
import '../FinancialProfile.css';

function IconBriefcase() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
    </svg>
  );
}

function IconHouse({ size = 20 }: { readonly size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconShield({ size = 20 }: { readonly size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconUsers({ size = 20 }: { readonly size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconWallet() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

export function FamilyMembersCard() {
  const [familyRef, familyVisible] = useInView();

  return (
    <section
      className="section"
      id="financial-profile"
      aria-label="Hồ sơ tài chính gia đình"
    >
      <div className="container">
        <div
          className={`fp-family animate-on-scroll ${familyVisible ? "is-visible" : ""}`}
          ref={familyRef as React.RefObject<HTMLDivElement>}
        >
          <div className="section-heading sw-heading">
            <h2 className="sw-heading__title">
              <span className="sw-heading__title-highlight">
                HOUSEHOLD FINANCIAL PROFILE
              </span>
            </h2>
            <p className="sw-heading__subtitle">
              Collect and analyze household financial data, income structure, and living conditions for Mr. Nam and Mrs. Nu.
            </p>
          </div>

          <div className="fp-family__grid">
            {familyMembers.map((member, i) => (
              <div
                key={member.id}
                className={`fp-member-card ${member.isDependent ? "fp-member-card--dependent" : ""} animate-on-scroll stagger-${i + 1} ${familyVisible ? "is-visible" : ""}`}
              >
                <div className={`fp-member-avatar fp-member-avatar--${member.id}`}>
                  <span className="fp-member-avatar__initials">
                    {member.name === "Mr. Nam" ? "MN" : member.name === "Mrs. Nu" ? "NU" : member.id === "member-child1" ? "C1" : "C2"}
                  </span>
                </div>
                <div className="fp-member-card__info">
                  <div className="fp-member-card__top">
                    <div className="fp-member-card__name">{member.name}</div>
                    <span className={`fp-member-card__role-tag ${member.isDependent ? "fp-member-card__role-tag--dependent" : ""}`}>
                      {member.relationship}
                    </span>
                  </div>
                  <div className="fp-member-card__role">
                    {member.role} • Born in {member.birthYear} ({member.age} years old)
                  </div>
                  <div className="fp-member-card__details">
                    <span className="fp-member-card__detail">
                      <span className="fp-member-card__detail-icon"><IconBriefcase /></span>
                      {member.occupation}
                    </span>
                    <span className="fp-member-card__detail">
                      <span className="fp-member-card__detail-icon"><IconBuilding /></span>
                      {member.workplace}
                    </span>
                  </div>
                  {member.monthlyIncome ? (
                    <div className="fp-member-card__income">
                      {formatVND(member.monthlyIncome)}
                      <span className="fp-member-card__income-unit"> / month</span>
                    </div>
                  ) : (
                    <div className="fp-member-card__dependent-note">
                      Dependent — No Income
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Total Income Bar */}
          <div className="fp-income-total">
            <div className="fp-income-total__left">
              <div className="fp-income-total__icon-wrap">
                <IconWallet />
              </div>
              <div>
                <div className="fp-income-total__label">
                  Total Monthly Household Income
                </div>
                <div className="fp-income-total__sublabel">
                  Combined monthly income from the two primary earners.
                </div>
              </div>
            </div>
            <div className="fp-income-total__value font-mono">
              {formatVND(cashFlow.totalMonthlyIncome)}
            </div>
          </div>

          {/* Additional Info */}
          <div className="fp-additional">
            <div className="fp-additional__card">
              <div className="fp-additional__card-icon-wrap">
                <IconHouse size={18} />
              </div>
              <div className="fp-additional__card-content">
                <div className="fp-additional__card-title">{additionalInfo.housing}</div>
                <div className="fp-additional__card-text">{additionalInfo.housingDetail}</div>
              </div>
            </div>
            <div className="fp-additional__card">
              <div className="fp-additional__card-icon-wrap">
                <IconShield size={18} />
              </div>
              <div className="fp-additional__card-content">
                <div className="fp-additional__card-title">{additionalInfo.insurance}</div>
                <div className="fp-additional__card-text">{additionalInfo.insuranceDetail}</div>
              </div>
            </div>
            <div className="fp-additional__card">
              <div className="fp-additional__card-icon-wrap">
                <IconUsers size={18} />
              </div>
              <div className="fp-additional__card-content">
                <div className="fp-additional__card-title">Extended Family Support</div>
                <div className="fp-additional__card-text">{additionalInfo.parents}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FamilyMembersCard;
