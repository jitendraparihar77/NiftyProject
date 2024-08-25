
import Header from './components/Header';
import Hero from './components/Hero';
import Banner from './components/Banner';
import ImageScroller from './components/ImageScroller';
import ScreenerComponent from './components/ScreenerComponent';
import Testimonials from './components/Testimonials';
import PricingPlan from './components/PricingPlan';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FooterContent from './components/FooterContent';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      <Header />
      <Hero/>
      <Banner/>
      <ImageScroller/>
      <ScreenerComponent/>
      <Testimonials/>
      <PricingPlan />
      <FAQ />
      <FooterContent/>
      <Footer />
    </div>
  );
}
