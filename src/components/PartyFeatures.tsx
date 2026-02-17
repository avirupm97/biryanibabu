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
    <section className="py-16 md:py-20 bg-dark-glow">
      <div className="container mx-auto px-4">
        <h2 className="heading-xl text-center mb-12 md:mb-16">
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
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-royal-gold bg-dark-brown/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-royal-gold" />
                </div>
                {/* Label */}
                <p className="text-light-tan text-sm md:text-base font-medium">
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
