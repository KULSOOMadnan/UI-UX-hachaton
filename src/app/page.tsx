import BrowseRange from "@/components/BrowseRange";
import HeroSection from "@/components/HeroSection";
import Navbar1 from "@/components/Navbar";
import OurProducts from "@/components/OurProducts";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection/>
      <BrowseRange/>
      <OurProducts/>
      <Services/>
    </div>
  );
}
