function IncomeModal({
  showIncomeForm,
  setShowIncomeForm,
  incomeAmount,
  setIncomeAmount,
  incomeSource,
  setIncomeSource,
  incomeDescription,
  setIncomeDescription,
  incomeDate,
  setIncomeDate,
  saveIncome
}) {

  if (!showIncomeForm) return null;

  return (
    <div
      className="modal-overlay"
      onClick={() => setShowIncomeForm(false)}
    >

      <div
        className="expense-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <h3>💰 Add Income</h3>

        <input
          type="number"
          placeholder="Amount"
          className="expense-input"
          value={incomeAmount}
          onChange={(e) =>
            setIncomeAmount(e.target.value)
          }
        />

        <select
          className="expense-input"
          value={incomeSource}
          onChange={(e) =>
            setIncomeSource(e.target.value)
          }
        >

          <option>Salary</option>
          <option>Scholarship</option>
          <option>Freelancing</option>
          <option>Investments</option>
          <option>Gift</option>
          <option>Other</option>

        </select>

        <input
          type="text"
          placeholder="Description"
          className="expense-input"
          value={incomeDescription}
          onChange={(e) =>
            setIncomeDescription(e.target.value)
          }
        />

        <input
          type="date"
          className="expense-input"
          value={incomeDate}
          onChange={(e) =>
            setIncomeDate(e.target.value)
          }
        />

        <div className="modal-actions">

          <button
            className="clear-budget-btn"
            onClick={() =>
              setShowIncomeForm(false)
            }
          >
            Cancel
          </button>

          <button
            className="save-expense-btn"
            onClick={saveIncome}
          >
            Save Income
          </button>

        </div>

      </div>

    </div>
  );
}

export default IncomeModal;