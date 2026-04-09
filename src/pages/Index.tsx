import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredenciaisSection from "@/components/CredenciaisSection";
import DorSection from "@/components/DorSection";
import PorQueIdealSection from "@/components/PorQueIdealSection";
import EmpresaSection from "@/components/EmpresaSection";
import RadiosCarouselSection from "@/components/RadiosCarouselSection"; // ← novo: unifica Hytera + Motorola
import LocacaoCarouselSection from "@/components/LocacaoCarouselSection";
import ServicosSection from "@/components/ServicosSection";
import ClientesSection from "@/components/ClientesSection";
import SetoresSection from "@/components/SetoresSection";
import FAQSection from "@/components/FAQSection";
import CTAFormSection from "@/components/CTAFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <CredenciaisSection />
      <DorSection />
      <PorQueIdealSection />
      <EmpresaSection />
      <RadiosCarouselSection />
      <LocacaoCarouselSection />
      <ServicosSection />
      <ClientesSection />
      <SetoresSection />
      <FAQSection />
      <CTAFormSection />
      <Footer />
    </div>
  );
};

export default Index;
