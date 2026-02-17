"use client";

export default function PartyHero() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-dark-glow opacity-50" />
      <div className="absolute top-10 right-10 w-32 h-32 border border-royal-gold/20 rounded-full" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-royal-gold/20 rounded-full" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Hero Image */}
          <div className="mb-8 lg:mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/32825907/pexels-photo-32825907.jpeg"
              alt="Aromatic biryani feast spread with kebabs - Karan Mridha on Pexels"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="heading-2xl mb-6 animate-fade-in">
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
