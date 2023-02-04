import "./register.css";

export const Register = () => {
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
              <input placeholder="Username" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <input placeholder="Confirm Password" className="loginInput" />
              <button className="loginButton">Sign Up</button>
              <button className="loginRegisterButton">
                Already have an account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
