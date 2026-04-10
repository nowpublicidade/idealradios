import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Leaf, Battery, DollarSign, Wrench, Car, Headphones,
  ShoppingBag, Plane, Factory, Anchor, Stethoscope,
  TreePine, Calendar, GraduationCap, Settings,
  Shield, Search, HardHat, Package, Building, Zap,
  Phone, ExternalLink, ChevronRight, Quote, ArrowLeft,
  Menu, X
} from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

const ms700 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms600 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };
const ms500 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 500 };
const ms400 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const bc700 = { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 };

/* ─── DATA ─── */
const products = [
  {
    name: "IEW-D70",
    subtitle: "Diciclo Elétrico Corporativo",
    img: "/assets/iew/imgi_25_D70-1024x1024.jpeg",
    desc: "Solução ágil para ambientes internos e controlados. Mobilidade prática em shoppings, fábricas, galpões, centros logísticos, aeroportos e hospitais.",
    tags: ["Indoor", "Facilities", "Logística"],
  },
  {
    name: "IEW-D90",
    subtitle: "Diciclo Elétrico Outdoor",
    img: "/assets/iew/imgi_24_D90.jpeg",
    desc: "Mobilidade elétrica para áreas externas e amplas. Ideal para estacionamentos, condomínios corporativos, parques industriais, áreas portuárias e orlas.",
    tags: ["Outdoor", "Segurança", "Corporativo"],
  },
  {
    name: "IEW-M1O",
    subtitle: "Moto Elétrica 10.000W",
    img: "/assets/iew/imgi_29_M1O-1024x1024.jpeg",
    desc: "Alta autonomia para deslocamentos mais longos. Perfeita para grandes centros corporativos, campi universitários, shoppings e centros logísticos.",
    tags: ["Alta Autonomia", "Corporativo", "Logística"],
  },
  {
    name: "IEW-C30",
    subtitle: "Cadeira de Rodas Motorizada",
    img: "/assets/iew/imgi_3_Site-Mirage-SX-01-730x730-1-600x600-1.jpeg",
    desc: "Experiência mais confortável e inclusiva para clientes e visitantes em shoppings, hospitais, parques, aeroportos e centros corporativos.",
    tags: ["Acessibilidade", "Inclusão", "Conforto"],
  },
];

const advantages = [
  { icon: Leaf, label: "Zero emissão de poluentes", desc: "Operação 100% limpa, sem emissões de CO₂ ou ruído excessivo." },
  { icon: Battery, label: "Autonomia elevada", desc: "Baterias de alta capacidade para jornadas completas de trabalho." },
  { icon: DollarSign, label: "Baixo custo operacional", desc: "Economia de até 90% em combustível e manutenção." },
  { icon: Wrench, label: "Manutenção preventiva inclusa", desc: "Plano de manutenção programada incluído na locação." },
  { icon: Car, label: "Frota reserva garantida", desc: "Veículo substituto imediato em caso de manutenção corretiva." },
  { icon: Headphones, label: "Assistência técnica nacional", desc: "Equipe própria com cobertura em todo o território nacional." },
];

const sectors = [
  { icon: ShoppingBag, label: "Shopping Centers" },
  { icon: Plane, label: "Aeroportos" },
  { icon: Factory, label: "Indústrias" },
  { icon: Anchor, label: "Portos" },
  { icon: Package, label: "Condomínios Logísticos" },
  { icon: Stethoscope, label: "Hospitais" },
  { icon: TreePine, label: "Parques Temáticos" },
  { icon: Calendar, label: "Eventos" },
  { icon: GraduationCap, label: "Campi Universitários" },
  { icon: Settings, label: "Facilities" },
];

const applications = [
  { icon: Shield, label: "Rondas e patrulhamento", desc: "Vigilância ágil em grandes áreas com resposta rápida." },
  { icon: Search, label: "Inspeções técnicas", desc: "Deslocamento eficiente entre pontos de inspeção." },
  { icon: HardHat, label: "Manutenção predial", desc: "Mobilidade para equipes de manutenção e facilities." },
  { icon: Package, label: "Logística interna", desc: "Transporte de materiais e documentos dentro de complexos." },
  { icon: Building, label: "Segurança patrimonial", desc: "Cobertura ampliada do perímetro com veículos silenciosos." },
  { icon: Zap, label: "Facilities e alto fluxo", desc: "Operações de alto volume com agilidade e sustentabilidade." },
];

/* ─── NAVBAR IEW ─── */
const navLinksIEW = [
  { label: "Produtos", href: "#produtos" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Setores", href: "#setores" },
  { label: "Contato", href: "#contato" },
];

const NavbarIEW = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useState(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4"
      style={{ paddingTop: scrolled ? 8 : 16, transition: "padding 0.35s ease" }}
    >
      <nav
        className="w-full max-w-5xl flex items-center justify-between h-14 px-5 rounded-2xl"
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.18)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: scrolled ? "1px solid rgba(14,74,173,0.14)" : "1px solid rgba(255,255,255,0.30)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(14,74,173,0.10), inset 0 1px 0 rgba(255,255,255,0.80)"
            : "0 2px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.35)",
          transition: "all 0.35s ease",
        }}
      >
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/"
            className="flex items-center gap-1 text-xs transition-colors"
            style={{ ...ms500, color: scrolled ? "#0E4AAD" : "rgba(255,255,255,0.8)" }}
          >
            <ArrowLeft size={14} />
            Ideal Rádios
          </Link>
          <span style={{ color: scrolled ? "rgba(14,74,173,0.2)" : "rgba(255,255,255,0.3)" }}>|</span>
          <span className="text-sm" style={{ ...ms700, color: scrolled ? "#0E4AAD" : "white" }}>
            Electric Way
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinksIEW.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200 relative group"
              style={{ ...ms600, color: scrolled ? "#1a3a5c" : "rgba(255,255,255,0.92)" }}
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                style={{ background: "linear-gradient(90deg,#22C55E,#4ADE80)" }}
              />
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/551127522520"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm text-white rounded-xl px-4 py-2 transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            ...ms700,
            background: "linear-gradient(90deg, #0E4AAD, #22C55E)",
            boxShadow: "0 4px 16px rgba(34,197,94,0.35)",
          }}
        >
          <Phone size={14} />
          Demonstração
        </a>

        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-colors"
          style={{
            color: scrolled ? "#0E4AAD" : "white",
            background: scrolled ? "rgba(14,74,173,0.08)" : "rgba(255,255,255,0.15)",
          }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div
          className="absolute top-full mt-2 left-4 right-4 max-w-5xl mx-auto rounded-2xl px-5 py-5 space-y-3"
          style={{
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(14,74,173,0.12)",
            boxShadow: "0 8px 32px rgba(14,74,173,0.12)",
          }}
        >
          {navLinksIEW.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm py-2 border-b last:border-0"
              style={{ ...ms600, color: "#1a3a5c", borderColor: "rgba(14,74,173,0.08)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/551127522520"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full text-sm text-white rounded-xl px-4 py-2.5 mt-2"
            style={{
              ...ms700,
              background: "linear-gradient(90deg, #0E4AAD, #22C55E)",
              boxShadow: "0 4px 16px rgba(34,197,94,0.30)",
            }}
          >
            <Phone size={14} />
            Demonstração
          </a>
        </div>
      )}
    </div>
  );
};

/* ─── PAGE ─── */
const IdealElectricWay = () => {
  return (
    <div className="min-h-screen" style={{ background: "#060e24" }}>
      <NavbarIEW />

      {/* ── 1. HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/iew/imgi_7_IMG_7356-1024x576.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(6,14,36,0.85) 0%, rgba(14,74,173,0.4) 50%, rgba(34,197,94,0.15) 100%)",
          }}
        />
        {/* Green glow */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 pt-28 pb-20">
          <SectionReveal animation="fade-up" delay={0.1}>
            <span
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[4px] mb-6"
              style={{ ...ms600, color: "#4ADE80" }}
            >
              <Zap size={14} />
              Mobilidade Elétrica Corporativa
            </span>
          </SectionReveal>
          <SectionReveal animation="fade-up" delay={0.2}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl leading-tight"
              style={bc700}
            >
              Ideal{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #22C55E, #4ADE80)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Electric Way
              </span>
            </h1>
          </SectionReveal>
          <SectionReveal animation="fade-up" delay={0.3}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-4" style={ms500}>
              Mobilidade elétrica corporativa com a confiança de quem é referência em radiocomunicação há 18 anos.
            </p>
          </SectionReveal>
          <SectionReveal animation="fade-up" delay={0.4}>
            <p className="text-sm md:text-base text-white/55 max-w-2xl mb-10" style={ms400}>
              Soluções 100% elétricas para operações de segurança, facilities, logística interna e grandes
              infraestruturas. Locação corporativa com assistência técnica nacional, manutenção preventiva e frota
              reserva.
            </p>
          </SectionReveal>
          <SectionReveal animation="fade-up" delay={0.5}>
            <a
              href="https://wa.me/551127522520"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white rounded-2xl px-8 py-4 text-base transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                ...ms700,
                background: "linear-gradient(135deg, #22C55E, #16A34A)",
                boxShadow: "0 8px 32px rgba(34,197,94,0.4)",
              }}
            >
              Solicite uma Demonstração
              <ChevronRight size={18} />
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* ── 2. SOBRE A IEW ── */}
      <section className="relative z-10">
        <div
          className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #f0f7ff 0%, #e8f5e9 50%, #f0f7ff 100%)",
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <SectionReveal animation="fade-left" delay={0.1}>
                <div>
                  <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms600, color: "#22C55E" }}>
                    Quem somos
                  </span>
                  <h2 className="text-3xl md:text-4xl mb-6" style={{ ...ms700, color: "#0b2760" }}>
                    Uma evolução natural da{" "}
                    <span style={{ color: "#0E4AAD" }}>Ideal Rádios</span>
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ ...ms400, color: "#3a5a80" }}>
                    A Ideal Electric Way nasceu da necessidade real das operações dos nossos clientes. Eles já confiavam
                    na Ideal para garantir comunicação eficiente — agora levamos essa mesma filosofia de confiabilidade,
                    suporte técnico próprio e continuidade operacional para a mobilidade corporativa.
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
                    style={{
                      ...ms600,
                      background: "rgba(34,197,94,0.1)",
                      color: "#16A34A",
                      border: "1px solid rgba(34,197,94,0.2)",
                    }}
                  >
                    <Zap size={14} />
                    Modelo exclusivo de locação corporativa
                  </div>
                </div>
              </SectionReveal>
              <SectionReveal animation="fade-right" delay={0.2}>
                <div className="flex justify-center">
                  <img
                    src="/assets/iew/imgi_15_logo-iew-768x768.jpeg"
                    alt="Logo Ideal Electric Way"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-3xl object-contain shadow-xl"
                    style={{ background: "white" }}
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PRODUTOS ── */}
      <section id="produtos" className="relative z-20">
        <div
          className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 10% 20%, rgba(34,197,94,0.08) 0%, transparent 55%)," +
              "radial-gradient(ellipse 55% 45% at 85% 80%, rgba(14,74,173,0.10) 0%, transparent 50%)," +
              "linear-gradient(160deg, #0b2760 0%, #091e52 50%, #060e24 100%)",
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <SectionReveal animation="fade-up" delay={0.1}>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms600, color: "#4ADE80" }}>
                  Nossa frota
                </span>
                <h2 className="text-3xl md:text-4xl text-white mb-4" style={ms700}>
                  Veículos elétricos para{" "}
                  <span
                    style={{
                      backgroundImage: "linear-gradient(90deg,#22C55E,#4ADE80)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    cada operação
                  </span>
                </h2>
                <p className="max-w-2xl mx-auto" style={{ ...ms400, color: "rgba(200,233,248,0.65)" }}>
                  Cada modelo foi pensado para atender uma necessidade específica do mercado corporativo.
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {products.map((p, i) => (
                <SectionReveal key={p.name} animation="fade-up" delay={0.1 + i * 0.1}>
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] group"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(34,197,94,0.15)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-contain bg-white/5 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs text-white"
                        style={{ ...ms700, background: "rgba(34,197,94,0.85)", backdropFilter: "blur(4px)" }}
                      >
                        {p.name}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg text-white mb-1" style={ms700}>
                        {p.subtitle}
                      </h3>
                      <p className="text-sm mb-4" style={{ ...ms400, color: "rgba(200,233,248,0.65)" }}>
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1 rounded-full"
                            style={{
                              ...ms500,
                              color: "#4ADE80",
                              background: "rgba(34,197,94,0.1)",
                              border: "1px solid rgba(34,197,94,0.2)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. POR QUE ESCOLHER A IEW ── */}
      <section id="vantagens" className="relative z-30">
        <div
          className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #f0f7ff 0%, #ffffff 50%, #e8f5e9 100%)" }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <SectionReveal animation="fade-up" delay={0.1}>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms600, color: "#22C55E" }}>
                  Diferenciais
                </span>
                <h2 className="text-3xl md:text-4xl mb-4" style={{ ...ms700, color: "#0b2760" }}>
                  Por que escolher a{" "}
                  <span style={{ color: "#22C55E" }}>IEW</span>?
                </h2>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {advantages.map((a, i) => (
                <SectionReveal key={a.label} animation="fade-up" delay={0.1 + i * 0.08}>
                  <div
                    className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full"
                    style={{
                      background: "white",
                      border: "1px solid rgba(14,74,173,0.08)",
                      boxShadow: "0 2px 16px rgba(14,74,173,0.06)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(34,197,94,0.1)" }}
                    >
                      <a.icon size={22} style={{ color: "#22C55E" }} />
                    </div>
                    <h3 className="text-base mb-2" style={{ ...ms700, color: "#0b2760" }}>
                      {a.label}
                    </h3>
                    <p className="text-sm" style={{ ...ms400, color: "#5a7a9a" }}>
                      {a.desc}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SETORES ATENDIDOS ── */}
      <section id="setores" className="relative z-40">
        <div
          className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 80% 20%, rgba(34,197,94,0.10) 0%, transparent 55%)," +
              "linear-gradient(160deg, #0b2760 0%, #091e52 100%)",
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <SectionReveal animation="fade-up" delay={0.1}>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms600, color: "#4ADE80" }}>
                  Mercados
                </span>
                <h2 className="text-3xl md:text-4xl text-white mb-4" style={ms700}>
                  Setores atendidos
                </h2>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {sectors.map((s, i) => (
                <SectionReveal key={s.label} animation="fade-up" delay={0.05 + i * 0.05}>
                  <div
                    className="flex flex-col items-center gap-3 py-6 px-3 rounded-2xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(34,197,94,0.15)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <s.icon size={28} style={{ color: "#4ADE80" }} />
                    <span className="text-xs text-white text-center" style={ms600}>
                      {s.label}
                    </span>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. APLICAÇÕES ── */}
      <section className="relative z-50">
        <div
          className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #f0f7ff 0%, #e8f5e9 50%, #f0f7ff 100%)" }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <SectionReveal animation="fade-up" delay={0.1}>
              <div className="text-center mb-14">
                <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms600, color: "#22C55E" }}>
                  Como usar
                </span>
                <h2 className="text-3xl md:text-4xl mb-4" style={{ ...ms700, color: "#0b2760" }}>
                  Aplicações
                </h2>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {applications.map((a, i) => (
                <SectionReveal key={a.label} animation="fade-up" delay={0.1 + i * 0.08}>
                  <div
                    className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    style={{
                      background: "white",
                      border: "1px solid rgba(14,74,173,0.08)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(14,74,173,0.08)" }}
                    >
                      <a.icon size={18} style={{ color: "#0E4AAD" }} />
                    </div>
                    <div>
                      <h3 className="text-sm mb-1" style={{ ...ms700, color: "#0b2760" }}>
                        {a.label}
                      </h3>
                      <p className="text-xs" style={{ ...ms400, color: "#5a7a9a" }}>
                        {a.desc}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. DEPOIMENTO ── */}
      <section className="relative z-[60]">
        <div
          className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #0b2760 0%, #091e52 50%, #060e24 100%)",
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <SectionReveal animation="fade-up" delay={0.1}>
              <div className="max-w-3xl mx-auto text-center">
                <Quote size={40} style={{ color: "rgba(34,197,94,0.3)" }} className="mx-auto mb-6" />
                <blockquote
                  className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 italic"
                  style={ms400}
                >
                  "A Ideal Electric Way nasce para complementar o que já fazemos com excelência. Nossos clientes
                  precisam de agilidade, alcance e eficiência. A IEW entrega exatamente isso, com tecnologia limpa e a
                  robustez que o mercado corporativo exige."
                </blockquote>
                <div>
                  <p className="text-base text-white" style={ms700}>
                    Thiago Terra
                  </p>
                  <p className="text-sm" style={{ ...ms400, color: "rgba(200,233,248,0.50)" }}>
                    Head de Negócios — Ideal Electric Way
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── 8. CTA / CONTATO ── */}
      <section id="contato" className="relative z-[70]">
        <div
          className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #e8f5e9 0%, #f0f7ff 50%, #e8f5e9 100%)" }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <SectionReveal animation="fade-up" delay={0.1}>
              <div className="max-w-2xl mx-auto text-center">
                <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms600, color: "#22C55E" }}>
                  Contato
                </span>
                <h2 className="text-3xl md:text-4xl mb-4" style={{ ...ms700, color: "#0b2760" }}>
                  Solicite uma demonstração gratuita
                </h2>
                <p className="text-base mb-8" style={{ ...ms400, color: "#3a5a80" }}>
                  Disponibilizamos demonstrações, visitas técnicas e testes em campo para que sua empresa avalie o
                  desempenho dos veículos de acordo com sua operação.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                  <a
                    href="https://wa.me/551127522520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white rounded-2xl px-8 py-4 text-base transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{
                      ...ms700,
                      background: "linear-gradient(135deg, #22C55E, #16A34A)",
                      boxShadow: "0 8px 32px rgba(34,197,94,0.4)",
                    }}
                  >
                    <Phone size={18} />
                    Fale com um Consultor
                  </a>
                </div>

                <div className="flex flex-col items-center gap-2 text-sm" style={{ ...ms500, color: "#5a7a9a" }}>
                  <span className="flex items-center gap-2">
                    <Phone size={14} />
                    (11) 2752-2520
                  </span>
                  <a
                    href="https://www.idealeletricway.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-colors hover:text-[#22C55E]"
                  >
                    <ExternalLink size={14} />
                    www.idealeletricway.com.br
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="relative z-[80] py-8"
        style={{ background: "#060e24", borderTop: "1px solid rgba(34,197,94,0.1)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs" style={{ ...ms400, color: "rgba(200,233,248,0.30)" }}>
            © {new Date().getFullYear()} Ideal Electric Way — Uma divisão da Ideal Rádios do Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default IdealElectricWay;
