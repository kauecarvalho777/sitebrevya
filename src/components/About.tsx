import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Search, Code2, ArrowRightLeft } from "lucide-react";
import { LampContainer } from "@/components/ui/aceternity/lamp";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";

const pillars = [
  {
    icon: Lightbulb,
    title: "Inovação estratégica",
    text: "A Brevya ajuda empresas a deixarem de operar no improviso e passarem a estruturar crescimento com lógica, tecnologia e inteligência aplicada ao negócio.",
  },
  {
    icon: Search,
    title: "Consultoria de diagnóstico",
    text: "A empresa mapeia processos internos, identifica gargalos e mostra onde automação e inteligência artificial podem gerar ganhos rápidos em produtividade, organização e redução de custos.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento de tecnologia própria",
    text: "Empresas que querem escalar não podem depender apenas de softwares genéricos, planilhas desconectadas ou ferramentas isoladas. A Brevya desenvolve sistemas sob medida e arquiteturas integradas.",
  },
  {
    icon: ArrowRightLeft,
    title: "Novos modelos de relacionamento e venda",
    text: "A Brevya trabalha para reposicionar o uso da tecnologia dentro das empresas, saindo de um uso reativo para um uso estratégico, capaz de criar novas dinâmicas de operação, relacionamento e conversão.",
  },
];

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

const About = () => {
  return (
    <section id="sobre">
      <LampContainer className="min-h-[500px]">
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-center text-2xl md:text-4xl font-bold leading-tight max-w-3xl bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent"
        >
          A Brevya nasceu para transformar tecnologia em{" "}
          <span className="text-gradient-gold bg-clip-text">vantagem competitiva.</span>
        </motion.h2>
      </LampContainer>

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl -mt-20 relative z-10">
        <FadeIn delay={0.15}>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
            <p>
              A Brevya é uma empresa brasileira de tecnologia e consultoria, especializada em
              inovação estratégica, automação e inteligência artificial.
            </p>
            <p>
              Fundada em agosto de 2025 por Pablo Rodrigues Nunes, em São Paulo, a empresa nasceu
              com uma proposta clara: ajudar negócios a deixarem de usar tecnologia apenas para
              corrigir problemas e passarem a utilizá-la como ferramenta de crescimento, eficiência
              e criação de novas oportunidades.
            </p>
            <p>
              Mais do que desenvolver sistemas, a Brevya atua na transformação de processos
              operacionais em estruturas mais inteligentes, conectadas e escaláveis.
            </p>
            <blockquote className="text-foreground/80 font-medium italic border-l-2 border-primary pl-4 py-2">
              No centro da empresa está uma tese simples: tecnologia não deve apenas sustentar o
              presente de uma empresa. Ela deve abrir caminho para o futuro dela.
            </blockquote>
          </div>
        </FadeIn>

        {/* Pillars */}
        <FadeIn delay={0.2}>
          <h3 className="mt-20 text-xl md:text-2xl font-bold text-center">
            Quatro pilares sustentam a forma como a Brevya constrói.
          </h3>
        </FadeIn>

        <div className="mt-10 grid md:grid-cols-2 gap-6 pb-24">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={0.1 * i}>
              <CardSpotlight className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <p.icon size={20} />
                  </div>
                  <h4 className="font-semibold text-sm md:text-base text-foreground">{p.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </CardSpotlight>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
