import React, { useState, useEffect } from 'react';
import '../styles/DietQuiz.css';

const DietQuiz = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const questions = [
    {
      id: 'goal',
      question: 'What is your primary diet goal?',
      options: [
        { value: 'weight_loss', label: 'Weight loss' },
        { value: 'muscle_gain', label: 'Muscle gain' },
        { value: 'maintain', label: 'Maintain weight' },
        { value: 'health', label: 'Improve overall health' }
      ]
    },
    {
      id: 'activity',
      question: 'What is your activity level?',
      options: [
        { value: 'sedentary', label: 'Sedentary (little to no exercise)' },
        { value: 'light', label: 'Light activity (1-3 days/week)' },
        { value: 'moderate', label: 'Moderate activity (3-5 days/week)' },
        { value: 'very_active', label: 'Very active (6-7 days/week)' }
      ]
    },
    {
      id: 'restrictions',
      question: 'Do you have any dietary restrictions?',
      options: [
        { value: 'none', label: 'None' },
        { value: 'vegetarian', label: 'Vegetarian' },
        { value: 'vegan', label: 'Vegan' },
        { value: 'gluten_free', label: 'Gluten-free' },
        { value: 'dairy_free', label: 'Dairy-free' }
      ]
    },
    {
      id: 'meal_count',
      question: 'How many meals do you prefer per day?',
      options: [
        { value: '3', label: '3 meals' },
        { value: '4', label: '4 meals' },
        { value: '5', label: '5 meals' },
        { value: '6', label: '6 meals' }
      ]
    },
    {
      id: 'cooking',
      question: 'How often do you cook at home?',
      options: [
        { value: 'rarely', label: 'Rarely' },
        { value: 'sometimes', label: 'Sometimes' },
        { value: 'often', label: 'Often' },
        { value: 'always', label: 'Almost always' }
      ]
    },
    {
      id: 'dislikes',
      question: 'Select foods you dislike or want to avoid:',
      multiSelect: true,
      options: [
        { value: 'seafood', label: 'Seafood' },
        { value: 'mushrooms', label: 'Mushrooms' },
        { value: 'dairy', label: 'Dairy' },
        { value: 'eggs', label: 'Eggs' },
        { value: 'nuts', label: 'Nuts' }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateDietPlan();
    }
  };

  const generateDietPlan = () => {
    onComplete(answers);
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="diet-quiz-container">
      <div className="quiz-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-text">
          Question {currentStep + 1} of {questions.length}
        </div>
      </div>

      <div className="question-container">
        <h2>{currentQuestion.question}</h2>
        
        <div className="options-container">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              className={`option-button ${answers[currentQuestion.id] === option.value ? 'selected' : ''}`}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-navigation">
        {currentStep > 0 && (
          <button 
            className="back-button"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Previous
          </button>
        )}

        {currentStep === questions.length - 1 && (
          <button 
            className="complete-button"
            onClick={generateDietPlan}
          >
            Generate My Plan
          </button>
        )}
      </div>
    </div>
  );
};

export default DietQuiz;
