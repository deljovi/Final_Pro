import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/layout/NavbarAdmin";
import Swal from "sweetalert2";

export default function AdminTrackingFinal() {
  const [orders, setOrders] = useState([]);
  const [openDetail, setOpenDetail] = useState(null);

  const loadOrders = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/orders");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Tidak dapat memuat data pesanan",
      });
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      await fetch(`http://127.0.0.1:3000/orders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      await Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: `Status pesanan diubah menjadi "${newStatus}"`,
        timer: 1200,
        showConfirmButton: false,
      });
      loadOrders();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Gagal mengubah status pesanan",
      });
    }
  };

  const deleteOrder = async (id) => {
    const result = await Swal.fire({
      title: "Hapus pesanan?",
      text: "Pesanan akan dihapus permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        await fetch(`http://127.0.0.1:3000/orders/${id}`, { method: "DELETE" });
        await Swal.fire({
          icon: "success",
          title: "Terhapus!",
          text: "Pesanan berhasil dihapus.",
          timer: 1200,
          showConfirmButton: false,
        });
        loadOrders();
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Gagal menghapus pesanan",
        });
      }
    }
  };

  const statusStep = ["Pending", "Diproses", "Selesai"];
  const statusColor = {
    Pending: "bg-yellow-400 text-yellow-800",
    Diproses: "bg-blue-400 text-blue-800",
    Selesai: "bg-green-400 text-green-800",
  };

  // Drag & Drop
  const handleDrag = (e, orderId) => {
    e.dataTransfer.setData("orderId", orderId);
  };

  const handleDrop = (e, newStatus) => {
    const orderId = Number(e.dataTransfer.getData("orderId"));
    updateStatus(orderId, newStatus);
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 animate-gradient-bg">
      <NavbarAdmin />
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Tracking Pesanan
        </h1>

        <div className="space-y-6">
          {orders.length === 0 && (
            <div className="p-6 text-center text-gray-400 bg-white rounded-2xl shadow-lg">
              Tidak ada pesanan.
            </div>
          )}

          {orders.map((item) => {
            const currentStep = statusStep.indexOf(item.status) + 1;
            const progressPercent = (currentStep / statusStep.length) * 100;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow cursor-pointer overflow-hidden border border-gray-200"
                onClick={() => setOpenDetail(openDetail === item.id ? null : item.id)}
              >
                <div className="grid grid-cols-4 gap-4 p-4 items-center">
                  <div className="font-medium text-gray-800">{item.name}</div>
                  <div className="text-gray-600">{item.service}</div>
                  <div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteOrder(item.id);
                      }}
                      className="px-4 py-1 rounded-lg bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition-all"
                    >
                      Hapus
                    </button>
                    <button className="px-4 py-1 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition-all">
                      Detail
                    </button>
                  </div>
                </div>

                {openDetail === item.id && (
                  <div className="bg-gray-50 p-6 border-t border-gray-200 rounded-b-3xl">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                      Progress Pesanan
                    </h2>

                    {/* Animated Gradient Progress Bar */}
                    <div className="relative h-4 bg-gray-200 rounded-full mb-4 overflow-hidden">
                      <div
                        className="absolute h-4 rounded-full transition-all duration-700 ease-out bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>

                    {/* Drag & Drop Timeline */}
                    <div className="grid grid-cols-3 text-center text-sm font-medium gap-2">
                      {statusStep.map((status, index) => (
                        <div
                          key={status}
                          draggable
                          onDragStart={(e) => handleDrag(e, item.id)}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => handleDrop(e, status)}
                          onClick={() => updateStatus(item.id, status)}
                          className={`py-2 rounded-full cursor-pointer transition-all ${
                            currentStep - 1 >= index
                              ? "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white shadow-md"
                              : "bg-gray-200 text-gray-500"
                          }`}
                        >
                          {status}
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm mt-2 text-center">
                      Klik atau geser status untuk update pesanan.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <style>{`
        @keyframes gradient-bg {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        .animate-gradient-bg {
          background-size: 400% 400%;
          animation: gradient-bg 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
