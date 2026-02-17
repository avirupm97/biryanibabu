import Header from '@/components/Header';
import VideoHero from '@/components/VideoHero';
import RoyalLegacy from '@/components/RoyalLegacy';
import ProductShowcase from '@/components/ProductShowcase';
import NewItems from '@/components/NewItems';
import CelebrityTestimonials from '@/components/CelebrityTestimonials';
import CustomerReviews from '@/components/CustomerReviews';
import PressSection from '@/components/PressSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-glow selection:bg-royal-gold selection:text-dark-brown">
      <Header />
      <div className="relative">
        <VideoHero />
        <div className="relative z-10">
          <RoyalLegacy />
          <ProductShowcase />
          <NewItems />
          <CelebrityTestimonials />
          <CustomerReviews />
          <PressSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
