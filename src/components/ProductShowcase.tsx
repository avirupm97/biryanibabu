'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    name: 'Raaz-e-Kalimirch Biryani',
    description: 'In royal courts, pepper was never ordinary. Its presence signalled refinement, its restraint marked authority. This biryani belonged to those who understood depth over display, a composition of mystery, grandeur, and quiet command.',
    image: 'https://images.pexels.com/photos/9609859/pexels-photo-9609859.jpeg'
  },
  {
    name: 'Dum Gosht Biryani',
    description: 'Where patience was power, dum and meat defined true indulgence. This biryani stood for patience and dignity, served only when time itself had agreed. Rich, settled, and unhurried, it was favoured by those who believed that readiness could not be rushed.',
    image: 'https://images.pexels.com/photos/5639251/pexels-photo-5639251.jpeg'
  },
  {
    name: 'Lazeez Bhuna Murgh Biryani',
    description: 'At gatherings where warmth and generosity set the tone, roasted chicken took centre place. This biryani carried delicious depth and an embracing richness, shaped by tradition and remembered for its comforting authority.',
    image: 'https://images.pexels.com/photos/9609862/pexels-photo-9609862.jpeg'
  },
  {
    name: 'Zaikedaar Paneer Biryani',
    description: 'Within palace walls, paneer found favour among refined tastes. Gentle yet assured, this biryani reflected flavour balanced with elegance. It was chosen for moments of quiet indulgence - when elegance mattered more than excess.',
    image: 'https://images.pexels.com/photos/9609865/pexels-photo-9609865.jpeg'
  },
  {
    name: 'Angara Kebabs',
    description: 'When feasts called for presence and power, fire-roasted kebabs marked the offering. These kebabs carried heat tempered by control, presented with unmistakable royal style. Bold in spirit, measured in execution, they held their place with dignity.',
    image: 'https://images.pexels.com/photos/31648205/pexels-photo-31648205.jpeg'
  },
  {
    name: 'Chicken Tikka Kathi Roll',
    description: 'As royal flavours found their way beyond the court, tikka travelled with them. Wrapped for ease yet rooted in preference and grace, this indulgence carried familiarity without losing its bearing - tradition, released but not diluted.',
    image: 'https://images.pexels.com/photos/14639388/pexels-photo-14639388.jpeg'
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-dark-glow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-royal-gold/30 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="accent-text text-sm tracking-[0.3em] uppercase mb-4 block">Our Signature Dishes</span>
          <h2 className="heading-xl mb-6">Shahon ki Pasand</h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8" />
          <p className="body-lg max-w-2xl mx-auto italic">Unparalleled taste, served in a timeless style that honors centuries of culinary tradition.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <Card className="bg-dark-brown/50 backdrop-blur-sm border-royal-gold/15 hover:border-royal-gold/40 transition-all duration-500 overflow-hidden h-full flex flex-col group/card shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark-brown/20 group-hover/card:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-royal-gold" />
                    <h3 className="heading-md text-2xl group-hover/card:text-royal-gold transition-colors">{product.name}</h3>
                  </div>
                  <p className="text-light-tan/80 text-sm leading-relaxed mb-8 flex-1 font-light tracking-wide">
                    {product.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold hover:text-dark-brown w-full transition-all duration-300 py-6 text-sm tracking-widest font-medium uppercase"
                  >
                    Explore Legacy
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="ornamental-divider">
          ◆
        </div>
      </div>
    </section>
  );
}
