function ExpenseModal({
  showExpenseForm,
  setShowExpenseForm,
  amount,
  setAmount,
  category,
  setCategory,
  description,
  setDescription,
  date,
  setDate,
  errorMessage,
  saveExpense,
  editIndex
}) {

  if (!showExpenseForm) return null;

  return (
    <div
      className="modal-overlay"
      onClick={() => setShowExpenseForm(false)}
    >

      <div
        className="expense-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <h3>➕ Add Expense</h3>

        <input
          type="number"
          placeholder="Amount"
          className="expense-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          className="expense-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >

          <option>Food & Dining</option>
          <option>Transportation</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Bills & Utilities</option>
          <option>Healthcare</option>
          <option>Education</option>
          <option>Housing</option>
          <option>Travel</option>
          <option>Mobile & Internet</option>
          <option>Work</option>
          <option>Others</option>

        </select>

        <input
          type="text"
          placeholder="Description"
          className="expense-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="date"
          className="expense-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        <div className="modal-actions">

          <button
            className="clear-budget-btn"
            onClick={() => setShowExpenseForm(false)}
          >
            Cancel
          </button>

         <button
  className="save-expense-btn"
  onClick={saveExpense}
>
  {
    editIndex !== null
      ? "Save Changes"
      : "Save Expense"
  }
</button>

        </div>

      </div>

    </div>
  );
}

export default ExpenseModal;