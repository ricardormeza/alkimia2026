import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function HeroAlkimia() {
  return (
    <section className="flex w-full justify-center py-[clamp(12px,2vw,24px)]">
      <Container className="px-0 sm:px-4">
        <div className="relative w-full max-w-[1905px] aspect-[1905/973] rounded-[40px] ">
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              <div className="absolute left-[0%] top-[26.10%] h-[23.84%] w-[28.92%] rounded-[17px] border-2 border-[#0b0b0b33]">
                <Image
                  src="/images/alkimia-publicidad-diseno-de-empaque-acento-coffee-roasters-home-1.webp"
                  alt="Home 1"
                  fill
                  className="rounded-[17px] object-cover"
                  sizes="(min-width: 1280px) 30vw, 100vw"
                  priority
                />
              </div>

              <div className="absolute left-[0%] top-[53.13%] h-[46.87%] w-[41.52%]">
                <Image
                  src="/images/alkimia-publicidad-diseno-de-empaque-acento-coffee-roasters-home-2.webp"
                  alt="Home 2"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1280px) 40vw, 100vw"
                />
              </div>

              <div className="absolute left-[30.76%] top-[26.41%] h-[73.59%] w-[49.71%] rounded-[17px] ">
                <Image
                  src="/images/alkimia-publicidad-diseno-de-empaque-acento-coffee-roasters-home-3.webp"
                  alt="Home 3"
                  fill
                  className="rounded-[17px] object-cover"
                  sizes="(min-width: 1280px) 55vw, 100vw"
                />
              </div>

              <Link
                href="/contacto"
                className="absolute left-[62.73%] top-[27.13%] flex h-[34.94%] w-[17.85%] items-center justify-center rounded-[14px] border-2 border-[#0b0b0b] bg-[#2562f4] text-center text-[clamp(14px,1.2vw,18px)] font-medium text-white transition duration-200 hover:brightness-105"
              >
                Comencemos
                <span className="absolute right-4 top-4 text-lg" aria-hidden="true">
                  ↗
                </span>
              </Link>

              <div className="absolute left-[82.15%] top-[28.36%] h-[71.63%] w-[17.85%] rounded-[17px] border-2 border-[#0b0b0b]">
                <Image
                  src="/images/alkimia-publicidad-diseno-de-empaque-acento-coffee-roasters-home-4.webp"
                  alt="Home 4"
                  fill
                  className="rounded-[17px] object-cover"
                  sizes="(min-width: 1280px) 20vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
