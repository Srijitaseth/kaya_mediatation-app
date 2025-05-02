import { Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Home from "./components/pages/Home";
import DailyPlan from "./components/pages/DailyPlan";
import BMIPage from "./components/pages/BMIPage";
// import CalendarTracker from "./components/CalendarTracker"; // no longer needed directly
import ProfilePage from "./components/pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/daily-plan" element={<DailyPlan />} />
      <Route path="/bmi" element={<BMIPage />} />
      {/* <Route path="/calendar" element={<CalendarTracker />} /> */}
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
