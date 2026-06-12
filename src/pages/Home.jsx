import Navbar from "../components/Navbar";
import './home.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ darkMode, setDarkMode }) {
  const steps = [
  {
    title: "👤 Create Account",
    points: [
      "Secure Sign Up",
      "Personal Dashboard",
      "Dark Mode Support"
    ]
  },
  {
    title: "💰 Add Expenses",
    points: [
      "Quick Entry",
      "Expense Categories",
      "Income Tracking"
    ]
  },
  {
    title: "🎯 Set Budget",
    points: [
      "Monthly Limits",
      "Budget Alerts",
      "Spending Control"
    ]
  },
  {
    title: "📊 View Analytics",
    points: [
      "Pie Charts",
      "Monthly Reports",
      "Spending Trends"
    ]
  }
];

const [currentStep, setCurrentStep] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <>
    <Navbar 
     darkMode={darkMode}
     setDarkMode={setDarkMode} />
    <div className="container py-5">

      <div className="row align-items-center min-vh-75">

        <div className="col-12 text-center ">

          <div className="hero-badge mb-4">
            💸 Your Trusted Mate for Finance and Budget Control
          </div>

          <h1 className="display-4 fw-bold mb-3">
            Take Control of
            <span className="hero-highlight"> Your Finances</span>
          </h1>

          <p className="lead mb-4">
            Track expenses, manage budgets, and build
            better financial habits with MoneyMate.<br></br>
            Your personal companion for smarter money management.
          </p>

       <Link to="/signup">
          <button className="btn signup-btn hero-btn px-4 py-2 my-3">
            Start Your Free Journey ➡️
          </button></Link>

        </div>
        <div className="feature-grid">

            <div className="feature-card">
                <h3>🔒</h3>
                <p>Secure & Private</p>
            </div>

            <div className="feature-card">
                <h3>📊</h3>
                <p>Expense Analytics</p>
            </div>

            <div className="feature-card">
                <h3>💰</h3>
                <p>Budget Tracking</p>
            </div>

            <div className="feature-card">
                <h3>📱</h3>
                <p>Responsive Design</p>
            </div>
        </div>
      </div>
    </div>


{/* Features Section */}

<section className="container py-5">

  <div className="text-center mb-5">
    <h2 className="fw-bold">Why Choose MoneyMate?</h2>
    <p className="text-secondary">
      Everything you need to manage your finances smarter.
    </p>
  </div>

  <div className="row g-4">

    <div className="col-md-6 col-lg-3">
      <div className="feature-card">
        <div className="feature-icon">💰</div>
        <h4>Expense Tracking</h4>
        <p>
          Track and manage your daily expenses effortlessly.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-3">
      <div className="feature-card">
        <div className="feature-icon">🎯</div>
        <h4>Budget Management</h4>
        <p>
          Set budgets and keep your spending under control.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-3">
      <div className="feature-card">
        <div className="feature-icon">📊</div>
        <h4>Analytics & Charts</h4>
        <p>
          Understand spending patterns with visual insights.
        </p>
      </div>
    </div>

    <div className="col-md-6 col-lg-3">
      <div className="feature-card">
        <div className="feature-icon">📅</div>
        <h4>Monthly Reports</h4>
        <p>
          Get monthly summaries and financial reports.
        </p>
      </div>
    </div>

  </div>

</section>

{/* how it works section */}
<section className="container py-5">

  <div className="text-center mb-5">
    <h2 className="fw-bold">How It Works</h2>
    <p className="text-secondary">
      Start managing your finances in four simple steps.
    </p>
  </div>

  <div className="steps-indicator">

    {steps.map((step, index) => (
      <div
        key={index}
        className={`step-circle ${
          currentStep === index ? "active-step" : ""
        }`}
      >
        {index + 1}
      </div>
    ))}

  </div>

  <div className="step-showcase">

    <h3>{steps[currentStep].title}</h3>

  <ul>
  {steps[currentStep].points.map((point, index) => (
    <li key={index}>{point}</li>
  ))}
</ul>

  </div>

</section>

{/* footer */}

<footer className="footer py-4">
  <div className="container text-center">

    <h4 className="mb-2">Money💸Mate</h4>

    <p className="mb-3">
      Your trusted companion for smarter money management.
    </p>

    <div className="footer-links">
      <a href="#">Home</a>
      <a href="#">Features</a>
      <a href="#">Contact</a>
    </div>

    <hr />

<p>
    <strong>Project Topic: </strong>
    Personal Expense Tracker
  </p>

  <p>
    <strong>Developed By: </strong>
    Ziba Khan
  </p>

  <p>
    <strong>Registered Email: </strong>
   zibak2006@gmail.com
  </p>
    <small>
      © 2026 MoneyMate. All Rights Reserved.
    </small>

  </div>
</footer>
</>
  );
}

export default Home;