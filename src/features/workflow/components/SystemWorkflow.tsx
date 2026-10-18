import SystemOverview from './SystemOverview';
import AdvisoryProcess from './AdvisoryProcess';
import ServicesAndCapabilities from './ServicesAndCapabilities';
import '../styles/SystemWorkflow.css';

export function SystemWorkflow() {
  return (
    <>
      {/* 2A: System Introduction — Organic Blob Sphere (Preserved) */}
      <SystemOverview />

      {/* 2B: 5-Step Advisory Process — Bento Grid (Preserved) */}
      <AdvisoryProcess />

      {/* 2C & 2D: Merged Institutional Asymmetric Bento (Our Services & Investment Capabilities) */}
      <ServicesAndCapabilities />
    </>
  );
}

export default SystemWorkflow;
