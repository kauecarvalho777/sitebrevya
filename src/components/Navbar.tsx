import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import logo from "@/assets/logo_brevya.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();

  const links = [
    { label: "A Brevya", href: "#sobre" },
    { label: "FlowCommerce", href: "#flow-commerce" },
    { label: "Cases", href: "#cases" },
    { label: "Imprensa", href: "#imprensa" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Brevya"
            className={`h-[62px] ${dark ? "" : "invert"}`}
          />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            )
          )}

          <button
            onClick={toggle}
            className="w-9 h-9 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Alternar tema"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contato"
            className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-gold-light transition-colors"
          >
            Fale com a Brevya
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground"
            aria-label="Alternar tema"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.href}
                to={l.href}
                className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            )
          )}
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
