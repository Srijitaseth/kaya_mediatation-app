import React, { useState } from "react";
import "../styles/DailyChecklist.css";

const sampleTasks = [
  { task: "Take Vitamin E" },
  { task: "Drink Fiber Mix" },
  { task: "Take Vitamin C" },
  { task: "10 min Yoga" },
  { task: "Drink 2L Water" },
];

const DailyChecklist = ({ onGeneratePlan }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleToggle = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="checklist-bg">
      <div className="checklist-card">
        <h2 className="checklist-title">Today's Goals</h2>
        <ul className="checklist-list">
          {sampleTasks.map((item, idx) => (
            <li
              key={idx}
              className={`checklist-item ${checkedItems.includes(idx) ? "checked" : ""}`}
            >
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems.includes(idx)}
                  onChange={() => handleToggle(idx)}
                />
                <span className="custom-checkbox"></span>
                {item.task}
              </label>
            </li>
          ))}
        </ul>
        <button
          className="generate-plan-btn"
          disabled={checkedItems.length === 0}
          onClick={() => onGeneratePlan(checkedItems.map(i => sampleTasks[i].task))}
        >
          Generate Daily Plan
        </button>
      </div>
    </div>
  );
};

export default DailyChecklist;
