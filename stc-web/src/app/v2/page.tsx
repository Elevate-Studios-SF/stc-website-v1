import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SolutionsMethod from "./components/SolutionsMethod";
import CareTracks from "./components/CareTracks";
import Insurance from "./components/Insurance";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function V2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#D4E3FC]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SolutionsMethod />
        <CareTracks />
        <Insurance />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
