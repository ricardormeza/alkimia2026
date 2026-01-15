"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CiPhone } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

type HeaderProps = {
  active?: "inicio" | "nosotros" | "servicios" | "portafolio" | "contacto";
  variant?: "dark" | "light";
};

const navItems = [
  { href: "/", label: "Inicio", key: "inicio" },
  { href: "/nosotros", label: "Nosotros", key: "nosotros" },
  { href: "/servicios", label: "Servicios", key: "servicios" },
  { href: "/portafolio", label: "Portafolio", key: "portafolio" },
  { href: "/contacto", label: "Contacto", key: "contacto" },
];

const serviceItems = [
  { href: "/branding", label: "Branding" },
  { href: "/servicio-de-diseno-grafico", label: "Dise\u00f1o Gr\u00e1fico" },
  { href: "/diseno-de-paginas-web", label: "P\u00e1ginas Web" },
  { href: "/marketing-digital", label: "Marketing Digital" },
  { href: "/contacto", label: "Solicitar una cotizaci\u00f3n" },
];

export default function Header({ active = "inicio", variant = "dark" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isLight = variant === "light";
  const serviceMenuItems = serviceItems.filter((item) => item.href !== "/contacto");

  const borderColor = isLight ? "border-black/10" : "border-white/10";
  const navText = isLight ? "text-black/70" : "text-white/80";
  const navActive = isLight ? "text-black" : "text-white";
  const navAfter = isLight ? "after:bg-black/80" : "after:bg-white";
  const dropdownBg = isLight ? "bg-white" : "bg-[#0f0f0f]";
  const dropdownBorder = isLight ? "border-black/10" : "border-white/10";
  const dropdownText = isLight ? "text-black/70" : "text-white/80";
  const dropdownHover = isLight
    ? "hover:bg-black/5 hover:text-black"
    : "hover:bg-white/5 hover:text-white";
  const iconBorder = isLight ? "border-black/10" : "border-white/10";
  const iconText = isLight
    ? "text-black/70 hover:text-black"
    : "text-white/80 hover:text-white";
  const mobileBg = isLight ? "bg-white" : "bg-[#0f0f0f]";
  const mobileText = isLight ? "text-black/70" : "text-white/80";
  const mobileActive = isLight ? "text-black" : "text-white";
  const logoSrc = isLight
    ? "/images/alkimia-logo.webp"
    : "/images/Alkimia-logo-blanco.webp";

  useEffect(() => {
    if (!isOpen) {
      setIsServicesOpen(false);
    }
  }, [isOpen]);

  const navBase =
    "relative border-b-2 pb-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100";

  const mobileOverlay = {
    hidden: { scaleY: 0, transformOrigin: "top" },
    show: {
      scaleY: 1,
      transformOrigin: "top",
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      scaleY: 0,
      transformOrigin: "top",
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const mobileNav = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const mobileItem = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <header className={`border-b ${borderColor}`}>
      <div className="relative">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
          <nav className={`hidden items-center gap-6 text-sm md:flex ${navText}`}>
            <Link
              href="/"
              className={`${navBase} ${navAfter} ${navText} ${
                active === "inicio"
                  ? `border-[#2562f4] ${navActive}`
                  : "border-transparent hover:text-[#2562f4]"
              }`}
              aria-current={active === "inicio" ? "page" : undefined}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className={`${navBase} ${navAfter} ${navText} ${
                active === "nosotros"
                  ? `border-[#2562f4] ${navActive}`
                  : "border-transparent hover:text-[#2562f4]"
              }`}
              aria-current={active === "nosotros" ? "page" : undefined}
            >
              Nosotros
            </Link>
            <div className="relative group">
              <button
                type="button"
                className={`${navBase} ${navAfter} ${navText} ${
                  active === "servicios"
                    ? `border-[#2562f4] ${navActive}`
                    : "border-transparent hover:text-[#2562f4]"
                }`}
                aria-haspopup="true"
                aria-expanded="false"
              >
                Servicios
              </button>
              <div className="pointer-events-none absolute left-0 top-full z-20 w-56 pt-3 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className={`rounded-2xl border p-3 shadow-lg ${dropdownBorder} ${dropdownBg}`}>
                  <div className={`flex flex-col gap-2 text-sm ${dropdownText}`}>
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`rounded-lg px-3 py-2 transition-colors duration-200 ${dropdownHover}`}
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
              className={`${navBase} ${navAfter} ${navText} ${
                active === "portafolio"
                  ? `border-[#2562f4] ${navActive}`
                  : "border-transparent hover:text-[#2562f4]"
              }`}
              aria-current={active === "portafolio" ? "page" : undefined}
            >
              Portafolio
            </Link>
            <Link
              href="/contacto"
              className={`${navBase} ${navAfter} ${navText} ${
                active === "contacto"
                  ? `border-[#2562f4] ${navActive}`
                  : "border-transparent hover:text-[#2562f4]"
              }`}
              aria-current={active === "contacto" ? "page" : undefined}
            >
              Contacto
            </Link>
          </nav>
          <Link
            href="/"
            className={`text-lg font-semibold tracking-wide ${
              isLight ? "text-black" : "text-white"
            } md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2`}
            aria-label="Alkimia"
          >
            <Image
              src={logoSrc}
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
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2562f4] ${iconBorder} ${iconText}`}
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
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2562f4] md:hidden ${iconBorder} ${iconText}`}
              aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#2562f4]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className={`fixed inset-0 z-40 flex md:hidden ${mobileBg}`}
              role="dialog"
              aria-modal="true"
              variants={mobileOverlay}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <button
                type="button"
                className={`absolute right-5 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2562f4] ${
                  isLight
                    ? "border-[#2562f4]/30 text-[#2562f4] hover:border-[#2562f4]"
                    : "border-white/10 text-white/80 hover:text-white"
                }`}
                aria-label="Cerrar menu"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
              <motion.nav
                className={`mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 pb-10 pt-28 text-sm ${mobileText}`}
                variants={mobileNav}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={mobileItem}>
                  <Link
                    href="/"
                    className="mx-auto inline-flex items-center"
                    aria-label="Alkimia"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src={logoSrc}
                      width={160}
                      height={48}
                      alt="Alkimia"
                      className="h-10 w-auto"
                      priority
                    />
                  </Link>
                </motion.div>
                {navItems.map((item) => {
                  const isActive = item.key === active;
                  if (item.key === "servicios") {
                    return (
                      <motion.div key={item.key} variants={mobileItem} className="space-y-3">
                        <button
                          type="button"
                          className={`flex w-full items-center justify-between text-lg transition-colors duration-200 ${
                            isActive
                              ? mobileActive
                              : "hover:text-[#2562f4]"
                          }`}
                          aria-expanded={isServicesOpen}
                          onClick={() => setIsServicesOpen((prev) => !prev)}
                        >
                          <span>{item.label}</span>
                          <span
                            className={`transition-transform duration-200 ${
                              isServicesOpen ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          >
                            ▾
                          </span>
                        </button>
                        {isServicesOpen ? (
                          <div className="flex flex-col gap-2 pl-2">
                            {serviceMenuItems.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="text-base transition-colors duration-200 hover:text-[#2562f4]"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div key={item.key} variants={mobileItem}>
                      <Link
                        href={item.href}
                        className={`text-lg transition-colors duration-200 ${
                          isActive
                            ? mobileActive
                            : "hover:text-[#2562f4]"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div variants={mobileItem} className="flex items-center gap-3 pt-4 text-base">
                  <CiPhone className="h-4 w-4 text-[#2562f4]" aria-hidden="true" />
                  <a
                    href="tel:+526643062661"
                    className={`transition-colors duration-200 ${
                      isLight ? "text-[#2562f4] hover:text-[#1f53cf]" : "text-white/70 hover:text-white"
                    }`}
                  >
                    664 306 2661
                  </a>
                </motion.div>
                <motion.div variants={mobileItem} className="flex items-center gap-4 pt-4">
                  <a
                    href="https://web.facebook.com/alkimia.agency/"
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200 ${
                      isLight
                        ? "border-[#2562f4]/30 text-[#2562f4] hover:border-[#2562f4] hover:text-[#1f53cf]"
                        : "border-white/10 text-white/70 hover:text-white"
                    }`}
                    aria-label="Facebook"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebookF className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/alkimiacreatividad/"
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200 ${
                      isLight
                        ? "border-[#2562f4]/30 text-[#2562f4] hover:border-[#2562f4] hover:text-[#1f53cf]"
                        : "border-white/10 text-white/70 hover:text-white"
                    }`}
                    aria-label="Instagram"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaInstagram className="h-4 w-4" />
                  </a>
                </motion.div>
              </motion.nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
