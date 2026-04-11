import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ExternalLink, ShoppingCart, Users, Building2, LayoutDashboard, ChevronLeft, ChevronRight } from "lucide-react";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";

import lecarCheckout from "@/assets/cases/lecar-checkout.png";
import lecarConfigurator from "@/assets/cases/lecar-configurator.png";
import lecarPitstop from "@/assets/cases/lecar-pitstop.png";
import lecarComissoes from "@/assets/cases/lecar-comissoes.png";
import lecarCliente from "@/assets/cases/lecar-cliente.png";

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

const stats = [
  { value: "R$ 56M", label: "Em Leads Gerados" },
  { value: "+R$ 5M", label: "Em Receita Total" },
  { value: "< 2 dias", label: "Checkout no Ar" },
  { value: "< 10 dias", label: "Primeira Versão" },
];

const features = [
  { icon: ShoppingCart, title: "Checkout Inteligente", desc: "Compra em 1 clique" },
  { icon: Users, title: "Área do Executivo", desc: "Dashboard completo" },
  { icon: Building2, title: "Área Concessionária", desc: "Gestão avançada" },
  { icon: LayoutDashboard, title: "Painel Montadora", desc: "Visão macro" },
];

const screenshots = [
  { src: lecarCheckout, alt: "Checkout inteligente Lecar" },
  { src: lecarConfigurator, alt: "Configurador de veículo Lecar" },
  { src: lecarPitstop, alt: "PitStop - Cursos Lecar" },
  { src: lecarComissoes, alt: "Painel de comissões Lecar" },
  { src: lecarCliente, alt: "Área do cliente Lecar" },
];

const CaseStudy = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval>>();

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    if (trackRef.current) {
      const card = trackRef.current.children[index] as HTMLElement;
      if (card) {
        trackRef.current.scrollTo({
          left: card.offsetLeft - 24,
          behavior: "smooth",
        });
      }
    }
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % screenshots.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + screenshots.length) % screenshots.length);
  }, [current, goTo]);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => {
        const nextIdx = (prev + 1) % screenshots.length;
        if (trackRef.current) {
          const card = trackRef.current.children[nextIdx] as HTMLElement;
          if (card) {
            trackRef.current.scrollTo({
              left: card.offsetLeft - 24,
              behavior: "smooth",
            });
          }
        }
        return nextIdx;
      });
    }, 4000);
    return () => clearInterval(autoplayRef.current);
  }, []);

  const resetAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => {
        const nextIdx = (prev + 1) % screenshots.length;
        if (trackRef.current) {
          const card = trackRef.current.children[nextIdx] as HTMLElement;
          if (card) {
            trackRef.current.scrollTo({
              left: card.offsetLeft - 24,
              behavior: "smooth",
            });
          }
        }
        return nextIdx;
      });
    }, 4000);
  };

  return (
    <section id="cases" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-primary" />
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Cases de Sucesso
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Lecar:{" "}
            <span className="text-gradient-gold">Resultados Extraordinários</span>
          </h2>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.1}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-5 rounded-xl bg-card border border-border"
              >
                <p className="text-2xl md:text-3xl font-bold text-gradient-gold">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.15}>
          <CardSpotlight className="mt-12">
            <h3 className="font-bold text-lg md:text-xl mb-4 text-foreground">
              Checkout Inteligente
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Desenvolvemos uma solução completa para a montadora brasileira LECAR, criando o
              checkout inteligente. Checkout no ar em menos de 2 dias, primeira versão do sistema
              pronta em menos de 10 dias. Após 60 dias de evoluções, alcançamos R$ 56 milhões em
              LEADS e mais de R$ 5 milhões em receita total.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Continuamos com o desenvolvimento contínuo da plataforma, sempre evoluindo para
              atender às necessidades do cliente.
            </p>
            <a
              href="https://lecar.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-primary text-sm font-semibold hover:text-gold-light transition-colors group"
            >
              Saiba mais em lecar.com.br
              <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </CardSpotlight>
        </FadeIn>

        {/* Features */}
        <FadeIn delay={0.2}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card rounded-lg p-4 border border-border hover:border-primary/30 transition-colors text-center group cursor-default"
              >
                <f.icon className="mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" size={22} />
                <p className="text-xs font-semibold text-foreground">{f.title}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Screenshot Carousel - full width */}
      <FadeIn delay={0.25}>
        <div className="mt-12 relative group/carousel">
          {/* Navigation buttons */}
          <button
            onClick={() => { prev(); resetAutoplay(); }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => { next(); resetAutoplay(); }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronRight size={18} />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-4 lg:px-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {screenshots.map((shot, i) => (
              <motion.div
                key={shot.alt}
                className={`flex-shrink-0 snap-center rounded-xl overflow-hidden border transition-all duration-500 cursor-pointer ${
                  i === current
                    ? "border-primary/50 shadow-[0_0_30px_hsl(56_18%_51%/0.15)]"
                    : "border-border opacity-60 hover:opacity-80"
                }`}
                style={{ width: "min(80vw, 700px)", height: "400px" }}
                onClick={() => { goTo(i); resetAutoplay(); }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); resetAutoplay(); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default CaseStudy;
