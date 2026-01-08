"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ScrollFadeTextProps = {
  children: React.ReactNode;
  className?: string;
  fromOpacity?: number;
  toOpacity?: number;
  offset?: [string, string];
};

export default function ScrollFadeText({
  children,
  className,
  fromOpacity = 0.25,
  toOpacity = 1,
  offset = ["start 0.9", "end 0.4"],
}: ScrollFadeTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: offset as never });
  const opacity = useTransform(scrollYProgress, [0, 1], [fromOpacity, toOpacity]);

  return (
    <motion.p ref={ref} className={className} style={{ opacity: reduceMotion ? 1 : opacity }}>
      {children}
    </motion.p>
  );
}
