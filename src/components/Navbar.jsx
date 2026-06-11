import {useState} from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
   const toggleTheme = () => {
    setDarkMode(!darkMode);
};

  return (
    <nav className="navbar custom-navbar py-3">
   <div className="container-fluid d-flex justify-content-between align-items-center">
          <h2 className="m-0 fw-bold logo">
            Money💸Mate
          </h2>
       

        {/* Right Side */}
        <div className="ms-auto d-flex align-items-center gap-2">
      
          
         <Link to="/login">
          <button className="btn login-btn">
            Login
          </button>
</Link>
           <Link to="/signup">
          <button className="btn signup-btn">
            Sign Up
          </button>
          </Link>
          
          <button className="theme-btn" onClick={toggleTheme}>
             {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;