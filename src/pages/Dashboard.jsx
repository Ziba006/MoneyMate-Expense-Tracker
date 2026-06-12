import DashboardLayout from "../components/Dashboardlayout";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({ darkMode, setDarkMode }) {
    const [budget, setBudget] = useState(null);
    const navigate = useNavigate();
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [recentTransactions, setRecentTransactions] = useState([]);
    const [budgetUsage, setBudgetUsage] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const netSavings = totalIncome - totalExpenses;

    useEffect(() => {

      const currentUser =
  localStorage.getItem(
    "currentUser"
  );

const savedExpenses =
  localStorage.getItem(
    `${currentUser}_expenses`
  );
  

  if (savedExpenses) {

    const expenses =
      JSON.parse(savedExpenses);

    const total =
      expenses.reduce(
        (sum, expense) =>
          sum + Number(expense.amount),
        0
      );

    setTotalExpenses(total);

    setRecentTransactions(
      expenses.slice(0, 3)
    );

    const savedBudget =
      localStorage.getItem(`${currentUser}_budget`);

    if (savedBudget) {

      const budgetData =
        JSON.parse(savedBudget);

      const budget =
        Number(budgetData.monthlyBudget);

      setBudget(
        budgetData.monthlyBudget
      );

      if (budget > 0) {

        const usage =
          Math.round(
            (total / budget) * 100
          );

        setBudgetUsage(usage);
      }
    }
  }

  const savedIncomes =
  localStorage.getItem(`${currentUser}_incomes`);

if(savedIncomes){

  const incomes =
    JSON.parse(savedIncomes);

  const totalIncomeAmount =
    incomes.reduce(
      (sum, income) =>
        sum + Number(income.amount),
      0
    );

  setTotalIncome(
    totalIncomeAmount
  );

}

}, []);

  return (
    <DashboardLayout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    >

      <div className="welcome-section">
        <h2>Welcome Back 👋</h2>

        <p>
          Track your expenses, manage budgets,
          and stay financially organized.
        </p>
      </div>

      <div className="action-grid">

        <div className="action-card"  onClick={() => navigate("/transactions")}>
                {totalExpenses > 0 ? (
            <>
            <h4>💸 Total Expenses</h4>
            <h3>₹{totalExpenses}</h3>
            <small>📝 View Transactions</small>
            </>
        ) : (
          <>
            <h4>➕ Add Expense</h4><br></br>
            <p>Track your spending</p>
            <small>Start Now →</small>
            </>
  )}
        </div>

        <div className="action-card"   onClick={() => navigate("/transactions")}>
                {totalIncome > 0 ? (
            <>
            <h4>💰 Total Income</h4>
            <h3>₹{totalIncome}</h3><br></br>
            <small>➕ Add More Income</small>
            </>
        ) : (
          <>
            <h4>💰 Add Income</h4><br></br>
            <p>Record earnings</p>
            <small>Add Income →</small>
            </>
        )}
                </div>

            <div
        className="action-card" onClick={() => navigate("/budget")}>

        {budget ? (
            <>
            <h4>🎯 Monthly Budget</h4>
            <h3>₹{budget}</h3>
            <small>✏️ Edit Budget</small>
            </>
        ) : (
          <>
            <h4>🎯 Set Budget</h4>
            <p>Plan monthly limits</p>
            <small>Start Now →</small>
            </>
        )}

</div>
        <div className="action-card"  onClick={() => navigate("/analytics")}>       
        <h4>💵 Net Savings</h4>
        <h3>₹{netSavings}</h3>
        <small>📊 View Analytics →</small>
        </div>
      </div>

      <div className="overview-section">

        <h3>Financial Overview</h3>

        <div className="overview-grid">

          <div className="overview-card">
            <h5>Total Income</h5>
            <h2>₹{totalIncome}</h2>
          </div>

          <div className="overview-card">
          <h5>Total Expenses</h5>
        <h2>₹{totalExpenses}</h2>
          </div>

          <div className="overview-card">
            <h5>Budget Usage</h5>
            <h2>{budgetUsage}%</h2>
            <div className="progress-bar">
        <div
            className="progress-fill"
            style={{
            width: `${budgetUsage}%`
            }}
        ></div>
</div>
          </div>

        </div>

      </div>

    <div className="empty-card">

  <h4>📝 Recent Transactions</h4>

  {
    recentTransactions.length === 0 ? (

      <p>No transactions yet.</p>

    ) : (

      recentTransactions.map(
        (transaction, index) => (

          <div
            key={index}
            className="dashboard-transaction"
          >

            <div>

              <h6>
                {transaction.description}
              </h6>

              <small>
                {transaction.category}
              </small>

            </div>

            <strong>
              ₹{transaction.amount}
            </strong>

          </div>

        )
      )

    )
  }

</div>

     <div className="empty-card">

        <h4>🎯 Monthly Budget</h4>

        {budget ? (
            <>
            <h3>₹{budget}</h3>
            <p>{budgetUsage}%</p>
            </>
        ) : (
            <p>No budget set yet.</p>
        )}

</div>

    </DashboardLayout>
  );
}

export default Dashboard;