import { Showcase } from "@/components/Showcase";
import About from "@/components/Value";
import TestimonialsSection from "@/components/TestimonialSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import ClientsSection from "@/components/ClientsSection";
import ScrollImg from "@/components/ScrollImg";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import MarqueeBanner from "@/components/MarqueeBanner";
import IndustriesSection from "@/components/IndustriesSection";

const Index = () => {
  return (
     <>

         <div className="min-h-screen bg-white text-white overflow-x-hidden">
     
      <Navbar />
      <Hero className="" />

      <Showcase />
      <ScrollImg />

      <Clients />

      <About />
      <ClientsSection />
      <TestimonialsSection />
      <WhatsAppWidget/>
      <Footer />
    </div>
     </>
  );
};

export default Index;
