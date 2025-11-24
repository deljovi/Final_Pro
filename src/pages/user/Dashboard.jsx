import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold p-4">User Dashboard</h1>
      <p>Welcome, user!</p>
    </div>
  );
};

export default Dashboard;
