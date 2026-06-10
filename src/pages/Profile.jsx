import DashboardLayout from "../components/DashboardLayout";

function Profile({
  darkMode,
  setDarkMode
}) {
  return (
    <DashboardLayout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    >
      <h1>Profile Page</h1>
    </DashboardLayout>
  );
}

export default Profile;