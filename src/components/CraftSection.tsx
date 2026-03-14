import { Flame, Lock, Utensils } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Flame className="text-insp-primary w-12 h-12 mb-6" />,
    title: "6-Hour Marination",
    description:
      "Premium cuts of meat are tenderized with green papaya and soaked in a blend of 32 spices, Kashmiri saffron, and cold-pressed oils.",
    highlighted: false,
  },
  {
    number: "02",
    icon: <Lock className="text-insp-bg-dark w-12 h-12 mb-6" />,
    title: "The Dum Pukht",
    description:
      "The handi is sealed with dough and slow-cooked over low flame for 3 hours, allowing the meat to cook in its own juices and steam.",
    highlighted: true,
  },
  {
    number: "03",
    icon: <Utensils className="text-insp-primary w-12 h-12 mb-6" />,
    title: "Royal Serving",
    description:
      "Served in regal brassware alongside our signature burhani raita and slow-roasted mirchi ka salan.",
    highlighted: false,
  },
];

export default function CraftSection() {
  return (
    <section id="craft" className="py-24 bg-insp-bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-insp-primary insp-font-display text-xl italic mb-2">
            The Ritual
          </h2>
          <h3 className="text-4xl md:text-6xl text-white font-bold tracking-tight insp-font-display">
            9 Hours of{" "}
            <span className="gold-gradient-text italic">Patience</span>
          </h3>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) =>
            step.highlighted ? (
              <div
                key={step.number}
                className="relative p-10 bg-insp-primary rounded-2xl transition-all transform scale-105 shadow-2xl shadow-insp-primary/20"
              >
                <div className="absolute top-6 right-6 text-6xl insp-font-display text-black/10 italic select-none">
                  {step.number}
                </div>
                {step.icon}
                <h4 className="text-2xl text-insp-bg-dark font-bold mb-4 insp-font-display">
                  {step.title}
                </h4>
                <p className="text-insp-bg-dark/80 leading-relaxed font-medium insp-font-sans">
                  {step.description}
                </p>
              </div>
            ) : (
              <div
                key={step.number}
                className="relative p-10 bg-insp-regal-charcoal border border-white/5 rounded-2xl group hover:border-insp-primary/40 transition-all"
              >
                <div className="absolute top-6 right-6 text-6xl insp-font-display text-white/5 italic select-none">
                  {step.number}
                </div>
                {step.icon}
                <h4 className="text-2xl text-white font-bold mb-4 insp-font-display">
                  {step.title}
                </h4>
                <p className="text-stone-400 leading-relaxed insp-font-sans">
                  {step.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
