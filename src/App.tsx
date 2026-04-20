import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { ServicesGrid } from './components/ServicesGrid';
import { FeatureSection } from './components/FeatureSection';
import { CaseStudies } from './components/CaseStudies';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialFeature } from './components/TestimonialFeature';
import { StatsSection } from './components/StatsSection';
import { TestimonialGrid } from './components/TestimonialGrid';
import { PricingSection } from './components/PricingSection';
import { TeamSection } from './components/TeamSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-background text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <ServicesGrid />
        <FeatureSection />
        <CaseStudies />
        <WhyChooseUs />
        <TestimonialFeature />
        <StatsSection />
        <TestimonialGrid />
        <PricingSection />
        <TeamSection />
        <BlogSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
