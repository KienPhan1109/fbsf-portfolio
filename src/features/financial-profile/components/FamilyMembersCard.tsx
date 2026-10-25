import {
  IdcardOutlined,
  BankOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  WalletOutlined,
} from '@ant-design/icons';
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
                      <span className="fp-member-card__detail-icon"><IdcardOutlined style={{ fontSize: 13 }} /></span>
                      {member.occupation}
                    </span>
                    <span className="fp-member-card__detail">
                      <span className="fp-member-card__detail-icon"><BankOutlined style={{ fontSize: 13 }} /></span>
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
                <WalletOutlined style={{ fontSize: 20, color: '#047857' }} />
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
                <HomeOutlined style={{ fontSize: 18, color: '#047857' }} />
              </div>
              <div className="fp-additional__card-content">
                <div className="fp-additional__card-title">{additionalInfo.housing}</div>
                <div className="fp-additional__card-text">{additionalInfo.housingDetail}</div>
              </div>
            </div>
            <div className="fp-additional__card">
              <div className="fp-additional__card-icon-wrap">
                <SafetyCertificateOutlined style={{ fontSize: 18, color: '#047857' }} />
              </div>
              <div className="fp-additional__card-content">
                <div className="fp-additional__card-title">{additionalInfo.insurance}</div>
                <div className="fp-additional__card-text">{additionalInfo.insuranceDetail}</div>
              </div>
            </div>
            <div className="fp-additional__card">
              <div className="fp-additional__card-icon-wrap">
                <TeamOutlined style={{ fontSize: 18, color: '#047857' }} />
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
