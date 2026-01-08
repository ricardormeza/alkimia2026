"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Container from "@/components/ui/Container";

const stats = [
  { value: "98", label: "Proyectos" },
  { value: "65", label: "Clientes" },
  { value: "10+", label: "A\u00f1os" },
  { value: "15k", label: "Tazas de Caf\u00e9" },
];

const COUNT_DURATION_MS = 1200;

function useCountUp(target: number, start: boolean, duration = COUNT_DURATION_MS) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let rafId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(target * progress));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration]);

  return value;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const parsed = useMemo(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return { number: 0, suffix: "" };
    return { number: Number(match[1]), suffix: match[2] ?? "" };
  }, [value]);

  const count = useCountUp(parsed.number, inView);
  const displayValue = `${count}${parsed.suffix}`;

  return (
    <div
      ref={ref}
      className="relative flex flex-1 items-center justify-center py-2"
    >
      <p className="text-6xl font-semibold leading-none text-[#2562f4] sm:text-7xl lg:text-8xl">
        {displayValue}
      </p>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white/90">
        {label}
      </span>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-[#151515] py-10 md:py-12">
      <Container>
        <div className="flex flex-col gap-8 text-center sm:flex-row sm:divide-x sm:divide-white/10">
          {stats.map((stat) => (
            <StatItem key={stat.value} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
