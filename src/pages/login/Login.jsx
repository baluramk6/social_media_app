import "./login.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Masai Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around <br /> you on Masai
            Social.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <div className="loginBox">
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
