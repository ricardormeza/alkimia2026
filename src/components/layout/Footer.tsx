import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b]">
      <Container className="py-12">
        <div className="grid gap-10 text-sm text-white/70 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="text-lg font-semibold text-white">
              Alkimia
            </Link>
            <p>TODO: copy</p>
          </div>
          <div className="space-y-3">
            <p className="text-white">Office</p>
            <div className="space-y-2">
              <p>TODO: copy</p>
              <p>TODO: copy</p>
              <p>TODO: copy</p>
            </div>
          </div>
          <div className="space-y-3">
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
          <div className="space-y-4">
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
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>TODO: copy</p>
        </div>
      </Container>
    </footer>
  );
}
