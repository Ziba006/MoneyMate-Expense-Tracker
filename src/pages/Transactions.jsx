import DashboardLayout from "../components/DashboardLayout";
import ExpenseModal from "../components/ExpenseModal";
import IncomeModal from "../components/IncomeModal";
import "./Transactions.css";

import { useState, useEffect } from "react";

function Transactions({ darkMode, setDarkMode }) {

  // Expense States
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food & Dining");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [errorMessage, setErrorMessage] = useState("");

  // Income States
  const [showIncomeForm, setShowIncomeForm] = useState(false);
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeSource, setIncomeSource] =
    useState("Salary");
  const [incomeDescription, setIncomeDescription] =
    useState("");
  const [incomeDate, setIncomeDate] =
    useState(
      new Date().toISOString().split("T")[0]
    );

  // Data States
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  // Load Expenses
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

  setExpenses(
    JSON.parse(savedExpenses)
  );

}


  }, []);

  // Load Incomes
  useEffect(() => {

    
  const currentUser =
  localStorage.getItem(
    "currentUser"
  );

    const savedIncomes =
      localStorage.getItem(`${currentUser}_incomes`);

    if (savedIncomes) {
      setIncomes(
        JSON.parse(savedIncomes)
      );
    }

  }, []);

  // Save Expense
  const saveExpense = () => {

    if (!amount || !description) {

      setErrorMessage(
        "⚠️ Please enter amount and description."
      );

      setTimeout(() => {
        setErrorMessage("");
      }, 1500);

      return;
    }

    const newExpense = {
      amount,
      category,
      description,
      date
    };

    const updatedExpenses = [
      newExpense,
      ...expenses
    ];

    setExpenses(updatedExpenses);

        const currentUser =
      localStorage.getItem(
        "currentUser"
      );

    localStorage.setItem(
      `${currentUser}_expenses`,
      JSON.stringify(updatedExpenses)
    );

    setAmount("");
    setDescription("");

    setShowExpenseForm(false);
  };

  // Save Income
  const saveIncome = () => {

    if (!incomeAmount || !incomeDescription)
      return;

    const newIncome = {
      amount: incomeAmount,
      source: incomeSource,
      description: incomeDescription,
      date: incomeDate
    };

    const updatedIncomes = [
      newIncome,
      ...incomes
    ];

        setIncomes(updatedIncomes);

        const currentUser =
  localStorage.getItem(
    "currentUser"
  );
  
    localStorage.setItem(
      `${currentUser}_incomes`,
      JSON.stringify(updatedIncomes)
    );

    setIncomeAmount("");
    setIncomeDescription("");
    setIncomeSource("Salary");

    setIncomeDate(
      new Date().toISOString().split("T")[0]
    );

    setShowIncomeForm(false);
  };

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

          <div
            className="transaction-card"
            onClick={() =>
              setShowExpenseForm(true)
            }
          >
            <h4>➕ Add Expense</h4>
            <p>
              Record a new expense transaction.
            </p>
          </div>

          <div
            className="transaction-card"
            onClick={() =>
              setShowIncomeForm(true)
            }
          >
            <h4>💰 Add Income</h4>
            <p>
              Record a new income source.
            </p>
          </div>

        </div>

        <ExpenseModal
          showExpenseForm={showExpenseForm}
          setShowExpenseForm={setShowExpenseForm}
          amount={amount}
          setAmount={setAmount}
          category={category}
          setCategory={setCategory}
          description={description}
          setDescription={setDescription}
          date={date}
          setDate={setDate}
          errorMessage={errorMessage}
          saveExpense={saveExpense}
        />

        <IncomeModal
          showIncomeForm={showIncomeForm}
          setShowIncomeForm={setShowIncomeForm}
          incomeAmount={incomeAmount}
          setIncomeAmount={setIncomeAmount}
          incomeSource={incomeSource}
          setIncomeSource={setIncomeSource}
          incomeDescription={incomeDescription}
          setIncomeDescription={setIncomeDescription}
          incomeDate={incomeDate}
          setIncomeDate={setIncomeDate}
          saveIncome={saveIncome}
        />

             <div className="transaction-history my-3" >

  <h4>💰 Recent Income</h4>

  {incomes.length === 0 ? (

    <div className="empty-state">
      <p>No income recorded yet.</p>
    </div>

  ) : (

    incomes.map((income, index) => (

      <div
        key={index}
        className="transaction-item"
      >

        <div>

          <h5 className="income-description">{income.description}</h5>

          <small>
            {income.source} • {" "}
            {new Date(
              income.date
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

        <h5 className="income-amount">
          ₹{income.amount}
        </h5>

      </div>

    ))

  )}

</div>

        <div className="transaction-history">

          <h4>📝 Recent Transactions</h4>

          {expenses.length === 0 ? (

            <div className="empty-state">
              <p>No transactions yet.</p>
              <span>
                Start by adding your first expense.
              </span>
            </div>

          ) : (

            expenses.map((expense, index) => (

              <div
                key={index}
                className="transaction-item"
              >

                <div>

                  <h5>
                    {expense.description}
                  </h5>

                  <small>
                    {expense.category} • {" "}
                    {new Date(
                      expense.date
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

                <h5>
                  ₹{expense.amount}
                </h5>

              </div>

            ))

          )}

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Transactions;