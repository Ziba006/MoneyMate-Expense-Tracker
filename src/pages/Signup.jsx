import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <div className="signup-card">

        <h2>MoneyMate 💸</h2>
        <h3>Create Account</h3>

        <form>

          <div className="mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create a password"
            />
          </div>

          <div className="mb-4">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
            />
          </div>

          <Link to="/dashboard">
            <button
              type="button"
              className="btn signup-btn w-100"
            >
              Create Account
            </button>
          </Link>

        </form>

        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;