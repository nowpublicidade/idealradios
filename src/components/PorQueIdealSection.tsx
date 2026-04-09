import { Radio, Wrench, Cpu, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="produtos" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground font-display">
            Por que a <span className="text-ideal-500">Ideal</span>?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Combinamos tecnologia de ponta, estoque próprio e suporte técnico especializado para manter sua operação sempre conectada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card
              key={i}
              className="group border-ideal-200/50 hover:border-ideal-400/50 hover:shadow-lg hover:shadow-ideal-500/10 transition-all duration-300"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-xl bg-ideal-100 flex items-center justify-center group-hover:bg-ideal-500 transition-colors">
                  <f.icon className="w-7 h-7 text-ideal-500 group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorQueIdealSection;
