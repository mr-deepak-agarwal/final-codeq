import ClientInit from '@/components/ui/ClientInit';
import Loader from '@/components/ui/Loader';
import Cursor from '@/components/ui/Cursor';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import Ticker from '@/components/sections/Ticker';
import Story from '@/components/sections/Story';
import Services from '@/components/sections/Services';
import Numbers from '@/components/sections/Numbers';
import Work from '@/components/sections/Work';
import Process from '@/components/sections/Process';
import About from '@/components/sections/About';
import Testimonial from '@/components/sections/Testimonial';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      {/* Accessibility: skip to main content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Loader />
      <Cursor />
      <Navbar />

      <main id="main-content">
        <Hero />
        <Ticker />
        <Story />
        <Services />
        <Numbers />
        <Work />
        <Process />
        <About />
        <Testimonial />
        <CTA />
      </main>

      <Footer />
      <ClientInit />
    </>
  );
}
