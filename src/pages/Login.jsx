import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <div className="login-card">

        <h2>Money💸Mate</h2>
        <h3>Welcome Back</h3>

        <form>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <Link to="/dashboard">
            <button
              type="button"
              className="btn signup-btn w-100"
            >
              Login
            </button>
          </Link>

        </form>

        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <Link to="/signup">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;