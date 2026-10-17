import FamilyMembersCard from './FamilyMembersCard';
import FinancialGoalsCard from './FinancialGoalsCard';
import BalanceSheetCard from './BalanceSheetCard';
import CashFlowDiagnostics from './CashFlowDiagnostics';

export function FinancialProfile() {
  return (
    <>
      {/* 3A: Family Info */}
      <FamilyMembersCard />

      {/* 3B: Strategic Goals */}
      <FinancialGoalsCard />

      {/* 3C: Balance Sheet */}
      <BalanceSheetCard />

      {/* 3D: Cash Flow Analysis */}
      <CashFlowDiagnostics />
    </>
  );
}

export default FinancialProfile;
