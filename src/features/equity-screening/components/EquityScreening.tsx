import StockSelectionCriteriaCard from './StockSelectionCriteriaCard';
import SelectedStockAnalysisTable from './SelectedStockAnalysisTable';
import PerformanceEvaluationTable from './PerformanceEvaluationTable';

export function EquityScreening() {
  return (
    <>
      {/* 5A: Selection Criteria */}
      <StockSelectionCriteriaCard />

      {/* 5B: Selected Equities Analysis */}
      <SelectedStockAnalysisTable />

      {/* 5C: Performance Evaluation */}
      <PerformanceEvaluationTable />
    </>
  );
}

export default EquityScreening;
