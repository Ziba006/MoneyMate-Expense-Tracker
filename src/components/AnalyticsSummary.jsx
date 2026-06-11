function AnalyticsSummary({
  totalIncome,
  totalExpenses,
  netSavings,
  budgetUsage
}) {
  return (
    <div className="analytics-summary">

      <div className="analytics-card">
        <h4>💰 Income</h4>
        <h2>₹{totalIncome}</h2>
      </div>

      <div className="analytics-card">
        <h4>💸 Expense</h4>
        <h2>₹{totalExpenses}</h2>
      </div>

      <div className="analytics-card">
        <h4>💵 Savings</h4>
        <h2>₹{netSavings}</h2>
      </div>

      <div className="analytics-card">
        <h4>🎯 Budget</h4>
        <h2>{budgetUsage}%</h2>
      </div>

    </div>
  );
}

export default AnalyticsSummary;