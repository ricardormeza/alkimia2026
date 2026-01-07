import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function IntroSplit() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              agencia de marketing digital
            </p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
              Somos una agencia de marketing digital especializada en resultados
            </h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-white/70">TODO: copy</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
