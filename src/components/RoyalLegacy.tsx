'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const features = [
  {
    title: 'Aged, Long-grain Basmati Rice',
    description: 'Aged basmati, chosen for its aroma and elegance. As it rests on dum, each grain lengthens with quiet dignity, remains distinct, and holds its charm - light, fragrant, and perfectly poised.',
    image: 'https://images.pexels.com/photos/18328392/pexels-photo-18328392.jpeg'
  },
  {
    title: '23 Shahi Masale',
    description: '23 royal spices, measured with care and restraint. On dum, their warmth opens slowly, weaving layers of flavour that linger gently, never demanding attention, never overpowering.',
    image: 'https://images.pexels.com/photos/32281706/pexels-photo-32281706.jpeg'
  },
  {
    title: '6-hour Marination',
    description: 'Here, marination is an act of patience. Over 6 unbroken hours, flavours are allowed to settle deep within, softening, deepening, and finding harmony before the flame is ever lit.',
    image: 'https://images.pexels.com/photos/13376576/pexels-photo-13376576.jpeg'
  },
  {
    title: 'Dum Pukht for over 3 Hours',
    description: 'Sealed on dum, with steady heat above and below, the biryani is left undisturbed. Within the closed handi, aromas rise, flavours converse, and textures come together with tranquility - just as a royal biryani should.',
    image: 'https://images.pexels.com/photos/34159106/pexels-photo-34159106.jpeg'
  }
];

export default function RoyalLegacy() {
  return (
    <section className="py-24 bg-dark-glow relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="accent-text text-sm tracking-[0.3em] uppercase mb-4 block">The Foundation</span>
          <h2 className="heading-xl mb-6">The Royal Legacy</h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8" />
          <p className="body-lg max-w-3xl mx-auto italic">
            From the ancient lands emerges a precious tradition, prepared for grand gatherings. 
            Crafted with a 2000-year old royal recipe, where every step follows tradition, 
            and every detail is treated with patience and elegance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="h-full"
            >
              <Card className="bg-warm-brown/40 backdrop-blur-sm border-royal-gold/15 hover:border-royal-gold/40 transition-all duration-500 overflow-hidden group h-full flex flex-col shadow-xl">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-dark-brown/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="heading-md text-xl mb-4 group-hover:text-royal-gold transition-colors">{feature.title}</h4>
                  <p className="text-light-tan/80 text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="ornamental-divider mt-16">
          ◆
        </div>
      </div>
    </section>
  );
}
