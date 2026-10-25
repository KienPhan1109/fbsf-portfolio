import { useInView } from "../../../shared/hooks/useAnimations";
import {
    AimOutlined,
    SafetyCertificateOutlined,
    SlidersOutlined,
} from "@ant-design/icons";
import { gsoepData } from "../data/riskData";
import "../../../shared/ui/ui.css";
import "../../workflow/styles/SystemWorkflow.css";
import "../RiskAssessment.css";

export function GsoepModelCard() {
    const [modelRef, modelVisible] = useInView();

    return (
        <section
            className="section ra-section"
            id="risk-coefficient"
            aria-label="Hệ số ngại rủi ro và hàm hữu dụng Markowitz"
        >
            <div className="container container--wide">
                <div
                    className={`ra-wrapper animate-on-scroll ${modelVisible ? "is-visible" : ""}`}
                    ref={modelRef as React.RefObject<HTMLDivElement>}
                >
                    {/* Section Heading */}
                    <div className="section-heading sw-heading text-left">
                        <h2 className="sw-heading__title">
                            <span className="sw-heading__title-highlight">
                                CRRA RISK AVERSION &amp; UTILITY MODEL
                            </span>
                        </h2>
                        <p className="sw-heading__subtitle">
                            Establish a risk aversion coefficient of A = 5.07
                            based on the 2025 GSOEP framework and apply the
                            Mean-Variance utility function to portfolio
                            optimization.
                        </p>
                    </div>

                    <div className="ra-academic-grid">
                        {/* Left Column: Visual Distribution Histogram Chart (No Table) */}
                        <div className="ra-academic-card">
                            <div className="ra-academic-card__header">
                                <h3 className="ra-academic-card__title">
                                    Risk Aversion Coefficient Classification
                                    (GSOEP)
                                </h3>
                                <p className="ra-academic-card__subtitle">
                                    Standardized classification of risk aversion
                                    parameters based on the German
                                    Socio-Economic Panel (GSOEP).
                                </p>
                            </div>

                            {/* Visual Distribution Chart (Probability Mass Histogram) */}
                            <div className="ra-dist-chart">
                                <div className="ra-dist-bars">
                                    {gsoepData.map((row, idx) => {
                                        const pctVal = parseInt(
                                            row.probabilityMass,
                                            10,
                                        );
                                        return (
                                            <div
                                                key={idx}
                                                className={`ra-dist-col ${row.isClientCategory ? "is-active" : ""}`}
                                            >
                                                <div className="ra-dist-col__value font-mono">
                                                    {row.probabilityMass}
                                                </div>
                                                <div className="ra-dist-col__bar-track">
                                                    <div
                                                        className="ra-dist-col__bar-fill"
                                                        style={{
                                                            height: `${pctVal * 4.6}px`,
                                                        }}
                                                    />
                                                </div>
                                                <div className="ra-dist-col__range font-mono">
                                                    {row.range}
                                                </div>
                                                <div className="ra-dist-col__a font-mono">
                                                    A ={" "}
                                                    {row.riskAversion.toFixed(
                                                        2,
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="ra-academic-footnote font-mono">
                                Source: Hochmuth, Merz, &amp; Prettensthaler
                                (2025), based on GSOEP.
                            </div>
                        </div>

                        {/* Right Column: Light Academic Card with Dark Forest Green Formula Spotlight */}
                        <div className="ra-academic-card">
                            <div className="ra-academic-card__header">
                                <h3 className="ra-academic-card__title">
                                    Utility Function &amp; Portfolio Evaluation
                                </h3>
                                <p className="ra-academic-card__subtitle">
                                    Input parameters for the Mean-Variance
                                    Markowitz portfolio optimization model.
                                </p>
                            </div>

                            {/* Formula Spotlight Card (Retained Deep Forest Green Spotlight) */}
                            <div className="ra-formula-spotlight ra-formula-spotlight--forest">
                                <div className="ra-formula-spotlight__top">
                                    <span className="ra-formula-badge font-mono">
                                        INVESTOR UTILITY FUNCTION
                                    </span>
                                </div>

                                <div className="ra-formula-display font-mono">
                                    <span className="ra-formula-main">
                                        U = E(r) −{" "}
                                        <span className="ra-formula-half">
                                            ½
                                        </span>{" "}
                                        ·{" "}
                                        <strong className="ra-formula-a">
                                            A
                                        </strong>{" "}
                                        ·{" "}
                                        <span className="ra-formula-var">
                                            σ²
                                        </span>
                                    </span>
                                </div>

                                <div className="ra-formula-standardized font-mono">
                                    Standardized Risk Aversion Coefficient: A = 5.07
                                </div>
                            </div>

                            {/* Exact Original Narrative Analysis (100% Full Uncut Text) */}
                            <div className="ra-takeaways">
                                <div className="ra-takeaway-item">
                                    <div className="ra-takeaway-icon">
                                        <AimOutlined
                                            style={{
                                                color: "#059669",
                                                fontSize: 16,
                                            }}
                                        />
                                    </div>
                                    <div className="ra-takeaway-text">
                                        <strong>
                                            Survey-Based Assessment:
                                        </strong>{" "}
                                        Mr. Nam’s willingness-to-take-risk score
                                        of <strong>4/10</strong> places the
                                        household in the <strong>[4–6]</strong>{" "}
                                        risk-aversion group, representing the
                                        most prevalent group in the sample
                                        (53%). The corresponding CRRA risk
                                        aversion coefficient is{" "}
                                        <strong>A = 5.07</strong>.
                                    </div>
                                </div>
                                <div className="ra-takeaway-item">
                                    <div className="ra-takeaway-icon">
                                        <SafetyCertificateOutlined
                                            style={{
                                                color: "#059669",
                                                fontSize: 16,
                                            }}
                                        />
                                    </div>
                                    <div className="ra-takeaway-text">
                                        <strong>Investment Philosophy:</strong>{" "}
                                        The household prioritizes capital
                                        preservation and risk control while
                                        remaining willing to accept a reasonable
                                        level of volatility to achieve long-term
                                        financial goals.
                                    </div>
                                </div>
                                <div className="ra-takeaway-item">
                                    <div className="ra-takeaway-icon">
                                        <SlidersOutlined
                                            style={{
                                                color: "#059669",
                                                fontSize: 16,
                                            }}
                                        />
                                    </div>
                                    <div className="ra-takeaway-text">
                                        <strong>
                                            Markowitz Model Parameter:
                                        </strong>{" "}
                                        The risk aversion coefficient{" "}
                                        <strong>A = 5.07</strong> serves as the
                                        risk-weighting parameter in the
                                        Mean-Variance Markowitz optimization
                                        model, supporting the identification of
                                        an optimal portfolio aligned with the
                                        household’s financial objectives.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GsoepModelCard;
