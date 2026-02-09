import Container from "./Container";

const countries = [
  { name: "Chile", code: "CL" },
  { name: "Uruguay", code: "UY" },
  { name: "Paraguay", code: "PY" },
  { name: "Bolivia", code: "BO" },
  { name: "Brasil", code: "BR" },
];

function CountryPill({ name, code }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-amc-border bg-black/20 px-3 py-1 text-sm">
      <span className="grid h-5 w-5 place-items-center rounded-full bg-amc-orange/15 text-xs font-semibold text-amc-orange">
        {code}
      </span>
      <span className="text-amc-text">{name}</span>
    </span>
  );
}

export default function ExportBanner() {
  return (
    <section id="export" className="py-10 md:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-amc-border bg-amc-card p-6 md:p-10">
          {/* Glow */}
          <div className="pointer-events-none absolute -top-24 left-10 h-64 w-64 rounded-full bg-amc-orange/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-amc-steel/10 blur-3xl" />

          <div className="relative grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold text-amc-orange">
                Exportación regional
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                HR Materiales exporta a países limítrofes
              </h2>

              <p className="mt-3 text-amc-muted">
                Abastecemos clientes en el Cono Sur con minerales y fibras
                industriales. Coordinamos empaque, documentación y logística
                según especificación y destino.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {countries.map((c) => (
                  <CountryPill key={c.code} name={c.name} code={c.code} />
                ))}
              </div>

              <p className="mt-5 text-sm text-amc-muted">
                <span className="font-semibold text-amc-text">Plazos:</span>{" "}
                pedidos con 15 días de anticipación. Formatos de entrega: 25 kg
                o Big Bag.
              </p>
            </div>

            <div className="rounded-2xl border border-amc-border bg-black/20 p-6">
              <p className="text-sm font-semibold">¿Sos de otro país?</p>
              <p className="mt-2 text-sm text-amc-muted">
                Enviá tu aplicación y destino. Te respondemos con
                disponibilidad, granulometría sugerida y opción de empaque.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-xl bg-amc-orange px-4 py-3 text-sm font-semibold text-black hover:bg-amc-orange-2 transition"
                >
                  Pedir cotización
                </a>

                <a
                  href="#productos"
                  className="inline-flex items-center justify-center rounded-xl border border-amc-border bg-amc-card px-4 py-3 text-sm font-semibold hover:border-amc-steel transition"
                >
                  Ver catálogo
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
