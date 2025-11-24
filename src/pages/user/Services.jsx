import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

export default function Services() {
  const layanan = [
    {
      title: "Reguler (3 Hari)",
      items: [
        { type: "Lipat", price: "5000/kg" },
        { type: "Setrika", price: "7000/kg" },
      ],
    },
    {
      title: "Express (1 Hari)",
      items: [
        { type: "Lipat", price: "9000/kg" },
        { type: "Setrika", price: "13000/kg" },
      ],
    },
    {
      title: "Kilat (6 Jam)",
      items: [
        { type: "Lipat", price: "13000/kg" },
        { type: "Setrika", price: "18000/kg" },
      ],
    },
    {
      title: "Bed Cover",
      items: [
        { type: "Reguler Kecil-Sedang", price: "30000/pcs" },
        { type: "Reguler Besar", price: "40000/pcs" },
        { type: "Express", price: "55000/pcs" },
      ],
    },
    {
      title: "Sprei",
      items: [
        { type: "Reguler", price: "12000/pcs" },
        { type: "Express", price: "18000/pcs" },
        { type: "Kilat", price: "25000/pcs" },
      ],
    },
    {
      title: "Baby Laundry",
      items: [
        { type: "Sleek Baby & Detol", price: "20000/kg" },
      ],
    },
    {
      title: "Cuci Baby Stroller",
      items: [
        { type: "Full Service", price: "150000/stroller (4-5 Hari)" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Pilih Layanan Laundry
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {layanan.map((lay, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header dengan gradient */}
              <div className="p-5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
                <h2 className="text-xl font-semibold">{lay.title}</h2>
              </div>

              <div className="p-5 space-y-3">
                {lay.items.map((item, i) => (
                  <Link
                    key={i}
                    to={`/orders?service=${lay.title}&type=${item.type}&price=${item.price}`}
                    className="block p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:scale-105 transition-transform duration-200"
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
