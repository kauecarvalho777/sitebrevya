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

const ReclameAquiSeal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const script = document.createElement("script");
    script.id = "ra-embed-reputation";
    script.src = "https://s3.amazonaws.com/raichu-beta/selos/bundle.js";
    script.setAttribute("data-id", "UWpSR1JDQkhsUVduMFBmTTpwYWJsby1yb2RyaWd1ZXMtbnVuZXMtbHRkYQ==");
    script.setAttribute("data-target", "reputation-ra");
    script.setAttribute("data-model", "2");
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div id="reputation-ra" ref={containerRef} />;
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
      <footer className="border-t border-border py-10 md:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Mobile: stacked centered layout / Desktop: 3-col grid */}
          <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-3 md:items-start md:gap-8">
            {/* Coluna 1 — Logo */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <img
                src={logo}
                alt="Brevya"
                className={`h-12 ${dark ? "" : "invert"}`}
              />
              <p className="text-xs text-muted-foreground max-w-[220px] text-center md:text-left">
                Tecnologia para empresas que querem escalar com visão e inteligência.
              </p>
            </div>

            {/* Mobile: Links e Contato lado a lado */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-sm md:contents">
              {/* Coluna 2 — Links úteis */}
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-foreground">Links úteis</h4>
                <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <a href="#sobre" className="hover:text-primary transition-colors">Sobre a Brevya</a>
                  <a href="#timeline" className="hover:text-primary transition-colors">Nossa história</a>
                  <a href="#flow-commerce" className="hover:text-primary transition-colors">Flow Commerce</a>
                  <a href="#cases" className="hover:text-primary transition-colors">Cases</a>
                  <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
                </nav>
              </div>

              {/* Coluna 3 — Contato */}
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-foreground">Contato</h4>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <a href="mailto:contato@brevya.com.br" className="hover:text-primary transition-colors break-all">
                    contato@brevya.com.br
                  </a>
                  <a href="tel:+551153041000" className="hover:text-primary transition-colors">
                    (11) 5304-1000
                  </a>
                  <p className="text-xs mt-1 leading-relaxed">
                    Alameda Terracota, 185, Cerâmica
                    <br />São Caetano do Sul/SP
                    <br />09531-190
                  </p>
                </div>
              </div>
            </div>

            {/* Selo Reclame Aqui — centralizado no mobile */}
            <div className="flex justify-center md:col-span-3 md:justify-start">
              <ReclameAquiSeal />
            </div>
          </div>

          {/* Linha inferior */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col items-center gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
            <p>
              CNPJ:{" "}
              <a href="https://cnpj.biz/62319275000140" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">
                62.319.275/0001-40
              </a>
            </p>
            <p>© {new Date().getFullYear()} Brevya. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
