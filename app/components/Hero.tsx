const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-slate-950 text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-emerald-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-4xl text-center">

        {/* BADGE */}
        <span className="inline-flex items-center mb-6 px-4 py-1 text-xs sm:text-sm rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur">
          ✦ AI-Powered Automation Platform
        </span>

        {/* HEADING */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Build Smarter Systems with{" "}
          <span className="text-emerald-400">SmartFlowAI</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-sm sm:text-lg md:text-xl mb-10 text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Automate workflows, optimize operations, and scale your business faster
          with intelligent AI-driven solutions designed for modern teams.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href="#features"
            className="w-full sm:w-auto bg-emerald-500 text-slate-900 px-7 py-3 sm:py-4 rounded-full font-semibold
            hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Get Started
          </a>

          <a
            href="#features"
            className="w-full sm:w-auto px-7 py-3 sm:py-4 rounded-full border border-slate-600 text-slate-200
            hover:border-emerald-400 hover:text-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            View Features
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;