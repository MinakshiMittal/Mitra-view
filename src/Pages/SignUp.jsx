import { useAuth } from "../Contexts";
import { useState } from "react";

export const SignUp = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signUpUserWithDetails } = useAuth();

  const signUpHandler = async (event) => {
    event.preventDefault();
    signUpUserWithDetails(firstName, lastName, email, password);
  };
  return (
    <div className="login-page">
      <div className="background-image-container">
        <img
          src="https://cdn.pixabay.com/photo/2017/07/19/16/44/question-2519654_1280.png"
          alt="background"
        />
      </div>
      <div className="form-container">
        <h1 className="">Sign Up</h1>
        <form className="login-form">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Your first name.."
            onChange={(event) => setFirstName(event.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Your last name"
            onChange={(event) => setLastName(event.target.value)}
          />
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
          <button class="button primary-btn" onClick={signUpHandler}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
