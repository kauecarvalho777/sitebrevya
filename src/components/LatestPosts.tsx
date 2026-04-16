import { Link } from "react-router-dom";
import { getLatestPosts } from "@/data/posts";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const latestPosts = getLatestPosts(3);

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Blog</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Últimos <span className="text-primary">artigos</span>
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-primary hover:text-gold-light transition-colors font-medium"
            >
              Ver todos
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <Link
                to={`/blog/${post.slug}`}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-[0_0_30px_hsl(56_18%_42%/0.08)] transition-all duration-300 block h-full"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Tag size={12} />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
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
      </div>
    </section>
  );
};

export default LatestPosts;
