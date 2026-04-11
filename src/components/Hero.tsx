import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16 max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
        >
          Tecnologia, estratégia e inovação para empresas que querem{" "}
          <span className="text-gradient-gold">crescer além do óbvio.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
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
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-4 text-sm text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed"
        >
          De diagnósticos operacionais a sistemas sob medida, da inteligência artificial ao
          primeiro e-commerce 100% dentro do WhatsApp com uso de WhatsApp Flows, a Brevya
          atua onde tecnologia deixa de ser suporte e passa a ser direção de mercado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#sobre"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-gold-light transition-colors"
          >
            Quero conhecer a Brevya
          </a>
          <a
            href="#flow-commerce"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md border border-gold-subtle text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            Quero ver o Flow Commerce
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
