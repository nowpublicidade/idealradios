import { Radio, Wrench, Cpu, Award } from "lucide-react";
import { GlowCard } from "@/components/GlowCard";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };

const features = [
  {
    icon: Radio,
    title: "Locação Imediata",
    desc: "Rádios prontos para uso com entrega em até 48h em todo o Brasil.",
  },
  {
    icon: Wrench,
    title: "Assistência Autorizada",
    desc: "Centro técnico próprio com peças originais e equipe certificada Hytera.",
  },
  {
    icon: Cpu,
    title: "Sistemas DMR / TETRA",
    desc: "Tecnologia digital de ponta para comunicação clara e segura.",
  },
  {
    icon: Award,
    title: "Wings+ Hytera",
    desc: "Dealer autorizado com certificação internacional Wings+ Hytera.",
  },
];

const PorQueIdealSection = () => {
  return (
    <section id="produtos" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span
            className="text-xs uppercase tracking-[3px] block mb-3"
            style={{ ...ms, fontWeight: 600, color: "#2072B9" }}
          >
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4" style={ms}>
            Por que a <span style={{ color: "#0E4AAD" }}>Ideal</span>?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" style={{ ...ms, fontWeight: 400 }}>
            Combinamos tecnologia de ponta, estoque próprio e suporte técnico especializado para manter sua operação
            sempre conectada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <GlowCard key={i} intensity="soft" className="p-6 text-center space-y-4 group bg-white">
              <div
                className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{ background: "#EBF2FF" }}
              >
                <f.icon className="w-7 h-7" style={{ color: "#0E4AAD" }} />
              </div>
              <h3 className="text-lg text-gray-900" style={ms}>
                {f.title}
              </h3>
              <p className="text-sm text-gray-500" style={{ ...ms, fontWeight: 400 }}>
                {f.desc}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorQueIdealSection;
