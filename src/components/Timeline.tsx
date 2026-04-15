import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const timelineData = [
  {
    year: "2004 / 2005",
    title: "O início na tecnologia",
    description:
      "Ainda na infância, Pablo começa sua relação com tecnologia. É nesse momento que nasce a base de tudo o que viria depois: curiosidade, lógica de construção e a capacidade de enxergar tecnologia como criação, não apenas como ferramenta.",
  },
  {
    year: "2009 / 2010",
    title: "O mais novo webmaster do Brasil",
    description:
      "Aos 16 anos, Pablo foi eleito o mais novo webmaster do Brasil — um reconhecimento que, no contexto da época, equivalia ao que hoje seria visto como um perfil fullstack.",
  },
  {
    year: "2012 / 2013",
    title: "Entrada no mercado de pagamentos",
    description:
      "Ainda muito jovem, Pablo passa a atuar em projetos ligados a pagamentos e tecnologia transacional, aprofundando seu repertório em operação, software e experiência de compra.",
  },
  {
    year: "2012 / 2013",
    title: "Venda de empresa ao IG",
    description:
      "Aos 19 anos, participa da venda de uma empresa de pagamentos ao IG, consolidando uma trajetória precoce no mercado e reforçando sua capacidade de transformar visão em negócio.",
  },
  {
    year: "2013 em diante",
    title: "Movimentos antes da tendência",
    description:
      "Nos anos seguintes, Pablo amplia sua atuação em projetos ligados a automação, pagamentos digitais, experiências conversacionais e novas aplicações tecnológicas.",
  },
  {
    year: "2018 a 2024",
    title: "Escala, operação e produto",
    description:
      "Aprofunda sua experiência em estruturas financeiras, produto digital e operação escalável, consolidando uma visão cada vez mais estratégica sobre tecnologia, mercado e crescimento.",
  },
  {
    year: "Agosto de 2025",
    title: "Nasce a Brevya",
    description:
      "Pablo funda a Brevya em São Paulo com uma tese clara: tecnologia não deve apenas resolver gargalos operacionais, mas criar novas formas de vender, operar e crescer.",
    highlight: true,
  },
  {
    year: "2025",
    title: "Uma nova visão de mercado",
    description:
      "Com a Brevya, Pablo consolida um posicionamento que passa a orientar toda a empresa: usar tecnologia não apenas para melhorar o que já existe, mas para construir o que ainda não foi feito.",
  },
  {
    year: "2025 / 2026",
    title: "A oportunidade dentro do WhatsApp",
    description:
      "Identifica que o e-commerce tradicional não performava como deveria, enquanto o WhatsApp já concentrava a atenção, a conversa e a conversão.",
  },
  {
    year: "2025 / 2026",
    title: "Nasce o Flow Commerce",
    description:
      "A Brevya desenvolve uma nova lógica de venda digital: uma jornada completa de compra dentro do WhatsApp, integrada a uma estrutura robusta de gestão e operação.",
    highlight: true,
  },
  {
    year: "2026",
    title: "A visão ganha voz pública",
    description:
      "A trajetória de Pablo passa a ser reconhecida não apenas pela execução, mas pela capacidade de antecipar movimentos e transformar tecnologia em direção de mercado.",
  },
  {
    year: "Hoje",
    title: "Construindo o próximo movimento",
    description:
      "Aos 32 anos, Pablo conduz a Brevya como uma plataforma de inovação, visão estratégica e criação de novos caminhos para vendas, operação e tecnologia.",
    highlight: true,
  },
];

const TimelineCard = ({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex-shrink-0 w-[280px] md:w-[320px] relative group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Connector dot and line */}
      <div className="flex items-center gap-0 mb-6">
        <motion.div
          className={`w-3 h-3 rounded-full border-2 flex-shrink-0 transition-colors duration-300 ${
            item.highlight
              ? "border-primary bg-primary"
              : hovered
              ? "border-primary bg-primary/50"
              : "border-muted-foreground/40 bg-transparent"
          }`}
          animate={item.highlight ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Year badge */}
      <span
        className={`inline-block text-xs font-semibold tracking-widest uppercase mb-2 ${
          item.highlight ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {item.year}
      </span>

      {/* Card */}
      <motion.div
        className={`rounded-xl p-5 border transition-all duration-300 flex-1 ${
          item.highlight
            ? "border-primary/30 bg-primary/5"
            : "border-border/50 bg-surface-elevated/50"
        } ${hovered ? "border-primary/40 shadow-lg shadow-primary/5" : ""}`}
        animate={hovered ? { scale: 1.03 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <h3
          className={`text-sm font-bold mb-2 ${
            item.highlight ? "text-primary" : "text-foreground"
          }`}
        >
          {item.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative pt-8 lg:pt-12 pb-8 lg:pb-12 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 max-w-[40px] bg-primary" />
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Trajetória
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Uma história construída{" "}
            <span className="text-gradient-gold">antes da tendência.</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide pb-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-6 px-[max(1rem,calc((100vw-72rem)/2+1rem))] items-stretch">
          {timelineData.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} />
          ))}
          {/* Spacer at end */}
          <div className="flex-shrink-0 w-8" />
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="flex justify-center mt-4 text-muted-foreground/50 text-xs gap-2 items-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <motion.span
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
        Arraste para explorar
      </motion.div>
    </section>
  );
};

export default Timeline;
