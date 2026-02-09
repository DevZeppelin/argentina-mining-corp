import Image from "next/image";
import Container from "./Container";
import { amc } from "@/lib/amc-data";

export default function About() {
  return (
    <section id="empresa" className="py-14 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col mr-0 md:mr-12 justify-center">
            <p className="text-sm font-semibold text-amc-orange">Empresa</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Responsabilidad como valor fundamental
            </h2>
            <p className="mt-4 text-amc-muted">{amc.lead}</p>
            <p className="mt-4 text-amc-muted">{amc.experience}</p>
          </div>
          <div>
            <Image
              src="/hr-logo.png"
              alt="Hugo Ramírez Minerales y fibras"
              width={600}
              height={600}
              className="w-full"
            />
          </div>
        </div>
        <div className="rounded-2xl border border-amc-border bg-amc-card p-6 mt-12">
          <div className="rounded-xl bg-black/25 p-5 ring-1 ring-amc-border">
            <p className="text-sm font-semibold">Visión</p>
            <p className="mt-2 text-sm text-amc-muted">{amc.vision}</p>
          </div>

          <div className="mt-4 rounded-xl bg-black/25 p-5 ring-1 ring-amc-border">
            <p className="text-sm font-semibold">Filosofía</p>
            <p className="mt-2 text-sm text-amc-muted">{amc.philosophy}</p>
          </div>

          <div className="mt-4 rounded-xl bg-linear-to-r from-amc-steel/15 to-transparent p-5 ring-1 ring-amc-border">
            <p className="text-sm text-amc-muted">Sede</p>
            <p className="mt-1 font-semibold">{amc.location}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
