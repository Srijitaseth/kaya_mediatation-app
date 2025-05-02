import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/DailyPlan.css';

const DEFAULT_TASKS = [
  "Take Vitamin E",
  "Drink Fiber Mix",
  "Take Vitamin C",
  "10 min Yoga",
  "Drink 2L Water"
];

const DailyPlan = ({ tasks: propTasks }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialTasks = propTasks || location.state?.tasks || DEFAULT_TASKS;
  const [tasks, setTasks] = useState(initialTasks);
  const [completed, setCompleted] = useState([]);
  const [progress, setProgress] = useState(0);

  // Customization state
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [newTask, setNewTask] = useState('');

  // Animate progress
  useEffect(() => {
    if (!Array.isArray(tasks)) return;
    let percent = tasks.length > 0 ? completed.length / tasks.length : 0;
    let start = progress;
    let end = Math.round(percent * 100);
    if (start !== end) {
      let step = start < end ? 1 : -1;
      let timer = setInterval(() => {
        setProgress(prev => {
          if ((step > 0 && prev >= end) || (step < 0 && prev <= end)) {
            clearInterval(timer);
            return end;
          }
          return prev + step;
        });
      }, 10);
      return () => clearInterval(timer);
    }
  }, [completed, tasks, progress]);

  const handleToggle = idx => {
    setCompleted(prev =>
      prev.includes(idx)
        ? prev.filter(i => i !== idx)
        : [...prev, idx]
    );
  };

  const handleAddCustomTask = () => {
    const trimmedTask = newTask.trim();
    if (trimmedTask && !tasks.includes(trimmedTask)) {
      setTasks([...tasks, trimmedTask]);
      setNewTask('');
      setShowCustomForm(false);
    }
  };

  // For the animated circle
  const radius = 27;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <div className="daily-plan-bg">
      {/* Health Plan Card */}
      <div className="health-card">
        <div className="profile-row">
          <div className="avatar"></div>
          <span className="hello-text">Hello Sam</span>
        </div>
        <div className="plan-row">
          <div>
            <div className="plan-title">
              Health Plan<br />for <span className="plan-day">Wednesday</span>
            </div>
            <div className="plan-completed-label">PLAN PROGRESS</div>
            <div className="progress-circle">
              <svg width="64" height="64">
                <circle
                  cx="32"
                  cy="32"
                  r={radius}
                  stroke="#e0e0e0"
                  strokeWidth="7"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r={radius}
                  stroke="#7cae8b"
                  strokeWidth="7"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  transform="rotate(-90 32 32)"
                  style={{ transition: 'stroke-dashoffset 0.6s ease' }}
                />
              </svg>
              <span className="progress-text">{progress}%</span>
            </div>
          </div>
          <div className="vitamin-side-card">
            <img src="/vitamin-pills.png" alt="Vitamins" className="vitamin-img" />
            <div className="vitamin-text">3 Doses of Vitamin</div>
            <div className="pressure-card">
              <span className="pressure-icon">💧</span>
              <span>High Blood<br />Pressure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Plan List */}
      <div className="daily-plan-list">
        <div className="daily-plan-label">DAILY PLAN</div>
        {Array.isArray(tasks) && tasks.map((task, idx) => (
          <div
            key={idx}
            className={`plan-item ${completed.includes(idx) ? 'checked' : ''}`}
            onClick={() => handleToggle(idx)}
            style={{ cursor: "pointer" }}
          >
            <span className={completed.includes(idx) ? "check-icon" : "circle-icon"}>
              {completed.includes(idx) ? "✔" : ""}
            </span>
            <span>{task}</span>
          </div>
        ))}

        <div className="fibre-boost-card">
          <img src="/sprout.png" alt="Fibre Boost" className="fibre-img" />
          <div className="fibre-text">Fibre Boost</div>
        </div>
      </div>

      {/* Customize Plan Section */}
      <div style={{ margin: "28px 10px 0 10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button
          onClick={() => setShowCustomForm(v => !v)}
          style={{
            background: "linear-gradient(90deg,#a7cfc1 60%,#7cae8b 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "22px",
            padding: "14px 28px",
            fontSize: "1.1rem",
            fontWeight: 700,
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            cursor: "pointer",
            transition: "background 0.2s",
            marginBottom: showCustomForm ? "16px" : "0",
            width: "100%",
            maxWidth: "340px",
            letterSpacing: "0.5px"
          }}
        >
          {showCustomForm ? 'Hide Customization' : 'Customize Your Daily Plan'}
        </button>
        {showCustomForm && (
          <div style={{
            background: "#fdf3d7",
            borderRadius: "20px",
            padding: "18px",
            marginTop: "6px",
            width: "100%",
            maxWidth: "340px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch"
          }}>
            <input
              type="text"
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              maxLength={50}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "none",
                borderRadius: "16px",
                fontSize: "1rem",
                background: "#fff",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                marginBottom: "14px"
              }}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={handleAddCustomTask}
                disabled={!newTask.trim()}
                style={{
                  flex: 1,
                  padding: "10px 0",
                  border: "none",
                  borderRadius: "16px",
                  fontSize: "1rem",
                  fontWeight: 500,
                  cursor: !newTask.trim() ? "not-allowed" : "pointer",
                  background: !newTask.trim() ? "#bdbdbd" : "#7cae8b",
                  color: "#fff"
                }}
              >
                Add Task
              </button>
              <button
                onClick={() => {
                  setNewTask('');
                  setShowCustomForm(false);
                }}
                style={{
                  flex: 1,
                  padding: "10px 0",
                  border: "none",
                  borderRadius: "16px",
                  fontSize: "1rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  background: "#e0e0e0",
                  color: "#555"
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Button to BMI Page */}
      <button className="bmi-nav-btn" onClick={() => navigate('/bmi')}>
        Check your BMI
      </button>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-icon"><span role="img" aria-label="home">🏠</span></div>
        <div className="nav-icon"><span>Button</span></div>
        <div className="nav-icon plus"><span>+</span></div>
        <div className="nav-icon"><span role="img" aria-label="cart">🛒</span></div>
        <div className="nav-icon"><span role="img" aria-label="menu">☰</span></div>
      </div>
    </div>
  );
};

export default DailyPlan;
