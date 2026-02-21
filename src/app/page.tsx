import dynamic from "next/dynamic";
import ScrollSequence from "@/components/ScrollSequence";
import HeroVideo from "@/components/HeroVideo";

// Lazy-load below-the-fold sections for faster initial page load
const Manifesto = dynamic(() => import("@/components/Manifesto"), { ssr: true });
const Showcase = dynamic(() => import("@/components/Showcase"), { ssr: true });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: true });
const Process = dynamic(() => import("@/components/Process"), { ssr: true });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const CTAFooter = dynamic(() => import("@/components/CTAFooter"), { ssr: true });

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollSequence />

      <section className="relative z-30 min-h-screen flex items-center justify-center overflow-hidden -mt-[1px] bg-black">
        <HeroVideo />
      </section>

      <Manifesto />
      <Showcase />
      <Gallery />
      <Process />
      <Pricing />
      <Contact />
      <CTAFooter />
    </main>
  );
}
