import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/CalendarTracker.css";

const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

const dailyReminders = [
  "Smile",
  "Drink Your Water",
  "Workout",
  "Remember why you started",
  "Spread love & positivity"
];

const CalendarTracker = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("meditationDates")) || [];
    setSelectedDates(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("meditationDates", JSON.stringify(selectedDates));
  }, [selectedDates]);

  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();
  const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const toggleDate = (day) =>
    setSelectedDates((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );

  const categories = ["Popular", "Yoga", "Meditation", "Pilates"];
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  return (
    <div className="calendar-main-bg">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={defaultAvatar} alt="Profile" />
        </div>
        <span className="profile-greeting">Hi, Sam</span>
        <div className="menu-icon">
          <div className="menu-line" />
          <div className="menu-line" />
          <div className="menu-line" />
        </div>
      </div>

      {/* KEEP ONLY THIS BUTTON */}
      <button
        className="daily-plan-btn"
        onClick={() => navigate("/daily-plan")}
      >
        View Your Daily Plan
      </button>

      {/* Calendar */}
      <div className="calendar-card">
        <div className="calendar-left-illustration" />
        <div>
          <h3 className="calendar-header">Great work!</h3>
          <p className="calendar-subtitle">{month.toLowerCase()}</p>
          <div className="calendar-grid">
            {daysArray.map((day) => (
              <div
                key={day}
                className={
                  "calendar-day" + (selectedDates.includes(day) ? " selected" : "")
                }
                onClick={() => toggleDate(day)}
              >
                {day}
              </div>
            ))}
          </div>
          <p className="calendar-footer">
            Days you've meditated this month
          </p>
        </div>
      </div>

      {/* Reminders & Meditation */}
      <div className="calendar-row">
        <div className="reminder-card">
          <div className="reminder-icon" />
          <h4 className="reminder-title">Daily Reminder</h4>
          <ul className="reminder-list">
            {dailyReminders.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <div className="reminder-actions">
            <button className="accept-btn">Accept</button>
            <button className="save-btn">Save for later</button>
          </div>
        </div>
        <div className="meditation-card">
          <div className="meditation-text">
            <span>Inhale, exhale</span>
            <br />
            <span>
              Let's get through this.{" "}
              <span className="meditation-highlight">Together</span>
            </span>
          </div>
          <div className="meditation-illustration" />
        </div>
      </div>

      {/* Categories */}
      <div className="categories-card">
        <h4 className="categories-title">Categories</h4>
        <div className="categories-list">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-pill ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="categories-icons" />
      </div>

      {/* Motivation */}
      <div className="motivation-card">
        <div className="speech-bubble" />
        <div className="motivation-text">
          <p>KEEP SHOWING UP</p>
          <p>KEEP SHOWING UP</p>
          <p>KEEP SHOWING UP</p>
          <p>KEEP SHOWING UP</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarTracker;
