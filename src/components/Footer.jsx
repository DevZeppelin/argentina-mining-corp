import Link from "next/link";
import Container from "./Container";
import { amc } from "@/lib/amc-data";

export default function Footer() {
  return (
    <footer className="border-t border-amc-border py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold">{amc.name}</p>
            <p className="mt-1 text-sm text-amc-muted">{amc.location}</p>
          </div>
          <div className="text-sm text-amc-muted">
            © {new Date().getFullYear()} Made in Mendoza, by{" "}
            <Link href="https://www.devzeppelin.com.ar" target="no_blank">
              <b>DevZeppelin</b>
            </Link>{" "}
            — Todos los derechos reservados.
          </div>
        </div>
      </Container>
    </footer>
  );
}
