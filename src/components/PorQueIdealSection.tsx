import { Radio, Wrench, Cpu, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ms = { fontFamily: "'Montserrat', sans-serif" };

const features = [
  { icon: Radio, title: "Locação Imediata", desc: "Rádios prontos para uso com entrega em até 48h em todo o Brasil." },
  {
    icon: Wrench,
    title: "Assistência Autorizada",
    desc: "Centro técnico próprio com peças originais e equipe certificada Hytera.",
  },
  { icon: Cpu, title: "Sistemas DMR / TETRA", desc: "Tecnologia digital de ponta para comunicação clara e segura." },
  { icon: Award, title: "Wings+ Hytera", desc: "Dealer autorizado com certificação internacional Wings+ Hytera." },
];

const PorQueIdealSection = () => {
  return (
    <section id="produtos" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#2072B9] block mb-3" style={ms}>
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={ms}>
            Por que a <span className="text-[#0E4AAD]">Ideal</span>?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" style={ms}>
            Combinamos tecnologia de ponta, estoque próprio e suporte técnico especializado para manter sua operação
            sempre conectada.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card
              key={i}
              className="group border-gray-200 hover:border-[#0E4AAD]/40 hover:shadow-lg hover:shadow-[#0E4AAD]/10 transition-all duration-300 bg-white"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-xl bg-[#EBF2FF] flex items-center justify-center group-hover:bg-[#0E4AAD] transition-colors duration-300">
                  <f.icon className="w-7 h-7 text-[#0E4AAD] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900" style={ms}>
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500" style={ms}>
                  {f.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorQueIdealSection;
