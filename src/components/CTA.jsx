import Container from "./Container";
import { amc } from "@/lib/amc-data";

export default function CTA() {
  return (
    <section id="contacto" className="py-14 md:py-20">
      <Container>
        <div className="rounded-3xl border border-amc-border bg-linear-to-r from-amc-orange/18 via-amc-card to-amc-card p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">{amc.contact.ctaTitle}</h3>
              <p className="mt-3 text-amc-muted">{amc.contact.ctaText}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={amc.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-amc-orange px-5 py-3 text-sm font-semibold text-black hover:bg-amc-orange-2 transition"
                >
                  WhatsApp
                </a>
                <a
                  href={`mailto:${amc.contact.email}`}
                  className="rounded-xl border border-amc-border bg-amc-card px-5 py-3 text-sm font-semibold hover:border-amc-steel transition"
                >
                  Enviar email
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-amc-border bg-black/20 p-6">
              <p className="text-sm text-amc-muted">Contacto directo</p>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <span className="text-amc-muted">Email:</span>{" "}
                  <span className="font-semibold">{amc.contact.email}</span>
                </p>
                <p>
                  <span className="text-amc-muted">Tel:</span>{" "}
                  <span className="font-semibold">{amc.contact.phone}</span>
                </p>
                <p>
                  <span className="text-amc-muted">Sede:</span>{" "}
                  <span className="font-semibold">{amc.location}</span>
                </p>
              </div>

              <p className="mt-5 text-xs text-amc-muted">
                Tip: si ya tenés especificaciones (granulometría / aplicación /
                empaque), enviálas y aceleramos la cotización.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
