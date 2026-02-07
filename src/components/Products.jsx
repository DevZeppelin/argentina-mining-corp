import Container from "./Container";
import { amc } from "@/lib/amc-data";

function Pill({ children }) {
  return (
    <span className="rounded-full border border-amc-border bg-black/20 px-3 py-1 text-sm text-amc-text">
      {children}
    </span>
  );
}

export default function Products() {
  return (
    <section id="productos" className="py-14 md:py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-amc-orange">Productos</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Fibras y minerales para aplicaciones exigentes
            </h2>
            <p className="mt-3 max-w-2xl text-amc-muted">
              Materias primas seleccionadas, molienda a especificación y
              opciones de empaque según necesidad del cliente.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-amc-border bg-amc-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Fibras</p>
              <span className="rounded-full bg-amc-orange/15 px-3 py-1 text-xs text-amc-orange">
                Origen vegetal
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {amc.products.fibras.map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
            <p className="mt-5 text-sm text-amc-muted">
              Ideales para obturación, mezclas técnicas y control de pérdidas de
              circulación según formulación.
            </p>
          </div>

          <div className="rounded-2xl border border-amc-border bg-amc-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Minerales</p>
              <span className="rounded-full bg-amc-steel/15 px-3 py-1 text-xs text-amc-silver">
                Industrial
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {amc.products.minerales.map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
            <p className="mt-5 text-sm text-amc-muted">
              Selección por pureza, granulometría y performance según aplicación
              (petróleo, agro e industria).
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
