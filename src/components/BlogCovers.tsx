import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Cover 1: Tese Brevya — grid nodes with mouse-reactive glow
export const CoverTeseBrevya = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden bg-background", className)}
    >
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => {
            const dist = Math.sqrt(
              Math.pow(col / 12 - mouse.x, 2) + Math.pow(row / 8 - mouse.y, 2)
            );
            const opacity = Math.max(0, 1 - dist * 2.5);
            return (
              <motion.div
                key={`${row}-${col}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                style={{
                  left: `${(col / 11) * 100}%`,
                  top: `${(row / 7) * 100}%`,
                  opacity: 0.1 + opacity * 0.7,
                  scale: 0.5 + opacity * 1,
                }}
                transition={{ duration: 0.15 }}
              />
            );
          })
        )}
      </div>

      {/* Radial glow following mouse */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mouse.x * 100}% ${mouse.y * 100}%, hsl(56 18% 42% / 0.15), transparent 70%)`,
        }}
      />

      {/* Floating lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 200">
        <motion.path
          d="M0,100 Q100,50 200,100 T400,100"
          stroke="hsl(56 18% 51%)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M0,150 Q150,80 300,130 T400,80"
          stroke="hsl(56 18% 51%)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2"
        >
          Tese
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-bold text-foreground leading-tight"
        >
          Brevya
        </motion.div>
      </div>
    </div>
  );
};

// Cover 2: E-commerce — flowing conversation bubbles
export const CoverEcommerce = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

      {/* Animated bubbles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm"
          style={{
            width: `${40 + i * 15}px`,
            height: `${24 + i * 6}px`,
            left: `${15 + i * 16}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[0, 1, 2].map((i) => (
          <motion.line
            key={i}
            x1={`${20 + i * 25}%`}
            y1={`${30 + i * 15}%`}
            x2={`${45 + i * 20}%`}
            y2={`${50 + i * 10}%`}
            stroke="hsl(56 18% 51%)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, delay: i * 0.8, repeat: Infinity }}
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2"
        >
          E-commerce
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-bold text-foreground leading-tight"
        >
          Nova Lógica
        </motion.div>
      </div>
    </div>
  );
};

// Cover 3: Tese Pablo — expanding circles (vision/foresight)
export const CoverTesePablo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      {/* Expanding rings */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/20"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            width: [`${60 + i * 40}px`, `${120 + i * 60}px`],
            height: [`${60 + i * 40}px`, `${120 + i * 60}px`],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.7,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Center pulse */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Radial rays */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          return (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${50 + Math.cos(angle) * 45}%`}
              y2={`${50 + Math.sin(angle) * 45}%`}
              stroke="hsl(56 18% 51%)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
            />
          );
        })}
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2"
        >
          Visão
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-bold text-foreground leading-tight"
        >
          Pablo Nunes
        </motion.div>
      </div>
    </div>
  );
};

// Cover 4: IA Infrastructure — expanding rings + scanning line
export const CoverIA = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden bg-background", className)}
    >
      {/* Mouse-reactive glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(300px circle at ${mouse.x * 100}% ${mouse.y * 100}%, hsl(56 18% 42% / 0.12), transparent 70%)`,
        }}
      />

      {/* Expanding rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/15"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            width: [`${40 + i * 30}px`, `${100 + i * 50}px`],
            height: [`${40 + i * 30}px`, `${100 + i * 50}px`],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Scanning line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content — centered like all other covers */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2"
        >
          Análise
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-bold text-foreground leading-tight"
        >
          Nova fase da IA
        </motion.div>
      </div>
    </div>
  );
};

// Cover 5: Flow Commerce WhatsApp — floating bubbles + glow
export const CoverFlowCommerce = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden bg-background", className)}
    >
      {/* Mouse-reactive glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(300px circle at ${mouse.x * 100}% ${mouse.y * 100}%, hsl(152 69% 31% / 0.12), transparent 70%)`,
        }}
      />

      {/* Floating bubbles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[#00a884]/20 bg-[#00a884]/5"
          style={{
            width: `${20 + i * 8}px`,
            height: `${20 + i * 8}px`,
            left: `${10 + i * 18}%`,
            top: `${20 + (i % 3) * 22}%`,
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.4,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content — centered like all other covers */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2"
        >
          Flow Commerce
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-bold text-foreground leading-tight"
        >
          WhatsApp
        </motion.div>
      </div>
    </div>
  );
};

// Map slug to cover component
export const blogCovers: Record<string, React.FC<{ className?: string }>> = {
  "flow-commerce-ecommerce-whatsapp": CoverFlowCommerce,
  "tese-da-brevya-tecnologia-possibilidades": CoverTeseBrevya,
  "ecommerce-nova-logica": CoverEcommerce,
  "tese-pablo-inovacao": CoverTesePablo,
  "ia-nova-fase-infraestrutura": CoverIA,
};
