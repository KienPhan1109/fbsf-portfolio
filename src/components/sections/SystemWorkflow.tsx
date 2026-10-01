import SystemOverview from './SystemOverview';
import AdvisoryProcessC from './AdvisoryProcessC';
import WorkflowBenefits from './WorkflowBenefits';
import WorkflowFeatures from './WorkflowFeatures';
import WorkflowRoadmap from './WorkflowRoadmap';
import './SystemWorkflow.css';

export {
  SystemOverview,
  AdvisoryProcessC,
  WorkflowBenefits,
  WorkflowFeatures,
  WorkflowRoadmap,
};

export default function SystemWorkflow() {
  return (
    <>
      {/* 2A: System Introduction (100vh) */}
      <SystemOverview />

      {/* 2B: 5-Step Advisory Process — Bento Grid (100vh) */}
      <AdvisoryProcessC />

      {/* 2C: Benefits (100vh) */}
      <WorkflowBenefits />

      {/* 2D: Key Features (100vh) */}
      <WorkflowFeatures />

      {/* 2E: Section Navigation Roadmap (100vh) */}
      <WorkflowRoadmap />
    </>
  );
}
