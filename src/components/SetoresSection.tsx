import { Building2, ShieldCheck, Calendar, Factory, Hotel, ShoppingBag, Truck, Stethoscope } from "lucide-react";
import { GlowCard } from "@/components/GlowCard";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms4 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const ms5 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 500 };
const ms6 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };

const setores = [
  { icon: ShieldCheck, label: "Segurança patrimonial" },
  { icon: ShoppingBag, label: "Shoppings e varejo" },
  { icon: Stethoscope, label: "Hospitais e saúde" },
  { icon: Calendar, label: "Eventos e feiras" },
  { icon: Factory, label: "Indústria e petroquímica" },
  { icon: Truck, label: "Logística e transporte" },
  { icon: Building2, label: "Construção civil" },
  { icon: Hotel, label: "Hotelaria" },
];

const SetoresSection = () => {
  return (
    <section className="relative z-10">
      <div
        className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 10% 20%, rgba(91,200,239,0.14) 0%, transparent 55%)," +
            "radial-gradient(ellipse 55% 45% at 85% 80%, rgba(31,156,216,0.12) 0%, transparent 50%)," +
            "linear-gradient(160deg, #0f3278 0%, #0b2760 50%, #091e52 100%)",
        }}
      >
        {/* orbs */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none animate-float-orb"
          style={{
            background: "radial-gradient(circle, rgba(91,200,239,0.18) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-10 w-52 h-52 rounded-full pointer-events-none animate-float-orb animation-delay-2000"
          style={{
            background: "radial-gradient(circle, rgba(32,114,185,0.15) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[3px] block mb-3" style={{ ...ms6, color: "#7ec8ef" }}>
              Mercados que atendemos
            </span>
            <h2 className="text-3xl md:text-4xl text-white mb-4" style={ms}>
              Setores que{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg,#5bc8ef,#a8e0f8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                atendemos
              </span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ ...ms4, color: "rgba(200,233,248,0.70)" }}>
              De hospitais a petroquímicas, de eventos a shoppings. Cada operação tem sua necessidade — a gente
              dimensiona a solução certa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {setores.map((s, i) => (
              <GlowCard key={i} intensity="medium" className="flex flex-col items-center gap-3 p-6 text-center group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ background: "rgba(91,200,239,0.12)" }}
                >
                  <s.icon className="w-6 h-6" style={{ color: "#5bc8ef" }} />
                </div>
                <span className="text-sm text-white" style={ms5}>
                  {s.label}
                </span>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetoresSection;
