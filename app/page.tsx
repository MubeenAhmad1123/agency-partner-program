import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import CommissionModel from "./components/CommissionModel";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import USPs from "./components/USPs";

import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ExitIntentPopup from "./components/ExitIntentPopup";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ExitIntentPopup />

      <CommissionModel />
      <HowItWorks />
      <Services />
      <CaseStudies />
      <USPs />

      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
