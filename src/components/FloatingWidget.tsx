"use client";

import { UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FloatingWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className="relative group flex items-center">
        {/* Hover menu — appears to the left of the circular button */}
        <div className="absolute right-full mr-4 flex flex-col items-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
          <Link href="#order">
            <span className="bg-insp-bg-dark text-white px-4 py-2 rounded-lg text-sm font-bold border border-insp-primary whitespace-nowrap uppercase tracking-widest insp-font-sans hover:bg-insp-primary/10 transition-colors cursor-pointer">
              Order Online
            </span>
          </Link>
          <Link href="/party-orders">
            <span className="bg-insp-bg-dark text-white px-4 py-2 rounded-lg text-sm font-bold border border-insp-primary whitespace-nowrap uppercase tracking-widest insp-font-sans hover:bg-insp-primary/10 transition-colors cursor-pointer">
              Get in Touch
            </span>
          </Link>
        </div>

        {/* Circular trigger button */}
        <Button className="bg-insp-primary text-insp-bg-dark w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-insp-primary transition-transform p-0">
          <UtensilsCrossed className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
}
