import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logoPath from "@assets/WhatsApp_Image_2026-02-25_at_10.26.56_1772015271484.jpeg";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#porque", label: "Porquê Nós" },
  { href: "#testemunhos", label: "Testemunhos" },
  { href: "#contactos", label: "Contactos" },
];

const MAILTO = "mailto:Geral@teclick.pt?subject=Pedido%20de%20Or%C3%A7amento";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} data-testid="link-home-logo" className="shrink-0">
            <div className="h-10 sm:h-12 px-2 rounded-md bg-[#e8e8e8] flex items-center justify-center">
              <img src={logoPath} alt="TECLiCK" className="h-8 sm:h-10 w-auto" />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground transition-colors cursor-pointer"
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:935133610" className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="link-phone-header">
              <Phone className="w-4 h-4" />
              935 133 610
            </a>
            <a href={MAILTO}>
              <Button data-testid="button-header-cta">
                Pedir Orçamento
              </Button>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl" data-testid="nav-mobile">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="block w-full text-left px-4 py-3 rounded-md text-sm font-medium text-foreground cursor-pointer"
                onClick={() => scrollTo(link.href)}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-border/50">
              <a href="tel:935133610" className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground" data-testid="link-phone-mobile">
                <Phone className="w-4 h-4" />
                935 133 610
              </a>
              <a href={MAILTO}>
                <Button className="w-full mt-2" data-testid="button-mobile-cta">
                  Pedir Orçamento
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
