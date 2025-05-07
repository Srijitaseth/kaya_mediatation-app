import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/InsightPage.css";

const categoryInfo = [
  {
    id: "vegetables",
    label: "Vegetables",
    color: "linear-gradient(90deg, #b2c663 0%, #d6de9f 100%)",
    options: [
      { value: 0, label: "None" },
      { value: 1, label: "1 serving (≈ 55 cal)" },
      { value: 2, label: "2 servings (≈ 110 cal)" },
      { value: 3, label: "3+ servings (≈ 165 cal)" }
    ],
    info: "1 serving = 1 cup raw or 1/2 cup cooked vegetables"
  },
  {
    id: "nuts",
    label: "Nuts",
    color: "linear-gradient(90deg, #dd8c4b 0%, #f8d7a8 100%)",
    options: [
      { value: 0, label: "None" },
      { value: 1, label: "Small portion (≈ 400 cal)" },
      { value: 2, label: "Medium portion (≈ 800 cal)" },
      { value: 3, label: "Large portion (≈ 1200 cal)" }
    ],
    info: "1 serving = 1 ounce (small handful) of nuts"
  },
  {
    id: "fish",
    label: "Fish",
    color: "linear-gradient(90deg, #3c7ba6 0%, #b2d6f5 100%)",
    options: [
      { value: 0, label: "None" },
      { value: 1, label: "Small portion (≈ 95 cal)" },
      { value: 2, label: "Medium portion (≈ 190 cal)" },
      { value: 3, label: "Large portion (≈ 285 cal)" }
    ],
    info: "3 oz = size of a deck of cards"
  },
  {
    id: "eggs",
    label: "Eggs",
    color: "linear-gradient(90deg, #f7cd55 0%, #f7e9b4 100%)",
    options: [
      { value: 0, label: "None" },
      { value: 1, label: "1 egg (≈ 80 cal)" },
      { value: 2, label: "2-3 eggs (≈ 200 cal)" },
      { value: 5, label: "4+ eggs (≈ 400 cal)" }
    ],
    info: "Includes whole eggs in any form (boiled, fried, etc.)"
  }
];

export default function InsightPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Handle answer selection
  const handleSelect = (categoryId, value) => {
    setAnswers({ ...answers, [categoryId]: value });
    if (step < categoryInfo.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  // Calculate category calories
  const getCalories = (category) => {
    const val = answers[category.id] || 0;
    if (category.id === "vegetables") return val === 3 ? 165 : val * 55;
    if (category.id === "nuts") return val === 3 ? 1200 : val * 400;
    if (category.id === "fish") return val === 3 ? 285 : val * 95;
    if (category.id === "eggs") return val === 5 ? 400 : val * 80;
    return 0;
  };

  // Prepare results
  const results = categoryInfo.map((cat) => ({
    ...cat,
    calories: getCalories(cat)
  }));

  const totalCalories = results.reduce((sum, cat) => sum + cat.calories, 0);

  // Bar graph data (static for demo, can be dynamic)
  const bars = [
    "#f7cd55", "#b2c663", "#dd8c4b", "#3c7ba6", "#d1186e",
    "#b2c663", "#3c7ba6", "#f7cd55", "#dd8c4b", "#b2c663",
    "#3c7ba6", "#d1186e", "#f7cd55", "#dd8c4b", "#3c7ba6"
  ];

  return (
    <div className="insight-bg">
      <div className="insight-page">
        <div className="insight-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            ←
          </button>
          <h1>Insight</h1>
        </div>
        <h2 className="calories-subtitle">Today's calories intake</h2>
        <div className="insight-content">
          {!showResults ? (
            <div className="calorie-quiz">
              <div className="quiz-card">
                <h3 className="question-text">{categoryInfo[step].question}</h3>
                <p className="question-info">{categoryInfo[step].info}</p>
                <div className="options-list">
                  {categoryInfo[step].options.map((option) => (
                    <button
                      key={option.value}
                      className={`calorie-option${answers[categoryInfo[step].id] === option.value ? " selected" : ""}`}
                      onClick={() => handleSelect(categoryInfo[step].id, option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <div className="quiz-progress">
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fg"
                      style={{ width: `${((step + 1) / categoryInfo.length) * 100}%` }}
                    />
                  </div>
                  <span className="progress-label">
                    {step + 1} of {categoryInfo.length}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="results-container">
              <div className="graph-card">
                <div className="graph-header">
                  <span className="day-label">Wednesday</span>
                  <div className="calorie-badge-container">
                    <span className="calorie-badge-label">Total calorie intake</span>
                    <span className="calorie-badge">{totalCalories}</span>
                  </div>
                </div>
                <div className="graph-container">
                  <div className="dotted-line line-top"></div>
                  <div className="dotted-line line-middle"></div>
                  <div className="dotted-line line-bottom"></div>
                  <div className="bar-graph">
                    {bars.map((color, i) => (
                      <div
                        key={i}
                        className="bar"
                        style={{
                          height: `${40 + Math.random() * 60}%`,
                          background: color,
                          animationDelay: `${i * 0.05}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="category-container">
                {results.map((cat, idx) => (
                  <div
                    className="category-bar"
                    key={cat.id}
                    style={{ background: cat.color }}
                  >
                    <span className="category-name">{cat.label}</span>
                    <span className="category-value">{cat.calories} cal</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
