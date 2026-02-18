'use client';

import { Flame, ShieldCheck, CookingPot, Leaf } from 'lucide-react';
import { Card } from '@/components/ui/card';

const values = [
  {
    icon: Flame,
    title: "We don't re-heat",
    description: "Only BBK cooks after getting the order to bring you the freshest, warmest, and most aromatic cuisines."
  },
  {
    icon: ShieldCheck,
    title: "We value quality over quantity",
    description: "We take pride in delivering the most authentic flavors & recipes of Biryani, Kebabs, Kormas & Phirni, derived from the lost recipes of ancient India."
  },
  {
    icon: CookingPot,
    title: "We are bridging the gap",
    description: "BBK's earthenware Handis are handcrafted by potters in different villages and regions of India. We cut out the middle man and provide sustainable employment to the craftsmen."
  },
  {
    icon: Leaf,
    title: "Environment & society at our core",
    description: "We are very particular about the environment and giving back to society through a generous hospitality and strict food safety standards."
  }
];

export default function ValuesSection() {
  return (
    <section className="py-20 md:py-24 bg-warm-brown/20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="heading-xl mb-6">Our Values</h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="bg-warm-brown/40 backdrop-blur-sm border-royal-gold/15 hover:border-royal-gold/40 transition-all duration-500 p-8 shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-royal-gold/10 flex items-center justify-center">
                    <Icon 
                      className="w-8 h-8 text-royal-gold" 
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="heading-md text-2xl mb-4 text-royal-gold">
                  {value.title}
                </h3>
                <p className="text-light-tan/90 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
