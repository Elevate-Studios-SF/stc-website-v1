import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SolutionsMethod from "./components/SolutionsMethod";
import CareTracks from "./components/CareTracks";
import Insurance from "./components/Insurance";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";

export default function V2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#D4E3FC]">
      <Navbar />
      <main className="flex-grow">
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <SolutionsMethod />
        </FadeInSection>
        <FadeInSection delay={0.15}>
          <CareTracks />
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <Insurance />
        </FadeInSection>
        <FadeInSection delay={0.25}>
          <Testimonials />
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <FAQ />
        </FadeInSection>
        <FadeInSection delay={0.35}>
          <FinalCTA />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
