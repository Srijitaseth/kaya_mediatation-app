import React from "react";

const ProgressCircle = ({ percent }) => (
  <div className="progress-circle">
    <svg height="80" width="80">
      <circle cx="40" cy="40" r="35" stroke="#ccc" strokeWidth="5" fill="none" />
      <circle
        cx="40"
        cy="40"
        r="35"
        stroke="#4caf50"
        strokeWidth="5"
        fill="none"
        strokeDasharray="220"
        strokeDashoffset={220 - (220 * percent) / 100}
      />
    </svg>
    <p>{percent}%</p>
  </div>
);

export default ProgressCircle;
