import { useParams, Link, Navigate } from "react-router-dom";
import { getPostBySlug, getLatestPosts } from "@/data/posts";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = getLatestPosts(3).filter((p) => p.slug !== post.slug).slice(0, 2);

  // Simple markdown-like rendering: headings, blockquotes, lists, paragraphs
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex items-center gap-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar ao blog
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full max-h-[420px] overflow-hidden">
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

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 py-16 max-w-3xl">
            <h2 className="text-xl font-bold mb-8">Leia também</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group rounded-lg border border-border bg-card overflow-hidden hover:border-primary/40 transition-all"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{new Date(r.date).toLocaleDateString("pt-BR")}</p>
                    <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
