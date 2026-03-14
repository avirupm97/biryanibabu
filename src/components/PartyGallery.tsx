"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "https://pixabay.com/get/gfbe6f442fed54e2df97a0974db64c241113544d9cd565dfd8971e2299a3f046ead47d677d17528c1e04da1786c64b0af.png",
    alt: "Chicken biryani in copper pot - deeznutz1 on Pixabay",
  },
  {
    src: "https://pixabay.com/get/gf615e819ece70ce47c32e9e9adaf298ee86b6d2b9ac98ae1db0bb125e2a4df8f041c4d53576c94eabae3e5d38ac15f9d.png",
    alt: "Mutton biryani with garnish - deeznutz1 on Pixabay",
  },
  {
    src: "https://images.pexels.com/photos/29699526/pexels-photo-29699526.jpeg",
    alt: "Tandoori chicken kebabs with spices - Kunal Lakhotia on Pexels",
  },
  {
    src: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg",
    alt: "Vegetable biryani with raita - dhiraj jain on Pexels",
  },
  {
    src: "https://images.pexels.com/photos/9646858/pexels-photo-9646858.jpeg",
    alt: "Chicken skewers on grill - Mouktik Joshi on Pexels",
  },
  {
    src: "https://images.pexels.com/photos/17649396/pexels-photo-17649396.jpeg",
    alt: "Prawn biryani with seafood garnish - Ali Dashti on Pexels",
  },
];

export default function PartyGallery() {
  return (
    <section
      className="py-16 md:py-20 bg-insp-regal-charcoal relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(242, 185, 13, 0.04) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-6 insp-font-display">
              Every Celebration Deserves{" "}
              <span className="text-insp-primary italic">Royal Treatment</span>
            </h2>

            <p className="text-stone-400 text-lg leading-relaxed mb-8 insp-font-sans">
              Each dish is crafted to perfection with royal biryanis in
              different serving portions, paired with succulent kebabs, curries,
              and desserts.
            </p>
            <Button className="px-8 py-3 h-auto bg-insp-primary text-insp-bg-dark font-bold rounded-lg uppercase tracking-widest hover:scale-105 hover:bg-insp-primary transition-transform insp-font-sans">
              Contact Us
            </Button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg group border border-white/5"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-insp-bg-dark/0 group-hover:bg-insp-bg-dark/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
