import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OurStoryHero from '@/components/OurStoryHero';
import VisionSection from '@/components/VisionSection';
import MissionSection from '@/components/MissionSection';
import PromiseSection from '@/components/PromiseSection';
import ValuesSection from '@/components/ValuesSection';

export const metadata: Metadata = {
  title: "Our Story - Biryani Babu",
  description: "Discover the royal legacy behind Biryani Babu. Our mission, promise, and values in delivering authentic Dum Pukht biryani."
};

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-dark-glow selection:bg-royal-gold selection:text-dark-brown">
      <Header />
      <div className="relative">
        <OurStoryHero />
        <div className="relative z-10">
          <VisionSection />
          <MissionSection />
          <PromiseSection />
          <ValuesSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
