import { Header } from "./components/Header";
import { HeroContent } from "./components/HeroContent";
import { VideosContent } from "./components/VideosContent";
import { BenefitsContent } from "./components/BenefitsContent";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroContent />
      <VideosContent />
      <BenefitsContent />
      <Footer />
    </main>
  );
}
