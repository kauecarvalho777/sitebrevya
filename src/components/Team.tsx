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

const allMembers = [
  { name: "Pablo", role: "Fundador e CEO", image: pabloImg },
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
    <section id="equipe" className="relative pt-8 lg:pt-12 pb-20 lg:pb-28 overflow-hidden">
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
      </div>

      {/* Carousel - starts inside container, overflows right edge */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide pl-4 lg:pl-[max(2rem,calc((100vw-72rem)/2+2rem))]"
        >
          {allMembers.map((member, i) => (
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
          {/* Spacer to ensure last card overflows */}
          <div className="flex-shrink-0 w-1" aria-hidden />
        </div>
        {canScrollRight && (
          <button
            onClick={() => scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" })}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-colors"
            aria-label="Ver mais"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>
    </section>
  );
};

export default Team;
