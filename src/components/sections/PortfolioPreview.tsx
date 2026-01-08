import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const portfolioItems = [
  {
    src: "/portafolio/alkimia-agency-munoz-realty-portafolio-diseno-imagen-corporativa.webp",
    title: "Munoz Realty",
  },
  {
    src: "/portafolio/alkimia-diseno-de-empaque-acento-cafeteria.webp",
    title: "Acento Cafe",
  },
  {
    src: "/portafolio/alkimia-marketing-grupo-valcas-cobroplan1.webp",
    title: "Grupo Valcas",
  },
  {
    src: "/portafolio/alkimia-publicidad-branding-sinley-img6.webp",
    title: "Sinley Branding",
  },
  {
    src: "/portafolio/imagen-corporativa-alkimia-marketing.webp",
    title: "Imagen Corporativa",
  },
  {
    src: "/portafolio/web-mock-jblas-scaled.webp",
    title: "Web JBLAS",
  },
];

export default function PortfolioPreview() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Portafolio
          </h2>
        </div>
        <div className="mt-10 grid auto-rows-[180px] gap-6 sm:auto-rows-[220px] sm:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.src}
              className="group relative overflow-hidden rounded-[28px] border-2 border-[#0b0b0b] bg-[#202020]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/portafolio"
            className="rounded-full bg-[#2562f4] px-8 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#1f53cf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Mas Proyectos
          </Link>
        </div>
      </Container>
    </Section>
  );
}
