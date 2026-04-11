import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { MovingBorder } from "@/components/ui/aceternity/moving-border";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundBeams />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(56 18% 51%)" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center rounded-full border border-gold-subtle bg-card/50 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-primary tracking-wider uppercase">
            Inovação Estratégica & IA
          </span>
        </motion.div>

        <TextGenerateEffect
          words="Tecnologia, estratégia e inovação para empresas que querem crescer além do óbvio."
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] !leading-[1.05] tracking-tight text-foreground [&_span]:!bg-gradient-to-r [&_span]:!from-foreground [&_span]:!via-primary [&_span]:!to-foreground [&_span]:!bg-clip-text [&_span]:!text-transparent max-w-4xl mx-auto"
          duration={0.4}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          A Brevya é uma empresa brasileira de tecnologia e consultoria especializada em
          inovação estratégica, automação e inteligência artificial. Desenvolvemos estruturas
          que transformam operação, relacionamento e vendas em modelos de negócio mais
          eficientes, escaláveis e inteligentes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-4 text-sm text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed"
        >
          De diagnósticos operacionais a sistemas sob medida, da inteligência artificial ao
          primeiro e-commerce 100% dentro do WhatsApp com uso de WhatsApp Flows, a Brevya
          atua onde tecnologia deixa de ser suporte e passa a ser direção de mercado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#sobre"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_hsl(56_18%_51%/0.4)]"
          >
            Quero conhecer a Brevya
          </a>
          <MovingBorder
            as="a"
            containerClassName="rounded-full h-auto"
            className="rounded-full px-8 py-3 font-medium text-sm"
            duration={3000}
          >
            <a href="#flow-commerce">Quero ver o Flow Commerce</a>
          </MovingBorder>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
