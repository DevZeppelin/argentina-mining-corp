import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Products from "@/components/Products";
import Divisions from "@/components/Divisions";
import Process from "@/components/Process";
import Values from "@/components/Values";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ExportBanner from "@/components/ExportBanner";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Products />
      <Gallery />
      <Divisions />
      <Process />
      <ExportBanner />
      <Values />
      <CTA />
      <Footer />
    </main>
  );
}
