"use client";

import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const specialties = [
  {
    image:
      "https://images.pexels.com/photos/17696655/pexels-photo-17696655.jpeg",
    badge: "Iconic & Spicy",
    name: "Hyderabadi Dum",
    description:
      "Intense, aromatic, and cooked with long-grain Basmati and tender goat meat.",
    alt: "Spicy Hyderabadi Dum Biryani with fried onions - Ali Dashti on Pexels",
  },
  {
    image:
      "https://images.pexels.com/photos/32986474/pexels-photo-32986474.jpeg",
    badge: "Aromatic & Royal",
    name: "Lucknowi (Awadhi)",
    description:
      "A delicate blend of yakhni-style rice and meat that melts in your mouth.",
    alt: "Aromatic Lucknowi biryani with light colors and whole spices - J KREATOR on Pexels",
  },
  {
    image:
      "https://images.pexels.com/photos/17696654/pexels-photo-17696654.jpeg",
    badge: "Subtle & Unique",
    name: "The Kolkata Classic",
    description:
      "Known for its subtlety and the iconic inclusion of a soft, slow-cooked potato.",
    alt: "Kolkata style biryani featuring meat with assorted dips - Ali Dashti on Pexels",
  },
];

export default function RegionalSpecialties() {
  return (
    <section id="specials" className="py-24 bg-insp-regal-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl text-white font-bold mb-2 insp-font-display">
              Regional Specialties
            </h2>
            <p className="text-stone-400 italic insp-font-display">
              Exploring the diverse biryani landscapes of the Indian
              subcontinent
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-white/10 bg-transparent text-white hover:bg-insp-primary hover:text-insp-bg-dark hover:border-insp-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-white/10 bg-transparent text-white hover:bg-insp-primary hover:text-insp-bg-dark hover:border-insp-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {specialties.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-2xl bg-insp-bg-dark"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-insp-bg-dark via-transparent to-transparent" />
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="px-3 py-1 bg-insp-primary text-insp-bg-dark text-[10px] font-bold uppercase tracking-widest rounded mb-3 inline-block insp-font-sans">
                  {item.badge}
                </span>
                <h4 className="text-2xl text-white font-bold mb-2 insp-font-display">
                  {item.name}
                </h4>
                <p className="text-stone-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 insp-font-sans">
                  {item.description}
                </p>
                <Button
                  variant="ghost"
                  className="text-insp-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 p-0 h-auto hover:bg-transparent hover:text-insp-primary/80 insp-font-sans"
                >
                  Order Now <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
