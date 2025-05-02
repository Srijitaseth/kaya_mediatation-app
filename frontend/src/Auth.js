import { useState } from "react";
import axios from "axios";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async () => {
    const endpoint = isLogin ? "/login" : "/register";
    try {
      const { data } = await axios.post(`http://localhost:5000/api/auth${endpoint}`, { email, password });
      alert(isLogin ? "Login successful!" : "Account created!");
      console.log(data);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold">{isLogin ? "Login" : "Sign Up"}</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2 m-2" />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2 m-2" />
      <button onClick={handleSubmit} className="bg-black text-white p-2 rounded-md">
        {isLogin ? "Login" : "Sign Up"}
      </button>
      <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 mt-2">
        {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
      </button>
    </div>
  );
}
