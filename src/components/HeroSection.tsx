import Image from "next/image";
import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-insp-bg-dark/80 via-insp-bg-dark/40 to-insp-bg-dark z-10" />
        <Image
          src="https://images.pexels.com/photos/17696653/pexels-photo-17696653.jpeg"
          alt="A steaming copper handi filled with saffron-infused royal biryani - Ali Dashti on Pexels"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl px-6">
        <div className="mb-6 flex justify-center">
          <Crown className="text-insp-primary w-16 h-16 opacity-80" />
        </div>
        <h2 className="text-insp-primary insp-font-display italic text-2xl mb-2">
          The Legacy of Awadh
        </h2>
        <h1 className="text-5xl md:text-8xl insp-font-display font-bold text-white mb-6 leading-tight">
          Royalty in Every{" "}
          <span className="gold-gradient-text">Grain</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light italic insp-font-display">
          Discover the secret spice blends of 2000-year-old royal recipes,
          slow-cooked to perfection in traditional earthen handis over charcoal
          fires.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="px-10 py-4 h-auto bg-insp-primary text-insp-bg-dark text-lg font-bold rounded-lg uppercase tracking-widest hover:scale-105 hover:bg-insp-primary transition-transform insp-font-sans"
          >
            Explore the Menu
          </Button>
          <Button
            variant="ghost"
            className="px-10 py-4 h-auto bg-white/10 backdrop-blur-md text-white text-lg font-bold rounded-lg border border-white/20 uppercase tracking-widest hover:bg-white/20 hover:text-white transition-all insp-font-sans"
          >
            Our Story
          </Button>
        </div>
      </div>

    </section>
  );
}
