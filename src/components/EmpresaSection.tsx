import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users } from "lucide-react";

const EmpresaSection = () => {
  return (
    <section id="empresa" className="relative z-10">
      <div className="bg-ideal-dark rounded-t-3xl -mt-8 py-20 relative overflow-hidden">
        {/* Orbs */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-ideal-500/15 rounded-full blur-[100px] animate-float-orb" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-ideal-400/10 rounded-full blur-[80px] animate-float-orb animation-delay-2000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground font-display">
              <span className="bg-gradient-to-r from-ideal-400 to-ideal-300 bg-clip-text text-transparent">18 anos</span>{" "}
              conectando operações em todo o Brasil
            </h2>
            <p className="mt-4 text-ideal-200/80 text-lg">
              A Ideal Rádios do Brasil é referência em radiocomunicação profissional, atendendo
              indústrias, shoppings, hospitais, eventos e operações de segurança com equipamentos
              Hytera e Motorola de última geração.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="bg-ideal-dark-card border-ideal-700/40">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ideal-500/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-ideal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-foreground">Crescimento contínuo</h3>
                  <p className="text-sm text-ideal-200/70 mt-1">
                    De uma pequena operação a líder nacional em locação de radiocomunicadores.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-ideal-dark-card border-ideal-700/40">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ideal-500/20 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-ideal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-foreground">Equipe especializada</h3>
                  <p className="text-sm text-ideal-200/70 mt-1">
                    Técnicos certificados Hytera e consultores prontos para dimensionar sua solução.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpresaSection;
