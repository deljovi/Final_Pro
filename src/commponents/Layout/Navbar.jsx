import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="text-lg font-bold">MyApp</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/order">Order</Link>
        <Link to="/tracking">Tracking</Link>
      </div>
    </nav>
  );
};

export default Navbar;
