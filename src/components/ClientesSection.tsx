const clientLogos = [
  { src: "/assets/clientes/imgi_3_logo-apas.jpeg", alt: "APAS" },
  { src: "/assets/clientes/imgi_5_logo-comgas.jpeg", alt: "Comgás" },
  { src: "/assets/clientes/imgi_6_logo-sirio-libanes.jpeg", alt: "Sírio-Libanês" },
  { src: "/assets/clientes/imgi_8_logo-sodexo.jpeg", alt: "Sodexo" },
  { src: "/assets/clientes/imgi_10_logo-valid.jpeg", alt: "Valid" },
  { src: "/assets/clientes/imgi_12_logo-votorantim.jpeg", alt: "Votorantim" },
  { src: "/assets/clientes/imgi_9_logo-temon.jpeg", alt: "Temon" },
  { src: "/assets/clientes/imgi_11_logo-verzani-1.jpeg", alt: "Verzani" },
  { src: "/assets/clientes/imgi_4_logo-atrium-shopping-1.jpeg", alt: "Atrium Shopping" },
  { src: "/assets/clientes/imgi_7_logo-parque-das-bandeiras-shopping.jpeg", alt: "Parque das Bandeiras" },
];

const LogoRow = ({ direction }: { direction: "left" | "right" }) => {
  const logos = [...clientLogos, ...clientLogos];
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div
        className={`flex gap-8 items-center ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{ width: "max-content" }}
      >
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-12 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

const ClientesSection = () => {
  return (
    <section className="relative z-10">
      <div className="bg-background rounded-t-3xl -mt-8 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-foreground font-display mb-12">
            Empresas que <span className="text-ideal-500">confiam</span> na Ideal
          </h2>
        </div>
        <div className="space-y-6">
          <LogoRow direction="left" />
          <LogoRow direction="right" />
        </div>
      </div>
    </section>
  );
};

export default ClientesSection;
