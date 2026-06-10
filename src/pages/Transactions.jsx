import DashboardLayout from "../components/DashboardLayout";

function Transactions({
  darkMode,
  setDarkMode
}) {
  return (
    <DashboardLayout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    >
      <h1>Transactions Page</h1>
    </DashboardLayout>
  );
}

export default Transactions;