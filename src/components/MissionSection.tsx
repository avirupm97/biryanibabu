'use client';

import Image from 'next/image';

export default function MissionSection() {
  return (
    <section className="py-20 md:py-24 bg-warm-brown/20">
      <div className="container mx-auto px-4">
        {/* Content Grid - Image First on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image - Order 1 on mobile, 1 on desktop */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl order-1">
            <Image
              src="https://images.pexels.com/photos/14731639/pexels-photo-14731639.jpeg"
              alt="Aromatic chicken biryani by Shameel mukkath on Pexels"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-royal-gold/20" />
          </div>

          {/* Text Content - Order 2 on mobile, 2 on desktop */}
          <div className="space-y-6 order-2">
            <div>
              <h2 className="heading-lg mb-4">Our Mission</h2>
              <div className="w-20 h-1 bg-royal-gold mb-6" />
            </div>
            
            <p className="body-md">
              Reviving the essence of dum cooking in organic handis with epic flavors of India- Hyderabadi, Lucknowi, Kolkata Biryani&apos;s, Melt-in-mouth Kababs, Lazeez Kormas, Dal Makhani, Phirni & much more; we embellish a royal feast experience to our guests.
            </p>
            
            <p className="body-md">
              BBK delivers both authentic taste of Hyderabadi (Kutchi) and Lucknowi (Pukki) Biryani prepared in individual earthen Handis with the freshest ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
