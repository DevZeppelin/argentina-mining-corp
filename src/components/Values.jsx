import Container from "./Container";
import { amc } from "@/lib/amc-data";

const values = [
  {
    title: "Responsabilidad",
    desc: "Cumplimiento, trazabilidad y compromiso real con cada entrega.",
  },
  {
    title: "Calidad",
    desc: "Selección de materia prima y control de granulometría por mallas.",
  },
  {
    title: "Transparencia",
    desc: "Procesos claros, comunicación directa y especificaciones verificables.",
  },
  {
    title: "Seguridad",
    desc: "Operación segura y ordenada, cuidando producto, personas y entorno.",
  },
];

export default function Values() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <p className="text-sm font-semibold text-amc-orange">
          Cultura y enfoque
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Una empresa seria, transparente y enfocada en resultados
        </h2>
        <p className="mt-3 max-w-3xl text-amc-muted">{amc.vision}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-amc-border bg-amc-card p-6"
            >
              <p className="font-semibold">{v.title}</p>
              <p className="mt-2 text-sm text-amc-muted">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-amc-border bg-black/20 p-6">
          <p className="text-sm font-semibold">Nuestra filosofía</p>
          <p className="mt-2 text-sm text-amc-muted">{amc.philosophy}</p>
        </div>
      </Container>
    </section>
  );
}
