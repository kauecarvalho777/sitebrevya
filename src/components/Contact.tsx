import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Send, Check, CheckCheck } from "lucide-react";

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
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre as soluções da Brevya para minha empresa.")}`;

const Contact = () => {
  const currentTime = "10:32";

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
                Clique no botão e inicie uma conversa direta com a nossa equipe pelo WhatsApp.
                Estamos prontos para entender sua operação e apresentar como a Brevya pode transformar seus resultados.
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
                  {/* Date chip */}
                  <div className="flex justify-center mb-2">
                    <span className="bg-[#182229] text-white/50 text-[11px] px-3 py-1 rounded-lg">
                      HOJE
                    </span>
                  </div>

                  {/* Incoming message - template */}
                  <div className="max-w-[85%] self-start">
                    <div className="bg-[#1f2c34] rounded-xl rounded-tl-sm px-3 py-2 shadow-sm">
                      {/* Template header */}
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
                        Como podemos ajudar você hoje?
                      </p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-white/40">{currentTime}</span>
                        <CheckCheck size={13} className="text-blue-400" />
                      </div>
                    </div>
                  </div>

                  {/* Quick reply buttons */}
                  <div className="max-w-[85%] self-start space-y-1.5">
                    <button className="w-full bg-[#1f2c34] border border-primary/30 rounded-xl px-3 py-2.5 text-primary text-[12px] font-medium text-center hover:bg-primary/10 transition-colors">
                      📊 Quero automatizar processos
                    </button>
                    <button className="w-full bg-[#1f2c34] border border-primary/30 rounded-xl px-3 py-2.5 text-primary text-[12px] font-medium text-center hover:bg-primary/10 transition-colors">
                      🤖 Preciso de IA no meu negócio
                    </button>
                    <button className="w-full bg-[#1f2c34] border border-primary/30 rounded-xl px-3 py-2.5 text-primary text-[12px] font-medium text-center hover:bg-primary/10 transition-colors">
                      💬 Quero falar com um consultor
                    </button>
                  </div>
                </div>

                {/* CTA Button - opens real WhatsApp */}
                <div className="bg-[#1f2c34] px-3 py-3 border-t border-white/5">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                  >
                    <Send size={16} />
                    Iniciar conversa no WhatsApp
                  </a>
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
