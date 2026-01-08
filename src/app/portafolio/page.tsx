"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const portfolioItems = [
  {
    src: "/portafolio/alkimia-diseno-de-empaque-acento-cafeteria.webp",
    alt: "Acento Coffee Roasters",
    href: "/portafolio/acento-coffee-roasters",
    cta: "Ver proyecto",
  },
  {
    src: "/portafolio/web-mock-jblas-scaled.webp",
    alt: "Web JBLAS",
    href: "/portafolio/jblas-asesores",
    cta: "Ver proyecto",
  },
  {
    src: "/portafolio/alkimia-marketing-grupo-valcas-cobroplan1.webp",
    alt: "Grupo Valcas",
    href: "/portafolio/grupo-valcas",
    cta: "Ver proyecto",
  },
  {
    src: "/portafolio/alkimia-agency-munoz-realty-portafolio-diseno-imagen-corporativa.webp",
    alt: "Munoz Realty",
    href: "/portafolio/munoz-realty-group",
    cta: "Ver proyecto",
  },

  {
    src: "/portafolio/imagen-corporativa-alkimia-marketing.webp",
    alt: "Imagen Corporativa",
  },
  {
    src: "/portafolio/alkimia-publicidad-branding-sinley-img6.webp",
    alt: "Sinley Branding",
  },
  {
    src: "/portafolio/alkimia-marketing-grupo-valcas-cobroplan1.webp",
    alt: "Grupo Valcas",
  },
  {
    src: "/portafolio/alkimia-publicidad-branding-sinley-img6.webp",
    alt: "Sinley Branding",
  },
  {
    src: "/portafolio/web-mock-jblas-scaled.webp",
    alt: "Web JBLAS",
  },
];

export default function Page() {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: (index: number) => {
      const col = index % 3;
      const row = Math.floor(index / 3);
      return {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
          delay: row * 0.08 + col * 0.06,
        },
      };
    },
  };

  return (
    <div className="min-h-screen bg-white text-[#111]">
      <Header active="portafolio" variant="light" />
      <main>
        <Section className="pt-10">
          <Container>
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-black sm:text-4xl">
                Portafolio
              </h1>
            </div>
            <motion.div
              initial="hidden"
              animate="show"
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {portfolioItems.map((item, index) => {
                const content = (
                  <>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 45vw, 30vw"
                    />
                    {item.cta ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-sm font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {item.cta}
                      </div>
                    ) : null}
                  </>
                );

                return (
                  <motion.div
                    key={`${item.src}-${index}`}
                    className="group relative aspect-square overflow-hidden rounded-2xl border border-black/10"
                    variants={itemVariants}
                    custom={index}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="absolute inset-0"
                        aria-label={`Ver proyecto ${item.alt}`}
                      >
                        {content}
                      </Link>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
