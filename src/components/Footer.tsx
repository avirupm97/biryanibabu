"use client";

import { Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-glow border-t border-royal-gold/15 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl accent-text font-bold mb-6">
              Biryani Babu
            </h3>
            <p className="text-light-tan/70 text-sm leading-relaxed italic max-w-xs">
              Crafted from long lost royal recipes, once reserved for Royalty. A
              legacy of taste, patience, and absolute perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h4 className="heading-md text-lg mb-6 uppercase tracking-widest text-royal-gold">
              Explore
            </h4>
            <ul className="space-y-4 text-light-tan/80 text-sm">
              <li>
                <a
                  href="#story"
                  className="hover:text-royal-gold transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-royal-gold transition-colors"
                >
                  Royal Menu
                </a>
              </li>
              <li>
                <a
                  href="#franchise"
                  className="hover:text-royal-gold transition-colors"
                >
                  Franchise
                </a>
              </li>
              <li>
                <a
                  href="#party-orders"
                  className="hover:text-royal-gold transition-colors"
                >
                  Party Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center">
            <h4 className="heading-md text-lg mb-6 uppercase tracking-widest text-royal-gold">
              Contact Us
            </h4>
            <div className="flex items-center gap-3 text-light-tan/80 text-sm mb-4 group cursor-pointer">
              <div className="w-8 h-8 rounded-full border border-royal-gold/30 flex items-center justify-center group-hover:border-royal-gold transition-colors">
                <Smartphone className="w-4 h-4 text-royal-gold" />
              </div>
              <span className="group-hover:text-royal-gold transition-colors">
                1800-123-4567
              </span>
            </div>
            <p className="text-xs text-light-tan/50 mt-4 leading-relaxed max-w-xs">
              Serving the royal flavors across 10 major cities in India.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-royal-gold/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-light-tan/50 text-xs tracking-widest uppercase">
            © 2026 Biryani Babu. Crafted with Royal Patience.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-royal-gold/50 text-[10px] tracking-[0.3em] uppercase">
              Secure Payment
            </span>
            <span className="text-royal-gold/50 text-[10px] tracking-[0.3em] uppercase">
              Authentic Taste
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
