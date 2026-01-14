"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const tabs = [
  {
    key: "branding",
    label: "Sin Ley",
    src: "/portafolio/alkimia-publicidad-branding-sinley-img6.webp",
  },
  {
    key: "diseno-web",
    label: "JBLAS Asesores",
    src: "/portafolio/web-mock-jblas-scaled.webp",
  },
  {
    key: "marketing-digital",
    label: "Acento Cafe",
    src: "/portafolio/alkimia-diseno-de-empaque-acento-cafeteria.webp",
  },
  {
    key: "diseno-grafico",
    label: "Muñoz Realty Group",
    src: "/portafolio/alkimia-agency-munoz-realty-portafolio-diseno-imagen-corporativa.webp",
  },
  {
    key: "diseno-grafico2",
    label: "AmmetBaja",
    src: "/portafolio/ametbaja/alkimia-marketing-redes-sociales-amet-2-scaled.webp",
  },
  {
    key: "cosmos",
    label: "Cosmo Sophia",
    src: "/portafolio/cosmo-sophia/alkimia-publicidad-proyecto-sophia-grupo-cosmopolitan-valla-perimetral-1.webp",
  },
  {
    key: "valkas",
    label: "Grupo Valcas",
    src: "/portafolio/grupo-valcas/alkimia-marketing-grupo-valcas-cobroplan1.webp",
  },
];

export default function PortafolioDos() {
  const [activeKey, setActiveKey] = useState(tabs[0].key);
  const activeTab = tabs.find((tab) => tab.key === activeKey) ?? tabs[0];

  return (
    <Section>
      <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Portafolio
          </h2>
        </div>
      <div className="relative overflow-hidden bg-[#0b0b0b]">
        <div className="relative h-[90vh] w-full">
          <Image
            key={activeTab.key}
            src={activeTab.src}
            alt={activeTab.label}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
            
          <div className="absolute inset-0 flex items-center">
            <Container className="flex w-full justify-center">
              <div className="flex w-full flex-col gap-3 text-center sm:text-right lg:ml-auto lg:w-auto lg:items-end">
                {tabs.map((tab) => {
                  const isActive = tab.key === activeKey;
                  return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveKey(tab.key)}
                    onMouseEnter={() => setActiveKey(tab.key)}
                    onFocus={() => setActiveKey(tab.key)}
                    className={`text-base font-semibold tracking-[0.08em] transition-opacity duration-300 sm:text-lg lg:text-xl ${
                      isActive
                        ? "text-white opacity-100"
                        : "text-white/50 opacity-60 hover:opacity-90"
                    }`}
                    style={{
                      textShadow:
                        "-1px 0 0 rgba(0,0,0,0.9), 1px 0 0 rgba(0,0,0,0.9), 0 -1px 0 rgba(0,0,0,0.9), 0 1px 0 rgba(0,0,0,0.9)",
                    }}
                  >
                    {tab.label}
                  </button>
                  );
                })}
              </div>
            </Container>
          </div>
        </div>
        <div className="text-center mb-4">
          <button className="mt-6 inline-flex items-center rounded-full bg-[#2562f4] px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1f53cf]">
                  Más Proyectos
          </button>
        </div>
      </div>
    </Section>
  );
}
