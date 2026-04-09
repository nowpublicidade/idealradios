import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { GlowCard } from "@/components/GlowCard";

const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };

const diferenciais = [
  "Técnicos certificados pela Motorola e pela Hytera",
  "Peças 100% originais — sem paralelo, sem risco",
  "Atendimento em até 48h úteis",
  "Manutenção preventiva e corretiva",
  "Atendimento in loco para grandes frotas",
  "Orçamento antes de qualquer serviço",
];

const dmrItems = [
  "Projeto de cobertura sob medida para sua área",
  "Implantação de rede DMR Tier II e III",
  "Software de despacho com mapa em tempo real",
  "GPS e rastreamento de equipes integrados",
  "Criptografia para operações sensíveis",
  "Treinamento da equipe incluído",
];

const ServicosSection = () => {
  return (
    <section id="setores" className="relative z-10">
      <div className="bg-background rounded-t-3xl -mt-8 py-20">
        <div className="container mx-auto px-4">
          {/* ── Assistência técnica ── */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Imagem */}
            <div className="relative">
              <img
                src="/assets/radios/imgi_17_ideal-radios-assitencia-tecnica-especializada-600x400.jpeg"
                alt="Assistência técnica Ideal Rádios"
                className="rounded-2xl w-full object-cover shadow-lg"
                loading="lazy"
              />
              <div
                className="absolute -bottom-4 -right-4 rounded-xl px-4 py-2 text-sm shadow-lg text-white"
                style={{ ...ms, background: "linear-gradient(90deg, #0E4AAD, #1F9CD8)" }}
              >
                48h de atendimento
              </div>
            </div>

            {/* Texto */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[3px]" style={{ ...ms, fontWeight: 600, color: "#1F9CD8" }}>
                Assistência técnica autorizada
              </span>
              <h2 className="text-3xl md:text-4xl text-foreground" style={ms}>
                Seu rádio quebrou. A gente resolve em até <span style={{ color: "#1F9CD8" }}>48h</span>.
              </h2>
              <p className="text-muted-foreground leading-relaxed" style={{ ...ms, fontWeight: 400 }}>
                Não manda pra fabricante esperar meses. A Ideal tem laboratório próprio, técnicos certificados e peças
                originais em estoque.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {diferenciais.map((d, i) => (
                  <GlowCard key={i} intensity="soft" className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#1F9CD8" }} />
                      <span className="text-sm text-foreground" style={{ ...ms, fontWeight: 500 }}>
                        {d}
                      </span>
                    </div>
                  </GlowCard>
                ))}
              </div>

              <Button
                asChild
                className="text-white"
                style={{
                  ...ms,
                  background: "linear-gradient(90deg, #0E4AAD, #1F9CD8)",
                  boxShadow: "0 8px 24px rgba(31,156,216,0.30)",
                }}
              >
                <a href="#contato">Solicitar assistência técnica agora</a>
              </Button>
              <p className="text-xs text-muted-foreground" style={{ ...ms, fontWeight: 400 }}>
                Diagnóstico sem compromisso · Peça original garantida
              </p>
            </div>
          </div>

          {/* ── Sistemas DMR ── */}
          <div className="mt-24 max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <span className="text-xs uppercase tracking-[3px]" style={{ ...ms, fontWeight: 600, color: "#1F9CD8" }}>
                  Sistemas DMR e TETRA
                </span>
                <h2 className="text-3xl md:text-4xl text-foreground" style={ms}>
                  Enquanto você conserta o antigo, <span style={{ color: "#1F9CD8" }}>pensa no novo</span>.
                </h2>
                <p className="text-muted-foreground leading-relaxed" style={{ ...ms, fontWeight: 400 }}>
                  Sistema analógico cansou? Interferência, alcance limitado, sem registro de chamada, sem GPS? A
                  migração para digital é mais simples do que parece — e a Ideal faz tudo.
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {dmrItems.map((item, i) => (
                    <GlowCard key={i} intensity="soft" className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#1F9CD8" }} />
                        <span className="text-sm text-foreground" style={{ ...ms, fontWeight: 500 }}>
                          {item}
                        </span>
                      </div>
                    </GlowCard>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  style={{
                    ...ms,
                    borderColor: "rgba(31,156,216,0.40)",
                    color: "#1F9CD8",
                  }}
                >
                  <a href="#contato">Quero entender como migrar para digital</a>
                </Button>
                <p className="text-xs text-muted-foreground" style={{ ...ms, fontWeight: 400 }}>
                  Consultoria gratuita · Sem compromisso
                </p>
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
