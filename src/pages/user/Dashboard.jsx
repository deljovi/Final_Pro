import React from "react";
import Navbar from "../../components/layout/Navbar";
import { Link } from "react-router-dom";

const serviceData = [
  {
    title: "Espresso Drinks",
    icon: "☕",
    subtitle: "Klasik & kuat",
    items: [
      { label: "Espresso (Single)", value: "Rp20.000/cup" },
      { label: "Americano", value: "Rp25.000/cup" },
    ],
  },
  {
    title: "Milk Based",
    icon: "🥛",
    subtitle: "Lembut & creamy",
    items: [
      { label: "Cappuccino", value: "Rp30.000/cup" },
      { label: "Latte", value: "Rp32.000/cup" },
    ],
  },
  {
    title: "Cold Brew & Iced",
    icon: "❄️",
    subtitle: "Segar & dingin",
    items: [
      { label: "Cold Brew", value: "Rp35.000/cup" },
      { label: "Iced Latte", value: "Rp32.000/cup" },
    ],
  },
  {
    title: "Tea & Specialty",
    icon: "🍵",
    subtitle: "Teh & minuman hangat lainnya",
    items: [
      { label: "Green Tea", value: "Rp22.000/cup" },
      { label: "Chai Latte", value: "Rp28.000/cup" },
    ],
  },
  {
    title: "Pastries",
    icon: "🥐",
    subtitle: "Camilan segar setiap hari",
    items: [
      { label: "Croissant", value: "Rp18.000/pcs" },
      { label: "Blueberry Muffin", value: "Rp20.000/pcs" },
    ],
  },
  {
    title: "Sandwiches",
    icon: "🥪",
    subtitle: "Pilihan kenyang",
    items: [
      { label: "Chicken Sandwich", value: "Rp45.000/pcs" },
      { label: "Veggie Sandwich", value: "Rp42.000/pcs" },
    ],
  },
];

export default function HomeDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coffee-50 via-coffee-100 to-coffee-200 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-coffee-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Menu Coffeshop Premium
            </h1>
            <p className="text-gray-700 mb-6">
              Pilih menu yang sesuai selera Anda dan nikmati kualitas terbaik.
            </p>
            {/* ✅ Link ke Order.jsx */}
            <Link
              to="/orders"
              className="px-6 py-3 bg-gradient-to-r from-coffee-500 to-coffee-700 text-white rounded-lg font-semibold hover:from-coffee-600 hover:to-coffee-800 transition"
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Illustration */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="text-6xl animate-bounce">☕</div>
            <div className="absolute -top-6 left-10 text-2xl animate-pulse">☕️</div>
            <div className="absolute -top-10 right-10 text-2xl animate-pulse">☕️</div>
            <div className="absolute -bottom-6 left-1/3 text-2xl animate-pulse">☕️</div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="harga" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Daftar Harga Menu
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Pilih menu yang sesuai dengan selera Anda
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
