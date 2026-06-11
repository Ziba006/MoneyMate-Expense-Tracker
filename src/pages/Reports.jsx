import DashboardLayout from "../components/DashboardLayout";
import "./Reports.css";
import { useState, useEffect } from "react";

function Reports({ darkMode, setDarkMode }) {
const [allTransactions, setAllTransactions] = useState([]);
const [incomeCount, setIncomeCount] = useState(0);

const [expenseCount, setExpenseCount] = useState(0);
const [selectedMonth,
setSelectedMonth] =
  useState(
    new Date().getMonth()
  );

const [topExpenseCategory,
setTopExpenseCategory] =
  useState("N/A");

useEffect(() => {

  const expenses =
    JSON.parse(
      localStorage.getItem("expenses")
    ) || [];

  const incomes =
    JSON.parse(
      localStorage.getItem("incomes")
    ) || [];

  const formattedExpenses =
    expenses.map((expense) => ({
      ...expense,
      type: "expense"
    }));

  const formattedIncomes =
    incomes.map((income) => ({
      ...income,
      type: "income"
    }));

  const transactions = [

    ...formattedExpenses,

    ...formattedIncomes

  ];

  transactions.sort(

    (a, b) =>
      new Date(b.date) -
      new Date(a.date)

  );

  setAllTransactions(
    transactions
  );

  setIncomeCount(
  formattedIncomes.length
);

setExpenseCount(
  formattedExpenses.length
);

const categoryTotals = {};

formattedExpenses.forEach(
  (expense) => {

    categoryTotals[
      expense.category
    ] =
      (
        categoryTotals[
          expense.category
        ] || 0
      ) +
      Number(expense.amount);

  }
);

const categories =
  Object.entries(
    categoryTotals
  );

if(categories.length > 0){

  const highest =
    categories.reduce(
      (max, current) =>

        current[1] > max[1]

          ? current

          : max
    );

  setTopExpenseCategory(
    highest[0]
  );

}

const filteredTransactions =
  transactions.filter(
    (transaction) =>

      new Date(
        transaction.date
      ).getMonth()

      === selectedMonth
  );

  setAllTransactions(
  filteredTransactions
);

}, [selectedMonth]);

  return (
    <DashboardLayout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    >

      <div className="reports-container">

        <div className="reports-header">

          <h2>📄 Reports</h2>

          <p>
            Review your transaction history and monthly activity.
          </p>

        </div>

        {/* Month Filter */}

        <div className="report-card">
<div className="report-filter">
          <h3>📅 Select Month</h3>

       <select
  value={selectedMonth}
  onChange={(e) =>
    setSelectedMonth(
      Number(e.target.value)
    )
  }
>
  <option value={0}>January</option>
  <option value={1}>February</option>
  <option value={2}>March</option>
   <option value={3}>April</option>
    <option value={4}>May</option>
     <option value={5}>June</option>
      <option value={6}>July</option>
       <option value={7}>August</option>
        <option value={8}>September</option>
         <option value={9}>October</option>
          <option value={10}>November</option>
  <option value={11}>December</option>
</select>
</div>
        </div>

        {/* Statement */}

        <div className="report-card">

          <h3>📋 Transaction Statement</h3>

         {
  allTransactions.length === 0 ? (

    <div className="empty-state">

      <p>No transactions available.</p>

      <span>
        Start adding expenses and income.
      </span>

    </div>

  ) : (

    allTransactions.map(
      (transaction, index) => (

        <div
          key={index}
          className="statement-item"
        >

          <div>

            <h4>

              {
                transaction.type ===
                "income"

                  ? transaction.description

                  : transaction.description
              }

            </h4>

            <small>

              {
                transaction.type ===
                "income"

                  ? transaction.source

                  : transaction.category
              }

              {" • "}

              {new Date(
                transaction.date
              ).toLocaleDateString(
                "en-IN",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                }
              )}

            </small>

          </div>

          <h4

            className={
              transaction.type ===
              "income"

                ? "income-amount"

                : "expense-amount"
            }

          >

            {
              transaction.type ===
              "income"

                ? "+"

                : "-"
            }

            ₹{transaction.amount}

          </h4>

        </div>

      )
    )

  )
}
        </div>

        {/* Monthly Summary */}

        <div className="report-card">

          <h3>📊 Monthly Summary</h3>

          <div className="summary-grid">

            <div className="summary-item">

              <h4>Total Transactions</h4>

              <p>{allTransactions.length}</p>

            </div>

            <div className="summary-item">

              <h4>Total Income</h4>

              <p>{incomeCount}</p>

            </div>

            <div className="summary-item">

              <h4>Expense Entries</h4>

              <p>{expenseCount}</p>

            </div>

            <div className="summary-item">

              <h4>Top Expense</h4>

              <p>{topExpenseCategory}</p>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Reports;