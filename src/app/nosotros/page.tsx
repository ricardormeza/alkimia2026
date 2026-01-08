import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

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
  { label: "Branding", href: "/branding" },
  { label: "Diseño Gráfico", href: "/servicio-de-diseno-grafico" },
  { label: "Marketing Digital", href: "/marketing-digital" },
  { label: "Desarrollo Web", href: "/diseno-de-paginas-web" },
];

const specialties = [
  "Redes sociales (gestión/optimización)",
  "Branding (identidad)",
  "SEO (posicionamiento)",
  "Campañas Meta Ads",
  "Desarrollo web",
  "Diseño gráfico profesional",
];

export default function Page() {
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
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/70">
                  Con pasión, creatividad y empeño, diseñamos proyectos
                  únicos en branding, páginas web y redes sociales, adaptados a
                  las necesidades para hacer realidad tu visión.
                </p>
              </div>
              <div className="relative mx-auto h-[320px] w-full max-w-[520px]">
                <div className="absolute right-0 top-0 h-[240px] w-[240px] overflow-hidden rounded-2xl bg-[#4db6e5]">
                  <Image
                    src="/portafolio/web-mock-jblas-scaled.webp"
                    alt="Web mock"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 70vw, 40vw"
                  />
                </div>
                <div className="absolute left-0 top-12 h-[220px] w-[220px] overflow-hidden rounded-2xl bg-[#d3a21a]">
                  <Image
                    src="/portafolio/alkimia-diseno-de-empaque-acento-cafeteria.webp"
                    alt="Acento Cafe"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 60vw, 35vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="pt-6">
          <Container>
            <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="group flex flex-col items-center gap-4 rounded-2xl border border-black/10 px-6 py-8 transition-colors duration-200 hover:border-black/30"
                >
                  <div className="h-10 w-10 rounded-full border border-black/15 bg-white"></div>
                  <p className="text-sm font-semibold text-black">{service.label}</p>
                  <span className="text-xs text-black/40">+</span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="pt-10">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="space-y-6 text-sm leading-relaxed text-black/70">
                <p>
                  En Alkimia, llevamos más de una década transformando ideas
                  en historias de éxito. Somos una agencia de marketing digital
                  y branding apasionada por ayudar marcas a conectar con su
                  audiencia mediante diseño estratégico y soluciones creativas.
                </p>
                <p>
                  Nos especializamos en branding, diseño gráfico, marketing
                  digital y desarrollo web para negocios que buscan diferenciarse
                  y crecer con una identidad sólida.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {specialties.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2562f4]"></span>
                    <p className="text-sm text-black/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section className="pt-4">
          <Container>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-black/40">
                Certificaciones
              </p>
              <div className="mt-4 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15">
                  <span className="text-[10px] font-semibold text-black/60">G</span>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="pt-10">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-black/50">
                  Alkimia Agency
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl">
                  Creamos soluciones creativas de primer nivel para tu marca.
                </h2>
                <Link
                  href="/contacto"
                  className="mt-6 inline-flex items-center rounded-full bg-[#2562f4] px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1f53cf]"
                >
                  Contáctanos
                </Link>
              </div>
              <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-[#d3a21a]">
                <Image
                  src="/portafolio/alkimia-diseno-de-empaque-acento-cafeteria.webp"
                  alt="Acento Cafe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
