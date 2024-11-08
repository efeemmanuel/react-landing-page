import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeaturedSection from './components/FeaturedSection.jsx';
import Workflow from './components/Workflow.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <FeaturedSection />
    <Workflow />
    <Pricing />
    <Testimonials />
    <Footer />
    </div>
    </>
  )
}