import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import WhyAccredian from '@/components/WhyAccredian';
import Programs from '@/components/Programs';
import DomainExpertise from '@/components/DomainExpertise';
import DeliveryModes from '@/components/DeliveryModes';
import ImpactStats from '@/components/ImpactStats';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Partners />
        <WhyAccredian />
        <Programs />
        <DomainExpertise />
        <DeliveryModes />
        <ImpactStats />
        <HowItWorks />
        <Testimonials />
        <CTABanner />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
