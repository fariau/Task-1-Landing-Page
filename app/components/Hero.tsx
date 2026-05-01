const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6
      bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-4xl text-center">
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-400">
          Next-Gen AI Platform
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Smarter Automation <br />
          <span className="text-emerald-400">Powered by Nexe-Agent</span>
        </h1>

        <p className="text-lg md:text-xl mb-10 text-slate-300">
          Build intelligent workflows, automate operations and scale faster
          with our modern AI solutions.
        </p>

        <a
          href="#features"
          className="inline-block bg-emerald-500 text-slate-900 px-10 py-4 rounded-full font-semibold
          hover:bg-emerald-400 transition shadow-lg"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
};

export default Hero;