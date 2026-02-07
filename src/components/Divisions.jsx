import Container from "./Container";
import { amc } from "@/lib/amc-data";

export default function Divisions() {
  return (
    <section id="petroleo" className="py-14 md:py-20">
      <Container>
        <p className="text-sm font-semibold text-amc-orange">
          División petróleo y perforación de agua
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          Aditivos y obturantes para control y performance
        </h2>
        <p className="mt-3 max-w-3xl text-amc-muted">
          Línea desarrollada para estabilización, control de filtración y
          pérdidas de circulación. (Fine / medium / coarse según necesidad).
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {amc.petroleumDivision.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-amc-border bg-amc-card p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold">{p.name}</p>
                  <p className="mt-2 text-sm text-amc-muted">{p.desc}</p>
                </div>
                <span className="shrink-0 rounded-full bg-amc-orange/15 px-3 py-1 text-xs font-semibold text-amc-orange">
                  {p.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
