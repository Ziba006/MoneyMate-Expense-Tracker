import DashboardLayout from "../components/DashboardLayout";
import { useState, useEffect } from "react";
import "./BudgetPlanner.css";

function BudgetPlanner({ darkMode, setDarkMode }) {

  const [monthlyBudget, setMonthlyBudget] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [entertainment, setEntertainment] = useState("");
  const [education, setEducation] = useState("");
  const [shopping, setShopping] = useState("");
   const [heathcare, setHealthcare] = useState("");

  const [saveMessage, setSaveMessage] = useState("");

  const allocated =
    Number(food) +
    Number(transport) +
    Number(entertainment) +
    Number(education) +
    Number(heathcare) +
    Number(shopping);

  const remaining =
    Number(monthlyBudget) - allocated;

  const isExceeded =
    allocated > Number(monthlyBudget);

  const clearBudget = () => {

    setMonthlyBudget("");

    setFood("");
    setTransport("");
    setEntertainment("");
    setEducation("");
    setShopping("");
    setHealthcare("");

    const currentUser =
      localStorage.getItem(
        "currentUser"
      );

    localStorage.removeItem(
      `${currentUser}_budget`
    );

  };

  const saveBudget = () => {

    const budgetData = {
      monthlyBudget,
      food,
      transport,
      entertainment,
      education,
      shopping,
      heathcare
    };

    const currentUser =
      localStorage.getItem(
        "currentUser"
      );

    localStorage.setItem(
      `${currentUser}_budget`,
      JSON.stringify(budgetData)
    );

    setSaveMessage(
      "✅ Budget Saved Successfully!"
    );

    setTimeout(() => {
      setSaveMessage("");
    }, 1500);

  };

  useEffect(() => {

    const currentUser =
      localStorage.getItem(
        "currentUser"
      );

    const savedBudget =
      localStorage.getItem(
        `${currentUser}_budget`
      );

    if (savedBudget) {

      const budgetData =
        JSON.parse(savedBudget);

      setMonthlyBudget(
        budgetData.monthlyBudget || ""
      );

      setFood(
        budgetData.food || ""
      );

      setTransport(
        budgetData.transport || ""
      );

      setEntertainment(
        budgetData.entertainment || ""
      );

      setEducation(
        budgetData.education || ""
      );

      setShopping(
        budgetData.shopping || ""
      );

      setHealthcare(
        budgetData.heathcare || ""
      );

    }

  }, []);

  return (
    <DashboardLayout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    >

      <div className="budget-container">

        <div className="budget-header">
          <h2>🎯 Budget Planner</h2>
          <p>
            Manage your monthly spending goals.
          </p>
        </div>

        <div className="budget-card">

          <h4>Monthly Budget</h4>

          <input
            type="number"
            placeholder="Enter monthly budget"
            className="budget-input"
            value={monthlyBudget}
            onChange={(e) =>
              setMonthlyBudget(
                e.target.value
              )
            }
          />

        </div>

        <div className="budget-card">

          <h4>Category Budgets</h4>

          <input
            type="number"
            placeholder="🍔 Food & Dining"
            className="budget-input"
            value={food}
            onChange={(e) =>
              setFood(
                e.target.value
              )
            }
          />

          <input
            type="number"
            placeholder="🚕 Transportation"
            className="budget-input"
            value={transport}
            onChange={(e) =>
              setTransport(
                e.target.value
              )
            }
          />

          <input
            type="number"
            placeholder="🎬 Entertainment"
            className="budget-input"
            value={entertainment}
            onChange={(e) =>
              setEntertainment(
                e.target.value
              )
            }
          />

          <input
            type="number"
            placeholder="📚 Education"
            className="budget-input"
            value={education}
            onChange={(e) =>
              setEducation(
                e.target.value
              )
            }
          />

          <input
            type="number"
            placeholder="🛒 Shopping"
            className="budget-input"
            value={shopping}
            onChange={(e) =>
              setShopping(
                e.target.value
              )
            }
          />

            <input
            type="number"
            placeholder="Healthcare"
            className="budget-input"
            value={heathcare}
            onChange={(e) =>
              setHealthcare(
                e.target.value
              )
            }
          />

        </div>

        <div className="budget-card">

          <h4>Budget Summary</h4>

          <p>
            Allocated: ₹{allocated}
          </p>

          <p>
            Remaining: ₹{remaining}
          </p>

          {
            isExceeded && (
              <p className="warning-text">
                ⚠️ Budget exceeded by ₹
                {allocated -
                  Number(monthlyBudget)}
              </p>
            )
          }

        </div>

        {
          saveMessage && (
            <div className="success-message">
              {saveMessage}
            </div>
          )
        }

        <button
          className="save-budget-btn"
          disabled={isExceeded}
          onClick={saveBudget}
        >
          Save Budget
        </button>

        <button
          className="clear-budget-btn"
          onClick={clearBudget}
        >
          Clear Budget
        </button>

      </div>

    </DashboardLayout>
  );
}

export default BudgetPlanner;