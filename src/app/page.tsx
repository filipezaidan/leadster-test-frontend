import { BenefitsContent } from "./components/BenefitsContent";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroContent } from "./components/HeroContent";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroContent />
      <section style={{ width: "100%", height: "760px" }}>videos</section>
      <BenefitsContent />
      {/* VIDEOS */}

      <Footer />
    </main>
  );
}
