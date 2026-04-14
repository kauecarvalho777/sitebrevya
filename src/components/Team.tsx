import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { User, ChevronRight } from "lucide-react";
import pabloImg from "@/assets/pablo.png";
import kaueImg from "@/assets/kaue-carvalho.png";
import yanImg from "@/assets/yan-laurentino.png";
import joaoImg from "@/assets/joao-victor.png";
import marcosImg from "@/assets/marcos-smeets.png";

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

const founder = { name: "Pablo", role: "Fundador e CEO", image: pabloImg };

const team = [
  { name: "Kauê Carvalho", role: "Co-Fundador", image: kaueImg },
  { name: "Marcos Smeets", role: "Software Engineer", image: marcosImg },
  { name: "João Victor", role: "Data Analyst", image: joaoImg },
  { name: "Yan Laurentino", role: "Vídeo Maker", image: yanImg },
];

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => { if (el) el.removeEventListener("scroll", checkScroll); };
  }, []);

  return (
    <section id="equipe" className="relative pt-8 lg:pt-12 pb-20 lg:pb-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <FadeIn>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 max-w-[40px] bg-primary" />
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Equipe
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mt-2 mb-12">
            Quem faz a Brevya{" "}
            <span className="text-gradient-gold">acontecer.</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Pablo - Featured Card */}
          <FadeIn>
            <motion.div
              className="group relative flex-shrink-0 w-full md:w-[280px]"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-surface-elevated border border-border mb-4">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-foreground">
                {founder.name}
              </h3>
              <p className="text-xs md:text-sm text-primary">{founder.role}</p>
            </motion.div>
          </FadeIn>

          {/* Team Carousel - Netflix style */}
          <div className="relative flex-1 min-w-0 overflow-visible">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            >

              {team.map((member, i) => (
                <FadeIn key={member.name} delay={0.1 * i}>
                  <motion.div
                    className="group relative flex-shrink-0 w-[200px] md:w-[220px]"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-surface-elevated border border-border mb-4">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <User size={48} className="text-muted-foreground/30" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="font-semibold text-sm md:text-base text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-xs md:text-sm text-primary">{member.role}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
