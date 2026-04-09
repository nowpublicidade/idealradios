import { AlertTriangle, Radio, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const painPoints = [
  {
    title: "\"Nossos rádios vivem quebrando e a assistência demora semanas\"",
    desc: "A gente tem laboratório próprio, peças originais e atende em até 48h. Técnicos certificados pelas fabricantes, sem achismo.",
    icon: AlertTriangle,
  },
  {
    title: "\"A comunicação falha justamente nas horas críticas\"",
    desc: "Sistema antigo tem limite. Redes DMR digitais eliminam interferência, aumentam o alcance e gravam tudo. Implantamos do zero.",
    icon: Radio,
  },
  {
    title: "\"Preciso de rádios pro evento e não sei onde alugar com suporte\"",
    desc: "Temos estoque disponível para pronta-entrega. Você aluga, a gente entrega configurado, com técnico disponível durante o evento se precisar.",
    icon: Clock,
  },
];

const DorSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground font-display">
            Você está aqui porque algo{" "}
            <span className="text-ideal-500">não está funcionando</span> como deveria.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Talvez seus rádios estejam quebrando com frequência e você não tem onde levar. Ou a equipe está
            operando com equipamento velho que não alcança metade do local. Seja qual for o cenário: perder
            comunicação em campo não é só inconveniente — é risco operacional real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {painPoints.map((p, i) => (
            <Card key={i} className="border-ideal-200/50 hover:border-ideal-400/40 hover:shadow-lg hover:shadow-ideal-500/10 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-ideal-100 flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-ideal-500" />
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DorSection;
