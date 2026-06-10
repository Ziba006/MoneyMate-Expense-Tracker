import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({
  darkMode,
  setDarkMode,
  children
}) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard-layout">

      <Sidebar isOpen={isOpen} />

      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="main-content">

        <Topbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div className="dashboard-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;