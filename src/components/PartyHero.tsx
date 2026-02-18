"use client";

import Image from "next/image";

export default function PartyHero() {
  return (
    <section className="relative py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-dark-glow opacity-50" style={{ height: '550px' }} />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Hero Image */}
          <div className="mb-8 lg:mb-12 rounded-2xl overflow-hidden shadow-2xl w-[300px]">
            <Image
              src="https://images.pexels.com/photos/32825907/pexels-photo-32825907.jpeg"
              alt="Aromatic biryani feast spread with kebabs - Karan Mridha on Pexels"
              width={300}
              height={200}
              className="object-cover"
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-[32px] font-bold leading-tight text-royal-gold mb-6 animate-fade-in" style={{fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em'}}>
              Celebrate with Royal Feasts
            </h1>
            <p className="body-lg max-w-2xl mb-8 animate-fade-in-delay-1">
              Set up a royal celebration for every special occasion with our exquisite biryanis, succulent kebabs, indulgent desserts and more!
            </p>
            
            {/* Decorative divider */}
            <div className="flex items-center gap-4 text-royal-gold opacity-50 justify-center lg:justify-start">
              <div className="h-px w-12 bg-royal-gold" />
              <span className="text-2xl">✦</span>
              <div className="h-px w-12 bg-royal-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
