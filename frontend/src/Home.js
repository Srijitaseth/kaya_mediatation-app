import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-center p-4">
      <h1 className="text-3xl font-bold">KAYA</h1>
      <p className="text-sm text-gray-500">Health & Wealth</p>
      <button onClick={() => navigate("/auth")} className="mt-6 bg-yellow-300 px-6 py-2 rounded-lg shadow-md">
        Start Now
      </button>
    </div>
  );
}
