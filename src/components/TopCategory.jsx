function TopCategory({
  topCategory
}) {

  return (
    <div className="analytics-section">

      <h3>
        🏆 Top Spending Category
      </h3>

      {
        topCategory ? (

          <div className="insight-card">

            <h2>
              {topCategory.name}
            </h2>

            <h3>
              ₹{topCategory.value}
            </h3>

          </div>

        ) : (

          <div className="insight-card">
            No expenses available.
          </div>

        )
      }

    </div>
  );
}

export default TopCategory;