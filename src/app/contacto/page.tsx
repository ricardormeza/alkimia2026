import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ShinyText from "@/components/ui/ShinyText";

const infoItems = [
  {
    title: "Horario",
    description: "Lunes a Viernes: 8 AM - 6 PM",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Direcci\u00f3n",
    description: "Quer\u00e9taro 233-A int. 4 Madero Sur, 22040 Tijuana, B.C.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Cont\u00e1ctanos",
    description: "Tel\u00e9fono: +52 664 241 4991\nEmail: hello@alkimia.agency",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.9v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 3.1 4.18 2 2 0 0 1 5.1 2h2a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L8.2 9.8a16 16 0 0 0 6 6l1.61-1.06a2 2 0 0 1 2.11-.45c.76.24 1.55.42 2.36.54A2 2 0 0 1 22 16.9z" />
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <Header active="contacto" variant="light" />
      <main>
        <Section className="pt-8">
          <Container>
            <div className="grid gap-6 text-center sm:grid-cols-3">
              {infoItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center gap-3 text-sm text-black/70"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-[#2562f4]">
                    {item.icon}
                  </div>
                  <p className="md:text-xl text-sm font-semibold text-black">{item.title}</p>
                  <p className="whitespace-pre-line md:text-xl text-xs text-black/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="pt-4">
          <Container>
            <div className="overflow-hidden rounded-2xl border border-black/10">
              <iframe
                title="Mapa Alkimia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.165238394452!2d-117.02503709999999!3d32.521733499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d949ae6473f6d5%3A0xc0579d4e9205faa9!2sAlkimia%20Marketing%20%7C%20Agencia%20de%20Marketing%20Digital%20en%20Tijuana!5e0!3m2!1ses!2smx!4v1768501522585!5m2!1ses!2smx"
                className="h-[280px] w-full md:h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Container>
        </Section>

        <Section className="pt-10">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-black/50">
                  Contáctanos
                </p>
                <div>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl">
              <ShinyText
                      text="¿Tienes preguntas?"
                      color="#2562f4"
                      shineColor="#6f65fb"
                      speed={2}
                      spread={120}
                      direction="left"
                        yoyo={false}
                      pauseOnHover={false}
                    />
                    
                    </h3>
                  <p className="md:text-2xl font-semibold">¡Ponte en contacto con nosotros!</p>
                </div>
                <h4 className="mt-6 md:text-xl">¡Hagamos alquimia juntos!</h4>
                <p className="mt-4 md:text-xl text-sm leading-relaxed text-black/70">
                  Tu visión es el elemento clave; nuestra creatividad, la chispa que la transforma. ¡Contáctanos y hagamos magia juntos!
                </p>
                <div className="mt-6 space-y-3 text-sm text-black/70">
                  <p className="md:text-xl">Tijuana, B.C. México</p>
                  <a
                    href="tel:+526642414991"
                    className="block text-black/80 hover:text-black md:text-xl"
                  >
                    +52 664 241 4991
                  </a>
                  <a
                    href="mailto:hello@alkimia.agency"
                    className="block text-black/80 hover:text-black md:text-xl"
                  >
                    hola@alkimia.agency
                  </a>
                </div>
              </div>
              <div className="border border-black/10 p-6">
                <form className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-black/60" htmlFor="nombre">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      className="mt-1 w-full  border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
                      placeholder="Nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black/60" htmlFor="empresa">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      className="mt-1 w-full  border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
                      placeholder="Empresa"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black/60" htmlFor="telefono">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      className="mt-1 w-full  border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
                      placeholder="Teléfono / WhatsApp"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black/60" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="mt-1 w-full  border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="text-xs font-semibold text-black/60"
                      htmlFor="servicio"
                    >
                      Servicio de interés
                    </label>
                    <select
                      id="servicio"
                      className="mt-1 w-full  border border-black/15 bg-white px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
                    >
                      <option>Selecciona una opción</option>
                      <option>Branding</option>
                      <option>Diseño Gráfico</option>
                      <option>Marketing Digital</option>
                      <option>Desarrollo Web</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-black/60" htmlFor="mensaje">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      rows={4}
                      className="mt-1 w-full  border border-black/15 px-3 py-2 text-sm text-black focus:border-[#2562f4] focus:outline-none focus:ring-2 focus:ring-[#2562f4]/20"
                      placeholder="Mensaje"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-3  border border-black/15 px-3 py-3 text-xs text-black/60">
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
