import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquare, CheckCheck, ChevronLeft, ArrowRight, Send } from "lucide-react";

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
  const currentTime = "10:32";
  const [screen, setScreen] = useState<"chat" | "flow" | "done">("chat");
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Obrigatório";
    if (!form.phone.trim()) e.phone = "Obrigatório";
    if (!form.email.trim()) e.email = "Obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const text = `Olá! Meu nome é *${form.name}*.\n📞 ${form.phone}\n📧 ${form.email}\n\nGostaria de saber mais sobre as soluções da Brevya.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setScreen("done");
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
                Interaja com nosso WhatsApp e deixe seus dados. Nossa equipe entrará em contato
                para entender sua operação e apresentar como a Brevya pode transformar seus resultados.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <MessageSquare size={18} className="text-primary" />
                </div>
                <span>Resposta em até 24 horas úteis</span>
              </div>
            </div>
          </FadeIn>

          {/* WhatsApp Phone Mockup */}
          <FadeIn delay={0.15}>
            <div className="flex justify-center">
              <div className="w-[300px] md:w-[340px] rounded-[2.5rem] border-[6px] border-foreground/20 bg-[#0b141a] shadow-2xl overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/20 rounded-b-2xl z-10" />

                {/* Status bar */}
                <div className="h-10 bg-[#1f2c34] flex items-end justify-between px-5 pb-1 text-[10px] text-white/60">
                  <span>{currentTime}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-2 border border-white/60 rounded-sm relative">
                      <div className="absolute inset-[1px] right-[2px] bg-white/60 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {screen === "chat" && (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Chat header */}
                      <div className="bg-[#1f2c34] px-3 py-2 flex items-center gap-3 border-b border-white/5">
                        <div className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold text-xs">
                          B
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-semibold truncate">Brevya</p>
                          <p className="text-[11px] text-green-400">online</p>
                        </div>
                      </div>

                      {/* Chat body */}
                      <div
                        className="px-3 py-4 space-y-3 min-h-[340px] flex flex-col justify-end"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          backgroundColor: "#0b141a",
                        }}
                      >
                        <div className="flex justify-center mb-2">
                          <span className="bg-[#182229] text-white/50 text-[11px] px-3 py-1 rounded-lg">HOJE</span>
                        </div>

                        <div className="max-w-[85%] self-start">
                          <div className="bg-[#1f2c34] rounded-xl rounded-tl-sm px-3 py-2 shadow-sm">
                            <div className="bg-primary/10 rounded-lg p-2.5 mb-2 border border-primary/20">
                              <p className="text-primary font-semibold text-xs">✨ Brevya Solutions</p>
                            </div>
                            <p className="text-white text-[13px] leading-relaxed">
                              Olá! 👋 Bem-vindo à <span className="font-semibold text-primary">Brevya</span>.
                            </p>
                            <p className="text-white text-[13px] leading-relaxed mt-1.5">
                              Somos especialistas em <span className="font-semibold">automação</span> e{" "}
                              <span className="font-semibold">inteligência artificial</span> para empresas que querem escalar resultados.
                            </p>
                            <p className="text-white text-[13px] leading-relaxed mt-1.5">
                              Preencha seus dados e fale com nosso time! 🚀
                            </p>
                            <div className="flex items-center justify-end gap-1 mt-1">
                              <span className="text-[10px] text-white/40">{currentTime}</span>
                              <CheckCheck size={13} className="text-blue-400" />
                            </div>
                          </div>
                        </div>

                        {/* CTA button inside chat */}
                        <div className="max-w-[85%] self-start">
                          <button
                            onClick={() => setScreen("flow")}
                            className="w-full bg-[#1f2c34] border border-primary/30 rounded-xl px-3 py-3 text-primary text-[13px] font-medium text-center hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
                          >
                            📋 Preencher meus dados
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {screen === "flow" && (
                    <motion.div
                      key="flow"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Flow header */}
                      <div className="bg-[#00a884] px-3 py-2.5 flex items-center gap-3">
                        <button onClick={() => setScreen("chat")} className="text-white hover:text-white/80 transition-colors">
                          <ChevronLeft size={20} />
                        </button>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-semibold">Brevya — Contato</p>
                          <p className="text-[11px] text-white/70">Preencha seus dados</p>
                        </div>
                      </div>

                      {/* Flow form */}
                      <div className="bg-[#111b21] px-4 py-5 min-h-[340px] flex flex-col">
                        <p className="text-white/70 text-[12px] mb-4">Precisamos de algumas informações para entrar em contato com você.</p>

                        <div className="space-y-4 flex-1">
                          {/* Name */}
                          <div>
                            <label className="text-white/50 text-[11px] font-medium uppercase tracking-wider mb-1 block">
                              Nome completo *
                            </label>
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) => { setForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: "" })); }}
                              maxLength={100}
                              placeholder="Seu nome"
                              className="w-full bg-[#1f2c34] border border-white/10 rounded-lg px-3 py-2.5 text-white text-[13px] placeholder:text-white/25 focus:outline-none focus:border-[#00a884] transition-colors"
                            />
                            {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>}
                          </div>

                          {/* Phone */}
                          <div>
                            <label className="text-white/50 text-[11px] font-medium uppercase tracking-wider mb-1 block">
                              Telefone *
                            </label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => { setForm(p => ({ ...p, phone: e.target.value })); setErrors(p => ({ ...p, phone: "" })); }}
                              maxLength={20}
                              placeholder="(00) 00000-0000"
                              className="w-full bg-[#1f2c34] border border-white/10 rounded-lg px-3 py-2.5 text-white text-[13px] placeholder:text-white/25 focus:outline-none focus:border-[#00a884] transition-colors"
                            />
                            {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                          </div>

                          {/* Email */}
                          <div>
                            <label className="text-white/50 text-[11px] font-medium uppercase tracking-wider mb-1 block">
                              E-mail *
                            </label>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => { setForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: "" })); }}
                              maxLength={255}
                              placeholder="seu@email.com"
                              className="w-full bg-[#1f2c34] border border-white/10 rounded-lg px-3 py-2.5 text-white text-[13px] placeholder:text-white/25 focus:outline-none focus:border-[#00a884] transition-colors"
                            />
                            {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
                          </div>
                        </div>

                        {/* Submit */}
                        <button
                          onClick={handleSubmit}
                          className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#00a884] text-white font-semibold text-[13px] hover:bg-[#00976e] transition-all duration-200"
                        >
                          <Send size={14} />
                          Enviar e abrir WhatsApp
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {screen === "done" && (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Done header */}
                      <div className="bg-[#00a884] px-3 py-2.5 flex items-center gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-semibold text-center">Brevya — Contato</p>
                        </div>
                      </div>

                      <div className="bg-[#111b21] px-4 py-5 min-h-[340px] flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-full bg-[#00a884]/20 flex items-center justify-center mb-4">
                          <CheckCheck size={32} className="text-[#00a884]" />
                        </div>
                        <p className="text-white font-semibold text-lg">Dados enviados!</p>
                        <p className="text-white/50 text-[13px] mt-2 max-w-[220px]">
                          Sua conversa foi aberta no WhatsApp. Nossa equipe responderá em breve! 🚀
                        </p>
                        <button
                          onClick={() => { setScreen("chat"); setForm({ name: "", phone: "", email: "" }); }}
                          className="mt-6 text-[#00a884] text-[13px] font-medium hover:underline"
                        >
                          Voltar ao início
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
