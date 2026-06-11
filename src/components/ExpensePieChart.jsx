import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function ExpensePieChart({
  categoryData
}) {

  const CATEGORY_COLORS = {
  "Food & Dining": "#82ca9d",
  "Shopping": "#ff8042",
  "Transportation": "#36A2EB",
  "Entertainment": "#FFBB28",
  "Healthcare": "#FF6B6B",
  "Education": "#8884d8"
};

  return (

    <div className="analytics-section">

      <h3>🥧 Expense Breakdown</h3>

      <div className="chart-container">

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <PieChart>

            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >

              {
                categoryData.map(
                  (entry, index) => (

                    <Cell
                      key={index}
                       fill={
              CATEGORY_COLORS[entry.name] ||"#686565"} />
                  )
                )
              }

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default ExpensePieChart;