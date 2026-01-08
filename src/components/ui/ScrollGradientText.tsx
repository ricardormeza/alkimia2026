"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ScrollGradientTextProps = {
  children: React.ReactNode;
  className?: string;
  offset?: [string, string];
  gradient?: string;
};

export default function ScrollGradientText({
  children,
  className,
  offset = ["start 0.9", "end 0.4"],
  gradient = "linear-gradient(90deg, #2562f4 0%, #ffffff 55%, #2562f4 100%)",
}: ScrollGradientTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: offset as never });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  return (
    <span ref={ref} className={`relative inline-block ${className ?? ""}`}>
      <span className="relative z-0 text-white">{children}</span>
      {reduceMotion ? null : (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 z-10 text-transparent"
          style={{
            backgroundImage: gradient,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            clipPath,
          }}
        >
          {children}
        </motion.span>
      )}
    </span>
  );
}
