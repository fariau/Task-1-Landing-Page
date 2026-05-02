"use client";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-lg font-bold tracking-wide text-white">
          SmartFlow<span className="text-emerald-400">AI</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">
          <a
            href="#home"
            className="hover:text-emerald-400 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#features"
            className="hover:text-emerald-400 transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="hover:text-emerald-400 transition-colors duration-200"
          >
            Reviews
          </a>

          <a
            href="#home"
            className="ml-4 px-5 py-2 rounded-full bg-emerald-500 text-slate-900 hover:bg-emerald-400 transition-colors duration-200 font-semibold"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 text-2xl hover:text-emerald-400 transition-colors duration-200"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 py-4 bg-slate-900 border-t border-slate-800 space-y-3 text-slate-300 text-sm">
          <a
            href="#home"
            className="block hover:text-emerald-400 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#features"
            className="block hover:text-emerald-400 transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="block hover:text-emerald-400 transition-colors duration-200"
          >
            Reviews
          </a>

          <a
            href="#home"
            className="inline-block mt-2 px-4 py-2 bg-emerald-500 text-slate-900 rounded-full hover:bg-emerald-400 transition-colors duration-200 font-semibold"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;