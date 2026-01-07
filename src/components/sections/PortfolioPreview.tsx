import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function PortfolioPreview() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Portafolio
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`portfolio-${index}`}
              className="flex min-h-[170px] items-center justify-center rounded-2xl border-2 border-[#0b0b0b] bg-[#202020] text-xs text-white/50"
            >
              TODO: image
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/portafolio"
            className="rounded-full bg-[#2562f4] px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1f53cf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Más Proyectos
          </Link>
        </div>
      </Container>
    </Section>
  );
}
