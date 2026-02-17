'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';

const testimonials = [
  {
    name: 'Featured Celebrity 1',
    image: 'https://images.pexels.com/photos/35438349/pexels-photo-35438349.jpeg'
  },
  {
    name: 'Featured Celebrity 2',
    image: 'https://images.pexels.com/photos/8477415/pexels-photo-8477415.jpeg'
  },
  {
    name: 'Featured Celebrity 3',
    image: 'https://images.pexels.com/photos/35438350/pexels-photo-35438350.jpeg'
  },
  {
    name: 'Featured Celebrity 4',
    image: 'https://images.pexels.com/photos/14693846/pexels-photo-14693846.jpeg'
  },
  {
    name: 'Featured Celebrity 5',
    image: 'https://images.pexels.com/photos/20244035/pexels-photo-20244035.jpeg'
  },
  {
    name: 'Featured Celebrity 6',
    image: 'https://images.pexels.com/photos/8092281/pexels-photo-8092281.jpeg'
  }
];

export default function CelebrityTestimonials() {
  return (
    <section className="py-24 bg-dark-glow relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="accent-text text-sm tracking-[0.3em] uppercase mb-4 block">Endorsements</span>
          <h2 className="heading-xl mb-6">Sitaron ki Mehfil</h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8" />
          <p className="body-lg max-w-2xl mx-auto italic text-light-tan">Beloved by the stars, cherished by the nobles. Witness our legacy through their eyes.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="bg-warm-brown/40 backdrop-blur-sm border-royal-gold/15 hover:border-royal-gold/40 transition-all duration-500 overflow-hidden group cursor-pointer h-full shadow-2xl">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark-brown/40 flex items-center justify-center group-hover:bg-dark-brown/20 transition-colors duration-500">
                    <div className="w-16 h-16 rounded-full bg-royal-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play className="w-6 h-6 text-dark-brown ml-1" fill="currentColor" />
                    </div>
                  </div>
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
