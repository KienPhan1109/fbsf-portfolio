import OrpDonutChartCard from './OrpDonutChartCard';
import CorrelationPerformanceCard from './CorrelationPerformanceCard';
import OcpBentoGrid from './OcpBentoGrid';

export function MarkowitzOptimization() {
  return (
    <>
      {/* 6A: Optimal Risky Portfolio (Donut + Allocation Table) */}
      <OrpDonutChartCard />

      {/* 6B: Correlation Matrix, Performance & Objective */}
      <CorrelationPerformanceCard />

      {/* 6C: Optimal Complete Portfolio (OCP Bento Grid 2x2) */}
      <OcpBentoGrid />
    </>
  );
}

export default MarkowitzOptimization;
