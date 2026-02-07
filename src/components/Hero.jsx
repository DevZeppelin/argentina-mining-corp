import Image from "next/image";
import Container from "./Container";
import { amc } from "@/lib/amc-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/70 to-amc-bg" />
        <div className="absolute -top-24 left-1/2 h[420px] w[420px] -translate-x-1/2 rounded-full bg-amc-orange/15 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h[380px] w[380px] rounded-full bg-amc-steel/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amc-border bg-amc-card px-3 py-1 text-xs text-amc-muted">
              <span className="h-2 w-2 rounded-full bg-amc-orange" />
              {amc.location}
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              {amc.name}
            </h1>

            <p className="mt-4 text-amc-muted md:text-lg">{amc.tagline}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#productos"
                className="rounded-xl bg-amc-orange px-5 py-3 text-sm font-semibold text-black hover:bg-amc-orange-2 transition"
              >
                Ver productos
              </a>
              <a
                href="#proceso"
                className="rounded-xl border border-amc-border bg-amc-card px-5 py-3 text-sm font-semibold text-amc-text hover:border-amc-steel transition"
              >
                Conocer proceso
              </a>
            </div>

            <p className="mt-6 text-sm text-amc-muted">
              Pedido mínimo y logística a medida.{" "}
              <span className="text-amc-text font-medium">
                Producción en 25 kg o Big Bag.
              </span>
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-amc-border bg-amc-card p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm text-amc-muted">Enfoque</p>
                  <p className="text-lg font-semibold">
                    Calidad, trazabilidad y entrega
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["Fibras", "Orgánicas seleccionadas"],
                  ["Minerales", "Especificación industrial"],
                  ["Petróleo", "Control de pérdidas"],
                  ["Agua", "Perforación y soporte"],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="rounded-xl border border-amc-border bg-black/20 p-4"
                  >
                    <p className="text-sm font-semibold">{t}</p>
                    <p className="mt-1 text-xs text-amc-muted">{d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-linear-to-r from-amc-orange/20 to-transparent p-4 ring-1 ring-amc-border">
                <p className="text-sm font-semibold">Plazos</p>
                <p className="mt-1 text-sm text-amc-muted">
                  Pedidos con{" "}
                  <span className="text-amc-text font-medium">15 días</span> de
                  anticipación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
