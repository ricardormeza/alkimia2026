"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

const images = [
  {
    src: "/portafolio/alkimia-diseno-de-empaque-acento-cafeteria.webp",
    alt: "Acento Cafe",
  },
  {
    src: "/portafolio/alkimia-agency-munoz-realty-portafolio-diseno-imagen-corporativa.webp",
    alt: "Munoz Realty",
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
    src: "/portafolio/imagen-corporativa-alkimia-marketing.webp",
    alt: "Imagen Corporativa",
  },
  {
    src: "/portafolio/web-mock-jblas-scaled.webp",
    alt: "Web JBLAS",
  },
];

const INTERVAL_MS = 3000;

export default function HeroResponsive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startCycle = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, INTERVAL_MS);
  };

  const stopCycle = () => {
    if (intervalRef.current === null) return;
    window.clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    return () => stopCycle();
  }, []);

  return (
    <section className="py-6">
      <Container className="px-4">
        <h2 className="mb-4 text-center text-3xl font-semibold leading-tight text-white">
          Una aleaci\u00f3n que logra resultados incre\u00edbles
        </h2>
      </Container>
      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-[#202020]"
        onPointerDown={startCycle}
        onPointerUp={stopCycle}
        onPointerCancel={stopCycle}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") startCycle();
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") stopCycle();
        }}
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
