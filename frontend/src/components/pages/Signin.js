import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = () => {
    navigate("/home"); // ✅ After signin, go to Home page
  };

  const goToSignup = () => {
    navigate("/signup"); // ✅ Navigate without refreshing
  };

  return (
    <div className="login-container">
      <div className="logo-section">
        <h2>KAYA</h2>
        <p>HEALTH & WEALTH</p>
      </div>

      <div className="illustration">
        <img src="/assets/meditation.svg" alt="Meditation" />
      </div>

      <h3>Sign In</h3>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email Address"
        className="email-input"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="email-input"
      />
      
      <button onClick={handleSignin} className="email-signup">Sign In</button>

      <p className="switch-option">
        Don't have an account?{" "}
        <span onClick={goToSignup} style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}>
          Sign Up
        </span>
      </p>

      <p className="terms">
        By signing in, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};

export default Signin;
