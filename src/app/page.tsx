"use client";

import { Header } from "@/app/components/Header";
import { HeroContent } from "@/app/components/HeroContent";
import { VideosContent } from "@/app/components/VideosContent";
import { BenefitsContent } from "@/app/components/BenefitsContent";
import { Footer } from "@/app/components/Footer";

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
