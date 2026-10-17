import SystemOverview from './SystemOverview';
import AdvisoryProcess from './AdvisoryProcess';
import WorkflowBenefits from './WorkflowBenefits';
import WorkflowFeatures from './WorkflowFeatures';
import '../styles/SystemWorkflow.css';

export function SystemWorkflow() {
  return (
    <>
      {/* 2A: System Introduction */}
      <SystemOverview />

      {/* 2B: 5-Step Advisory Process — Bento Grid */}
      <AdvisoryProcess />

      {/* 2C: Benefits */}
      <WorkflowBenefits />

      {/* 2D: Key Features */}
      <WorkflowFeatures />
    </>
  );
}

export default SystemWorkflow;
