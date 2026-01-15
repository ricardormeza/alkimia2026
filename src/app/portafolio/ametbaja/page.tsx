import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const galleryImages = [
  "/portafolio/ametbaja/alkimia-marketing-redes-sociales-amet-1-1536x1024.webp",
  "/portafolio/ametbaja/alkimia-marketing-redes-sociales-amet-2-scaled.webp",
  "/portafolio/ametbaja/alkimia-marketing-redes-sociales-amet-3-1536x1024.webp",
  
 
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
                  Branding / Web
                </p>
                <h1 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl">
                  AmetBaja
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  TODO: copy
                </p>
                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  TODO: copy
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
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e7e0d6]"
                  >
                    <Image
                      src={src}
                      alt="ametbaja"
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
