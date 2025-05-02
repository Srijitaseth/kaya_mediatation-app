import React, { useState, useEffect } from "react";
import "./styles/DailyReminder.css";

const quotes = [
  "Smile, the world needs your light! 😊",
  "Drink your water and stay refreshed! 💧",
  "You are stronger than you think! 💪",
  "Believe in yourself and take the leap! 🚀",
  "Every day is a new beginning! 🌅",
  "Be kind to yourself. You’re doing great! ❤️",
];

const DailyReminder = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out transition
      setTimeout(() => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFade(true); // Start fade-in transition
      }, 500); // Sync with CSS fade duration
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reminder-card">
      <h3 className="reminder-header">Daily Reminder</h3>
      <p className={`reminder-text ${fade ? "fade-in" : "fade-out"}`}>
        {quotes[quoteIndex]}
      </p>
    </div>
  );
};

export default DailyReminder;
