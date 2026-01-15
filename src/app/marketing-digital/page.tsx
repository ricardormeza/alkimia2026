"use client";

import Image from "next/image";
import Link from "next/link";
import {  motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ShinyText from "@/components/ui/ShinyText";

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
    src: "/portafolio/alkimia-publicidad-branding-sinley-img6.webp",
    alt: "Sinley",
    href: "/portafolio/sinley",
    cta: "Ver proyecto",
  },
  {
    src: "/portafolio/imagen-corporativa-alkimia-marketing.webp",
    alt: "ABBaja",
    href: "/portafolio/abbaja",
    cta: "Ver proyecto",
  },
  {
    src: "/portafolio/alkimia-publicidad-proyecto-sophia-grupo-cosmopolitan-valla-perimetral-1.webp",
    alt: "Cosmo Sophia",
    href: "/portafolio/cosmo-sophia",
    cta: "Ver proyecto",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <Header active="servicios" variant="light" />
      <main>
        <Section className="pt-10">
          <Container>
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
              <div>
                <h1 className="text-xs uppercase tracking-[0.4em] text-black/50">
                  Marketing Digital (Redes sociales, SEO, Google Ads)
                </h1>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl">
              <ShinyText
                      text="Esto es lo que hacemos y lo hacemos muy bien."
                      color="#2562f4"
                      shineColor="#000000"
                      speed={2}
                      spread={120}
                      direction="left"
                        yoyo={false}
                      pauseOnHover={false}
                    />
                    </h2>
                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  Hoy en día, las redes sociales son esenciales para conectar y construir relaciones auténticas con el público. En Alkimia digital te ofrecemos un servicio de gestión de redes sociales pensado para pequeñas y medianas empresas, enfocado en comunicar de manera efectiva y adaptada a tu audiencia.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  Nos encargamos de crear estrategias de contenido que capturen la esencia de tu marca y resuenen con tus clientes potenciales. Desde publicaciones relevantes hasta la interacción con tu comunidad, nos aseguramos de que cada mensaje esté alineado con tus objetivos y llegue al público adecuado.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  Aprovecha el poder de las redes sociales para impulsar tu presencia y crecer de manera orgánica y auténtica.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  ¡Contáctanos y hablemos de cómo podemos llevar tu marca al siguiente nivel en el mundo digital!
                </p>
                <button className="mt-6 inline-flex items-center rounded-full bg-[#2562f4] px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1f53cf]">
                  Solicitar cotización
                </button>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#e7e0d6]">
                <Image
                  src="/portafolio/alkimia-publicidad-branding-sinley-img6.webp"
                  alt="Marketing digital"
                  width={960}
                  height={640}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </Container>
        </Section>

        <Section className="pt-6">
          <Container>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item, index) => {
                const col = index % 3;
                const row = Math.floor(index / 3);
                const delay = row * 0.08 + col * 0.06;
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
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay }}
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
            </div>
          </Container>
        </Section>

        <Section className="pt-8">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl">
              <ShinyText
                      text="¡Hagamos alquimia juntos!"
                      color="#2562f4"
                      shineColor="#6f65fb"
                      speed={2}
                      spread={120}
                      direction="left"
                        yoyo={false}
                      pauseOnHover={false}
                    />
                    </h3>
                
                <p className="mt-4 md:text-xl text-sm leading-relaxed text-black/70">
                  Tu visión es el elemento clave; nuestra creatividad, la chispa que la transforma. ¡Contáctanos y hagamos magia juntos!
                </p>
              </div>
              <div >
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl mb-2">
                  Empecemos a trabajar juntos
                </h2>
                
                <div className=" border border-black/10 p-6">
                <form className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-black/60" htmlFor="nombre">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      className="mt-1 w-full  border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
                      placeholder="Nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black/60" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="mt-1 w-full  border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black/60" htmlFor="whatsapp">
                      WhatsApp
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      className="mt-1 w-full  border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
                      placeholder="WhatsApp"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black/60" htmlFor="comentarios">
                      Comentarios
                    </label>
                    <textarea
                      id="comentarios"
                      rows={4}
                      className="mt-1 w-full  border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
                      placeholder="Comentarios"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-3  border border-black/15 px-3 py-3 text-xs text-black/60">
                    <div className="h-4 w-4 rounded-sm border border-black/20" />
                    No soy un robot
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#2562f4] px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1f53cf]"
                  >
                    Enviar
                  </button>
                </form>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
