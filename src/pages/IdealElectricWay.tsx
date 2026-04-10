import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";
import {
  Zap,
  BatteryFull,
  DollarSign,
  Wrench,
  Truck,
  Headphones,
  ShieldCheck,
  Building2,
  Plane,
  Factory,
  Anchor,
  Warehouse,
  Cross,
  FerrisWheel,
  CalendarCheck,
  GraduationCap,
  Sparkles,
  Phone,
  Mail,
  Globe,
  Send,
  Target,
  Search,
  FileCheck,
  Rocket,
  HeartHandshake,
} from "lucide-react";

/* ─── style helpers ─── */
const ms = (w: number) => ({ fontFamily: "'Montserrat', sans-serif", fontWeight: w });
const bw = (w: number) => ({ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: w });

/* ─── DATA ─── */
const products = [
  {
    id: "d70",
    name: "IEW-D70",
    subtitle: "Diciclo Elétrico Corporativo",
    img: "/assets/imgi_25_D70-1024x1024.jpeg",
    desc: "Solução ágil para ambientes internos e controlados. Mobilidade prática em shoppings, fábricas, galpões, centros logísticos, aeroportos e hospitais.",
  },
  {
    id: "d90",
    name: "IEW-D90",
    subtitle: "Diciclo Elétrico Outdoor",
    img: "/assets/imgi_24_D90.jpeg",
    desc: "Mobilidade elétrica para áreas externas e amplas. Ideal para estacionamentos, condomínios corporativos, parques industriais, áreas portuárias e orlas.",
  },
  {
    id: "m1o",
    name: "IEW-M1O",
    subtitle: "Moto Elétrica 10.000W",
    img: "/assets/imgi_29_M1O-1024x1024.jpeg",
    desc: "Alta autonomia para deslocamentos mais longos. Perfeita para grandes centros corporativos, campi universitários, shoppings e centros logísticos.",
  },
  {
    id: "c30",
    name: "IEW-C30",
    subtitle: "Cadeira de Rodas Motorizada",
    img: "/assets/imgi_3_Site-Mirage-SX-01-730x730-1-600x600-1.jpeg",
    desc: "Experiência mais confortável e inclusiva para clientes e visitantes em shoppings, hospitais, parques, aeroportos e centros corporativos.",
  },
];

const diferenciais = [
  {
    icon: Zap,
    title: "Zero Emissão",
    detail: "Veículos 100% elétricos, sem emissão de poluentes. Contribua para as metas ESG da sua empresa com mobilidade sustentável.",
  },
  {
    icon: BatteryFull,
    title: "Autonomia Elevada",
    detail: "Baterias de alta capacidade que garantem operação contínua durante todo o turno de trabalho sem necessidade de recarga.",
  },
  {
    icon: DollarSign,
    title: "Baixo Custo Operacional",
    detail: "Economia de até 80% comparado a veículos convencionais. Sem combustível, sem IPVA, manutenção simplificada.",
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    detail: "Plano de manutenção preventiva incluso no contrato de locação. Sua frota sempre em perfeito estado de funcionamento.",
  },
  {
    icon: Truck,
    title: "Frota Reserva",
    detail: "Garantia de continuidade operacional. Em caso de qualquer imprevisto, disponibilizamos veículo reserva imediatamente.",
  },
  {
    icon: Headphones,
    title: "Assistência Nacional",
    detail: "Suporte técnico especializado com cobertura em todo o território nacional. Atendimento ágil e personalizado.",
  },
];

const mercados = [
  { icon: Building2, label: "Shopping Centers" },
  { icon: Plane, label: "Aeroportos" },
  { icon: Factory, label: "Indústrias" },
  { icon: Anchor, label: "Portos" },
  { icon: Warehouse, label: "Condomínios Logísticos" },
  { icon: Cross, label: "Hospitais" },
  { icon: FerrisWheel, label: "Parques Temáticos" },
  { icon: CalendarCheck, label: "Eventos" },
  { icon: GraduationCap, label: "Campi Universitários" },
  { icon: Sparkles, label: "Facilities" },
];

const timeline = [
  {
    icon: Phone,
    title: "Contato Inicial",
    desc: "Fale com nosso time comercial e apresente sua operação.",
  },
  {
    icon: Search,
    title: "Análise de Necessidades",
    desc: "Avaliamos o cenário da sua empresa e propomos a solução ideal.",
  },
  {
    icon: Target,
    title: "Demonstração em Campo",
    desc: "Teste os veículos diretamente na sua operação.",
  },
  {
    icon: FileCheck,
    title: "Proposta Personalizada",
    desc: "Receba um plano de locação sob medida para sua empresa.",
  },
  {
    icon: Rocket,
    title: "Implantação e Treinamento",
    desc: "Entrega da frota com treinamento operacional completo.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Contínuo",
    desc: "Manutenção preventiva, assistência técnica e frota reserva garantida.",
  },
];

/* ═══════════════════════════  PAGE  ═══════════════════════════ */

const IdealElectricWay = () => {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    segmento: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Navbar />

      {/* ════════════ HERO ════════════ */}
      <section
        className="relative min-h-[92vh] flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage: "url('/assets/imgi_7_IMG_7356-1024x576.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        {/* overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(4,14,36,0.92) 0%, rgba(4,14,36,0.78) 45%, rgba(4,14,36,0.35) 100%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-6 pt-28 pb-16 max-w-5xl">
          <div className="max-w-2xl space-y-6">
            {/* badge */}
            <span
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase rounded-full px-4 py-1.5"
              style={{
                ...ms(600),
                color: "#1F9CD8",
                background: "rgba(31,156,216,0.12)",
                border: "1px solid rgba(31,156,216,0.25)",
              }}
            >
              <Zap size={13} /> Nova Divisão — Ideal Rádios do Brasil
            </span>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-white"
              style={bw(700)}
            >
              Ideal Electric Way
            </h1>

            <p className="text-base sm:text-lg leading-relaxed" style={{ ...ms(400), color: "rgba(200,233,248,0.82)" }}>
              Mobilidade elétrica corporativa com a confiança de quem é referência
              em radiocomunicação há 18 anos. Soluções 100% elétricas para
              segurança, facilities, logística interna e grandes infraestruturas.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contato-iew"
                className="inline-flex items-center gap-2 text-sm text-white rounded-xl px-6 py-3 transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  ...ms(700),
                  background: "linear-gradient(90deg, #0E4AAD, #1F9CD8)",
                  boxShadow: "0 4px 24px rgba(31,156,216,0.35)",
                }}
              >
                Solicite uma Demonstração
              </a>
              <a
                href="#frota-iew"
                className="inline-flex items-center gap-2 text-sm rounded-xl px-6 py-3 transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  ...ms(600),
                  color: "rgba(255,255,255,0.9)",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Conheça a Frota
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SOBRE ════════════ */}
      <SectionReveal animation="fade-up" duration={700}>
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <img
                src="/assets/imgi_15_logo-iew-768x768.jpeg"
                alt="Logo Ideal Electric Way"
                className="w-48 md:w-56 rounded-2xl"
                style={{ boxShadow: "0 8px 32px rgba(14,74,173,0.10)" }}
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-2xl sm:text-3xl" style={{ ...bw(700), color: "#0E4AAD" }}>
                Uma evolução natural da Ideal Rádios
              </h2>
              <p className="text-sm sm:text-base leading-relaxed" style={{ ...ms(400), color: "#3b4a5a" }}>
                A Ideal Electric Way nasceu da necessidade real das operações dos
                nossos clientes. Eles já confiavam na Ideal para garantir
                comunicação eficiente — agora levamos essa mesma filosofia de
                confiabilidade, suporte técnico próprio e continuidade operacional
                para a mobilidade corporativa.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ ...ms(400), color: "#3b4a5a" }}>
                Funcionamos exclusivamente no modelo de <strong style={{ color: "#0E4AAD" }}>locação corporativa</strong>,
                incluindo assistência técnica nacional, manutenção preventiva, frota
                reserva e atendimento especializado.
              </p>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ════════════ FROTA / PRODUTOS ════════════ */}
      <SectionReveal animation="fade-up" duration={700}>
        <section id="frota-iew" className="py-20" style={{ background: "#fff" }}>
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl" style={{ ...bw(700), color: "#0E4AAD" }}>
                Nossa Frota
              </h2>
              <p className="mt-2 text-sm" style={{ ...ms(400), color: "#6b7b8d" }}>
                Quatro soluções projetadas para uso corporativo profissional
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
                  style={{
                    border: "1px solid rgba(14,74,173,0.08)",
                    boxShadow: "0 2px 12px rgba(14,74,173,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(14,74,173,0.13)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(14,74,173,0.06)";
                  }}
                >
                  <div className="aspect-square bg-[#f8fafc] flex items-center justify-center p-4 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-1.5">
                    <span className="block text-xs tracking-wider uppercase" style={{ ...ms(700), color: "#1F9CD8" }}>
                      {p.name}
                    </span>
                    <h3 className="text-sm" style={{ ...ms(700), color: "#0a1e3d" }}>
                      {p.subtitle}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ ...ms(400), color: "#6b7b8d" }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ════════════ DIFERENCIAIS — FLIP CARDS ════════════ */}
      <SectionReveal animation="zoom-in" duration={700}>
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl" style={{ ...bw(700), color: "#0E4AAD" }}>
                Por que escolher a IEW?
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {diferenciais.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div
                    key={i}
                    className="group"
                    style={{ perspective: "800px", minHeight: "180px" }}
                  >
                    <div
                      className="relative w-full h-full transition-transform duration-500"
                      style={{
                        transformStyle: "preserve-3d",
                        minHeight: "180px",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "rotateY(180deg)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "rotateY(0deg)";
                      }}
                    >
                      {/* FRONT */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl p-5"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          background: "#fff",
                          border: "1px solid rgba(14,74,173,0.08)",
                          boxShadow: "0 2px 12px rgba(14,74,173,0.05)",
                        }}
                      >
                        <Icon size={28} strokeWidth={1.5} color="#0E4AAD" />
                        <span className="text-sm text-center" style={{ ...ms(700), color: "#0a1e3d" }}>
                          {d.title}
                        </span>
                      </div>

                      {/* BACK */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl p-5"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                          background: "linear-gradient(135deg, #0E4AAD, #1F9CD8)",
                        }}
                      >
                        <Icon size={22} strokeWidth={1.5} color="rgba(255,255,255,0.7)" />
                        <p className="text-xs text-center leading-relaxed text-white" style={ms(400)}>
                          {d.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ════════════ MERCADOS — GLASSMORPHISM ════════════ */}
      <SectionReveal animation="fade-up" duration={700}>
        <section
          className="py-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #071535 0%, #0E4AAD 50%, #1F9CD8 100%)",
          }}
        >
          {/* glow decorations */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #1F9CD8, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, #0E4AAD, transparent 70%)" }}
          />

          <div className="relative z-10 container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl text-white" style={bw(700)}>
                Mercados Atendidos
              </h2>
              <p className="mt-2 text-sm" style={{ ...ms(400), color: "rgba(200,233,248,0.6)" }}>
                Soluções para os mais diversos setores corporativos
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {mercados.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2.5 rounded-xl py-5 px-3 transition-all duration-300 hover:scale-105 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(255,255,255,0.16)";
                      el.style.borderColor = "rgba(255,255,255,0.30)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(255,255,255,0.08)";
                      el.style.borderColor = "rgba(255,255,255,0.15)";
                    }}
                  >
                    <Icon size={24} strokeWidth={1.5} color="rgba(255,255,255,0.85)" />
                    <span className="text-xs text-center leading-tight text-white" style={ms(500)}>
                      {m.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ════════════ TIMELINE — COMO FUNCIONA ════════════ */}
      <SectionReveal animation="fade-up" duration={700}>
        <section className="py-20" style={{ background: "#fff" }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl" style={{ ...bw(700), color: "#0E4AAD" }}>
                Como Funciona
              </h2>
              <p className="mt-2 text-sm" style={{ ...ms(400), color: "#6b7b8d" }}>
                Do primeiro contato à operação — um processo simples e personalizado
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* vertical line */}
              <div
                className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, #1F9CD8, #0E4AAD)" }}
              />

              {timeline.map((step, i) => {
                const Icon = step.icon;
                const isLeft = i % 2 === 0;
                return (
                  <SectionReveal
                    key={i}
                    animation={isLeft ? "fade-right" : "fade-left"}
                    delay={i * 80}
                    duration={600}
                  >
                    <div
                      className={`relative flex items-start gap-4 mb-10 ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* content card */}
                      <div
                        className={`flex-1 ml-14 md:ml-0 ${
                          isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                        }`}
                      >
                        <div
                          className="inline-block rounded-xl p-5"
                          style={{
                            background: "#f8fafc",
                            border: "1px solid rgba(14,74,173,0.06)",
                          }}
                        >
                          <h4 className="text-sm mb-1" style={{ ...ms(700), color: "#0a1e3d" }}>
                            {step.title}
                          </h4>
                          <p className="text-xs leading-relaxed" style={{ ...ms(400), color: "#6b7b8d" }}>
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* dot */}
                      <div
                        className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10"
                        style={{
                          background: "linear-gradient(135deg, #0E4AAD, #1F9CD8)",
                          boxShadow: "0 0 0 4px #fff, 0 4px 16px rgba(14,74,173,0.20)",
                        }}
                      >
                        <Icon size={16} color="#fff" strokeWidth={2} />
                      </div>

                      {/* spacer for the other side */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ════════════ QUOTE — THIAGO TERRA ════════════ */}
      <SectionReveal animation="fade-in" duration={800}>
        <section
          className="py-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #071535 0%, #0a2045 100%)",
          }}
        >
          {/* decorative quotes */}
          <div
            className="absolute top-6 left-8 text-[120px] leading-none select-none pointer-events-none"
            style={{ ...bw(800), color: "rgba(31,156,216,0.06)" }}
          >
            "
          </div>
          <div
            className="absolute bottom-2 right-8 text-[120px] leading-none select-none pointer-events-none"
            style={{ ...bw(800), color: "rgba(31,156,216,0.06)" }}
          >
            "
          </div>

          <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
            {/* accent bar */}
            <div
              className="mx-auto mb-6 w-12 h-1 rounded-full"
              style={{ background: "linear-gradient(90deg, #0E4AAD, #1F9CD8)" }}
            />

            <blockquote
              className="text-base sm:text-lg md:text-xl leading-relaxed italic text-white mb-6"
              style={ms(400)}
            >
              "A Ideal Electric Way nasce para complementar o que já fazemos com
              excelência. Nossos clientes precisam de agilidade, alcance e
              eficiência. A IEW entrega exatamente isso, com tecnologia limpa e a
              robustez que o mercado corporativo exige."
            </blockquote>

            {/* photo placeholder + name */}
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm"
                style={{
                  ...ms(700),
                  background: "linear-gradient(135deg, #0E4AAD, #1F9CD8)",
                  border: "2px solid rgba(31,156,216,0.4)",
                }}
              >
                TT
              </div>
              <div className="text-left">
                <p className="text-sm text-white" style={ms(700)}>
                  Thiago Terra
                </p>
                <p className="text-xs" style={{ ...ms(400), color: "rgba(200,233,248,0.55)" }}>
                  Head de Negócios — Ideal Electric Way
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ════════════ CONTATO / LEADS ════════════ */}
      <SectionReveal animation="zoom-in" delay={100} duration={700}>
        <section id="contato-iew" className="py-20" style={{ background: "#f8fafc" }}>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl" style={{ ...bw(700), color: "#0E4AAD" }}>
                Solicite uma Demonstração Gratuita
              </h2>
              <p className="mt-2 text-sm" style={{ ...ms(400), color: "#6b7b8d" }}>
                Disponibilizamos demonstrações, visitas técnicas e testes em campo
                para que sua empresa avalie o desempenho dos veículos.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {/* FORM */}
              <div className="md:col-span-3">
                <div
                  className="rounded-2xl p-6 sm:p-8 space-y-4"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(14,74,173,0.08)",
                    boxShadow: "0 4px 24px rgba(14,74,173,0.06)",
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome completo"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200"
                      style={{
                        ...ms(400),
                        border: "1px solid rgba(14,74,173,0.12)",
                        color: "#0a1e3d",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#1F9CD8")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(14,74,173,0.12)")}
                    />
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200"
                      style={{
                        ...ms(400),
                        border: "1px solid rgba(14,74,173,0.12)",
                        color: "#0a1e3d",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#1F9CD8")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(14,74,173,0.12)")}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200"
                      style={{
                        ...ms(400),
                        border: "1px solid rgba(14,74,173,0.12)",
                        color: "#0a1e3d",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#1F9CD8")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(14,74,173,0.12)")}
                    />
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Telefone / WhatsApp"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200"
                      style={{
                        ...ms(400),
                        border: "1px solid rgba(14,74,173,0.12)",
                        color: "#0a1e3d",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#1F9CD8")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(14,74,173,0.12)")}
                    />
                  </div>

                  <select
                    name="segmento"
                    value={formData.segmento}
                    onChange={handleChange}
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200 appearance-none"
                    style={{
                      ...ms(400),
                      border: "1px solid rgba(14,74,173,0.12)",
                      color: formData.segmento ? "#0a1e3d" : "#9ca3af",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%236b7b8d' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                    }}
                  >
                    <option value="" disabled>Segmento da empresa</option>
                    <option value="shopping">Shopping Center</option>
                    <option value="industria">Indústria</option>
                    <option value="aeroporto">Aeroporto</option>
                    <option value="hospital">Hospital</option>
                    <option value="logistico">Condomínio Logístico</option>
                    <option value="evento">Evento</option>
                    <option value="campus">Campus Universitário</option>
                    <option value="porto">Porto</option>
                    <option value="outro">Outro</option>
                  </select>

                  <textarea
                    name="mensagem"
                    placeholder="Mensagem (opcional)"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={3}
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200 resize-none"
                    style={{
                      ...ms(400),
                      border: "1px solid rgba(14,74,173,0.12)",
                      color: "#0a1e3d",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#1F9CD8")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(14,74,173,0.12)")}
                  />

                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 text-sm text-white rounded-xl px-6 py-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-95"
                    style={{
                      ...ms(700),
                      background: "linear-gradient(90deg, #0E4AAD, #1F9CD8)",
                      boxShadow: "0 4px 20px rgba(31,156,216,0.30)",
                    }}
                  >
                    <Send size={15} />
                    Solicitar Demonstração Gratuita
                  </button>
                </div>
              </div>

              {/* INFO LATERAL */}
              <div className="md:col-span-2 space-y-6">
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "linear-gradient(135deg, #0E4AAD, #1F9CD8)",
                  }}
                >
                  <h3 className="text-sm text-white mb-4" style={ms(700)}>
                    Fale com um Consultor
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/551127522520"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
                    >
                      <Phone size={16} />
                      <span className="text-sm" style={ms(500)}>
                        (11) 2752-2520
                      </span>
                    </a>
                    <a
                      href="mailto:contato@idealeletricway.com.br"
                      className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
                    >
                      <Mail size={16} />
                      <span className="text-sm" style={ms(500)}>
                        contato@idealeletricway.com.br
                      </span>
                    </a>
                    <a
                      href="https://www.idealeletricway.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
                    >
                      <Globe size={16} />
                      <span className="text-sm" style={ms(500)}>
                        www.idealeletricway.com.br
                      </span>
                    </a>
                  </div>
                </div>

                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(14,74,173,0.08)",
                  }}
                >
                  <ShieldCheck size={24} strokeWidth={1.5} color="#0E4AAD" className="mb-3" />
                  <h4 className="text-sm mb-1" style={{ ...ms(700), color: "#0a1e3d" }}>
                    Modelo de Locação Corporativa
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ ...ms(400), color: "#6b7b8d" }}>
                    Sem investimento inicial. Manutenção, suporte e frota reserva
                    inclusos. O mesmo padrão de confiabilidade que fez da Ideal
                    referência em radiocomunicação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      <Footer />
    </div>
  );
};

export default IdealElectricWay;
