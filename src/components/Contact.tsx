import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquare, CheckCheck, ChevronLeft, Send, Phone, MoreVertical, Search, Smile, Paperclip, Mic, Camera } from "lucide-react";

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
  const [screen, setScreen] = useState<"chat" | "flow" | "done">("chat");
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Campo obrigatório";
    if (!form.phone.trim()) e.phone = "Campo obrigatório";
    if (!form.email.trim()) e.email = "Campo obrigatório";
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
              {/* Phone frame */}
              <div className="w-[300px] md:w-[340px] rounded-[2.5rem] border-[6px] border-[#2a2a2e] bg-[#0b141a] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden relative">
                {/* Notch / Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-[#0b141a] rounded-b-2xl z-20" />

                {/* Status bar */}
                <div className="h-[44px] bg-[#0b141a] flex items-end justify-between px-6 pb-1.5 text-[11px] text-white/80 font-medium z-10 relative">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    {/* Signal */}
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="white" opacity="0.8">
                      <rect x="0" y="8" width="3" height="4" rx="0.5" />
                      <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
                      <rect x="9" y="2" width="3" height="10" rx="0.5" />
                      <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.3" />
                    </svg>
                    {/* WiFi */}
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="white" opacity="0.8">
                      <path d="M7 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM3.05 7.36a5.5 5.5 0 017.9 0l-.94.94a4 4 0 00-6.02 0l-.94-.94zM.93 5.24a8.5 8.5 0 0112.14 0l-.94.94a7 7 0 00-10.26 0L.93 5.24z" />
                    </svg>
                    {/* Battery */}
                    <div className="flex items-center gap-0.5">
                      <div className="w-[22px] h-[10px] border border-white/60 rounded-[2px] relative p-[1px]">
                        <div className="h-full w-[70%] bg-white/80 rounded-[1px]" />
                      </div>
                      <div className="w-[1.5px] h-[4px] bg-white/60 rounded-r-sm" />
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {screen === "chat" && (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col"
                    >
                      {/* WhatsApp header */}
                      <div className="bg-[#1f2c34] px-2 py-1.5 flex items-center gap-2">
                        <ChevronLeft size={22} className="text-[#00a884] shrink-0" />
                        <div className="w-[34px] h-[34px] rounded-full bg-[#2a3942] flex items-center justify-center shrink-0 overflow-hidden">
                          <div className="w-full h-full rounded-full bg-primary/40 flex items-center justify-center text-primary font-bold text-[11px]">B</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-[15px] font-normal leading-tight truncate">Brevya</p>
                          <p className="text-[12px] text-white/60 leading-tight">online</p>
                        </div>
                        <div className="flex items-center gap-4 text-white/70">
                          <Phone size={18} />
                          <MoreVertical size={18} />
                        </div>
                      </div>

                      {/* Chat area */}
                      <div
                        className="flex-1 px-2.5 py-3 min-h-[380px] flex flex-col justify-end"
                        style={{ backgroundColor: "#0b141a" }}
                      >
                        {/* Encryption notice */}
                        <div className="flex justify-center mb-3">
                          <div className="bg-[#182229] rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0">
                              <path d="M8 1a4 4 0 00-4 4v2H3a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1h-1V5a4 4 0 00-4-4zm2.5 6h-5V5a2.5 2.5 0 015 0v2z" fill="#8696a0" opacity="0.6" />
                            </svg>
                            <span className="text-[11px] text-[#8696a0] leading-tight text-center">
                              As mensagens são protegidas com a criptografia de ponta a ponta.
                            </span>
                          </div>
                        </div>

                        {/* Date chip */}
                        <div className="flex justify-center mb-3">
                          <span className="bg-[#182229] text-[#8696a0] text-[11px] px-3 py-1 rounded-lg font-medium">
                            HOJE
                          </span>
                        </div>

                        {/* Incoming message bubble */}
                        <div className="max-w-[88%] self-start mb-1.5">
                          <div className="bg-[#1f2c34] rounded-[10px] rounded-tl-[3px] px-2.5 py-1.5 shadow-sm relative">
                            {/* Tail */}
                            <div className="absolute -left-[6px] top-0 w-0 h-0 border-t-[8px] border-t-[#1f2c34] border-l-[8px] border-l-transparent" />
                            <p className="text-[14.2px] text-[#e9edef] leading-[19px]">
                              Olá! 👋 Bem-vindo à <span className="font-medium">Brevya</span>.
                            </p>
                            <p className="text-[14.2px] text-[#e9edef] leading-[19px] mt-1">
                              Somos especialistas em automação e inteligência artificial para empresas que querem escalar resultados.
                            </p>
                            <div className="flex items-center justify-end gap-1 mt-0.5 -mb-0.5">
                              <span className="text-[11px] text-[#8696a0]">9:41</span>
                              <CheckCheck size={15} className="text-[#53bdeb]" />
                            </div>
                          </div>
                        </div>

                        {/* Template card with button */}
                        <div className="max-w-[88%] self-start">
                          <div className="bg-[#1f2c34] rounded-[10px] rounded-tl-[3px] overflow-hidden shadow-sm">
                            {/* Template content */}
                            <div className="px-2.5 py-1.5">
                              <p className="text-[14.2px] text-[#e9edef] leading-[19px]">
                                Quer falar com nosso time? Preencha seus dados clicando no botão abaixo 👇
                              </p>
                              <div className="flex items-center justify-end gap-1 mt-0.5">
                                <span className="text-[11px] text-[#8696a0]">9:41</span>
                                <CheckCheck size={15} className="text-[#53bdeb]" />
                              </div>
                            </div>
                            {/* Template button */}
                            <div className="border-t border-[#8696a0]/15">
                              <button
                                onClick={() => setScreen("flow")}
                                className="w-full py-2.5 flex items-center justify-center gap-2 text-[#53bdeb] text-[14px] font-normal hover:bg-white/5 transition-colors"
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                  <line x1="9" y1="9" x2="15" y2="9" />
                                  <line x1="9" y1="13" x2="15" y2="13" />
                                  <line x1="9" y1="17" x2="12" y2="17" />
                                </svg>
                                Preencher dados
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Message input bar */}
                      <div className="bg-[#0b141a] px-2 py-1.5 flex items-end gap-1.5">
                        <div className="flex-1 bg-[#1f2c34] rounded-full px-3 py-2 flex items-center gap-2">
                          <Smile size={22} className="text-[#8696a0] shrink-0" />
                          <span className="text-[15px] text-[#8696a0] flex-1">Mensagem</span>
                          <Paperclip size={20} className="text-[#8696a0] shrink-0 rotate-45" />
                          <Camera size={20} className="text-[#8696a0] shrink-0" />
                        </div>
                        <div className="w-[42px] h-[42px] rounded-full bg-[#00a884] flex items-center justify-center shrink-0">
                          <Mic size={20} className="text-white" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {screen === "flow" && (
                    <motion.div
                      key="flow"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", damping: 28, stiffness: 300 }}
                      className="flex flex-col"
                    >
                      {/* Flow header - green bar like real WA Flows */}
                      <div className="bg-[#00a884] px-3 py-2.5 flex items-center gap-3">
                        <button onClick={() => setScreen("chat")} className="text-white">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-[16px] font-medium">Brevya</p>
                        </div>
                      </div>

                      {/* Flow title bar */}
                      <div className="bg-[#111b21] px-4 py-3 border-b border-[#8696a0]/10">
                        <p className="text-white text-[16px] font-semibold">Fale com a gente</p>
                        <p className="text-[#8696a0] text-[13px] mt-0.5">Preencha seus dados abaixo</p>
                      </div>

                      {/* Flow form body */}
                      <div className="bg-[#111b21] px-4 py-4 min-h-[330px] flex flex-col">
                        <div className="space-y-5 flex-1">
                          {/* Name field */}
                          <div>
                            <label className="text-[#8696a0] text-[13px] mb-1.5 block">
                              Nome completo <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) => { setForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: "" })); }}
                              maxLength={100}
                              placeholder="Digite seu nome"
                              className="w-full bg-transparent border-b-2 border-[#2a3942] focus:border-[#00a884] px-0 py-2.5 text-[#e9edef] text-[15px] placeholder:text-[#8696a0]/50 focus:outline-none transition-colors"
                            />
                            {errors.name && <p className="text-[#ef4444] text-[12px] mt-1">{errors.name}</p>}
                          </div>

                          {/* Phone field */}
                          <div>
                            <label className="text-[#8696a0] text-[13px] mb-1.5 block">
                              Telefone <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => { setForm(p => ({ ...p, phone: e.target.value })); setErrors(p => ({ ...p, phone: "" })); }}
                              maxLength={20}
                              placeholder="(00) 00000-0000"
                              className="w-full bg-transparent border-b-2 border-[#2a3942] focus:border-[#00a884] px-0 py-2.5 text-[#e9edef] text-[15px] placeholder:text-[#8696a0]/50 focus:outline-none transition-colors"
                            />
                            {errors.phone && <p className="text-[#ef4444] text-[12px] mt-1">{errors.phone}</p>}
                          </div>

                          {/* Email field */}
                          <div>
                            <label className="text-[#8696a0] text-[13px] mb-1.5 block">
                              E-mail <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => { setForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: "" })); }}
                              maxLength={255}
                              placeholder="seu@email.com"
                              className="w-full bg-transparent border-b-2 border-[#2a3942] focus:border-[#00a884] px-0 py-2.5 text-[#e9edef] text-[15px] placeholder:text-[#8696a0]/50 focus:outline-none transition-colors"
                            />
                            {errors.email && <p className="text-[#ef4444] text-[12px] mt-1">{errors.email}</p>}
                          </div>
                        </div>

                        {/* Flow footer button */}
                        <div className="mt-4 pt-3 border-t border-[#8696a0]/10">
                          <button
                            onClick={handleSubmit}
                            className="w-full py-3.5 rounded-full bg-[#00a884] text-white font-semibold text-[15px] hover:bg-[#00976e] transition-all duration-200 active:scale-[0.98]"
                          >
                            Continuar
                          </button>
                          <p className="text-center text-[11px] text-[#8696a0] mt-2.5 flex items-center justify-center gap-1">
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="#8696a0">
                              <path d="M8 1a4 4 0 00-4 4v2H3a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1h-1V5a4 4 0 00-4-4zm2.5 6h-5V5a2.5 2.5 0 015 0v2z" />
                            </svg>
                            Dados protegidos pela Brevya
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {screen === "done" && (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col"
                    >
                      <div className="bg-[#00a884] px-3 py-2.5 flex items-center gap-3">
                        <div className="flex-1">
                          <p className="text-white text-[16px] font-medium text-center">Brevya</p>
                        </div>
                      </div>

                      <div className="bg-[#111b21] px-4 py-5 min-h-[385px] flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-full bg-[#00a884]/20 flex items-center justify-center mb-4">
                          <CheckCheck size={32} className="text-[#00a884]" />
                        </div>
                        <p className="text-[#e9edef] font-semibold text-lg">Dados enviados!</p>
                        <p className="text-[#8696a0] text-[14px] mt-2 max-w-[240px] leading-relaxed">
                          Sua conversa foi aberta no WhatsApp. Nossa equipe responderá em breve! 🚀
                        </p>
                        <button
                          onClick={() => { setScreen("chat"); setForm({ name: "", phone: "", email: "" }); }}
                          className="mt-6 text-[#00a884] text-[14px] font-medium hover:underline"
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
