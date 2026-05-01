const features = [
  {
    title: "Lightning Fast",
    description: "Optimized UI built for speed and performance.",
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade security to protect your data.",
  },
  {
    title: "Scalable System",
    description: "Built to grow with your business needs.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-slate-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
        Why Choose Nexe-Agent
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-slate-100"
          >
            <h3 className="text-xl font-semibold mb-4 text-emerald-600">
              {feature.title}
            </h3>
            <p className="text-slate-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;