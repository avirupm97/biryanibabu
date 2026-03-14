import Image from "next/image";
import { BookOpen, ChefHat } from "lucide-react";

export default function HeritageSection() {
  return (
    <section
      id="heritage"
      className="py-24 bg-insp-regal-charcoal relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(242, 185, 13, 0.05) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-insp-primary/30 rounded-xl group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
            <div className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/30203316/pexels-photo-30203316.jpeg"
                alt="Ancient manuscripts and handpicked whole spices on a stone surface - Nosh Caterers on Pexels"
                fill
                className="object-cover [filter:sepia(0.3)]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-insp-primary p-8 rounded-lg z-20 hidden md:block">
              <p className="text-insp-bg-dark insp-font-display text-4xl font-bold italic">
                100+
              </p>
              <p className="text-insp-bg-dark text-xs uppercase font-bold tracking-tighter insp-font-sans">
                Secret Spices
              </p>
            </div>
          </div>

          {/* Text column */}
          <div>
            <span className="text-insp-primary uppercase tracking-[0.4em] font-bold text-sm block mb-4 insp-font-sans">
              The Chronicles
            </span>
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-8 leading-tight insp-font-display">
              Preserving 2000 Years of{" "}
              <span className="text-insp-primary italic">Flavor</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-8 insp-font-sans">
              Tracing back to the kitchens of ancient emperors, Biryani Babu
              preserves the sanctity of slow-cooking and authentic spice
              sourcing. Our Khansamas are the descendants of the royal cooks who
              once served the Mughal Empire.
            </p>
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full border border-insp-primary/50 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-insp-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-1 insp-font-display">
                    Ancient Manuscripts
                  </h4>
                  <p className="text-stone-400 insp-font-sans">
                    Recipes recovered from royal court archives, translated from
                    Persian and Sanskrit.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full border border-insp-primary/50 flex items-center justify-center flex-shrink-0">
                  <ChefHat className="text-insp-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-1 insp-font-display">
                    Earthen Handi Tradition
                  </h4>
                  <p className="text-stone-400 insp-font-sans">
                    We exclusively use porous clay pots from the Ganges riverbed
                    for natural mineral infusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
