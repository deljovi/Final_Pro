import React from "react";
import Navbar from "../../components/layout/Navbar";
import { Link } from "react-router-dom";

const serviceData = [
  {
    title: "Reguler 3 Hari",
    icon: "⏰",
    subtitle: "Pembelian Teratas",
    items: [
      { label: "Lipat", value: "Rp5.000/kg" },
      { label: "Setrika", value: "Rp7.000/kg" },
    ],
  },
  {
    title: "Express 1 Hari",
    icon: "⚡",
    subtitle: "Selesai dalam 24 jam",
    items: [
      { label: "Lipat", value: "Rp9.000/kg" },
      { label: "Setrika", value: "Rp13.000/kg" },
    ],
  },
  {
    title: "Kilat 6 Jam",
    icon: "🚀",
    subtitle: "Selesai dalam 6 jam",
    items: [
      { label: "Lipat", value: "Rp13.000/kg" },
      { label: "Setrika", value: "Rp18.000/kg" },
    ],
  },
  {
    title: "Bed Cover (Reguler)",
    icon: "🛏️",
    subtitle: "Cuci & Setrika",
    items: [
      { label: "Kecil-Sedang", value: "Rp30.000/pcs" },
      { label: "Besar", value: "Rp40.000/pcs" },
    ],
  },
  {
    title: "Bed Cover (Express)",
    icon: "🛏️⚡",
    subtitle: "Selesai 1 hari",
    items: [{ label: "Kecil-Besar", value: "Rp55.000/pcs" }],
  },
  {
    title: "Sprei (Reguler)",
    icon: "🛋️",
    subtitle: "Ukuran 120-160",
    items: [{ label: "Per pcs", value: "Rp12.000/pcs" }],
  },
  {
    title: "Sprei (Express)",
    icon: "🛋️⚡",
    subtitle: "Ukuran 120-160",
    items: [{ label: "Per pcs", value: "Rp18.000/pcs" }],
  },
  {
    title: "Sprei (Kilat)",
    icon: "🛋️🚀",
    subtitle: "Ukuran 120-160",
    items: [{ label: "Per pcs", value: "Rp25.000/pcs" }],
  },
  {
    title: "Baby Laundry",
    icon: "👶",
    subtitle: "(Sleek Baby & Dettol)",
    items: [{ label: "Per kg", value: "Rp20.000/kg" }],
  },
  {
    title: "Cuci Baby Stroller",
    icon: "🛒",
    subtitle: "Pengerjaan 4-5 Hari",
    items: [{ label: "Per stroller", value: "Rp150.000/stroller" }],
  },
];

export default function HomeDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-indigo-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Layanan Laundry Premium
            </h1>
            <p className="text-gray-700 mb-6">
              Pilih layanan yang sesuai kebutuhan Anda dan nikmati kualitas terbaik.
            </p>
            {/* ✅ Link ke Order.jsx */}
            <Link
              to="http://localhost:5173/orders"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Illustration */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="text-6xl animate-bounce">🧺</div>
            <div className="absolute -top-6 left-10 text-2xl animate-pulse">🫧</div>
            <div className="absolute -top-10 right-10 text-2xl animate-pulse">🫧</div>
            <div className="absolute -bottom-6 left-1/3 text-2xl animate-pulse">🫧</div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="harga" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Daftar Harga Layanan
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-500 text-sm">{service.subtitle}</p>
                  </div>
                </div>
                <div className="mt-2 space-y-2">
                  {service.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between border-t pt-2 text-gray-700"
                    >
                      <span>{item.label}</span>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
