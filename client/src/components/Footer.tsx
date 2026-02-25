import { Link } from "wouter";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-base" style={{ fontFamily: "Space Grotesk, sans-serif" }}>TL</span>
              </div>
              <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                TEC <span className="text-primary">LICK</span>
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              A sua solução tecnológica completa num único local. Particulares e empresas em Vila do Conde.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">Serviços</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link href="/servicos"><span className="cursor-pointer" data-testid="link-footer-reparacao-telemoveis">Reparação de Telemóveis</span></Link></li>
              <li><Link href="/servicos"><span className="cursor-pointer" data-testid="link-footer-reparacao-computadores">Reparação de Computadores</span></Link></li>
              <li><Link href="/servicos"><span className="cursor-pointer" data-testid="link-footer-impressao-3d">Impressão 3D</span></Link></li>
              <li><Link href="/servicos"><span className="cursor-pointer" data-testid="link-footer-websites">Criação de Websites</span></Link></li>
              <li><Link href="/servicos"><span className="cursor-pointer" data-testid="link-footer-lojas-online">Lojas Online</span></Link></li>
              <li><Link href="/servicos"><span className="cursor-pointer" data-testid="link-footer-ia">Soluções com IA</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">Navegação</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link href="/"><span className="cursor-pointer" data-testid="link-footer-inicio">Início</span></Link></li>
              <li><Link href="/servicos"><span className="cursor-pointer" data-testid="link-footer-servicos">Serviços</span></Link></li>
              <li><Link href="/sobre"><span className="cursor-pointer" data-testid="link-footer-sobre">Sobre Nós</span></Link></li>
              <li><Link href="/contactos"><span className="cursor-pointer" data-testid="link-footer-contactos">Contactos</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-80">Contactos</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Av. Portas Fronhas 264, 4480-004 Vila do Conde</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:935133610" data-testid="link-footer-phone">935 133 610</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>Seg-Sex: 10:00-12:30 | 14:30-19:00</p>
                  <p>Sáb: 10:00-13:00</p>
                  <p>Dom: Encerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm opacity-50">
          <p>&copy; {new Date().getFullYear()} TEC LICK. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
