import "./Login.css";

export const Login = () => {
  return (
    <div className="login-page">
      <div className="background-image-container">
        <img
          src="https://cdn.pixabay.com/photo/2017/07/19/16/44/question-2519654_1280.png"
          alt="background"
        />
      </div>
      <div className="form-container">
        <h1 className="">Log In</h1>
        <form className="login-form">
          <label>Username</label>
          <input type="email" placeholder="Your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button class="button primary-btn">Log In</button>
        </form>
      </div>
    </div>
  );
};
