import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Produtos", href: "#produtos" },
  { label: "Setores", href: "#setores" },
  { label: "Empresa", href: "#empresa" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ideal-dark/80 backdrop-blur-xl border-b border-ideal-700/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src="/assets/logo-branca.png" alt="Ideal Rádios" className="h-8" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ideal-200 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-gradient-to-r from-ideal-500 to-ideal-400 hover:from-ideal-400 hover:to-ideal-300 text-primary-foreground font-bold shadow-lg shadow-ideal-500/30"
          >
            <a href="#contato">Solicitar cotação</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ideal-dark/95 backdrop-blur-xl border-t border-ideal-700/30 px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-ideal-200 hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="w-full bg-gradient-to-r from-ideal-500 to-ideal-400 text-primary-foreground font-bold"
          >
            <a href="#contato" onClick={() => setOpen(false)}>Solicitar cotação</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
