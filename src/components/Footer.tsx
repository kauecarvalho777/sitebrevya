import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import logo from "@/assets/logo_brevya.png";
import { useTheme } from "@/hooks/use-theme";

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

const Footer = () => {
  const { dark } = useTheme();

  return (
    <>
      {/* CTA Section */}
      <section id="contato" className="relative py-24 lg:py-32 overflow-hidden">
        <BackgroundBeams />
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Se a sua empresa ainda usa tecnologia apenas para manter a operação,{" "}
              <span className="text-gradient-gold">talvez esteja na hora de repensar o jogo.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Da consultoria ao desenvolvimento de sistemas próprios, do diagnóstico operacional ao
              Flow Commerce, a Brevya atua para transformar tecnologia em direção de mercado.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_hsl(56_18%_51%/0.4)]"
              >
                Quero falar com a Brevya
              </a>
              <a
                href="#flow-commerce"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-gold-subtle text-foreground font-medium text-sm hover:bg-secondary transition-colors"
              >
                Quero ver a plataforma em funcionamento
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-6 text-xs text-muted-foreground">
              Tecnologia para empresas que querem escalar com mais visão, mais estrutura e mais
              inteligência.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center gap-4 text-center">
          <img
            src={logo}
            alt="Brevya"
            className={`h-9 opacity-60 ${dark ? "" : "invert"}`}
          />
          <ReclameAquiSeal />
          <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
            <p>CNPJ: <a href="https://cnpj.biz/62319275000140" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">62.319.275/0001-40</a></p>
            <p>Alameda Terracota, 185, Cerâmica — São Caetano do Sul/SP, 09531-190</p>
            <p className="mt-1">© {new Date().getFullYear()} Brevya. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
