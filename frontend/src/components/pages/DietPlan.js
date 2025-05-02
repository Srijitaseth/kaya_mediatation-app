// src/pages/DietPlan.js
import React from 'react';
import FoodCard from '../components/FoodCard';
import FooterNavBar from '../components/FooterNavBar';
import '../styles/DietPlan.css';

const categories = [
  { name: 'Vegetables', image: '/images/vegetables.png', bg: 'bg-gradient-veg' },
  { name: 'Juices', image: '/images/juices.png', bg: 'bg-gradient-juice' },
  { name: 'Fish', image: '/images/fish.png', bg: 'bg-gradient-fish' },
  { name: 'Nuts', image: '/images/nuts.png', bg: 'bg-gradient-nut' },
  { name: 'Eggs', image: '/images/eggs.png', bg: 'bg-gradient-eggs' },
];

const DietPlan = () => {
  return (
    <div className="diet-plan-page">
      <h1 className="category-title">Category</h1>

      <div className="category-grid">
        {categories.map((cat, i) => (
          <FoodCard key={i} name={cat.name} image={cat.image} bgClass={cat.bg} />
        ))}
      </div>

      <div className="personalised-section">
        <h2>Choose from the <span className="highlight">best</span></h2>
        <button className="personalised-btn">Get Your Personalised Diet</button>
        <div className="nutrition-card">
          <img src="/images/avocado.png" alt="avocado" />
          <p><strong>Healthy body</strong> comes with good nutrition</p>
          <button className="start-btn">Start Today!</button>
        </div>
      </div>

      <FooterNavBar />
    </div>
  );
};

export default DietPlan;
