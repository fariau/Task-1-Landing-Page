"use client";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-lg sm:text-xl font-bold tracking-wide text-white">
          SmartFlow<span className="text-emerald-400">AI</span>
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">

          <a href="#home" className="hover:text-emerald-400 transition">
            Home
          </a>

          <a href="#features" className="hover:text-emerald-400 transition">
            Features
          </a>

          <a href="#testimonials" className="hover:text-emerald-400 transition">
            Reviews
          </a>

          <a
            href="#home"
            className="ml-2 px-5 py-2 rounded-full bg-emerald-500 text-slate-900 font-semibold
            hover:bg-emerald-400 hover:scale-105 active:scale-95 transition"
          >
            Get Started
          </a>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 text-2xl hover:text-emerald-400 transition"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-white/10 bg-slate-900/95 backdrop-blur-xl ${
          open ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <div className="px-4 space-y-3 text-slate-300 text-sm">

          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="block hover:text-emerald-400 transition"
          >
            Home
          </a>

          <a
            href="#features"
            onClick={() => setOpen(false)}
            className="block hover:text-emerald-400 transition"
          >
            Features
          </a>

          <a
            href="#testimonials"
            onClick={() => setOpen(false)}
            className="block hover:text-emerald-400 transition"
          >
            Reviews
          </a>

          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="inline-block mt-2 px-4 py-2 bg-emerald-500 text-slate-900 rounded-full font-semibold
            hover:bg-emerald-400 active:scale-95 transition"
          >
            Get Started
          </a>

        </div>
      </div>
    </header>
  );
};

export default Navbar;