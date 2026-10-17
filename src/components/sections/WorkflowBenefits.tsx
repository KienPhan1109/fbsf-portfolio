import { useInView } from "../../hooks/useAnimations";
import "../ui/ui.css";
import "./SystemWorkflow.css";
import "./WorkflowBenefits.css";

const BENEFITS = [
    {
        num: "01",
        title: "Household Cash Flow Engineering",
        desc: "Diagnosing structural leaks, eliminating deficits, and building automated monthly surpluses.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Markowitz Mean-Variance Asset Allocation",
        desc: "Construct an Optimal Risky Portfolio (ORP) tailored to each client's risk aversion and investment objectives.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "Goal-Based Multi-Stage Matching",
        desc: "Develop personalized financial roadmaps for major life goals, including homeownership and long-term capital preservation.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        ),
    },
    {
        num: "04",
        title: "Governance & Performance Benchmarking",
        desc: "Continuous portfolio monitoring and tracking against the market benchmark (VN-Index).",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
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
                    className={`animate-on-scroll ${benefitsVisible ? "is-visible" : ""}`}
                    ref={benefitsRef as React.RefObject<HTMLDivElement>}
                >
                    {/* Section Heading matching previous sections */}
                    <div className="section-heading sw-heading">
                        <h2 className="sw-heading__title">
                            <span className="sw-heading__title-highlight">
                                OUR SERVICES
                            </span>
                        </h2>
                        <p className="sw-heading__subtitle">
                            Personalized Financial Planning & Investment
                            Management
                        </p>
                    </div>

                    {/* Clean, Refined Minimal Cards */}
                    <div className="wb-grid">
                        {BENEFITS.map((benefit, i) => (
                            <div
                                key={benefit.title}
                                className={`wb-card animate-on-scroll stagger-${i + 1} ${benefitsVisible ? "is-visible" : ""}`}
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
