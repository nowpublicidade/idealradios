import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredenciaisSection from "@/components/CredenciaisSection";
import DorSection from "@/components/DorSection";
import PorQueIdealSection from "@/components/PorQueIdealSection";
import EmpresaSection from "@/components/EmpresaSection";
import RadiosHyteraSection from "@/components/RadiosHyteraSection";
import RadiosMotorolaSection from "@/components/RadiosMotorolaSection";
import LocacaoCarouselSection from "@/components/LocacaoCarouselSection";
import ServicosSection from "@/components/ServicosSection";
import ClientesSection from "@/components/ClientesSection";
import SetoresSection from "@/components/SetoresSection";
import FAQSection from "@/components/FAQSection";
import CTAFormSection from "@/components/CTAFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CredenciaisSection />
      <DorSection />
      <PorQueIdealSection />
      <EmpresaSection />
      <RadiosHyteraSection />
      <RadiosMotorolaSection />
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
