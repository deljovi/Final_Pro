import React from "react";
import Navbar from "../../components/layout/Navbar";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-6">Contact Information</h1>

        <div className="bg-white rounded shadow p-6 grid gap-6">
          {/* Email */}
          <a
            href="mailto:fieken@example.com"
            className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition"
          >
            <Mail className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 font-medium">FrontEnd@example.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/FrontEnd"
            target="_blank"
            className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition"
          >
            <Linkedin className="w-6 h-6 text-blue-700" />
            <span className="text-gray-700 font-medium">linkedin.com/in/FrontEnd</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/FrontEnd"
            target="_blank"
            className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition"
          >
            <Github className="w-6 h-6 text-gray-900" />
            <span className="text-gray-700 font-medium">github.com/FrontEnd</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/fiekenn_"
            target="_blank"
            className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition"
          >
            <Instagram className="w-6 h-6 text-pink-600" />
            <span className="text-gray-700 font-medium">instagram.com/FrontEnd</span>
          </a>
        </div>
      </main>
    </div>
  );
}