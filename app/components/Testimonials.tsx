const testimonials = [
  {
    quote:
      "Nexe-Agent transformed how we automate workflows. Beautiful UI and amazing performance.",
    name: "Sarah Khan",
    role: "Product Manager",
  },
  {
    quote:
      "Professional design, smooth experience and scalable architecture.",
    name: "Ali Raza",
    role: "Frontend Developer",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-75 h-75 bg-emerald-200 blur-[120px] rounded-full" />
      </div>

      {/* HEADING */}
      <div className="relative text-center mb-14 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          Trusted by Professionals
        </h2>

        <p className="text-slate-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">
          Real feedback from developers and product teams using Nexe-Agent.
        </p>
      </div>

      {/* GRID */}
      <div className="relative max-w-5xl mx-auto grid gap-6 sm:gap-8 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-100
            shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* QUOTE MARK */}
            <div className="text-5xl text-emerald-200 absolute top-4 right-6">
              “
            </div>

            {/* QUOTE */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {item.quote}
            </p>

            {/* USER INFO */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-emerald-600">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  {item.role}
                </p>
              </div>

              {/* DOT INDICATOR */}
              <div className="w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* TOP BORDER GLOW */}
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-emerald-400 to-blue-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;