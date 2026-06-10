import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions"
import BudgetPlanner from "./pages/BudgetPlanner"
import Analytics from "./pages/Analytics"
import Reports from "./pages/Reports"
import Profile from "./pages/Profile"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home darkMode={darkMode} setDarkMode={setDarkMode}/> }/>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode}/>}/>

        <Route path="/transactions" element={<Transactions darkMode={darkMode} setDarkMode={setDarkMode}/>} />

        <Route path="/budget" element={<BudgetPlanner darkMode={darkMode} setDarkMode={setDarkMode}/>} />

        <Route path="/analytics" element={<Analytics darkMode={darkMode} setDarkMode={setDarkMode}/>} />

        <Route path="/reports" element={<Reports darkMode={darkMode} setDarkMode={setDarkMode}/>} />

        <Route path="/profile" element={<Profile darkMode={darkMode} setDarkMode={setDarkMode}/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;