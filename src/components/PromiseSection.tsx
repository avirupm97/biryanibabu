'use client';

import Image from 'next/image';

export default function PromiseSection() {
  return (
    <section className="py-20 md:py-24 bg-dark-glow">
      <div className="container mx-auto px-4">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="heading-lg mb-4">Our Promise</h2>
              <div className="w-20 h-1 bg-royal-gold mb-6" />
            </div>
            
            <p className="body-md">
              We strictly use premium ingredients like basmati rice specially aged around 2 years, pure spices handpicked from Kerala, and most stringently selected meats & vegetables for the Biryanis & Kebabs.
            </p>
            
            <p className="body-md">
              BBK Biryanis Specially cooked on dum, inside the same dough-sealed earthen pot you get delivered, to retain its natural quintessence.
            </p>
            
            <p className="body-md">
              BBK uses world-class technologies, processes & systems to ensure the best quality, standardization & hygiene.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/29850004/pexels-photo-29850004.jpeg"
              alt="Authentic Indian dishes by Snappr on Pexels"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-royal-gold/20" />
          </div>
        </div>

        {/* Ornamental Divider */}
        <div className="ornamental-divider">
          ◆
        </div>
      </div>
    </section>
  );
}
