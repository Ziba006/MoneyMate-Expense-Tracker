function FinancialInsight({
  topCategory,
  netSavings,
  savingsRate,
  budgetUsage
}) {

  return (
    <div className="analytics-section">

      <h3>💡 Financial Insight</h3>

      <div className="insight-card">

        <p>
          🏆 Highest spending category:
          {" "}
          {topCategory
            ? topCategory.name
            : "N/A"}
        </p>

        <p>
          💰 Savings:
          ₹{netSavings}
        </p>

        <p>
          📈 Savings Rate:
          {savingsRate}%
        </p>

        <p>
          🎯 Budget Usage:
          {budgetUsage}%
        </p>

      </div>

    </div>
  );
}

export default FinancialInsight;