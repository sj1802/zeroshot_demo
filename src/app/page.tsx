import HeroVideo from "@/components/HeroVideo";
import ScrollSequence from "@/components/ScrollSequence";
import Manifesto from "@/components/Manifesto";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollSequence />

      <section className="relative z-30 min-h-screen flex items-center justify-center overflow-hidden -mt-[1px] bg-black">
        <HeroVideo />
      </section>

      <Manifesto />
      <Gallery />
      <Process />
      <Pricing />
      <CTAFooter />
    </main>
  );
}
