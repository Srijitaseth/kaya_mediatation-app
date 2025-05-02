import React from "react";

const DailyChecklist = ({ vitamins }) => (
  <div>
    <h3>Daily Plan</h3>
    <ul>
      {vitamins.map((vitamin, index) => (
        <li key={index} style={{ textDecoration: vitamin.taken ? "line-through" : "none" }}>
          ✅ {vitamin.name}
        </li>
      ))}
    </ul>
  </div>
);

export default DailyChecklist;
