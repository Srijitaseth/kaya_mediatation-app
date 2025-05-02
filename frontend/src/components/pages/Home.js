import React from "react";
import { useNavigate } from "react-router-dom";
import CalendarTracker from "../CalendarTracker";
import DailyReminder from "../DailyReminder";
import Categories from "../Categories";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="profile">
          <img src="/assets/profile-icon.png" alt="Profile" />
          <h2>Hi, Sam</h2>
        </div>
        <div className="menu">
          <span>☰</span>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <CalendarTracker />
        <DailyReminder />
        <Categories />
      </main>
    </div>
  );
};

export default Home;
