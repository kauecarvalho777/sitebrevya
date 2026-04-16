import { useParams, Link, Navigate } from "react-router-dom";
import { getPostBySlug, posts } from "@/data/posts";
import { Calendar, Tag, User, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const otherPosts = posts.filter((p) => p.slug !== post.slug);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content
      .trim()
      .split("\n\n")
      .map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("### "))
          return <h3 key={i} className="text-lg font-semibold mt-8 mb-3">{trimmed.slice(4)}</h3>;
        if (trimmed.startsWith("## "))
          return <h2 key={i} className="text-xl font-bold mt-10 mb-4">{trimmed.slice(3)}</h2>;
        if (trimmed.startsWith("> "))
          return (
            <blockquote key={i} className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
              {trimmed.slice(2)}
            </blockquote>
          );
        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").map((l) => l.replace(/^- /, ""));
          return (
            <ul key={i} className="list-disc pl-6 my-4 space-y-2 text-muted-foreground">
              {items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
              ))}
            </ul>
          );
        }
        if (/^\d+\. /.test(trimmed)) {
          const items = trimmed.split("\n").map((l) => l.replace(/^\d+\.\s*/, ""));
          return (
            <ol key={i} className="list-decimal pl-6 my-4 space-y-2 text-muted-foreground">
              {items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
              ))}
            </ol>
          );
        }

        return (
          <p key={i} className="text-muted-foreground leading-relaxed my-4"
            dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }}
          />
        );
      });
  };

  // Build items for infinite carousel
  const carouselItems = otherPosts.map((p) => ({
    quote: p.excerpt,
    name: p.title,
    title: p.category,
    slug: p.slug,
    image: p.image,
    date: p.date,
  }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Image */}
      <div className="w-full max-h-[420px] overflow-hidden mt-16">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article */}
      <article className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 max-w-3xl">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Tag size={14} />
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("pt-BR")}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User size={14} />
            {post.author}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="mt-8 text-base">
          {renderContent(post.content)}
        </div>
      </article>

      {/* Infinite Carousel - Leia mais */}
      {otherPosts.length > 0 && (
        <section className="border-t border-border py-16">
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between mb-10">
            <h2 className="text-xl font-bold">Leia também</h2>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const el = document.getElementById("carousel-track");
                  if (el) el.scrollBy({ left: -340, behavior: "smooth" });
                }}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("carousel-track");
                  if (el) el.scrollBy({ left: 340, behavior: "smooth" });
                }}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div id="carousel-track" className="flex animate-scroll-left gap-6 w-max overflow-x-auto scrollbar-hide" style={{ scrollBehavior: "smooth" }}>
              {[...otherPosts, ...otherPosts, ...otherPosts].map((p, idx) => (
                <Link
                  key={`${p.slug}-${idx}`}
                  to={`/blog/${p.slug}`}
                  className="group flex-shrink-0 w-[320px] rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
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
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
