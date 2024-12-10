
import BrowseRange from "@/components/BrowseRange";
import Furniture from "@/components/Furniture";
import HeroSection from "@/components/HeroSection";
import OurProducts from "@/components/OurProducts";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
      <BrowseRange />
      <OurProducts />
      {/* <BeautifulRoom/> */}
      {/* <Furniture /> */}
      <Services />
    </div>
  );
}
