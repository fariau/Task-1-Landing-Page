"use client";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-200 bg-linear-to-r from-white via-emerald-50 to-white backdrop-blur-md">
      
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <h1 className="text-lg font-bold tracking-wide text-slate-900">
          SmartFlow<span className="text-emerald-600">AI</span>
        </h1>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-700">
          <a href="#home" className="hover:text-emerald-600 transition">
            Home
          </a>
          <a href="#features" className="hover:text-emerald-600 transition">
            Features
          </a>
          <a href="#testimonials" className="hover:text-emerald-600 transition">
            Reviews
          </a>

          <a
            href="#home"
            className="ml-4 px-5 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-md"
          >
            Get Started
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-800 text-2xl hover:text-emerald-600 transition"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 py-4 bg-linear-to-b from-white to-emerald-50 border-t border-slate-200 space-y-3 text-slate-700 text-sm">
          <a href="#home" className="block hover:text-emerald-600 transition">
            Home
          </a>
          <a href="#features" className="block hover:text-emerald-600 transition">
            Features
          </a>
          <a href="#testimonials" className="block hover:text-emerald-600 transition">
            Reviews
          </a>

          <a
            href="#home"
            className="inline-block mt-2 px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;