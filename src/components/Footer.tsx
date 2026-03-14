"use client";

import { Instagram, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <Mail className="w-4 h-4" />, href: "#", label: "Email" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Sitemap", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-insp-bg-dark border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/5 pb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter text-white uppercase insp-font-sans">
              Biryani <span className="text-insp-primary">Babu</span>
            </h2>
            <p className="text-stone-500 max-w-xs mt-2 insp-font-display italic">
              Serving authenticity in every clay pot since 1924.
            </p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-insp-primary hover:border-insp-primary transition-all"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-stone-600 text-xs uppercase tracking-[0.2em] insp-font-sans">
          <p>© 2024 Biryani Babu Heritage Restaurants Pvt. Ltd.</p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-insp-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
