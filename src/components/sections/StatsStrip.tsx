import Container from "@/components/ui/Container";

const stats = [
  { value: "98", label: "Proyectos" },
  { value: "65", label: "Clientes" },
  { value: "10+", label: "Años" },
  { value: "15k", label: "Tazas de Café" },
];

export default function StatsStrip() {
  return (
    <section className="bg-[#151515] py-10 md:py-12">
      <Container>
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                {stat.label}
              </p>
              <p className="text-4xl font-semibold text-[#2562f4] sm:text-5xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
