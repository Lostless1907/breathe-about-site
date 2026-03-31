import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/features/landing/Hero";
import Mission from "@/features/landing/Mission";
import Features from "@/features/landing/Features";
import DataImpact from "@/features/landing/DataImpact";
import Team from "@/features/landing/Team";
import FinalCTA from "@/features/landing/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Features />
        <DataImpact />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}