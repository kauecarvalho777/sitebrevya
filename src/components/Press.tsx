import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards";

import logoJovemPan from "@/assets/press/jovem-pan.png";
import logoSegs from "@/assets/press/segs.png";
import logoOGlobo from "@/assets/press/o-globo.png";
import logoPortalDaMidia from "@/assets/press/portal-da-midia.png";
import logoTerra from "@/assets/press/terra.png";
import logoACidadeOn from "@/assets/press/a-cidade-on.png";
import logoEdicase from "@/assets/press/portal-edicase.png";

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
  { name: "O Globo", logo: logoOGlobo },
  { name: "Terra", logo: logoTerra },
  { name: "Jovem Pan", logo: logoJovemPan },
  { name: "SEGS", logo: logoSegs },
  { name: "Portal Da Mídia", logo: logoPortalDaMidia },
  { name: "GZH", logo: null },
  { name: "TNH1", logo: null },
  { name: "A Cidade ON", logo: logoACidadeOn },
  { name: "Portaledicase", logo: logoEdicase },
];

const Press = () => {
  const pressItems = outlets.map((outlet) => ({
    key: outlet.name,
    content: (
      <div className="flex items-center justify-center h-24 px-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_hsl(56_18%_51%/0.1)]">
        {outlet.logo ? (
          <img
            src={outlet.logo}
            alt={outlet.name}
            className="max-h-10 w-auto object-contain brightness-0 dark:invert opacity-70 hover:opacity-100 transition-opacity"
          />
        ) : (
          <span className="text-lg font-bold text-foreground/70 whitespace-nowrap">{outlet.name}</span>
        )}
      </div>
    ),
  }));

  return (
    <section id="imprensa" className="py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-primary" />
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Imprensa
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            A Brevya já começou a{" "}
            <span className="text-gradient-gold">chamar atenção da imprensa.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-2xl">
            A visão da empresa sobre inovação, tecnologia e novos modelos de negócio vem ganhando
            espaço em veículos nacionais e portais de mercado.
          </p>
        </FadeIn>
      </div>

      {/* Infinite scrolling logos */}
      <FadeIn delay={0.15}>
        <div className="mt-12">
          <InfiniteMovingCards
            items={pressItems}
            direction="left"
            speed="slow"
            pauseOnHover
          />
        </div>
      </FadeIn>

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
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
              className="inline-flex items-center gap-2 mt-6 text-primary text-sm font-semibold hover:text-gold-light transition-colors group"
            >
              Ver publicações sobre a Brevya{" "}
              <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Press;
