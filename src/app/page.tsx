import BrowseRange from "@/components/BrowseRange";
import HeroSection from "@/components/HeroSection";
import OurProducts from "@/components/OurProducts";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrowseRange />
      <OurProducts />
      <Services />
    </div>
  );
}
