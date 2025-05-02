import React from "react";
import "../styles/Login.css"; // Import CSS

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo-section">
        <h2>KAYA</h2>
        <p>HEALTH & WEALTH</p>
      </div>

      <button className="start-btn">Start Now</button>

      <div className="illustration">
        <img src="/assets/meditation.svg" alt="Meditation" />
      </div>

      <h3>Create an account</h3>

      <input type="email" placeholder="email@domain.com" className="email-input" />

      <button className="email-signup">Sign Up</button>

      <p className="switch-option">
        Already have an account? <a href="/signin">Sign In</a>
      </p>

      <p className="terms">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default Login;
