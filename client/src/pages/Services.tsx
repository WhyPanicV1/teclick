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
  CheckCircle,
  Phone,
} from "lucide-react";

const services = [
  {
    id: "reparacao-telemoveis",
    icon: Smartphone,
    title: "Reparação de Telemóveis",
    description: "Reparamos iPhones e smartphones Android com peças de qualidade e garantia. Desde a substituição de ecrãs partidos até problemas de software, tratamos de tudo com rapidez e profissionalismo.",
    benefits: [
      "Substituição de ecrãs e baterias",
      "Reparação de conectores de carga",
      "Resolução de problemas de software",
      "Recuperação de dados",
      "Peças de qualidade com garantia",
    ],
    target: "Para quem precisa do telemóvel a funcionar rapidamente, sem perder dados nem qualidade.",
  },
  {
    id: "reparacao-computadores",
    icon: Monitor,
    title: "Reparação de Computadores",
    description: "Diagnóstico e reparação de computadores Windows e Mac. Upgrades de hardware, limpeza de vírus, instalação de sistemas operativos e otimização de performance.",
    benefits: [
      "Diagnóstico gratuito",
      "Upgrade de SSD, RAM e componentes",
      "Remoção de vírus e malware",
      "Instalação e configuração de software",
      "Manutenção preventiva",
    ],
    target: "Para particulares e empresas que precisam dos seus equipamentos sempre operacionais.",
  },
  {
    id: "impressao-3d",
    icon: Printer,
    title: "Impressão 3D",
    description: "Transformamos as suas ideias em objetos reais. Prototipagem rápida, peças de substituição personalizadas e projetos criativos com tecnologia de impressão 3D de alta qualidade.",
    benefits: [
      "Prototipagem rápida de produtos",
      "Peças de substituição personalizadas",
      "Maquetes e modelos à escala",
      "Diversos materiais disponíveis",
      "Acompanhamento do projeto do início ao fim",
    ],
    target: "Para inventores, designers, engenheiros e qualquer pessoa com uma ideia para materializar.",
  },
  {
    id: "websites",
    icon: Globe,
    title: "Criação de Websites",
    description: "Websites institucionais modernos, rápidos e otimizados para motores de busca. Design responsivo que funciona perfeitamente em todos os dispositivos.",
    benefits: [
      "Design moderno e personalizado",
      "Otimizado para Google (SEO)",
      "100% responsivo (mobile-first)",
      "Painel de gestão fácil de usar",
      "Domínio e alojamento incluídos",
    ],
    target: "Para negócios que querem uma presença online profissional e que gere resultados reais.",
  },
  {
    id: "lojas-online",
    icon: ShoppingCart,
    title: "Lojas Online",
    description: "Lojas online completas e prontas a vender. Gestão de produtos, pagamentos seguros, envios e tudo o que precisa para vender na internet com confiança.",
    benefits: [
      "Plataforma e-commerce completa",
      "Pagamentos seguros integrados",
      "Gestão de stock e envios",
      "Design orientado à conversão",
      "Formação para gerir a loja",
    ],
    target: "Para quem quer expandir o negócio para o mundo digital e começar a vender online.",
  },
  {
    id: "inteligencia-artificial",
    icon: Bot,
    title: "Soluções com Inteligência Artificial",
    description: "Implementamos soluções de IA que automatizam tarefas, melhoram o atendimento ao cliente e otimizam processos internos do seu negócio.",
    benefits: [
      "Chatbots inteligentes para atendimento",
      "Automação de processos repetitivos",
      "Análise de dados com IA",
      "Integração com sistemas existentes",
      "Consultoria tecnológica personalizada",
    ],
    target: "Para empresas que querem trabalhar de forma mais inteligente e eficiente com tecnologia de ponta.",
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-foreground text-background py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }} data-testid="text-services-page-title">
              Os nossos <span className="text-primary">serviços</span>
            </h1>
            <p className="text-lg opacity-70 leading-relaxed">
              Desde a reparação do seu equipamento até à criação da sua presença digital. Conheça todas as soluções que temos para si.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
              data-testid={`section-service-${service.id}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <p className="text-sm text-muted-foreground italic mb-6">
                  {service.target}
                </p>
                <Link href="/contactos">
                  <Button data-testid={`button-cta-${service.id}`}>
                    Pedir Orçamento
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <Card className={`p-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-semibold text-base mb-4">O que inclui:</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }} data-testid="text-services-cta-title">
            Não encontrou o que procura?
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Fale connosco e explique o seu problema. Encontramos a solução certa para si.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contactos">
              <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-services-cta">
                Falar Connosco
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:935133610">
              <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground" data-testid="button-services-phone">
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
