import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Categories.css';

const Categories = ({ onCategorySelect, selectedCategory = 'Popular' }) => {
  const navigate = useNavigate();
  const categories = ['Popular', 'Yoga', 'Meditation', 'Pilates'];
  
  return (
    <div className="categories-section">
      <h2 className="categories-title">Categories</h2>
      <div className="category-buttons">
        {categories.map(category => (
          <button 
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategorySelect && onCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <button 
        className="view-plan-btn"
        onClick={() => navigate('/daily-plan')}
      >
        View Your Daily Health Plan
      </button>
    </div>
  );
};

export default Categories;
