import React from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="text-lg font-bold">Admin Panel</div>
      <div className="space-x-4">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/tracking">Tracking</Link>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
