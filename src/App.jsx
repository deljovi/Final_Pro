import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginChoice from "./pages/auth/LoginChoice";
import Navbar from "./components/layout/Navbar"; // Navbar user
import NavbarAdmin from "./components/layout/NavbarAdmin"; // Navbar admin
import Dashboard from "./pages/user/Dashboard";
import Services from "./pages/user/Services";
import Order from "./pages/user/Order";
import Contact from "./pages/user/Contact";  
import TrackingUser from "./pages/user/Tracking";
import TrackingAdmin from "./pages/admin/TrackingAdmin";    
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders"; // halaman admin untuk update status
import ProtectedRoute from "./components/hoc/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman login choice */}
        <Route path="/" element={<LoginChoice />} />

        {/* User Routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute roleRequired="user">
              <Navbar />
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="services" element={<Services />} />
                <Route path="order" element={<Order />} />
                <Route path="contact" element={<Contact />} />
                <Route path="tracking" element={<TrackingUser />} />             
                </Routes>
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute roleRequired="admin">
              <NavbarAdmin />
              <Routes>
                <Route index element={<AdminDashboard />} />
                <Route path="orders" element={<AdminOrders />} /> {/* halaman kelola pesanan */}
                <Route path="tracking" element={<TrackingAdmin />} />
              </Routes>
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
