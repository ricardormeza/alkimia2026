import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b]">
      <Container className="py-12">
        <div className="grid gap-10 text-sm text-white/70 grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2 space-y-4 lg:col-span-1">
            <Link href="/" className="inline-flex items-center justify-center lg:justify-start">
              <Image
                src="/images/Alkimia-logo-blanco.webp"
                alt="Alkimia"
                width={160}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>
            
          </div>
          <div className="space-y-3 lg:col-span-1">
            <p className="text-white">Office</p>
            <div className="space-y-2">
              <p>Tijuana, B.C., México</p>
              <a
                href="tel:+526642414991"
                className="block text-white/80 hover:text-black "
                  >
                    +52 664 241 4991
                  </a>
              <a
                href="mailto:hello@alkimia.agency"
                className="block text-white/80 hover:text-black"
                  >
                    hola@alkimia.agency
                  </a>
            </div>
          </div>
          <div className="space-y-3 lg:col-span-1">
            <p className="text-white">Links</p>
            <div className="flex flex-col gap-2">
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
              <Link href="/servicios" className="hover:text-white">
                Servicios
              </Link>
              <Link href="/nosotros" className="hover:text-white">
                Nosotros
              </Link>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <Link href="/contacto" className="hover:text-white">
                Contacto
              </Link>
            </div>
          </div>
          <div className="col-span-2 space-y-4 lg:col-span-1">
            <p className="text-white">Newsletter</p>
            <form className="space-y-3">
              <label className="sr-only" htmlFor="footer-email">
                Email
              </label>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-[#0f0f0f] px-4 py-2">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-xs font-semibold text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2562f4]"
                >
                  Enviar
                </button>
              </div>
              <label className="flex items-start gap-2 text-xs">
                <input
                  type="checkbox"
                  className="mt-0.5 h-3 w-3 rounded border-white/40 bg-transparent text-[#2562f4] focus-visible:ring-2 focus-visible:ring-[#2562f4]"
                />
                <span>Estoy de acuerdo con las Políticas de Privacidad</span>
              </label>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>Alkimia Agency &copy; {year}. Todos los derechos reservados.</p>
          <div className="flex flex-col gap-1 md:items-end">
            <Link href="/politicas-de-privacidad" className="hover:text-white">
              Politicas de privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:text-white">
              Terminos y condiciones
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
