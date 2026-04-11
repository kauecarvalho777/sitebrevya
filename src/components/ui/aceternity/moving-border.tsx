"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) => {
  return (
    <Component
      className={cn(
        "relative h-12 overflow-hidden bg-transparent p-[1px] text-sm",
        containerClassName
      )}
      {...otherProps}
    >
      <div
        className={cn(
          "absolute inset-0",
          borderClassName
        )}
        style={{ borderRadius: "inherit" }}
      >
        <motion.div
          className="absolute h-20 w-20 opacity-80"
          style={{
            background: "radial-gradient(hsl(56 18% 51%) 40%, transparent 60%)",
          }}
          animate={{
            x: ["-50%", "150%", "150%", "-50%", "-50%"],
            y: ["-50%", "-50%", "150%", "150%", "-50%"],
          }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center bg-background antialiased backdrop-blur-xl",
          className
        )}
        style={{ borderRadius: "inherit" }}
      >
        {children}
      </div>
    </Component>
  );
};
