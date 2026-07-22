import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Process from "@/components/Process";
import WhyChooseMe from "@/components/WhyChooseMe";

export default function Home() {
  return (
    <main className="bg-cream">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedWork />
      <Process />
      <WhyChooseMe />
    </main>
  );
}
