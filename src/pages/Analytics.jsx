
import DashboardLayout from "../components/DashboardLayout";
import AnalyticsSummary from "../components/AnalyticsSummary";
import ExpensePieChart from "../components/ExpensePieChart";
import IncomeExpenseBarChart from "../components/IncomeExpenseBarChart";
import TopCategory from "../components/TopCategory";
import FinancialInsight from "../components/FinancialInsight";

import "./Analytics.css";
import { useState, useEffect } from "react";


function Analytics({ darkMode, setDarkMode }) {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [netSavings, setNetSavings] = useState(0);
  const [budgetUsage, setBudgetUsage] = useState(0);
  const [categoryData, setCategoryData] = useState([]);
  const [topCategory, setTopCategory] = useState(null);
  const [savingsRate, setSavingsRate] =useState(0);

  useEffect(() => {

  // Expenses

  const currentUser =
  localStorage.getItem(
    "currentUser"
  );

const savedExpenses =
  localStorage.getItem(
    `${currentUser}_expenses`
  );
 
  let expenseTotal = 0;

  if(savedExpenses){

    const expenses =
      JSON.parse(savedExpenses);

      const categoryTotals = {};

expenses.forEach((expense) => {

  const category =
    expense.category;

  categoryTotals[category] =
    (categoryTotals[category] || 0) +
    Number(expense.amount);

});

const chartData =
  Object.entries(categoryTotals)
    .map(([name, value]) => ({
      name,
      value
    }));

setCategoryData(chartData);

if (chartData.length > 0) {

  const highestCategory =
    chartData.reduce(
      (max, current) =>
        current.value > max.value
          ? current
          : max
    );

  setTopCategory(
    highestCategory
  );

}

    expenseTotal =
      expenses.reduce(
        (sum, expense) =>
          sum + Number(expense.amount),
        0
      );

    setTotalExpenses(expenseTotal);
  }

  // Income

  const savedIncomes =
    localStorage.getItem(`${currentUser}_incomes`);

  let incomeTotal = 0;

  if(savedIncomes){

    const incomes =
      JSON.parse(savedIncomes);

    incomeTotal =
      incomes.reduce(
        (sum, income) =>
          sum + Number(income.amount),
        0
      );

    setTotalIncome(incomeTotal);
  }

  // Savings

  setNetSavings(
    incomeTotal - expenseTotal
  );

  // Budget

  const savedBudget =
    localStorage.getItem(`${currentUser}_budget`);

  if(savedBudget){

    const budgetData =
      JSON.parse(savedBudget);

    const budget =
      Number(
        budgetData.monthlyBudget
      );

    if(budget > 0){

      const usage =
        Math.round(
          (expenseTotal / budget) * 100
        );

      setBudgetUsage(usage);
    }

  }

  if(incomeTotal > 0){
  const rate =Math.round(((incomeTotal - expenseTotal) /incomeTotal) * 100);
  setSavingsRate(rate);
}

}, []);


  return (
    <DashboardLayout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    >
      
      <div className="analytics-container">

  <div className="analytics-header">
    <h2>📊 Analytics</h2>
    <p>
      Understand your spending habits and financial health.
    </p>
  </div>

  <AnalyticsSummary
    totalIncome={totalIncome}
    totalExpenses={totalExpenses}
    netSavings={netSavings}
    budgetUsage={budgetUsage}
  />

  <ExpensePieChart categoryData={categoryData}/>

  <IncomeExpenseBarChart
  totalIncome={totalIncome}
  totalExpenses={totalExpenses}
/>

  <TopCategory  topCategory={topCategory}/>

  <FinancialInsight  topCategory={topCategory}
  netSavings={netSavings}
  savingsRate={savingsRate}
  budgetUsage={budgetUsage}/>

</div>
    </DashboardLayout>
  );
}

export default Analytics;