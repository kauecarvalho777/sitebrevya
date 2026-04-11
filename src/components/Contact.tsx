import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquare, Send } from "lucide-react";

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

const WHATSAPP_NUMBER = "551153041000";

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é *${form.name}*${form.company ? ` da empresa *${form.company}*` : ""}.\n\n${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side */}
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 max-w-[60px] bg-primary" />
                <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                  Contato
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Vamos conversar sobre o{" "}
                <span className="text-gradient-gold">futuro do seu negócio.</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-md">
                Preencha o formulário e nossa equipe entrará em contato pelo WhatsApp para
                entender sua operação e apresentar como a Brevya pode transformar seus resultados.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <MessageSquare size={18} className="text-primary" />
                </div>
                <span>Resposta em até 24 horas úteis</span>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Seu nome *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Como podemos te chamar?"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  maxLength={100}
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Nome da sua empresa (opcional)"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Conte um pouco sobre o que você precisa..."
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_hsl(56_18%_51%/0.4)]"
              >
                <Send size={16} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
