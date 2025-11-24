import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavLinkItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition ${
        isActive
          ? "bg-blue-600 text-white"
          : "text-gray-200 hover:bg-blue-500/40 hover:text-white"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="bg-blue-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold shadow">
              QL
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-semibold text-white">Laundry</div>
              <div className="text-xs text-blue-100">. . . . .</div>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLinkItem to="/dashboard">Dashboard</NavLinkItem>
            <NavLinkItem to="/services">Services</NavLinkItem>
            <NavLinkItem to="/orders">Orders</NavLinkItem>
            <NavLinkItem to="/tracking">Tracking</NavLinkItem>
            <NavLinkItem to="/contact">Contact</NavLinkItem>
          </nav>

          {/* KELUAR */}
          <Link
            to="/"
            className="px-4 py-2 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-100 transition"
          >
            Keluar
          </Link>

        </div>
      </div>
    </header>
  );
}
