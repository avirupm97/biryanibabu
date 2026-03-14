"use client";

import { ScrollText, Soup, Wheat, Drumstick, CookingPot } from "lucide-react";

const features = [
  {
    icon: ScrollText,
    label: "2000-year-old recipe",
  },
  {
    icon: Soup,
    label: "23 Royal Spices",
  },
  {
    icon: Wheat,
    label: "Long Grain Basmati",
  },
  {
    icon: Drumstick,
    label: "Succulent Fillings",
  },
  {
    icon: CookingPot,
    label: "Dum Pukht",
  },
];

export default function PartyFeatures() {
  return (
    <section className="py-16 bg-insp-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-left mb-12 md:mb-16 insp-font-display">
          What Makes Every{" "}
          <span className="text-insp-primary italic">Celebration Special</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-insp-primary/50 bg-insp-regal-charcoal flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-insp-primary transition-all duration-300">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-insp-primary" />
                </div>
                {/* Label */}
                <p className="text-stone-400 text-sm font-medium insp-font-sans">
                  {feature.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
