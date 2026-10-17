import RiskSurveyQuestionnaire from './RiskSurveyQuestionnaire';
import RiskScoreSummary from './RiskScoreSummary';
import GsoepModelCard from './GsoepModelCard';

export function RiskAssessment() {
  return (
    <>
      {/* 4A: Risk Questionnaire */}
      <RiskSurveyQuestionnaire />

      {/* 4B: Risk Score Classification */}
      <RiskScoreSummary />

      {/* 4C: CRRA Model & Utility */}
      <GsoepModelCard />
    </>
  );
}

export default RiskAssessment;
