import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredenciaisSection from "@/components/CredenciaisSection";
import PorQueIdealSection from "@/components/PorQueIdealSection";
import EmpresaSection from "@/components/EmpresaSection";
import ClientesSection from "@/components/ClientesSection";
import CTAFormSection from "@/components/CTAFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CredenciaisSection />
      <PorQueIdealSection />
      <EmpresaSection />
      <ClientesSection />
      <CTAFormSection />
      <Footer />
    </div>
  );
};

export default Index;
