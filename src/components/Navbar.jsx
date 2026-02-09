import Image from "next/image";
import Container from "./Container";

const links = [
  { href: "#empresa", label: "Empresa" },
  { href: "#productos", label: "Productos" },
  { href: "#petroleo", label: "División Petróleo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#export", label: "Exportación" },

  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-amc-border bg-amc-bg/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/hr-logo-notext.png"
              alt="Hugo Ramírez Minerales y fibras"
              width={200}
              height={200}
              className="h-24 w-24"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide">
                HUGO RAMÍREZ
              </p>
              <p className="text-xs text-amc-muted">
                Minerales y fibras para la industria
              </p>
            </div>
          </a>

          <nav className="hidden gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-amc-muted hover:text-amc-text transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="rounded-xl bg-amc-orange px-4 py-2 text-sm font-semibold text-black hover:bg-amc-orange-2 transition"
          >
            Cotizar
          </a>
        </div>
      </Container>
    </header>
  );
}
