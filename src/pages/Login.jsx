import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const [error, setError] = useState("");

const loginUser = () => {

  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || [];

  const user = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (!user) {

    setError(
      "Invalid email or password"
    );


setTimeout(() => {
  setError("");
}, 1500);

    return;
  }

  localStorage.setItem(
    "currentUser",
    user.email
  );

  navigate("/dashboard");
};

  return (
    <div className="login-container">
{/* 
      <Link to="/" className="back-link">
        ← Back to Home
      </Link> */}

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
               value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {
            error && (
              <div className="login-error">
                {error}
              </div>
            )
          }

            <button
            type="button"
            className="btn signup-btn w-100"
            onClick={loginUser}
          >
            Login
          </button>

        </form>

        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <Link to="/signup">
            Sign Up
          </Link>
        </p>


      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
      </div>

    </div>
  );
}

export default Login;