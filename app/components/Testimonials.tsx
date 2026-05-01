const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
        Trusted by Professionals
      </h2>

      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
          <p className="text-slate-600 mb-6">
            “Nexe-Agent transformed how we automate workflows. Beautiful UI
            and amazing performance.”
          </p>
          <h4 className="font-semibold text-emerald-600">
            Sarah Khan · Product Manager
          </h4>
        </div>

        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
          <p className="text-slate-600 mb-6">
            “Professional design, smooth experience and scalable architecture.”
          </p>
          <h4 className="font-semibold text-emerald-600">
            Ali Raza · Frontend Developer
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;