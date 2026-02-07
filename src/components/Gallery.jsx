import Image from "next/image";
import Container from "./Container";

const images = [
  {
    src: "/gallery/bolsa cpf 50.jpeg",
    alt: "CPF-50 terminado",
  },
  {
    src: "/gallery/bolsas.jpeg",
    alt: "Envasado en bolsas de 25kg y Big Bag",
  },
  {
    src: "/gallery/pallets.jpeg",
    alt: "Producto paletizado",
  },
  {
    src: "/gallery/tilde mediano.jpeg",
    alt: "Diferentes categorías acorde a su necesidad",
  },

  {
    src: "/gallery/granel cerca.jpeg",
    alt: "Control de calidad y granulometría",
  },
  {
    src: "/gallery/aserrin.jpeg",
    alt: "",
  },
  {
    src: "/gallery/granel1.jpeg",
    alt: "",
  },
  {
    src: "/gallery/granel gris.jpeg",
    alt: "",
  },
  {
    src: "/gallery/granel montaña.jpeg",
    alt: "",
  },
  {
    src: "/gallery/tierra.jpeg",
    alt: "",
  },
  {
    src: "/gallery/tierra 2.jpeg",
    alt: "",
  },
  {
    src: "/gallery/tierra gruesa.jpeg",
    alt: "",
  },
];

export default function Gallery() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <p className="text-sm font-semibold text-[color:var(--color-amc-orange)]">
          Instalaciones y procesos
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Nuestra operación en imágenes
        </h2>

        <p className="mt-3 max-w-3xl text-[color:var(--color-amc-muted)]">
          Desde la recepción de la materia prima hasta el envasado y despacho,
          cada etapa está pensada para garantizar calidad, trazabilidad y
          consistencia del producto final.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-[color:var(--color-amc-border)] bg-[color:var(--color-amc-card)]"
            >
              {/* Imagen */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="
                  object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/70 via-black/30 to-transparent
                  opacity-0 transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

              {/* Texto */}
              <div
                className="
                  pointer-events-none
                  absolute bottom-0 left-0 right-0
                  translate-y-4 p-4
                  opacity-0 transition-all duration-500
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <p className="text-sm font-semibold">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
