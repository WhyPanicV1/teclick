import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Heart,
  Wrench,
  Phone,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Foco no Resultado",
    desc: "Não vendemos tecnologia por vender. Encontramos a solução que resolve o seu problema concreto.",
  },
  {
    icon: Lightbulb,
    title: "Conhecimento Real",
    desc: "Experiência prática em reparações, desenvolvimento web e implementação de soluções digitais.",
  },
  {
    icon: Heart,
    title: "Relação de Proximidade",
    desc: "Somos uma equipa local que conhece os clientes pelo nome. Cada pessoa é tratada com atenção individual.",
  },
  {
    icon: Wrench,
    title: "Versatilidade",
    desc: "Da reparação de um ecrã partido à implementação de IA no seu negócio. Cobrimos todo o espectro tecnológico.",
  },
];

export default function About() {
  return (
    <div>
      <section className="bg-foreground text-background py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }} data-testid="text-about-title">
              Sobre a <span className="text-primary">TEC LICK</span>
            </h1>
            <p className="text-lg opacity-70 leading-relaxed">
              Uma equipa apaixonada por tecnologia, dedicada a resolver problemas reais de pessoas e empresas em Vila do Conde.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-foreground leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }} data-testid="text-about-story-title">
              A nossa história
            </h2>
            <p className="text-muted-foreground">
              A TEC LICK nasceu de uma convicção simples: a tecnologia deve facilitar a vida, não complicá-la. Instalada em Vila do Conde, começámos pela reparação de telemóveis e computadores, e rapidamente percebemos que os nossos clientes precisavam de mais.
            </p>
            <p className="text-muted-foreground">
              Empresas locais que queriam entrar no digital mas não sabiam por onde começar. Profissionais que precisavam de um website mas não queriam lidar com processos complexos. Pessoas com ideias que podiam ganhar forma com impressão 3D.
            </p>
            <p className="text-muted-foreground">
              Foi assim que evoluímos para uma solução tecnológica completa. Hoje, reparamos equipamentos, criamos presença digital para negócios, desenvolvemos lojas online e implementamos soluções com inteligência artificial. Tudo com a mesma filosofia: resolver problemas reais, com competência e sem complicações.
            </p>
            <p className="text-muted-foreground">
              Não somos uma grande empresa impessoal. Somos uma equipa técnica, acessível e comprometida com cada cliente que entra pela nossa porta ou nos contacta online. Conhecemos os nossos clientes pelo nome e tratamos cada projeto como se fosse nosso.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-accent/30" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }} data-testid="text-values-title">
              O que nos define
            </h2>
            <p className="text-muted-foreground text-lg">
              Os princípios que orientam o nosso trabalho todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <div key={i} className="flex items-start gap-4" data-testid={`card-value-${i}`}>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Reparações" },
              { number: "50+", label: "Websites Criados" },
              { number: "4.9", label: "Avaliação Média" },
              { number: "98%", label: "Clientes Satisfeitos" },
            ].map((stat, i) => (
              <div key={i} data-testid={`stat-${i}`}>
                <p className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }} data-testid="text-about-cta-title">
            Quer conhecer-nos melhor?
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Visite a nossa loja em Vila do Conde ou entre em contacto. Estamos prontos para ajudar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contactos">
              <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-about-cta">
                Entrar em Contacto
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:935133610">
              <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground" data-testid="button-about-phone">
                <Phone className="w-4 h-4 mr-2" />
                935 133 610
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
