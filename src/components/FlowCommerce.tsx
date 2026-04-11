import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShoppingCart,
  CreditCard,
  MapPin,
  MessageSquare,
  BarChart3,
  Users,
  FileText,
  Headphones,
} from "lucide-react";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";
import { TracingBeam } from "@/components/ui/aceternity/tracing-beam";
import flowDemo from "@/assets/whatsapp-flow-demo.gif";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

const clientFeatures = [
  "Acesse a loja",
  "Navegue por categorias",
  "Visualize produtos",
  "Adicione itens ao carrinho",
  "Informe endereço",
  "Escolha a forma de pagamento",
  "Finalize o pedido",
];

const backofficeFeatures = [
  { icon: ShoppingCart, label: "Pedidos em tempo real" },
  { icon: Users, label: "Leads e clientes" },
  { icon: Headphones, label: "Atendimento centralizado" },
  { icon: MessageSquare, label: "Gestão de conversas" },
  { icon: FileText, label: "Emissão de nota fiscal" },
  { icon: BarChart3, label: "Indicadores de operação" },
  { icon: MapPin, label: "Fluxos comerciais organizados" },
  { icon: CreditCard, label: "Pix e cartão integrados" },
];

const FlowCommerce = () => {
  return (
    <section id="flow-commerce" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-primary" />
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Flow Commerce
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight max-w-3xl">
            Não é apenas um e-commerce dentro do WhatsApp.{" "}
            <span className="text-gradient-gold">
              É uma nova estrutura de venda e gestão.
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-sm md:text-base">
            O cliente compra no WhatsApp. A empresa gerencia toda a operação em uma plataforma
            completa.
          </p>
        </FadeIn>

        {/* Origin story */}
        <FadeIn delay={0.15}>
          <CardSpotlight className="mt-16">
            <h3 className="font-bold text-lg md:text-xl mb-4 text-foreground">
              Tudo começou com uma necessidade real.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Durante a estruturação da operação de um cliente com 18 lojas, a Brevya percebeu
              um cenário claro: o e-commerce tradicional não performava como deveria, mas o
              WhatsApp já concentrava boa parte da atenção, da conversa e da conversão.
            </p>
            <blockquote className="mt-6 text-foreground font-semibold text-base md:text-lg border-l-2 border-primary pl-4 italic">
              "Se a venda já acontece no WhatsApp, por que a compra ainda precisa sair dali?"
            </blockquote>
            <p className="mt-4 text-primary font-medium text-sm">A resposta virou produto.</p>
          </CardSpotlight>
        </FadeIn>

        {/* Demo + Features */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <img
                  src={flowDemo}
                  alt="A jornada completa de compra acontecendo dentro do WhatsApp."
                  className="relative rounded-2xl shadow-2xl max-h-[500px] w-auto mx-auto border border-border"
                />
              </motion.div>
              <p className="mt-4 text-xs text-muted-foreground text-center italic">
                A jornada completa de compra acontecendo dentro do WhatsApp.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <TracingBeam>
              <div className="pl-8">
                <h3 className="font-bold text-lg md:text-xl mb-2 text-foreground">
                  Uma nova lógica de e-commerce construída dentro do WhatsApp.
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Sem redirecionamento. Sem atrito. Sem quebra de jornada.
                </p>
                <ul className="space-y-4">
                  {clientFeatures.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-sm text-foreground/90"
                    >
                      <span className="w-7 h-7 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </TracingBeam>
          </FadeIn>
        </div>

        {/* Backoffice */}
        <FadeIn delay={0.1}>
          <div className="mt-20">
            <h3 className="font-bold text-lg md:text-xl mb-2 text-foreground">
              Por trás da conversa, existe uma plataforma completa de gestão.
            </h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
              Não se trata apenas de vender no WhatsApp. Trata-se de operar melhor, com mais
              controle, inteligência e escalabilidade.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {backofficeFeatures.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-background rounded-lg p-4 border border-border hover:border-primary/30 transition-colors text-center group cursor-default"
                >
                  <f.icon className="mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" size={22} />
                  <p className="text-xs font-medium text-foreground/90">{f.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Differentiator */}
        <FadeIn delay={0.1}>
          <div className="mt-16 text-center">
            <h3 className="font-bold text-lg md:text-xl mb-3 text-foreground">
              Enquanto muitos enxergam recurso, a Brevya enxerga{" "}
              <span className="text-gradient-gold">aplicação.</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Essa é a diferença entre usar tecnologia e construir mercado com tecnologia.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center justify-center mt-8 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_hsl(56_18%_51%/0.4)]"
            >
              Quero entender como essa estrutura funciona
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FlowCommerce;
