import "./Login.css";
import { useAuth } from "../../Contexts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Watch from "../../assets/Watch.svg";

export const Login = () => {
  const { isUserLogin, loginUserWithCredentials, logout } = useAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();
    isUserLogin ? logout() : loginUserWithCredentials(email, password);
  };

  return (
    <div className="login-page">
      <div className="background-image-container">
        <img src={Watch} alt="background" />
      </div>
      <div className="form-container">
        <h1 className="form-heading">Log In</h1>
        <form className="login-form">
          <label>Username</label>
          <input
            type="email"
            placeholder="Your email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button class="button primary-btn" onClick={loginHandler}>
            Log In
          </button>
          <p className="signup-content">
            Create a new account.{" "}
            <span className="signup-link" onClick={() => navigate("/signup")}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
