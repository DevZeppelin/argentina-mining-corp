import Container from "./Container";

const stats = [
  { k: "10+ años", v: "Experiencia en desarrollo para petróleo" },
  { k: "Propios", v: "Yacimientos y abastecimiento controlado" },
  { k: "25 kg / Big Bag", v: "Formatos estándar de entrega" },
  { k: "15 días", v: "Anticipación para pedidos" },
];

export default function Stats() {
  return (
    <section className="border-y border-amc-border bg-black/20">
      <Container>
        <div className="grid gap-4 py-10 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-amc-border bg-amc-card p-5"
            >
              <p className="text-2xl font-semibold">{s.k}</p>
              <p className="mt-2 text-sm text-amc-muted">{s.v}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
