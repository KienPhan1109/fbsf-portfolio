import SystemOverview from './SystemOverview';
import AdvisoryProcess from './AdvisoryProcess';
import WorkflowBenefits from './WorkflowBenefits';
import WorkflowFeatures from './WorkflowFeatures';
import WorkflowRoadmap from './WorkflowRoadmap';
import './SystemWorkflow.css';

export {
  SystemOverview,
  AdvisoryProcess,
  WorkflowBenefits,
  WorkflowFeatures,
  WorkflowRoadmap,
};

export default function SystemWorkflow() {
  return (
    <>
      {/* 2A: System Introduction (100vh) */}
      <SystemOverview />

      {/* 2B: 5-Step Advisory Process (100vh) */}
      <AdvisoryProcess />

      {/* 2C: Benefits (100vh) */}
      <WorkflowBenefits />

      {/* 2D: Key Features (100vh) */}
      <WorkflowFeatures />

      {/* 2E: Section Navigation Roadmap (100vh) */}
      <WorkflowRoadmap />
    </>
  );
}
