"use client";
import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  ...props
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) => {
  return (
    <Tag
      className={cn(
        "relative flex rounded-full border border-primary/20 bg-background p-px transition-colors hover:border-primary/50 group",
        containerClassName
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--x)_var(--y),hsl(56_18%_51%/0.3),transparent_60%)]" />
      <div
        className={cn(
          "relative flex items-center gap-2 rounded-full bg-background px-6 py-2.5 text-sm font-semibold text-foreground",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
};
