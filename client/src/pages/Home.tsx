import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Smartphone,
  Monitor,
  Printer,
  Globe,
  ShoppingCart,
  Bot,
  ArrowRight,
  Shield,
  Zap,
  Users,
  MapPin,
  Star,
  CheckCircle,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Reparação de Telemóveis",
    desc: "iPhone e Android. Ecrãs, baterias, conectores e mais.",
  },
  {
    icon: Monitor,
    title: "Reparação de Computadores",
    desc: "Windows e Mac. Diagnóstico, upgrades e manutenção.",
  },
  {
    icon: Printer,
    title: "Impressão 3D",
    desc: "Prototipagem rápida e peças personalizadas sob medida.",
  },
  {
    icon: Globe,
    title: "Criação de Websites",
    desc: "Sites institucionais modernos e otimizados para resultados.",
  },
  {
    icon: ShoppingCart,
    title: "Lojas Online",
    desc: "E-commerce completo para vender online com confiança.",
  },
  {
    icon: Bot,
    title: "Soluções com IA",
    desc: "Automação, chatbots e otimização de processos com IA.",
  },
];

const reasons = [
  {
    icon: Shield,
    title: "Confiança e Transparência",
    desc: "Orçamento claro antes de qualquer intervenção. Sem surpresas.",
  },
  {
    icon: Zap,
    title: "Rapidez e Eficiência",
    desc: "A maioria das reparações é feita no próprio dia.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    desc: "Cada cliente é único. Ouvimos, entendemos e resolvemos.",
  },
  {
    icon: MapPin,
    title: "Presença Local",
    desc: "Loja física em Vila do Conde. Estamos perto de si.",
  },
];

const testimonials = [
  {
    name: "Ana Santos",
    role: "Empresária",
    text: "Levei o meu portátil com problemas graves e em poucas horas estava como novo. Serviço impecável e preço justo.",
    rating: 5,
  },
  {
    name: "Miguel Ferreira",
    role: "Designer",
    text: "A TEC LICK criou o website da minha empresa. Resultado moderno, rápido e exatamente como eu queria. Recomendo.",
    rating: 5,
  },
  {
    name: "Carla Oliveira",
    role: "Proprietária de Restaurante",
    text: "Precisava de uma loja online urgente e entregaram tudo a tempo. Profissionais de verdade.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-background/10 bg-background/5 text-sm mb-6" data-testid="badge-hero-location">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="opacity-80">Vila do Conde, Portugal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }} data-testid="text-hero-title">
              Tecnologia sem{" "}
              <span className="text-primary">complicações</span>
            </h1>

            <p className="text-lg sm:text-xl opacity-70 leading-relaxed max-w-2xl mb-8" data-testid="text-hero-subtitle">
              Reparamos telemóveis e computadores, criamos websites e lojas online, e implementamos soluções com inteligência artificial. Tudo num único local.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link href="/contactos">
                <Button size="lg" className="text-base px-8" data-testid="button-hero-cta">
                  Pedir Orçamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:935133610">
                <Button variant="outline" size="lg" className="text-base px-8 border-background/20 text-background" data-testid="button-hero-phone">
                  <Phone className="w-4 h-4 mr-2" />
                  935 133 610
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }} data-testid="text-services-title">
              O que fazemos por si
            </h2>
            <p className="text-muted-foreground text-lg">
              Soluções tecnológicas completas para particulares e empresas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Link href="/servicos" key={i}>
                <Card className="group p-6 cursor-pointer hover-elevate transition-all duration-200 h-full" data-testid={`card-service-${i}`}>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Saber mais <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-accent/30" data-testid="section-why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }} data-testid="text-why-title">
              Porquê a TEC LICK?
            </h2>
            <p className="text-muted-foreground text-lg">
              Mais do que uma loja de tecnologia. Um parceiro de confiança.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((reason, i) => (
              <div key={i} className="text-center p-6" data-testid={`card-reason-${i}`}>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-base mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }} data-testid="text-testimonials-title">
              O que dizem os nossos clientes
            </h2>
            <p className="text-muted-foreground text-lg">
              A satisfação dos nossos clientes é a nossa melhor referência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-6" data-testid={`card-testimonial-${i}`}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-accent/30" data-testid="section-map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }} data-testid="text-location-title">
                Visite-nos em Vila do Conde
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Estamos numa localização central e de fácil acesso. Venha conhecer-nos pessoalmente e descubra como podemos ajudar.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Morada</p>
                    <p className="text-muted-foreground text-sm">Av. Portas Fronhas 264, 4480-004 Vila do Conde</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Telefone</p>
                    <a href="tel:935133610" className="text-muted-foreground text-sm" data-testid="link-map-phone">935 133 610</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Horário</p>
                    <p className="text-muted-foreground text-sm">Seg-Sex: 10:00-12:30 | 14:30-19:00</p>
                    <p className="text-muted-foreground text-sm">Sáb: 10:00-13:00 | Dom: Encerrado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-md overflow-hidden border border-border" data-testid="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.5!2d-8.7437!3d41.3514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIxJzA1LjAiTiA4wrA0NCczNC4wIlc!5e0!3m2!1spt-PT!2spt!4v1"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização TEC LICK"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-primary text-primary-foreground" data-testid="section-cta-final">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }} data-testid="text-cta-title">
            Pronto para resolver o seu problema tecnológico?
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Fale connosco hoje e receba um orçamento gratuito. Sem compromisso, sem complicações.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contactos">
              <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-cta-final">
                Pedir Orçamento Gratuito
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:935133610">
              <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground" data-testid="button-cta-phone">
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
