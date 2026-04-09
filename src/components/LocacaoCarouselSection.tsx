import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GripHorizontal } from "lucide-react";

const locacaoRadios = [
  { name: "HP786", img: "/assets/radios/imgi_6_HP786-680x680.png", tag: "DMR", desc: "Display colorido, GPS, Bluetooth 5.0" },
  { name: "HP706", img: "/assets/radios/imgi_7_HP706-680x680.png", tag: "DMR", desc: "IP68, Criptografia AES-256" },
  { name: "HP686", img: "/assets/radios/imgi_8_HP686-680x680.png", tag: "DMR", desc: "Compacto, áudio HD, longa bateria" },
  { name: "HP606", img: "/assets/radios/imgi_9_HP606-680x680.png", tag: "DMR", desc: "IP67, robusto, entrada simplificada" },
  { name: "HP506", img: "/assets/radios/imgi_10_HP506-7-680x680.png", tag: "DMR", desc: "Ultra compacto, ideal para eventos" },
  { name: "PT890", img: "/assets/radios/imgi_4_PT890-680x680.png", tag: "DMR", desc: "Tela grande, GPS + BeiDou" },
  { name: "PT590", img: "/assets/radios/imgi_5_PT590-680x680.png", tag: "DMR", desc: "Design slim, MIL-STD-810" },
  { name: "PNC-380", img: "/assets/radios/imgi_12_PNC-380-3.png", tag: "PoC 4G", desc: "Push-to-talk via rede celular" },
];

const LocacaoCarouselSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragged, setDragged] = useState(false);

  return (
    <section className="relative z-10">
      <div className="bg-ideal-dark rounded-t-3xl -mt-8 py-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-ideal-500/15 rounded-full blur-[100px] animate-float-orb" />

        <div className="container mx-auto px-4 relative z-10 mb-8">
          <span className="text-xs font-bold uppercase tracking-[3px] text-ideal-300 block text-center mb-4">
            Locação de radiocomunicadores
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary-foreground font-display mb-4">
            Rádios na sua mão.{" "}
            <span className="bg-gradient-to-r from-ideal-400 to-ideal-300 bg-clip-text text-transparent">
              No prazo que você precisa.
            </span>
          </h2>
          <p className="text-center text-ideal-200/70 max-w-2xl mx-auto">
            Sem burocracia, sem estoque parado, sem preocupação com manutenção. Você aluga, a gente entrega funcionando.
          </p>
        </div>

        {/* Drag carousel */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef}>
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-44 bg-gradient-to-r from-ideal-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-44 bg-gradient-to-l from-ideal-dark to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4 px-8"
            drag="x"
            dragConstraints={containerRef}
            onDragStart={() => setDragged(true)}
            style={{ width: "max-content" }}
          >
            {locacaoRadios.map((radio) => (
              <div
                key={radio.name}
                className="w-[280px] flex-shrink-0 rounded-2xl overflow-hidden border border-ideal-500/15 hover:border-ideal-500/45 bg-ideal-800/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-ideal-900/50 p-6 flex items-center justify-center h-[220px]">
                  <img src={radio.img} alt={radio.name} className="h-40 object-contain" loading="lazy" />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black text-primary-foreground font-display">{radio.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-ideal-500/15 text-ideal-300 border border-ideal-500/30">
                      {radio.tag}
                    </span>
                  </div>
                  <p className="text-xs text-ideal-200/55">{radio.desc}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-ideal-500/30 text-ideal-300 hover:bg-ideal-500/10 font-bold"
                  >
                    <a href="#contato">Solicitar locação</a>
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>

          {!dragged && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-ideal-300/50 text-xs font-semibold animate-pulse z-20">
              <GripHorizontal size={14} />
              arraste para explorar
            </div>
          )}
        </div>

        <div className="container mx-auto px-4 mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-ideal-500 to-ideal-400 text-primary-foreground font-bold shadow-xl shadow-ideal-500/30"
          >
            <a href="#contato">Verificar disponibilidade e solicitar proposta</a>
          </Button>
          <p className="text-xs text-ideal-200/40 mt-3">Resposta em até 2h úteis · Cotação gratuita</p>
        </div>
      </div>
    </section>
  );
};

export default LocacaoCarouselSection;
