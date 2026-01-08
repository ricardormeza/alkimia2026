import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ScrollGradientText from "@/components/ui/ScrollGradientText";

export default function BrandManifesto() {
  return (
    <Section className="pb-6 md:pb-8 lg:pb-10">
      <Container>
        <div className="mx-auto max-w-6xl text-center">
          <ScrollGradientText className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Transformamos tu visión en branding,
            <br />
            diseño de páginas web y redes sociales con dedicación,
            <br />
            creatividad y propósito.
          </ScrollGradientText>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/70">
            Agencia de Marketing Digital
          </p>
        </div>
      </Container>
    </Section>
  );
}
