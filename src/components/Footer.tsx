const Footer = () => {
  return (
    <footer className="bg-ideal-dark py-12 border-t border-ideal-700/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <img src="/assets/logo-branca.png" alt="Ideal Rádios" className="h-8" />
            <p className="text-sm text-ideal-200/60">
              Radiocomunicação profissional para operações que não podem parar.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-primary-foreground text-sm">Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#produtos" className="text-sm text-ideal-200/60 hover:text-ideal-200 transition-colors">Produtos</a>
              <a href="#empresa" className="text-sm text-ideal-200/60 hover:text-ideal-200 transition-colors">Empresa</a>
              <a href="#contato" className="text-sm text-ideal-200/60 hover:text-ideal-200 transition-colors">Contato</a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-primary-foreground text-sm">Contato</h4>
            <p className="text-sm text-ideal-200/60">(11) 99999-9999</p>
            <p className="text-sm text-ideal-200/60">contato@idealradios.com.br</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-ideal-700/30 text-center">
          <p className="text-xs text-ideal-200/40">
            © {new Date().getFullYear()} Ideal Rádios do Brasil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
