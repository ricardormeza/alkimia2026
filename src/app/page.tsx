import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BrandManifesto from "@/components/sections/BrandManifesto";
import HeroAlkimia from "@/components/sections/HeroAlkimia";
import HeroResponsive from "@/components/sections/HeroResponsive";
import IntroSplit from "@/components/sections/IntroSplit";
import PortafolioDos from "@/components/sections/PortafolioDos";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import StatsStrip from "@/components/sections/StatsStrip";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f8f8f8]">
      <Header active="inicio" />
      <main>
        <div className="md:hidden">
          <HeroResponsive />
        </div>
        <div className="hidden md:block">
          <HeroAlkimia />
        </div>
        <IntroSplit />
        <StatsStrip />
        <PortfolioPreview />
        <PortafolioDos />
        <BrandManifesto />
      </main>
      <Footer />
    </div>
  );
}
