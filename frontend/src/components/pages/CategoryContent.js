import React, { useState } from 'react';

const categories = [
  {
    name: 'Popular',
    articles: [
      {
        title: 'Why Pilates or Yoga Should Be Part of Your 2025 Wellness Routine',
        summary: 'Pilates and Yoga balance physical fitness with mental and emotional well-being...',
        url: 'https://www.oastosteopathy.co.uk/blog/why-pilates-or-yoga-should-be-part-of-your-2025-we/',
      },
      {
        title: '12 Yoga Trends to Follow and Attract More Members in 2025',
        summary: 'Emerging trends in yoga including AI-personalized programs and mind-body integrative classes...',
        url: 'https://wod.guru/blog/yoga-trends/',
      },
      // Add more articles here...
    ],
    tips: [
      'Practice Surya Namaskar every morning to energize your body.',
      'Incorporate mindfulness meditation to reduce stress.',
      'Use wearable devices to track your yoga progress.',
    ],
  },
  {
    name: 'Yoga',
    articles: [
      {
        title: 'Yoga for a Beautiful Mind: Trends to Embrace in 2025',
        summary: 'Optimizing emotional and psychological wellbeing through yoga...',
        url: 'https://www.indiatoday.in/india-today-insight/story/yoga-for-a-beautiful-mind-trends-to-embrace-in-2025-2657767-2024-12-31',
      },
      {
        title: 'Yoga in 2025: Finding Calm in a Stressful World',
        summary: 'Yoga trains the mind and body to handle challenges with more ease...',
        url: 'https://www.emeraldyoga.com/blog/yoga-in-2025-finding-calm-in-a-stressful-world',
      },
      // Add more yoga articles...
    ],
    tips: [
      'Start your day with deep breathing exercises.',
      'Practice gentle stretches to ease tension.',
      'Try grounding poses like Child’s Pose for calmness.',
    ],
  },
  {
    name: 'Meditation',
    articles: [
      {
        title: 'Tips for Kickstarting A Daily Yoga Habit in 2025',
        summary: 'Begin with 5 minutes of meditation, gradually increasing duration...',
        url: 'https://yogaeastwest.com/explore/yoga_certification/daily-yoga/',
      },
      // Add more meditation articles...
    ],
    tips: [
      'Use mantra repetition to focus your mind.',
      'Create a quiet space for your practice.',
      'Keep a gratitude journal after meditation.',
    ],
  },
  {
    name: 'Pilates',
    articles: [
      {
        title: 'Why Pilates Should Be Part of Your Wellness Routine',
        summary: 'Pilates offers low-impact, effective ways to improve strength and flexibility...',
        url: 'https://www.oastosteopathy.co.uk/blog/why-pilates-or-yoga-should-be-part-of-your-2025-we/',
      },
      // Add more pilates articles...
    ],
    tips: [
      'Focus on core engagement during exercises.',
      'Maintain controlled breathing throughout.',
      'Incorporate Pilates into your weekly routine for best results.',
    ],
  },
];

const CategoryContent = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="category-content-container">
      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`category-tab ${selectedCategory.name === cat.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Articles and Tips */}
      <div className="category-details">
        <div className="articles-section">
          <h3>Recent Articles</h3>
          {selectedCategory.articles.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              <h4>{article.title}</h4>
              <p>{article.summary}</p>
            </a>
          ))}
        </div>

        <div className="tips-section">
          <h3>Tips & Tricks</h3>
          <ul>
            {selectedCategory.tips.map((tip, idx) => (
              <li key={idx} className="tip-item">{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryContent;
