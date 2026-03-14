import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: <MapPin className="text-insp-primary w-5 h-5 mt-0.5 flex-shrink-0" />,
    label: "Our Flagship Outlet",
    content: (
      <>
        7th Floor, Royal Heritage Plaza,
        <br />
        Old City, Hyderabad - 500002
      </>
    ),
  },
  {
    icon: <Clock className="text-insp-primary w-5 h-5 mt-0.5 flex-shrink-0" />,
    label: "Opening Hours",
    content: "Mon - Sun: 11:30 AM - 11:00 PM",
  },
  {
    icon: <Phone className="text-insp-primary w-5 h-5 mt-0.5 flex-shrink-0" />,
    label: "Direct Line",
    content: "+91 98765 43210",
  },
];

export default function LocationSection() {
  return (
    <section className="py-24 bg-insp-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 bg-insp-regal-charcoal rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
          {/* Info panel */}
          <div className="p-12 md:p-16">
            <h2 className="text-4xl text-white font-bold mb-8 insp-font-display">
              Visit the Palace
            </h2>
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  {item.icon}
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1 insp-font-sans">
                      {item.label}
                    </h4>
                    <p className="text-stone-400 insp-font-sans">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button
                variant="outline"
                className="w-full py-4 h-auto border-insp-primary text-insp-primary bg-transparent font-bold rounded-lg hover:bg-insp-primary hover:text-insp-bg-dark transition-all uppercase tracking-widest insp-font-sans"
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Map panel */}
          <div className="relative min-h-[400px]">
            <img
              src="https://images.pexels.com/photos/30383863/pexels-photo-30383863.jpeg"
              alt="Aerial view of Hyderabad city showing restaurant location - Lenskachakkar on Pexels"
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-insp-primary/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
