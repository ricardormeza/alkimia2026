"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDraft2Digital } from "react-icons/fa";
import { ImMagicWand } from "react-icons/im";
import { RxRocket } from "react-icons/rx";
import { GrCodepen } from "react-icons/gr";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ShinyText from "@/components/ui/ShinyText";
import { IoSparklesSharp } from "react-icons/io5";

const quickActions = [
  {
    title: "Have a Project?",
    subtitle: "hello@alkimia.agency",
    href: "mailto:hello@alkimia.agency",
  },
  {
    title: "Want to Work with Us?",
    subtitle: "Send Brief",
    href: "/contacto",
  },
  {
    title: "See What We Do!",
    subtitle: "Our Services",
    href: "/branding",
  },
];

const services = [
  { label: "Branding", href: "/branding", icon: FaDraft2Digital },
  { label: "Diseno Grafico", href: "/servicio-de-diseno-grafico", icon: ImMagicWand },
  { label: "Marketing Digital", href: "/marketing-digital", icon: RxRocket },
  { label: "Desarrollo Web", href: "/diseno-de-paginas-web", icon: GrCodepen },
];

const slideshowImages = [
  {
    src: "/portafolio/alkimia-agency-munoz-realty-portafolio-diseno-imagen-corporativa.webp",
    alt: "Munoz Realty portfolio",
  },
  {
    src: "/portafolio/alkimia-diseno-de-empaque-acento-cafeteria.webp",
    alt: "Acento Cafeteria packaging",
  },
  {
    src: "/portafolio/alkimia-marketing-grupo-valcas-cobroplan1.webp",
    alt: "Grupo Valcas marketing",
  },
  {
    src: "/portafolio/alkimia-publicidad-branding-sinley-img6.webp",
    alt: "Sinley branding",
  },
  {
    src: "/portafolio/imagen-corporativa-alkimia-marketing.webp",
    alt: "Alkimia corporate branding",
  },
  {
    src: "/portafolio/web-mock-jblas-scaled.webp",
    alt: "JBLAS web mock",
  },
];
const specialties = [
  "Redes sociales",
  "Branding (identidad)",
  "SEO (posicionamiento)",
  "Campañas Meta Ads",
  "Desarrollo web",
  "Diseño gráfico profesional",
];

export default function Page() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideshowPaused, setSlideshowPaused] = useState(false);

  useEffect(() => {
    if (slideshowPaused) {
      return;
    }

    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slideshowPaused]);
  const cardStagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardFadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white text-[#111]">
      <Header active="nosotros" variant="light" />
      <main>        
        <Section className="pt-10">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-black/50">
                  Alkimia
                </p>
                <h1 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Somos una agencia de branding y marketing digital ubicada
                  orgullosamente en la esquina de México, Tijuana B.C.
                </h1>
                <p className="mt-4 max-w-xl text-xl leading-relaxed text-black/70">
                  Con pasión, creatividad y empeño, diseñamos proyectos
                  únicos en branding, páginas web y redes sociales, adaptados a
                  las necesidades para hacer realidad tu visión.
                </p>
              </div>
              <motion.div
                className="relative mx-auto h-[300px] w-full max-w-[520px] sm:h-[340px] md:h-[440px] md:max-w-[660px]"
                variants={cardStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <motion.div
                  className="absolute right-0 top-0 h-[220px] w-[260px] overflow-hidden rounded-[28px] bg-[#4db6e5] shadow-[0_24px_40px_rgba(0,0,0,0.18)] sm:h-[260px] sm:w-[300px] md:h-[380px] md:w-[420px]"
                  variants={cardFadeUp}
                >
                  <Image
                    src="/portafolio/web-mock-jblas-scaled.webp"
                    alt="Web mock"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 70vw, 40vw"
                  />
                </motion.div>
                <motion.div
                  className="absolute left-0 top-12 z-10 h-[200px] w-[220px] overflow-hidden rounded-[28px] bg-[#d3a21a] shadow-[0_28px_50px_rgba(0,0,0,0.22)] sm:top-16 sm:h-[230px] sm:w-[250px] md:top-20 md:h-[310px] md:w-[340px]"
                  variants={cardFadeUp}
                >
                  <Image
                    src="/portafolio/alkimia-diseno-de-empaque-acento-cafeteria.webp"
                    alt="Acento Cafe"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 60vw, 35vw"
                  />
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </Section>

        <Section className="pt-6">
          <Container>
            <motion.div
              className="grid gap-0 border-y border-black/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-black/10"
              variants={cardStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div key={service.label} variants={cardFadeUp} className="h-full">
                    <Link
                      href={service.href}
                      className="group flex h-full flex-col items-start justify-between gap-10 px-8 py-10 transition-colors duration-200 hover:bg-black/5"
                    >
                        <div className="flex w-full flex-col items-start gap-4">
                        <Icon className="h-10 w-10 text-[#2562f4]" aria-hidden="true" />
                        <ShinyText
                          className="text-base font-semibold"
                          text={service.label}
                          color="#2562f4"
                          shineColor="#000000"
                          speed={2}
                          spread={120}
                          direction="left"
                        />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-black/60">
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          &rarr;
                        </span>
                        <span className="inline-block max-w-0 -translate-x-2 overflow-hidden whitespace-nowrap opacity-0 transition-[max-width,opacity,transform] duration-300 group-hover:max-w-[120px] group-hover:translate-x-0 group-hover:opacity-100">
                          Ver mas
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </Container>
        </Section>

        <Section className="pt-10">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Columna 1 */}
              <div className="space-y-6 md:text-xl text-sm leading-relaxed text-black/70">
                <p>
                  En Alkimia, llevamos 15 años transformando ideas en historias de éxito. Somos una agencia de marketing digital apasionada por impulsar marcas y conectar con audiencias a través de soluciones creativas y personalizadas.
                </p>
                <p>
                  Nos especializamos en trabajar con pequeñas y medianas empresas (pymes), ofreciendo servicios diseñados para cubrir sus necesidades específicas y maximizar su crecimiento.
                </p>
                <p>Nuestro equipo de profesionales está especializado en:</p>
                <ul className="space-y-3">
                  <li><span className="font-semibold">Redes sociales</span>: Gestionamos y optimizamos tus plataformas para fortalecer tu presencia digital.</li>
                  <li><span className="font-semibold">Branding</span>: Diseñamos identidades únicas que reflejan la esencia de tu marca.</li>
                  <li><span className="font-semibold">SEO</span>: Potenciamos tu posicionamiento en buscadores para que llegues más lejos.</li>

                </ul>
              </div>

              {/* Columna 2 */}
              <div className="space-y-6 md:text-xl text-sm leading-relaxed text-black/70">
                <ul className="space-y-3">
                  <li><span className="font-semibold">Campañas de Meta Ads</span>: Creamos estrategias efectivas que generan resultados.</li>
                  <li><span className="font-semibold">Desarrollo de páginas web</span>: Diseñamos sitios atractivos, funcionales y adaptados a tus necesidades.</li>
                  <li><span className="font-semibold">Diseño gráfico profesional</span>: Damos vida a tus ideas con diseños impactantes y memorables.</li>
                </ul>
                <p>Cada proyecto que realizamos está pensado a medida, porque creemos en la personalización como clave del éxito.</p>
                <p>
                  Nos apasiona trabajar codo a codo con nuestros clientes, entendiendo sus objetivos y superando sus expectativas.
                </p>
                <p>Haz que tu marca destaque. ¡Contáctanos hoy y descubre todo lo que podemos hacer juntos!</p>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="pt-10">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
              <div>
                <div className="flex items-center gap-3">
                <p className="text-xs uppercase tracking-[0.4em] text-black/50">
                  Alkimia Agency
                </p>
                <IoSparklesSharp className="text-2xl text-black" />
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl">
              <ShinyText
                      text="Creamos soluciones creativas de primer nivel para tu marca."
                      color="#2562f4"
                      shineColor="#000000"
                      speed={2}
                      spread={120}
                      direction="left"
                        yoyo={false}
                      pauseOnHover={false}
                    />
                    </h2>
                
                <Link
                  href="/contacto"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#2562f4] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1f53cf] sm:w-auto"
                >
                  Contáctanos
                </Link>
              </div>
              <div
                className="relative h-[540px] w-full overflow-hidden rounded-2xl bg-[#d3a21a]"
                onMouseEnter={() => setSlideshowPaused(true)}
                onMouseLeave={() => setSlideshowPaused(false)}
              >
                <AnimatePresence>
                  <motion.div
                    key={slideshowImages[slideIndex].src}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.02 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={slideshowImages[slideIndex].src}
                      alt={slideshowImages[slideIndex].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 80vw, 40vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
