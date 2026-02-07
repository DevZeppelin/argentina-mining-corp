import Container from "./Container";
import { amc } from "@/lib/amc-data";

export default function Process() {
  return (
    <section
      id="proceso"
      className="border-y border-amc-border bg-black/20 py-14 md:py-20"
    >
      <Container>
        <p className="text-sm font-semibold text-amc-orange">
          Proceso de industrialización
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Molienda por mallas y envasado a especificación
        </h2>
        <p className="mt-3 max-w-3xl text-amc-muted">
          El proceso se define según el mercado y la necesidad del cliente, con
          control de granaje y preparación final para despacho.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {amc.process.steps.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-2xl border border-amc-border bg-amc-card p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amc-orange/15 text-sm font-semibold text-amc-orange">
                  {idx + 1}
                </div>
                <p className="font-semibold">{s.title}</p>
              </div>
              <p className="mt-3 text-sm text-amc-muted">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-amc-border bg-linear-to-r from-amc-orange/15 to-transparent p-6">
          <p className="text-sm font-semibold">Nota</p>
          <p className="mt-1 text-sm text-amc-muted">{amc.process.note}</p>
        </div>
      </Container>
    </section>
  );
}
