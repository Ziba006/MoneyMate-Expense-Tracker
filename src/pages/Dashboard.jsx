import DashboardLayout from "../components/DashboardLayout";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({ darkMode, setDarkMode }) {
    const [budget, setBudget] = useState(null);
    const navigate = useNavigate();

        useEffect(() => {

    const savedBudget =
        localStorage.getItem("budgetData");

    if(savedBudget){

        const budgetData =
        JSON.parse(savedBudget);

        setBudget(
        budgetData.monthlyBudget
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

        <div className="action-card">
          <h4>➕ Add Expense</h4>
        </div>

        <div className="action-card">
          <h4>💰 Add Income</h4>
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
            <h4>🎯 Set Budget</h4>
        )}

</div>

        <div className="action-card">
          <h4>📊 Analytics</h4>
        </div>

      </div>

      <div className="overview-section">

        <h3>Financial Overview</h3>

        <div className="overview-grid">

          <div className="overview-card">
            <h5>Total Income</h5>
            <h2>₹0</h2>
          </div>

          <div className="overview-card">
            <h5>Total Expenses</h5>
            <h2>₹0</h2>
          </div>

          <div className="overview-card">
            <h5>Budget Usage</h5>
            <h2>0%</h2>
          </div>

        </div>

      </div>

      <div className="empty-card">
        <h4>📝 Recent Transactions</h4>
        <p>No transactions yet.</p>
      </div>

     <div className="empty-card">

        <h4>🎯 Monthly Budget</h4>

        {budget ? (
            <>
            <h3>₹{budget}</h3>
            <p>0% Used</p>
            </>
        ) : (
            <p>No budget set yet.</p>
        )}

</div>

    </DashboardLayout>
  );
}

export default Dashboard;