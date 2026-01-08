"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";

const MotionLink = motion(Link);

const easeOut = "easeOut";

function useParallax(
  x: ReturnType<typeof useSpring>,
  y: ReturnType<typeof useSpring>,
  strength: number
) {
  const parallaxX = useTransform(x, (value) => -value * strength);
  const parallaxY = useTransform(y, (value) => -value * strength);
  return { x: parallaxX, y: parallaxY };
}

export default function HeroAlkimia() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 180, damping: 26, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 26, mass: 0.4 });

  const layer1 = useParallax(springX, springY, 18);
  const layer2 = useParallax(springX, springY, 22);
  const layer3 = useParallax(springX, springY, 28);
  const layer4 = useParallax(springX, springY, 20);
  const ctaLayer = useParallax(springX, springY, 12);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
    mouseX.set(x * 2);
    mouseY.set(y * 2);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="flex w-full justify-center py-[clamp(12px,2vw,24px)]">
      <Container className="px-0 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="mb-3 text-center sm:mb-8 lg:mb-10"
        >
          <h2 className="text-5xl font-semibold leading-tight sm:text-4xl lg:text-5xl text-white transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-300 hover:via-white hover:to-blue-400">
            <span className="block">Una aleación que logra</span>
            <span className="block">resultados increíbles</span>
          </h2>
        </motion.div>
        <div
          ref={frameRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="relative w-full max-w-[1905px] aspect-[1905/973] rounded-[40px]"
        >
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: easeOut }}
                className="absolute left-[0%] top-[8.40%] h-[23.84%] w-[28.92%] rounded-[28px] border-2 border-[#0b0b0b]"
              >
                <motion.div style={layer1} className="relative h-full w-full">
                  <Image
                    src="/images/alkimia-publicidad-diseno-de-empaque-acento-coffee-roasters-home-1.webp"
                    alt="Home 1"
                    fill
                    className="rounded-[28px] object-cover"
                    sizes="(min-width: 1280px) 30vw, 100vw"
                    priority
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
                className="absolute left-[0%] top-[35.43%] h-[46.87%] w-[41.52%]"
              >
                <motion.div style={layer2} className="relative h-full w-full">
                  <Image
                    src="/images/alkimia-publicidad-diseno-de-empaque-acento-coffee-roasters-home-2.webp"
                    alt="Home 2"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1280px) 40vw, 100vw"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.12 }}
                className="absolute left-[30.76%] top-[8.71%] h-[73.59%] w-[49.71%]"
              >
                <motion.div style={layer3} className="relative h-full w-full">
                  <Image
                    src="/images/alkimia-publicidad-diseno-de-empaque-acento-coffee-roasters-home-3.webp"
                    alt="Home 3"
                    fill
                    className="rounded-[28px] object-cover"
                    sizes="(min-width: 1280px) 55vw, 100vw"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.16 }}
                className="absolute left-[62.73%] top-[9.43%] h-[34.94%] w-[17.85%]"
              >
                <MotionLink
                  href="/contacto"
                  style={ctaLayer}
                  className="relative flex h-full w-full items-center justify-center rounded-[14px] border-2 border-[#0b0b0b] bg-[#2562f4] text-center text-[clamp(14px,1.2vw,18px)] font-medium text-white transition duration-200 hover:brightness-105"
                >
                  Comencemos
                  <span className="absolute right-4 top-4 text-lg" aria-hidden="true">
                    ↗
                  </span>
                </MotionLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
                className="absolute left-[82.15%] top-[10.66%] h-[71.63%] w-[17.85%] rounded-[28px] border-2 border-[#0b0b0b]"
              >
                <motion.div style={layer4} className="relative h-full w-full">
                  <Image
                    src="/images/alkimia-publicidad-diseno-de-empaque-acento-coffee-roasters-home-4.webp"
                    alt="Home 4"
                    fill
                    className="rounded-[28px] object-cover"
                    sizes="(min-width: 1280px) 20vw, 100vw"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
