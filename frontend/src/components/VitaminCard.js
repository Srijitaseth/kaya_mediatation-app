import React from "react";

const VitaminCard = ({ name, benefit, doses }) => (
  <div className="vitamin-card">
    <h3>{doses} Doses of {name}</h3>
    <p>{benefit}</p>
  </div>
);

export default VitaminCard;
