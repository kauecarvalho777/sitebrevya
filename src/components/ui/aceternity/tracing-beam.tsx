"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      <div className="absolute -left-4 md:-left-10 top-3 hidden md:block">
        <motion.div
          className="ml-[13px] flex h-4 w-4 items-center justify-center rounded-full border border-primary shadow-sm shadow-primary"
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{ scale: [1, 1.2, 1] }}
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            className="h-2 w-2 rounded-full bg-primary"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${ref.current?.offsetHeight || 1000}`}
          width="20"
          height={ref.current?.offsetHeight || 1000}
          className="block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 10 0 L 10 ${ref.current?.offsetHeight || 1000}`}
            fill="none"
            stroke="hsl(56 18% 51% / 0.2)"
            strokeWidth="1"
          />
          <motion.path
            d={`M 10 0 L 10 ${ref.current?.offsetHeight || 1000}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
            style={{
              pathLength: scrollYProgress,
            }}
          />
          <defs>
            <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(56 18% 65%)" stopOpacity="0" />
              <stop stopColor="hsl(56 18% 51%)" />
              <stop offset="0.325" stopColor="hsl(56 18% 65%)" />
              <stop offset="1" stopColor="hsl(56 18% 51%)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};
