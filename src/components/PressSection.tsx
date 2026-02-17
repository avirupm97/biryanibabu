'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const pressArticles = [
  {
    title: 'Served with Elegance, Patience and Peace',
    publication: 'Economic Times',
    image: 'https://images.pexels.com/photos/15059053/pexels-photo-15059053.jpeg',
    link: '#'
  },
  {
    title: 'Unearthing a Forgotten Royal Feast',
    publication: 'Hotelier India',
    image: 'https://images.pexels.com/photos/14731729/pexels-photo-14731729.jpeg',
    link: '#'
  },
  {
    title: 'The Golden Spoon of Prosperity and Fortune',
    publication: 'BW Hotelier',
    image: 'https://images.pexels.com/photos/5639243/pexels-photo-5639243.jpeg',
    link: '#'
  }
];

export default function PressSection() {
  return (
    <section className="py-24 bg-dark-glow relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="accent-text text-sm tracking-[0.3em] uppercase mb-4 block">In The News</span>
          <h2 className="heading-xl mb-6">The Royal Recognition</h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8" />
          <p className="body-lg max-w-2xl mx-auto italic text-light-tan">Stories that acknowledge our timeless legacy and commitment to culinary perfection.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pressArticles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group h-full"
            >
              <Card className="bg-warm-brown/40 backdrop-blur-sm border-royal-gold/15 hover:border-royal-gold/40 transition-all duration-500 overflow-hidden h-full shadow-2xl group/card flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-dark-brown/20 group-hover/card:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="heading-md text-xl mb-6 flex items-start justify-between gap-4 group-hover/card:text-royal-gold transition-colors">
                    {article.title}
                    <ExternalLink className="w-5 h-5 text-royal-gold flex-shrink-0 mt-1 opacity-60 group-hover/card:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-royal-gold text-xs tracking-[0.2em] uppercase font-semibold mt-auto">{article.publication}</p>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>

        <div className="ornamental-divider">
          ◆
        </div>
      </div>
    </section>
  );
}
