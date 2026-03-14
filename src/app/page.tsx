import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import CraftSection from "@/components/CraftSection";
import RegionalSpecialties from "@/components/RegionalSpecialties";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-insp-bg-dark overflow-x-hidden">
      <Header />
      <HeroSection />
      <HeritageSection />
      <CraftSection />
      <RegionalSpecialties />
      <LocationSection />
      <Footer />
    </main>
  );
}
