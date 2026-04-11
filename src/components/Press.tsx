import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

import logoJovemPan from "@/assets/press/jovem-pan.png";
import logoSegs from "@/assets/press/segs.png";
import logoOGlobo from "@/assets/press/o-globo.png";
import logoPortalDaMidia from "@/assets/press/portal-da-midia.png";
import logoTerra from "@/assets/press/terra.png";
import logoACidadeOn from "@/assets/press/a-cidade-on.png";
import logoEdicase from "@/assets/press/portal-edicase.png";
import logoTNH1 from "@/assets/press/tnh1.png";
import logoPortalTela from "@/assets/press/portal-tela.png";
import logoOpiniaoRH from "@/assets/press/opiniao-rh.png";
import logoFocoNosNegocios from "@/assets/press/foco-nos-negocios.png";
import logoTudoNoticias from "@/assets/press/tudo-noticias.png";
import logoAGazetaMG from "@/assets/press/a-gazeta-mg.png";
import logoDiarioPaulista from "@/assets/press/diario-paulista.png";

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
  { name: "O Globo", logo: logoOGlobo, lightInvert: false, url: "https://oglobo.globo.com/patrocinado/pulse-brand/noticia/2026/04/01/empresa-brasileira-desenvolve-ecommerce-100-dentro-do-whatsapp-e-propoe-nova-logica-para-o-comercio-digital-1.ghtml" },
  { name: "Terra", logo: logoTerra, lightInvert: false, url: "https://www.terra.com.br/byte/uso-da-tecnologia-nas-empresas-evolui-e-impulsiona-novos-modelos-de-negocio,7337855ab61185ead300ab74da52e64f4mnp6qnv.html" },
  { name: "Jovem Pan", logo: logoJovemPan, lightInvert: false, url: "https://jovempan.com.br/edicase/uso-da-tecnologia-nas-empresas-evolui-e-impulsiona-novos-modelos-de-negocio.html" },
  { name: "SEGS", logo: logoSegs, lightInvert: false, url: "https://www.segs.com.br/seguros/444474-e-commerce-dentro-do-whatsapp-propoe-nova-logica-para-o-comercio-digital" },
  { name: "Portal Da Mídia", logo: logoPortalDaMidia, lightInvert: false, url: "https://portaldamidia.com.br/empresa-brasileira-desenvolve-e-commerce-100-dentro-do-whatsapp-e-propoe-nova-logica-para-o-comercio-digital/" },
  { name: "GZH", logo: null, lightInvert: false, url: "https://gauchazh.clicrbs.com.br/economia/noticia/2026/04/uso-da-tecnologia-nas-empresas-evolui-e-impulsiona-novos-modelos-de-negocio-cmnt2bhyx022z013of52889w8.html" },
  { name: "TNH1", logo: logoTNH1, lightInvert: true, url: "https://www.tnh1.com.br/amp/nid/uso-da-tecnologia-nas-empresas-evolui-e-impulsiona-novos-modelos-de-negocio-6571/" },
  { name: "A Cidade ON", logo: logoACidadeOn, lightInvert: true, url: "https://acidadeon.com/tudoep/tudo-inovacao/uso-da-tecnologia-nas-empresas-evolui-e-impulsiona-novos-modelos-de-negocio/" },
  { name: "Portaledicase", logo: logoEdicase, lightInvert: false, url: "https://portaledicase.com/uso-da-tecnologia-nas-empresas-evolui-e-impulsiona-novos-modelos-de-negocio/" },
];

const Press = () => {
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

        <FadeIn delay={0.15}>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {outlets.map((outlet, i) => (
              <motion.a
                key={outlet.name}
                href={outlet.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center h-20 px-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(56_18%_51%/0.12)] group"
              >
                {outlet.logo ? (
                  <img
                    src={outlet.logo}
                    alt={outlet.name}
                    className={`max-h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${outlet.lightInvert ? "dark:invert-0 invert" : ""}`}
                  />
                ) : (
                  <span className="text-sm font-bold text-foreground/60 group-hover:text-foreground/100 whitespace-nowrap transition-colors">
                    {outlet.name}
                  </span>
                )}
              </motion.a>
            ))}
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
