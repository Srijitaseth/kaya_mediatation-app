import { Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Home from "./components/pages/Home";
import DailyPlan from "./components/pages/DailyPlan";
import BMIPage from "./components/pages/BMIPage";
import ProfilePage from "./components/pages/ProfilePage";
import FoodCategories from "./components/pages/FoodCategories";
import InsightPage from "./components/pages/InsightPage"; // <-- Add this line

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/daily-plan" element={<DailyPlan />} />
      <Route path="/bmi" element={<BMIPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/food-categories" element={<FoodCategories />} />
      <Route path="/insight" element={<InsightPage />} /> {/* <-- Add this line */}
    </Routes>
  );
}

export default App;
