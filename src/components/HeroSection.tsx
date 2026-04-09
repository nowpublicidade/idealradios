import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ideal-dark pt-16">
      {/* Blur orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-ideal-500/20 rounded-full blur-[100px] animate-float-orb" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-ideal-400/15 rounded-full blur-[120px] animate-float-orb animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-ideal-300/10 rounded-full blur-[80px] animate-float-orb animation-delay-1000" />

      {/* Radar rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] rounded-full border border-ideal-400/10 animate-pulse-ring" />
        <div className="absolute inset-0 w-[600px] h-[600px] rounded-full border border-ideal-400/10 animate-pulse-ring animation-delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ideal-700/40 border border-ideal-500/30 text-ideal-200 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-ideal-400 animate-pulse" />
              Wings+ Hytera Authorized Dealer
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-primary-foreground font-display">
              Sua operação não pode parar por falta de{" "}
              <span className="bg-gradient-to-r from-ideal-400 to-ideal-300 bg-clip-text text-transparent">
                comunicação
              </span>
            </h1>

            <p className="text-lg text-ideal-200/80 max-w-lg">
              Locação, venda e assistência técnica em radiocomunicadores Hytera e Motorola.
              Cobertura nacional com entrega em até 48h.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-ideal-500 to-ideal-400 hover:from-ideal-400 hover:to-ideal-300 text-primary-foreground font-bold text-base shadow-xl shadow-ideal-500/30"
              >
                <a href="#contato">Quero uma cotação agora</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-ideal-500/40 text-ideal-200 hover:bg-ideal-700/30 hover:text-primary-foreground font-bold text-base"
              >
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Floating radios */}
          <div className="relative hidden lg:flex justify-center items-center min-h-[500px]">
            <img
              src="/assets/radios/imgi_6_HP786-680x680.png"
              alt="Rádio HP786 Hytera"
              className="w-48 absolute top-10 left-10 animate-float drop-shadow-2xl"
            />
            <img
              src="/assets/radios/imgi_8_HP686-680x680.png"
              alt="Rádio HP686 Hytera"
              className="w-44 absolute top-20 right-16 animate-float animation-delay-200 drop-shadow-2xl"
            />
            <img
              src="/assets/radios/imgi_4_PT890-680x680.png"
              alt="Rádio PT890 Hytera"
              className="w-40 absolute bottom-16 left-1/2 -translate-x-1/2 animate-float animation-delay-400 drop-shadow-2xl"
            />

            {/* Tech labels */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-ideal-700/60 border border-ideal-500/30 text-xs font-semibold text-ideal-300 backdrop-blur-sm">
              DMR / TETRA
            </div>
            <div className="absolute bottom-32 left-2 px-3 py-1 rounded-full bg-ideal-700/60 border border-ideal-500/30 text-xs font-semibold text-ideal-300 backdrop-blur-sm">
              GPS Integrado
            </div>
            <div className="absolute bottom-8 right-8 px-3 py-1 rounded-full bg-ideal-700/60 border border-ideal-500/30 text-xs font-semibold text-ideal-300 backdrop-blur-sm">
              Criptografia AES-256
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
