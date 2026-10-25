import RiskSurveyQuestionnaire from './RiskSurveyQuestionnaire';
import GsoepModelCard from './GsoepModelCard';

export function RiskAssessment() {
  return (
    <>
      {/* 5A & 5B: Risk Questionnaire with Split Assessment Result */}
      <RiskSurveyQuestionnaire />

      {/* 5C: Academic GSOEP Model & Table 2.2 */}
      <GsoepModelCard />
    </>
  );
}

export default RiskAssessment;
