import React, { useState, useEffect, useRef } from 'react';
import '../styles/YogaFacts.css';
import YogaPose from '../../assets/yog-pose.png'; // Adjust path if needed

const yogaFacts = [
  {
    short: "Yoga improves flexibility & strength",
    full: "Regular yoga practice can significantly improve flexibility and strength, helping to increase range of motion in joints and build lean muscle mass."
  },
  {
    short: "Yoga reduces stress & anxiety",
    full: "Studies show that yoga can lower cortisol levels and activate the parasympathetic nervous system, helping to reduce stress and anxiety levels."
  },
  {
    short: "Yoga helps with chronic pain",
    full: "Many practitioners find that yoga helps manage chronic pain conditions by improving body awareness, reducing inflammation, and promoting relaxation."
  },
  {
    short: "Yoga improves sleep quality",
    full: "Regular yoga practice, especially gentle evening routines, can help improve sleep quality and reduce insomnia by calming the mind and relaxing the body."
  },
  {
    short: "Yoga benefits heart health",
    full: "Research suggests that yoga can lower blood pressure, reduce cholesterol, and improve overall cardiovascular health when practiced regularly."
  }
];

const YogaFacts = () => {
  const [factIndex, setFactIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const intervalRef = useRef();

  // Rotate facts every 3 seconds if not expanded
  useEffect(() => {
    if (!expanded) {
      intervalRef.current = setInterval(() => {
        setFactIndex(prev => (prev + 1) % yogaFacts.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [expanded]);

  // When you collapse, resume rotation from the current fact
  const handleReadMore = () => setExpanded(e => !e);

  return (
    <div className="yoga-facts-container">
      <div className="yoga-facts-content">
        <h3>Interesting for you:</h3>
        <p className="fact-text">
          {expanded ? yogaFacts[factIndex].full : yogaFacts[factIndex].short}
        </p>
        <button className="read-more-btn" onClick={handleReadMore}>
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
      <div className="yoga-pose">
        <img src={YogaPose} alt="Person in yoga pose" className="yoga-img" />
      </div>
    </div>
  );
};

export default YogaFacts;
