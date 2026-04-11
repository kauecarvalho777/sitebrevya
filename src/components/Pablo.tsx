import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pabloImg from "@/assets/pablo-portrait.jpg";

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

const Pablo = () => {
  return (
    <section id="pablo" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <FadeIn>
            <div className="lg:col-span-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl blur-2xl" />
              <img
                src={pabloImg}
                alt="Pablo Rodrigues Nunes — Fundador e CEO da Brevya"
                className="relative rounded-2xl w-full object-cover aspect-[3/4]"
              />
              <p className="mt-3 text-xs text-muted-foreground italic text-center">
                Visão estratégica, leitura de mercado e construção de novas possibilidades através
                da tecnologia.
              </p>
            </div>
          </FadeIn>

          <div className="lg:col-span-3 space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">
                Fundador & CEO
              </p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mt-2">
                Por trás da Brevya, existe uma visão de futuro{" "}
                <span className="text-gradient-gold">aplicada no presente.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pablo Rodrigues Nunes é o fundador e CEO da Brevya e conduz a empresa a partir de
                uma ideia central: tecnologia não deve apenas resolver problemas. Deve criar
                possibilidades.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Pablo construiu a Brevya com base em uma forma específica de pensar tecnologia.
                  Enquanto grande parte do mercado ainda olha para sistemas como ferramentas de
                  organização e suporte, ele sustenta outra visão: uma empresa cresce de verdade
                  quando passa a usar tecnologia como motor estratégico de transformação.
                </p>
                <p>
                  Para Pablo, inovação não está necessariamente em inventar algo do zero. Muitas
                  vezes, está em olhar para uma tecnologia já existente e perceber antes dos outros
                  o que ainda pode ser construído a partir dela.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <blockquote className="border-l-2 border-primary pl-5 py-3 bg-surface-elevated rounded-r-lg">
                <p className="text-foreground font-semibold text-base md:text-lg italic">
                  "O ponto central da Brevya não é apenas desenvolver soluções, mas influenciar a
                  maneira como o mercado pensa tecnologia."
                </p>
                <cite className="mt-2 block text-xs text-primary font-medium not-italic">
                  Pablo Rodrigues Nunes
                </cite>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pablo;
