import { Link,  useNavigate } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] =useState("");
const navigate = useNavigate();

const createAccount = () => {

  if (
    !name ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    alert("Please fill all fields");
    return;
  }

  if (
    password !== confirmPassword
  ) {
    alert("Passwords do not match");
    return;
  }

  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || [];

  const existingUser =
    users.find(
      (user) =>
        user.email === email
    );

  if (existingUser) {
    alert(
      "Email already registered"
    );
    return;
  }

  const newUser = {
    name,
    email,
    password
  };

  users.push(newUser);

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );

  localStorage.setItem(
    "currentUser",
    email
  );

  navigate("/dashboard");
};

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
               value={name} onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create a password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

            <button
        type="button"
        className="btn signup-btn w-100"
        onClick={createAccount}
      >
        Create Account
      </button>
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