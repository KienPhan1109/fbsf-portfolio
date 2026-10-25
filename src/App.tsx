import { Navbar, Footer } from './shared/layout';
import { ScrollProgressWidget } from './shared/ui/ScrollProgressWidget';
import { Hero } from './features/hero';
import { SystemWorkflow } from './features/workflow';
import { FinancialProfile } from './features/financial-profile';
import { RiskAssessment } from './features/risk-assessment';
import { EquityScreening } from './features/equity-screening';
import { MarkowitzOptimization } from './features/portfolio-optimization';
import { FinancialPlanRoadmap } from './features/financial-plan';
import { IpsReport } from './features/ips-report';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <ScrollProgressWidget />
      <Navbar />
      <main className="app__main">
        <Hero />
        <SystemWorkflow />
        <FinancialProfile />
        <RiskAssessment />
        <EquityScreening />
        <MarkowitzOptimization />
        <FinancialPlanRoadmap />
        <IpsReport />
      </main>
      <Footer />
    </div>
  );
}
