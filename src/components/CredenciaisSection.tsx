import { Shield, Building2, MapPin, Clock } from "lucide-react";

const badges = [
  { icon: Shield, label: "18 anos de mercado" },
  { icon: Building2, label: "200+ empresas atendidas" },
  { icon: MapPin, label: "Cobertura nacional" },
  { icon: Clock, label: "Assistência em até 48h" },
];

const CredenciaisSection = () => {
  return (
    <section className="relative z-10 -mt-8">
      <div className="bg-background rounded-t-3xl pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-ideal-100/60 border border-ideal-200/60"
              >
                <badge.icon className="w-6 h-6 text-ideal-500 shrink-0" />
                <span className="text-sm font-bold text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredenciaisSection;
