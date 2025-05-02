import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Meditation from "../../assets/removed 1.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/home"); // ✅ After signup, go to Home page
  };

  const goToSignin = () => {
    navigate("/signin"); // ✅ Navigate without refreshing
  };

  return (
    <div className="login-container">
      <div className="logo-section">
        <h2>KAYA</h2>
        <p>HEALTH & WEALTH</p>
      </div>

      <div className="illustration">
        <img src={Meditation} alt="Meditation" />
      </div>

      <h3>Create an account</h3>

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
      
      <button onClick={handleSignup} className="email-signup">Sign Up</button>

      <p className="switch-option">
        Already have an account?{" "}
        <span onClick={goToSignin} style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}>
          Sign In
        </span>
      </p>

      <p className="terms">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};

export default Signup;
