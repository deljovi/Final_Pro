import React from "react";
import { NavLink } from "react-router-dom";

const LinkItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? "bg-indigo-600 text-white"
          : "text-white/90 hover:bg-indigo-500/40"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function NavbarAdmin() {
  return (
    <header className="bg-indigo-700 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-semibold">Admin Panel</h1>

          <nav className="hidden md:flex items-center gap-2 mr-4">
            <LinkItem to="/admin/dashboard">Dashboard</LinkItem>
            <LinkItem to="/admin/orders">Pesanan</LinkItem>
            <LinkItem to="/admin/tracking">Tracking</LinkItem>
          </nav>

          <NavLink
            to="/"
            className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm"
          >
            Keluar
          </NavLink>
        </div>
      </div>
    </header>
  );
}
