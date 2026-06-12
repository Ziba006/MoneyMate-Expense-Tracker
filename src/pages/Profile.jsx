import DashboardLayout from "../components/DashboardLayout";
import "./Profile.css";
import { useState, useEffect } from "react";

function Profile({ darkMode, setDarkMode }) {

  const [totalTransactions, setTotalTransactions] =
    useState(0);

  const [incomeCount, setIncomeCount] =
    useState(0);

  const [expenseCount, setExpenseCount] =
    useState(0);

  const [currentBudget, setCurrentBudget] =
    useState(0);

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  useEffect(() => {

    const currentUser =
      localStorage.getItem(
        "currentUser"
      );

    const expenses =
      JSON.parse(
        localStorage.getItem(
          `${currentUser}_expenses`
        )
      ) || [];

    const incomes =
      JSON.parse(
        localStorage.getItem(
          `${currentUser}_incomes`
        )
      ) || [];

    const budgetData =
      JSON.parse(
        localStorage.getItem(
          `${currentUser}_budget`
        )
      );

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const currentUserData =
      users.find(
        (user) =>
          user.email === currentUser
      );

    if (currentUserData) {

      setName(
        currentUserData.name
      );

      setEmail(
        currentUserData.email
      );

    }

    setExpenseCount(
      expenses.length
    );

    setIncomeCount(
      incomes.length
    );

    setTotalTransactions(
      expenses.length +
      incomes.length
    );

    if (budgetData) {

      setCurrentBudget(
        budgetData.monthlyBudget
      );

    }

  }, []);

  return (
    <DashboardLayout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    >

      <div className="profile-container">

        <div className="profile-header">

          <div className="profile-avatar">
            {
              name
                ? name
                    .charAt(0)
                    .toUpperCase()
                : "👤"
            }
          </div>

          <h2>{name}</h2>

          <p>{email}</p>

        </div>

        {/* Personal Information */}

        <div className="profile-card">

          <h3>
            📋 Personal Information
          </h3>

          <div className="info-row">
            <span>Name</span>
            <strong>{name}</strong>
          </div>

          <div className="info-row">
            <span>Email</span>
            <strong>{email}</strong>
          </div>

          <div className="info-row">
            <span>Phone</span>
            <strong>Not Added</strong>
          </div>

          <div className="info-row">
            <span>Location</span>
            <strong>India</strong>
          </div>

        </div>

        {/* Statistics */}

        <div className="profile-card">

          <h3>
            📊 Account Statistics
          </h3>

          <div className="stats-grid">

            <div className="stat-item">
              <h4>
                Total Transactions
              </h4>
              <p>
                {totalTransactions}
              </p>
            </div>

            <div className="stat-item">
              <h4>
                Income Records
              </h4>
              <p>
                {incomeCount}
              </p>
            </div>

            <div className="stat-item">
              <h4>
                Expense Records
              </h4>
              <p>
                {expenseCount}
              </p>
            </div>

            <div className="stat-item">
              <h4>
                Current Budget
              </h4>
              <p>
                ₹{currentBudget}
              </p>
            </div>

          </div>

        </div>

        {/* Account */}

        <div className="profile-card">

          <h3>
            🔒 Account
          </h3>

          <button className="profile-btn">
            Change Password
          </button>

          <button className="profile-btn">
            Edit Profile
          </button>

        </div>

        {/* About */}

        <div className="profile-card">

          <h3>
            ℹ️ About
          </h3>

          <p>
            MoneyMate v1.0
          </p>

          <p>
            Built with React + Vite
          </p>

          <p>
            Member Since June 2026
          </p>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Profile;