"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  active?: "inicio" | "nosotros" | "servicios" | "portafolio" | "contacto";
};

const navItems = [
  { href: "/", label: "Inicio", key: "inicio" },
  { href: "/nosotros", label: "Nosotros", key: "nosotros" },
  { href: "/portafolio", label: "Portafolio", key: "portafolio" },
  { href: "/contacto", label: "Contacto", key: "contacto" },
];

const serviceItems = [
  { href: "/branding", label: "Branding" },
  { href: "/servicio-de-diseno-grafico", label: "Diseño Gráfico" },
  { href: "/diseno-de-paginas-web", label: "Páginas Web" },
  { href: "/marketing-digital", label: "Marketing Digital" },
  { href: "/contacto", label: "Solicitar una cotización" },
];

export default function Header({ active = "inicio" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-white/10">
      <div className="relative">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <Link
              href="/"
              className={`relative border-b-2 pb-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                active === "inicio"
                  ? "border-[#2562f4] text-white"
                  : "border-transparent hover:text-[#2562f4]"
              }`}
              aria-current={active === "inicio" ? "page" : undefined}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className={`relative border-b-2 pb-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                active === "nosotros"
                  ? "border-[#2562f4] text-white"
                  : "border-transparent hover:text-[#2562f4]"
              }`}
              aria-current={active === "nosotros" ? "page" : undefined}
            >
              Nosotros
            </Link>
            <div className="relative group">
              <button
                type="button"
                className={`relative border-b-2 pb-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-200 group-hover:after:scale-x-100 ${
                  active === "servicios"
                    ? "border-[#2562f4] text-white"
                    : "border-transparent hover:text-[#2562f4]"
                }`}
                aria-haspopup="true"
                aria-expanded="false"
              >
                Servicios
              </button>
              <div className="pointer-events-none absolute left-0 top-full z-20 w-56 pt-3 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-3 shadow-lg">
                  <div className="flex flex-col gap-2 text-sm text-white/80">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/portafolio"
              className={`relative border-b-2 pb-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                active === "portafolio"
                  ? "border-[#2562f4] text-white"
                  : "border-transparent hover:text-[#2562f4]"
              }`}
              aria-current={active === "portafolio" ? "page" : undefined}
            >
              Portafolio
            </Link>
            <Link
              href="/contacto"
              className={`relative border-b-2 pb-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                active === "contacto"
                  ? "border-[#2562f4] text-white"
                  : "border-transparent hover:text-[#2562f4]"
              }`}
              aria-current={active === "contacto" ? "page" : undefined}
            >
              Contacto
            </Link>
          </nav>
          <Link
            href="/"
            className="text-lg font-semibold tracking-wide text-white md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
            aria-label="Alkimia"
          >
            <Image
              src="/images/Alkimia-logo-blanco.webp"
              width={120}
              height={32}
              alt="Alkimia"
              className="h-9 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2562f4]"
              aria-label="Buscar"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2562f4] md:hidden"
              aria-label="Abrir menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen ? (
          <div className="border-t border-white/10 bg-[#0f0f0f] md:hidden">
            <nav className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 text-sm text-white/80 sm:px-6">
              {navItems.map((item) => {
                const isActive = item.key === active;
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`text-base transition-colors duration-200 ${
                      isActive ? "text-white" : "hover:text-[#2562f4]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="space-y-2 pt-2">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Servicios
                </p>
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base transition-colors duration-200 hover:text-[#2562f4]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
