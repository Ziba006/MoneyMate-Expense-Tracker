import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from "recharts";

function IncomeExpenseBarChart({
  totalIncome,
  totalExpenses
}) {

  const chartData = [
    {
      name: "Income",
      amount: totalIncome
    },
    {
      name: "Expense",
      amount: totalExpenses
    }
  ];

  return (
    <div className="analytics-section">

      <h3>📈 Income vs Expense</h3>

      <div className="chart-container">

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <BarChart
            data={chartData}
          >

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="amount">
         <Cell fill="#266e42" />
          <Cell fill="#ef4444" />
      </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default IncomeExpenseBarChart;