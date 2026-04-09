const ms700 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms400 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const ms500 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 500 };

/* ─── Ilustração: 18 anos — relógio estilizado ─── */
const Illus18Anos = () => (
  <svg viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="30" y="10" width="160" height="110" rx="14" fill="#EBF5FC" />
    <circle cx="110" cy="64" r="38" fill="white" stroke="#DAEEF9" strokeWidth="2" />
    <line x1="110" y1="64" x2="110" y2="38" stroke="#0E4AAD" strokeWidth="3" strokeLinecap="round" />
    <line x1="110" y1="64" x2="130" y2="74" stroke="#1F9CD8" strokeWidth="3" strokeLinecap="round" />
    <circle cx="110" cy="64" r="4" fill="#0E4AAD" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const r1 = 34;
      const r2 = i % 3 === 0 ? 28 : 31;
      return (
        <line
          key={deg}
          x1={110 + r1 * Math.sin(rad)}
          y1={64 - r1 * Math.cos(rad)}
          x2={110 + r2 * Math.sin(rad)}
          y2={64 - r2 * Math.cos(rad)}
          stroke={i % 3 === 0 ? "#0E4AAD" : "#DAEEF9"}
          strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
          strokeLinecap="round"
        />
      );
    })}
    <rect x="72" y="8" width="76" height="26" rx="8" fill="#0E4AAD" />
    <text x="110" y="25" textAnchor="middle" fill="white" fontSize="13" fontFamily="Montserrat" fontWeight="700">
      18+ anos
    </text>
  </svg>
);

/* ─── Ilustração: 200+ empresas ─── */
const Illus200Empresas = () => (
  <svg viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="18" y="20" width="78" height="90" rx="12" fill="white" stroke="#DAEEF9" strokeWidth="1.5" />
    {[28, 42, 56, 70].map((y) => (
      <rect key={y} x="26" y={y} width={y === 28 ? 62 : y === 42 ? 38 : 50} height="8" rx="4" fill="#EBF5FC" />
    ))}
    <rect x="56" y="12" width="78" height="90" rx="12" fill="white" stroke="#DAEEF9" strokeWidth="1.5" />
    {[22, 36, 50, 64].map((y) => (
      <rect key={y} x="64" y={y} width={y === 22 ? 62 : y === 36 ? 38 : 50} height="8" rx="4" fill="#EBF5FC" />
    ))}
    <rect x="98" y="20" width="100" height="90" rx="12" fill="#0E4AAD" />
    {[32, 46, 60, 74].map((y) => (
      <rect
        key={y}
        x="110"
        y={y}
        width={y === 32 ? 76 : y === 46 ? 48 : 62}
        height="8"
        rx="4"
        fill="rgba(255,255,255,0.18)"
      />
    ))}
    <rect x="106" y="6" width="84" height="22" rx="6" fill="#1F9CD8" />
    <text x="148" y="21" textAnchor="middle" fill="white" fontSize="11" fontFamily="Montserrat" fontWeight="700">
      200+ clientes
    </text>
  </svg>
);

/* ─── Ilustração: Cobertura nacional ─── */
const IllusCobertura = () => (
  <svg viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="110" cy="68" rx="85" ry="55" fill="#EBF5FC" />
    <path
      d="M90 25 C100 20 115 22 125 28 C138 35 145 48 142 60 C140 70 148 78 145 88 C142 98 132 105 120 108 C108 111 96 108 88 100 C80 92 78 80 82 70 C86 60 80 50 82 40 C84 32 88 27 90 25Z"
      fill="white"
      stroke="#DAEEF9"
      strokeWidth="1.5"
    />
    {[
      { cx: 118, cy: 55, big: true },
      { cx: 96, cy: 72, big: false },
      { cx: 130, cy: 80, big: false },
      { cx: 104, cy: 40, big: false },
    ].map((p, i) => (
      <g key={i}>
        {p.big && <circle cx={p.cx} cy={p.cy} r="13" fill="rgba(31,156,216,0.15)" />}
        <circle
          cx={p.cx}
          cy={p.cy}
          r={p.big ? 7 : 5}
          fill={p.big ? "#0E4AAD" : "#1F9CD8"}
          stroke="white"
          strokeWidth="2"
        />
      </g>
    ))}
    <line x1="96" y1="72" x2="118" y2="55" stroke="#1F9CD8" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="130" y1="80" x2="118" y2="55" stroke="#1F9CD8" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="104" y1="40" x2="118" y2="55" stroke="#1F9CD8" strokeWidth="1" strokeDasharray="3 3" />
    <rect x="58" y="10" width="104" height="22" rx="6" fill="#0E4AAD" />
    <text x="110" y="25" textAnchor="middle" fill="white" fontSize="11" fontFamily="Montserrat" fontWeight="700">
      Cobertura nacional
    </text>
  </svg>
);

/* ─── Ilustração: 48h assistência ─── */
const Illus48h = () => (
  <svg viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="20" y="14" width="180" height="102" rx="14" fill="#EBF5FC" />
    <rect x="76" y="22" width="48" height="82" rx="10" fill="white" stroke="#DAEEF9" strokeWidth="1.5" />
    <rect x="89" y="12" width="5" height="16" rx="2.5" fill="#0E4AAD" />
    <rect x="82" y="30" width="36" height="22" rx="5" fill="#EBF5FC" />
    <text x="100" y="45" textAnchor="middle" fill="#0E4AAD" fontSize="11" fontFamily="Montserrat" fontWeight="700">
      48h
    </text>
    <circle cx="92" cy="64" r="4" fill="#EBF5FC" stroke="#DAEEF9" strokeWidth="1" />
    <circle cx="100" cy="64" r="4" fill="#0E4AAD" />
    <circle cx="108" cy="64" r="4" fill="#EBF5FC" stroke="#DAEEF9" strokeWidth="1" />
    <path d="M140 38 L130 58 L138 58 L126 84 L150 54 L140 54 Z" fill="#1F9CD8" opacity="0.9" />
    <path d="M56 45 L48 62 L55 62 L44 84 L63 60 L55 60 Z" fill="#0E4AAD" opacity="0.5" />
  </svg>
);

/* ─── Ilustração: Wings+ Hytera — medalha ─── */
const IllusWings = () => (
  <svg viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="40" y="10" width="140" height="110" rx="14" fill="#EBF5FC" />
    <circle cx="110" cy="65" r="34" fill="white" stroke="#DAEEF9" strokeWidth="2" />
    <circle cx="110" cy="65" r="26" fill="#0E4AAD" />
    <path d="M110 44 L114 57 L128 57 L117 65 L121 79 L110 71 L99 79 L103 65 L92 57 L106 57 Z" fill="#1F9CD8" />
    <rect x="103" y="10" width="14" height="30" rx="3" fill="#1F9CD8" />
    <rect x="56" y="106" width="108" height="22" rx="6" fill="#0E4AAD" />
    <text x="110" y="121" textAnchor="middle" fill="white" fontSize="11" fontFamily="Montserrat" fontWeight="700">
      Wings+ Hytera
    </text>
  </svg>
);

const cards = [
  {
    illus: <Illus18Anos />,
    title: "18 anos de mercado",
    desc: "Experiência consolidada em radiocomunicação profissional atendendo grandes operações em todo o Brasil.",
  },
  {
    illus: <Illus200Empresas />,
    title: "200+ empresas atendidas",
    desc: "Indústrias, shoppings, hospitais e eventos de todos os portes confiam na Ideal.",
  },
  {
    illus: <IllusCobertura />,
    title: "Cobertura nacional",
    desc: "Entregamos e prestamos suporte em todo o Brasil, com logística própria e parceiros regionais.",
  },
  {
    illus: <Illus48h />,
    title: "Assistência em até 48h",
    desc: "Laboratório próprio, técnicos certificados e peças originais para resolver rápido.",
  },
  {
    illus: <IllusWings />,
    title: "Certificação Wings+ Hytera",
    desc: "Dealer autorizado com o mais alto nível de certificação Hytera na América Latina.",
  },
];

const FeatureCard = ({ card }: { card: (typeof cards)[0] }) => (
  <div
    className="rounded-2xl border bg-white overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
    style={{
      borderColor: "rgba(31,156,216,0.15)",
      boxShadow: "0 2px 16px rgba(14,74,173,0.07)",
    }}
  >
    <div
      className="w-full flex items-center justify-center overflow-hidden"
      style={{ height: 150, background: "#F5FAFE" }}
    >
      {card.illus}
    </div>
    <div className="p-5 space-y-1.5">
      <h3 className="text-base text-gray-900" style={ms700}>
        {card.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-500" style={ms400}>
        {card.desc}
      </p>
    </div>
  </div>
);

const CredenciaisSection = () => (
  <section className="relative z-10 -mt-8">
    <div className="bg-white rounded-t-3xl pt-14 pb-10">
      <div className="container mx-auto px-4">
        <p className="text-xs uppercase tracking-[3px] text-center mb-2" style={{ ...ms500, color: "#1F9CD8" }}>
          Por que a Ideal
        </p>
        <h2 className="text-2xl md:text-3xl text-center text-gray-900 mb-10" style={ms700}>
          Números que provam nossa <span style={{ color: "#0E4AAD" }}>autoridade</span>
        </h2>

        {/* linha 1 — 3 cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cards.slice(0, 3).map((card, i) => (
              <FeatureCard key={i} card={card} />
            ))}
          </div>
          {/* linha 2 — 2 cards centralizados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:w-2/3 mx-auto">
            {cards.slice(3, 5).map((card, i) => (
              <FeatureCard key={i + 3} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CredenciaisSection;
