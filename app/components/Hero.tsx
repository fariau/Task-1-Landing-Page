const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center justify-center px-6 relative overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-100 h-100 bg-emerald-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-4xl text-center">

        <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          AI-Powered Automation Platform
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Build Smarter Systems with{" "}
          <span className="text-emerald-400">SmartFlowAI</span>
        </h1>

        <p className="text-lg md:text-xl mb-10 text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Automate workflows, optimize operations, and scale your business faster
          with intelligent AI-driven solutions designed for modern teams.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">

          <a
            href="#features"
            className="bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-semibold
            hover:bg-emerald-400 hover:scale-105 transition shadow-lg"
          >
            Get Started
          </a>

          <a
            href="#features"
            className="px-8 py-4 rounded-full border border-slate-600 text-slate-200
            hover:border-emerald-400 hover:text-emerald-400 hover:scale-105 transition"
          >
            View Features
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;