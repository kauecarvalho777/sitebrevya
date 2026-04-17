import { Link } from "react-router-dom";
import { getLatestPosts } from "@/data/posts";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { blogCovers } from "@/components/BlogCovers";

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

const LatestPosts = () => {
  const latestPosts = getLatestPosts(8);
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: direction * 340, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 flex items-end justify-between mb-10">
        <FadeIn>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Blog</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Últimos <span className="text-primary">artigos</span>
            </h2>
          </div>
        </FadeIn>
        <div className="flex items-center gap-4">
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-primary hover:text-gold-light transition-colors font-medium"
          >
            Ver todos
            <ArrowRight size={16} />
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 lg:px-8"
        style={{ scrollBehavior: "smooth" }}
      >
        {latestPosts.map((post) => {
          const Cover = blogCovers[post.slug];
          return (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex-shrink-0 w-[320px] rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                {Cover ? (
                  <Cover className="w-full h-full" />
                ) : (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span>{post.category}</span>
                  <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                </div>
                <h3 className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-primary font-medium"
        >
          Ver todos os artigos
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default LatestPosts;
