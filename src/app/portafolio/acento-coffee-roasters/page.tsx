import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const galleryImages = [
  "/portafolio/acento-coffe-roasters/alkimia-fotografia-gastronomica-acento-coffee-1290x725.webp",
  "/portafolio/acento-coffe-roasters/alkimia-publicidad-diseno-empaque-acento-coffee-roasters-1-scaled.webp",
  "/portafolio/acento-coffe-roasters/alkimia-publicidad-diseno-empaque-acento-coffee-roasters-2-scaled.webp",
  "/portafolio/acento-coffe-roasters/alkimia-diseno-de-empaque-acento-cafeteria-1-2048x1365.webp",
  "/portafolio/acento-coffe-roasters/alkimia-diseno-de-empaque-acento-cafeteria-2.jpg",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <Header active="portafolio" variant="light" />
      <main>
        <Section className="pt-10">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <p className="text-xs uppercase tracking-[0.4em] text-black/50">
                  Branding / Packaging
                </p>
                <h1 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl">
                  Café con acento propio
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-black/70">Año: 2024</p>
                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  En este proyecto, asumimos el desafío de rediseñar la imagen de empaque para Acento Coffee Roasters. Nuestro objetivo fue dotar a la marca de una estética fresca y contemporánea que no solo conectara con sus clientes, sino que también reflejara la calidad excepcional de sus bebidas. Todo esto sin perder de vista su esencia y raíces auténticas, profundamente ligadas a la ciudad.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  El concepto “Café con acento propio” encapsula la identidad única de la marca, destacando su personalidad distintiva y fomentando una conexión genuina con sus consumidores, generando así un fuerte sentido de pertenencia.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/15 text-xs text-black/60">
                    Fb
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/15 text-xs text-black/60">
                    Ig
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/15 text-xs text-black/60">
                    Be
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {galleryImages.map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#d3a21a]"
                  >
                    <Image
                      src={src}
                      alt="Acento Coffee Roasters"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 40vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
