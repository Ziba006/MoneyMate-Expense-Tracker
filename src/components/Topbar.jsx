import "./Topbar.css";

function Topbar({
  isOpen,
  setIsOpen,
  darkMode,
  setDarkMode
}) {

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="topbar">

      <div className="d-flex align-items-center gap-3">

        <button
          className="hamburger-btn "
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <h3 className="m-0">
          Money💸Mate
        </h3>

      </div>

      <div className="topbar-actions">

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button className="profile-btn">
          👤
        </button>

      </div>

    </div>
  );
}

export default Topbar;