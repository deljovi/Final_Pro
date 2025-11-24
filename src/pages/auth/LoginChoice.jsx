import { Link } from "react-router-dom";

export default function LoginChoice() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 overflow-hidden px-4">
      
      {/* Background Animated Text at Top Left */}
      <h1 className="absolute top-10 left-10 text-[6rem] font-extrabold select-none pointer-events-none text-gray-300/50 uppercase animate-float text-shadow-lg">
        Final FrontEnd
      </h1>

      {/* Login Container */}
      <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 z-10 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center animate-slide-down">
          Pilih Login
        </h2>

        <Link
          to="/dashboard"
          className="w-64 text-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 transform"
        >
          User
        </Link>

        <Link
          to="/admin/dashboard"
          className="w-64 text-center bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 transform"
        >
          Admin
        </Link>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slideDown 0.8s ease-out forwards; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        .text-shadow-lg {
          text-shadow: 2px 2px 15px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
}
