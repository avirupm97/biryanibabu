'use client';

import Image from 'next/image';

export default function OurStoryHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/35287418/pexels-photo-35287418.jpeg"
          alt="Our Vision - Rich Hyderabadi biryani by Milton Das on Pexels"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/60 via-dark-brown/40 to-dark-brown" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="heading-2xl text-6xl md:text-7xl lg:text-8xl mb-4">
            Our Vision
          </h1>
          <div className="w-32 h-1 bg-royal-gold mx-auto" />
        </div>
      </div>
    </section>
  );
}
