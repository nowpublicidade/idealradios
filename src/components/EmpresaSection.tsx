import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users } from "lucide-react";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };

const EmpresaSection = () => {
  return (
    <section id="empresa" className="relative z-10">
      <div
        className="rounded-t-3xl -mt-8 py-20 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 10% 20%, rgba(91,200,239,0.16) 0%, transparent 55%)," +
            "radial-gradient(ellipse 55% 45% at 85% 80%, rgba(31,156,216,0.14) 0%, transparent 50%)," +
            "linear-gradient(160deg, #0f3278 0%, #0b2760 50%, #091e52 100%)",
        }}
      >
        {/* Orbs blur */}
        <div
          className="absolute top-10 right-10 w-64 h-64 rounded-full animate-float-orb"
          style={{
            background: "radial-gradient(circle, rgba(91,200,239,0.20) 0%, transparent 65%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute bottom-10 left-10 w-48 h-48 rounded-full animate-float-orb animation-delay-2000"
          style={{
            background: "radial-gradient(circle, rgba(32,114,185,0.18) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white" style={ms}>
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #5bc8ef, #a8e0f8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                18 anos
              </span>{" "}
              conectando operações em todo o Brasil
            </h2>
            <p className="mt-4 text-lg" style={{ ...ms, fontWeight: 400, color: "rgba(200,233,248,0.78)" }}>
              A Ideal Rádios do Brasil é referência em radiocomunicação profissional, atendendo indústrias, shoppings,
              hospitais, eventos e operações de segurança com equipamentos Hytera e Motorola de última geração.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Card 1 */}
            <div
              className="rounded-2xl p-6 flex items-start gap-4"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(91,200,239,0.18)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(91,200,239,0.15)" }}
              >
                <TrendingUp className="w-6 h-6" style={{ color: "#5bc8ef" }} />
              </div>
              <div>
                <h3 className="text-lg text-white" style={ms}>
                  Crescimento contínuo
                </h3>
                <p className="text-sm mt-1" style={{ ...ms, fontWeight: 400, color: "rgba(200,233,248,0.65)" }}>
                  De uma pequena operação a líder nacional em locação de radiocomunicadores.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-2xl p-6 flex items-start gap-4"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(91,200,239,0.18)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(91,200,239,0.15)" }}
              >
                <Users className="w-6 h-6" style={{ color: "#5bc8ef" }} />
              </div>
              <div>
                <h3 className="text-lg text-white" style={ms}>
                  Equipe especializada
                </h3>
                <p className="text-sm mt-1" style={{ ...ms, fontWeight: 400, color: "rgba(200,233,248,0.65)" }}>
                  Técnicos certificados Hytera e consultores prontos para dimensionar sua solução.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpresaSection;
