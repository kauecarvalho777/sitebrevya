"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: { content: React.ReactNode; key: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getSpeed = useCallback(() => {
    if (speed === "fast") return "20s";
    if (speed === "normal") return "40s";
    return "80s";
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
      containerRef.current.style.setProperty("--animation-duration", getSpeed());
      setStart(true);
    }
  }, [direction, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li key={item.key} className="w-[250px] max-w-full flex-shrink-0 md:w-[350px]">
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};
