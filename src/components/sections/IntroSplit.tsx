"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const tagline = "agencia de marketing digital";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const wordIn = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function IntroSplit() {
  const words = tagline.split(" ");

  return (
    <Section>
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <motion.h1
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.95 }}
              className="text-xl font-bold tracking-[0.2em] text-white/590"
            >
              {words.map((word, index) => (
                <motion.span key={`${word}-${index}`} variants={wordIn}>
                  {word}
                  {index < words.length - 1 ? " " : ""}
                </motion.span>
              ))}
            </motion.h1>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-5xl">
              Somos una agencia de marketing digital especializada en resultados
            </h2>
          </div>
          <div>
            <p className="text-xl leading-relaxed text-white/70">
              Durante más de una década, hemos diseñado soluciones digitales a
              medida para pequeñas y medianas empresas. Entendiendo los desafíos
              actuales, ofrecemos estrategias personalizadas para impulsar tu
              crecimiento en el entorno digital. Desde la creación de una
              identidad digital única hasta la generación de oportunidades de
              negocio a través de internet, estamos contigo.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
