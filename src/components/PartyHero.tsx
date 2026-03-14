"use client";

import Image from "next/image";

export default function PartyHero() {
  return (
    <section
      className="relative py-8 md:py-12 lg:py-16 overflow-hidden bg-insp-regal-charcoal"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(242, 185, 13, 0.05) 0%, transparent 70%)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Hero Image */}
          <div className="mb-8 lg:mb-12 rounded-2xl overflow-hidden shadow-2xl w-[300px] relative group">
            <div className="absolute -inset-2 border border-insp-primary/30 rounded-2xl group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
            <Image
              src="https://images.pexels.com/photos/32825907/pexels-photo-32825907.jpeg"
              alt="Aromatic biryani feast spread with kebabs - Karan Mridha on Pexels"
              width={300}
              height={200}
              className="object-cover relative z-10"
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <span className="text-insp-primary uppercase tracking-[0.4em] font-bold text-sm block mb-4 insp-font-sans">
              Royal Catering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6 insp-font-display">
              Celebrate with{" "}
              <span className="text-insp-primary italic">Royal Feasts</span>
            </h1>
            <p className="text-stone-400 text-lg leading-relaxed max-w-2xl mb-8 insp-font-sans">
              Set up a royal celebration for every special occasion with our
              exquisite biryanis, succulent kebabs, indulgent desserts and more!
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 text-insp-primary opacity-60 justify-center lg:justify-start">
              <div className="h-px w-12 bg-insp-primary" />
              <span className="text-2xl">✦</span>
              <div className="h-px w-12 bg-insp-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
