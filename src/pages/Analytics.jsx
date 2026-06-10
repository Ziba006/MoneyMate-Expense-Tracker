import DashboardLayout from "../components/DashboardLayout";

function Analytics({
  darkMode,
  setDarkMode
}) {
  return (
    <DashboardLayout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    >
      <h1>Analytics Page</h1>
    </DashboardLayout>
  );
}

export default Analytics;