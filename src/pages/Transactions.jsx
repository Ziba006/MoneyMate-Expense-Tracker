import DashboardLayout from "../components/DashboardLayout";
import "./Transactions.css";
const [showExpenseForm, setShowExpenseForm] = useState(false);

function Transactions({ darkMode, setDarkMode }) {
  return (
    <DashboardLayout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    >
      <div className="transactions-container">

        <div className="transactions-header">
          <h2>💰 Transactions</h2>
          <p>
            Manage your expenses and income.
          </p>
        </div>

        <div className="transaction-actions">

          <div className="transaction-card">
            <h4>➕ Add Expense</h4>
            <p>
              Record a new expense transaction.
            </p>
          </div>

          <div className="transaction-card">
            <h4>💰 Add Income</h4>
            <p>
              Record a new income source.
            </p>
          </div>

        </div>

        <div className="transaction-history">

          <h4>📝 Recent Transactions</h4>

          <div className="empty-state">
            <p>No transactions yet.</p>
            <span>
              Start by adding your first expense.
            </span>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Transactions;