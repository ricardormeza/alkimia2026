import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const portfolioItems = [
  "/portafolio/alkimia-diseno-de-empaque-acento-cafeteria.webp",
  "/portafolio/web-mock-jblas-scaled.webp",
  "/portafolio/imagen-corporativa-alkimia-marketing.webp",
  "/portafolio/alkimia-agency-munoz-realty-portafolio-diseno-imagen-corporativa.webp",
  "/portafolio/alkimia-publicidad-branding-sinley-img6.webp",
  "/portafolio/alkimia-marketing-grupo-valcas-cobroplan1.webp",
  "/portafolio/alkimia-diseno-de-empaque-acento-cafeteria.webp",
  "/portafolio/web-mock-jblas-scaled.webp",
  "/portafolio/alkimia-publicidad-branding-sinley-img6.webp",
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
                <p className="text-xs uppercase tracking-[0.4em] text-black/50">
                  Branding
                </p>
                <h1 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Esto es lo que hacemos y lo hacemos muy bien.
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  Creamos identidades claras y consistentes que comunican el valor
                  de tu marca. Desde el posicionamiento hasta el sistema visual,
                  alineamos estrategia y dise\u00f1o para que tu negocio destaque.
                </p>
                <button className="mt-6 inline-flex items-center rounded-full bg-[#2562f4] px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1f53cf]">
                  Solicitar cotizaci\u00f3n
                </button>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#111]">
                <Image
                  src="/portafolio/imagen-corporativa-alkimia-marketing.webp"
                  alt="Branding"
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
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {portfolioItems.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-black/10"
                >
                  <Image
                    src={src}
                    alt="Proyecto Branding"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 45vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="pt-8">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-black/50">
                  \u00a1Hagamos alkimia juntos!
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl">
                  Empecemos a trabajar juntos
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  Tu marca est\u00e1 lista para evolucionar. Comparte tu idea y
                  construyamos una identidad que conecte con tu audiencia.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 p-6">
                <form className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-black/60" htmlFor="nombre">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
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
                      className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
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
                      className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
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
                      className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
                      placeholder="Comentarios"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-3 rounded-md border border-black/15 px-3 py-3 text-xs text-black/60">
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
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
