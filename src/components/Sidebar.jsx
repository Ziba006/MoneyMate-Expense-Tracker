import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>

      <ul className="sidebar-menu">

        <li>
          <Link to="/dashboard">
            🏠 Dashboard
          </Link>
        </li>

        <li>
          <Link to="/transactions">
            💰 Transactions
          </Link>
        </li>

        <li>
          <Link to="/budget">
            🎯 Budget Planner
          </Link>
        </li>

        <li>
          <Link to="/analytics">
            📊 Analytics
          </Link>
        </li>

        <li>
          <Link to="/reports">
            📅 Reports
          </Link>
        </li>

        <li>
          <Link to="/profile">
            👤 Profile
          </Link>
        </li>

      </ul>

      <div className="sidebar-bottom">

        <Link to="/">
          🌐 Home Website
        </Link>

        <Link to="/">
          🚪 Logout
        </Link>

      </div>

    </div>
  );
}

export default Sidebar;