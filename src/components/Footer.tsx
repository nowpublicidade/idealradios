const ms = { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 };
const ms4 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 400 };
const ms6 = { fontFamily: "'Montserrat', sans-serif", fontWeight: 600 };

const Footer = () => {
  return (
    <footer
      className="py-14"
      style={{
        background: "linear-gradient(160deg, #071535 0%, #040e24 100%)",
        borderTop: "1px solid rgba(31,156,216,0.12)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Marca */}
          <div className="space-y-3">
            <img src="/assets/logo-branca.png" alt="Ideal Rádios" className="h-8" />
            <p className="text-sm leading-relaxed" style={{ ...ms4, color: "rgba(200,233,248,0.50)" }}>
              Radiocomunicação profissional para operações que não podem parar.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-sm text-white" style={ms6}>
              Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Produtos", href: "#produtos" },
                { label: "Serviços", href: "#setores" },
                { label: "Empresa", href: "#empresa" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm transition-colors hover:opacity-90"
                  style={{ ...ms4, color: "rgba(200,233,248,0.50)" }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-3">
            <h4 className="text-sm text-white" style={ms6}>
              Contato
            </h4>
            <p className="text-sm" style={{ ...ms4, color: "rgba(200,233,248,0.50)" }}>
              (11) 99999-9999
            </p>
            <p className="text-sm" style={{ ...ms4, color: "rgba(200,233,248,0.50)" }}>
              contato@idealradios.com.br
            </p>
          </div>
        </div>

        {/* Linha final */}
        <div className="mt-10 pt-6 text-center" style={{ borderTop: "1px solid rgba(31,156,216,0.10)" }}>
          <p className="text-xs" style={{ ...ms4, color: "rgba(200,233,248,0.28)" }}>
            © {new Date().getFullYear()} Ideal Rádios do Brasil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
