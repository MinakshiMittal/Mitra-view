import "./Login.css";
import { useAuth, useLoader } from "../../Contexts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Watch from "../../assets/Watch.svg";
import { Loader } from "../../Components";

export const Login = () => {
  const { isUserLogin, loginUserWithCredentials, logout } = useAuth();
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test");
  const { loader, setLoader } = useLoader();

  const navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();
    setLoader("loading");
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
            defaultValue={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            defaultValue={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="button primary-btn" onClick={loginHandler}>
            {loader === "loading" ? <Loader /> : "Log In"}
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
