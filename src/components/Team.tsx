import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";
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

const team = [
  { name: "Kauê Carvalho", role: "Co-Fundador", image: kaueImg },
  { name: "Marcos Smeets", role: "Software Engineer", image: marcosImg },
  { name: "João Victor", role: "Data Analyst", image: joaoImg },
  { name: "Yan Laurentino", role: "Vídeo Maker", image: yanImg },
];

const Team = () => {
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={0.1 * i}>
              <motion.div
                className="group relative"
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
    </section>
  );
};

export default Team;
