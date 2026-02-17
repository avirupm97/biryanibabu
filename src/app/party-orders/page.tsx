import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartyHero from "@/components/PartyHero";
import PartyContactForm from "@/components/PartyContactForm";
import PartyFeatures from "@/components/PartyFeatures";
import PartyGallery from "@/components/PartyGallery";
import PartyStats from "@/components/PartyStats";

export const metadata = {
  title: "Party Orders - Biryani Babu | Royal Catering Services",
  description: "Plan your royal celebration with Biryani Babu's party catering services. Authentic biryani, kebabs, and desserts for every occasion.",
};

export default function PartyOrdersPage() {
  return (
    <main className="min-h-screen bg-dark-glow selection:bg-royal-gold selection:text-dark-brown">
      <Header />
      
      {/* Add top padding to account for fixed header */}
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Two-column layout: content on left, sticky form on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Scrollable Content */}
            <div className="lg:col-span-7 space-y-0">
              <PartyHero />
              <PartyFeatures />
              <PartyGallery />
              <PartyStats />
            </div>

            {/* Right Column - Sticky Form (hidden on mobile, shown on desktop) */}
            <div className="hidden lg:block lg:col-span-5">
              <PartyContactForm />
            </div>

            {/* Mobile Form - Shown at top on mobile/tablet */}
            <div className="lg:hidden order-first">
              <PartyContactForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
