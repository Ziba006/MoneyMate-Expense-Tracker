import DashboardLayout from "../components/DashboardLayout";

function Reports({
  darkMode,
  setDarkMode
}) {
  return (
    <DashboardLayout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    >
      <h1>Reports Page</h1>
    </DashboardLayout>
  );
}

export default Reports;