import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar"; // sama seperti Dashboard terbaru

export default function AdminDashboardPremium() {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/orders");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Gagal fetch orders:", err);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 font-sans">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-slate-800 text-center">
          Dashboard Admin
        </h1>

        {/* Table Pesanan */}
        <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-slate-200">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Nama</th>
                <th className="p-3 text-left">Telepon</th>
                <th className="p-3 text-left">Layanan</th>
                <th className="p-3 text-left">Catatan</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`border-b hover:bg-gray-50 transition-colors ${
                    idx % 2 === 0 ? "bg-white/80" : "bg-white/60"
                  }`}
                >
                  <td className="p-3 font-medium text-gray-700">{item.id}</td>
                  <td className="p-3 text-gray-700">{item.name}</td>
                  <td className="p-3 text-gray-700">{item.phone}</td>
                  <td className="p-3 text-gray-700">{item.service}</td>
                  <td className="p-3 text-gray-600">{item.notes || "-"}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white font-semibold ${
                        item.status === "Selesai"
                          ? "bg-green-600"
                          : item.status === "Diproses"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {item.status || "Pending"}
                    </span>
                  </td>
                </tr>
              ))}

              {orders.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="p-6 text-center text-gray-500 text-lg"
                  >
                    Tidak ada pesanan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
