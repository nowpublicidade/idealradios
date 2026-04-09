import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, CheckCircle } from "lucide-react";

const diferenciais = [
  "Técnicos certificados pela Motorola e pela Hytera",
  "Peças 100% originais — sem paralelo, sem risco",
  "Atendimento em até 48h úteis",
  "Manutenção preventiva e corretiva",
  "Atendimento in loco para grandes frotas",
  "Orçamento antes de qualquer serviço",
];

const ServicosSection = () => {
  return (
    <section id="setores" className="relative z-10">
      <div className="bg-background rounded-t-3xl -mt-8 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Image side */}
            <div className="relative">
              <img
                src="/assets/radios/imgi_17_ideal-radios-assitencia-tecnica-especializada-600x400.jpeg"
                alt="Assistência técnica Ideal Rádios"
                className="rounded-2xl w-full object-cover shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-ideal-500 text-primary-foreground rounded-xl px-4 py-2 font-bold text-sm shadow-lg">
                48h de atendimento
              </div>
            </div>

            {/* Text side */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[3px] text-ideal-400">
                Assistência técnica autorizada
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground font-display">
                Seu rádio quebrou. A gente resolve em até{" "}
                <span className="text-ideal-500">48h</span>.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Não manda pra fabricante esperar meses. A Ideal tem laboratório próprio,
                técnicos certificados e peças originais em estoque.
              </p>

              <ul className="space-y-2">
                {diferenciais.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-ideal-500 shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="bg-gradient-to-r from-ideal-500 to-ideal-400 text-primary-foreground font-bold shadow-lg shadow-ideal-500/30"
              >
                <a href="#contato">Solicitar assistência técnica agora</a>
              </Button>
              <p className="text-xs text-muted-foreground">Diagnóstico sem compromisso · Peça original garantida</p>
            </div>
          </div>

          {/* Sistemas DMR section */}
          <div className="mt-24 max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <span className="text-xs font-bold uppercase tracking-[3px] text-ideal-400">
                  Sistemas DMR e TETRA
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-foreground font-display">
                  Enquanto você conserta o antigo,{" "}
                  <span className="text-ideal-500">pensa no novo</span>.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sistema analógico cansou? Interferência, alcance limitado, sem registro de chamada, sem GPS?
                  A migração para digital é mais simples do que parece — e a Ideal faz tudo.
                </p>

                <ul className="space-y-2">
                  {[
                    "Projeto de cobertura sob medida para sua área",
                    "Implantação de rede DMR Tier II e III",
                    "Software de despacho com mapa em tempo real",
                    "GPS e rastreamento de equipes integrados",
                    "Criptografia para operações sensíveis",
                    "Treinamento da equipe incluído",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-ideal-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="border-ideal-400/40 text-ideal-500 hover:bg-ideal-100 font-bold"
                >
                  <a href="#contato">Quero entender como migrar para digital</a>
                </Button>
                <p className="text-xs text-muted-foreground">Consultoria gratuita · Sem compromisso</p>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src="/assets/radios/imgi_19_ideal-radios-servicos-especializados-600x400.jpeg"
                  alt="Sistemas DMR e TETRA"
                  className="rounded-2xl w-full object-cover shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
