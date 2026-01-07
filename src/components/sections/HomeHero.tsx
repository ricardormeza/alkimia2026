import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

type MosaicTileProps = {
  className?: string;
  src: string;
  alt: string;
  priority?: boolean;
};

function MosaicTile({ className, src, alt, priority }: MosaicTileProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 border-[#0b0b0b] bg-[#202020] ${
        className ?? ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
        priority={priority}
      />
    </div>
  );
}

export default function HomeHero() {
  return (
    <Section className="pt-10 md:pt-14 lg:pt-16">
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="max-w-3xl text-center text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Una aleación que logra resultados increíbles
          </h1>
          <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:auto-rows-[70px] md:gap-4 lg:mt-10 lg:auto-rows-[90px] lg:gap-5">
            <MosaicTile
              className="md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-3"
              src="/images/alkimia-publicidad-diseno-de-empaque-acento-coffee-roasters-home-1.webp"
              alt="Acento Coffee Roasters empaque"
              priority
            />
            <MosaicTile
              className="md:col-start-1 md:col-end-5 md:row-start-3 md:row-end-7"
              src="/images/alkimia-publicidad-diseno-de-empaque-acento-coffee-roasters-home-2.webp"
              alt="Acento Coffee Roasters empaque"
            />
            <MosaicTile
              className="md:col-start-5 md:col-end-11 md:row-start-1 md:row-end-7"
              src="/images/alkimia-publicidad-diseno-de-empaque-acento-coffee-roasters-home-3.webp"
              alt="Acento Coffee Roasters empaque"
            />
            <Link
              href="/contacto"
              className="relative flex min-h-[140px] items-center justify-center rounded-2xl border-2 border-[#0b0b0b] bg-[#2562f4] text-center text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:col-start-9 md:col-end-11 md:row-start-1 md:row-end-3 md:z-10"
            >
              <span>Comencemos</span>
              <span className="absolute right-4 top-4 text-lg">↗</span>
            </Link>
            <MosaicTile
              className="md:col-start-11 md:col-end-13 md:row-start-1 md:row-end-7"
              src="/images/alkimia-publicidad-diseno-de-empaque-acento-coffee-roasters-home-4.webp"
              alt="Acento Coffee Roasters empaque"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
