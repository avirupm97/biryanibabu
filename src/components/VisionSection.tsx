'use client';

import Image from 'next/image';

export default function VisionSection() {
  return (
    <section className="py-20 md:py-24 bg-dark-glow">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="heading-xl mb-6">
            Delivering a royal feast to your doorsteps
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="body-lg">
              BBK – India&apos;s most loved Biryani & Kebab delivery chain since <span className="text-royal-gold font-semibold">2015.</span>
            </p>
            
            <p className="body-md">
              Being the Pioneers of delivering Fresh Dum-Cooked Handi Biryanis across the country, Biryani By Kilo takes customer experience up a notch with unique and authentic shaahi andaaz of serving handis of melting flavors. The first ones to introduce &lsquo;handi biryani&rsquo; concept and deliver freshly prepared biryani for individual orders.
            </p>
            
            <p className="body-md">
              With the presence of 70+ royal dine-in outlets pan India, we have spread arms across 29+ cities - Delhi NCR, Mumbai, Pune, Lucknow, Kolkata, Punjab, Jaipur, Bhubaneswar, Patna, Ranchi, Guwahati, Jamshedpur, Goa & Bangalore, reviving the royal traditions in the hearts of India. Also, we deliver to your doorstep online in 70-90 minutes, after cooking it with time, effort and elegance.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/34159106/pexels-photo-34159106.jpeg"
              alt="Traditional Kerala chicken biryani in clay pot by Shalini Shakthi on Pexels"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-royal-gold/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
