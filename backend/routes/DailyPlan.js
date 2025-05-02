import express from "express";
const router = express.Router();

// Mock data for the daily plan
router.get("/plan", (req, res) => {
  res.json({
    name: "Sam",
    day: "Monday",
    completion: 65,
    vitamins: [
      { name: "Vitamin C", benefit: "Boosts immunity", doses: "2x daily" },
      { name: "Vitamin D", benefit: "Strengthens bones", doses: "1x daily" },
    ],
    healthIssues: [
      { issue: "Back pain", suggestedPlan: "Do stretching exercises" },
      { issue: "Fatigue", suggestedPlan: "Get 8 hours of sleep" }
    ],
  });
});

export default router;
