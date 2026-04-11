import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

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

const outlets = [
  "O Globo",
  "Terra",
  "Jovem Pan",
  "GZH",
  "TNH1",
  "A Cidade ON",
  "SEGS",
  "Portaledicase",
];

const Press = () => {
  return (
    <section id="imprensa" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <FadeIn>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Imprensa
          </p>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            A Brevya já começou a{" "}
            <span className="text-gradient-gold">chamar atenção da imprensa.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-2xl">
            A visão da empresa sobre inovação, tecnologia e novos modelos de negócio vem ganhando
            espaço em veículos nacionais e portais de mercado.
          </p>
        </FadeIn>

        {/* Logos */}
        <FadeIn delay={0.15}>
          <div className="mt-12">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-6 font-medium">
              Veículos que já repercutiram a Brevya
            </p>
            <div className="flex flex-wrap gap-4">
              {outlets.map((name) => (
                <div
                  key={name}
                  className="px-5 py-3 rounded-lg bg-background border border-border text-sm font-semibold text-foreground/80 hover:border-primary/30 transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              A tese da Brevya sobre o uso estratégico da tecnologia e a criação de novos modelos
              de negócio foi destaque em veículos como Terra, Jovem Pan, GZH, TNH1, A Cidade ON e
              Portaledicase. Já o desenvolvimento do e-commerce 100% dentro do WhatsApp ganhou
              espaço em publicações como O Globo, SEGS e diversos portais que repercutiram a
              inovação proposta pela empresa.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-primary text-sm font-semibold hover:text-gold-light transition-colors"
            >
              Ver publicações sobre a Brevya <ExternalLink size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Press;
