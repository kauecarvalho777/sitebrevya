import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MessageSquare, CheckCheck, ChevronLeft, Phone, MoreVertical, Smile, Paperclip, Mic, Camera } from "lucide-react";
import waChatBg from "@/assets/wa-chat-bg.png";
import brevyaAvatar from "@/assets/brevya-avatar.png";

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
  const [form, setForm] = useState({ phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [messages, setMessages] = useState<{ text: string; time: string; from: "user" | "bot" }[]>([]);
  const [inputMsg, setInputMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const EMOJIS = ["😀","😂","😍","🥰","😎","🤩","🙌","👏","🔥","💯","❤️","👍","🎉","✨","💪","🚀","😊","🤔","😅","🥳","💰","📈","🤝","⭐","💡"];

  const getTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  const sendMessage = () => {
    const text = inputMsg.trim();
    if (!text) return;
    setMessages(prev => [...prev, { text, time: getTime(), from: "user" }]);
    setInputMsg("");
    setShowEmojiPicker(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.phone.trim()) e.phone = "Campo obrigatório";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    // TODO: enviar mensagem via API do WhatsApp com form.phone
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
              <div className="w-[300px] md:w-[340px] h-[580px] md:h-[680px] rounded-[2.5rem] border-[6px] border-[#2a2a2e] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col">
                {/* Notch / Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-b-2xl z-20" />

                {/* Status bar */}
                <div className="h-[44px] bg-[#202c33] flex items-end justify-between px-6 pb-1.5 text-[11px] text-white/80 font-medium z-10 relative">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="white" opacity="0.8">
                      <rect x="0" y="8" width="3" height="4" rx="0.5" />
                      <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
                      <rect x="9" y="2" width="3" height="10" rx="0.5" />
                      <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.3" />
                    </svg>
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="white" opacity="0.8">
                      <path d="M7 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM3.05 7.36a5.5 5.5 0 017.9 0l-.94.94a4 4 0 00-6.02 0l-.94-.94zM.93 5.24a8.5 8.5 0 0112.14 0l-.94.94a7 7 0 00-10.26 0L.93 5.24z" />
                    </svg>
                    <div className="flex items-center gap-0.5">
                      <div className="w-[22px] h-[10px] border border-white/60 rounded-[2px] relative p-[1px]">
                        <div className="h-full w-[70%] bg-white/80 rounded-[1px]" />
                      </div>
                      <div className="w-[1.5px] h-[4px] bg-white/60 rounded-r-sm" />
                    </div>
                  </div>
                </div>

                {/* Chat is always rendered */}
                <div className="flex flex-col relative flex-1 min-h-0">
                  {/* WhatsApp header */}
                  <div className="bg-[#202c33] px-2 py-1.5 flex items-center gap-2">
                    <ChevronLeft size={22} className="text-[#00a884] shrink-0" />
                    <div className="w-[34px] h-[34px] rounded-full shrink-0 overflow-hidden">
                      <img src={brevyaAvatar} alt="Brevya" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#e9edef] text-[16px] font-normal leading-tight truncate">Brevya</p>
                      <p className="text-[13px] text-[#00a884] leading-tight">online</p>
                    </div>
                    <div className="flex items-center gap-5 text-[#aebac1]">
                      <Phone size={19} />
                      <MoreVertical size={19} />
                    </div>
                  </div>

                   {/* Chat area */}
                   <div
                     className="flex-1 px-2.5 py-3 flex flex-col relative overflow-y-auto min-h-0"
                     style={{
                       backgroundImage: `url(${waChatBg})`,
                       backgroundSize: "cover",
                       backgroundPosition: "center",
                     }}
                   >
                     <div className="flex-1" />

                     {/* Encryption notice */}
                     <div className="flex justify-center mb-3">
                       <div className="bg-[#182229]/90 rounded-[7px] px-3 py-1.5 flex items-center gap-1.5 backdrop-blur-sm">
                         <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0">
                           <path d="M8 1a4 4 0 00-4 4v2H3a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1h-1V5a4 4 0 00-4-4zm2.5 6h-5V5a2.5 2.5 0 015 0v2z" fill="#8696a0" opacity="0.6" />
                         </svg>
                         <span className="text-[11px] text-[#8696a0] leading-tight text-center">
                           As mensagens são protegidas com a criptografia de ponta a ponta.
                         </span>
                       </div>
                     </div>

                     <div className="flex justify-center mb-3">
                       <span className="bg-[#182229]/90 text-[#8696a0] text-[11.5px] px-3 py-[5px] rounded-[7px] font-medium backdrop-blur-sm">
                         HOJE
                       </span>
                     </div>

                     {/* Template message card */}
                     <div className="max-w-[88%] self-start mb-1">
                       <div className="bg-[#202c33] rounded-[7.5px] rounded-tl-0 overflow-hidden shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative">
                         <div className="absolute -left-2 top-0">
                           <svg width="9" height="14" viewBox="0 0 9 14">
                             <path d="M1 0L9 0C9 0 4 4 1 14L0 14L0 0Z" fill="#202c33" />
                           </svg>
                         </div>
                         <div className="bg-[#111b21] flex items-center justify-center py-5 px-4">
                           <img src={brevyaAvatar} alt="Brevya" className="w-16 h-16 rounded-full" />
                         </div>
                         <div className="px-2.5 py-2">
                           <p className="text-[#e9edef] text-[14.2px] font-medium leading-[19px]">
                             Brevya • Fale Conosco
                           </p>
                           <p className="text-[14.2px] text-[#e9edef] leading-[19px] mt-1">
                             Olá! 👋 Bem-vindo à Brevya.
                           </p>
                           <p className="text-[14.2px] text-[#e9edef] leading-[19px] mt-0.5">
                             Somos especialistas em automação e inteligência artificial para empresas que querem escalar resultados.
                           </p>
                           <p className="text-[13px] text-[#8696a0] leading-[17px] mt-1">
                             Toque em "Preencher dados" e fale com nosso time pelo WhatsApp.
                           </p>
                           <div className="flex items-center justify-end gap-1 mt-0.5 -mb-0.5">
                             <span className="text-[11px] text-[#ffffff99]">9:41</span>
                             <CheckCheck size={16} className="text-[#53bdeb]" />
                           </div>
                         </div>
                         <div className="border-t border-[#8696a0]/20">
                           <button
                             onClick={() => setScreen("flow")}
                             className="w-full py-[8px] flex items-center justify-center gap-1.5 text-[#53bdeb] text-[14px] font-normal hover:bg-[#ffffff08] transition-colors active:bg-[#ffffff10]"
                           >
                             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                               <path d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="#53bdeb" strokeWidth="1.2" />
                               <path d="M5 6h6M5 8.5h6M5 11h3" stroke="#53bdeb" strokeWidth="1" strokeLinecap="round" />
                             </svg>
                             Preencher dados
                           </button>
                         </div>
                       </div>
                     </div>

                     {/* User messages */}
                     {messages.map((msg, i) => (
                       <div key={i} className={`max-w-[75%] mb-1 ${msg.from === "user" ? "self-end" : "self-start"}`}>
                         <div className={`rounded-[7.5px] px-2.5 py-1.5 relative shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] ${msg.from === "user" ? "bg-[#005c4b] rounded-tr-0" : "bg-[#202c33] rounded-tl-0"}`}>
                           <p className="text-[#e9edef] text-[14.2px] leading-[19px] pr-12">{msg.text}</p>
                           <div className="flex items-center justify-end gap-1 -mt-1 -mb-0.5">
                             <span className="text-[11px] text-[#ffffff99]">{msg.time}</span>
                             {msg.from === "user" && <CheckCheck size={16} className="text-[#53bdeb]" />}
                           </div>
                         </div>
                       </div>
                     ))}
                     <div ref={chatEndRef} />
                   </div>

                   {/* Bottom input bar */}
                   <div className="bg-[#0b141a] px-[6px] py-[5px] relative">
                     {/* Emoji picker */}
                     {showEmojiPicker && (
                       <div className="absolute bottom-full left-0 right-0 bg-[#0b141a] border-t border-[#2a3942] p-2 grid grid-cols-5 gap-1 max-h-[140px] overflow-y-auto">
                         {EMOJIS.map((emoji) => (
                           <button
                             key={emoji}
                             onClick={() => setInputMsg(prev => prev + emoji)}
                             className="text-[22px] p-1 hover:bg-[#2a3942] rounded transition-colors"
                           >
                             {emoji}
                           </button>
                         ))}
                       </div>
                     )}
                     <div className="flex items-end gap-[5px]">
                       <div className="w-[42px] h-[42px] flex items-center justify-center shrink-0">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round">
                           <line x1="12" y1="5" x2="12" y2="19" />
                           <line x1="5" y1="12" x2="19" y2="12" />
                         </svg>
                       </div>
                       <div className="flex-1 bg-[#2a3942] rounded-[21px] px-3 py-[7px] flex items-center gap-2 min-h-[42px]">
                         <button onClick={() => setShowEmojiPicker(p => !p)} className="shrink-0">
                           <Smile size={22} className={`${showEmojiPicker ? 'text-[#00a884]' : 'text-[#8696a0]'} transition-colors`} />
                         </button>
                         <input
                           type="text"
                           value={inputMsg}
                           onChange={(e) => setInputMsg(e.target.value)}
                           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                           placeholder="Mensagem"
                           className="flex-1 bg-transparent text-[#e9edef] text-[15px] focus:outline-none placeholder:text-[#8696a0]"
                         />
                         <Camera size={22} className="text-[#8696a0] shrink-0" />
                       </div>
                       {/* Send or Mic button */}
                       {inputMsg.trim() ? (
                         <button onClick={sendMessage} className="w-[42px] h-[42px] flex items-center justify-center shrink-0 bg-[#00a884] rounded-full">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                         </button>
                       ) : (
                         <div className="w-[42px] h-[42px] flex items-center justify-center shrink-0">
                           <Mic size={24} className="text-[#8696a0]" />
                         </div>
                       )}
                     </div>
                   </div>

                  {/* Flow overlay — slides up from bottom, leaves ~25px gap at top to show chat behind */}
                  <AnimatePresence>
                    {(screen === "flow" || screen === "done") && (
                      <motion.div
                        key="flow-overlay"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="absolute bottom-0 left-0 right-0 z-30 flex flex-col rounded-t-2xl overflow-hidden shadow-[0_-4px_20px_rgba(0,0,0,0.4)]"
                        style={{ top: "60px" }}
                      >
                        {/* Drag handle */}
                        <div className="bg-[#111b21] pt-2 pb-1 flex justify-center">
                          <div className="w-9 h-[4px] rounded-full bg-[#8696a0]/40" />
                        </div>

                        {screen === "flow" ? (
                          <>
                            {/* Flow header — X | Title centered | ⋮ */}
                            <div className="bg-[#1f2c34] px-4 py-3 flex items-center border-b border-[#2a3942]/60">
                              <button onClick={() => setScreen("chat")} className="text-[#e9edef] w-8">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="18" y1="6" x2="6" y2="18" />
                                  <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                              </button>
                              <p className="flex-1 text-[#e9edef] text-[15px] font-semibold text-center">Cadastro</p>
                              <div className="w-8 flex justify-end">
                                <MoreVertical size={18} className="text-[#e9edef]" />
                              </div>
                            </div>

                            {/* Flow body — scrollable */}
                            <div className="bg-[#111b21] px-5 py-5 flex-1 flex flex-col overflow-y-auto">
                              {/* Title */}
                              <h3 className="text-[#e9edef] text-[20px] font-bold leading-tight">Fale com a Brevya</h3>
                              <p className="text-[#8696a0] text-[14px] mt-2 leading-relaxed">
                                Precisamos de alguns dados básicos para entrar em contato com você.
                              </p>

                              {/* Security badge */}
                              <div className="flex items-center gap-1.5 mt-3 mb-5">
                                <span className="text-[13px]">🔒</span>
                                <span className="text-[#8696a0] text-[13px]">Seus dados são protegidos</span>
                              </div>

                              {/* Outlined inputs — fieldset/floating label style */}
                              <div className="space-y-4 flex-1">
                                <div className="relative">
                                  <div className={`rounded-lg border ${errors.phone ? 'border-[#ea4335]' : 'border-[#3b4a54]'} px-3 pt-3 pb-2 transition-colors focus-within:border-[#00a884]`}>
                                    <label className="absolute -top-2.5 left-2.5 bg-[#111b21] px-1 text-[12px] text-[#8696a0]">
                                      Telefone
                                    </label>
                                    <input
                                      type="tel"
                                      value={form.phone}
                                      onChange={(e) => { setForm(p => ({ ...p, phone: e.target.value })); setErrors(p => ({ ...p, phone: "" })); }}
                                      maxLength={20}
                                      className="w-full bg-transparent text-[#e9edef] text-[15px] focus:outline-none placeholder:text-[#3b4a54]"
                                      placeholder="(00) 00000-0000"
                                    />
                                  </div>
                                  {errors.phone && <p className="text-[#ea4335] text-[11px] mt-1 ml-1">{errors.phone}</p>}
                                </div>
                              </div>
                            </div>

                            {/* Flow fixed footer */}
                            <div className="bg-[#111b21] px-5 pb-4 pt-2 border-t border-[#2a3942]/40">
                              <button
                                onClick={handleSubmit}
                                className="w-full py-[14px] rounded-full bg-[#00a884] text-[#111b21] font-bold text-[15px] hover:bg-[#06cf9c] transition-all duration-200 active:scale-[0.98]"
                              >
                                Enviar dados
                              </button>
                              <p className="text-center text-[11px] text-[#8696a0] mt-2.5">
                                Gerenciada pela empresa. <span className="text-[#53bdeb]">Saiba mais</span>
                              </p>
                            </div>
                          </>
                        ) : (
                          /* Done screen */
                          <div className="bg-[#111b21] px-4 py-5 flex-1 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 rounded-full bg-[#00a884]/20 flex items-center justify-center mb-4">
                              <CheckCheck size={32} className="text-[#00a884]" />
                            </div>
                            <p className="text-[#e9edef] font-semibold text-lg">Obrigado pelo seu interesse! 🎉</p>
                            <p className="text-[#8696a0] text-[14px] mt-2 max-w-[240px] leading-relaxed">
                              Dê uma olhada em seu WhatsApp — sua conversa com a Brevya já está aberta por lá!
                            </p>
                            <button
                              onClick={() => { setScreen("chat"); setForm({ phone: "" }); }}
                              className="mt-6 text-[#00a884] text-[14px] font-medium hover:underline"
                            >
                              Voltar ao início
                            </button>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
