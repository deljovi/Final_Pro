import React from "react";
import NavbarAdmin from "../../components/navbar/NavbarAdmin";

const AdminDashboard = () => {
  return (
    <div>
      <NavbarAdmin />
      <h1 className="text-2xl font-bold p-4">Admin Dashboard</h1>
      <p>Welcome, Admin!</p>
    </div>
  );
};

export default AdminDashboard;
