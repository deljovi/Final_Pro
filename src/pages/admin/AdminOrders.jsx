import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/layout/NavbarAdmin";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  // Fetch orders dari db.json
  const loadOrders = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/orders");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Gagal memuat pesanan:", err);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <NavbarAdmin />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Orders</h1>

        <div className="bg-white rounded shadow overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Layanan</th>
                <th className="p-3">Status</th>
                <th className="p-3">Total</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-4 text-center text-gray-500">
                    Belum ada pesanan.
                  </td>
                </tr>
              )}

              {orders.map((order) => (
                <tr key={order.id} className="border-t hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-medium text-gray-700">#{order.id}</td>
                  <td className="p-3 text-gray-700">{order.name}</td>
                  <td className="p-3 text-gray-700">{order.service} - {order.type}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white font-semibold ${
                        order.status === "Selesai"
                          ? "bg-green-600"
                          : order.status === "Diproses"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {order.status || "Pending"}
                    </span>
                  </td>
                  <td className="p-3 text-gray-700">{order.total.toLocaleString()}</td>
                  <td className="p-3">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
