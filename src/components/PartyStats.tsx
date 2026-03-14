"use client";

const stats = [
  {
    number: "4.5 Stars",
    label: "Rating",
    description: "Most loved app rating",
  },
  {
    number: "1 Million",
    label: "Served",
    description: "Biryanis served monthly",
  },
  {
    number: "76 Cities",
    label: "Presence",
    description: "Nationwide presence",
  },
];

export default function PartyStats() {
  return (
    <section className="py-16 md:py-20 bg-insp-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-insp-primary insp-font-display text-xl italic mb-2">
            Our Reach
          </h2>
          <h3 className="text-4xl md:text-5xl text-white font-bold tracking-tight insp-font-display">
            Loved by{" "}
            <span className="gold-gradient-text italic">Millions</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-10 bg-insp-regal-charcoal border border-white/5 rounded-2xl group hover:border-insp-primary/40 transition-all"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-insp-primary mb-2 insp-font-display">
                  {stat.number}
                </div>
                <div className="text-white font-semibold text-lg mb-2 insp-font-display">
                  {stat.label}
                </div>
                <div className="text-stone-400 text-sm insp-font-sans">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
