import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import ProtectedRoute from "./components/ProtectedRoute";
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
 const [darkMode, setDarkMode] =
  useState(() => {

    const savedMode =
      localStorage.getItem(
        "darkMode"
      );

    return savedMode === "true";

  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {

  localStorage.setItem(
    "darkMode",
    darkMode
  );

}, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home darkMode={darkMode} setDarkMode={setDarkMode}/> }/>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard darkMode={darkMode} setDarkMode={setDarkMode}/> </ProtectedRoute>}/>

        <Route path="/transactions" element={<ProtectedRoute><Transactions darkMode={darkMode} setDarkMode={setDarkMode}/></ProtectedRoute>} />

        <Route path="/budget" element={<ProtectedRoute><BudgetPlanner darkMode={darkMode} setDarkMode={setDarkMode}/></ProtectedRoute>} />

        <Route path="/analytics" element={<ProtectedRoute><Analytics darkMode={darkMode} setDarkMode={setDarkMode}/></ProtectedRoute>} />

        <Route path="/reports" element={<ProtectedRoute><Reports darkMode={darkMode} setDarkMode={setDarkMode}/></ProtectedRoute>} />

        <Route path="/profile" element={<ProtectedRoute><Profile darkMode={darkMode} setDarkMode={setDarkMode}/></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;