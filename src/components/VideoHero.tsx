'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function VideoHero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background Overlay with Gradient */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-dark-brown/70 via-dark-brown/40 to-dark-brown" />
      
      {/* Background Image Optimized */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.pexels.com/photos/9609862/pexels-photo-9609862.jpeg"
          alt="Royal Biryani Feast"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="align-middle pt-[40px]"
          >
            <h1 className="heading-2xl mb-6 drop-shadow-2xl">
              Biryani Babu
            </h1>
            <p className="accent-text text-2xl mb-12 tracking-widest opacity-90">
              ROYALTY IN EVERY GRAIN
            </p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block cursor-pointer group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-royal-gold blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-px h-16 bg-linear-to-b from-royal-gold to-transparent" />
      </motion.div>
    </section>
  );
}
