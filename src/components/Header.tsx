"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Our Story", href: "/our-story" },
    { name: "Menu", href: "#menu" },
    { name: "Franchise", href: "#franchise" },
    { name: "Party Orders", href: "/party-orders" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-insp-bg-dark/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-3xl font-bold tracking-tighter text-white uppercase insp-font-sans hover:scale-105 transition-transform cursor-pointer">
                Biryani <span className="text-insp-primary">Babu</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-[0.15em] uppercase text-stone-400 hover:text-insp-primary transition-all duration-300 relative group insp-font-sans"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-insp-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Order Online Button - Desktop */}
          <div className="hidden md:block">
            <Button
              className="bg-insp-primary hover:bg-insp-primary/90 text-insp-bg-dark font-semibold px-6 insp-font-sans uppercase tracking-widest text-xs"
            >
              Order Online
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-insp-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-insp-bg-dark border-white/5 w-[280px]"
              >
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-stone-300 hover:text-insp-primary transition-colors insp-font-sans tracking-wide"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button
                    className="bg-insp-primary hover:bg-insp-primary/90 text-insp-bg-dark font-semibold w-full mt-4 insp-font-sans uppercase tracking-widest text-xs"
                  >
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
