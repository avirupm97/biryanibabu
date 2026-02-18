"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "https://pixabay.com/get/gfbe6f442fed54e2df97a0974db64c241113544d9cd565dfd8971e2299a3f046ead47d677d17528c1e04da1786c64b0af.png",
    alt: "Chicken biryani in copper pot - deeznutz1 on Pixabay",
  },
  {
    src: "https://pixabay.com/get/gf615e819ece70ce47c32e9e9adaf298ee86b6d2b9ac98ae1db0bb125e2a4df8f041c4d53576c94eabae3e5d38ac15f9d.png",
    alt: "Mutton biryani with garnish - deeznutz1 on Pixabay",
  },
  {
    src: "https://images.pexels.com/photos/29699526/pexels-photo-29699526.jpeg",
    alt: "Tandoori chicken kebabs with spices - Kunal Lakhotia on Pexels",
  },
  {
    src: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg",
    alt: "Vegetable biryani with raita - dhiraj jain on Pexels",
  },
  {
    src: "https://images.pexels.com/photos/9646858/pexels-photo-9646858.jpeg",
    alt: "Chicken skewers on grill - Mouktik Joshi on Pexels",
  },
  {
    src: "https://images.pexels.com/photos/17649396/pexels-photo-17649396.jpeg",
    alt: "Prawn biryani with seafood garnish - Ali Dashti on Pexels",
  },
];

export default function PartyGallery() {
  return (
    <section className="py-16 md:py-[67px] bg-gradient-to-b from-warm-brown/30 to-dark-brown/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-start gap-6 mb-6 w-[500px]">
              <h2 className="text-[32px] font-bold leading-tight text-royal-gold w-[500px]" style={{fontFamily: 'var(--font-heading)'}}>
                Every Celebration Deserves Royal Treatment
              </h2>
              
              {/* Image Grid beside heading */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-lg group"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/30 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
            
            <p className="body-lg mb-8 max-w-xl">
              Each dish is crafted to perfection with royal biryanis in different serving portions, paired with succulent kebabs, curries, and desserts.
            </p>
            <Button className="bg-royal-gold hover:bg-royal-gold/90 text-dark-brown font-semibold px-8">
              Contact Us
            </Button>
          </div>
          
          <div></div>
        </div>
      </div>
    </section>
  );
}
