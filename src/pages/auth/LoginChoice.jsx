import React from "react";
import { Link } from "react-router-dom";

const LoginChoice = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login As</h1>
      <div className="space-x-4">
        <Link to="/admin/login" className="px-4 py-2 bg-gray-800 text-white rounded">Admin</Link>
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">User</Link>
      </div>
    </div>
  );
};

export default LoginChoice;
