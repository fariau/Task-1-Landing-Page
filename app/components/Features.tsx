const features = [
  {
    title: "⚡ Lightning Fast",
    description: "Optimized UI built for speed and performance.",
  },
  {
    title: "🔒 Secure by Design",
    description: "Enterprise-grade security to protect your data.",
  },
  {
    title: "📈 Scalable System",
    description: "Built to grow with your business needs.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-slate-50 relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-75 h-75 bg-emerald-300 blur-[120px] rounded-full" />
      </div>

      {/* HEADING */}
      <div className="relative text-center mb-14 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          Why Choose Nexe-Agent
        </h2>

        <p className="text-slate-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">
          Built for performance, security, and scalability — all in one system.
        </p>
      </div>

      {/* GRID */}
      <div className="relative max-w-6xl mx-auto grid gap-6 sm:gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-100
            shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* TOP GLOW BAR */}
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-emerald-400 to-blue-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />

            {/* TITLE */}
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900">
              {feature.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {feature.description}
            </p>

            {/* HOVER EFFECT DOT */}
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;