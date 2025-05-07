import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BMIPage.css';
import YogaFacts from './YogaFacts';

const BMIPage = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightMeters = height / 100;
      const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setStatus("Underweight");
      else if (bmiValue < 25) setStatus("Healthy weight");
      else if (bmiValue < 30) setStatus("Overweight");
      else setStatus("Obese");

      setError('');
    } else {
      setError('Please enter valid weight and height values.');
      setBmi(null);
      setStatus('');
    }
  };

  return (
    <div className="bmi-page">
      <YogaFacts />

      <h2 className="bmi-title">BMI CALCULATOR</h2>

      <div className="bmi-card">
        <div className="gender-toggle">
          <button
            className={gender === 'male' ? 'active' : ''}
            onClick={() => setGender('male')}
          >
            Male
          </button>
          <button
            className={gender === 'female' ? 'active' : ''}
            onClick={() => setGender('female')}
          >
            Female
          </button>
        </div>

        <div className="form-section">
          <div className="form-label">Enter your:</div>
          <div className="input-rows">
            <div className="input-row">
              <div className="input-label">Age</div>
              <div className="input-field">
                <input
                  type="number"
                  value={age}
                  onChange={e => setAge(e.target.value)}
                  placeholder=""
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-label">Weight</div>
              <div className="input-field">
                <input
                  type="number"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  placeholder=""
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-label">Height</div>
              <div className="input-field">
                <input
                  type="number"
                  value={height}
                  onChange={e => setHeight(e.target.value)}
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bmi-score-section">
          <button className="bmi-score-btn" onClick={calculateBMI}>
            BMI SCORE
          </button>
          <div className="bmi-circle">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="12"
              />
              {bmi && (
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  strokeDasharray="339.29"
                  strokeDashoffset={339.29 * (1 - Math.min(bmi / 50, 1))}
                  transform="rotate(-90 60 60)"
                />
              )}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8CC152" />
                  <stop offset="50%" stopColor="#FFCE54" />
                  <stop offset="100%" stopColor="#FC6E51" />
                </linearGradient>
              </defs>
            </svg>
            <div className="bmi-value">{bmi || "72"}</div>
          </div>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}

      {/* Only show this after BMI is calculated */}
      {bmi && (
        <div className="bmi-result" style={{ margin: "32px auto 0", maxWidth: 400, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 6px 0" }}>
            Your BMI is: <span style={{ fontWeight: 900 }}>{bmi}</span>
          </p>
          <p style={{ fontSize: "20px", color: "#7cae8b", fontWeight: 500, margin: "0 0 24px 0" }}>
            Status: <span style={{ color: "#7cae8b" }}>{status}</span>
          </p>
          <button
            onClick={() => navigate('/food-categories')}
            className="navigate-btn"
            style={{
              background: "#7cae8b",
              color: "#fff",
              borderRadius: "40px",
              fontWeight: "700",
              fontSize: "1.4rem",
              padding: "18px 0",
              border: "none",
              width: "100%",
              maxWidth: "480px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              cursor: "pointer",
              marginBottom: "8px"
            }}
          >
            Explore Healthy Food Categories
          </button>
        </div>
      )}
    </div>
  );
};

export default BMIPage;
