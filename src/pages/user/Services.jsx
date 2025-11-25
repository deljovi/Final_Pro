import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

export default function Services() {
  const layanan = [
    {
      title: "Coffee",
      items: [
        { type: "Espresso (Single)", price: "20000/cup" },
        { type: "Americano", price: "25000/cup" },
        { type: "Cappuccino", price: "30000/cup" },
      ],
    },
    {
      title: "Cold Brew & Iced",
      items: [
        { type: "Iced Latte", price: "32000/cup" },
        { type: "Cold Brew", price: "35000/cup" },
      ],
    },
    {
      title: "Tea & Others",
      items: [
        { type: "Green Tea", price: "22000/cup" },
        { type: "Chai Latte", price: "28000/cup" },
      ],
    },
    {
      title: "Pastries",
      items: [
        { type: "Croissant", price: "18000/pcs" },
        { type: "Blueberry Muffin", price: "20000/pcs" },
      ],
    },
    {
      title: "Sandwiches",
      items: [
        { type: "Chicken Sandwich", price: "45000/pcs" },
        { type: "Veggie Sandwich", price: "42000/pcs" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Pilih Menu Coffeshop
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {layanan.map((lay, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header dengan gradient */}
              <div className="p-5 bg-gradient-to-r from-coffee-500 via-coffee-600 to-coffee-700 text-white">
                <h2 className="text-xl font-semibold">{lay.title}</h2>
              </div>

              <div className="p-5 space-y-3">
                {lay.items.map((item, i) => (
                  <Link
                    key={i}
                    to={`/orders?service=${lay.title}&type=${item.type}&price=${item.price}`}
                    className="block p-3 border border-gray-200 rounded-lg hover:bg-coffee-50 hover:scale-105 transition-transform duration-200"
                  >
                    <p className="font-medium text-gray-800">{item.type}</p>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
