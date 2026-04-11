import About from "@/components/sections/About";
import CarGrid from "@/components/sections/CarGrid";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWork";
import Navbar from "@/components/sections/Navbar";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-12 uppercase italic">Recent Sales</h2>
        <CarGrid />
      </section>

      <WhyChooseUs />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}