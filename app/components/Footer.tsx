const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/10">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid gap-10 md:grid-cols-3 text-center md:text-left">
          <div>
            <h2 className="text-lg font-bold text-white">
              SmartFlow<span className="text-emerald-400">AI</span>
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Building intelligent automation systems for modern teams.
            </p>
          </div>

          {/* LINKS */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-2">Links</h3>

            <a href="#home" className="block hover:text-emerald-400 transition">
              Home
            </a>
            <a href="#features" className="block hover:text-emerald-400 transition">
              Features
            </a>
            <a href="#testimonials" className="block hover:text-emerald-400 transition">
              Testimonials
            </a>
          </div>

          {/* CONTACT */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <p className="text-sm">support@smartflowai.com</p>
            <p className="text-sm">Karachi, Pakistan</p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-white/10"></div>
        <div className="flex flex-col items-center justify-center text-sm text-slate-500">
          <p className="text-slate-400 text-center">
            © 2026 SmartFlowAI. Designed for performance & scalability.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;