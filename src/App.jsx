import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollProgress } from "./components/ScrollProgress.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { ProductSection } from "./components/ProductSection.jsx";
import { ProductSpecSection } from "./components/ProductSpecSection.jsx";
import { AppEcosystemSection } from "./components/AppEcosystemSection.jsx";
import { SecuritySection } from "./components/SecuritySection.jsx";
import { StickyShowcase } from "./components/StickyShowcase.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { AdvantageSection } from "./components/AdvantageSection.jsx";
import { SolutionSection } from "./components/SolutionSection.jsx";
import { TeamSection } from "./components/TeamSection.jsx";
import { NewsSection } from "./components/NewsSection.jsx";
import { TrustSection } from "./components/TrustSection.jsx";
import { ServiceSection } from "./components/ServiceSection.jsx";
import { FaqSection } from "./components/FaqSection.jsx";
import { ContactSection } from "./components/ContactSection.jsx";
import { Footer } from "./components/Footer.jsx";

export function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1,
      lerp: 0.11,
    });

    let frameId = 0;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ProductSection />
      <ProductSpecSection />
      <AppEcosystemSection />
      <SecuritySection />
      <StickyShowcase />
      <AboutSection />
      <AdvantageSection />
      <SolutionSection />
      <TeamSection />
      <NewsSection />
      <TrustSection />
      <ServiceSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
