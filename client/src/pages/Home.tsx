import { useEffect, useRef, type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  Phone,
  Clock,
  Mail,
  ArrowDown,
} from "lucide-react";

const MAILTO = "mailto:Geral@teclick.pt?subject=Pedido%20de%20Or%C3%A7amento";

function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const services = [
  {
    icon: Smartphone,
    title: "Reparação de Telemóveis",
    desc: "iPhone e Android. Ecrãs, baterias, conectores e software. Reparações rápidas com peças de qualidade e garantia.",
    features: ["Substituição de ecrãs", "Troca de baterias", "Reparação de conectores", "Recuperação de dados"],
  },
  {
    icon: Monitor,
    title: "Reparação de Computadores",
    desc: "Windows e Mac. Diagnóstico completo, upgrades de hardware, remoção de vírus e otimização de performance.",
    features: ["Diagnóstico gratuito", "Upgrades SSD/RAM", "Remoção de malware", "Manutenção preventiva"],
  },
  {
    icon: Printer,
    title: "Impressão 3D",
    desc: "Prototipagem rápida e peças personalizadas. Transformamos ideias em objetos reais com tecnologia de ponta.",
    features: ["Prototipagem rápida", "Peças de substituição", "Maquetes à escala", "Materiais variados"],
  },
  {
    icon: Globe,
    title: "Criação de Websites",
    desc: "Sites institucionais modernos, rápidos e otimizados para SEO. Design responsivo que converte visitantes em clientes.",
    features: ["Design personalizado", "Otimização SEO", "Mobile-first", "Painel de gestão"],
  },
  {
    icon: ShoppingCart,
    title: "Lojas Online",
    desc: "E-commerce completo e pronto a vender. Pagamentos seguros, gestão de stock e design orientado à conversão.",
    features: ["Pagamentos seguros", "Gestão de stock", "Design de conversão", "Formação incluída"],
  },
  {
    icon: Bot,
    title: "Inteligência Artificial",
    desc: "Automação inteligente, chatbots e otimização de processos. Soluções de IA adaptadas ao seu negócio.",
    features: ["Chatbots inteligentes", "Automação de processos", "Análise de dados", "Consultoria IA"],
  },
];

const reasons = [
  { icon: Shield, title: "Confiança Total", desc: "Orçamento claro antes de qualquer intervenção. Sem surpresas, sem letras pequenas." },
  { icon: Zap, title: "Rapidez Extrema", desc: "A maioria das reparações no próprio dia. Valorizamos o seu tempo." },
  { icon: Users, title: "Atendimento Pessoal", desc: "Cada cliente é único. Ouvimos, entendemos e entregamos a solução certa." },
  { icon: MapPin, title: "Presença Local", desc: "Loja física em Vila do Conde. Estamos perto quando precisa de nós." },
];

const testimonials = [
  { name: "Ana Santos", role: "Empresária", text: "Levei o meu portátil com problemas graves e em poucas horas estava como novo. Serviço impecável e preço justo. Recomendo a 100%.", rating: 5 },
  { name: "Miguel Ferreira", role: "Designer Freelancer", text: "A TECLiCK criou o website da minha empresa. Resultado moderno, rápido e exatamente como eu imaginava. Superou as expectativas.", rating: 5 },
  { name: "Carla Oliveira", role: "Restauração", text: "Precisava de uma loja online urgente e entregaram tudo a tempo e com qualidade. Profissionais de verdade que percebem do negócio.", rating: 5 },
];

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }} />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]" style={{ background: "radial-gradient(circle, hsl(0 85% 50% / 0.12), transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, hsl(0 85% 50% / 0.06), transparent 70%)" }} />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: "radial-gradient(circle, hsl(0 85% 50% / 0.04), transparent 70%)" }} />
        </div>

        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary/60" />
          <div className="w-px h-32 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm mb-8" data-testid="badge-hero-location">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Vila do Conde, Portugal</span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6" data-testid="text-hero-title">
              Tecnologia
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-primary">sem limites</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10" data-testid="text-hero-subtitle">
              Reparamos. Criamos. Inovamos. Desde a reparação do seu equipamento
              até soluções com inteligência artificial. Tudo num único local.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={MAILTO}>
                <Button size="lg" className="text-base px-8 group" data-testid="button-hero-cta">
                  Pedir Orçamento
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="tel:935133610">
                <Button variant="outline" size="lg" className="text-base px-8" data-testid="button-hero-phone">
                  <Phone className="w-4 h-4 mr-2" />
                  935 133 610
                </Button>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="mt-20">
              <button onClick={() => scrollTo("#servicos")} className="text-muted-foreground flex flex-col items-center gap-2 mx-auto cursor-pointer" data-testid="button-scroll-down">
                <span className="text-xs uppercase tracking-widest">Explorar</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="servicos" className="py-24 sm:py-32 relative" data-testid="section-services">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs uppercase tracking-widest text-primary mb-4">
                Serviços
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4" data-testid="text-services-title">
                Soluções completas
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-muted-foreground text-lg">
                Do hardware ao software, do físico ao digital. Cobrimos todas as necessidades tecnológicas.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 80}>
                <Card className="group p-6 h-full border-border/50 hover-elevate transition-all duration-300 relative" data-testid={`card-service-${i}`}>
                  <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>
                    <div className="space-y-2">
                      {service.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="porque" className="py-24 sm:py-32 relative" data-testid="section-why-us">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]" style={{ background: "radial-gradient(circle, hsl(0 85% 50% / 0.06), transparent 70%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs uppercase tracking-widest text-primary mb-4">
                Diferenciação
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4" data-testid="text-why-title">
                Porquê a TECLiCK?
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-muted-foreground text-lg">
                Mais do que uma loja de tecnologia. Um parceiro que entende e resolve.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="text-center group" data-testid={`card-reason-${i}`}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:border-primary/40 transition-colors duration-300">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto">
            {[
              { number: "5000+", label: "Reparações" },
              { number: "50+", label: "Websites" },
              { number: "4.9", label: "Avaliação" },
              { number: "98%", label: "Satisfação" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="text-center" data-testid={`stat-${i}`}>
                  <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">
                    {stat.number}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="testemunhos" className="py-24 sm:py-32 relative" data-testid="section-testimonials">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs uppercase tracking-widest text-primary mb-4">
                Testemunhos
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4" data-testid="text-testimonials-title">
                Clientes satisfeitos
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-muted-foreground text-lg">
                A confiança dos nossos clientes é o nosso melhor portfólio.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 100}>
                <Card className="p-6 border-border/50 h-full" data-testid={`card-testimonial-${i}`}>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80 mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contactos" className="py-24 sm:py-32 relative" data-testid="section-contact">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px]" style={{ background: "radial-gradient(circle, hsl(0 85% 50% / 0.06), transparent 70%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs uppercase tracking-widest text-primary mb-4">
                Contacto
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4" data-testid="text-contact-title">
                Vamos conversar
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-muted-foreground text-lg">
                Tem um projeto em mente ou precisa de ajuda? Fale connosco sem compromisso.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <FadeIn>
              <Card className="p-6 border-border/50 text-center group hover-elevate" data-testid="card-contact-email">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:border-primary/40 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-1">Email</h3>
                <a href={MAILTO} className="text-primary text-sm font-medium" data-testid="link-contact-email">
                  Geral@teclick.pt
                </a>
              </Card>
            </FadeIn>

            <FadeIn delay={100}>
              <Card className="p-6 border-border/50 text-center group hover-elevate" data-testid="card-contact-phone">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:border-primary/40 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-1">Telefone</h3>
                <a href="tel:935133610" className="text-primary text-sm font-medium" data-testid="link-contact-phone">
                  935 133 610
                </a>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="p-6 border-border/50 text-center group hover-elevate" data-testid="card-contact-location">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:border-primary/40 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-1">Morada</h3>
                <p className="text-muted-foreground text-sm">Av. Portas Fronhas 264</p>
                <p className="text-muted-foreground text-sm">4480-004 Vila do Conde</p>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-border/50" data-testid="card-hours">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2">Horário</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <div className="flex justify-between gap-6">
                        <span>Segunda a Sexta</span>
                        <span>10:00-12:30 | 14:30-19:00</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span>Sábado</span>
                        <span>10:00-13:00</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span>Domingo</span>
                        <span className="text-primary/70">Encerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="rounded-md overflow-hidden border border-border/50" data-testid="map-contact">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.5!2d-8.7437!3d41.3514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIxJzA1LjAiTiA4wrA0NCczNC4wIlc!5e0!3m2!1spt-PT!2spt!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "180px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização TECLiCK"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="text-center mt-12">
              <a href={MAILTO}>
                <Button size="lg" className="text-base px-10 group" data-testid="button-contact-cta">
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Email
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 sm:py-28 relative overflow-hidden" data-testid="section-cta-final">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4" data-testid="text-cta-title">
              Pronto para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">futuro</span>?
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fale connosco hoje e receba um orçamento gratuito. Sem compromisso, sem complicações.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={MAILTO}>
                <Button size="lg" className="text-base px-8 group" data-testid="button-cta-final">
                  Começar Agora
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="tel:935133610">
                <Button variant="outline" size="lg" className="text-base px-8" data-testid="button-cta-phone">
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
