// src/components/FoodCard.js
import React from 'react';
import '../styles/FoodCard.css';

const FoodCard = ({ name, image, bgClass }) => {
  return (
    <div className={`food-card ${bgClass}`}>
      <img src={image} alt={name} className="food-img" />
      <h3>{name}</h3>
      <button className="add-to-cart">
        Add to <i className="fa fa-shopping-basket"></i>
      </button>
    </div>
  );
};

export default FoodCard;
