import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_brevya.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Flow Commerce", href: "#flow-commerce" },
    { label: "Fundador", href: "#pablo" },
    { label: "Imprensa", href: "#imprensa" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Brevya" className="h-6" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-gold-light transition-colors"
          >
            Fale com a Brevya
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="block mt-2 text-center text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-md"
            onClick={() => setOpen(false)}
          >
            Fale com a Brevya
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
