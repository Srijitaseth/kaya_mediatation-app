import React from "react";

const HeaderSection = ({ name, day }) => (
  <div className="header">
    <p>Hello {name}</p>
    <h2>Health Plan for <strong>{day}</strong></h2>
  </div>
);

export default HeaderSection;
