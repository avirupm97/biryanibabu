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
    <section className="pt-5 pb-0 h-[400px] bg-dark-glow">
      <div className="container mx-auto px-4">
        <h2 className="text-[32px] font-bold leading-tight text-royal-gold text-left mb-12 md:mb-16" style={{fontFamily: 'var(--font-heading)'}}>
          What Makes Every Celebration Special
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
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-royal-gold bg-dark-brown/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-royal-gold" />
                </div>
                {/* Label */}
                <p className="text-light-tan text-sm font-medium">
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
