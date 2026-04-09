import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "#0a2a5e" }}
    >
      {/* ── Fundo blur animado – camadas de luz azul ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(31,156,216,0.28) 0%, transparent 60%)," +
            "radial-gradient(ellipse 60% 50% at 75% 70%, rgba(32,114,185,0.22) 0%, transparent 55%)," +
            "radial-gradient(ellipse 50% 40% at 50% 10%, rgba(100,190,240,0.18) 0%, transparent 50%)," +
            "linear-gradient(160deg, #0d3578 0%, #0a2255 50%, #071a45 100%)",
        }}
      />

      {/* ── Orb 1 – azul claro, topo esquerda ── */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full animate-float-orb"
        style={{
          background: "radial-gradient(circle, rgba(31,156,216,0.35) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      {/* ── Orb 2 – azul médio, baixo direita ── */}
      <div
        className="absolute -bottom-40 -right-24 w-[540px] h-[540px] rounded-full animate-float-orb animation-delay-2000"
        style={{
          background: "radial-gradient(circle, rgba(32,114,185,0.30) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      {/* ── Orb 3 – azul muito claro, centro ── */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full animate-float-orb animation-delay-1000"
        style={{
          background: "radial-gradient(circle, rgba(100,190,240,0.20) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Anéis de radar suaves ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="w-[480px] h-[480px] rounded-full border animate-pulse-ring"
          style={{ borderColor: "rgba(100,190,240,0.15)" }}
        />
        <div
          className="absolute inset-0 rounded-full border animate-pulse-ring animation-delay-1000"
          style={{ borderColor: "rgba(31,156,216,0.10)" }}
        />
        <div
          className="absolute -inset-[90px] w-[660px] h-[660px] rounded-full border animate-pulse-ring animation-delay-2000"
          style={{ borderColor: "rgba(32,114,185,0.08)" }}
        />
      </div>

      {/* ── Conteúdo ── */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm"
              style={{
                ...ms,
                background: "rgba(255,255,255,0.10)",
                borderColor: "rgba(100,200,245,0.35)",
                color: "#c8e9f8",
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#5bc8ef" }} />
              Wings+ Hytera Authorized Dealer
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white" style={ms}>
              Sua operação não pode parar por falta de{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #5bc8ef, #a8e0f8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                comunicação
              </span>
            </h1>

            <p className="text-lg max-w-lg" style={{ ...ms, fontWeight: 400, color: "rgba(200,233,248,0.80)" }}>
              Locação, venda e assistência técnica em radiocomunicadores Hytera e Motorola. Cobertura nacional com
              entrega em até 48h.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="text-base text-white"
                style={{
                  ...ms,
                  background: "linear-gradient(90deg, #1263c8, #1F9CD8)",
                  boxShadow: "0 8px 32px rgba(31,156,216,0.35)",
                }}
              >
                <a href="#contato">Quero uma cotação agora</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base hover:text-white transition-colors"
                style={{
                  ...ms,
                  borderColor: "rgba(100,200,245,0.40)",
                  background: "rgba(255,255,255,0.07)",
                  color: "#c8e9f8",
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
                  <div className="text-xl text-white" style={ms}>
                    {stat.value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider"
                    style={{ ...ms, fontWeight: 500, color: "rgba(200,233,248,0.55)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rádios flutuantes */}
          <div className="relative hidden lg:flex justify-center items-center min-h-[500px]">
            <img
              src="/assets/hero-radios.png"
              alt="Rádios Hytera profissionais"
              className="w-[420px] animate-float mx-[80px] text-xl font-serif object-cover"
              style={{ filter: "drop-shadow(0 16px 48px rgba(31,156,216,0.55))" }}
            />

            {/* Badges */}
            {[
              { text: "DMR / TETRA", pos: "top-4 right-4" },
              { text: "GPS Integrado", pos: "bottom-32 left-2" },
              { text: "AES-256", pos: "bottom-8 right-8" },
            ].map((badge) => (
              <div
                key={badge.text}
                className={`absolute ${badge.pos} px-3 py-1.5 rounded-full border text-xs backdrop-blur-sm`}
                style={{
                  ...ms,
                  fontWeight: 600,
                  background: "rgba(18,99,200,0.45)",
                  borderColor: "rgba(100,200,245,0.40)",
                  color: "#c8e9f8",
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
