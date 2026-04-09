import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ms = { fontFamily: "'Montserrat', sans-serif" };

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "#071535" }}
    >
      {/* ── Grade de pontos animada ── */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(circle, #2072B9 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* ── Linhas diagonais sutis ── */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #1F9CD8 0px, #1F9CD8 1px, transparent 0px, transparent 50%)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Orbs de luz ── */}
      <div
        className="absolute -top-20 -left-20 w-[520px] h-[520px] rounded-full animate-float-orb"
        style={{ background: "radial-gradient(circle, #0E4AAD55 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute -bottom-24 -right-16 w-[460px] h-[460px] rounded-full animate-float-orb animation-delay-2000"
        style={{ background: "radial-gradient(circle, #1F9CD840 0%, transparent 70%)", filter: "blur(70px)" }}
      />
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[320px] h-[320px] rounded-full animate-float-orb animation-delay-1000"
        style={{ background: "radial-gradient(circle, #2072B930 0%, transparent 70%)", filter: "blur(50px)" }}
      />

      {/* ── Anéis de radar ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="w-[480px] h-[480px] rounded-full border animate-pulse-ring"
          style={{ borderColor: "rgba(31,156,216,0.12)" }}
        />
        <div
          className="absolute inset-0 w-[480px] h-[480px] rounded-full border animate-pulse-ring animation-delay-1000"
          style={{ borderColor: "rgba(31,156,216,0.08)" }}
        />
        <div
          className="absolute -inset-[90px] w-[660px] h-[660px] rounded-full border animate-pulse-ring animation-delay-2000"
          style={{ borderColor: "rgba(14,74,173,0.07)" }}
        />
      </div>

      {/* ── Conteúdo ── */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-8 animate-fade-in-up">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold"
              style={{
                ...ms,
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(31,156,216,0.30)",
                color: "#93c5e8",
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1F9CD8" }} />
              Wings+ Hytera Authorized Dealer
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white" style={ms}>
              Sua operação não pode parar por falta de{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #1F9CD8, #2072B9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                comunicação
              </span>
            </h1>

            <p className="text-lg max-w-lg" style={{ ...ms, color: "#93c5e8cc" }}>
              Locação, venda e assistência técnica em radiocomunicadores Hytera e Motorola. Cobertura nacional com
              entrega em até 48h.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="font-bold text-base text-white"
                style={{
                  ...ms,
                  background: "linear-gradient(90deg, #0E4AAD, #1F9CD8)",
                  boxShadow: "0 8px 28px rgba(31,156,216,0.28)",
                }}
              >
                <a href="#contato">Quero uma cotação agora</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-bold text-base hover:text-white transition-colors"
                style={{
                  ...ms,
                  borderColor: "rgba(31,156,216,0.35)",
                  background: "rgba(255,255,255,0.04)",
                  color: "#93c5e8",
                }}
              >
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Mini stats */}
            <div className="flex items-center gap-8 pt-2">
              {[
                { value: "18+", label: "anos no mercado" },
                { value: "48h", label: "entrega nacional" },
                { value: "Wings+", label: "cert. Hytera" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-black text-white" style={ms}>
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider" style={{ ...ms, color: "#93c5e880" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rádios flutuantes */}
          <div className="relative hidden lg:flex justify-center items-center min-h-[500px]">
            <img
              src="/assets/hero-radios-hytera.png"
              alt="Rádios Hytera profissionais"
              className="w-[420px] animate-float"
              style={{ filter: "drop-shadow(0 16px 40px rgba(14,74,173,0.50))" }}
            />

            {/* Badges */}
            {[
              { text: "DMR / TETRA", pos: "top-4 right-4" },
              { text: "GPS Integrado", pos: "bottom-32 left-2" },
              { text: "AES-256", pos: "bottom-8 right-8" },
            ].map((badge) => (
              <div
                key={badge.text}
                className={`absolute ${badge.pos} px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-sm`}
                style={{
                  ...ms,
                  background: "rgba(14,74,173,0.55)",
                  borderColor: "rgba(31,156,216,0.35)",
                  color: "#93c5e8",
                }}
              >
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
