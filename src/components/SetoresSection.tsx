import { Building2, ShieldCheck, Calendar, Factory, Hotel, ShoppingBag, Truck, Stethoscope } from "lucide-react";

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
    <section className="bg-ideal-100/40 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center text-foreground font-display mb-4">
          Setores que <span className="text-ideal-500">atendemos</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          De hospitais a petroquímicas, de eventos a shoppings. Cada operação tem sua necessidade — a gente dimensiona a solução certa.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {setores.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-ideal-200/50 hover:border-ideal-400/40 hover:shadow-lg hover:shadow-ideal-500/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-ideal-100 flex items-center justify-center group-hover:bg-ideal-500 transition-colors">
                <s.icon className="w-6 h-6 text-ideal-500 group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm font-bold text-foreground text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetoresSection;
