"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const tabs = [
  {
    key: "branding",
    label: "Branding",
    src: "/portafolio/alkimia-publicidad-branding-sinley-img6.webp",
  },
  {
    key: "diseno-web",
    label: "Dise\u00f1o Web",
    src: "/portafolio/web-mock-jblas-scaled.webp",
  },
  {
    key: "marketing-digital",
    label: "Marketing Digital",
    src: "/portafolio/alkimia-diseno-de-empaque-acento-cafeteria.webp",
  },
  {
    key: "diseno-grafico",
    label: "Dise\u00f1o Gr\u00e1fico",
    src: "/portafolio/alkimia-agency-munoz-realty-portafolio-diseno-imagen-corporativa.webp",
  },
];

export default function PortafolioDos() {
  const [activeKey, setActiveKey] = useState(tabs[0].key);
  const activeTab = tabs.find((tab) => tab.key === activeKey) ?? tabs[0];

  return (
    <Section>
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
      </div>
    </Section>
  );
}
