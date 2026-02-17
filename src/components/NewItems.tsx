'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const newItems = [
  {
    name: 'Gosht Haleem',
    description: 'For evenings that demanded reflection and repose, haleem was favoured. Deep, nourishing, and profoundly settling, it embodied patience and tranquility. A dish meant to be lingered over, never hurried, always respected.',
    image: 'https://images.pexels.com/photos/32825908/pexels-photo-32825908.jpeg'
  },
  {
    name: 'Badshahi Iftari Sandooq',
    description: 'When the fast broke in royal households, the treasure box arrived with ceremony. Rooted in tradition and guided by grandeur, it marked the beginning of a feast meant to unfold slowly, with grace and intention.',
    image: 'https://images.pexels.com/photos/35267280/pexels-photo-35267280.jpeg'
  },
  {
    name: 'Chicken Patti Samosa',
    description: 'Even the smallest indulgences earned their place at court. Crisp, familiar, and quietly satisfying, this offering balanced preference with elegance. A reminder that pleasure need not announce itself to be remembered.',
    image: 'https://pixabay.com/get/g380ad0f290a8cf58ef72a801e8dddada605441890f5116e6198ed3e719cbae730aef4c0cf7871a0641cbd76db56d68a5.jpg'
  },
  {
    name: 'Sheer Khurma',
    description: 'As feasts drew to their natural close, sheer khurma signalled contentment. Soft, calming, and composed, it was served with respect and left behind only peace. An ending that needed no embellishment.',
    image: 'https://images.pexels.com/photos/14610769/pexels-photo-14610769.jpeg'
  },
  {
    name: 'Rose Falooda',
    description: 'At the end of grand gatherings, rose lingered in memory. Cool, fragrant, and soothing, this final offering settled the senses into tranquility and quiet completion.',
    image: 'https://images.pexels.com/photos/10117395/pexels-photo-10117395.jpeg'
  }
];

export default function NewItems() {
  return (
    <section className="py-24 bg-dark-glow relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="accent-text text-sm tracking-[0.3em] uppercase mb-4 block">Seasonal Specialties</span>
          <h2 className="heading-xl mb-6">Naye Nawabi Nazraane</h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8" />
          <p className="body-lg max-w-2xl mx-auto italic text-light-tan">Discover the newest treasures crafted for royalty, bringing seasonal delicacies to your table.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="h-full"
            >
              <Card className="bg-warm-brown/40 backdrop-blur-sm border-royal-gold/15 hover:border-royal-gold/40 transition-all duration-500 overflow-hidden group h-full flex flex-col shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-dark-brown/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-royal-gold" />
                    <h3 className="heading-md text-2xl group-hover:text-royal-gold transition-colors">{item.name}</h3>
                  </div>
                  <p className="text-light-tan/80 text-sm leading-relaxed flex-1 font-light tracking-wide">
                    {item.description}
                  </p>
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
