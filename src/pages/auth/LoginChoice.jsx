// src/pages/LoginChoice.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginChoice = () => {
  const navigate = useNavigate();

  const handleChoice = (role) => {
    localStorage.setItem("role", role); // simpan role
    if (role === "user") navigate("/dashboard");
    else navigate("/admin");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-4xl font-bold">Pilih Login</h1>
      <div className="flex gap-4">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => handleChoice("user")}
        >
          User
        </button>
        <button
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => handleChoice("admin")}
        >
          Admin
        </button>
      </div>
    </div>
  );
};

export default LoginChoice;
