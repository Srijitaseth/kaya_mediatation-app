import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FoodCategories.css";

import vegetablesImg from "../../assets/vegetables.png";
import juicesImg from "../../assets/juices.png";
import fishImg from "../../assets/fish.png";
import nutsImg from "../../assets/nuts.png";
import eggsImg from "../../assets/eggs.png";
import avocadoImg from "../../assets/avocado.png";

const EXTERNAL_SERVICE_URLS = {
  blinkit: {
    vegetables: "https://blinkit.com/s/?q=vegetables",
    juices: "https://blinkit.com/s/?q=juices",
    fish: "https://blinkit.com/s/?q=fish",
    nuts: "https://blinkit.com/s/?q=nuts",
    eggs: "https://blinkit.com/s/?q=eggs",
  },
};

const SELECTED_SERVICE = "blinkit";

const expandedRecipes = {
  vegetables: [
    {
      title: "Roasted Mediterranean Vegetables",
      desc: "Colorful mix of bell peppers, zucchini, and eggplant with herbs.",
      ingredients: [
        "2 bell peppers",
        "1 zucchini",
        "1 eggplant",
        "1 red onion",
        "3 tbsp olive oil",
        "2 tbsp mixed herbs",
        "2 garlic cloves",
        "Salt and pepper",
      ],
      nutritionInfo: { calories: 165, protein: 3, carbs: 18, fats: 9 },
      prepTime: "15 mins",
      difficulty: "Easy",
    },
    // Add 9 more vegetable recipes here
  ],
  juices: [
    {
      title: "Green Detox Juice",
      desc: "Nutrient-dense juice to energize your day.",
      ingredients: [
        "2 cucumbers",
        "2 cups spinach",
        "1 green apple",
        "2 celery stalks",
        "½ lemon",
        "1 inch ginger",
      ],
      nutritionInfo: { calories: 95, protein: 2, carbs: 22, fats: 0.5 },
      prepTime: "10 mins",
      difficulty: "Easy",
    },
    // Add 9 more juice recipes here
  ],
  fish: [
    {
      title: "Lemon Herb Baked Salmon",
      desc: "Tender salmon fillet with fresh herbs and citrus.",
      ingredients: [
        "4x 6oz salmon fillets",
        "2 lemons",
        "4 sprigs dill",
        "4 sprigs parsley",
        "2 tbsp olive oil",
        "4 garlic cloves",
        "Salt and pepper",
      ],
      nutritionInfo: { calories: 320, protein: 34, carbs: 2, fats: 18 },
      prepTime: "25 mins",
      difficulty: "Easy",
    },
    // Add 9 more fish recipes here
  ],
  nuts: [
    {
      title: "Maple Cinnamon Roasted Nuts",
      desc: "Sweet and savory mix of roasted nuts with maple and spice.",
      ingredients: [
        "1 cup almonds",
        "1 cup walnuts",
        "1 cup pecans",
        "3 tbsp maple syrup",
        "1 tsp cinnamon",
        "½ tsp sea salt",
        "1 egg white",
      ],
      nutritionInfo: { calories: 200, protein: 5, carbs: 8, fats: 17 },
      prepTime: "25 mins",
      difficulty: "Easy",
    },
    // Add 9 more nut recipes here
  ],
  eggs: [
    {
      title: "Cloud Eggs",
      desc: "Whipped egg whites with a golden yolk center.",
      ingredients: [
        "Eggs",
        "Parmesan cheese",
        "Chives",
        "Black pepper",
        "Salt",
      ],
      nutritionInfo: { calories: 165, protein: 12, carbs: 1, fats: 12 },
      prepTime: "15 mins",
      difficulty: "Medium",
    },
    // Add 9 more egg recipes here
  ],
};

const DietQuiz = ({ onComplete, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: "goal",
      question: "What is your primary diet goal?",
      options: [
        { value: "weight_loss", label: "Weight loss" },
        { value: "muscle_gain", label: "Muscle gain" },
        { value: "maintain", label: "Maintain weight" },
        { value: "health", label: "Improve overall health" },
      ],
    },
    {
      id: "activity",
      question: "What is your activity level?",
      options: [
        { value: "sedentary", label: "Sedentary (little to no exercise)" },
        { value: "light", label: "Light activity (1-3 days/week)" },
        { value: "moderate", label: "Moderate activity (3-5 days/week)" },
        { value: "very_active", label: "Very active (6-7 days/week)" },
      ],
    },
    {
      id: "restrictions",
      question: "Do you have any dietary restrictions?",
      options: [
        { value: "none", label: "None" },
        { value: "vegetarian", label: "Vegetarian" },
        { value: "vegan", label: "Vegan" },
        { value: "gluten_free", label: "Gluten-free" },
        { value: "dairy_free", label: "Dairy-free" },
      ],
    },
    {
      id: "meal_count",
      question: "How many meals do you prefer per day?",
      options: [
        { value: "3", label: "3 meals" },
        { value: "4", label: "4 meals" },
        { value: "5", label: "5 meals" },
        { value: "6", label: "6 meals" },
      ],
    },
    {
      id: "dislikes",
      question: "Select foods you dislike or want to avoid:",
      multiSelect: true,
      options: [
        { value: "seafood", label: "Seafood" },
        { value: "mushrooms", label: "Mushrooms" },
        { value: "dairy", label: "Dairy" },
        { value: "eggs", label: "Eggs" },
        { value: "nuts", label: "Nuts" },
      ],
    },
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete({ ...answers, [questionId]: value });
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  return (
    <div className="diet-quiz-overlay">
      <div className="diet-quiz-container">
        <button className="close-quiz-btn" onClick={onClose}>
          ×
        </button>

        <h2>Diet and Body Goals Quiz</h2>

        <div className="quiz-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-text">
            Question {currentStep + 1} of {questions.length}
          </div>
        </div>

        <div className="question-container">
          <h3>{currentQuestion.question}</h3>

          <div className="options-container">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                className={`option-button ${
                  answers[currentQuestion.id] === option.value ? "selected" : ""
                }`}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DietPlanResults = ({ plan, onClose, allRecipes }) => {
  const [openRecipe, setOpenRecipe] = useState(null);

  const getRecipeByTitle = (title) => {
    for (const category of Object.values(allRecipes)) {
      const found = category.find((r) => r.title === title);
      if (found) return found;
    }
    return null;
  };

  return (
    <div className="diet-plan-overlay">
      <div className="diet-plan-container">
        <button className="close-plan-btn" onClick={onClose}>
          ×
        </button>
        <h2>Your Personalized Diet Plan</h2>
        <div className="plan-summary">
          <p>
            <strong>Daily Calories:</strong> {plan.dailyCalories} kcal
          </p>
          <p>
            <strong>Protein:</strong> {plan.macroSplit.protein}
          </p>
          <p>
            <strong>Carbs:</strong> {plan.macroSplit.carbs}
          </p>
          <p>
            <strong>Fats:</strong> {plan.macroSplit.fats}
          </p>
        </div>
        <div className="weekly-plan">
          {plan.weeklyPlan.map((day, index) => (
            <div key={index} className="plan-day">
              <h3>{day.day}</h3>
              {day.meals.map((meal, mealIndex) => (
                <div key={mealIndex} className="plan-meal">
                  <h4>Meal {mealIndex + 1}</h4>
                  <button
                    className="meal-title-btn"
                    onClick={() =>
                      setOpenRecipe(
                        openRecipe === `${day.day}-${mealIndex}` ? null : `${day.day}-${mealIndex}`
                      )
                    }
                  >
                    {meal.recipe}
                  </button>
                  <div className="meal-macros">
                    <span>{meal.calories} kcal</span>
                    <span>{meal.protein}g protein</span>
                    <span>{meal.carbs}g carbs</span>
                    <span>{meal.fats}g fats</span>
                  </div>
                  {openRecipe === `${day.day}-${mealIndex}` && (
                    <div className="full-recipe-modal">
                      {(() => {
                        const fullRecipe = getRecipeByTitle(meal.recipe);
                        if (!fullRecipe) return <p>Recipe details not found.</p>;
                        return (
                          <div className="full-recipe-content">
                            <h5>Ingredients:</h5>
                            <ul>
                              {fullRecipe.ingredients.map((ing, i) => (
                                <li key={i}>{ing}</li>
                              ))}
                            </ul>
                            <h5>Nutrition:</h5>
                            <div className="nutrition-info">
                              <span>{fullRecipe.nutritionInfo.calories} kcal</span>
                              <span>{fullRecipe.nutritionInfo.protein}g protein</span>
                              <span>{fullRecipe.nutritionInfo.carbs}g carbs</span>
                              <span>{fullRecipe.nutritionInfo.fats}g fats</span>
                            </div>
                            {fullRecipe.desc && (
                              <>
                                <h5>Description:</h5>
                                <p>{fullRecipe.desc}</p>
                              </>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function FoodCategories() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [dietPlan, setDietPlan] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    {
      key: "vegetables",
      label: "vegetables",
      img: vegetablesImg,
      gradient: "linear-gradient(135deg, #7a9e45 0%, #d6de9f 100%)",
      recipes: expandedRecipes.vegetables,
    },
    {
      key: "juices",
      label: "Juices",
      img: juicesImg,
      gradient: "linear-gradient(135deg, #d1186e 0%, #f9bbc3 100%)",
      recipes: expandedRecipes.juices,
    },
    {
      key: "fish",
      label: "Fish",
      img: fishImg,
      gradient: "linear-gradient(135deg, #3c7ba6 0%, #b2d6f5 100%)",
      recipes: expandedRecipes.fish,
    },
    {
      key: "nuts",
      label: "Nuts",
      img: nutsImg,
      gradient: "linear-gradient(135deg, #dd8c4b 0%, #f8d7a8 100%)",
      recipes: expandedRecipes.nuts,
    },
    {
      key: "eggs",
      label: "Eggs",
      img: eggsImg,
      gradient: "linear-gradient(135deg, #f7cd55 0%, #f7e9b4 100%)",
      recipes: expandedRecipes.eggs,
    },
  ];

  const filterRecipes = (recipes) => {
    if (activeFilter === "All") return recipes;
    if (activeFilter === "Under 300 Cal") return recipes.filter(r => r.nutritionInfo.calories < 300);
    if (activeFilter === "High Protein") return recipes.filter(r => r.nutritionInfo.protein > 20);
    if (activeFilter === "Quick Prep") return recipes.filter(r => r.prepTime && r.prepTime.includes("mins") && parseInt(r.prepTime) < 20);
    return recipes;
  };

  const generateMealPlan = (calories, preferences) => {
    const mealPlan = {
      weeklyPlan: [],
      dailyCalories: calories,
      macroSplit: {
        protein: preferences.goal === "muscle_gain" ? "30%" : "25%",
        carbs: preferences.goal === "weight_loss" ? "40%" : "50%",
        fats: preferences.goal === "weight_loss" ? "35%" : "25%",
      },
    };
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    for (let day = 0; day < 7; day++) {
      const dailyMeals = [];
      const mealCount = parseInt(preferences.meal_count) || 3;
      for (let meal = 0; meal < mealCount; meal++) {
        let mealType = "lunch";
        if (meal === 0) mealType = "breakfast";
        if (meal === mealCount - 1) mealType = "dinner";

        let recipeArray;
        if (mealType === "breakfast") recipeArray = expandedRecipes.eggs;
        else if (mealType === "lunch") {
          recipeArray =
            preferences.restrictions === "vegetarian"
              ? expandedRecipes.vegetables
              : expandedRecipes.fish;
        } else {
          recipeArray =
            preferences.restrictions === "vegetarian"
              ? expandedRecipes.vegetables
              : expandedRecipes.fish;
        }

        const recipe =
          recipeArray[Math.floor(Math.random() * recipeArray.length)];

        dailyMeals.push({
          recipe: recipe.title,
          calories: recipe.nutritionInfo.calories,
          protein: recipe.nutritionInfo.protein,
          carbs: recipe.nutritionInfo.carbs,
          fats: recipe.nutritionInfo.fats,
        });
      }
      mealPlan.weeklyPlan.push({
        day: daysOfWeek[day],
        meals: dailyMeals,
      });
    }
    return mealPlan;
  };

  const handleQuizComplete = (answers) => {
    setIsGenerating(true);
    setShowQuiz(false);
    setTimeout(() => {
      const baseCalories = 2000;
      let calorieMultiplier = 1.0;
      switch (answers.activity) {
        case "sedentary":
          calorieMultiplier = 1.2;
          break;
        case "light":
          calorieMultiplier = 1.375;
          break;
        case "moderate":
          calorieMultiplier = 1.55;
          break;
        case "very_active":
          calorieMultiplier = 1.725;
          break;
        default:
          calorieMultiplier = 1.2;
      }
      let goalAdjustment = 0;
      switch (answers.goal) {
        case "weight_loss":
          goalAdjustment = -300;
          break;
        case "muscle_gain":
          goalAdjustment = 300;
          break;
        default:
          goalAdjustment = 0;
      }
      const dailyCalories = Math.round(baseCalories * calorieMultiplier + goalAdjustment);
      const plan = generateMealPlan(dailyCalories, answers);
      setDietPlan(plan);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="food-categories-page">
      <h1 className="category-title">Category</h1>
      {!selected ? (
        <>
          <div className="category-grid">
            {categories.map((cat) => (
              <div
                className="category-card"
                key={cat.key}
                style={{ background: cat.gradient }}
                onClick={() => setSelected(cat.key)}
              >
                <img src={cat.img} alt={cat.label} className="category-img" />
                <span className="category-label">{cat.label}</span>
                <button
                  className="add-btn-ui"
                  onClick={(e) => {
                    e.stopPropagation();
                    const serviceUrl = EXTERNAL_SERVICE_URLS[SELECTED_SERVICE][cat.key];
                    if (serviceUrl) {
                      window.open(serviceUrl, "_blank");
                    } else {
                      alert("Category not available on the selected service.");
                    }
                  }}
                >
                  Add to <span role="img" aria-label="cart">🛒</span>
                </button>
              </div>
            ))}
          </div>
          <div className="choose-best-row">
            <span className="choose-best">
              <span style={{ color: "#3a7ca5" }}>Choose from </span>
              <span style={{ color: "#7a9e45" }}>the best</span>
            </span>
          </div>
          <div className="diet-section">
            <button className="diet-plan-btn" onClick={() => setShowQuiz(true)}>
              Your Own Diet Plan
            </button>

            {/* Added button below as requested */}
            <button
              className="insight-btn"
              onClick={() => navigate('/insight')}
            >
              Get Insight on Your Diet
            </button>
          </div>
          <div className="healthy-body-card">
            <img src={avocadoImg} alt="Avocado" className="avocado-img" />
            <div className="healthy-body-content">
              <div className="healthy-body-title">
                Healthy body <span className="comes">comes</span> <br />
                with good nutrition
              </div>
              <div className="start-today-row">
                <span className="start-today">Start Today!</span>
                <button className="plus-btn">+</button>
              </div>
            </div>
          </div>
          
        </>
      ) : (
        <div className="recipes-view">
          <button className="back-btn" onClick={() => setSelected(null)}>
            ← Back to Categories
          </button>
          <h2 className="recipes-title">{categories.find(c => c.key === selected).label} Recipes</h2>
          <div className="recipe-filters">
            {["All", "Under 300 Cal", "High Protein", "Quick Prep"].map(filter => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="recipes-list">
            {filterRecipes(categories.find(c => c.key === selected).recipes).map((recipe, idx) => (
              <div className="recipe-card" key={idx}>
                <h3>{recipe.title}</h3>
                <p>{recipe.desc}</p>
                <div className="recipe-meta">
                  {recipe.prepTime && <span className="prep-time">⏱️ {recipe.prepTime}</span>}
                  {recipe.difficulty && <span className="difficulty">🔥 {recipe.difficulty}</span>}
                </div>
                <div className="nutrition-info">
                  <span>{recipe.nutritionInfo.calories} kcal</span>
                  <span>{recipe.nutritionInfo.protein}g protein</span>
                  <span>{recipe.nutritionInfo.carbs}g carbs</span>
                  <span>{recipe.nutritionInfo.fats}g fat</span>
                </div>
                <div className="ingredients">
                  <strong>Ingredients:</strong>
                  <ul>
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className="buy-ingredients-btn"
                  onClick={() => window.open(EXTERNAL_SERVICE_URLS[SELECTED_SERVICE][selected], "_blank")}
                >
                  Buy Ingredients
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {showQuiz && <DietQuiz onComplete={handleQuizComplete} onClose={() => setShowQuiz(false)} />}

      {isGenerating && (
        <div className="generating-results">
          <div className="spinner"></div>
          <h3>Creating your personalized meal plan...</h3>
          <p>Analyzing your preferences and nutritional needs</p>
        </div>
      )}

      {dietPlan && <DietPlanResults plan={dietPlan} onClose={() => setDietPlan(null)} allRecipes={expandedRecipes} />}
    </div>
  );
}
