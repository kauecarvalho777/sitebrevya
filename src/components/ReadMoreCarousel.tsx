import { Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { blogCovers } from "@/components/BlogCovers";

interface Props {
  currentSlug: string;
}

const ReadMoreCarousel = ({ currentSlug }: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const otherPosts = posts.filter((p) => p.slug !== currentSlug);
  const items = [...otherPosts, ...otherPosts, ...otherPosts];

  const scroll = (direction: number) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: direction * 340, behavior: "smooth" });
    }
  };

  return (
    <section className="border-t border-border py-16">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between mb-10">
        <h2 className="text-xl font-bold">Leia também</h2>
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
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 lg:px-8"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((p, idx) => {
          const Cover = blogCovers[p.slug];
          return (
            <Link
              key={`${p.slug}-${idx}`}
              to={`/blog/${p.slug}`}
              className="group flex-shrink-0 w-[320px] rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                {Cover ? (
                  <Cover className="w-full h-full" />
                ) : (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span>{p.category}</span>
                  <span>{new Date(p.date).toLocaleDateString("pt-BR")}</span>
                </div>
                <h3 className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {p.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ReadMoreCarousel;
