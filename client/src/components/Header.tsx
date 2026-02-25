import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contactos", label: "Contactos" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          <Link href="/" data-testid="link-home-logo">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg" style={{ fontFamily: "Space Grotesk, sans-serif" }}>TL</span>
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                TEC <span className="text-primary">LICK</span>
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:935133610" className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="link-phone-header">
              <Phone className="w-4 h-4" />
              935 133 610
            </a>
            <Link href="/contactos">
              <Button data-testid="button-header-cta">Pedir Orçamento</Button>
            </Link>
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
        <div className="md:hidden border-t border-border bg-background" data-testid="nav-mobile">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block px-4 py-3 rounded-md text-sm font-medium cursor-pointer ${
                    location === link.href
                      ? "text-primary bg-accent"
                      : "text-foreground"
                  }`}
                  onClick={() => setMobileOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-2 border-t border-border">
              <a href="tel:935133610" className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground" data-testid="link-phone-mobile">
                <Phone className="w-4 h-4" />
                935 133 610
              </a>
              <Link href="/contactos">
                <Button className="w-full mt-2" onClick={() => setMobileOpen(false)} data-testid="button-mobile-cta">
                  Pedir Orçamento
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
