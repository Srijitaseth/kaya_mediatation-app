import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import DailyPlanRoute from "./routes/DailyPlan.js";
import AuthRoute from "./routes/auth.js"; // ✅ Add this line

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/daily-plan", DailyPlanRoute);
app.use("/api/auth", AuthRoute); // ✅ Auth route

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


