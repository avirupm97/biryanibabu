"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Menu", href: "#menu" },
    { name: "Franchise", href: "#franchise" },
    { name: "Party Orders", href: "/party-orders" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-brown/95 backdrop-blur-sm border-b border-royal-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl accent-text font-bold tracking-tighter hover:scale-105 transition-transform cursor-pointer">
              Biryani Babu
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-[0.15em] uppercase text-foreground/80 hover:text-royal-gold transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-royal-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Order Online Button - Desktop */}
          <div className="hidden md:block">
            <Button className="bg-royal-gold hover:bg-royal-gold/90 text-dark-brown font-semibold px-6">
              Order Online
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-royal-gold">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-dark-brown border-royal-gold/20 w-[280px]"
              >
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-foreground hover:text-royal-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button className="bg-royal-gold hover:bg-royal-gold/90 text-dark-brown font-semibold w-full mt-4">
                    Order Online
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
