import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

// =======================
// DATA LAYANAN
// =======================
const serviceData = {
  "Reguler (3 Hari)": { Lipat: "5000/kg", Setrika: "7000/kg" },
  "Express (1 Hari)": { Lipat: "9000/kg", Setrika: "13000/kg" },
  "Kilat (6 Jam)": { Lipat: "13000/kg", Setrika: "18000/kg" },
  "Bed Cover": { "Reguler Kecil-Sedang": "30000/pcs", "Reguler Besar": "40000/pcs", Express: "55000/pcs" },
  Sprei: { Reguler: "12000/pcs", Express: "18000/pcs", Kilat: "25000/pcs" },
  "Baby Laundry": { "Sleek Baby & Detol": "20000/kg" },
  "Cuci Baby Stroller": { Standard: "150000/stroller" },
};

export default function Order() {
  const [params] = useSearchParams();

  const paramService = params.get("service") || "";
  const paramType = params.get("type") || "";
  const paramPrice = params.get("price") || "";

  const [service, setService] = useState(paramService);
  const [type, setType] = useState(paramType);
  const [price, setPrice] = useState(paramPrice);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(0);

  const extractNumber = (value) => (value ? Number(value.replace(/[^0-9]/g, "")) : 0);
  const numericPrice = extractNumber(price);

  const lowerService = service.toLowerCase();
  const lowerType = type.toLowerCase();
  const isPCS = lowerService.includes("sprei") || lowerService.includes("bed cover") || lowerType.includes("sprei") || lowerType.includes("bed cover");
  const isStroller = lowerService.includes("stroller") || lowerType.includes("stroller");
  const unit = isPCS ? "pcs" : isStroller ? "stroller" : "kg";

  useEffect(() => {
    setTotal(numericPrice * qty);
  }, [qty, numericPrice]);

  const handleServiceChange = (value) => {
    setService(value);
    setType("");
    setPrice("");
  };

  const handleTypeChange = (value) => {
    setType(value);
    setPrice(serviceData[service][value]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      phone,
      notes,
      quantity: `${qty} ${unit}`,
      service,
      type,
      price,
      total,
      status: "Pending",
    };

    try {
      await fetch("http://127.0.0.1:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      await Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Pesanan berhasil dikirim.",
        confirmButtonColor: "#3085d6",
      });

      setService("");
      setType("");
      setPrice("");
      setQty(1);
      setTotal(0);
      setName("");
      setPhone("");
      setNotes("");
    } catch (err) {
      console.error("Gagal submit pesanan:", err);

      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat mengirim pesanan.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 pb-10">
      <Navbar />

      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Form Pemesanan Laundry
        </h1>

        <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6">
          {/* Pilih Layanan */}
          <div className="space-y-4">
            <label className="block">
              <span className="font-semibold text-gray-700">Layanan</span>
              <select
                value={service}
                onChange={(e) => handleServiceChange(e.target.value)}
                className="mt-2 w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition"
                required
              >
                <option value="">-- pilih layanan --</option>
                {Object.keys(serviceData).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>

            {service && (
              <label className="block">
                <span className="font-semibold text-gray-700">Tipe</span>
                <select
                  value={type}
                  onChange={(e) => handleTypeChange(e.target.value)}
                  className="mt-2 w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition"
                  required
                >
                  <option value="">-- pilih tipe --</option>
                  {Object.keys(serviceData[service]).map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>
            )}

            {price && (
              <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="font-semibold text-blue-700 text-lg">Harga: {price}</p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <label className="block">
              <span className="font-semibold text-gray-700">Nama</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 transition"
              />
            </label>

            <label className="block">
              <span className="font-semibold text-gray-700">Telepon</span>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 transition"
              />
            </label>

            <label className="block">
              <span className="font-semibold text-gray-700">Catatan</span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-2 w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 transition"
              ></textarea>
            </label>

            {price && (
              <label className="block">
                <span className="font-semibold text-gray-700">Jumlah ({unit})</span>
                <input
                  type="number"
                  min="1"
                  required
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="mt-2 w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 transition"
                />
              </label>
            )}

            {price && (
              <div className="p-4 border rounded-lg bg-green-50 border-l-4 border-green-500">
                <p className="text-lg font-semibold text-green-700">
                  Total Harga: <span className="font-bold">Rp {total.toLocaleString()}</span>
                </p>
              </div>
            )}

            <button
              type="submit"
              className={`p-3 rounded-xl text-white font-semibold text-lg transition transform hover:scale-105 ${
                service && type && price ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!service || !type || !price}
            >
              Kirim Pesanan
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
