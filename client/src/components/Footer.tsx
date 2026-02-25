import { Phone, MapPin, Clock } from "lucide-react";
import logoPath from "@assets/WhatsApp_Image_2026-02-25_at_10.26.56_1772015271484.jpeg";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logoPath} alt="TECLiCK" className="h-10 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              A sua solução tecnológica completa num único local. Particulares e empresas em Vila do Conde.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-muted-foreground">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => scrollTo("#servicos")} className="cursor-pointer" data-testid="link-footer-reparacao">Reparação de Telemóveis</button></li>
              <li><button onClick={() => scrollTo("#servicos")} className="cursor-pointer">Reparação de Computadores</button></li>
              <li><button onClick={() => scrollTo("#servicos")} className="cursor-pointer">Impressão 3D</button></li>
              <li><button onClick={() => scrollTo("#servicos")} className="cursor-pointer">Criação de Websites</button></li>
              <li><button onClick={() => scrollTo("#servicos")} className="cursor-pointer">Lojas Online</button></li>
              <li><button onClick={() => scrollTo("#servicos")} className="cursor-pointer">Soluções com IA</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-muted-foreground">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer">Início</button></li>
              <li><button onClick={() => scrollTo("#servicos")} className="cursor-pointer">Serviços</button></li>
              <li><button onClick={() => scrollTo("#porque")} className="cursor-pointer">Porquê Nós</button></li>
              <li><button onClick={() => scrollTo("#contactos")} className="cursor-pointer">Contactos</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-muted-foreground">Contactos</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>Av. Portas Fronhas 264, 4480-004 Vila do Conde</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <a href="tel:935133610" data-testid="link-footer-phone">935 133 610</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p>Seg-Sex: 10:00-12:30 | 14:30-19:00</p>
                  <p>Sáb: 10:00-13:00</p>
                  <p>Dom: Encerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TECLiCK. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
